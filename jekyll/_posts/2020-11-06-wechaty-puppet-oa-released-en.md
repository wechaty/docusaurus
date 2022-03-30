---
title: "Official-Account Puppet Released"
author: wj-mcat
categories: announcement
tags:
  - news
  - puppet-provider
  - official-account
image: /assets/2020/official-account/wechaty-puppet-official-account.webp
---

Developing a customized WeChat official account is a complex process, which requires reading a lot of documents. Especially, developing a robot with a custom reply function based on WeChat official account, and wechaty is good at solving such problems, so we have this puppet.

`Wechaty-pure-official-account` does not encapsulate all the functions in WeChat public account, but extract the custom customer service dialogue module and encapsulate it as the underlying puppet. In this way, we can use wechaty to develop the customer service dialogue management based on Wechaty easily.

> Wechaty lets you focus on the processing of dialogue logic

If you have developed other IM platforms using wechaty, you can develop the WeChat official account platform without changing the logic code, which has a very high platform migration capability.

## Introduction

Using wechaty to develop different platform chatbot is almost no difference at the code level, the underlying `puppet` has encapsulated all the logic, 'wechaty' provides a unified upper interface, so you only need to know how to use wechaty, you can develop powerful multi-platform chatbot.

The development of WeChat Official Account is compared with other platforms, the only difference is that you need to provide WeChat Official Account configuration information, such as' appId ', 'appSecret', 'token' and so on.

## Quick Start

Using wechaty to develop a dialogue chatbot on any platform can be roughly divided into three steps

- Initialize dialogue platform puppet
- Configure puppet to wechaty
- Using wechaty upper interface to develop chatbot

In the first step, because the different details of the underlying packages are different, initialization operations are different, such as WeChat official account platform, which requires `appId`, `appSecret` and other information separately.

In the second step, when initializing the wechaty instance, it is necessary to configure the puppet as a parameter, so that when wechaty performs dialog operation, it actually calls the underlying logic of the puppet.

In the third step, we use the upper layer interface of wechaty to develop the chatbot. The operation mode is the same for all platforms, so the developer's attention will be focused on this. The above two steps only need simple configuration.

There are some details about the development of WeChat official account using wechaty. I will show you how to quickly get the official account chatbot with a few code.

### 1. Configure Internet address

The official account of WeChat requires the address of the service provider to be external network address, supporting HTTP and HTTPS, and the ports supported respectively are: 80, 443. Therefore, it is very important to have an external IP address in the development phase. Here, we recommend several intranet penetration tools:

- 1.1 [localtunel](https://localtunnel.github.io/www/)

Temporary Internet address can be created, which will be invalid after a certain period of time, but this is in line with the requirements of **development stage**. The steps are also very simple:

```shell script
npm install -g localtunnel
lt --port 80
```

- 1.2 [ngrok](https://www.npmjs.com/package/ngrok)

It can create permanent external network addresses, free address numbers and limited bandwidth, but this is enough for WeChat's official account development with very small dialogue. The use of the tutorial is also very simple, I will not describe the specific here, the detailed content can be viewed on the official website.

### 2. Initialization of WeChat official account chatbot

Using wechaty to develop corresponding platform's chatbot, we need to use the corresponding platform puppet, and the WeChat official account corresponds to puppet: `wechaty-puppet-official-account`. The installation tutorial is as follows:

```shell script
npm install wechaty-puppet-official-account
```

Next is initialization, and WeChat official account requires configuration information such as `appId`, `appSecret`, `token`, etc. the sample code is as follows:

```typescript
import { PuppetOA } from 'wechaty-puppet-official-account'

const puppet = new PuppetOA({
  appId: "wxbd801c28fbe1bbbd",
  appSecret: "6959408a3ba1c82db1a11d941df65764",
  token: "token",
  port: 8080
})
```

Next, you need to configure it to wechaty. The example code is as follows:

```typescript
const bot = new Wechaty({
  puppet: puppet
})
```

In this regard, the initialization of wechaty has been completed, isn't it very simple? So the next step is to develop the dialogue logic code of wechaty core.

### 3. Chatbot Core Logic

In this part, I only show you the simple message reply function, which is enough to show developers how to develop customized chat robots.

To learn more about the development of wechaty chatbot, you need to go to [official website](http://wechaty.js.org/docs/introduction/) Check the documentation. The following is the overall sample code:

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
    await msg.say(`Welcome to wechaty Official Account\n refer to  ： http://www.wechaty.js.org 😄😄😄`)
  }
  if (msg.type() == MessageType.Image) {
    const fileBox = await msg.toFileBox()
    // send message to talker
    await msg.say(fileBox)
  } else {
    // I am a repeater ~_~~
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

## Conclusion

Using wechaty to develop WeChat official account chatbot is very simple. It is very friendly to new developer. If you want to see the detailed usage, you can go to [github](https://github.com/wechaty/wechaty-puppet-official-account) Check the latest documents, and you are welcome to mention issues and PR.

未来，我们也将逐步接入钉钉、飞书等平台，最新动态内容请看[wechaty.js.org](http://wechaty.js.org/)，感谢大家的关注。
