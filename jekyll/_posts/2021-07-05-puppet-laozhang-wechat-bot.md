---
title: "喜讯：使用Windows微信桌面版协议登录，wechaty免费版协议即将登场"
author: atorber
categories: article
tags:
  - blog
  - study
  - introduction
image: /assets/2021/07-puppet-laozhang-wechat-bot/wechat_bot.webp
---

> 作者: [atorber](https://github.com/atorber/)，一个不务正业的产品经理

继”wechaty 免费版 web 协议重放荣光“之后，很高兴向大家预告 Wechaty 免费版 Windows 协议即将与大家见面，如果之前苦于 web 协议不能获取准确的 wxid、roomid 等问题，那么这个更新将会解决你的困扰。

wechaty 社区即将迎来一个全新的 puppet——wechaty-puppet-laozhang（老张牌 puppet，或许后续会更新一个不这么响亮的名字），将支持使用 Windows 微信桌面版协议登录。

## 关于 wechaty-puppet-laozhang

该 puppet 来源另一个开源 chatbot 项目[wechat-bot](https://github.com/cixingguangming55555/wechat-bot)，由低调的个人开发者老张操刀。与 wechaty 项目的初衷一样，chatbot 为开发者提供开源免费的 chatbot 工具，并且已累计 600+start、190+fork。

wechat-bot 能够让开发者在 Windows 机器上使用微信官方客户端登陆微信，然后使用 dll 注入方式，获取客户端 HOOK，进而开放出 websocket 和 HTTP 接口，供业务程序外部调用，在本地接收和发送微信消息。

### wechat-bot 已开放的常用功能接口

#### 发送(websocket&http)

1. 客户端发送好友文本消息（支持 websocket 和 HTTP）
2. 客户端获取通讯录好友 wxid 和名字(支持 websocket 和 HTTP)
3. 客户端发送图片给好友（支持 websocket 和 HTTP）
4. 发送 AT 消息（支持 websocket 和 HTTP）
5. 发送附件（仅支持 HTTP,weboscket)
6. 获取 chatroom 成员列表(wxid)和昵称（支持 websocket 和 HTTP）

#### 接收（websocket）

1. 文本接收
2. 图片接收（不解密不保存，解密异或即可）
3. 引用消息接收
4. 公众号消息接收
5. 好友请求消息接收

#### 客户端支持

Jave、Python、Nodejs、C#、易语言，5 种语言的 10 个客户端可供选用

1. UoUoio 贡献 java 客户端
2. MickeyMi 贡献 JAVA 客户端
3. ToBin 共享 JAVA 客户端
4. 诺阳 贡献 C#客户端
5. 昆明-C#-SakuraYuki 贡献 C#客户端
6. Yangself666 贡献 java 客户端
7. tsingly 贡献 python 客户端
8. qq64161848 贡献易语言客户端
9. ttc 贡献 python 客户端
10. 老张亲自贡献的 nodejs 客户端

### wechat-bot 与 wechaty 的优势互补

wechaty 提供了一套标准的 chatbot 接口规范和工具，6 行代码实现一个微信机器人，易用、标准。但 wechaty 项目本身不提供 Puppet Services，而是需要 Puppet Providers 来提供。使用 wechaty 的第一步——”如何获取 token“是开发者经常问到的问题，这在很大程度上阻止了开发者能够快速体验。

而目前唯一免费的 web 协议 wechaty-puppet-wechat，由于协议自身的限制，在获取 wxid、roomid 存在天然缺陷。

现在两者的结合即将很好的解决上述问题
，与 wechaty-puppet-wechat 类似，wechaty-puppet-laozhang 提供一种免 token 的本地运行 puppet，任何 Windows 用户可以在本地运行 puppet 获得与 web 协议同样的免费体验，同时获得与其他 Puppet Services 同等的接口能力。

## 什么时间开放

phase1：Q3 提供本地化 wechaty-puppet-laozhang，wechat-bot 项目已开放功能接口全面适配集成到 wechaty，开发者可以在本地使用 Windows 协议体验几乎与收费版 Puppet Services 同等的接口

phase2：Q4 丰富 wechaty-puppet-laozhang 功能接口，同时准备提供一个商业化的 Windows 协议 Puppet Service

在此之前，开发者依然可以到[wechat-bot](https://github.com/cixingguangming55555/wechat-bot)项目体验目前最好且免费的本地化 chatbot。

## 关于老张

最后也隆重的向大家介绍 wechat-bot 项目的作者——老张，微信昵称”老张学技术“，同名微信公众号”老张学技术“，低调、严谨的诗人、业余编程爱好者。

### 认识老张

- [老张的 wechat-bot 开源项目](https://github.com/cixingguangming55555/wechat-bot)

> 历史文章

- [Wechaty+微信小程序实现群内活动报名](https://wechaty.js.org/2021/03/17/node-wechaty-and-wechaty-puppet-padlocal/)
- [入门：小白如何在 wechaty 社区发布自己的第一篇博客（一）](https://wechaty.js.org/2021/04/22/how-to-publish-blog-on-wechaty/)
