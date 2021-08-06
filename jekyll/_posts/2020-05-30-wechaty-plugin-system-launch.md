---
title: "Wechaty Plugin 插件系统发布会：5月30日等你来"
author: juzibot
categories: announcement
tags:
  - talk
  - news
  - meetup
  - featured
image: /assets/2020/05-30-wechaty-plugin-system-launch/001.webp
---

> 作者:[juzibot](https://github.com/juzibot)

## 如果你不了解Wechaty，一句话快速了解

- Wechaty 是一个开源聊天机器人框架SDK，在Github上已有8000 Star的高度封装、高可用、多语言的聊天机器人框架。

## 现在，再看三句话，了解我们的新进展

![002](/assets/2020/05-30-wechaty-plugin-system-launch/002.webp)

- Wechaty 正式上线完整的插件系统，开发者可用一行代码调用已经封装好的插件能力。
- Wechaty 将在5月30日（周六）下午举行分享会，介绍如何使用和开发Wechaty插件（文末扫码报名）。
- Wechaty 将在接下来的一个月中，举行插件开源月系列活动，并发放价值数十万的Wechaty 服务Token（文末扫码进群）。

回溯漫长的过去，软件系统的发展史就是逐层封装的进化史。
从汇编语言到高级语言、从命令行到图形界面……
毫无疑问，“封装”让用户视角的计算机变得极其可用。
同样的故事在小的落点中同样成立：在已经封装好的项目中，针对常见操作的代码段进行更深度的“封装”，用一行代码就能实现一个完整功能，将是效率的新的指数级提升。

![003](/assets/2020/05-30-wechaty-plugin-system-launch/003.webp)

Wechaty 的故事开始于用RPA的方式模拟登录微信，在过去的几年里，服务了数万名开发者，收获了 Github 的 8000 Star。
<https://github.com/wechaty/wechaty>

我们将过去对于绝大多数人难以想象的工作量，通过数万行代码封装成了最短六行代码就可以模拟登录微信的npm包。

```sh
const { Wechaty } = require('wechaty') // import { Wechaty } from 'wechaty'
Wechaty.instance() // Global Instance
.on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\nhttps://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrcode)}`))
.on('login',            user => console.log(`User ${user} logined`))
.on('message',       message => console.log(`Message: ${message}`))
.start()
```

但是，对于真正的可用的微信聊天机器人，不可避免地需要用大量的逻辑来处理不同条件下的收发消息、群管理甚至和外部系统的耦合。
这也就意味着，即使收消息、发消息、添加好友等操作都只需要一行代码，对于一个复杂任务仍需数十行代码才能完成。
带着对于即插即用的期待，我们上线了完整的插件系统。
<https://github.com/wechaty/wechaty-plugin-contrib>
对于传统意义上复杂的、需要数十行代码完成的功能，基于已经封装完成npm包，只需按照文档、用短至一行代码即可调用。
如果你感兴趣，请立刻点击上文链接，快速用上开发者们已经写好的插件！

![004](/assets/2020/05-30-wechaty-plugin-system-launch/004.webp)
如果你感兴趣，先扫码！
我们将在群里发布此次活动链接、对应开源插件Github链接，并长期举行 Wechaty 插件相关开源活动的新情况。

![005](/assets/2020/05-30-wechaty-plugin-system-launch/005.webp)

在活动中，我们将邀请 Wechaty 作者李卓桓、Wechaty Plugin设计师Gcaufy、Wechaty Puppet Donut/Padplus作者高原、Wechaty Plugin 开发者王墨炱分别就 Wechaty 开发生态、插件开发完整指南、插件的商业化可能等领域进行深度分享，议程如下：
5月30日（周六）下午
14:00 - 14:05 Wechaty 社区团队 「插件开源月」活动开幕及议程介绍

14:05 - 14:25 Wechaty 作者 李卓桓 Wechaty项目和社区生态介绍

14:25 - 14:55 Wechaty Plugin 设计师，腾讯微信小程序框架开源项目Wepy 作者 Gcaufy 插件系统开发历程及应用

14:55 - 15:00 休息

15:00 - 15:30 Wechaty Puppet Donut/Padplus 作者 高原 Wechaty 插件的商业化落地展望

15:30 - 16:00 Wechaty Plugin开发者 王墨炱 基于插件的Wechaty开发

![006](/assets/2020/05-30-wechaty-plugin-system-launch/006.webp)
