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

Operation method

Configure system environment variables

- WECHATY_PUPPET_LARK_APPID: App ID of Feishu application
- WECHATY_PUPPET_LARK_APPSECRET: App Secret of Feishu application
- WECHATY_PUPPET_LARK_TOKEN: Verification Token provided by Feishu event subscription platform

Installation dependencies

Clone the code to the local, execute npm install
Feishu platform configuration

To obtain functional permissions on Feishu platform, please refer to: Feishu Open Platform-Application Permission.
Run the sample code

```sh
ts-node .\examples\ding-dong-bot.ts
```

Follow the prompts to complete the URL configuration, you can run the example robot.

## Features

1. Send & receive messages

## Usage

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

## History

- [基于开放 API 封装 Wechaty 接口下的飞书聊天机器人, 范蕊, Sep 30, 2020](https://wechaty.js.org/2020/09/30/wechaty-puppet-lark-final-blog/)

## Important Links

- Repo: <https://github.com/wechaty/wechaty-puppet-lark>
- Support & Feedback: <https://github.com/wechaty/wechaty-puppet-lark/issues>

## Maintainers

- [@Roxanne718](https://wechaty.js.org/contributors/roxanne718)
