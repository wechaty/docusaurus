---
title: "使用Wechaty管理你的顾客"
author: kylin93cn
categories: project
tags:
  - padplus
  - social
image: /assets/2020/manage-ur-customers/2020-0517-wechat.webp
---

作为一个店面开了十多年个体工商户，积攒了很多的客户。希望能够减少人为的操作，去解决一些常见的问题，比如：

- 群人数超过一定限额，群二维码失效，需要手动拉人
- 最新的活动通知

## Wechaty 和 Puppet

[`Wechaty`](https://github.com/wechaty/wechaty) 提供了群组管理、收发消息等接口，能够方便地满足计划需求。

由于 `Wechaty` 本身只是一个控制器，因此其对微信功能的执行需要依赖于微信客户端协议与服务器进行通信。`puppet` 就是这些协议的具体承载者，现在有基于 Web / iPad / Mac 等协议的多种实现。经过测试，首先排除了 Web 协议：由于腾讯的限制，近年新注册的微信账号都无法使用网页协议，而老账号又实在过于珍贵。所以，使用了`PuppetPadplus`。

## 架构

- 目标：用最简单的方式实现向特定的若干微信群转发消息
- 功能：
  1. 账号登录
  2. 好友申请自动通过并回复消息功能菜单
  3. 根据指令消息做出对应的操作，比如： 拉群，提供最新活动等
- 方案：
  1. 使用 `Node.js` + `eggjs` + `mysql` 开发；
  2. 在没有大量交互需求的情况下暂时可以接受 `Node.js` 单主线程的局限性。若将来有需要，也可以使用多 worker / 进程合作解决问题；
  3. 前端提供后台服务，提供"最新活动"等配置

## 特别鸣谢

[![Powered by Wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-green.svg)](https://github.com/wechaty/wechaty)
[![Wechaty开源激励计划](https://img.shields.io/badge/Wechaty-开源激励计划-green.svg)](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)

> 作者: [Kylin93CN](https://github.com/Kylin93CN)
> Code: [Github](https://github.com/Kylin93CN/wechaty-bot-XueMiEr)
