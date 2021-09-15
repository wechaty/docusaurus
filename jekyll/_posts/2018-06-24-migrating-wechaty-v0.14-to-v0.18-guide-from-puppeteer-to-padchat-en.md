---
title: Migrating Wechaty v0.14 to v0.18 Guide - From Puppeteer To Padchat
author: lijiarui
categories: migration
tags:
  - code
  - news
image: /assets/2018/code-migration-en.png
---

Wechaty has been updated to version 0.16(BETA) these days and begin to support all kinds of wechat solutions including web, ipad, ios, etc. My product based on wechaty has to migration from wechaty solution based on web to ipad solution.

This blog introduces how to porting code from wechaty puppeteer to padchat.

![code](/assets/2018/code-migration-en.png)

## 1. Puppeteer VS Padchat

**Puppet System** means to connect Wechaty API to any kinds of Puppets, including Web, iPad, Android, Windows Hook and ios. Different implements of these puppets are totally different, without the puppet, using one API to bridge all implement is very difficult, so we had Puppet System.

![Puppet](/assets/2018/abstract-info.png)

- Puppeteer: a solution based on Web Wechat
- Padchat: a solution based on Ipad Wechat

You can find more in this blog: [Wechaty New Version 0.16(BETA, with superpower) Released](https://wechaty.github.io/wechaty-new-release-version-0.16/)

## 2. How to run puppet-padchat

Wechaty will start with puppeteer(web solution) by default, if you want to change to padchat, you need to set the environmental variable.

See more in wechaty wiki: [How to run a new wecahty-puppet-padchat](https://github.com/wechaty/wechaty/wiki/Puppet#2-run)

### Start with Github repo

#### 1. Pull the latest code

```shell
git pull
rm -rf package-lock.json
rm -rf node_modules/
npm install
```

#### 2. Get Token

Participate in our alpha test here: [Wechaty v0.17 Padchat Testing: Win32/iPad/Android/iOS/API Puppets Support are coming!](https://github.com/wechaty/wechaty/issues/1296) and Get `WECHATY_PUPPET_PADCHAT_TOKEN`

#### 3. Set environment variable and run

Remeber to set `WECHATY_PUPPET=padchat` to change from puppeteer to padchat

```shell
WECHATY_PUPPET_PADCHAT_TOKEN=your padchat token WECHATY_PUPPET=padchat  node examples/ding-dong-bot.js
```

### NPM

#### 1. Install

```shell
npm install wechaty@next
```

#### 2. Get token

Participate in our alpha test here: [Wechaty v0.17 Padchat Testing: Win32/iPad/Android/iOS/API Puppets Support are coming!](https://github.com/wechaty/wechaty/issues/1296) and Get `WECHATY_PUPPET_PADCHAT_TOKEN`

#### 3. Set environment variable & run

Remeber to set `WECHATY_PUPPET=padchat` to change from puppeteer to padchat

```shell
WECHATY_PUPPET_PADCHAT_TOKEN=your padchat token WECHATY_PUPPET=padchat   node examples/ding-dong-bot.js

```

### Docker

#### 1. Install Docker

```shell
docker pull zixia/wechaty:latest
```

#### 2. Get Token for Docker

Participate in our alpha test here: [Wechaty v0.17 Padchat Testing: Win32/iPad/Android/iOS/API Puppets Support are coming!](https://github.com/wechaty/wechaty/issues/1296) and Get `WECHATY_PUPPET_PADCHAT_TOKEN`

#### 3. Set environment variable and Run

- Remeber to set `WECHATY_PUPPET=padchat` to change from puppeteer to padchat
- Remove wechaty in `node_module` if exist.

```shell
docker run -t -i  -e WECHATY_PUPPET="padchat" -e WECHATY_PUPPET_PADCHAT_TOKEN="your token"  --volume="$(pwd)":/bot --name=wechaty zixia/wechaty:latest examples/ding-dong-bot.ts
```

## 3. Check Code

Wechaty is written by typescript, all with strong typing. Since to change all wechaty code, I change my logic product to strong typing.

We need tools to help us check our code errors. I use **TSLint** to help me to check typescript code and use VS CODE as my IDE.

### Why we need to check code

Maybe you think JavaScript is so flexible so it needs to be checked, but typescript has been able to check out a lot of problems when compiling. Why do we still need to check the code?

This is because TypeScript focuses on the type of match, not the code style. When there are more and more people on our team, the same logic may be totally different in different people:

- Four spaces indentation or two spaces indentation?
- Should we disable `var`?
- Should all the interface name begin with `I`?
- Should it be mandatory to use `===` instead of `==`?
- Should we need a semicolon?

TypeScript will not concern these problems, but these affect the efficiency of multi-person collaboration when developing, and how easy the code to read and maintain.

[This blog](https://ts.xcatliu.com/engineering/lint.html) explain why we need to check code in typescript.

In one word, though code errors are more important than the uniform code style when a project becomes bigger and more and more developers join in, the code style constraints are still very important.

### Using TSLint

TSLint is an extensible static analysis tool that checks TypeScript code for readability, maintainability, and functionality errors. It is widely supported across modern editors & build systems and can be customized with your own lint rules, configurations, and formatters. Learn more in [TSLint Website](https://palantir.github.io/tslint/)

#### 1. Install TSLint

```shell
npm install --save-dev tslint
npm install tslint-config-standard
```

#### 2. Config File

Create config file `tslint.json`

I suggest to refer wechaty config about `tslint` and `tsconfig`

- [tslint config file in wechaty](https://github.com/wechaty/wechaty/blob/main/tslint.json)
- [tsconfig config file in wechaty](https://github.com/wechaty/wechaty/blob/main/tsconfig.json)

Here are some tips about wehcaty config:

- "strict" : true
    Enable all strict type checking options.
    Enabling --strict enables --noImplicitAny, --noImplicitThis, --alwaysStrict, --strictNullChecks, --strictFunctionTypes and --strictPropertyInitialization
- "noEmitOnError"              : true
    Do not emit outputs if any errors were reported.
- "noUnusedLocals"             : true
    Report errors on unused locals.
- "noImplicitReturns"          : true
    Report error when not all code paths in function return a value.
- "noFallthroughCasesInSwitch" : true
    Report errors for fallthrough cases in switch statement.
- "strictNullChecks"           : true
    In strict null checking mode, the null and undefined values are not in the domain of every type and are only assignable to themselves and any (the one exception being that undefined is also assignable to void).
- "noImplicitAny"              : true
    Raise error on expressions and declarations with an implied any type.
    Related issue: [ts-node 7.0 breaking change: Skip `files` by default](https://github.com/wechaty/wechaty/issues/1383)
- "no-floating-promises": true
    Check the floating promise。Related issue: [Prevent the Floating Promise in the Async/Await Code](https://github.com/wechaty/wechaty/issues/1346)
- "noUnusedParameters"         : true
    Report errors on unused parameters.。
- "noImplicitThis"             : true
    Raise error on this expression with an implied any type.

see more in [official website](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

#### 3. Add tslint script for package.json

```json
{
    "scripts": {
        "lint": "tslint --project . src/**/*.ts src/**/*.tsx",
    }
}
```

`-- project .` require all tslint to use `tsconfig.json` configuration of the current directory to get the information.

Then run `npm run lint` will check the whole code.

#### 4. Add TSLint to VSCode

Search `tslint` and install a plugin for vscode. It is enabled by default.

#### 5. Sweet Tips

I also recommend another plugin in vscode: `editorconfig`: EditorConfig helps developers define and maintain consistent coding styles between different editors and IDEs. see more: [Official EditorConfig Website](https://editorconfig.org/)

You can find wechaty editorconfig in [.editorconfig](https://github.com/wechaty/wechaty/blob/main/.editorconfig)

## 4. BREAKING CHANGES

After upgrade wechaty, see more in[blog](https://wechaty.github.io/wechaty-new-release-version-0.16/). Although we are trying to minimize API changes, there are some breaking changes. I really suggest you reading [CHANGE LOG](https://github.com/wechaty/wechaty/blob/main/CHANGELOG.md). Also, I list some important changes here:

### bot.init() change to  bot.start()

### bot.quit() change to bot.stop()

### FriendRequest change to Friendship

`FriendRequest` class refactored.

#### Before (v0.14 or below)

```ts
wechaty.on('friend', (contact, request) => {
  if (!request) {
    // this is a friend request confirmation event
  } else {
    // this is a friend request
  }
})

```

#### After (v0.16 or above)

```ts
wechaty.on('friendship', request => {
  switch (request.type()) {
    case FriendRequest.Type.RECEIVE:
      // this is a friend request request
      break
    case FriendRequest.Type.CONFIRM:
      // this is a friend request confirmation
      break
  }
})
```

Related link:

- [friend-bot.ts](https://github.com/wechaty/wechaty/blob/main/examples/friend-bot.ts)
- [BREAKING CHANGE: v0.16 on('friend`) arguments changed!](https://github.com/wechaty/wechaty/issues/1196)
- [BREAKING CHANGES v0.16: FriendRequest class will be replaced with Friendship](https://github.com/wechaty/wechaty/issues/1312)

### Message.content() change to Message.text()

From v0.16, Message.content() will be deprecated.
From v0.18, Message.content() will be removed.

Related Link:

- [BREAKING CHANGE: v0.16 will replace `Message.content()` with `Message.text()`](https://github.com/wechaty/wechaty/issues/1163)

### Remove `MediaMessage` class

From v0.16, MediaMessage will be deprecated.
From v0.18, MediaMessage will be removed.

Use Message instead.

Migration Example

```diff
- bot.say(new MediaMessage('/image.png')
+ bot.say(new Message('/image.png')
```

Related issue

- [BREAKING CHANGE: v0.16 will remove `MediaMessage` class](https://github.com/wechaty/wechaty/issues/1164)

#### A useful tip to send the image

[FileBox](https://www.npmjs.com/package/file-box), FileBox is a virtual container for packing a file data into it for future readers, and easily transport between servers with the least payload, no mater than where it is (local path, remote URL, or cloud storage).

```ts
const fileBox = FileBox.fromStream(
fs.createReadStream(BOT_QR_CODE_IMAGE_FILE),
BOT_QR_CODE_IMAGE_FILE,
)
```

### Wechaty self() change to Wechaty.userSelf()

Related issue:

- [BREAKING CHANGE v0.16 Wechaty.self() eprecated, use Wechaty.userSelf() instead](https://github.com/wechaty/wechaty/issues/1369)

### Contact.personal() and Contact.official() change to Contact.type()

#### Contact.personal() Before

```ts
const isPersonal = contact.personal()
const isOfficial = contact.official()
```

#### Contact.personal() sAfter

```ts
  /**
   * Return the type of the Contact
   *
   * @returns ContactType - Contact.Type.PERSONAL for personal account, Contact.Type.OFFICIAL for official account
   * @example
   * const isOfficial = contact.type() === Contact.Type.OFFICIAL
   */
  const type = Contact.type()
```

Related issue

- [BREAKING CHANGE v0.16 Contact.personal() and Contact.official() deprecated, use Contact.type() instead](https://github.com/wechaty/wechaty/issues/1366)

### Room.add() return from Promise `<boolean>` to `Promise<void>`

Related issue:

- [BREAKING CHANGE v0.16 room.add return `Promise<void>` instead of return `Promise<boolean>`](https://github.com/wechaty/wechaty/issues/1362)

### Room.topic() change from Sycn to Async

#### Room.topic() Before

```ts
const topic = room.topic()
```

#### Room.topic() After

```ts
const topic = await room.topic()
```

Related issue:

- [BREAKING CHANGE: v0.16 `Room.topic()` change from Sycn to Async](https://github.com/wechaty/wechaty/issues/1295)

### Room.alias(contact) change from Sycn to Async

#### Room.alias(contact) Before

```ts
const alias = room.alias(contact)
```

#### Room.alias(contact) After

```ts
const alias = await room.alias(contact)
```

Related issue:

- [BREAKING CHANGE: v0.16 `Room.alias(contact)` change from Sycn to Async](https://github.com/wechaty/wechaty/issues/1293)

### Room.memberList() change from Sycn to Async

#### Room.memberList() Before

```ts
const memberList = room.memberList()
```

#### Room.memberList() After

```ts
const memberList = await room.memberList()
```

Related Issue:

- [BREAKING CHANGE: v0.16 `Room.memberList()` change from Sycn to Async](https://github.com/wechaty/wechaty/issues/1290)

### Room.member() from sync to async

#### Room.member() Before

```ts
const contact = room.member('Huan')
```

#### Room.member() After

```diff
- const contact = room.member('Huan')
+ const contact = await room.member('Huan')
```

Related Issue:

- [BREAKING CHANGES: v0.16 `Room.member()` from `sync` to `async`](https://github.com/wechaty/wechaty/issues/1258)

### Room.has(contact) change from Sycn to Async

WARNING: This change will let us make more mistakes:

```ts
if (room.has(contact)) {
  console.error('here will always be executed because Promise === true')
}
```

#### Room.has(contact) Before

```ts
const exist = room.has(contact)
```

#### Room.has(contact) After

```ts
const exist = await room.has(contact)
```

Related Link:

- [BREAKING CHANGE: v0.16 `Room.has(contact)` change from Sycn to Async](https://github.com/wechaty/wechaty/issues/1289)
- [Detect missing await in TypeScript](https://www.meziantou.net/2017/11/20/detect-missing-await-in-typescript)

### Message.mention() change from Sync to Async

BREAKING CHANGE: v0.16 `Message.mention()` change from `sync` to `async`

#### Message.mention() Before

```ts
const mentionList = message.mention()
```

#### Message.mention() After

```diff
- const mentionList = message.mention()
+ const mentionList = await message.mention()
```

Related issue:

- [BREAKING CHANGE: v0.16 `Message.mention()` change from `sync` to `async`](https://github.com/wechaty/wechaty/issues/1259)

### `scan` Event args will become different

The good news is: the old code seems will run without problem, because it will just do nothing:

`const loginUrl = url.replace(/\/qrcode\//, '/l/')`

#### `scan` Event Before

<https://github.com/wechaty/wechaty/blob/860e85ec776ac20e92751ec4b67e0d539ef40a16/examples/ding-dong-bot.ts#L74-L77>

#### `scan` Event After

<https://github.com/wechaty/wechaty/blob/07008dff17ccc46b347ba28b85af167984573ea0/examples/ding-dong-bot.ts#L74-L76>

Notice that we deleted the ~~`const loginUrl = url.replace(/\/qrcode\//, '/l/')`~~

Related Issues:

- [BREAKING CHANGE: v0.16 `scan` event args will be different!](https://github.com/wechaty/wechaty/issues/1262)

### Class cannot be instantiated directly

#### Error Message

1. Error: the class cannot be instantiated directly!
1. Error: must not use the global Message/Contact/Room. use a cloned child via clone class instead

Currently, the `Contact`, `FriendRequest`, `Message`, and `Room` classes will not be able to instantiate directly, because they must attach with a Puppet.

They need to be `cloneClass()`-ed first, then attach the puppet, and at last they will be ready for use by:

1. `wechaty.Contact`, or
1. `puppet.Contact`, etc.

#### ~~~Do Not~~~

```ts
import { Room } from 'wechaty'
const room = await Room.create(...)
```

The above code will throw an error.

#### Do

```diff
- import { Room } from 'wechaty'
+ import { Wechaty } from 'wechaty'

- const room = await Room.create(...)
+ const wechaty = new Wechaty()
+ const room = await wechaty.Room.create(...)
```

So does Contact, FriendRequest, and Message.

Related Link

1. Wechaty Multi-Instance Support #518
1. NPM [clone-class](https://www.npmjs.com/package/clone-class)
1. <https://github.com/huan/node-clone-class/issues/5>

Related issue

- [Error: class can not be instanciated directly!](https://github.com/wechaty/wechaty/issues/1217)
- [BREAKING CHANGE v0.16 Contact, FriendRequest, Message, and Room classes will not be able to instantiate directly](https://github.com/wechaty/wechaty/issues/1364)
- [Error: static puppet not found](https://github.com/wechaty/wechaty/issues/1161)
- [Wechaty Multi-Instance Suport](https://github.com/wechaty/wechaty/issues/518)
- NPM [clone-class](https://www.npmjs.com/package/clone-class)
- <https://github.com/huan/node-clone-class/issues/5>

### Message.ext() return '.ext' instead of 'ext' before

According to the `ext()` methods behavior in Node/Python/C# etc, the `ext()` always return the filename extension that including the dot(`.`).

So the following BREAKING CHANGE was made in v0.15:

```ts
const ext = message.ext()
// assume the filename is `test.txt`
```

#### Before (v0.14 or earlieer)

`assert(ext === 'txt')`

#### After (v0.16 or later)

`assert(ext === '.txt')`

Related Link

- [BREAKING CHANGE: v0.16 Message.ext() return '.ext' instead of 'ext' before](https://github.com/wechaty/wechaty/issues/1168)

Hmmm... That's all and wish you can have a good coding experience, thanks!
