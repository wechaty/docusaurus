---
title: 'Puppet Provider: Gitter'
sidebar_label: Gitter
---

![Wechaty Puppet Gitter](https://raw.githubusercontent.com/wechaty/wechaty-puppet-gitter/HEAD/docs/images/wechaty-puppet-gitter.png)

[![NPM Version](https://badge.fury.io/js/wechaty-puppet-gitter.svg)](https://badge.fury.io/js/wechaty-puppet-gitter)
[![npm (tag)](https://img.shields.io/npm/v/wechaty-puppet-gitter/next.svg)](https://www.npmjs.com/package/wechaty-puppet-gitter?activeTab=versions)

- Repo: <https://github.com/wechaty/wechaty-puppet-gitter>
- Support & Feedback: <https://github.com/wechaty/wechaty-puppet-gitter/issues>

## Features

1. Send & receive messages
1. Message type support: TEXT & IMAGE

## Usage

<!-- MDX import -->
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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

## Roadmap

- Add `roomList` support
- Add `roomMembers` support
- etc.

## History

- [Gitter.im is supported by Wechaty now, Huan, Aug 23, 2020](https://wechaty.js.org/2020/08/23/wechaty-puppet-gitter/)

## Maintainers

- [@huan](https://wechaty.js.org/contributors/huan)
