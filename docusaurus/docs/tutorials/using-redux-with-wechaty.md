---
title: 'Using Redux with Wechaty'
---

[![NPM Version](https://img.shields.io/npm/v/wechaty-redux?color=brightgreen)](https://www.npmjs.com/package/wechaty-redux)
[![NPM](https://github.com/wechaty/wechaty-redux/workflows/NPM/badge.svg)](https://github.com/wechaty/wechaty-redux/actions?query=workflow%3ANPM)
[![Ducksify Extension](https://img.shields.io/badge/Redux-Ducksify-yellowgreen)](https://github.com/huan/ducks#3-ducksify-extension-currying--api-interface)

Wrap Wechaty with Redux Actions &amp; Reducers for Easy State Management

[![Wechaty Redux](https://wechaty.github.io/wechaty-redux/images/wechaty-redux.png)](https://github.com/wechaty/wechaty-redux)

> Image Source: [Managing your React state with Redux](https://medium.com/the-web-tub/managing-your-react-state-with-redux-affab72de4b1)

[![Downloads](https://img.shields.io/npm/dm/wechaty-redux.svg?style=flat-square)](https://www.npmjs.com/package/wechaty-redux)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue.svg)](https://www.typescriptlang.org/)

## What is Redux

[Redux](https://redux.js.org) is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments

## Why use Redux with Wechaty

Redux is used for application state management.

* makes the state predictable
* easier to trace which action causes any change
* makes it easier to test, maintain and debug

## What is Ducks

[![Ducksify Extension](https://img.shields.io/badge/Redux-Ducksify-yellowgreen)](https://github.com/huan/ducks#3-ducksify-extension-currying--api-interface)

🦆🦆🦆Ducks is a Reducer Bundles Manager that Implementing the Redux Ducks Modular Proposal with Great Convenience.

> Image Credit: [Alamy](https://www.alamy.com/cute-duck-and-little-ducks-over-white-background-colorful-design-vector-illustration-image185379753.html)

[![Ducks Modular Proposal](https://img.shields.io/badge/Redux-Ducks%202015-yellow)](https://github.com/erikras/ducks-modular-redux)
[![Re-Ducks Extended](https://img.shields.io/badge/Redux-Re--Ducks%202016-orange)](https://github.com/alexnm/re-ducks)
[![Ducksify Extension](https://img.shields.io/badge/Redux-Ducksify%202020-yellowgreen)](https://github.com/huan/ducks#3-ducksify-extension-currying--ducksify-interface)

Ducks offers a method of handling redux module packaging, installing, and running with your Redux store, with middleware support.

See [Ducks](https://github.com/huan/ducks) is a Reducer Bundles Manager that Implements the Redux Ducks Modular Proposal with Great Convenience. It offers a method of handling redux module packaging, installing, and running with your Redux store, with middleware support.

## Usage

### Install

```sh
npm install wechaty-redux
```

### Vanilla Redux with Wechaty Redux Plugin

> Vanilla Redux means using plain Redux without any additional libraries like Ducks.

```ts
import {
  createStore,
  applyMiddleware,
}                         from 'redux'
import {
  createEpicMiddleware,
  combineEpics,
}                         from 'redux-observable'
import { Wechaty }        from 'wechaty'
import {
  WechatyRedux,
  Api,
}                         from 'wechaty-redux'

// 1. Configure Store with RxJS Epic Middleware for Wechaty Ducks API

const epicMiddleware = createEpicMiddleware()

const store = createStore(
  Api.default,
  applyMiddleware(epicMiddleware),
)

const rootEpic = combineEpics(...Object.values(Api.epics))
epicMiddleware.run(rootEpic)

// 2. Instanciate Wechaty and Install Redux Plugin

const bot = Wechaty.instance({ puppet: 'wechaty-puppet-mock' })
bot.use(WechatyRedux({ store }))

// 3. Using Redux Store with Wechaty Ducks API!

store.subscribe(() => console.info(store.getState()))

store.dispatch(Api.actions.ding(bot.id, 'dispatch a ding action'))

// The above code 👆 is exactly do the same thing with the following code 👇 :

Api.operations.ding(store.dispatch)(bot.id, 'call ding from operations')
```

### Ducks Proposal Style for Wechaty Redux Plugin

```ts
import { Wechaty }  from 'wechaty'
import { Ducks }    from 'ducks'
import {
  WechatyRedux,
  Api,
}                   from 'wechaty-redux'

// 1. Ducksify Wechaty Redux API

const ducks = new Ducks({ wechaty: Api })
const store = ducks.configureStore()

// 2. Instanciate Wechaty with Redux Plugin

const bot = Wechaty.instance({ puppet: 'wechaty-puppet-mock' })
bot.use(WechatyRedux({ store }))

// 3. Using Redux Store with Wechaty Ducks API!
//  (With the Power of Ducks / Ducksify)

const wechatyDuck = ducks.ducksify('wechaty')

store.subscribe(() => console.info(store.getState()))
wechatyDuck.operations.ding(bot.id, 'Ducksify Style ding!')
```

### Ducks Api

[![Ducksify Extension](https://img.shields.io/badge/Redux-Ducksify-yellowgreen)](https://github.com/huan/ducks#3-ducksify-extension-currying--api-interface)

Ducks is very easy to use, because one of the goals of designing it is to maximize the convenience. To know more about the Ducks Api,please refer [here](https://github.com/huan/ducks#3-ducksify-extension-currying--api-interface).
