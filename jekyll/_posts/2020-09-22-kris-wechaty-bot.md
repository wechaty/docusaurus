---
title: "基于wechaty实现的简易群管理小助手"
author: kris-yi
image: /assets/2020/kris-wechaty-bot/screenshot.png
categories: project
tags:
  - wechaty
  - wechaty-puppet-padplus
  - nodejs
---

简易的群管理小助手

## 初识wechaty

我自己有几个群要进行管理，天天都有几十个人加我然后邀请进群，这些又是一些重复性的工作，所以就想做一个机器人来替代这部分工作，然后就在网上找资料，无意间看到了wechaty，了解下来之后，感觉很简单而且能满足我的需求。

由于对 Typescirpt 不了解，花了几天时间来熟悉熟悉，看了框架源代码之后，对于框架的基本使用还是比较了解了，下面我们开始进入正题。

## 项目主要功能

 - 自动同意好友申请
 - 同意好友申请后邀请进群
 - 当收到好友私聊信息后自动回复

## 环境

Ubuntu

## 开始

照着[官方文档](https://github.com/wechaty/wechaty-puppet-padplus) 配置好环境

创建文件夹，我的文件夹名字叫 `wechatBot`：
 ```shell script
#安装依赖
npm install
#复制.env文件
cp .env.example .env
#配置name和token
vim .env
#运行机器人
node bot.js
```

上面我们新建了文件 `bot.js`，这个文件就是主程序了：

```typescript
const {Wechaty, Friendship, Contact} = require('wechaty')
const {PuppetPadplus} = require('wechaty-puppet-padplus')
require('dotenv').config();

const token = process.env.token
const puppet = new PuppetPadplus({
    token
})

const bot = new Wechaty({name: process.env.name, puppet})
    .on('scan', onScan)
    .on('login', user => console.log(user))
    .on('message', onMsg)
    .on('friendship', onFriendship)
bot.start()

/**
 * 扫码登录
 * @param qrcode
 * @param status
 */
function onScan(qrcode, status) {
    require('qrcode-terminal').generate(qrcode, {small: true})
    const qrcodeImageUrl = [
        'https://wechaty.js.org/qrcode/',
        encodeURIComponent(qrcode)
    ].join('')
    console.log(status, qrcodeImageUrl)
}

/**
 * 收到好友消息自动回复
 * @param msg
 * @returns {Promise<void>}
 */
async function onMsg(msg) {
    //收到好友消息，自动回复
    if (!msg.room() && !msg.self() && msg.from().type() === Contact.Type.Individual) {
        await msg.say(`本消息为自动回复 1、拼多多没办法有偿助力；2、可以有偿助力的有：淘宝京东领券，可以在淘宝可以上找客服回复"淘宝京东有偿助力"；`)
    }
}

/**
 * 收到好友申请自动同意并拉入指定的群
 * @param friendship
 * @returns {Promise<void>}
 */
async function onFriendship(friendship) {
    if (friendship.type() === Friendship.Type.Receive) {
        //同意好友申请
        friendship.accept()
        //查询当前好友
        const contact = await bot.Contact.find({
            id: friendship.contact().id
        })
        //群ID
        let roomId = "22178701187@chatroom"
        //查询群
        const room = await bot.Room.find({
            id: roomId
        })
        //给好友发送入群邀请
        if (contact && room) {
            try {
                await room.add(contact)
            } catch (e) {
                console.log(e)
            }
        }
    }
}
```

启动服务：

```shell script
node bot.js
```

大功告成！
