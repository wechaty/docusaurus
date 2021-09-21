---
title: 'Puppet Provider: Lark'
sidebar_label: Lark
---

<!-- MDX import -->
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

[![Wechaty Puppet Lark](https://img.shields.io/badge/Puppet-Lark-blueviolet)](lark)

![Wechaty Puppet Lark](https://raw.githubusercontent.com/wechaty/wechaty-puppet-lark/HEAD/docs/images/wechaty-puppet-lark.png)

[![NPM Version](https://badge.fury.io/js/wechaty-puppet-lark.svg)](https://badge.fury.io/js/wechaty-puppet-lark)
[![npm (tag)](https://img.shields.io/npm/v/wechaty-puppet-lark/next.svg)](https://www.npmjs.com/package/wechaty-puppet-lark?activeTab=versions)

- Repo: <https://github.com/wechaty/wechaty-puppet-lark>
- Support & Feedback: <https://github.com/wechaty/wechaty-puppet-lark/issues>

## Features

1. Send & receive messages

## Usage

Run `wechaty-puppet-lark`:

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

## Integration

Let's take up an example on how to integrate bot from [starter templete](https://github.com/wechaty/wechaty-getting-started) to Lark. The step is similar for all other bots as well.

### Prerequisite

1. Offical Wechaty package: [package/wechaty](https://www.npmjs.com/package/wechaty).
2. Configure your system environment variables as below:

* `WECHATY_PUPPET_LARK_APPID`: for the app ID of Feishu application.
* `WECHATY_PUPPET_LARK_APPSECRET`: for the app secret of Feishu App.
* `WECHATY_PUPPET_LARK_TOKEN`: for the verification token provided by Feishu Event Subscription Platform.

You can follow up the steps mentioned below:

1. Initialize the project by creating a new folder `my-bot`:

```ts
mkdir my-bot
cd my-bot
```

2. Install the dependencies using the following commands:

```ts
npm install wechaty
```

3. Add the dependencies for using the bot with Lark:

```ts
npm install wechaty-puppet-lark
```

4. Create a new folder `src` and add a file `my-bot.js`. Add any of the functions from <a href="#"> add functionality to the bot</a> section to the snippet below:

```ts
import {
  Contact,
  Message,
  ScanStatus,
  Wechaty,
  log,
} from 'wechaty'

console.log(welcome)
const bot = new Wechaty()

/*
 *Your function goes here
 */
```

5. Obtain your functional permissions on Feishu platform from [Feishu Open Platform-Application Permission](https://open.feishu.cn/document/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN).

6. After you are done with the file, you can run the bot using the following commands:

```ts
export WECHATY_LOG=verbose
export WECHATY_PUPPET=wechaty-puppet-lark
node src/my-bot.js
```

Copy the generated code to Lark and you are ready to play with the bot!

## Videos

### Presentation

<iframe width="730" height="441" src="https://www.youtube.com/embed/eutz5EMlJCI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Live Coding

<iframe width="730" height="441" src="https://www.youtube.com/embed/_y5DktHdL9U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

For more information on deploying in Lark, you can refer to this [Pull Request](https://github.com/wechaty/wechaty.js.org/pull/1101)

## Blog links

- [基于开放 API 封装 Wechaty 接口下的飞书聊天机器人, 范蕊, Sep 30, 2020](https://wechaty.js.org/2020/09/30/wechaty-puppet-lark-final-blog/)
- [Wechaty Puppet lark plan blog](https://wechaty.js.org/2020/07/29/wechaty-puppet-lark-plan-blog/)
- [Wechaty Puppet Lark mid term blog](https://wechaty.js.org/2020/08/19/wechaty-puppet-lark-mid-term-blog/)
- [Wechaty Puppet Lark final blog](https://wechaty.js.org/2020/09/30/wechaty-puppet-lark-final-blog/)
- [OSPP plan Wechaty Puppet Lark](https://wechaty.js.org/2021/07/14/ospp-plan-wechaty-puppet-lark/)

## Maintainers

- [@Roxanne718](https://wechaty.js.org/contributors/roxanne718)
