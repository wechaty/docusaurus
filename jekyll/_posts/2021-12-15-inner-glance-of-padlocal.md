---
title: "wechaty-puppet-padlocal 实现初探"
author: kkdev163
categories: article
tags:
  - blog
  - padlocal
  - typescript
image: /assets/2021/12-inner-glance-of-padlocal/logo.webp

---

## 引言

笔者是 [Wechaty](https://wechaty.js.org/) 和 [whacty-puppet-padlocal](https://wechaty.js.org/docs/puppet-providers/padlocal) 的一名普通用户, 曾在 Wechaty 社区上发布了一篇博文[《微信群机器人-读经助手》](https://wechaty.js.org/2021/05/02/wechaty-bible-chatbot/)。此次出于学习的目的，阅读了 Wechaty 社区上发布的 PadLocal [相关博文](https://wechaty.js.org/2020/10/12/puppet-padlocal-intro/) 及 Github 上开源的 [wechaty-puppet-padlocal](https://github.com/padlocal/wechaty-puppet-padlocal)、[padlocal-client-ts](https://github.com/padlocal/padlocal-client-ts) 等仓库代码，对 whacty-puppet-padlocal 的实现做一次 简单、粗浅 的梳理，希望能够借此机会与广大开发者有所交流，帮助自己进一步学习 Wechaty 生态。

## 心中的疑问

在阅读 PadLocal 作者的[文章](https://wechaty.js.org/2020/10/12/puppet-padlocal-intro/)中，作者给出了 PadLocal 的整体架构拓扑图:

![image](/assets/2021/12-inner-glance-of-padlocal/topological-graph.webp)

作者在文中提到:
> 我们利用了 GRPC 的双向通信机制，让 puppet 成为代理，将所有流量通过 puppet 转发给 WeChatServer。同时由 puppet 来维持和 WeChatServer 之间的长连接。

在读到此处时，笔者产生了几个好奇的问题：

- PadLocal、PadLocalServer 在 Wechaty 整体架构中主要扮演什么角色？
- 有哪些类型的请求需要通过 grpc 的方式与 PadLocalServer 通信？
- 大体的扫码登录流程是怎么样的？
- 大体的消息收发流程是怎么样的？
- 到底有没有一个真实的 ipad 设备，在登录着微信账号？

带着这几个问题，笔者阅读了[wechaty-puppet-padlocal](https://github.com/padlocal/wechaty-puppet-padlocal)、[padlocal-client-ts](https://github.com/padlocal/padlocal-client-ts) 等仓库代码。下文将为大家做简单、粗浅的解答。

## 整体架构

![整体架构](/assets/2021/12-inner-glance-of-padlocal/graph.webp)

我们从上往下看，在应用层我们的微信机器人直接与 Wechaty SDK 交互，在 Wechaty SDK 上调用方法，并监听一些事件。例如以下示例代码，我们在 Wechaty 实例上监听了 ```scan```、```login```、```message``` 等事件，并调用了 start() 方法。

```javascript
// Importing the Wechaty npm package
import { Wechaty } from 'wechaty'

// Initializing the bot
const bot = new Wechaty({
    name: 'starter-bot',
})

// Starting the bot
bot
.on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))
.on('login',            user => console.log(`User ${user} logged in`))
.on('message',       message => console.log(`Message: ${message}`))
.start()

```

调用 start 方法后，我们分 方法调用 和 事件响应 两条链路来看整体的架构流水线。

**第一条从上往下的 方法调用:**

```wechaty.start()``` -> ```PuppetPadLocal.start()``` -> ```client = PadLocalClient.create()``` -> ```client.api.login({onQrCodeEvent，onLoginSuccess})```  -> ```client.request(pb.LoginRequest)``` -> ```grpc call``` -> ```PadLocalServer```

在 wechaty 的 start 流程中，通过底层依赖的层层调用，最终初始化请求，会变成一个 LoginRequest 通过 grpc 的方式发送至 PadLocalServer。

**第二条从下往上的 事件响应:**

```_onServerMessage``` -> ```onQrCodeEvent``` -> ```PuppetPadLocal.emit('scan', {qrcode})``` ->  ```wechaty.emit('scan')``` -> ```QRCode```

grpcClient 在接收到 PadLocalServer 的响应后，通过回调 及 事件订阅的方式，向上层逐级抛出 scan 事件，我们的应用层就拿到了登录二维码。

## 完整的登录流程

以上的流程介绍中，我们提到通过 ```wechaty.start``` 的方法调用 及 ```wechaty.on('scan')``` 方法监听，可以拿到了一个 QRCode，我们使用手机扫码即可完成登录。

我们只发了一个 ```LoginRequest``` 的请求，响应是拿到的是一个 二维码。一个请求一个响应，理论上一次方法调用就结束了，那上层的 ```login``` 的事件，又是通过什么机制触发的呢？

答案应该就是 gRPC, 笔者没有使用过 gRPC, 但在 PadLocal 作者的文章中，他提到 gRPC 具备双向通信机制，再结合这几处的源码

- [PadLocalClientApi.login](https://github.com/padlocal/padlocal-client-ts/blob/7ba679d78d13aeacb67969f0d817dbabf64f9c36/src/PadLocalClientApi.ts#L24-L54)
- [Request._onServerMessage](https://github.com/padlocal/padlocal-client-ts/blob/7ba679d78d13aeacb67969f0d817dbabf64f9c36/src/Request.ts#L233)
- [Request._completePendingRequest](https://github.com/padlocal/padlocal-client-ts/blob/7ba679d78d13aeacb67969f0d817dbabf64f9c36/src/Request.ts#L214)

笔者大胆猜测: 在发起 LoginRequest 的 gRPC 请求后，PadLocal 服务端会根据登录状态，持续向 Client 端响应消息，触发 Client 中的 登录相关的几个事件回调如 ```onQrCodeEvent```、```onLoginStart```、
  ```onLoginSuccess```，并会控制 Client 端 与 Wechat Server 完成长连接的建立。等到这些初始化都完成后，才会通过 gRPC 响应头中的 ack 字段，来结束这次 LoginRequest 的 gRPC 请求。

由于发起 LoginRequest 后，可能需要做长时间等待(如等待用户扫码)、并控制 Client 端与 Wechat Server建立长连接，所以这个 gRPC 的超时等待时间也非常的长，有 10 分钟之久。

```ts
// 10 min timeout
const request = this.client.createRequest({
  requestTimeout: 10 * 60 * 1000,
});
```

用一张图来简要示意下，完整的 LoginRequest gRPC 调用流程:

![image](/assets/2021/12-inner-glance-of-padlocal/login.webp)

## 消息发送

在通过 Wechaty SDK 发送文字消息时，如上述的 ```wechat.start()``` 调用流程一样，会经过以下层级调用发送至 PadLocalServer

```contact.say('text message')``` -> ```PuppetPadLocal.messageSendText(toUserName,'text message')``` ->  ```client.api.sendTextMessage(toUserName,'text message')``` -> ```client.request(pb.SendTextMessageRequest)``` -> ```grpc call``` -> ```PadLocalServer```

PadLocalServer 端应该会根据 Client 的请求类型SendTextMessageRequest， 在 gRPC 的响应里，指示 Client 需要通过 长连接将 textMessage 发送给 WechatyServer。

而所有通过长连接发送给 wechatyServer 的数据，都需要再一次 通过 gRPC 将请求内容进行包装(可能是用破解的微信加密算法进行处理)。再将包装后的数据，传输给 wechatyServer。

见以下示意图:

![消息发送示意图](/assets/2021/12-inner-glance-of-padlocal/send-msg.webp)

### 消息推送

由于 Client 通过长连接与 WechatyServer 进行连接，微信的消息，会直接到达 Client 端，但 Client 端需要通过 gRPC 请求，将消息的内容做 unpack 处理(可能是用解密算法)。然后根据消息的类型，emit 到上层中，完成消息的接收。

![消息推送示意图](/assets/2021/12-inner-glance-of-padlocal/receive-msg.webp)

## 问题解答

最后我们来看下一开始提到的几个问题:

- PadLocal、PadLocalServer 在 Wechaty 整体架构中主要扮演什么角色？
- 有哪些类型的请求需要通过 grpc 的方式与 PadLocalServer 通信？
- 到底有没有一个真实的 ipad 设备，在登录着微信账号？

> PadLocal、PadLocalServer 在 Wechaty 整体架构中主要扮演什么角色？

PadLocal 在整体架构中扮演一个 微信 iPad 端代理的角色，他会与 Wechat Server 建立长连接，进行收发消息操作。但 Wechaty SDK 在 PadLocal 上的所有主动方法调用，都需要先 通过 gRPC 的方式，请求到 PadLocalServer， 在收到 PadLocalServer 的响应指示后， PadLocal 才知道如何进行后续的操作处理(通过 长/短 连接，或是 HTTP 请求 微信服务端)。并且所有的 消息的发送、接收 的加解密处理，都需要通过 PadLocalServer 进行。

> 有哪些类型的请求需要通过 gRPC 的方式与 PadLocalServer 通信？

Wechaty SDK 上的所有主动方法调用，都会变成 client.api 的方法调用，最后变成 gRPC 请求到 PadLocalServer。再根据 gRPC 的响应指示，与 Wechat Server 进行交互。

> 到底有没有一个真实的 ipad 设备，在登录着微信账号？

其实笔者通过粗浅的学习，也还不能确定 PadLocalServer 后面是否连接着真实的 ipad 设备，笔者只能根据 PadLocal 作者的文章 及 设备成本 等猜测，PadLocal 作者应该是完全破解了 微信 ipad 端 API，然后模拟出了一个 ipad 设备。

## 总结

本篇文章简单、粗浅地梳理了 PadLocal 的登录、消息收发流程。PadLocal 中的许多实现，笔者没有亲自实践过，只能根据看到的源代码进行推测，希望能借着这篇文章与感兴趣的开发者有所交流，并期待社区中有更多 PadLocal 相关的内部原理性文章产出，帮助我们学习 Wechaty 生态。
