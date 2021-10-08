---
title: "Summary of Learning Wechaty and Padpro"
author: su-chang
categories: tutorial
tags:
  - code
---

1. 总结 wechaty 的基础用法；
1. 介绍 wechaty 与 puppet 及 padpro 模块之间的关系、数据流向、事件监听机制等；
1. 详细介绍合作开发的本地环境配置。

## 简介

### Wechaty

[Wechaty](https://github.com/wechaty/wechaty) 是一个开源的`微信机器人`接口，由 Typescript 构建的 Node.js  应用。支持多种微信接入方案，包括网页、ipad、ios、windows, android 等。同时支持Linux, Windows, Darwin(OSX/Mac) 和 Docker 多个平台。

#### Wechaty能帮我们做什么？

- 智能收发消息
  - 发送者，接收者及群组的ID
  - 消息的类型（文本、链接、联系人、表情、图片、文件）
  - 通过简单配置，即可加入智能对话系统，完成指定任务
- 管理联系人
  - 查找好友
  - 获取联系人详细信息
  - 管理备注信息
  - 获取机器人信息（self）
- 管理群组
  - 创建群组
  - 自动入群、关键字入群、二维码入群
  - 邀请联系人进群（40人以上链接邀请好友，确认后入群；40人以下直接入群）
  - 将联系人移出群组
- 处理好友请求
  - 自动处理好友请求
  - 获取发好友请求的联系人信息

#### 快速创建`微信机器人`

```ts
import { Wechaty }  from 'wechaty'

Wechaty.instance() // Singleton
.on('scan', (qrcode, status)  => console.log(`Scan QR Code to login: ${status}\nhttps://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrcode)}`))
.on('login', user => console.log(`User ${user} logined`))
.on('message', message => console.log(`Message: ${message}`))
.start()
```

以上一段很简短的代码就能创建一个 wechaty 智能机器人。

- 通过监听`scan`事件，触发扫码登录的功能
- 监听`login`事件，检测到用户登录成功时，提示用户登录信息
- 监听`message`事件，用户通过微信所发的消息都会被`微信机器人`打印显示在控制台

基于事件绑定机制，我们可以根据不同场景事件的触发，通过wechaty中的room, contact, message等功能模块完成自己感兴趣的逻辑操作，从而提升工作效率。

为了机器人功能的多样化，wechaty 中还支持对群组操作、好友请求、数据准备，退出登录等事件的监听。下面简单介绍我对这些事件的理解，便于大家能够更好的使用 wechaty。

##### 群组监听事件区别

- room-join
    > 无论邀请者是群主还是群成员，被邀请者加入群组后即触发此事件。

- room-leave
    > 群主在群组中移出某些用户会触发此事件，群组成员自动退出不会触发此事件。

- room-invite
    > bot 被邀请至群组中，会触发此事件。

##### 其他监听事件

- ready
    > 完成数据准备工作，在底层拉取微信端数据进行同步，同步完成后会触发此事件。对数据实时性有较高要求的操作需要监听此事件。

- message
    > bot 收到消息时，会触发此事件。

- friendship
    > bot 收到好友请求时，会触发此事件。

- room-topic
    > bot 所在群组的群名称发生变动时，会触发此事件。

- logout
    > 当 bot 退出登录时，会触发此事件。

#### 关于 `say()` 方法

wechaty 所创建微信机器人做的最频繁的事情就是应答消息，下面我来简答介绍关于机器人应答消息的几种方式。

- bot.say()

    `bot`即我们所创建的机器人，其对应的 `say()` 方法，也就是机器人这个微信号来发送消息。该方法并不常用。

- contact.say()

    该方法从字面理解起来可能会存在些困惑，它不是指联系人对微信机器人发送消息，而是微信机器人对某个联系人发送消息。结合几种 `say()` 方法来看，就能理解。

- msg.say()

    该方法是发送消息最常用的方法，微信机器人只要收到消息就会予以回复，即微信机器人对所接受到的消息进行回复。使用该方法需要**慎重**，很可能会导致你的微信机器人疯狂的和自己说话。具体解决办法在我们官方的 [FAQ](https://wechaty.js.org/v/zh/faq#endless-talking) 中有明确答案，有兴趣的小伙伴可以飞去查看。

- room.say()

    该方法是微信机器人在群组中发送消息，类似 `contact.say()`。

以上简单介绍了 wechaty 的基本功能、事件监听，以及消息的几种发送方式，接着我们就可以创造自己的微信机器人了。为了能够使我们所创建的机器人更加友爱，作为开发者的我们还需要对 wechaty 及其相关模块（puppet, padpro）的源码进行阅读，从而能够更好的理解微信机器人的构造原理。我们先对相关模块进行介绍，在后续章节中会整理一些我在阅读源码过程中所遇到的疑惑点。

### Puppet

Puppet 是帮助 Wechaty 操纵微信的工具，即微信接入方案。目前存在根据不同协议实现的版本(wechaty-puppet-padchat, wechaty-puppet-padpro,wechaty-puppet-mock等)。详细了解Puppet抽象类的层级结构，参见 [Puppet Provider Interface Documentation](https://wechaty.github.io/wechaty-puppet/typedoc/classes/puppet.html#hierarchy)。

#### Puppet常用方法梳理

对于Wechaty中所提供的接口，部分接口的实现都会依赖于 Puppet 的抽象方法，再根据协议的不同进行实现。例如 wechaty-puppet-padpro 模块，该模块是一种基于 iPad 协议的对 Puppet 抽象方法的具体实现。

- Message方法

```ts
Message-->messageSendText:发送文本信息
Message-->messageSendFile:根据FileBox的文件名后缀进行处理
Message-->messageFile:根据消息文件类型进行处理
Message-->messageSendContact:发送联系人名片
Message-->messagePayload:从缓存中获取message信息
Message-->messageForward:根据payload的type来判断消息类型处理
```

- Contact方法

```text
Contact-->contactRoomList:联系人群组列表
Contact-->contactList:联系人ID列表
Contact-->contactQrcode:联系人二维码
Contact-->contactPayload:从缓存中获取联系人信息
Contact-->contactSearch:查找联系人
```

- Room方法

```text
Room-->roomCreate:创建群组
Room-->roomTopic:群组的名称
Room-->roomQrcode:群组二维码
Room-->roomAdd:添加成员
Room-->roomDel:移出成员
Room-->roomList:群组列表
Room-->roomMemberList:群组成员列表
Room-->roomMemberPayload:加载群组成员
Room-->roomMemberSearch:查找群组成员
```

- Friendship方法

```text
Friendship-->friendshipAdd:添加好友
Friendship-->friendshipAccept:接受好友
Friendship-->friendshipPayload:从缓存中获取好友请求信息
```

### Puppet-Padpro

Puppet-PadPro 是 Puppet 基于 iPad 协议的一种实现方式，将 Puppet 中的抽象方法进行实现，是一种较成熟的微信接入方案。

#### padpro入门

从 git 上下载 [wechaty-puppet-padpro源码](https://github.com/botorange/wechaty-puppet-padpro)，从入口文件`index`开始，我们会发现项目的核心文件 `puppet-padpro`，一切的学习从这里开始。

- 引入模块
  - wechaty-puppet
      > 引入 puppet 基类中的一些数据类型

  - pure-function-helpers
      > 纯函数助手，用来解析一些数据，大多是对XML的解析

  - config
      > 日志及基础配置文件

  - utils
      > 工具类方法

  - padpro-manager
      > Padpro逻辑管理工具，主要是调用gRPC接口来实现相应的功能，也是该项目的核心之一

  - schemas
      > 类型声明，对于业务处理所采用到的数据结构进行约束

以上介绍了 padpro 中所依赖的一些模块，可以看出 `puppet-padpro` 及 `padpro-manager` 这两个文件是 padpro 的核心。

进一步了解 padpro 从 `puppet-padpro` 的 `start` 方法开始。

### GRPC及其优点

Padpro 采用 gRPC 取代 RESTful 作为通信方式。具体使用教程参见 [GRPC quick start](https://grpc.io/docs/quickstart/node/)

- 谷歌开发的一个远程调用框架，现在已开源
- 使用了二进制编码，所以它比 JSON / HTTP 更快
- 明确的接口规范
- 支持流式传输

## 三者之间的调用关系

为了便于讨论，本文以 wechaty 中的 `room.qrcode()` 为例，来阐述三个模块之间的调用关系。

[Wechaty API ⇒ room.qrcode](https://wechaty.js.org/v/zh/api/room#room-qrcode-promise)

```ts
    room.qrcode() ⇒ Promise <string>
```

获取群二维码，用户可以通过扫描这个二维码加入群聊。

我们先看一下该 API 所执行的具体逻辑：

```ts
     /**
      * Get QR Code of the Room from the room, which can be used as scan and join the room.
      * > Tips:
      * This function is depending on the Puppet Implementation, see [puppet-compatible-table](https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table)
      * @returns {Promise<string>}
      */
    public async qrcode (): Promise<string> {
        log.verbose('Room', 'qrcode()')
        const qrcode = await this.puppet.roomQrcode(this.id)
        return qrcode
    }
```

该逻辑实现的过程中会依赖于 puppet 的 roomQrcode 方法，在 puppet 中 roomQrcode 方法只是一个抽象方法：

```ts
    public abstract async roomQrcode (roomId: string) : Promise<string>
```

我们知道 puppet 是 wechaty 微信接入方案的抽象，其具体的实现还需要看使用者所采用的puppet实现模块，例如 wechaty-puppet-padpro。当我们使用 padrpo 模块时，padpro 会继承并实现 puppet 中的所有抽象方法：

```ts
    export class PuppetPadpro extends Puppet {
        ...
    }
```

padpro 对于 roomQrcode 的具体实现如下：

```typescript
public async roomQrcode(roomId: string): Promise<string> {
    log.verbose(PRE, 'roomQrcode(%s)', roomId)
    const memberIdList = await this.roomMemberList(roomId)
    if (!memberIdList.includes(this.selfId())) {
      throw new Error(`userSelf not in this room: ${roomId}`)
    }

    const result = await this.padproManager!.GrpcGetContactQrcode(roomId)
    const base64 = result.QrcodeBuf

    const roomPayload = await this.roomPayload(roomId)
    const roomName    = roomPayload.topic || roomPayload.id
    const fileBox     = FileBox.fromBase64(base64, `${roomName}-qrcode.jpg`)

    const qrcode = await fileBoxToQrcode(fileBox)

    return qrcode
}
```

### 源码阅读部分

#### 状态管理

对于一些操作需要添加状态，确保其已经完成。wechaty 中采用 status 的 on 方法和 off 方法来判断启动和结束。这两个方法都会接收一个参数来表示当前该方法的状态，具体如下所示。

- status.on()
  - 'pending'
      > 表示当前操作正在启动

  - true
      > 表示当前操作启动成功

- status.off()
  - 'pending'
      > 表示当前操作正在关闭

  - true
      > 表示当前操作关闭成功

#### 事件监听机制

事件监听机制主要由事件源、事件对象、事件监听器三个部分组成。
例如 `room-join` 事件：

- 事件监听器

```javascript
bot.on('room-join', msg => {

})
```

- 事件源

```javascript
bot.emit('room-join', messagePayload)
```

- 事件对象

```javascript
'room-join'
```

padpro 通过 GRPC 接收到微信端推送过来的消息进行处理，根据处理后消息的类别来触发对应事件，并发送对应的数据。puppet 在监听到该事件时，将接收到的数据进行进一步处理，并携带处理后的数据继续向上层发送监听事件（对 puppet 的监听是在 wechaty-manager 中进行的）。使用者就可以通过监听 wechaty 所 监听到的事件，来对返回的数据进行处理。

为了更详细的了解 wechaty 中的数据流，我写了一篇博客来进行详细的介绍。[关于 wechaty 中 room-join 事件的数据流](http://note.youdao.com/noteshare?id=e5a0ee56a8f7efabd7500ac5062731c0)。

介绍了这些，相信你结合官方API文档已经能够打造出属于自己的微信机器人了。如果你在开发过程中，有超 nice 的想法，并想为 wechaty 的发展贡献力量。那就让我们一起来合作开发吧！

## 合作开发

有兴趣参与 wechaty 开发的小伙伴们，可以从GitHub上将 [wechaty](https://github.com/wechaty/wechaty)、[wechaty-puppet](https://github.com/wechaty/wechaty-puppet)、[wechaty-puppet-padpro](https://github.com/botorange/wechaty-puppet-padpro) 源码下载到本地，在开发项目中使用 npm link 将以上模块载入。便于Bug修复、业务拓展等的提交。

技术栈：`Typescript` `Node.js`

### 环境变量配置及使用

- WECHATY_NAME
    > 设置该变量来控制启动的机器人

    ```javascript
    WECHATY_NAME="your-cute-bot-name" node bot.js
    ```

- PADPRO_IP
    > 传文件的时候在查询CDN之前需要配置本地公网IP

    ```javascript
    PADPRO_IP='192.0.0.1' node bot.js
    ```

- PADPRO_LOG
    > 查看日志

    ```javascript
    PADPRO_LOG='silly' node bot.js
    ```

- PADPRO_REPLAY_MESSAGE
    > bot发送的消息也会触发message监听事件

    ```javascript
    PADPRO_REPLAY_MESSAGE=true node bot.js
    ```

- WECHATY_PUPPET_PADPRO_TOKEN
    > 配置padpro的token

    ```javascript
    WECHATY_PUPPET_PADPRO_TOKEN='your padpro token' node bot.js
    ```

- STORE_HOME
    > 配置 FlashStore 缓存在磁盘中的位置

    ```javascript
    STORE_HOME='your store dir' node bot.js
    ```

### 详细日志查看

padpro中有详尽的日志层级系统，可以使用命令`PADPRO_LOG='silly'`来启动项目，从而查看对应等级的日志。通过日志的反应情况，可以明显的得知某功能所执行的具体逻辑过程，便于快速锁定问题。

### npm link 的坑

简单介绍以上三个模块之间的依赖关系：

> wechaty 依赖于 wechaty-puppet
> wechaty-puppet-padpro 依赖于 wechaty-puppet

引入模块的步骤说明：
> `Note`:以上三个模块都需要执行`npm install`安装项目依赖包

`Step1`
> 在模块 wechaty-puppet 中创建链接，执行以下命令

```sh
npm run dist // 编译 .ts 文件
npm link // 创建链接
```

`Step2`
> 在模块 wechaty 中引入依赖模块并创建链接，执行以下命令

```sh
npm link wechaty-puppet // 引入 puppet 模块
npm run dist // 编译 .ts 文件
npm link // 创建链接
```

`Step3`
> 在模块 wechaty-puppet-padpro 中引入依赖模块并创建链接，执行以下命令

```sh
npm link wechaty-puppet // 引入 puppet 模块
npm run dist // 编译 .ts 文件
npm link // 创建链接
```

`Step4`
> 在开发项目 my-wechaty-project 中引入链接，执行以下命令

```sh
npm link wechaty // 引入 wechaty 模块
npm link wechaty-puppet-padpro // 引入 puppet-padpro 模块
```

`Step5`
> 运行开发项目 my-wechaty-project，执行以下命令，并查看运行状态。

```sh
ts-node index.ts
```

> **若出现错误提示**，请在模块 wechaty 及 wechaty-puppet-padpro 中重新执行 `npm link` 操作。
> 作者: [Su Chang](https://github.com/su-chang)，Node.js全栈工程师
