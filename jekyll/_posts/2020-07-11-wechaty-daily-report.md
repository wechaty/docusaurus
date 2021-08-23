---
title: "用 Wechaty 实现工作日报管理系统"
author: zzhoouxin
categories: project
tags:
  - padplus
  - productivity
image: /assets/2020/wechaty-daily/daily.png
---

[![Wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-green.svg#align=left&display=inline&height=20&margin=%5Bobject%20Object%5D&originHeight=20&originWidth=132&status=done&style=none&width=132)](https://github.com/wechaty/wechaty)
[![Wechaty](https://img.shields.io/badge/Wechaty-%E5%BC%80%E6%BA%90%E6%BF%80%E5%8A%B1%E8%AE%A1%E5%88%92-green.svg#align=left&display=inline&height=20&margin=%5Bobject%20Object%5D&originHeight=20&originWidth=134&status=done&style=none&width=134)](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)

## 背景

我们日常每天都需要写日报,用来汇报今日工作内容和明日工作计划。日报内容维护在 wiki 里面。团队 TL 每天会去 wiki 上收集工作内容；在发送到公司大群。但是每天会有小伙伴会忘记写。 导致 TL 没办法收集今日内容。很是苦恼。还有每次编写都需要去 wiki 挨个复制每个人的。 工作效率很低；

## 思考

之前也了解过 wechaty，就想着是否可以做一个每天快下班提醒团队小伙伴，维护下工作日报。以及团队 TL 便捷获取团队所有日报的系统。不需要一个个复制；

## 项目地址

github:[https://github.com/zzhoouxin/wechaty-bot](https://github.com/zzhoouxin/wechaty-bot)

## 基础依赖

- [wechaty](https://github.com/wechaty/wechaty) --微信操作
- [node-schedule](https://github.com/node-schedule/node-schedule) --定时任务
- [superagent](https://github.com/visionmedia/superagent) --接口请求
- [cheerio](https://github.com/cheeriojs/cheerio#readme) -- 抓取数据
- [qrcode-terminal](https://github.com/gtanner/qrcode-terminal) --终端显示二维码

## 功能

- 定时提醒组内小伙伴填写工作日报以及发送工作日报到工作群
- 根据关键字自动发送日报内容
- 后续功能...(等待和小组人员讨论)

## 项目成果

- 日常提醒
    ![效果图](/assets/2020/wechaty-daily/daily.png)
- 定时发送日报
    ![效果图](/assets/2020/wechaty-daily/daily2.png)
- 根据关键字发送日报内容
    ![image.png](/assets/2020/wechaty-daily/daily3.png)

## 1.项目结构

![image.png](/assets/2020/wechaty-daily/daily4.png)

- bot 存放 wechaty 每个状态的回调函数
- schecdule 定时任务-获取日报并发送
- config 基本配置-链接、群号等
- tool 封装基础请求、公共方法
- index.js 启动入口

## 1.index.js -- wechaty 启动入口

```js
const {Wechaty} = require('wechaty')
const {PuppetPadplus} = require("wechaty-puppet-padplus");
const config = require('./config')
const onScan = require('./bot/onScan')
const onLogin = require('./bot/onLogin')
const onMessage = require('./bot/onMessage')
const onLogout = require('./bot/onLogout')
const bot = new Wechaty({
    puppet: new PuppetPadplus({
        token: config.TOKEN
    }),
    name: "小艾"
});
bot
    .on('scan', onScan)
    .on('login', onLogin(bot))
    .on('logout', onLogout)
    .on('message', onMessage(bot))
    .start()
    .then(() => console.log('开始登陆微信'))
    .catch(e => console.error(e))
```

这边使用的是[wechaty-puppet-padplus](https://github.com/wechaty/wechaty-puppet-padplus#readme)基于 ipad 协议进行开发的；`scan login logout message`这些是 Wechaty 的基础回调事件。

## 2.config 基础文件配置`这里面都是自己基于自己业务的参数-如果您也是用confluence wiki 那可以参考下`

```js
// 配置文件
module.exports = {
  // 每个人对应页面的ID
  ALL_USER_LIST: [
    { id: 27169291, name: '小人头'},
  ],
  WITHDRAWA_DATE: '00 50 17 * * *', //定时任务事件
  COLLOECT_DATE:'10 30 09 * * *', // 定时任务事件
  WIKI_URL: 'http://wiki.xxxxx.com/pages/viewpage.action?pageId=', //wiki内容地址
  TOKEN: 'puppet_padplus_xxxxx',//token
  ROOM: '22186778457@chatroom',//需要发送的群号
  KEYWORDs:['本组','全部']
};
```

![image.png](/assets/2020/wechaty-daily/daily5.png)

里面的 wiki_url 是我们自己平常填写日报的 wiki 地址。如果您使用其他方式-那就具体情况具体分析

## 3.定时任务提醒

- 在登录后启动定时任务

这边我们就使用到了- [node-schedule](https://github.com/node-schedule/node-schedule) 这个 node 库 当然可以配置他的启动时间。可以查看官网详细说明。

## 3.1 首页我们在 wechaty 的 onlogin 事件里面加入定时任务

```js
const dailyRemind = require('../schedule/dailyRemind')
const collectContent = require('../schedule/collectContent')
/**
 * 扫码登录
 * @param qrcode
 * @param status
 */
module.exports = bot => {
    return async function onLogin() {
        await dailyRemind(bot);//日常提醒
        await collectContent(bot);//所有汇总
    }
}
```

## 3.2 创建一个定时提醒的任务

- 通过 [bot.Room.find(id)](https://wechaty.js.org/v/zh/api/room#room-find-query-promise-less-than-room-greater-than) 找到需要提醒的群
- 在使用 [announce](https://wechaty.js.org/v/zh/api/room#room-announce-text-promise-less-than-void-or-string-greater-than) 创建群公告 @所有人 即可做到提醒

```js
const schedule = require('./index');
const config = require('../config');
const utils = require('../tool/utils')
module.exports =async  function dailyRemind(bot) {
    schedule.setSchedule(config.WITHDRAWA_DATE, async () => {
        if(!utils.judgeIsJob()){ //周末的话，不做提醒
           return false;
        }
       try {
           //提醒组内人发送日报
           const searchRoom = await bot.Room.find({ id: config.ROOM});
           await searchRoom.announce("快下班了~大佬们可以更新一下日报啦~/:@)")
       } catch (e) {
           console.log("error:",e.message);
       }
   });
}
```

## #4.根据关键字。发送日报内容

- 上图中 机器人会自动提示，需要回复什么关键字。当然这一步是我们自己配置的。在 config.js 里面有关键字配置属性。直接看代码

- 机器人自动回复-就需要在`message`事件里面处理啦-[message 的官方文档](https://wechaty.js.org/v/zh/api/message)

```js
// 监听对话
const { Message } = require('wechaty');
const config = require('../config');
module.exports = (bot) => {
  return async function onMessage(msg) {
    const contact = msg.from(); // 发消息人
    const content = msg.text(); //消息内容
    const room = msg.room(); //是否是群消息
    if (msg.self()) {
      return;
    }
    //如果是文本消息
    if (msg.type() == Message.Type.Text) {
      // await textJ(bot);
      if (room) {
        console.log('room===>', room);
        // 如果是群消息
        const topic = await room.topic();
        console.log(
          `群名: ${topic} 发消息人: ${contact.name()} 内容: ${content}`
        );
      } else {
        let info = `日报查询仅支持2种，回复【】内文字即可查询~\n`;
        config.KEYWORDs.map((v) => {
          info += '【' + v + '】' + '\n';
        });
        msg.say(info);
      }
    }
  };
};
```

## 5.获取自己需要的信息

- 上文中提交到我们有日报填写的地址
- 以及 [superagent](https://github.com/visionmedia/superagent)
- 和 [cheerio](https://github.com/cheeriojs/cheerio#readme)

2个依赖库-主要用到请求我们日报地址 并且获取所需要的内容

![image.png](/assets/2020/wechaty-daily/daily5.png)

这个是我们 wiki 文档的项目结构-我们首先需求通过 superagent 请求访问该页面-并且通过 cheero 获取内容。当然这 2 个依赖库使用。建议先熟悉一下官方文档。下文代码做了一些兼容--

```js
async function collectUserContent() {
  let str = '';
  for (let user of config.ALL_USER_LIST) {
    const url = `${config.WIKI_URL}${user.id}`;
    const res = await fetch(url);
    let $ = cheerio.load(res.text);
    // const data = $('.wiki-content .p1').text();
    str += `\n ${user.name} \n`;
    $('.wiki-content p').each(function (i, e) {
      let text = $(e).text();
      if (text !== '\xa0') {
        str += ` ${text} \n`;
      }
    });
    $('.wiki-content .p1pkss0x').each(function (i, e) {
      let html = $(e).children();
      if (html.length === 0) {
        let text = $(e).text();
        if (text !== '\xa0') {
          str += ` ${text} \n`;
        }
      }
    });

   $('.wiki-content .pd7nslm').each(function (i, e) {
      let html = $(e).children();
      if (html.length === 1) {
        let text = $(e).text();
        if (text !== '\xa0') {
          str += ` ${text} \n`;
        }
      }
    });
  }
  return str;
}
```

`获取到自己需要的内容，依旧可以通过room.say发送出去`;

至此我们一个简单的日报收集的系统机器人简单的实现了。

## 总结

相信很多公司都有发送日报的要求,以上代码实现也是依赖了自己所需业务场景进行实现。通过 wechaty 改变了我们传统的工作流程。大大的提高了工作效率。避免很多重复行为。当然还有更多好玩有趣的功能区可以加入。希望自己可以和团队进行沟通，提高我们流程。大家可以参考以上流程。

> 作者: [zzhoouxin](https://github.com/zzhoouxin/)
> Code: [Github](https://github.com/zzhoouxin/wechaty-bot)
