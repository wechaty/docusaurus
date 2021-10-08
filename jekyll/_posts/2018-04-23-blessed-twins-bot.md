---
title: "New Feature: Multi-Instance Support for Wechaty v0.16(WIP)"
author: huan
categories: feature
tags:
  - code
  - news
image: /assets/2018/blessed-twins-bot.webp
---

![blessed twins bot](/assets/2018/blessed-twins-bot.webp)

Wechaty v0.16 is working in progress.

* **Good news**: We will be able to run as many as Wechaty instances than only one singleton before!
* **Bad news**: ~~BREAKING CHANGES were introduced.~~ This enhancement has no BC any more!

Wechaty could only be able to instantiate once before. This comes for one reason: I'm lazy at the beginning.

I'm lazy because there's need some works to support the second instance. For example, we can image when we are using `Contact.find('name')` to search contacts, `Contact` must know the exactly wechat account we are using. When we have one, it's all ok, but when we got the second one, we have to make a choice.

That's the problem, `Contact` is very hard to choose because it knows nothing about anything.

To make it work, we designed a strange pattern: clone the `Contact` class and using it's `static` properties to store information for future usage.

> Please let me know if you know any design pattern similar to it, or it's a confirmed an anti-pattern.

## TL;DR

Talk is cheap, show me the code.

```ts
const bot1 = new Wechaty({ profile: 'bot1' })
const bot2 = new Wechaty({ profile: 'bot2' })

const room1 = await bot1.Room.find('my room')
const room2 = await bot2.Room.find('my room')
```

That's all. Instead of `Wechaty.instance()`, we now support instanciated Wechaty directly, without any limitations.

~~The BREAKING CHANGES is: when you want to use `Room`, `Contact`, `FriendRequest`, and `Message`, you can not call them directly anymore, because they will become the `Abstract Class` soon, which means cannot be instantiated.~~

> Update 2018-05: We can still be able to instanciate the `bot.Message` by using [clone-class](https://www.npmjs.com/package/clone-class) NPM module

Instead, use `bot.Room`, `bot.Contact`, `bot.FriendRequest`, and `bot.Message`, which `bot` is the instance of `Wechaty`.

## THE LONG STORY

To allow multi-instance is on our todo list for many months.(See Github Issue [#518](https://github.com/wechaty/wechaty/issues/518))

It will be straightforward to design all the class methods with a `puppet` parameter, which can solve the problem but we have to remember the puppet in the userspace code and pass it in for every call. I do not like that.

I write four versions of Proof of Concept Code to store and hide the `puppet`.

### 1. PoC V1: `ES6 Proxy`

The first PoC is to use ES6 Proxy. It's very straightforward just to wrap the original class and set the puppet when it is being called.

```ts
const Bot1Contact = new Proxy(Contact, handlerFactory(puppet1))
```

But we need a new class is `instanceof` the original class, which means `Bot1Contact instanceof Contact` should be true. `Proxy` cannot meet this goal.

Full ES6 Proxy PoC source code is at <https://github.com/wechaty/wechaty/issues/518#issuecomment-383319998>

### 2. PoC V2: `Class.bind({})`

The second PoC is to bind the Class to a new context object by using `Contact.bind({})`

```ts
const Bot1Contact = Contact.bind({})
```

By doing this, we can get a branding new `Bot1Contact` which we can set static properties on, and `Bot1Contact instanceof Contact` will be `true`.

However, by this technology, we can not get the right static properties inside the instance methods. We always got the static properties from the original class, which means it's utterly useless for us if we can not get back the information we need on the static properties from the new class.

Full `Class.bind({})` source code is at: <https://github.com/wechaty/wechaty/issues/518#issuecomment-383357185>

### 3. PoC V3: `eval`

How about creating a new class by `eval` the source code from original class?

```ts
const Bot1Contact  = Function('return ' + Contact.toString())
```

It works like a charm, and it will be qualified if we can set the `Bot1.Contact.prototype` to the `Object.create(Contact.prototype)`, which could make `instanceof` works.

However, I found that the `Bot1.Contact.prototype` could not be changed because it's `configurable` & `writable` properties are set to `false`, and the `writable` could not be changed by `Reflect.defineProperty()`, which means it will not be able to support the `Bot1Contact instanceof Contact`.

Full `eval` source code is at <https://github.com/wechaty/wechaty/issues/518#issuecomment-383384175>

### 4. PoC V4: `class extend`

After lots of massive research & experiment work, I decided to extend the original class to create a new one for our usage.

```ts
class Bot1Contact extends Contact {}
```

By this technic, the code is very clean, the `instanceof` work as expected, everything as my wish finally!

## MODULIZE

After all the work, I modulized this part of the code as my new npm module: `clone-class` at <https://github.com/huan/node-clone-class>, with automatic unit tests and deploy to NPM by CI/CD.

![Hello Mr. Anderson](/assets/2018/agent-smith-clone-anderson.webp)

And finally, I can create as many bots as I need than before!

### NPM @latest v.s. @next

Another enhancement had been implemented while developing this new feature, is that we can publish the NPM package with `@next` tag instead of `@latest` when the version indicates that this is a development release.

For example: if the current version's minor number is odd, which means it is a development release, then when publishing it to the NPM, it will be set `dist-tag` to the `@next` instead of `@latest`.

So the regular users will always use the stable/production version when they try to `npm install wechaty` or `npm install wechaty@latest`. If they want to use the development release version, they have to opt-in by run `npm install wechaty@next`.

See more about this by reading the GitHub Issue: [Continious Deploy to NPM with the @next tag when the MINOR version number is odd(in developing branch)](https://github.com/wechaty/wechaty/issues/1158)

## CONCLUSION

**The Simplicity Behind Complexity**: The complex is easy; simple is hard.

> Designing and developing anything of consequence is incredibly challenging. Our goal is to try to bring a calm and simplicity to what are incredibly complex problems so that you’re not aware really of the solution; you’re not aware of how hard the problem was that was eventually solved.”  
> – Sir Jonathan (Jony) Ive

<script src="https://asciinema.org/a/177857.js" id="asciicast-177857" async></script>

> Wechaty twins bot powered by [blessed-contrib](https://github.com/yaronn/blessed-contrib/), terminal session recorded at <https://asciinema.org/a/177857>
