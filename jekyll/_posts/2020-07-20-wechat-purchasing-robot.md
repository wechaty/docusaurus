---
title: "微信代购机器人（WeChat Purchasing Robot）"
author: zoudingyi
categories: project
tags:
  - padplus
  - ecommerce
image: /assets/2020/wechat-purchasing-robot/header.jpg
---

[![Wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-green.svg#align=left&display=inline&height=20&margin=%5Bobject%20Object%5D&originHeight=20&originWidth=132&status=done&style=none&width=132)](https://github.com/wechaty/wechaty)
[![开源激励计划](https://img.shields.io/badge/Wechaty-%E5%BC%80%E6%BA%90%E6%BF%80%E5%8A%B1%E8%AE%A1%E5%88%92-green.svg#align=left&display=inline&height=20&margin=%5Bobject%20Object%5D&originHeight=20&originWidth=134&status=done&style=none&width=134)](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)

## 背景

女朋友在做代购，加了很多微信好友和微信群，所以每天会有很多人前来咨询商品信息以及商品价格，因此想做一个管理机器人，用于自动回复消息、群管理以及自动添加好友，以及用户发送商品关键词能够自动回复相应商品信息。

## 功能

- [x] 自动处理好友请求
- [x] 私聊关键字回复
- [x] 通过指令完成指定任务
- [x] 群管理（拉人进群、踢人出群、@群成员）
- [x] 发送图片、链接、名片

在有人咨询商品信息的时候，比如发送有关于【香水】的话题，便自动回复有在售出的香水商品列表，包含了商品不同尺寸下的价格。

![效果图](/assets/2020/wechat-purchasing-robot/sell.png)

### 结构

```js
|-- img                     # 储项目所使用到的图片与其他相应资源。
|-- src/
|---- listeners/
|------ on-scan.js          # 机器人需要扫描二维码时监听回调
|------ on-room.js          # 进入房间监听回调
|------ on-message.js       # 消息监听回调
|------ on-friend.js        # 好友添加监听回调
|---- config.js             # 配置文件
|---- index.js              # 入口文件
|-- package.json
```

## 依赖

wechaty：wechaty 核心库  
wechaty-puppet-padplus：wechaty的ipad协议实现

## 代码介绍

```javascript
// init
const bot = new Wechaty({
  puppet: new PuppetPadplus({
    token: config.token
  }),
  name: config.name
})

bot.on('scan', onScan) // 机器人需要扫描二维码时监听
bot.on('login', (user) => log.info('StarterBot', '%s login', user))
bot.on('logout', (user) => log.info('StarterBot', '%s logout', user))
bot.on('message', onMessage(bot)) // 消息监听
bot.on('friendship', onFriendShip) // 添加好友监听
bot.on('room-join', onRoomJoin) // 加入房间监听


bot
  .start()
  .then(() => {
    log.info('StarterBot', 'Starter Bot Started.')
  })
  .catch((e) => log.error('StarterBot', e))

```

## 本地运行

- 克隆项目

```shell
git clone https://github.com/zoudingyi/wechaty-robot.git

cd wechaty-robot
```

- 安装依赖

```shell
npm install
```

- 启动项目

```shell
npm run serve
```

## 使用

1. 打开`src/config.js` 文件
2. 修改`config`配置
3. 运行项目

## 其他功能效果

![效果图](/assets/2020/wechat-purchasing-robot/chat.png)

## 致谢

非常感谢Wechaty团队提供微信机器人SDK，让开发者可以专注于业务代码。  
感谢句子互动提供的pad协议版token。  
wechaty: <https://wechaty.github.io/>  
juzibot: <https://www.juzibot.com>

> 作者: [DevoZou](https://github.com/zoudingyi/)
> Code: [Github](https://github.com/zoudingyi/wechaty-robot)
