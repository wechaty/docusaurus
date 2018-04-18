---
title: "Integrate Wechat Personal Account to Microsoft BotFramework with a BotBuilder Wechaty Connector"
author: zixia
date: '2018-04-18 02:14:52 +0800'
excerpt_separator: <!--more-->
published: true
---

> Author: [Huan LI](https://github.com/zixia), Microsoft AI MVP & RD, Author of `wechaty`.

![BotFramework](/download/2018/botframework.jpg)

[Microsoft BotFramework](https://dev.botframework.com/) is a robust platform that supports almost all kinds of the instance messengers like Facebook messenger, Skype, Slack, and backed by the powerful Cognitive Services like LUIS.ai, QnAMaker.ai, Azure Machine Learning. BotBuilder is a powerful SDK provides all we need when we are developing a ChatBot. I started learning them about 18 months ago, and I love them very much.

However, it does not support Wechat **PERSONAL** Account, so I decided to make some fun on it: connect Wechat PERSONAL Account to the BotBuilder by creating a new Connector: [botbuilder-wechaty-connector](https://github.com/zixia/botbuilder-wechaty-connector).

<!--more-->

The Connector is a bridge between the BotBuilder and the Instance Messenger, in our case, Wechat.

There's some document at [Bot Builder for Node.js
Libraries - Interface IConnector](https://docs.botframework.com/en-us/node/builder/chat-reference/interfaces/_botbuilder_d_.iconnector.html) with two examples: `ChatConnector` and `ConsoleConnector`. However, I found the most useful example is a Wechat Official Account Connector: https://github.com/jyfcrw/botbuilder-wechat-connector whose code is concise and clean, so I decided to start from here.

It's not very difficult for me to replace the two NPM module `wechat` & `wechat-api` to `wechaty`, and rewrite all the code to TypeScript, then add linting & testing, setup DevOps CI/CD to publish on NPM. It takes me about three hours to finish them.

Contract to the Wechat Official Account, Personal Account will be very easy to start because you only need to scan the QR code on the phone to log in instead of register an official account with APP_ID & APP_SECRET.

The following code simple setup a connector between BotBuilder and Wechat, ask and answer elementary questions:

1. What's your name?
1. OK, ${your name}
1. What's your age?
1. All right, ${your age}
1. How are you, ${your name}

```ts
import * as builder from 'botbuilder'

import { WechatyConnector } from 'botbuilder-wechaty-connector'

// Create wechat personal account connector
const wechatyConnector = new WechatyConnector()

const bot = new builder.UniversalBot(wechatyConnector)

// Bot dialogs
bot.dialog('/', [
  function (session) {
      if (session.userData && session.userData.name) {
        session.send('How are you, ' + session.userData.name)
      } else {
        builder.Prompts.text(session, 'Whats your name?')
      }
  },
  function (session, results) {
      session.userData.name = results.response
      session.send('OK, ' + session.userData.name)
      builder.Prompts.text(session, 'Whats your age?')
  },
  function (session, results) {
      session.userData.age = results.response
      session.send('All right, ' + results.response)
  },
])

wechatyConnector.listen()
```

> The above example is borrowed from `botbuilder-wechat-connector`.

* GitHub: https://github.com/zixia/botbuilder-wechaty-connector
* NPM: https://www.npmjs.com/package/botbuilder-wechaty-connector

Hope you will like it and could make fun of it too, cheers!
