---
title: "微信群积分机器人（Wechat group integral robot）"
author: hzhuhao
categories: project
tags:
  - padplus
  - ecommerce
image: /assets/2020/wechat-group-integral-robot/header.webp
---

[![Wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-green.svg#align=left&display=inline&height=20&margin=%5Bobject%20Object%5D&originHeight=20&originWidth=132&status=done&style=none&width=132)](https://github.com/wechaty/wechaty)
[![开源激励计划](https://img.shields.io/badge/Wechaty-%E5%BC%80%E6%BA%90%E6%BF%80%E5%8A%B1%E8%AE%A1%E5%88%92-green.svg#align=left&display=inline&height=20&margin=%5Bobject%20Object%5D&originHeight=20&originWidth=134&status=done&style=none&width=134)](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)

## 背景

女朋友做微商代理卖水果，建了一个卖水果的微信群，为了维持群里的活跃度，有时候会弄一些积分送水果的活动，对于群成员的积分管理只能靠手动记分来维护，这样操作起来其实挺辛苦的。因此想做一个自动记分的群管理机器人，手动@用户就可以给用户加积分，这样就不用一个一个手动改备注积分啦，后期统计起来也很方便。

## 功能

- [x] 自动处理好友请求
- [x] 通过@成员给成员加积分
- [x] 群管理（拉人进群、@群成员）

当用户在群里发好评时，@该用户会给用户添加自定义积分。

![效果图](/assets/2020/wechat-group-integral-robot/wxscreen.webp)

### 结构

```js
|-- config/
|------config.js            # 用于存储机器人的一些配置以及群配置。
|---service                 # eggJs 搭建的数据接口
|-- src/
|-----  integral.js         # 积分业务逻辑处理
|-----  onScan.js           # 机器人需要扫描二维码时监听回调
|------ onRoomJoin.js       # 进入房间监听回调
|------ onMessage.js        # 消息监听回调
|------ onFriendShip.js     # 好友添加监听回调
|------ postServer.js       # 消息回复的处理
|------ superagent.js       # ajax 接口调用的封装
|---- config.js             # 配置文件
|---app.js                  # 入口文件
|-- package.json
```

### 服务层

服务层是用eggJs 搭建 配置起来超级简单，使用mysql作为数据持久化存储。具体可参考官网配置。

## 依赖

wechaty：wechaty 核心库  
wechaty-puppet-padplus：wechaty的ipad协议实现

## 代码介绍

```javascript
import { Wechaty }  from 'wechaty' // Wechaty核心包
import { PuppetPadplus }  from 'wechaty-puppet-padplus' // padplus协议包
import config  from './config/config' // 配置文件
import onScan  from './src/onScan' // 机器人需要扫描二维码时监听回调
import onRoomJoin  from './src/onRoomJoin' // 加入房间监听回调
import onMessage  from './src/onMessage' // 消息监听回调
import onFriendShip  from './src/onFriendShip' // 好友添加监听回调

// 初始化
const bot = new Wechaty({
    puppet: new PuppetPadplus({
        token: config.token
    }),
    name: config.name
})
bot
    .on("scan", onScan) // 机器人需要扫描二维码时监听
    .on("room-join", onRoomJoin) // 加入房间监听
    .on('login', (user) => {
        console.log(`user ${user} login`)
    })
    .on("message", onMessage(bot)) // 消息监听
    .on("friendship", onFriendShip) // 好友添加监听
    .start()

```

## 本地运行

- 克隆项目

```shell
git clone https://github.com/hzhuhao/wechaty-integral-robot.git

cd wechaty-integral-robot
```

- 安装依赖机器人所需依赖

```shell
npm install
```

- 安装serve服务依赖

```shell
cd service
npm install

// 启动服务
npm start
```

- 启动项目

```shell
npm start
```

## 使用

1. 打开`config/config.js` 文件
2. 修改`config`配置
3. 进入 `service/config` 修改服务配置 以及 配置mysql数据库
4. 运行项目

## 致谢

非常感谢Wechaty团队提供微信机器人SDK，让开发者可以专注于业务代码。  
感谢句子互动提供的pad协议版token。  
wechaty: <https://wechaty.github.io/>  
juzibot: <https://www.juzibot.com>

> 作者: [Hzhuhao](https://github.com/hzhuhao/)
> Code: [Github](https://github.com/hzhuhao/wechaty-integral-robot)
