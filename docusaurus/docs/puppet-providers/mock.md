---
title: 'Puppet Provider: Mock'
sidebar_label: Mock
---

[![Wechaty Puppet Mock](https://img.shields.io/badge/Puppet-Mock-blueviolet)](mock)

![Wechaty Puppet Mock](https://raw.githubusercontent.com/wechaty/wechaty-puppet-mock/HEAD/docs/images/mock.png)

[![NPM Version](https://badge.fury.io/js/wechaty-puppet-mock.svg)](https://badge.fury.io/js/wechaty-puppet-mock)
[![npm (tag)](https://img.shields.io/npm/v/wechaty-puppet-mock/next.svg)](https://www.npmjs.com/package/wechaty-puppet-mock?activeTab=versions)

- Repo: <https://github.com/wechaty/wechaty-puppet-mock>
- Support & Feedback: <https://github.com/wechaty/wechaty-puppet-mock/issues>

## Features

1. Helps to test Wechaty framework with a mock puppet.
2. Can be used as a starter template for writing your own puppet provider.

## Usage

Run `wechaty-puppet-mock`.

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

## Mocker and Environment

```ts
import {
  PuppetMock,
  Mocker,
  SimpleEnvironment,
}                     from 'wechaty-puppet-mock'

const mocker = new Mocker()
mocker.use(SimpleEnvironment())

const puppet = new PuppetMock({ mocker })
const wechaty = WechatyBuilder.build({ puppet })

wechaty.start()

// The Mocker will start perform the SimpleEnvironment...
```

See: [SimpleEnvironment](https://github.com/wechaty/wechaty-puppet-mock/blob/master/src/mock/environment.ts).

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
const bot = WechatyBuilder.build({ puppet })

await bot.start()

mocker.scan('https://github.com/wechaty', 1)

const user = mocker.createContact()
mocker.login(user)

const contact = mocker.createContact()
const room = mocker.createRoom()

user.say('Hello').to(contact)
contact.say('World').to(user)
```

## Helper Utilities

### StateSwitch

```ts
this.state.on('pending')
this.state.on(true)
this.state.off('pending')
this.state.off(true)

await this.state.ready('on')
await this.state.ready('off')

```

### MemoryCard

```ts
await memory.set('config', { id: 1, key: 'xxx' })
const config = await memory.get('config')
console.log(config)
// Output: { id: 1, key: 'xxx' }
```

## Example: unit testing for `math_master` game

`math_master` is a [Wechaty Vorpal Contrib](https://github.com/wechaty/wechaty-vorpal-contrib) command which is a simple game for answering math questions that asked by a Wechaty bot.

![Math Master Wechaty Game](https://raw.githubusercontent.com/wechaty/wechaty-vorpal-contrib/HEAD/docs/images/math-master.png)

You can read the unit testing script at: <https://github.com/wechaty/wechaty-vorpal-contrib/blob/master/src/contrib/math_master/math_master.spec.ts>

## History

**Milestones for master branch:**

### v0.25 (July 13, 2020)

1. Rename MockXXX to XXXMock for keep the consistent naming style with PuppetMock.
2. Export mock namespace and move all related modules under it.

### v0.22 (June 4, 2020)

Mocker Released. Mocker is a manager for controlling the behavior of the Puppet activities.

1. Add MockContact, MockRoom, and MockMessage for Mockers
2. Add MockEnvironment for mocking the server behaviors.
3. Support Wechaty#Contact.find() from the mocker.createContacts().
4. Support Wechaty#Room.find() from the mocker.createRooms().
5. Support message event for talker, listener, and room of MockMessage.

### v0.0.1 (Jun 27, 2018)

Initial version.

`PuppetMock` is a skelton Puppet without do anything, it will make testing easy when developing Wechaty.

## Maintainers

- [@huan](https://wechaty.js.org/contributors/huan)
