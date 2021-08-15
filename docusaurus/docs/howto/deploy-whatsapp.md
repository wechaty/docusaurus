---
title: Deploy in Whatsapp
---

Whatsapp  is the most popular IM platform, so this how to guide focuses on deploying the bot in Whatsapp locally. You will learn how to deploy the bot in Whatsapp locally and integrate bot from the list of examples present in the [starter templete](https://github.com/wechaty/wechaty-getting-started).

![Deploy in WeChat](../../static/img/docs/howto/IM_platform/deploy-whatsapp.webp)

## Requirements

1. Your system must have [Node.js](https://nodejs.org/en/download/package-manager/) installed (version >= 12).
2. Your system must have [Wechaty](https://github.com/wechaty/wechaty) (version >= 0.40).
3. You must be familiar with [Wechaty Plugins](https://www.npmjs.com/package/wechaty-plugin-contrib).

## Deployment

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

## Integrating a Bot to Whatsapp

Let's take up an example on how to integrate bot from [starter templete](https://github.com/wechaty/wechaty-getting-started) to Whatsapp.

The steps are similar for all other bots as well.

### Prerequisite

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
export WECHATY_PUPPET=wechaty-puppet-whatsapp
node src/my-bot.js
```

Scan it using your Whatsapp and you are ready to play with the bot!

You can deploy the bot with popular container solutions as well such as:

* [Heroku](#a)
* [Docker](#b)

## References

* Find out some more information about puppet from [docs/puppet-providers](https://wechaty.js.org/docs/puppet-providers/).
* Get the starter template from [wechaty-getting-started](https://github.com/wechaty/wechaty-getting-started).

## Blogs

* [wechaty-puppet-whatsapp](https://wechaty.js.org/2021/02/15/publishment-of-wechaty-whatsapp-puppet)
