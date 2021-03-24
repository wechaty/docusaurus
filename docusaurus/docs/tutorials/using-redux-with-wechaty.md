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

[Redux](https://redux.js.org) is a Predictable State Container for JS Apps

## Why use Redux with Wechaty

To be write...

## What is Ducks

[![Ducksify Extension](https://img.shields.io/badge/Redux-Ducksify-yellowgreen)](https://github.com/huan/ducks#3-ducksify-extension-currying--api-interface)

See [Ducks](https://github.com/huan/ducks)

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

/**
 * 1. Configure Store with RxJS Epic Middleware for Wechaty Ducks API
 */
const epicMiddleware = createEpicMiddleware()

const store = createStore(
  Api.default,
  applyMiddleware(epicMiddleware),
)

const rootEpic = combineEpics(...Object.values(Api.epics))
epicMiddleware.run(rootEpic)

/**
 * 2. Instanciate Wechaty and Install Redux Plugin
 */
const bot = Wechaty.instance({ puppet: 'wechaty-puppet-mock' })
bot.use(WechatyRedux({ store }))

/**
 * 3. Using Redux Store with Wechaty Ducks API!
 */
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

/**
 * 1. Ducksify Wechaty Redux API
 */
const ducks = new Ducks({ wechaty: Api })
const store = ducks.configureStore()

/**
 * 2. Instanciate Wechaty with Redux Plugin
 */
const bot = Wechaty.instance({ puppet: 'wechaty-puppet-mock' })
bot.use(WechatyRedux({ store }))

/**
 * 3. Using Redux Store with Wechaty Ducks API!
 *  (With the Power of Ducks / Ducksify)
 */
const wechatyDuck = ducks.ducksify('wechaty')

store.subscribe(() => console.info(store.getState()))
wechatyDuck.operations.ding(bot.id, 'Ducksify Style ding!')
```

### Ducks Api

[![Ducksify Extension](https://img.shields.io/badge/Redux-Ducksify-yellowgreen)](https://github.com/huan/ducks#3-ducksify-extension-currying--api-interface)
