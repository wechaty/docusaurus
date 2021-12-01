---
title: Message
---
This section gives the clear description of the Message Class ,its methods and their uses.
All wechat messages will be encapsulated as a `Message`.

[Examples/Ding-Dong-Bot](https://github.com/wechaty/wechaty/blob/1523c5e02be46ebe2cc172a744b2fbe53351540e/examples/ding-dong-bot.ts)

## Global Class `Message`

### Instance Methods

| Instance methods               | Return type         |
|--------------------------------|---------------------|
| from\(\)                       | `Contact` or `null` |
| to\(\)                         | `Contact` or `null` |
| room\(\)                       | `Room` or `null`    |
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

### Static Method

| Static Methods | Return type |
|----------------|-------------|
| find\(\)       | `Promise`   |
| findAll\(\)    | `Promise`   |

## Instance Methods

### message.from\(\) ⇒ `Contact | null`

By using message.from, you will receive the sender name from the message. If the method could not find the sender, it will return `null`. See the following example of instance method of class `Message`:

### Example

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

The method gets the destination of the message Message.to\(\) will return `null` if a message is in a room, use Message.room\(\) to get the room.The method is also  an instance method of class `Message`.Here is an example below:

### Example

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

By using the `message.room` you get the room from the message.If that particular message is not in a room, then will return `null`.

### Example

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

This method returns the text context for the message.

### Example

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

By using `message.toRecalled`, you will get the text content of the recalled message.
Here is an example:

### Example

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

### message.say\(textOrContactOrFileOrUrlLinkOrMiniProgram\) ⇒ `Promise <void>`

By using `message.say` you can reply a Text, Contact Card, Media File or Link message to the sender.The method takes in 5 types of parameters,more details is given below :

| Param | Type | Description |
| :--- | :--- | :--- |
| text Or Contact Or File Or UrlLink Or MiniProgram | `string` \| `Contact` \| `FileBox` \| `UrlLink` \| `MiniProgram` | send text, Contact, UrlLink, MiniProgram or file to bot.   You can use [FileBox](https://www.npmjs.com/package/file-box) to send file |

> Tips: This function depends on the Puppet Implementation.
 **See 🏻** [puppet-compatible-table](https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table)

**See🏻**: [Examples/ding-dong-bot](https://github.com/wechaty/wechaty/blob/1523c5e02be46ebe2cc172a744b2fbe53351540e/examples/ding-dong-bot.ts)

### Example

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

// 1. send Image

  if (/^ding$/i.test(message.text())) {
    const fileBox = FileBox.fromUrl('https://wechaty.github.io/wechaty/images/bot-qr-code.png')
    await message.say(fileBox)
  }

// 2. send Text

  if (/^dong$/i.test(message.text())) {
    await message.say('dingdingding')
  }

// 3. send Contact

  if (/^lijiarui$/i.test(message.text())) {
    const contactCard = await bot.Contact.find({name: 'lijiarui'})
    if (!contactCard) {
      console.log('not found')
      return
    }
    await message.say(contactCard)
  }

// 4. send UrlLink

  if (/^link$/i.test(message.text())) {
    const urlLink = new UrlLink({
      description: 'Wechaty is a Bot SDK for Wechat Individual Account which can help you create a bot in 6 lines of javascript, with cross-platform support including Linux, Windows, Darwin(OSX/Mac) and Docker.',
      thumbnailUrl: 'https://camo.githubusercontent.com/f310a2097d4aa79d6db2962fa42bb3bb2f6d43df/68747470733a2f2f6368617469652e696f2f776563686174792f696d616765732f776563686174792d6c6f676f2d656e2e706e67',
      title: 'Wechaty',
      url: 'https://github.com/wechaty/wechaty',
    });

    await message.say(urlLink);
  }

// 5. send MiniProgram (only supported by `wechaty-puppet-macpro`)

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

This method gets the type of the wechat message. The different method types supported are listed below:

| Message Type           |
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

### Example

```javascript
const bot = new Wechaty()
if (message.type() === bot.Message.Type.Text) {
  console.log('This is a text message')
}
```

### message.self\(\) ⇒ `boolean`

This method returns `true` if message is sent from self or else it returns `false`.

### Example

```javascript
if (message.self()) {
 console.log('this message is sent by myself!')
}
```

### message.mention\(\) ⇒ `Promise <Contact []>`

The method gets you the message mentioned contactList and returns `Promise <Contact []>` - > message mentioned contactList.

|  | Web | Mac PC Client | iOS Mobile | android Mobile |
| :--- | :---: | :---: | :---: | :---: |
| \[You were mentioned\] tip \(\[有人@我\]的提示\) | ✘ | √ | √ | √ |
| Identify magic code \(8197\) by copy & paste in mobile | ✘ | √ | √ | ✘ |
| Identify magic code \(8197\) by programming | ✘ | ✘ | ✘ | ✘ |
| Identify two contacts with the same roomAlias by \[You were  mentioned\] tip | ✘ | ✘ | √ | √ |

### Example

```javascript
const contactList = await message.mention()
console.log(contactList)
```

### message.mentionSelf\(\) ⇒ `Promise <boolean>`

The method checks if a message is a self mention.It returns `true` for self mention messages.Here is an example:

### Example

```javascript
if (await message.mentionSelf()) {
 console.log('this message were mentioned me! [You were mentioned] tip ([有人@我]的提示)')
}
```

### message.forward\(to\) ⇒ `Promise <void>`

By using this method you can forward the received message. This action doesn't trigger the on-message events.

| Param | Type | Description |
| :--- | :--- | :--- |
| to (Recipient) | `Sayable` \| `Array` | Room or Contact The recipient of the message, the room, or the contact |

### Example

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

The method returns the message sent date.

### message.age\(\) ⇒ `number`

The method returns the age of the  message  in seconds.For example, the message is sent at time `8:43:01`, and when we received it in Wechaty, the time is `8:43:15`, then the age\(\) will return `8:43:15 - 8:43:01 = 14 (seconds)`.

### message.toFileBox\(\) ⇒ `Promise <FileBox>`

This method extracts the Media file from the Message, and puts it into the FileBox.

> Tips: This function is depending on the Puppet Implementation, **see🏻** [puppet-compatible-table](https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table)

### message.toContact\(\) ⇒ `Promise <Contact>`

The method gets share card of the Message Extract  and the contact card from the Message, and encapsulates it into Contact class.

> Tips: This function is depending on the Puppet Implementation, **see 🏻** [puppet-compatible-table](https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table)

### message.toUrlLink\(\) ⇒ `Promise <UrlLink>`

The method extracts the Url Link from the Message, and encapsulate it into UrlLink class.
Tips: This function is depending on the Puppet Implementation, **see 🏻** [puppet-compatible-table](https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table)

## Static Methods

### Message.find\(\) ⇒ `Promise <Message | null>`

By using `message.find` you can find the messages in cache.

### Message.findAll\(\) ⇒ `Promise <Message []>`

By using `message.findAll`  you can find the messages in cache.
