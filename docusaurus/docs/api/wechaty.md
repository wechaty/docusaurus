---
title: Wechaty
---

- [Class: WechatyBuilder](#class-wechatybuilder)
  - [Static method: WechatyBuilder.build(options?: WechatyOptions)](#static-method-wechatybuilderbuildoptions-wechatyoptions)
  - [Static method: WechatyBuilder.singleton(options?: WechatyOptions)](#static-method-wechatybuildersingletonoptions-wechatyoptions)
  - [Static method: WechatyBuilder.valid(target: any)](#static-method-wechatybuildervalidtarget-any)
- [Class: Wechaty](#class-wechaty)
  - [wechaty.start()](#wechatystart)
  - [wechaty.say()](#wechatysaysayable-sayable)
  - [wechaty.publish(post: PostInterface)](#wechatypublishpost-postinterface)

## Class: WechatyBuilder

Builder Class for Wechaty that creates Wechaty instance.

### Static method: WechatyBuilder.build(options?: WechatyOptions)

Returns Wechaty instance.

Create an instance of Wechaty based on option provided.

example:

```ts
import { WechatyBuilder } from 'wechaty'

WechatyBuilder.build(options) // instance() for singleton mode
  .on('scan', (url, status) => console.log(`Scan QR Code to login: ${status}\n${url}`))
  .on('login',       user => console.log(`User ${user} logged in`))
  .on('message',  message => console.log(`Message: ${message}`))
  .start()
```

### Static method: WechatyBuilder.singleton(options?: WechatyOptions)

Returns Wechaty instance.

Create an instance of Wechaty based on option provided in singleton mode.

### Static method: WechatyBuilder.valid(target: any)

Returns whether the target is a wechaty instance.

## Class: Wechaty

Main bot class.

A bot is an instance represents an IM, depends on whichever puppet you are using.

### wechaty.start()

Start the bot.

### wechaty.say(sayable: Sayable)

Send message to the current user.

### wechaty.publish(post: PostInterface)

Returns PostInterface that has been published or void, depends on puppet.

Publish a moment to timeline. For more detail please visit Post section. (WIP)
