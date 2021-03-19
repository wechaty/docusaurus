---
title: 'Puppet Provider: WeChat'
sidebar_label: WeChat
---

[![Wechaty Puppet WeChat](https://img.shields.io/badge/Puppet-WeChat-blueviolet)](wechat)

![Wechaty Puppet WeChat](https://raw.githubusercontent.com/wechaty/wechaty-puppet-wechat/HEAD/docs/images/wechaty-puppet-wechat.png)

[![NPM Version](https://badge.fury.io/js/wechaty-puppet-wechat.svg)](https://badge.fury.io/js/wechaty-puppet-wechat)
[![npm (tag)](https://img.shields.io/npm/v/wechaty-puppet-wechat/next.svg)](https://www.npmjs.com/package/wechaty-puppet-wechat?activeTab=versions)

- Repo: <https://github.com/wechaty/wechaty-puppet-wechat>
- Support & Feedback: <https://github.com/wechaty/wechaty-puppet-wechat/issues>

## Features

This is a full-featured Wechaty Puppet.

## Known Issues

1. Not all WeChat accounts can login the [Web WeChat](https://web.wechat.com) [#603](https://github.com/wechaty/wechaty/issues/603)
1. The ID of contacts and rooms will change across sessions. [#1644](https://github.com/wechaty/wechaty/issues/1644)

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

## History

- [Wechaty New Version 0.16(BETA, with super power) Released, Huan, Jun 21, 2018](https://wechaty.js.org/2018/06/21/wechaty-new-release-version-0.16/)

## Maintainers

- [@huan](https://wechaty.js.org/contributors/huan)
