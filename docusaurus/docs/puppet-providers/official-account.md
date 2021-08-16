---
title: 'Puppet Provider: Official Account'
sidebar_label: Official Account
---

[![Wechaty Puppet Official Account](https://img.shields.io/badge/Puppet-Official%20Account-blueviolet)](official-account)

![Wechaty Puppet Official Account](https://raw.githubusercontent.com/wechaty/wechaty-puppet-official-account/HEAD/docs/images/wechaty-puppet-official-account.png)

[![NPM Version](https://badge.fury.io/js/wechaty-puppet-official-account.svg)](https://badge.fury.io/js/wechaty-puppet-official-account)
[![npm (tag)](https://img.shields.io/npm/v/wechaty-puppet-official-account/next.svg)](https://www.npmjs.com/package/wechaty-puppet-official-account?activeTab=versions)

- Repo: <https://github.com/wechaty/wechaty-puppet-official-account>
- Support & Feedback: <https://github.com/wechaty/wechaty-puppet-official-account/issues>

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
npm install wechaty-puppet-official-account
export WECHATY_PUPPET=wechaty-puppet-official-account
npm start
```

</TabItem>
<TabItem value="mac">

```sh
npm install wechaty-puppet-official-account
export WECHATY_PUPPET=wechaty-puppet-official-account
npm start
```

</TabItem>
<TabItem value="windows">

```sh
npm install wechaty-puppet-official-account
set WECHATY_PUPPET=wechaty-puppet-official-account
npm start
```

</TabItem>
</Tabs>

## History

Developing a customized WeChat official account is a complex process, which required reading a lot of documents. Developing a robot with a custom reply function based on WeChat official account was a challenge.

Wechaty-pure-official-account does not encapsulate all the functions in WeChat public account, but extracts the custom customer service dialogue module and encapsulates it as the underlying puppet. In this way, Wechaty was used to develop the customer service dialogue management.

## Quick Start

### Introduction

Using wechaty to develop different platform chatbot is almost no difference at the code level, the underlying puppet has encapsulated all the logic, ‘wechaty’ provides a unified upper interface, so you only need to know how to use wechaty, you can develop powerful multi-platform chatbot.

The development of WeChat Official Account is compared with other platforms, the only difference is that you need to provide WeChat Official Account configuration information, such as’ appId ‘, ‘appSecret’, ‘token’ and so on.

Using wechaty to develop a dialogue chatbot on any platform can be divided into the following three steps:

1. Initialize dialogue platform puppet
2. Configure puppet to wechaty
3. Using wechaty upper interface to develop chatbot

In the first step, because the different details of the underlying packages are different, initialization operations are different, such as WeChat official account platform, which requires appId, appSecret and other information separately.

In the second step, when initializing the wechaty instance, it is necessary to configure the puppet as a parameter, so that when wechaty performs dialog operation, it actually calls the underlying logic of the puppet.

In the third step, the upper layer interface of wechaty is used to develop the chatbot. The operation mode is the same for all platforms, so the developer’s attention will be focused on this. The above two steps only need simple configuration.

There are some details about the development of WeChat official account using wechaty. Next we will see how to quickly get the official account chatbot with a few lines of code :

#### Configure Internet address

The official account of WeChat requires the address of the service provider to be external network address, supporting HTTP and HTTPS, and the ports supported respectively are: 80, 443. Therefore, it is very important to have an external IP address in the development phase. Here, we recommend several intranet penetration tools:

- Localtunel : Temporary Internet address can be created, which will be invalid after a certain period of time, but this is in line with the requirements of development stage. The steps are also very simple:

```sh
npm install -g localtunnel lt –port 80
```

- [ngrok](https://www.npmjs.com/package/ngrok) : It can create permanent external network addresses, free address numbers and limited bandwidth, but this is enough for WeChats official account development with very small dialogue.

#### Initialization of WeChat official account chatbot

Using wechaty to develop corresponding platform's chatbot, we need to use the corresponding platform puppet, and the WeChat official account corresponds to puppet: `wechaty-puppet-official-account`. The installation tutorial is as follows:

```sh
npm install wechaty-puppet-official-account
```

Next is initialization, and WeChat official account requires configuration information such as appId, appSecret, token, etc. The sample code is as follows:

```js
import { PuppetOA } from 'wechaty-puppet-official-account'

const puppet = new PuppetOA({
  appId: "wxbd801c28fbe1bbbd",
  appSecret: "6959408a3ba1c82db1a11d941df65764",
  token: "token",
  port: 8080
})
```

Next, you need to configure it to wechaty. The example code is as follows:

```js
const bot = new Wechaty({
  puppet: puppet
})
```

The initialization of wechaty has been completed. The next step is to develop the dialogue logic code of wechaty core.

#### Chatbot Core Logic

In this part, we see the simple message reply function, which is enough to show developers how to develop customized chat robots. The following is the overall sample code:

```js
import {
  Contact,
  Message,
  Wechaty,
  log,
} from 'wechaty'
import { MessageType } from 'wechaty-puppet'

async function onMessage(msg: Message) {
  log.info('StarterBot', msg.toString())

  if (msg.text() === 'ding') {
    await msg.say(`Welcome to wechaty Official Account\n refer to  ： http://www.wechaty.js.org 😄😄😄`)
  }
  if (msg.type() == MessageType.Image) {
    const fileBox = await msg.toFileBox()
    // send message to talker
    await msg.say(fileBox)
  } else {
    // I am a repeater ~_~~
    await msg.say(msg.text())
  }
}

const bot = new Wechaty({
  name: 'ding-dong-bot',
  puppet: new PuppetOA({
    appId: "wxbd801c28fbe1bbbd",
    appSecret: "6959408a3ba1c82db1a11d941df65764",
    token: "token",
    port: 80
  })
})

bot.on('message', onMessage).start()
  .then(() => log.info('StarterBot', 'Starter Bot Started.'))
  .catch(e => log.error('StarterBot', e))
```

## Contributing

Using wechaty to develop WeChat official account chatbot is very simple. It is very friendly to new developers. If you want to see the detailed usage, you can go to [github](https://github.com/wechaty/wechaty-puppet-official-account) Check the latest documentation. You are welcome to mention issues and create PRs.

## Blogs

- [Official-Account Puppet Released, Jing, Nov 6, 2020](https://wechaty.js.org/2020/11/06/wechaty-puppet-oa-released-en/)
- [Wechaty Workshop for Puppet Makers: How to make a Puppet for Wechaty, Hao, Aug 5, 2020](https://wechaty.js.org/2020/08/05/wechaty-puppet-maker/)

## Maintainers

- [@huan](https://wechaty.js.org/contributors/huan)
- [@wj-Mcat](https://wechaty.js.org/contributors/wj-mcat)
- [@qhduan](https://wechaty.js.org/contributors/qhduan)
