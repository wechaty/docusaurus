---
title: Sayable
sidebar_label: 'Sayable'
---

# Sayable

Sayable is a very important concept in Wechaty. As the name indicates, it means anything you can send as a message through ```contact.say``` or ```room.say``` api.

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

## ContactInterface

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

## DelayInterface

```DelayInterface``` is a special sayable. Say a ```DelayInterface``` will not send any message, instead it will wait for a while.

Example: 

```ts
const contact = await bot.Contact.find({ id })
const delay = new bot.Delay(1000)

await contact.say(delay) // wait for 1000 ms
await delay.wait() // wait for 1000 ms
```

## FileBoxInterface

```FileBoxInterface``` represents any attachments. Note that we do handle image differently in message (```toImage``` vs ```toFile```), we send file and image with the same api. The puppet implementation will check the file type and handle accordingly.

[```FileBox```](https://github.com/huan/file-box) is a package published by [huan](https://github.com/huan). FileBox is a virtual container for packing a file data into it for future read, and easily transport between servers with the least payload, no mater than where it is (local path, remote url, or cloud storage).

Example: send a file from remote url

```ts
const contact = await bot.Contact.find({ id })
const file = FileBox.fromUrl('https://wechaty.js.org/img/wechaty-logo.svg')

await contact.say(file)
```

## LocationInterface

```LocationInterface``` represents a Location.

Example: Send a location message

```ts
const contact = await bot.Contact.find({ id })
const location = new bot.Location({
  accuracy  : 15,
  address   : '北京市北京市海淀区45号成府路',
  latitude  : 39.995120999999997,
  longitude : 116.334154,
  name      : '东升镇人民政府',
})

await contact.say(location)
```

## 
