---
title: Sayable
sidebar_label: 'Sayable'
---

## Sayable

Sayable is a very important concept in Wechaty. As the name indicates, it means anything you can send as a message through ```contact.say``` or ```room.say``` api.

Note that message send methods are dependent on puppet implementation. e.g. wechaty-puppet-whatsapp does not support sending mini program message (there is no such message in whatsapp), so you'll get an error when trying to do so.

Currently there 10 kinds of sayables.

```ts
type Sayable =
  | ContactInterface
  | DelayInterface
  | FileBoxInterface
  | LocationInterface
  | MessageInterface
  | MiniProgramInterface
  | number
  | PostInterface
  | string
  | UrlLinkInterface
```

### ContactInterface

```ContactInterface``` represent a contact. You can find detail info in [contact section](./contact).

A ```ContactInterface``` instances is usually created by ```Contact``` static method, or contact related events.

Example: Find a contact with id

```ts
const contact = await bot.Contact.find({ id })
```

Example: Handle contact in login event

```ts
bot.on('login', contact: ContactInterface => {
  console.log(`bot ${contact.name()} logged in!`)
})
```

Say a ```ContactInterface``` means to send a business card message.

### DelayInterface

```DelayInterface``` is a special sayable. Say a ```DelayInterface``` will not send any message, instead it will wait for a while.

Example:

```ts
const contact = await bot.Contact.find({ id })
const delay = new bot.Delay(1000)

await contact.say(delay) // wait for 1000 ms
await delay.wait() // wait for 1000 ms
```

### FileBoxInterface

```FileBoxInterface``` represents any attachments. Note that we do handle image differently in message (```toImage``` vs ```toFile```), we send file and image with the same api. The puppet implementation will check the file type and handle accordingly.

[```FileBox```](https://github.com/huan/file-box) is a package published by [huan](https://github.com/huan). FileBox is a virtual container for packing a file data into it for future read, and easily transport between servers with the least payload, no mater than where it is (local path, remote url, or cloud storage).

Example: send a file from remote url

```ts
const contact = await bot.Contact.find({ id })
const file = FileBox.fromUrl('https://wechaty.js.org/img/wechaty-logo.svg')

await contact.say(file)
```

### LocationInterface

```LocationInterface``` represents a Location.

Example: Send a location message

```ts
const contact = await bot.Contact.find({ id })
const location = new bot.Location({
  accuracy  : 15,
  address   : '北京市北京市海淀区45号成府路',
  latitude  : 39.995120999999997,
  longitude : 116.334154,
  name      : '东升镇',
})

await contact.say(location)
```

### MessageInterface

This is the same as forwarding message.

Example:

```ts
bot.on('message', message: MessageInterfa.ce => {
  const contact = await bot.Contact.find({ id })

  await contact.say(message)
  await message.forward(contact)
  // these two lines do the same thing
})
```

MiniProgramInterface

```MiniProgramInterface``` represents a mini program. Mini program is a kind of built-in app in Wechat eco system.

Example: Send a mini program message

```ts
const contact = await bot.Contact.find({ id })
const miniProgram = new bot.MiniProgram({
  appid: 'gh_536a283aa613@app',
  description: '【70元任选3件】活动正在进行中，快召唤小伙伴一起来抢吧！',
  pagePath: 'pages/common/blank-page/index.html',
  iconUrl: 'http://wx.qlogo.cn/mmhead/Q3auHgzwzM7LgDYDQQAcuwpsyibBkEDmMIWEaxDQXwL8EoLxEicrUyjA/96',
  thumbUrl: 'https://workpro.s3.cn-northwest-1.amazonaws.com.cn/link_msg/17885ce3-ec04-4c09-bef8-5a9f67533595/7c390302-3da8-4cf1-9ce5-19b4ae22ca83.jpg',
  title: '独特艾琳',
  username: 'wx8544dcaf548049ec'
})
```

### number

Number can be sent as regular string.

### string

String can be sent as it is.

### PostInterface

```PostInterface``` is a special class. In message sending scenario, ```PostInterface``` represents a message with multiple sayables.

Example: Send a mixed message:

```ts
const contact = await bot.Contact.find({ id })
const file = FileBox.fromUrl('https://wechaty.js.org/img/wechaty-logo.svg')

const builder = bot.Post.builder()
builder.type(Post.Message)
builder.add('I am sending a text with an image.')
builder.add(file)
const post = await builder.build()

await contact.say(post)
```

### UrlLinkInterface

```UrlLinkInterface``` represents a url link message. It is a link message with thumbnail and description.

Example: Send a url link message:

```ts
const contact = await bot.Contact.find({ id })
const urlLink = new bot.UrlLink({
  description: '百度一下你就知道',
  thumbnailUrl: 'https://www.baidu.com/favicon.ico',
  title: '百度',
  url: 'https://www.baidu.com'
})

```
