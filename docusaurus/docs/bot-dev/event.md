---
title: Event
sidebar_label: 'Event'
---

# Event

Events are key of Wechaty. As advertised, Wechaty is event-driven. You should listen to events and react accordingly so your bot can have various functionalities.

## bot events

### scan

```ts
type WechatyEventListenerScan = (qrcode: string, status: PUPPET.types.ScanStatus, data?: string) => void | Promise<void>
```

A scan event will be emitted when the bot needs to show you a QR Code for scanning. It is recommend to install qrcode-terminal(run ```npm install qrcode-terminal```) in order to show qrcode in the terminal.

Example:

```ts
bot.on('scan', (qrcode) => {
  qrTerm.generate(qrcode, { small: true })
})
```

### login

```ts
type WechatyEventListenerLogin = (user: ContactSelfInterface) => void | Promise<void>

```

After the bot login full successful, the event login will be emitted, with a Contact of current logged in user.

### ready

```ts
type WechatyEventListenerReady = () => void | Promise<void>
```

Emit when all data has load completed and your bot is ready to go. For most cases that means you can access your contacts and rooms now.

### message

```ts
type WechatyEventListenerMessage = (message: MessageInterface) => void | Promise<void>
```

Emit when there's a new message. It's almost the most important event since after all, we care building a chatbot.

Example:

```ts
bot.on('message', async message: MessageInterface => {
  if (message.text() ==='ding') {
    message.say('dong')
  }
})
```
