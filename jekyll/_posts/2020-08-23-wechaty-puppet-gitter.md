---
title: Gitter.im is supported by Wechaty now!
author: huan
image: /assets/2020/08-gitter/wechaty-gitter.webp
categories: announcement
tags:
  - news
  - puppet
  - gitter
  - puppet-provider
---

Wechaty is a RPA SDK for Chatbot Makers. It mainly works with WeChat accounts (both [individual](https://github.com/wechaty/wechaty-puppet-puppeteer) and [official](https://github.com/wechaty/wechaty-puppet-official-account)), and now we have published Gitter support for wechaty, which can make us easy to build a chatbot on Gitter.im, and sync the room between the Gitter.im and WeChat!

![Gitter + Wechaty](/assets/2020/08-gitter/gitter.webp)

## Wechaty + Gitter.im

For a long time, I want to connect my Gitter room to WeChat room and sync messages between them. Now it's possible with Wechaty + Gitter Puppet!

To support Gitter.im, the core component is the NPM module [wechaty-puppet-gitter](https://github.com/wechaty/wechaty-puppet-gitter), which brings the power of Gitter.im to Wechaty.

## Show Me The Code

Here's the example code that shows out how to use Wechaty with Gitter room: it will print all room names and you can send text messages to rooms.

```ts
// Of course you need `npm install wechaty wechaty-puppet-gitter` before run this little code snip!
import { Wechaty } from 'wechaty'
import { PuppetGitter } from 'wechaty-puppet-gitter'

async function main () {
  const puppet = new PuppetGitter('your_gitter_token')
  const bot = new Wechaty({ puppet })
  await bot.start()

  const roomList = await bot.Room.findAll()
  for (const room of roomList) {
    console.info('room found:', await room.topic())
    // await room.say('Hello from Wechaty!')
  }

  await bot.stop()
}

main().catch(console.error)
```

That's easy to use. To learn more about how to use Wechaty API, you can visit our docs website at <https://wechaty.js.org/docs>

## Use Case

I have a Gitter room [wechaty/wechaty](https://gitter.im/wechaty/wechaty), with a SideCar on our website [wechaty.js.org](https://wechaty.js.org/). At the same time, most of our developers are based on WeChat, so I want to sync the messages between them.

After we have the `wechaty-puppet-gitter`, I finally make my dream true today:

1. The gitter room `wechaty/wechaty` will receive all messages that developers send to WeChat room (actually, we have 10+ WeChat rooms, because WeChat do not permit more than 500 users in one room and we have thousands of developers already), forwarded by our Gitter bot: Mike.BO
1. The rooms on WeChat will receive all the messages that developers send to the Gitter room too, forwarded by our WeChat bot: Friday.BOT.

In order to sync two rooms, we need to create two Wechaty instances, one is using Gitter Puppet and the other is using Donut Puppet(PC Windows Protocol for WeChat).

To get to know the details about how it works, please feel free to read the source code of our chatbot, it has been open-sourced at <https://github.com/wechaty/friday/>, and here are some entries that good to start with:

1. [Create a Wechaty instance with Gitter Puppet](https://github.com/wechaty/friday/blob/c73f0647f7a03c5e10ee5745fc4bc2d818456e85/src/bots/gitter/bot.ts#L14-L21)
1. [Create a Wechaty instance with Donut Puppet](https://github.com/wechaty/friday/blob/c73f0647f7a03c5e10ee5745fc4bc2d818456e85/src/friday/bot.ts#L23-L26)
1. [Sync Gitter Room and WeChat Room Messages](https://github.com/wechaty/friday/blob/c73f0647f7a03c5e10ee5745fc4bc2d818456e85/src/cross-puppet.ts#L38-L81)

## Upload Image with Gitter API

How to send an image to the gitter.im room via API?

I ran into this question two days ago. With great help from [@MadLittleMods](https://github.com/MadLittleMods) finally, I made it!

### 1. Background

When I was learning for how to upload to Gitter room, I file an issue to request an image upload API for gitter at [here](https://gitlab.com/gitlab-org/gitter/webapp/-/issues/2571#note_402273181), then I learned that I can read the source code from web app of Gitter.

After hours of studying and testing, finally I encapsulate the send image feature into my code base, and I'd like to share it with the community in case you are interested in it.

### 2. Raw API Call

To send an image message to our Gitter room, we need to do three API calls:

1. Generate signature: call api.gitter.im and get a key to use with transloadit service
1. Get transloadit server: call api2.transloadit.com with the key from step 1, then get a host domain name for using with step 3
1. Upload file: call the server domain name from step 2, and send the image file to it

To learn the details about the above 3 steps, you can read the source code for Node.js(TypeScript) at [here](https://github.com/wechaty/wechaty-puppet-gitter/blob/93af7eba2412564f32138c9b95b335e45a95e885/src/puppet-gitter.ts#L511-L545)

### 3. Use Wechaty with Gitter Image Message

As I'm writing all of those codes for my [wechaty-puppet-gitter](https://github.com/wechaty/wechaty-puppet-gitter), which is the plugin for our [Wechaty](https://github.com/wechaty/wechaty), so I'd like to share the Wechaty way to do this.

Here's the demo source code for sending an image message to a Gitter room with Wechaty:

```ts
const { Wechaty, FileBox } from 'wechaty'

const wechaty = new Wechaty({
  puppet: 'wechaty-puppet-gitter',
  puppetOptions: { token: 'your_gitter_token' },
})

async function main () {
  await wechaty.start()
  const room = wechaty.Room.find({ topic: 'gitter/developers' })
  if (room) {
    const image = FileBox.fromUrl('https://raw.githubusercontent.com/wechaty/wechaty-puppet-gitter/master/docs/images/wechaty-puppet-gitter.png')
    await room.say(image)
  }
}

main().catch(console.error)
```

That's it!

## Summary

I'm so happy and like to share what we have created for Wechaty with the Gitter developer community, and I hope you will like it.

Thank you for your time to read my post!
