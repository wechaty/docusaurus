---
title: 'Puppet Provider: Mock'
sidebar_label: Mock
---

![Wechaty Puppet Mock](https://raw.githubusercontent.com/wechaty/wechaty-puppet-mock/HEAD/docs/images/mock.png)

[![NPM Version](https://badge.fury.io/js/wechaty-puppet-mock.svg)](https://badge.fury.io/js/wechaty-puppet-mock)
[![npm (tag)](https://img.shields.io/npm/v/wechaty-puppet-mock/next.svg)](https://www.npmjs.com/package/wechaty-puppet-mock?activeTab=versions)

- Repo: <https://github.com/wechaty/wechaty-puppet-mock>
- Support & Feedback: <https://github.com/wechaty/wechaty-puppet-mock/issues>

## Features

1. Help to test Wechaty framework with a mock puppet
1. Using as a starter template for write your own puppet provider

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
npm install wechaty-puppet-mock
export WECHATY_PUPPET=wechaty-puppet-mock
npm start
```

</TabItem>
<TabItem value="mac">

```sh
npm install wechaty-puppet-mock
export WECHATY_PUPPET=wechaty-puppet-mock
npm start
```

</TabItem>
<TabItem value="windows">

```sh
npm install wechaty-puppet-mock
set WECHATY_PUPPET=wechaty-puppet-mock
npm start
```

</TabItem>
</Tabs>

## Mocker & Environment

```ts
import {
  PuppetMock,
  Mocker,
  SimpleEnvironment,
}                     from 'wechaty-puppet-mock'

const mocker = new Mocker()
mocker.use(SimpleEnvironment())

const puppet = new PuppetMock({ mocker })
const wechaty = new Wechaty({ puppet })

wechaty.start()

// The Mocker will start perform the SimpleEnvironment...
```

See: [SimpleEnvironment](https://github.com/wechaty/wechaty-puppet-mock/blob/master/src/mock/environment.ts)

## API Reference

### Mocker

```ts
import { Wechaty }  from 'wechaty'
import { 
  PuppetMock,
  mock,
}                   from 'wechaty-puppet-mock'

const mocker = new mock.Mocker()
const puppet = new PuppetMock({ mocker })
const bot = new Wechaty({ puppet })

await bot.start()

mocker.scan('https://github.com/wechaty', 1)

const user = mocker.createContact()
mocker.login(user)

const contact = mocker.createContact()
const room = mocker.createRoom()

user.say('Hello').to(contact)
contact.say('World').to(user)
```

## Example: unit testing for `math_master` game

`math_master` is a [Wechaty Vorpal Contrib](https://github.com/wechaty/wechaty-vorpal-contrib) command which is a simple game for answering math questions that asked by a Wechaty bot.

![Math Master Wechaty Game](https://raw.githubusercontent.com/wechaty/wechaty-vorpal-contrib/HEAD/docs/images/math-master.png)

You can read the unit testing script at: <https://github.com/wechaty/wechaty-vorpal-contrib/blob/master/src/contrib/math_master/math_master.spec.ts>

## Roadmap

- to be added

## History

See: [Project README](https://github.com/wechaty/wechaty-puppet-mock#history)

## Maintainers

- [@huan](https://github.com/huan)
