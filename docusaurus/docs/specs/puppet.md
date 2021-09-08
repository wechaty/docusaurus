---
title: Wechaty Puppet
sidebar_label: Puppet
---

The term `Puppet` in Wechaty is an Abstract Class for implementing protocol plugins. The plugins are the component that helps Wechaty to control the IMs like WeChat(that's the reason we call it puppet!).

The plugins are named `PuppetXXX`, like [PuppetPuppeteer](https://github.com/wechaty/wechaty-puppet-puppeteer) is using the [google puppeteer](https://github.com/GoogleChrome/puppeteer) to control the [WeChat Web API](https://wx.qq.com) via a chrome browser, [PuppetPadLocal](https://github.com/padlocal/wechaty-puppet-padlocal) is using the Pad Protocol to connect with WeChat Server.

- Puppet Providers Directory: <https://wechaty.js.org/docs/puppet-providers/>
- Puppet Compatibility Table: <https://github.com/wechaty/wechaty-puppet/wiki/Compatibility>
- Puppet Development Guide: <https://wechaty.js.org/docs/puppet-providers/diy>
- Puppet Related Links: <https://github.com/wechaty/wechaty-puppet/wiki/Links>
- Puppet Documentation: <https://wechaty.github.io/wechaty-puppet/typedoc/classes/puppet.html>

## What is Wechaty Puppet

The term `Puppet` in Wechaty is a name that we had picked up to describe part of our system: Puppet is an Abstract Class for implementing plugins, the plugins are the component that helps Wechaty to control the Wechat, that's the reason we call it `puppet`.

Plugins are named PuppetXXX, like PuppetPuppeteer is using the chrome puppeteer to control the WeChat Web API via a chrome browser, PuppetService is using the gRPC protocol to connect with a Protocol Server for controlling an iPad/Windows/whatever program.

## Show me the code

For a deeper understanding of the Puppet in Wechaty, you can read its documentation from <https://wechaty.github.io/wechaty-puppet/typedoc/classes/puppet.html> and source code if you like at <https://github.com/wechaty/wechaty-puppet/blob/master/src/puppet.ts>

![abstract puppet](/img/docs/architecture.png)

### Important Puppets

1. PuppetPuppeteer

    A web solution to connect WeChat, Wechaty init implement is by web WeChat, which inject js code into chrome.

1. PuppetMock

    A mock function to connect WeChat, not a real implement, for testing other connectors to connect with Wechaty, in other words: a mock solution to implement puppet. This is used for further to connect other solutions, such as iPad, Xposed, iOs, windows client...

1. PuppetPadLocal

    An iPad solution to connect WeChat

1. PuppetService

    See: </docs/puppet-services/>

## Using Puppet with Wechaty Examples

1. Using [wechaty-puppet-mock](https://www.npmjs.com/package/wechaty-puppet-mock) to run [ding-dong-bot](https://github.com/wechaty/wechaty/blob/master/examples/ding-dong-bot.ts)

    ```sh
    WECHATY_PUPPET=wechaty-puppet-mock npm start
    ```

1. Using [wechaty-puppet-padpro](https://www.npmjs.com/package/wechaty-puppet-padpro) to run [ding-dong-bot](https://github.com/wechaty/wechaty/blob/master/examples/ding-dong-bot.ts)

    ```sh
    WECHATY_PUPPET=wechaty-puppet-padpro npm start
    ```

## Basic Rules

Here are some rules that a Wechaty Puppet should follow:

1. [ ] **Emit Self Messages**: when the bot says anything, the bot should receive a message said by itself. (and the `message.self()` will return true for this message)
1. [ ] **Perfect Logout**: `logout` method should clean all the user session data from the puppet service, and the status of the App on the phone should display correctly (not log in on any devices).
1. [ ] **State-less Session Management** (with MemoryCard support): the puppet service should save the user session data to the memory card, and can be restored from the memory card. (See: #16)
1. [ ] **MIME File Name Extension Convention**: FileBoxChunk.name must be able to convert to a MIME type and versa visa. The puppet needs to set the name with the right extension (.jpg, .pdf, etc) to the name of the file box. See: <https://github.com/wechaty/wechaty-puppet-hostie/discussions/115>,
1. [ ] To be added.

See: <https://github.com/wechaty/puppet-services/discussions/54>

## MemoryCard

When a Wechaty bots logged in, it will have a authorized secret data to store their logged-in session, for example, the device information (62 data for pad protocol), the cookie (if you are using the web protocol), and the user session secrets, etc.

The [memory card](https://github.com/huan/memory-card) is a module designed to store those data.

### Wechaty bot login with memory card module

1. wechaty start()
1. wechaty instanciates memory card (see [wechaty.ts:start()](https://github.com/wechaty/wechaty/blob/30c446b2b78c92166a1d613952e77d3e3fdbbe1f/src/wechaty.ts#L681))
1. wechaty set memory card to puppet (see [wechaty.ts:initPuppet()](https://github.com/wechaty/wechaty/blob/30c446b2b78c92166a1d613952e77d3e3fdbbe1f/src/wechaty.ts#L406))
    1. puppet start()
    1. puppet load session from memory card
    1. puppet logged in
        1. by loaded session, or
        1. by scan qr code
    1. puppet save the session secret data to memory card
1. memory card will be saved to file or network storage for future reuse

### Conclusion

By saving the user login session secret data to memory card, the Wechaty system can save the state to local, so that it can make the puppet service provider service stateless.

Current neither of the Donut, WXWork, Rock, PadLocal have not support this stateless feature, nor the Wechaty system are ready for it.

To be implemented for our ecosystem.

See: <https://github.com/wechaty/puppet-services/discussions/16>

## Event Order

I think I can contribute some analytics to this problem:

1. As the log & puppet testing shows: the `ready` event is after the `login` event
1. However, the Wechaty system needs to load the contact payload of the `userSelf` before it emits the `login` event because the login event of Wechaty needs to take a `userSelf` instance, and it needs to be `ready-ed`.

So there will be some delay before the Wechaty emit the `login` event after it received the `login` event from its puppet.

Please pay attention to this behavior and let me know if this issue was caused by it.

### Potential Solution

For a more robust Wechaty system, we can consider saving the `ready` event if the `login` event is not emitted in Wechaty.

And when we emit the `login` event in Wechaty, we can check if the puppet has already `ready-ed`, and if so, it can emit the `ready` event right after the `login` event.

See: <https://github.com/wechaty/puppet-services/issues/31>

## Event: `ready`

Need to fire `ready` event after the bot logined and all data has been synced.

> For example, after we re-installed the WeChat app on our phone, it has to load contacts/rooms from the server for a long time.

See: <https://github.com/wechaty/wechaty-puppet-service/issues/18>

## Payload Cache Management

1. If the low-level puppet wants to dirty a payload, emit a `dirty` event. The payload will be the `type` and the `id` of the paload
1. If the high-level puppet wants to dirty a payload, call `dirtyPayload(type, id)` method, what it does (and only does) is to make the low-level puppet emit a `dirty` event.
1. Each puppet should listen to the `dirty` event, and call `XXXPayloadDirty(id)` to purge the internal cache of the specific payload inside itself

Huan(202109): That's all, I hope the above 3 points can make it clear.

Related issues

- [Specification for dirty event, dirtyPayload(), and `XXXPayloadDirty() to puppet abstraction, puppet implementation, puppet server, and puppet client. wechaty/wechaty-puppet-service#164](https://github.com/wechaty/wechaty-puppet-service/issues/164)
- [No contactPayloadDirty method in puppet-implementation. wechaty/wechaty-puppet-service#43](https://github.com/wechaty/wechaty-puppet-service/issues/43)
- [add dirty rpc function definition for sync data wechaty/grpc#79](https://github.com/wechaty/grpc/pull/79)

## NPM Publication

- [ ] `wechaty-puppet` must not a dependency. It should be put in devDependencies and peerDependencies
- [ ] `wechaty` must not a dependency. It should be put in devDependencies and peerDependencies
- [ ] must exist `examples/ding-dong-bot.ts` to implement the ding/dong logic, use puppet api only.

## Event: `heartbeat`

Puppet must emit heartbeats for provide a health check signal.

### The `heartbeat` design

Here are the details:

1. Wechaty Puppet is designed to emit at least one event in 60 seconds. If we do not have any events to emit, then we need to emit a `heartbeat` event so that it can prove itself is alive and healthy. See: <https://github.com/wechaty/wechaty-puppet/blob/bab9e29c088c33fa8bc6e148d9bdadbd453fd138/src/puppet.ts#L253-L254>
2. It seems that the PadLocal does not have any `heartbeat` event to emit when there are no other events, so if your bot idle for more than 60 seconds, then the Wechaty Puppet system will think the puppet provider has dead, so it will call `reset` to try to recover the puppet.

A leaking of `heartbeat` example logs:

```sh
02:00:13 INFO StarterBot Message#Text[🗣Contact<OssChat>@👥Room<ChatOps - Heartbeat 💖>] [太阳]

02:01:13 WARN Puppet dogReset() reason: {"data":"onGrpcStreamEvent(EVENT_TYPE_MESSAGE)","timeout":60000}
02:01:13 VERB Puppet reset(onGrpcStreamEvent(EVENT_TYPE_MESSAGE))
02:01:13 VERB PuppetService stop()
02:01:13 VERB StateSwitch <PuppetService> off(pending) <- (false)
02:01:13 VERB PuppetService stopGrpcStream()
02:01:13 VERB PuppetService stopGrpcClient()
02:01:13 VERB Puppet selfId()
02:01:13 VERB StateSwitch <PuppetService> off(true) <- (pending)
02:01:13 INFO StarterBot Contact<Mike (李卓桓)> logout
02:01:13 VERB PuppetService start()
02:01:13 VERB StateSwitch <PuppetService> on(pending) <- (false)
02:01:13 VERB PuppetService startGrpcClient()
02:01:13 VERB PuppetService discoverServiceIp(e49007b7-7523-4a80-bfdb-1be0de3844b9)
02:01:14 VERB PuppetService startGrpcStream()
02:01:14 VERB StateSwitch <PuppetService> on(true) <- (pending)
02:01:14 VERB PuppetService onGrpcStreamEvent({type:EVENT_TYPE_LOGIN(25), payload:"{"contactId":"wxid_a8d806dzznm822"}"})
02:01:14 INFO StarterBot Contact<Mike (李卓桓)> login
02:01:15 VERB PuppetService onGrpcStreamEvent({type:EVENT_TYPE_READY(23), payload:"{"data":"ready"}"})
02:01:15 VERB StateSwitch <WechatyReady> on(true) <- (true)
02:01:20 VERB PuppetService onGrpcStreamEvent({type:EVENT_TYPE_READY(23), payload:"{"data":"ready"}"})
02:01:20 VERB StateSwitch <WechatyReady> on(true) <- (true)
```

### `heartbeat` Example

Here's an [example](https://github.com/wechaty/wechaty-puppet-puppeteer/blob/07f6260b3784c65bcee24bd003aac5d2968a9efc/src/wechaty-bro.js#L103-L112) from our puppeteer puppet, which emits heartbeats in the browser, so if the browser dead, we will get to know because the heartbeat will be lost.

See: <https://github.com/wechaty/puppet-services/issues/85#issuecomment-769967606>

## Wechaty Puppet Message Processing Flow

Yes, `video` messagge is not supported now, and pr is welcome. I believe this feature is simple for you. You can have a try so you can become a wechaty contributor 👍
Please refer to :

- [message material in official-account](https://developers.weixin.qq.com/doc/offiaccount/Asset_Management/New_temporary_materials.html)
- [sendFile method](https://github.com/wechaty/wechaty-puppet-official-account/blob/master/src/official-account/official-account.ts#L299)
- [messageSend method](https://github.com/wechaty/wechaty-puppet-official-account/blob/master/src/puppet-oa.ts#L495)

We now support very limit message types:

<https://github.com/wechaty/wechaty-puppet-official-account/blob/381ffb820fcc63e4b89a99c433b696e790e06b7a/src/official-account/webhook.ts#L241-L244>

In order to support receiving more message types, like audio, you need to look at:

<https://github.com/wechaty/wechaty-puppet-official-account/blob/381ffb820fcc63e4b89a99c433b696e790e06b7a/src/official-account/webhook.ts#L247-L252>

Congratulations! It seems that you can receive the right webhook payload from WeChat Official Server when you sent an audio message to your Official Account!

However, it seems that the _Wechaty Message Payload_ has not been set correctly. In order to make it correct, you need to understand the message processing flow in Wechaty Puppet.

### Wechaty Puppet Message Processing Flow

1. The Webhook get called by the Tencent Server (what you have done already)
1. The message **event** will be propagated from the `Webhook` class to the `OfficialAccount` class:

    <https://github.com/wechaty/wechaty-puppet-official-account/blob/381ffb820fcc63e4b89a99c433b696e790e06b7a/src/official-account/official-account.ts#L116-L119>

1. The message **event** will be propagated from the `OfficialAccount` class to the `PuppetOA` class:

    <https://github.com/wechaty/wechaty-puppet-official-account/blob/381ffb820fcc63e4b89a99c433b696e790e06b7a/src/puppet-oa.ts#L188-L189>

1. After message **event** be propagated from the PuppetOA to Wechaty, then the [puppet.messagePayload()](https://github.com/wechaty/wechaty-puppet/blob/763e94194fd1104007fccad4ba4994365890cde8/src/puppet.ts#L834) will be called to get the [Wechaty Message Payload](https://github.com/wechaty/wechaty-puppet/blob/763e94194fd1104007fccad4ba4994365890cde8/src/schemas/message.ts#L103).  Here is the most important part: we need to construct a Wechaty Message Payload from the Raw Message Payload (source code at [here](https://github.com/wechaty/wechaty-puppet/blob/763e94194fd1104007fccad4ba4994365890cde8/src/puppet.ts#L854-L855)):

    ```ts
    const rawPayload = await this.messageRawPayload(messageId)
    const payload    = await this.messageRawPayloadParser(rawPayload)
    ````

### What to Do Next

So it will be very clear that, what we need to do to support the new Message Type (audio in this case), is to implement the `messageRawPayload` methods, which you can find here:

<https://github.com/wechaty/wechaty-puppet-official-account/blob/381ffb820fcc63e4b89a99c433b696e790e06b7a/src/puppet-oa.ts#L456-L478>

I hope the above explanation could help you to move forward, please feel free to let me know if you have more questions.

See: <https://github.com/wechaty/wechaty-puppet-official-account/issues/19>

## `Ding`/`Dong` Protocol

Puppet has a API named `ding(data: string): void`, and the Puppet must:

1. emit a `dong` event when the `ding()` method has been called
1. the payload of the `dong` event might contains a `data` key with the value exactly match the `data` when calling the `ding()` method.

This is for active(passive) health checking, and this is also a workaround for some edge case communication between the top puppet with the bottom puppet.

## Learn More

- Puppet Related Links: [https://github.com/wechaty/wechaty-puppet/wiki/Links](https://github.com/wechaty/wechaty-puppet/wiki/Links)
