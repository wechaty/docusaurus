---
title: "Official-Account Puppet Released"
author: wj-mcat
categories: tutorial
tags:
  - news
  - puppet-provider
  - official-account
image: /assets/2020/official-account/wechaty-puppet-official-account.webp
---

定制化开发微信公众号是一个非常繁琐的过程，需要阅读大量的文档，特别是基于微信公众号开发一个具有自定义回复功能的机器人，而wechaty正是擅长于解决此类问题，于是就有了此puppet。

`wechaty-puppet-official-account`并没有封装微信公众号中的所有功能，而是将自定义客服对话模块给抽取出来，封装成底层的puppet，这样就可以使用wechaty开发微信公众号的客服对话管理功能。

> wechaty让你只专注于对话逻辑的处理

如果你已使用wechaty开发过其他IM对话平台，此时无需更改逻辑代码即可实现微信公众号平台的开发，具备非常高的平台迁移能力。

## 介绍

使用wechaty开发不同平台的聊天机器人，在代码层面几乎没有任何差别，底层`puppet`已经封装所有逻辑，`wechaty`提供统一上层接口，故你只需要了解如何使用wechaty，即可开发功能强大的多平台机器人。

那微信公众号平台的开发与其他平台对比，唯一的区别就是你需要提供微信公众号的配置信息，比如`appId`, `appSecret`, `token`等。

## 使用步骤

使用wechaty开发任何一个平台的对话机器人，大致的步骤分为三步：

- 初始化对话平台puppet
- 将puppet配置到wechaty
- 使用wechaty上层接口开发对话机器人

在第一步中，由于不同平台的底层封装细节不一样，初始化操作也各不同，比如微信公众号平台就需要单独提供`appId`, `appSecret`等信息。

在第二步中，初始化wechaty实例时，是需要将puppet作为参数配置，这样wechaty在进行对话操作的时候，实际调用的是该puppet底层的逻辑。

在第三步中，使用wechaty上层接口开发对话机器人，针对于所有平台操作方式都是一样，故开发者的全部注意力将会专注于此。以上两个步骤只需要简单的配置即可完成。

在使用wechaty开发微信公众号时有一些细节与其他平台不同，我将以少量的代码给大家展示如何快速上手微信公众号聊天机器人。

### 1. 配置外网地址

微信公众号要求服务提供者的地址为外网地址，支持http和https，分别支持的端口为：80， 443。所以在开发阶段拥有一个外网IP地址变得尤为关键，在此，我们推荐几个内网穿透工具：

- 1.1 [localtunel](https://localtunnel.github.io/www/)

能够创建临时的外网地址，一定时间之后将会失效，可这正符合**开发阶段**的需求。使用步骤也是非常简单：

```shell script
npm install -g localtunnel
lt --port 80
```

- 1.2 [ngrok](https://www.npmjs.com/package/ngrok)

能够创建永久的外网地址，免费地址数量和带宽有限，可这对于对话量非常小的微信公众号开发来说已经足够了。使用教程也是非常简答，具体在此我就不描述了，详细内容可去官网查看。

### 2. 初始化微信公众号机器人

使用wechaty开发对应平台的对话机器人，需要使用对应平台的puppet，而此微信公众号对应的puppet为：`wechaty-puppet-official-account`。安装教程如下：

```shell script
npm install wechaty-puppet-official-account
```

接下来就是初始化了，而微信公众号是需要`appId`, `appSecret`, `token`等配置信息，示例代码如下所示：

```typescript
import { PuppetOA } from 'wechaty-puppet-official-account'

const puppet = new PuppetOA({
  appId: "wxbd801c28fbe1bbbd",
  appSecret: "6959408a3ba1c82db1a11d941df65764",
  token: "token",
  port: 8080
})
```

接着需要将其配置到wechaty当中，示例代码如下：

```typescript
const bot = new Wechaty({
  puppet: puppet
})
```

就此，已完成wechaty的初始化工作，是不是非常简单呢？那么接下来就是开发wechaty核心的对话逻辑代码。

### 3. wechaty对话机器人核心逻辑

在此部分我只给大家展示简单的消息回复功能，足以给开发者展示如何开发定制化聊天机器人。

要想详细了解wechaty聊天机器人的开发细节，需要到 [官网](http://wechaty.js.org/docs/introduction/) 查阅文档。以下为整体示例代码：

```typescript
import {
  Contact,
  Message,
  Wechaty,
  log,
} from 'wechaty'
import { MessageType } from 'wechaty-puppet'

async function onMessage(msg: Message) {
  log.info('StarterBot', msg.toString())

  if (msg.text() === 'ding') {
    await msg.say(`欢迎使用wechaty微信公众号\n详细文档请看 ： http://www.wechaty.js.org 😄😄😄`)
  }
  if (msg.type() == MessageType.Image) {
    const fileBox = await msg.toFileBox()
    // 将图片发送给用户
    await msg.say(fileBox)
  } else {
    // 我就是一个复读机 ~_~~
    await msg.say(msg.text())
  }
}

const bot = new Wechaty({
  name: 'ding-dong-bot',
  puppet: new PuppetOA({
    appId: "wxbd801c28fbe1bbbd",
    appSecret: "6959408a3ba1c82db1a11d941df65764",
    token: "token",
    port: 80
  })
})

bot.on('message', onMessage).start()
  .then(() => log.info('StarterBot', 'Starter Bot Started.'))
  .catch(e => log.error('StarterBot', e))
```

## 总结

使用wechaty开发微信公众号聊天机器人非常简单，对于新手特别友好，要想查看详细使用方法，可到[github](https://github.com/wechaty/wechaty-puppet-official-account)查看最新文档，也欢迎大家提Issues和Pr。

未来，我们也将逐步接入钉钉、飞书等平台，最新动态内容请看[wechaty.js.org](http://wechaty.js.org/)，感谢大家的关注。
