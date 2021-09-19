---
title: 'Puppet Provider: Gitter'
sidebar_label: Gitter
---

[![Wechaty Puppet Gitter](https://img.shields.io/badge/Puppet-Gitter-blueviolet)](gitter)

![Wechaty Puppet Gitter](https://raw.githubusercontent.com/wechaty/wechaty-puppet-gitter/HEAD/docs/images/wechaty-puppet-gitter.png)

[![NPM Version](https://badge.fury.io/js/wechaty-puppet-gitter.svg)](https://badge.fury.io/js/wechaty-puppet-gitter)
[![npm (tag)](https://img.shields.io/npm/v/wechaty-puppet-gitter/next.svg)](https://www.npmjs.com/package/wechaty-puppet-gitter?activeTab=versions)

Gitter support for wechaty makes it easy to build a chatbot on Gitter.im, and sync the room between the Gitter.im and WeChat! This will be useful to you if you want to connect your Gitter room to WeChat room and sync messages between them.

To support Gitter.im, the core component is the NPM module wechaty-puppet-gitter, which brings the power of Gitter.im to Wechaty.

## Features

1. Send & receive messages
1. Message type support: TEXT & IMAGE

## Usage

<!-- MDX import -->
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

<Tabs
  groupId="operating-systems"
  defaultValue="linux"
  values={[
    { label: 'Linux',   value: 'linux', },
    { label: 'macOS',   value: 'mac', },
    { label: 'Windows', value: 'windows', },
  ]
}>

<TabItem value="linux">

```sh
npm install wechaty-puppet-gitter
export WECHATY_PUPPET=wechaty-puppet-gitter
npm start
```

</TabItem>
<TabItem value="mac">

```sh
npm install wechaty-puppet-gitter
export WECHATY_PUPPET=wechaty-puppet-gitter
npm start
```

</TabItem>
<TabItem value="windows">

```sh
npm install wechaty-puppet-gitter
set WECHATY_PUPPET=wechaty-puppet-gitter
npm start
```

</TabItem>
</Tabs>

To get to know the details about how it works, please feel free to read the source code of our chatbot, it has been open-sourced [here](https://github.com/wechaty/friday/), and here are some entries that good to start with:

- [Create a Wechaty instance with Gitter Puppet](https://github.com/wechaty/friday/blob/c73f0647f7a03c5e10ee5745fc4bc2d818456e85/src/bots/gitter/bot.ts#L14-L21)
- [Create a Wechaty instance with Donut Puppet](https://github.com/wechaty/friday/blob/c73f0647f7a03c5e10ee5745fc4bc2d818456e85/src/friday/bot.ts#L23-L26)
- [Sync Gitter Room and WeChat Room Messages](https://github.com/wechaty/friday/blob/c73f0647f7a03c5e10ee5745fc4bc2d818456e85/src/cross-puppet.ts#L38-L81)

## Use Case

You may have a Gitter room wechaty/wechaty, with a SideCar on the wechaty website wechaty.js.org. At the same time, most of wechaty developers are based on WeChat, so you may want to sync the messages between them. With wechaty-puppet-gitter, you can do so easily. This is what happens :

- The gitter room wechaty/wechaty will receive all messages that developers send to WeChat room (There are 10+ WeChat rooms, because WeChat do not permit more than 500 users in one room and there are thousands of developers already), forwarded by the Gitter bot: Mike.BO
- The rooms on WeChat will receive all the messages that developers send to the Gitter room too, forwarded by the WeChat bot: Friday.BOT.
- In order to sync two rooms, we need to create two Wechaty instances, one is using Gitter Puppet and the other is using Donut Puppet(PC Windows Protocol for WeChat).

## Upload Image with Gitter API

Lets understand how to send an image to the gitter.im room via API.

### Raw API Call

To send an image message to your Gitter room, three API calls are required:

1. Generate signature: Call api.gitter.im and get a key to use with transloadit service.
2. Get transloadit server: Call api2.transloadit.com with the key from step 1, then get a host domain name for using with step 3.
3. Upload file: Call the server domain name from step 2, and send the image file to it.

Here’s the demo source code for sending an image message to a Gitter room with Wechaty:

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

## Roadmap

- Add `roomList` support
- Add `roomMembers` support

## Important Links

- Repo: <https://github.com/wechaty/wechaty-puppet-gitter>
- Support & Feedback: <https://github.com/wechaty/wechaty-puppet-gitter/issues>

## Blogs

- [Gitter.im is supported by Wechaty now, Huan, Aug 23, 2020](https://wechaty.js.org/2020/08/23/wechaty-puppet-gitter/)

## Maintainers

- [@huan](https://wechaty.js.org/contributors/huan)
