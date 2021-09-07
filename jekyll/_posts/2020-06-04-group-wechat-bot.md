---
title: "使用Wechaty开发微信群管理小助手"
author: pxingwei
categories: project
tags:
  - padplus
  - real-estate
image: /assets/2020/group-wechat-bot/2020-06-04-group-wechat-bot.png
---

我们设计了一个租房平台的微信小程序，为了方便推广，针对每个地区开设了一个或多个微信群，每天会在群里发文字和小程序的二维码来推广小程序和阐述群规定。因为所开的群太多，如果是人工发送这些东西，会很浪费时间。因为发的东西都是固定的，所以考虑使用微信机器人。

## 具体实现

1. 代码repository

```bash
git clone git@github.com:isnl/wechat-robot.git
```

1. 代码结构

- bot.js: 项目入口文件，实现了扫码微信，登录登出功能。
- daily-job.js: 群发逻辑的实现函数，可以自定义每天发送的文字以及发送时间。

## 安装依赖

- npm install wechaty@latest
- npm install wechaty-puppet@latest
- npm install wechaty-puppet-padplus@latest
- npm install qrcode-terminal
- npm install node-schedule
- sudo npm install ts-node typescript -g

## 代码实现

### 扫描二维码登录

这个功能主要依赖qrcode-terminal，代码实现如下：

```js
function onScan(qrcode, status) {
  if (status === ScanStatus.Waiting || status === ScanStatus.Timeout) {
    require('qrcode-terminal').generate(qrcode, {
      small: true
    }) // show qrcode on console

    const qrcodeImageUrl = [
      'https://api.qrserver.com/v1/create-qr-code/?data=',
      encodeURIComponent(qrcode),
    ].join('')

    log.info('StarterBot', 'onScan: %s(%s) - %s', ScanStatus[status], status, qrcodeImageUrl)

  } else {
    log.info('StarterBot', 'onScan: %s(%s)', ScanStatus[status], status)
  }
}
```

### 定时发送消息的功能

主要是依赖node-schedule，通过修改schedule的format可以指定在每天的什么时候发送消息。

```js
// *    *    *    *    *    *
// ┬    ┬    ┬    ┬    ┬    ┬
// │    │    │    │    │    │
// │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
// │    │    │    │    └───── month (1 - 12)
// │    │    │    └────────── day of month (1 - 31)
// │    │    └─────────────── hour (0 - 23)
// │    └──────────────────── minute (0 - 59)
// └───────────────────────── second (0 - 59, OPTIONAL)
```

## 运行代码

```bash
node bot.js
```

## 测试效果

![avatar](/assets/2020/group-wechat-bot/2020-06-04-group-wechat-bot.png)

> 作者: [Sam](https://github.com/PXingwei/)
> Code: [Github](https://github.com/PXingwei/GroupWechatBot)
