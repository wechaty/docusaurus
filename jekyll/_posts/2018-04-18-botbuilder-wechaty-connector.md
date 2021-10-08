---
title: "Integrate Wechat Personal Account to Microsoft BotFramework with a BotBuilder Wechaty Connector"
author: huan
categories: npm
tags:
  - botbuilder
  - featured
image: /assets/2018/botframework.webp
---

![BotFramework](/assets/2018/botframework.webp)

[Microsoft BotFramework](https://dev.botframework.com/) is a robust platform that supports almost all kinds of the instance messengers like Facebook messenger, Skype, Slack, and backed by the powerful Cognitive Services like LUIS.ai, QnAMaker.ai, Azure Machine Learning. BotBuilder is a powerful SDK provides all we need when we are developing a ChatBot. I started learning them about 18 months ago, and I love them very much.

However, it does not support Wechat **Individual** Account, so I decided to make some fun on it: connect Wechat PERSONAL Account to the BotBuilder by creating a new Connector: [botbuilder-wechaty-connector](https://github.com/huan/botbuilder-wechaty-connector).

## Update

- Jan 14, 2019: The [botbuilder-wechaty-adapter](https://npmjs.com/package/botbuilder-wechaty-adapter) realeased for Bot Builder V4 support.
- Apr 18, 2018: The [botbuilder-wechaty-connecter](https://npmjs.com/package/botbuilder-wechaty-connector) realeased for Bot Builder V3 support.)

The Connector is a bridge between the BotBuilder and the Instance Messenger, in our case, Wechat.

There's some document at [Bot Builder for Node.js
Libraries - Interface IConnector](https://docs.botframework.com/en-us/node/builder/chat-reference/interfaces/_botbuilder_d_.iconnector.html) with two examples: `ChatConnector` and `ConsoleConnector`. However, I found the most useful example is a Wechat Official Account Connector: <https://github.com/jyfcrw/botbuilder-wechat-connector> whose code is concise and clean, so I decided to start from here.

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

Hope you will like it and could make fun of it too, cheers!

## See Also

- GitHub: <https://github.com/huan/botbuilder-wechaty-connector>
- NPM: <https://www.npmjs.com/package/botbuilder-wechaty-connector>
- [Create a bot with the Bot Builder SDK for Node.js](https://docs.microsoft.com/en-us/azure/bot-service/nodejs/bot-builder-nodejs-quickstart)
- [Key concepts in the Bot Builder SDK for Node.js](https://docs.microsoft.com/en-us/azure/bot-service/nodejs/bot-builder-nodejs-concepts)
- [VIDEO: Become a Bot Builder with Microsoft Bot Framework - James Mann speaking at dotnetsheff in April, 2017](https://pusher.com/sessions/meetup/dotnetsheff/become-a-bot-builder-with-microsoft-bot-framework)
