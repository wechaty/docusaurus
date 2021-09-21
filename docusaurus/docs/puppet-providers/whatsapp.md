---
title: 'Puppet Provider: WhatsApp'
sidebar_label: WhatsApp
---

[![Wechaty Puppet Whatsapp](https://img.shields.io/badge/Puppet-Whatsapp-blueviolet)](whatsapp)

![Wechaty Puppet Whatsapp](https://raw.githubusercontent.com/wechaty/wechaty-puppet-whatsapp/HEAD/docs/images/wechaty-puppet-whatsapp.png)

[![NPM Version](https://badge.fury.io/js/wechaty-puppet-whatsapp.svg)](https://badge.fury.io/js/wechaty-puppet-whatsapp)
[![npm (tag)](https://img.shields.io/npm/v/wechaty-puppet-whatsapp/next.svg)](https://www.npmjs.com/package/wechaty-puppet-whatsapp?activeTab=versions)

WhatsApp is the most popular Instance Messaging service in many parts of the world. With the WhatsApp Wechaty Puppet Provider, you can reach more than 1.5 billion WhatsApp users. You can send notifications, have two-way conversations, by building chatbots. If you're trying to reach and better converse with users in the west world, you need to consider using WhatsApp.

With the introduction of wechaty puppet and the growth of the wechaty ecosystem and community, we’re happy to introduce wechaty-puppet-whatsapp which connects Wechaty API, the conversational RPA SDK for chatbot makers, and WhatsApp, a free, multi-platform messaging app.

The WhatsApp Wechaty Puppet Provider is now available in alpha stage, to allow developers to start building and prototyping in your developing environments.

As a developer, you can use wechaty-puppet-whatsapp to build your own WhatsApp chatbot with a few lines of code, which can send and receive WhatsApp messages with wechaty API.

- Repo: <https://github.com/wechaty/wechaty-puppet-whatsapp>
- Support & Feedback: <https://github.com/wechaty/wechaty-puppet-whatsapp/issues>
- npm package: <https://npmjs.com/package/wechaty-puppet-whatsapp>
- Build on top of(A WhatsApp client library for NodeJS): [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js)
- [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js) Creator: [@pedroslopez](https://github.com/pedroslopez)

Wechaty Puppet Whatsapp is built on top of whatsapp-web.js, which is A WhatsApp client library for NodeJS that connects through the WhatsApp Web browser app, created by Pedro S. Lopez, @pedroslopez

## Features

1. Send & receive messages

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
npm install wechaty-puppet-whatsapp
export WECHATY_PUPPET=wechaty-puppet-whatsapp
npm start
```

</TabItem>
<TabItem value="mac">

```sh
npm install wechaty-puppet-whatsapp
export WECHATY_PUPPET=wechaty-puppet-whatsapp
npm start
```

</TabItem>
<TabItem value="windows">

```sh
npm install wechaty-puppet-whatsapp
set WECHATY_PUPPET=wechaty-puppet-whatsapp
npm start
```

</TabItem>
</Tabs>

## Getting started

First, you should install the package :

```sh
npm i wechaty-puppet-whatsapp
npm i wechaty
```

To enable the display of QR code in the terminal, qrcode-terminal should also be installed.

```sh
npm i qrcode-terminal
```

Then, you can implement your bot in a few lines of code, here is an basic demo:

```ts
const { Wechaty, log} = require("wechaty");
const qrterminal = require('qrcode-terminal');
const { PuppetWhatsapp} = require("wechaty-puppet-whatsapp");

const puppet  = new PuppetWhatsapp()
const bot = new Wechaty({ puppet })

bot
  .on('scan', qrcode => qrterminal.generate(qrcode, { small: true }))
  .on('login', user => log.info(`User ${user} logged in`))
  .on('message', message => log.info(`Message: ${message}`))

bot.start()
  .then(() => log.info('StarterBot', 'Starter Bot Started.'))
  .catch(e => log.error('StarterBot', e))
```

After scanning a WhatsApp QR code and logging in, you can view the received messages in the terminal, feel free to implement your own function over the messages based on your need. You can read about deploying a whatsapp puppet [here](https://github.com/wechaty/wechaty.js.org/pull/1106).

## Features to be implemented

Here are some features to be implemented :

Feature|Status
---|---
Send and Receive text messages|✅
Send media (images/audio/documents)|❌
Send video|❌
Receive Video|❌
Receive media (images/audio/video/documents)|❌
Send contact cards|❌
Get invite for group|❌
Modify group subject|❌
Add group participants|❌
Kick group participants|❌
Mention users|❌
Get contact info|❌
Get profile pictures|❌
Set user status message|❌

## History

- [Wechaty Puppet Whatsapp Has been Published, Shan, Feb 15, 2021](https://wechaty.js.org/2021/02/15/publishment-of-wechaty-whatsapp-puppet/)

## Contributing

Feel free to file an issue on the github repo for any feedback.

wechaty-puppet-whatsapp is an open-source project. If you’re interested in contributing to this project, check out the contribution guidelines to learn more, and welcome to join the Wechaty Developers’ Home or our [Gitter network](https://gitter.im/wechaty/wechaty) to join our community.

## Maintainers

- [@univerone](https://wechaty.js.org/contributors/univerone)
- [@huan](https://github.com/huan) [Huan LI](http://linkedin.com/in/zixia) <zixia@zixia.net>
