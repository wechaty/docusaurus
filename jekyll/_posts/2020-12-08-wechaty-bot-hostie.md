---
title: "基于Wechaty开发的群聊小助手"
author: mumup
categories: project
tags:
  - nodejs
  - donut
  - social
image: /assets/2020/wechaty-bot-hostie/img-func.webp
---

> 作者: [Penley](https://github.com/mumup) 前端开发工程师
> Code: [Github](https://github.com/mumup/cat-room) 微信机器人，群聊小助手

## wechaty

GitHub 上搜了一圈，看到了挺多微信 bot 的方案，后面决定使用 wechaty，因为感觉设计得很优雅，6 行代码就可以轻松构建一个 wxbot。

- [官方文档](https://wechaty.js.org/docs/)

文档近期正在频繁更新中

目前的需求很简单，在猫群里置放一个可以唠嗑可以玩游戏的机器人

实现了几个功能

- 成语接龙
- 看图猜成语
- 接入了图灵机器人

未实现

- 根据前一天聊天内容生成词云
- 猫粮查询
- 猫疾病的查询

目前图灵机器人聊天使用了第三方的接口，需要注册[天行 api](https://www.tianapi.com/)方可使用，token 需填入.env 文件中

核心代码

```js
const bot = new Wechaty({
  puppet: "wechaty-puppet-service",
  puppetOptions: {
    token,
  },
});

bot
  .on("scan", (qrcode, status) => {
    if (status === ScanStatus.Waiting) {
      QrcodeTerminal.generate(qrcode, {
        small: true,
      });
    }
  })
  .on("login", async (user) => {
    console.log(`user: ${JSON.stringify(user)}`);
  })
  .on("error", (error) => {
    console.error(error);
  });

async function main() {
  await bot.start();

  //  储存一波数据
  let store: any = [];

  _config.activeRoomIds.forEach(async (item) => {
    const room = await bot.Room.find({ topic: item });
    if (room) {
      store.push({
        id: room.id,
        active: "",
      });

      // 群信息
      room.on("message", async (message) => {
        roomMessageHandler(message, room, store);
      });
      room.on("join", (inviteeList, inviter) => {
        roomJoinHandler(room, inviteeList, inviter);
      });
    }
  });
}

main();
```

由于 padplus 马上要废弃，所以使用的是 puppet-service，具体 api 可以查看官网文档，目前有少许功能并未实现，比较遗憾，等后续功能更加完善，准备用 vue3+express 做一个后台的管理系统，方便管理机器人。

## 安装

```sh
npm install
```

## 运行

```sh
npm run main
```
