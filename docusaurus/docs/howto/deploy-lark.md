---
title: Deploy in Lark
---

Lark provides highly-productive collaboration experience for optimal team efficiency and features like messenger, calendar, docs, mail, workplace and more. In this how to guide, you will learn how to deploy the bot in Lark locally.

![Deploy in Lark](../../static/img/docs/howto/IM_platform/deploy-lark.webp)

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
npm install wechaty-puppet-lark
export WECHATY_PUPPET=wechaty-puppet-lark
npm start
```

</TabItem>
<TabItem value="mac">

```sh
npm install wechaty-puppet-lark
export WECHATY_PUPPET=wechaty-puppet-lark
npm start
```

</TabItem>
<TabItem value="windows">

```sh
npm install wechaty-puppet-lark
set WECHATY_PUPPET=wechaty-puppet-lark
npm start
```

</TabItem>
</Tabs>

## Example

Let's take up an example on how to integrate bot from [starter templete](https://github.com/wechaty/wechaty-getting-started) to Lark. The steps are similar for all other bots as well.

### Prerequisite

1. Offical Wechaty package: [package/wechaty](https://www.npmjs.com/package/wechaty).
2. Configure your system environment variables as below:

* `WECHATY_PUPPET_LARK_APPID`: for the app ID of Feishu application.
* `WECHATY_PUPPET_LARK_APPSECRET`: for the app secret of Feishu App.
* `WECHATY_PUPPET_LARK_TOKEN`: for the verification token provided by Feishu Event Subscription Platform.

You can follow up the steps mentioned below:

<ol><li> Initialise the project by creating a new folder `my-bot`.</li>

```bash
mkdir my-bot
cd my-bot
```

<li> Install the dependencies using the following commands:</li>

```bash
npm install wechaty
```

<li> Add the dependencies for using the bot with Lark.</li>

```bash
npm install wechaty-puppet-lark
```

<li> Create a new folder `src` and add a file `my-bot.js`. Add any of the functions from <a href="#"> add functionality to the bot</a> section to the snippet below:</li>

```bash
const {
  Contact,
  Message,
  ScanStatus,
  Wechaty,
  log,
}= require('wechaty')

console.log(welcome)
const bot = new Wechaty()

/*
 *Your function goes here
 */
```

<li> Obtain youur functional permissions on Feishu platform from <a href="https://open.feishu.cn/document/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN"> Feishu Open Platform-Application Permission.</a></li>

<li> After you are done with the file, you can run the bot using the following commands:</li></ol>

```bash
export WECHATY_LOG=verbose
export WECHATY_PUPPET=wechaty-puppet-lark
node src/my-bot.js
```

Copy the generated code to Lark and you are ready to play with the bot!

You can deploy the bot with popular container solutions as well such as:

* [Deploy with Heroku](#a)
* [Deploy with Docker](#b)

## References

* Find out some more information about puppet from [docs/puppet-providers](https://wechaty.js.org/docs/puppet-providers/).
* Find out the more bot repository from [wechaty-getting-started](https://github.com/wechaty/wechaty-getting-started).
* Find out the Lark repository at [wechaty-puppet-lark](https://github.com/wechaty/wechaty-puppet-lark).
* Find out more about [Feishu Open Platfrom](https://open.feishu.cn/document/ukTMukTMukTM/uUTNz4SN1MjL1UzM).

## Blogs

* [Encapsulate the Feishu chat robot under the Wechaty interface based on the open API: the beginning of the period](https://wechaty.js.org/2020/07/29/wechaty-puppet-lark-plan-blog/).
* [Encapsulation of Feishu chat robot under Wechaty interface based on open API: end of term](https://wechaty.js.org/2020/09/30/wechaty-puppet-lark-final-blog/).
