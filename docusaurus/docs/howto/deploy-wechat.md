---
title: Deploy in WeChat
---

With all-in-one system and massive audience base, deploying WeChaty in WeChat can prove to be a good choice.In this how to guide, you will learn how to deploy the bot in WeChat locally.

![Deploy in WeChat](../../static/img/docs/howto/IM_platform/deploy-wechat.webp)

## Requirements

1. Your system must have [Node.js](https://nodejs.org/en/download/package-manager/) installed (version >= 12).
2. Your system must have [Wechaty](https://github.com/wechaty/wechaty) (version >= 0.40).
3. You must be familiar with [Wechaty Plugins](https://www.npmjs.com/package/wechaty-plugin-contrib).

## Deployment

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
npm install wechaty-puppet-wechat
export WECHATY_PUPPET=wechaty-puppet-wechat
npm start
```

</TabItem>
<TabItem value="mac">

```sh
npm install wechaty-puppet-wechat
export WECHATY_PUPPET=wechaty-puppet-wechat
npm start
```

</TabItem>
<TabItem value="windows">

```sh
npm install wechaty-puppet-wechat
set WECHATY_PUPPET=wechaty-puppet-wechat
npm start
```

</TabItem>
</Tabs>

## Example

Let's take up an example on how to integrate bot from [starter templete](https://github.com/wechaty/wechaty-getting-started) to WeChat.The steps are similar for all other bots as well.

### Prerequisite

1. Offical Wechaty package: [package/wechaty](https://www.npmjs.com/package/wechaty).
2. QRCode terminal edition: [package/qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal).

You can follow up the steps mentioned below:

<ol><li> Initialise the project by creating a new folder `my-bot`.</li>

```bash
mkdir my-bot
cd my-bot
```

<li> Install the dependencies using the following commands:</li>

```bash
npm install wechaty
npm install qrcode-terminal
```

<li> Add the dependencies for using the bot with WeChat.</li>

```bash
npm install wechaty-puppet-wechat
```

<li> Create a new folder `src` and add a file `my-bot.js`. Add your functions to the snippet below:</li>

```bash
const {
  Contact,
  Message,
  ScanStatus,
  Wechaty,
  log,
}= require('wechaty')

const qrTerm = require('qrcode-terminal')

console.log(welcome)
const bot = new Wechaty()

/*
 *Your function goes here
 */
```

<li> After you are done with the file, you can run the bot using the following commands:</li></ol>

```bash
export WECHATY_LOG=verbose
export WECHATY_PUPPET=wechaty-puppet-wechat
node src/my-bot.js
```

Scan it using your WeChat and you are ready to play with the bot!

You can deploy the bot with popular container solutions as well such as:

* [Deploy with Heroku](#a)
* [Deploy with Docker](#b)

## References

* Find out some more information about puppet from [docs/puppet-providers](https://wechaty.js.org/docs/puppet-providers/).
* Find out the more bot repository from [wechaty-getting-started](https://github.com/wechaty/wechaty-getting-started).
