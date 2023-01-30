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

Wechaty 的构造类用于构造 Wechaty 实例。

### Static method: WechatyBuilder.build(options?: WechatyOptions)

返回 Wechaty 实例。

根据 option 构造一个 Wechaty 实例。

示例:

```ts
import { WechatyBuilder } from 'wechaty'

WechatyBuilder.build(options) // 在单例模式使用 instance()
  .on('scan', (url, status) => console.log(`Scan QR Code to login: ${status}\n${url}`))
  .on('login',       user => console.log(`User ${user} logged in`))
  .on('message',  message => console.log(`Message: ${message}`))
  .start()
```

### Static method: WechatyBuilder.singleton(options?: WechatyOptions)

返回 Wechaty 实例。

根据 option 构造一个单例模式的 Wechaty 实例。

### Static method: WechatyBuilder.valid(target: any)

返回 target 是否是 Wechaty 实例。

## Class: Wechaty

主要的 bot 类。

一个 bot 是指一个代表了某个特定即时通讯软件的实力，根据使用的 puppet 不同而有所区别。

### wechaty.start()

启动 bot 。

### wechaty.say(sayable: Sayable)

对 bot 的当前用户发送消息。

### wechaty.publish(post: PostInterface)

返回一个 postInterface 或者 void ，根据 puppet 不同有所区别。

发送一条朋友圈，详情请参考 Post 部分。（编写中）
