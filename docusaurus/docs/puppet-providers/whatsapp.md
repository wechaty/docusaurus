---
title: 'Puppet Provider: Whatsapp'
sidebar_label: Whatsapp
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
- [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js)
- [@pedroslopez](https://github.com/pedroslopez)

Wechaty Puppet Whatsapp is built on top of whatsapp-web.js, which is A WhatsApp client library for NodeJS that connects through the WhatsApp Web browser app, created by Pedro S. Lopez, @pedroslopez

## Features

1. Send & receive messages

## Usage

### Requirements

1. Your system must have [Node.js](https://nodejs.org/en/download/package-manager/) installed (version >= 12).
2. Your system must have [Wechaty](https://github.com/wechaty/wechaty) (version >= 0.40).
3. You must be familiar with [Wechaty Plugins](https://www.npmjs.com/package/wechaty-plugin-contrib).

### Deployment

Run `wechaty-puppet-whatsapp`:

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

### Integrating a Bot to Whatsapp

Let's take up an example on how to integrate bot from [starter templete](https://github.com/wechaty/wechaty-getting-started) to Whatsapp.

The steps are similar for all other bots as well.

#### Prerequisite

1. Offical Wechaty package: [package/wechaty](https://www.npmjs.com/package/wechaty).
2. QRCode terminal edition: [package/qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal).

You can follow up the steps mentioned below:

<ol><li> Initialize the project by creating a new folder `my-bot`.</li>

```bash
mkdir my-bot
cd my-bot
```

<li> Install the dependencies using the following commands:</li>

```bash
npm install wechaty
npm install qrcode-terminal
```

<li> Add the dependencies for using the bot with Whatsapp.</li>

```bash
npm install wechaty-puppet-whatsapp
```

<li> Create a new folder `src` and add a file `my-bot.js`. Add your custom functions to the code snippet below:</li>

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

- [Wechaty Puppet Whatsapp Has been Published, Shan, Feb 15, 2021](https://wechaty.js.org/2021/02/15/publishment-of-wechaty-whatapp-puppet/)

## Contributing

Feel free to file an issue on the github repo for any feedback.

wechaty-puppet-whatsapp is an open-source project. If you’re interested in contributing to this project, check out the contribution guidelines to learn more, and welcome to join the Wechaty Developers’ Home or our Gitter network <https://gitter.im/wechaty/wechaty> to join our community.

## Maintainers

- [@univerone](https://wechaty.js.org/contributors/univerone)
- [@huan] Huan LI <zixia@zixia.net>
