---
title: 如何将业务代码从Puppeteer 迁移到Padchat
author: lijiarui
categories: migration
tags:
  - code
  - news
image: /assets/2018/code-migration-zh.png
---

Wechaty 近期有了很大的升级，从0.14版本之后，开始陆续支持各类非Web 版本的解决方案。我的业务逻辑代码重度依赖于wechaty，所以自从wechaty release 了0.15 版本以后，我开始将我们的业务逻辑代码陆续从Web版本迁移到了非Web版本上来。

本篇博客主要介绍了我是如何将业务逻辑代码，从Puppeteer 迁移到 Padchat上的。

![code](/assets/2018/code-migration-zh.png)

## 1. Puppeteer VS Padchat

首先进行一下名词解释，在说这两个名词之前，先介绍一下Puppet

**Puppet 系统**是一个用来连接Wechaty API 和其他的微信实现方式的连接器。简单的来说，通过微信API进行微信自动化操作会有很多种不同的是实现方式，比如基于网页微信的实现，基于ipad协议的实现，基于ios hook 的实现，基于windows hook 的实现，基于Android xposed的实现等等。不同的实现方法代码是完全不一样的。如果没有puppet 帮助桥接不同的实现方法，开发者就会有不同的接入API，这对上层业务逻辑的开发非常不方便，因此这是Puppet 系统设计的初衷。

现在再来介绍Puppeteer 和 Padchat 就会比较清楚了:

![image](/assets/2018/abstract-info.png)

- Puppeteer: 基于网页微信的实现，通过puppet连接到Wechaty API。
- Padchat: 基于ipad 协议的实现，通过puppet 连接到Wechaty API。

具体的Puppet 和各个实现方法，可以参考下图和这篇博客：[Wechaty New Version 0.16(BETA, with super power) Released](https://wechaty.github.io/wechaty-new-release-version-0.16/)

## 2. 如何无缝切换

默认情况下，启动wechaty 是使用puppeteer的，切换成padchat 需要再运行的时候设置环境变量。

更多信息详细见wiki[How to run a new wecahty-puppet-padchat](https://github.com/wechaty/wechaty/wiki/Puppet#2-run)

### Git 源码的方式

#### 1. 拉下github最新的代码

```shell
git pull
rm -rf package-lock.json
rm -rf node_modules/
npm install
```

#### 2. 获取token并设置环境变量

在[Wechaty v0.17 Padchat Testing: Win32/iPad/Android/iOS/API Puppets Support are comming!](https://github.com/wechaty/wechaty/issues/1296) 中进行alpha test 版本的内测报名，并获取到token： `WECHATY_PUPPET_PADCHAT_TOKEN`

#### 3. 设置环境变量并运行

记得要设置`WECHATY_PUPPET=padchat` 来切换puppet版本。

```shell
WECHATY_PUPPET_PADCHAT_TOKEN=your padchat token WECHATY_PUPPET=padchat  node examples/ding-dong-bot.js
```

### NPM

#### 1. 安装到最新版本的npm

```shell
npm install wechaty@next
```

#### 2. NPM下获取token并设置环境变量

在[#1296](https://github.com/wechaty/wechaty/issues/1296) 中进行alpha test 版本的内测报名，并获取到token： `WECHATY_PUPPET_PADCHAT_TOKEN`

#### 3. NPM下设置环境变量并运行

记得要设置`WECHATY_PUPPET=padchat` 来切换puppet版本。

```shell
WECHATY_PUPPET_PADCHAT_TOKEN=your padchat token WECHATY_PUPPET=padchat   node examples/ding-dong-bot.js

```

### Docker

#### 1. 拉下最新版本的docker 镜像

```shell
docker pull zixia/wechaty:latest
```

#### 2. 获取token

在[#1296](https://github.com/wechaty/wechaty/issues/1296) 中进行alpha test 版本的内测报名，并获取到token： `WECHATY_PUPPET_PADCHAT_TOKEN`

#### 3. Docker 下设置环境变量并运行

- 记得要设置`WECHATY_PUPPET=padchat` 来切换puppet版本。
- 记得docker 版本不要重复安装wechaty 的npm 包，检查方法： 查看node_module 是否有wechaty，如果有就删掉它

```shell
docker run -t -i  -e WECHATY_PUPPET="padchat" -e WECHATY_PUPPET_PADCHAT_TOKEN="your token"  --volume="$(pwd)":/bot --name=wechaty zixia/wechaty:latest examples/ding-dong-bot.ts
```

## 3. 代码检查

wechaty 是使用typescript 写的，都是强类型的，我之前的代码没有统一typings，由于切换到padchat 以后，很多函数由同步变成了异步，所以索性我的代码也统一用了typings，并进行了类型检查。

人是一定会出错的，所以我们需要通过代码检查工具来发现代码错误、统一代码风格。我使用 **TSLint** 进行 TypeScript 的代码检查，编辑器用的是VSCODE。**TSLint** 支持自定义的代码检测规则。

### 为什么需要代码检查

有人会觉得，JavaScript 非常灵活，所以需要代码检查。而 TypeScript 已经能够在编译阶段检查出很多问题了，为什么还需要代码检查呢？

因为 TypeScript 关注的重心是类型的匹配，而不是代码风格。当团队的人员越来越多时，同样的逻辑不同的人写出来可能会有很大的区别：

- 缩进应该是四个空格还是两个空格？
- 是否应该禁用 var？
- 接口名是否应该以 I 开头？
- 是否应该强制使用 === 而不是 ==？
- 是否需要分号？

这些问题 TypeScript 不会关注，但是却影响到多人协作开发时的效率、代码的可理解性以及可维护性。

[这篇文章](https://ts.xcatliu.com/engineering/lint.html) 给了很好的例子和相关说明，有兴趣的同学可以移步去看看

简单的说，虽然发现代码错误比统一的代码风格更重要，但是当一个项目越来越庞大，开发人员也越来越多的时候，代码风格的约束还是必不可少的。

### 使用tslint 工具代码检查

#### 1. 安装

TSLint 的使用比较简单，参考[官网](https://palantir.github.io/tslint/)的步骤安装到本地即可：

```shell
npm install --save-dev tslint
npm install tslint-config-standard
```

#### 2. 创建配置文件

创建配置文件 `tslint.json`

tslint 和tsconfig 建议参考wechaty 的配置：

- [tslint 配置文件](https://github.com/wechaty/wechaty/blob/main/tslint.json)
- [tsconfig 配置文件](https://github.com/wechaty/wechaty/blob/main/tsconfig.json)

这里针对wechaty 的一些配置进行说明

- "strict" : true
    启用所有严格类型检查选项。 启用 --strict相当于启用 --noImplicitAny, --noImplicitThis, --alwaysStrict,--strictNullChecks和 --strictFunctionTypes和--strictPropertyInitialization。
- "noEmitOnError"              : true
    报错时不生成输出文件。
- "noUnusedLocals"             : true
    若有未使用的局部变量则抛错。
- "noImplicitReturns"          : true
    不是函数的所有返回路径都有返回值时报错。
- "noFallthroughCasesInSwitch" : true
    报告switch语句的fallthrough错误。（即，不允许switch的case语句贯穿）
- "strictNullChecks"           : true
    在严格的 null检查模式下， null和 undefined值不包含在任何类型里，只允许用它们自己和 any来赋值（有个例外， undefined可以赋值到 void）
- "noImplicitAny"              : true
    在表达式和声明上有隐含的 any类型时报错。 相关issue: [ts-node 7.0 breaking change: Skip `files` by default](https://github.com/wechaty/wechaty/issues/1383)
- "no-floating-promises": true
    如果有async 方法，要求必须使用await。相关issue: [Prevent the Floating Promise in the Async/Await Code](https://github.com/wechaty/wechaty/issues/1346)
- "noUnusedParameters"         : true
    若有未使用的参数则抛错。
- "noImplicitThis"             : true
    当 this表达式的值为 any类型的时候，生成一个错误。

更多参考[typescript 文档](https://tslang.cn/docs/handbook/compiler-options.html)

#### 3. 为 package.json 添加 tslint 脚本

```json
{
    "scripts": {
        "lint": "tslint --project . src/**/*.ts src/**/*.tsx",
    }
}
```

其中 --project . 会要求 tslint 使用当前目录的 tsconfig.json 配置来获取类型信息，很多规则需要类型信息才能生效。

此时执行 `npm run lint` 即可检查整个项目

#### 4. 在 VSCode 中集成 TSLint 检查

在 VSCode 中安装 `tslint` 插件即可，安装好之后，默认是开启的状态。

#### 5. 彩蛋

唔。。。这里再赠送一个VSCode 插件彩蛋：editorconfig : 让使用不同编辑器的开发者在共同开发一个项目时“无痛”地遵循编码规范。更多说明见[editorconfig官网](https://editorconfig.org/)

wechaty 的配置见 [.editorconfig](https://github.com/wechaty/wechaty/blob/main/.editorconfig)

## 4. BREAKING CHANGES

wechaty 升级版本后(参考[博客](https://wechaty.github.io/wechaty-new-release-version-0.16/))，虽然尽可能的减少接口变动，但是为了适配padchat， 还是会有一些接口有了不同程度的变化。因此在进行代码迁移的时候，我们也需要修改原来的部分代码，我把相关内容列在下面了，更多内容，建议仔细阅读[CHANGE LOG](https://github.com/wechaty/wechaty/blob/main/CHANGELOG.md)

### bot.init() 变成了 bot.start()

### bot.quit() 变成了 bot.stop()

### FriendRequest 改成了 Friendship

`FriendRequest` class refactored.

#### 之前 (v0.14 或者更低)

```ts
wechaty.on('friend', (contact, request) => {
  if (!request) {
    // this is a friend request confirmation event
  } else {
    // this is a friend request
  }
})

```

#### 之后 (v0.16 或者更高)

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

建议仔细看代码[friend-bot.ts](https://github.com/wechaty/wechaty/blob/main/examples/friend-bot.ts)

相关issue:

- [BREAKING CHANGE: v0.16 on('friend`) arguments changed!](https://github.com/wechaty/wechaty/issues/1196)
- [BREAKING CHANGES v0.16: FriendRequest class will be replaced with Friendship](https://github.com/wechaty/wechaty/issues/1312)

### Message.content() 改成了 Message.text()

从 v0.16, Message.content() 依然是可被兼容的状态.
从 v0.18, Message.content() 会彻底弃用.

相关issue:

- [BREAKING CHANGE: v0.16 will replace `Message.content()` with `Message.text()`](https://github.com/wechaty/wechaty/issues/1163)

### MediaMessage 将会被弃用

从 0.16, MediaMessage 依然是可被兼容的状态.
从 v0.18, MediaMessage 会彻底弃用.

未来统一使用 Message

代码变化

```diff
- bot.say(new MediaMessage('/image.png')
+ bot.say(new Message('/image.png')
```

相关issue:

- [BREAKING CHANGE: v0.16 will remove `MediaMessage` class](https://github.com/wechaty/wechaty/issues/1164)

#### 介绍一个好用的发送图片的功能

介绍一个非常好用的包: [FileBox 官网](https://www.npmjs.com/package/file-box), 一个将文件数据打包方便读取的npm 包，可以轻松地在具有最少有效负载的服务器之间进行传输，而不会比其位置（本地路径，远程URL或云存储）。详细使用方法见官网。

```ts
const fileBox = FileBox.fromStream(
fs.createReadStream(BOT_QR_CODE_IMAGE_FILE),
BOT_QR_CODE_IMAGE_FILE,
)
```

### Wechaty.self() 改成了 Wechaty.userSelf()

相关issue:

- [BREAKING CHANGE v0.16 Wechaty.self() eprecated, use Wechaty.userSelf() instead](https://github.com/wechaty/wechaty/issues/1369)

### Contact.personal() 和 Contact.official() 改成了 Contact.type()

#### 之前

```ts
const isPersonal = contact.personal()
const isOfficial = contact.official()
```

#### 现在

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

相关issue:

- [BREAKING CHANGE v0.16 Contact.personal() and Contact.official() deprecated, use Contact.type() instead](https://github.com/wechaty/wechaty/issues/1366)

### Room.add() 返回值从 `Promise<boolean>` 变成了 `Promise<void>`

相关issue:

- [BREAKING CHANGE v0.16 room.add return `Promise<void>` instead of return `Promise<boolean>`](https://github.com/wechaty/wechaty/issues/1362)

### Room.topic() 从Sync 变成了 Async

#### Room.topic() 之前

```ts
const topic = room.topic()
```

#### Room.topic() 现在

```ts
const topic = await room.topic()
```

相关issue:

- [BREAKING CHANGE: v0.16 `Room.topic()` change from Sycn to Async](https://github.com/wechaty/wechaty/issues/1295)

### Room.alias(contact) 从Sync 变成了 Async

#### Room.alias(contact) 之前

```ts
const alias = room.alias(contact)
```

#### Room.alias(contact) 现在

```ts
const alias = await room.alias(contact)
```

相关issue:

- [BREAKING CHANGE: v0.16 `Room.alias(contact)` change from Sycn to Async](https://github.com/wechaty/wechaty/issues/1293)

### Room.memberList() 从Sync 变成了 Async

#### Room.memberList() 之前

```ts
const memberList = room.memberList()
```

#### Room.memberList() 现在

```ts
const memberList = await room.memberList()
```

相关issue:

- [BREAKING CHANGE: v0.16 `Room.memberList()` change from Sycn to Async](https://github.com/wechaty/wechaty/issues/1290)

### Room.member() 从Sync 变成了 Async

#### Room.member() 之前

```ts
const contact = room.member('Huan')
```

#### Room.member() 现在

```diff
- const contact = room.member('Huan')
+ const contact = await room.member('Huan')
```

相关issue:

- [BREAKING CHANGES: v0.16 `Room.member()` from `sync` to `async`](https://github.com/wechaty/wechaty/issues/1258)

### Room.has(contact) 从Sync 变成了 Async

#### Room.has(contact) 之前

```ts
const exist = room.has(contact)
```

#### Room.has(contact) 现在

```ts
const exist = await room.has(contact)
```

相关issue:

- [BREAKING CHANGE: v0.16 `Room.has(contact)` change from Sycn to Async](https://github.com/wechaty/wechaty/issues/1289)

### Message.mention() 从Sync 变成了 Async

#### Message.mention() 之前

```ts
const mentionList = message.mention()
```

#### Message.mention() 之后

```diff
- const mentionList = message.mention()
+ const mentionList = await message.mention()
```

相关issue:

- [BREAKING CHANGE: v0.16 `Message.mention()` change from `sync` to `async`](https://github.com/wechaty/wechaty/issues/1259)

### `scan` 事件参数发生了变化

对老代码是兼容的

#### `scan` 事件之前

<https://github.com/wechaty/wechaty/blob/860e85ec776ac20e92751ec4b67e0d539ef40a16/examples/ding-dong-bot.ts#L74-L77>

#### `scan` 事件之后

<https://github.com/wechaty/wechaty/blob/07008dff17ccc46b347ba28b85af167984573ea0/examples/ding-dong-bot.ts#L74-L76>

请注意我们删除了 ~~`const loginUrl = url.replace(/\/qrcode\//, '/l/')`~~

相关issue:

- [BREAKING CHANGE: v0.16 `scan` event args will be different!](https://github.com/wechaty/wechaty/issues/1262)

### `Room`,`Contact`,`Message`,`FriendRequest`在不能直接实例化

#### 相关错误信息

1. Error: class can not be instanciated directly!
1. Error: must not use the global Message/Contact/Room. use a cloned child via cloneClass instead

由于 `Contact`, `FriendRequest`, `Message`, 和 `Room` 这些类要和 `Puppet` 绑定，所以这些类不能直接实例化

他们需要先有一个 `cloneClass()`, 然后才能和`Puppet` 绑定, 之后才能像下面一样使用:

1. `wechaty.Contact`, or
1. `puppet.Contact`, etc.

#### ~~~错误的做法~~~

```ts
import { Room } from 'wechaty'
const room = await Room.create(...)
```

上面的代码出出错

#### 正确的做法

```diff
- import { Room } from 'wechaty'
+ import { Wechaty } from 'wechaty'

- const room = await Room.create(...)
+ const wechaty = new Wechaty()
+ const room = await wechaty.Room.create(...)
```

Contact, FriendRequest, and Message这些也一样

Related Link

- [Error: class can not be instanciated directly!](https://github.com/wechaty/wechaty/issues/1217)
- [BREAKING CHANGE v0.16 Contact, FriendRequest, Message, and Room classes will not be able to instantiate directly](https://github.com/wechaty/wechaty/issues/1364)
- [Error: static puppet not found](https://github.com/wechaty/wechaty/issues/1161)
- [Wechaty Multi-Instance Suport](https://github.com/wechaty/wechaty/issues/518)
- NPM [clone-class](https://www.npmjs.com/package/clone-class)
- <https://github.com/huan/node-clone-class/issues/5>

### Message.ext() 返回 `.ext` 而不是 `ext`

根据`ext()` 在 Node/Python/C# 中的实现，我们的 `ext()` 也返回包括`.`的文件扩展名。 所以更新如下：

```ts
const ext = message.ext()
// assume the filename is `test.txt`
```

#### 之前 (v0.14 或更早)

`assert(ext === 'txt')`

#### 现在 (v0.16 或之后)

`assert(ext === '.txt')`

相关链接

- [BREAKING CHANGE: v0.16 Message.ext() return '.ext' instead of 'ext' before](https://github.com/wechaty/wechaty/issues/1168)

嗯，这大概就是所有的迁移记录了，谢谢！希望大家使用顺利！
