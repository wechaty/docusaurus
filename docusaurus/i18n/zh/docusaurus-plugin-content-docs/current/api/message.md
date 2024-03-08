---
title: Message
---
本节对消息类、其方法及其用途进行了清晰的描述。所有的微信消息会被封装成一个`Message`类。

[Examples/Ding-Dong-Bot](https://github.com/wechaty/wechaty/blob/1523c5e02be46ebe2cc172a744b2fbe53351540e/examples/ding-dong-bot.ts)

## Global Class `Message`

### 实例方法

| 实例方法              | 返回类型         |
|--------------------------------|---------------------|
| from\(\)                       | `Contact` 或 `null` |
| to\(\)                         | `Contact` 或 `null` |
| room\(\)                       | `Room` 或 `null`    |
| text\(\)                       | `string`            |
| say\(text Or Contact Or File\) | `Promise`           |
| type\(\)                       | `MessageType`       |
| self\(\)                       | `boolean`           |
| mention\(\)                    | `Promise`           |
| mentionSelf\(\)                | `Promise`           |
| forward\(to\)                  | `Promise`           |
| date\(\)                       | `Date`              |
| age\(\)                        | `Number`            |
| toFileBox\(\)                  | `Promise`           |
| toContact\(\)                  | `Promise`           |
| toUrlLink\(\)                  | `Promise`           |

### 静态方法

| 静态方法 | 返回类型 |
|----------------|-------------|
| find\(\)       | `Promise`   |
| findAll\(\)    | `Promise`   |

## 实例方法

### message.from\(\) ⇒ `Contact | null`

获取发送消息的联系人。
找不到发送的人，return `null`.

### 示例

```javascript
const bot = new Wechaty()
bot
.on('message', async message => {
  const contact = message.from()
  const text = message.text()
  const room = message.room()
  if (room) {
    const topic = await room.topic()
    console.log(`Room: ${topic} Contact: ${contact.name()} Text: ${text}`)
  } else {
    console.log(`Contact: ${contact.name()} Text: ${text}`)
  }
})
.start()
```

### message.to\(\) ⇒ `Contact` \| `null`

获取消息发送的联系人。在room中， return `null`。 使用Message.room\(\) 获取room信息。

### 示例

```javascript
const bot = new Wechaty()
bot
.on('message', async message => {
  const contact = message.from()
  const text = message.text()
  const toContact = message.to()
  if (toContact) {
    const name = toContact.name()
    console.log(`toContact: ${name} Contact: ${contact.name()} Text: ${text}`)
  } else {
    console.log(`Contact: ${contact.name()} Text: ${text}`)
  }
})
.start()
```

### message.room\(\) ⇒ `Room` \| `null`

获取消息所在的room，如果这条消息不在room中，会返回`null`。

### 示例

```javascript
const bot = new Wechaty()
bot
.on('message', async message => {
  const contact = message.from()
  const text = message.text()
  const room = message.room()
  if (room) {
    const topic = await room.topic()
    console.log(`Room: ${topic} Contact: ${contact.name()} Text: ${text}`)
  } else {
    console.log(`Contact: ${contact.name()} Text: ${text}`)
  }
})
.start()
```

### message.text\(\) ⇒ `string`

获取消息的文本内容。

### 示例

```javascript
const bot = new Wechaty()
bot
.on('message', async message => {
  const contact = message.from()
  const text = message.text()
  const room = message.room()
  if (room) {
    const topic = await room.topic()
    console.log(`Room: ${topic} Contact: ${contact.name()} Text: ${text}`)
  } else {
    console.log(`Contact: ${contact.name()} Text: ${text}`)
  }
})
.start()
```

### message.toRecalled\(\) ⇒ `Promise <Message | null>`

获取撤回消息的文本内容。

### 示例

```javascript
const bot = new Wechaty()
bot
.on('message', async message => {
  if (message.type() === bot.Message.Type.Recalled) {
    const recalledMessage = await message.toRecalled()
    console.log(`Message: ${recalledMessage} has been recalled.`)
  }
})
.start()
```

### message.say\(text或Contact或File或UrlLink或MiniProgram\) ⇒ `Promise <void>`

回复多媒体、微信名片、文本或者链接给这条消息的发送者。


| Param | Type | Description |
| :--- | :--- | :--- |
| text 或 Contact 或 File 或 UrlLink 或 MiniProgram | `string` \| `Contact` \| `FileBox` \| `UrlLink` \| `MiniProgram` | 发送文本、名片或者文件  可以使用 [FileBox](https://www.npmjs.com/package/file-box) 来发送文件 |

备注: 这个方法是否能实现，取决于用的是什么Puppet, 参照 [puppet-compatible-table](https://wechaty.js.org/docs/specs/puppet/)

**See🏻**: [Examples/ding-dong-bot](https://github.com/wechaty/wechaty/blob/1523c5e02be46ebe2cc172a744b2fbe53351540e/examples/ding-dong-bot.ts)

### 示例

```javascript
import { FileBox }  from 'file-box'
import {
  Wechaty,
  UrlLink,
  MiniProgram,
}  from 'wechaty'

const bot = new Wechaty()
bot
.on('message', async message => {

// 1. 发照片

  if (/^ding$/i.test(message.text())) {
    const fileBox = FileBox.fromUrl('https://wechaty.github.io/wechaty/images/bot-qr-code.png')
    await message.say(fileBox)
  }

// 2. 发短信

  if (/^dong$/i.test(message.text())) {
    await message.say('dingdingding')
  }

// 3. 发contact

  if (/^lijiarui$/i.test(message.text())) {
    const contactCard = await bot.Contact.find({name: 'lijiarui'})
    if (!contactCard) {
      console.log('not found')
      return
    }
    await message.say(contactCard)
  }

// 4. 发链接

  if (/^link$/i.test(message.text())) {
    const urlLink = new UrlLink({
      description: 'Wechaty is a Bot SDK for Wechat Individual Account which can help you create a bot in 6 lines of javascript, with cross-platform support including Linux, Windows, Darwin(OSX/Mac) and Docker.',
      thumbnailUrl: 'https://camo.githubusercontent.com/f310a2097d4aa79d6db2962fa42bb3bb2f6d43df/68747470733a2f2f6368617469652e696f2f776563686174792f696d616765732f776563686174792d6c6f676f2d656e2e706e67',
      title: 'Wechaty',
      url: 'https://github.com/wechaty/wechaty',
    });

    await message.say(urlLink);
  }

// 5. 发小程序 (仅 `wechaty-puppet-macpro`支持)

  if (/^mini-program$/i.test(message.text())) {
    const miniProgram = new MiniProgram ({
      appid              : 'gh_0aa444a25adc',
      title              : '我正在使用Authing认证身份，你也来试试吧',
      pagePath           : 'routes/explore.html',
      thumbUrl           : '30590201000452305002010002041092541302033d0af802040b30feb602045df0c2c5042b777875706c6f61645f31373533353339353230344063686174726f6f6d3131355f313537363035393538390204010400030201000400',
      thumbKey           : '42f8609e62817ae45cf7d8fefb532e83',
    });

    await message.say(miniProgram);
  }
})
.start()
```

### message.type\(\) ⇒ `MessageType`

此方法获取Wechaty消息的类型。下面列出了支持的不同方法类型：

| 消息类型           |
|------------------------|
| MessageType.Unknown    |
| MessageType.Attachment |
| MessageType.Audio      |
| MessageType.Contact    |
| MessageType.Emoticon   |
| MessageType.Image      |
| MessageType.Text       |
| MessageType.Video      |
| MessageType.Url        |

### 示例

```javascript
const bot = new Wechaty()
if (message.type() === bot.Message.Type.Text) {
  console.log('This is a text message')
}
```

### message.self\(\) ⇒ `boolean`

查看这条消息是否为机器人发送的。
message是自己发的，return `true`，是其他发的，return`false`

### 示例

```javascript
if (message.self()) {
 console.log('this message is sent by myself!')
}
```

### message.mention\(\) ⇒ `Promise <Contact []>`

获取在群中@的用户列表。

|  | Web | Mac PC Client | iOS Mobile | android Mobile |
| :--- | :---: | :---: | :---: | :---: |
| \[You were mentioned\] tip \(\[有人@我\]的提示\) | ✘ | √ | √ | √ |
| Identify magic code \(8197\) by copy & paste in mobile | ✘ | √ | √ | ✘ |
| Identify magic code \(8197\) by programming | ✘ | ✘ | ✘ | ✘ |
| Identify two contacts with the same roomAlias by \[You were  mentioned\] tip | ✘ | ✘ | √ | √ |

### 示例

```javascript
const contactList = await message.mention()
console.log(contactList)
```

### message.mentionSelf\(\) ⇒ `Promise <boolean>`

获取机器人是否在群里被@ 了。
是被@了，return`true`

### 示例

```javascript
if (await message.mentionSelf()) {
 console.log('this message were mentioned me! [You were mentioned] tip ([有人@我]的提示)')
}
```

### message.forward\(to\) ⇒ `Promise <void>`

转发收到的消息。

| Param | Type | Description |
| :--- | :--- | :--- |
| to (Recipient) | `Sayable` \| `Array` |Room 或者 Contact。指的是收消息方。 |

### 示例

```javascript
const bot = new Wechaty()
bot
.on('message', async message => {
  const room = await bot.Room.find({topic: 'wechaty'})
  if (room) {
    await message.forward(room)
    console.log('forward this message to wechaty room!')
  }
})
.start()
```

### message.date\(\) ⇒ `Date`

消息发送的时间。

### message.age\(\) ⇒ `number`

消息的时差。
例如： 消息在`8:43:01`发送的，当我们在wechaty 上收到消息的时候，时间是`8:43:15`,那么 age\(\) 为 `8:43:15 - 8:43:01 = 14 (seconds)`。

### message.toFileBox\(\) ⇒ `Promise <FileBox>`

从消息中提取多媒体文件并把它 存入到FileBox 里面。

> 备注: 这个方法是否能实现，取决于用的是什么Puppet, 参照 [puppet-compatible-table](https://wechaty.js.org/docs/specs/puppet/)

### message.toContact\(\) ⇒ `Promise <Contact>`

提取转发的微信好友名片内容，并封装成Contact 类型。

> 备注: 这个方法是否能实现，取决于用的是什么Puppet, 参照 [puppet-compatible-table](https://wechaty.js.org/docs/specs/puppet/)

### message.toUrlLink\(\) ⇒ `Promise <UrlLink>`

该方法从消息中提取Url链接，并将其封装到UrlLink类中。
> 备注: 这个方法是否能实现，取决于用的是什么Puppet, 参照 [puppet-compatible-table](https://wechaty.js.org/docs/specs/puppet/)

## 静态方法

### Message.find\(\) ⇒ `Promise <Message | null>`

在缓存中找消息。

### Message.findAll\(\) ⇒ `Promise <Message []>`

在缓存中找消息。