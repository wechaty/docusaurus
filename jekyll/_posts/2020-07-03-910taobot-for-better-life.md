---
title: "910taoBot-为了美好的生活"
author: chengaopan
categories: project
tags:
  - padplus
  - productivity
image: /assets/2020/910taobot/panda.jpg 
---

1. 由于现在工作生活加了好多的微信群,并且这些群里的消息不一定每条都是你想看的，所以为了防止过多的消息提醒,所以会把群消息给屏蔽掉。但是这样有可能会错过一些@自己 或者需要自己回复的一些消息。因此想要弄一个微信机器人，潜伏在这些微信群。遇到有@设定人之后 把消息转发给自己。以达到提醒自己的目的。以防错过一些重要消息。
2. 同时还可以让机器人成为生活助手，定时发送天气预报、智能聊天、查快递......

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
        ├── replyToAMessage.js
        ├── 更多功能待实现
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

}
```

对于消息的处理，有时候要预防自己和自己对话导致的死循环，与消息时间过期的问题。

## 运行项目

### 前期准备工作

1. 申请 Wechaty Puppet Token，本项目使用的是 padplus，详情可参考 [Everything about Wechaty](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)
2. 找到自己想要用的 [七彩API(免费)](http://api.7cyd.com/)

上述申请完毕后，请将对应的 Token 填写到 config/config.template.js 文件中，并将 config.template.js 修改为 config.js 文件

### 运行

1. npm install
2. npm run
3. 扫码登陆微信
4. 开启bot之旅吧~

### 致谢

- 感谢[Wechaty](https://wechaty.github.io)团队提供这么好的一个工具，让我们开发者可以持续增强我们的国民级应用。希望能够有更多的人参与进来，来继续扩大wechaty的生态圈。
- 感谢[句子互动](https://www.juzibot.com)提供的api-token

> 作者: [chengaopan](https://github.com/chengaopan)
> 源码: [Github](https://github.com/chengaopan/910taoBot)
