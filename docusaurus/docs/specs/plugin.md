---
title: Wechaty Plugin
sidebar_label: Plugin
---

> Middleware is computer software that connects software components or applications. The software consists of a set of services that allows multiple processes running on one or more machines to interact.  
> &mdash; [Wikipedia](https://en.wikipedia.org/wiki/Middleware)

See also: [What is middleware exactly?](https://stackoverflow.com/a/2904937/1123955)

## A Purpose from @Gcaufy

Yesterday, in our contributor group, @Gcaufy suggested that it would be great to add supporting of middleware to the Wechaty ecosystem, like the following usage:

> 有没有人把 踢人那个做成通用组件。。。那个很实用呀

```ts
wechaty.use(KickoutPlugin({
  room: 'RoomName',
}));
```

> 然后这个房间就有踢人功能了。

I feel that it is a Brilliant idea!

So how about we design a middleware system like this:

### Wechaty.use(middleware: WechatyMiddleware)

```ts
type WechatyMiddleware = (this: Wechaty) => void

class Wechaty {
  public use (middleware: WechatyMiddleWare) {
    middleware.apply(this)
  }
}

const kickoutPlugin = (options = {}) => {
  const roomTopic = options.roomTopic
  return function (this: Wechaty) {
    this.on('message'), message => {
      if (message.room()) && message.room().topic() === roomTopic) {
        if (message.mentionSelf()) {
          // check vote
          message.room().del(...)
        }
      }
    })
  }
}

const wechaty = WechatyBuilder.build()
wechaty.use(kickOffPlugin({ roomTopic: 'Test Room' }))
```

Any comments about this design will be welcome.

P.S. The Kickout Feature was originally introduced from the PR [add vote manager to manage vote message in room #4](https://github.com/wechaty/friday/pull/4) authored by @windmemory.

## Links

- [A short guide to Connect Middleware](https://stephensugden.com/middleware_guide/)
- [Express Documentation for Using middleware](https://expressjs.com/en/guide/using-middleware.html)

## History

- Wechaty Plugin Support with Kickout Example [#1939](https://github.com/wechaty/wechaty/issues/1939)
- [Wechaty插件系统发布，让你的机器人快速接入复杂管理和智能对话能力, @rickyyin98, Jul 22, 2020](https://wechaty.js.org/2020/07/22/wechaty-plugin-milestone/)
