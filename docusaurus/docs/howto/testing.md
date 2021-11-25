---
title: 'Writing tests'
---

[![NPM Version](https://badge.fury.io/js/wechaty-puppet-mock.svg)](https://badge.fury.io/js/wechaty-puppet-mock)
[![npm (tag)](https://img.shields.io/npm/v/wechaty-puppet-mock/next.svg)](https://www.npmjs.com/package/wechaty-puppet-mock?activeTab=versions)
[![NPM](https://github.com/wechaty/wechaty-puppet-mock/workflows/NPM/badge.svg)](https://github.com/wechaty/wechaty-puppet-mock/actions?query=workflow%3ANPM)

![chatie puppet](https://wechaty.github.io/wechaty-puppet-mock/images/mock.png)

> Picture Credit: <https://softwareautotools.com/2017/03/01/mocking-explained-in-python/>

[![Powered by Wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-brightgreen.svg)](https://github.com/wechaty/wechaty)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue.svg)](https://www.typescriptlang.org/)

Puppet Mocker & Starter Template for Wechaty, it is very useful when you:

1. Want to test the Wechaty framework with a mock puppet, or
1. You want to write your own Puppet implenmentation.

Then `PuppetMock` will helps you a lot.

## USAGE

### Puppet Mock

```ts
import { Wechaty }   from 'wechaty'
import { PuppetMock } from 'wechaty-puppet-mock'

const puppet  = new PuppetMock()
const wechaty = WechatyBuilder.build({ puppet })

wechaty.start()
```

### Mocker & Environment

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

## API Reference

### Mocker

```ts
import { Wechaty }  from 'wechaty'
import { PuppetMock, mock }   from 'wechaty-puppet-mock'

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

## HELPER UTILITIES

### StateSwitch

```ts
this.state.on('pending')
this.state.on(true)
this.state.off('pending')
this.state.off(true)

await this.state.ready('on')
await this.state.ready('off')
```
