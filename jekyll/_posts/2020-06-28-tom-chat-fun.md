---
title: "TomChat-为生活增趣味"
author: zophyr
excerpt: "A chatbot by wechaty.You can learn about today in history, current weather and chat with Tom."
image: /assets/2020/tom-chat/zelda.jpg 
categories: project
tags:
  - assistant
  - productivity
  - entertainment
---

在规律平凡的生活中，希望可以有一个小管家来帮自己完成日常的任务，比如天气汇报、消息记录、随叫随到的聊天打发时间，因此 TomChat 应运而生。它可以为你提供天气查询，给予穿衣意见、运动建议；也可以为你述说历史上的今天，可做今日与同事好友的聊天话题；也可以在不愿打扰别人的时候，和它聊天，博君一笑。

## 项目结构

```shell
.
├── LICENSE
├── README.md
├── config
│   └── config.template.js
├── img
│   └── xxx.jpeg
├── package.json
└── src
    ├── bot.js
    ├── handler
    │   ├── onMessage.js
    │   └── onScan.js
    └── tool
        ├── autoChat.js
        ├── historyToday.js
        ├── log.js
        ├── nasa.js
        ├── tomato.js
        └── weather.js
```

### src

- 项目核心代码放在 src 中，其中 bot.js 为入口文件，作为程序的启动与入口。
- handler 文件夹中存放处理 wechaty 相应事件的函数。
- tool 文件夹中存放单个功能点，可供随时调用。

### img

该文件夹用于存储项目所使用到的图片与其他相应资源。

### config

该文件夹中存放相应的配置文件，用于统一管理。

## 代码介绍

### 入口文件

```javascript
// 初始化
const bot = new Wechaty({
  puppet: new PuppetPadplus({
    token: config.token,
  }),
  name: config.name,
});

bot
  .on("scan", onScan) // 机器人需要扫描二维码时监听
  .on("login", (user) => console.log(`User ${user} logined`))
  .on("message", onMessage(bot)) // 消息监听
  .start();
```

该段代码作为启动文件，我们先建立了使用 padplus 的 wechaty；并在后续监听三个事件，并每个事件有对应的处理函数。

### onMessage

```javascript
async function onMessage(msg) {
  // 判断消息来自自己或三分钟前的消息，直接return
  if (msg.self() || msg.age() > 180) return;

  logMSG(msg);

  // 对 msg 的处理
  ///
  ////
  /////
}
```

对于消息的处理，有时候要预防自己和自己对话导致的死循环，与消息时间过期的问题。

## 运行项目

### 前期准备工作

1. 申请 Wechaty Puppet Token，本项目使用的是 padplus，详情可参考 [Everything about Wechaty](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)
2. 申请[和风天气](https://dev.heweather.com/)天气 api 权限
3. 申请[小思机器人](https://www.ownthink.com/)对话机器人权限
4. 申请[阿凡达数据提供商](https://www.avatardata.cn/)中的历史上的今天接口权限

上述申请完毕后，请将对应的 Token 填写到 config/config.template.js 文件中，并将 config.template.js 修改为 config.js 文件

### 运行

1. npm install
2. npm run
3. 扫码登陆微信
4. enjoy！

> 作者: [Zophyr](https://github.com/Zophyr)
> 源码: [Github](https://github.com/Zophyr/TomChat)
