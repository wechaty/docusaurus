---
title: "使用 SQLite 和 pullword 实现简易的业务助手"
author: moderncrazy
categories: tutorial
tags:
  - sqlite
image: /assets/2020/sqlite-wechat/2020-03-sqlite-wechat-assistant.webp
---

需求之初是，希望有一个机器人能够替我们完成各种机械式的操作，来提高我们的工作效率。

业务背景是客户需要一个消息中心系统，对接多种第三方推送平台，内部系统通过我们发送通知，一边是三方平台一边是内部系统，两边的对接需要提供各种文档和脚本，还需要配合QA测试及查询发送状态，有时有3-4个群同时@我们，工作效率严重下降。

所以我们想能否做一个自动化的机器人来替代我们，完成这些机械式的动作，最终我们找到了Wechaty。

好了，废话少说进入正题！

## 调研

最开始我们发现市面上有很多“傻瓜式”微信机器人，只能根据关键字回复固定内容，这显然不符合我们的需求，通过Google我们找到两款基本符合我们需求的产品。

- [Wechaty](https://github.com/wechaty/wechaty)是适用于微信个人帐户的Bot SDK ，可以帮助您使用6行javascript创建一个机器人...
- [微控API](https://docs.wkteam.cn/)是一套商业的的微信个人号接口，它能监测微信中的各种事件，并辅助微信执行各种操作...

根据我们的情况我们选择Wechaty，原因：Wechaty提供SDK方便本地调试，微控API需要外网IP不方便内网使用。

## 基础环境

NodeJS v10.15+  

SQLite 3

PM2 v3.5.1+

## 配置数据库

考虑到我们的需求相对简单，所以使用SQLite进行简单的数据存储。

创建数据库：

```shell
sqlite3 assistant.db
```

创建表：

```sql
-- 操作表
create table action_tb
(
    id          integer not null primary key autoincrement,
    keyword     text    not null unique,
    operation   text    not null,
    create_date integer not null default (strftime('%s', 'now')),
    update_date integer not null default (strftime('%s', 'now'))
);

-- 权限表
create table power_tb
(
    id          integer not null primary key autoincrement,
    user_id     text    not null,
    action_id   integer not null,
    create_date integer not null default (strftime('%s', 'now')),
    update_date integer not null default (strftime('%s', 'now')),
    foreign key (action_id) references action_tb (id)
);

-- 关键字表 用户提问时附带的关键字（value）可能不统一 统一修改为（name）
create table keyword_tb
(
    id          integer not null primary key autoincrement,
    name        text    not null,
    value       text    not null unique,
    create_date integer not null default (strftime('%s', 'now')),
    update_date integer not null default (strftime('%s', 'now'))
);
```

根据表结构大概可以看出，我们做了简单的权限验证，并根据用户提问的关键字设置了不同的操作。

## 项目思路

我们可以将用户的提问的看作route，专门创建一个message.js充当router。

```js
// index.js

// 使用ipad协议
const puppet = new PuppetPadplus({token: config.wechatyToken});

// 创建一个机器人
const bot = new Wechaty({name: config.botName, puppet});

...

// 收到消息事件
bot.on('message', async (msg) => {
  await message.index(bot, msg)
});
```

根据我们的需求，我们只需要捕获与机器人交互的信息，并将它们格式化。

```js
// message.js

...

/**
 * 用于接收消息 并分发
 * @param bot
 * @param message
 * @return {Promise<void>}
 */
async index(bot, message) {
  // 当有人在群中@我或者私聊时 再处理
  if ((message.room() && (await message.mentionSelf())) || !message.room()) {
    try {
      // 打印原始数据
      logger.log('info', `from:${message.from().name()}/room:${message.room() ? await message.room().topic() : null}/text:${message.text()}`);
      // 将消息内容格式化
      let msgData = messageUtil.formatMessage(message.text());
      // 查询 消息 action
      let action = await messageService.queryActionByKeyword(msgData);
      // 格式化消息里的字段
      msgData = await messageService.unificationMsgData(msgData);
      // 如果查到 action 则继续 否则提示错误
      if (action) {
        // 校验权限
        if (await powerService.verifyActionPower(message.from().id, action.id)) {
          // 执行操作
          switch (action.operation) {
            case 'queryRequest':
              await this.queryStatus(bot, message, msgData);
              break;
          }
        } else {
          await messageService.sendMessageByMsg(message, '抱歉，你暂时没有这个权限');
        }
      } else {
        await messageService.sendMessageByMsg(message, '你可以这样问我：\n查询状态');
      }
    } catch (e) {
      await messageService.sendMessageByMsg(message, '抱歉短路了，重试一下吧！');
    }
  }
},

...
```

在判断应该走哪一个操作（action）时，我们考虑到用户的消息可能并不规范，我们选用了[Pullword](http://api.pullword.com/)对消息进行分词处理，根据关键词匹配`action_tb`表里的`keyword`字段。

接下来，我们就根据不同的`action`来进行不同的业务查询。

```js
/**
 * 查询状态
 * @param bot
 * @param message
 * @param msgData = {phone,?email}
 * @return {Promise<void>}
 */
async queryStatus(bot, message, msgData) {
  const {phone, email} = msgData;
  try {
    let returnMsg = '请参照如下格式提问：\n查询状态\n手机号:13000000000\n邮箱(可选):example@xxx.com';
    // 如果 phone 不存在 则发送提示语
    if (phone) {
      // 如果存在 email 则查询详细信息 否则查询统计信息
      if (email) {
        let result = await requestService.queryStatusDetail(phone, email);
        // 这整理错误和成功的发送消息
        if (!result.error) {
          returnMsg = `手机号为:${phone}，邮箱为:${email}的状态如下：\n` +
            `状态:${messageUtil.customMsgStateToZh(result.state)}\n` +
            `时间:${result.time}\n`;
        } else {
          returnMsg = '未查询到该状态，可能是手机号或邮箱错误';
        }
      } else {
        ···
      }
    }
    await messageService.sendMessageByMsg(message, returnMsg);
  } catch (e) {
    logger.log('warn', {text: message.text(), msgData, err: e.message});
    await messageService.sendMessageByMsg(message, '我好像有点问题，重问一下试试！');
  }
}
```

至此我们的小助手基本框架已经搭好。

## 运行效果

粗略演示一下 ￣▽￣"

| 小助手 |                                                              | 用户 |
| ------ | ------------------------------------------------------------ | ---- |
|        | @小助手 查询消息状态 \n 手机号：1300000000 \n 邮箱：xxx@example.com | <-   |
| ->     | 手机号为:13000000000，邮箱为:xxx@example.com的状态如下： \n 状态:成功 \n 时间:2020-03-01 12:12:00 |      |

## 感谢

在最后我们要感谢所有为我们提供工具和服务的团队和个人。特别感谢开源项目[Wechaty](https://github.com/wechaty/wechaty)团队和免费提供服务的[Pullword](http://api.pullword.com/)团队。

> 作者: [moderncrazy](https://github.com/moderncrazy)，个人开发者。首发于博客: [使用 SQLite 和 pullword 实现简易的业务助手](https://wechaty.github.io/sqlite-wechat-assistant/) 遵循 CC BY-NC-SA 3.0 CN

[![WechatAssistant](/assets/2020/sqlite-wechat/2020-03-sqlite-wechat-assistant.webp)](https://github.com/moderncrazy/wechat_assistant)
