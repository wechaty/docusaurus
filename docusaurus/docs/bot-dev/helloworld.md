---
title: Bot Development
sidebar_label: 'Hello World'
---

## Hello World

In this section, we'll create a simple bot: Ding-Dong bot. When it receives a text message 'ding', it will reply with text 'dong'.

1. install dependencies with npm

```bash
npm install wechaty
```

2. create a bot instance

```ts
import { WechatyBuilder } from 'wechaty'

const bot = new WechatyBuilder.build()
```

3. listen to scan event

```ts
bot.on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))
```

As we know, each QRcode represents a particular string. Here the call back of scan event will pass a qrcode string. We generate the qrcode with wechaty website api and scan to login.

4. listen to message event

```ts
bot.on('message', message => if (message.text() === 'ding') {
  message.say('dong')
})
```

The message event will pass a ```MessageInterface``` instance to the callback. We can get the text content by calling ```message.text()```. If the message is 'ding', we reply with ```message.say()```. This is a shortcut for sending messages to the sender of the message. You can find detail info about it in [User-Module: Message](bot-dev/user-module-message.md) section.
