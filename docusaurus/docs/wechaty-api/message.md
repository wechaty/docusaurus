---
title: Message
sidebar_label: ' Message'
---

# Message Class

Message is more than just a message in a conversation. It also represents any 'sayable'. For example, if your friend posted a moment with images. Each image is also an image. (In this case the talker and the receiver will both be the publisher of the moment.)

If a message is recalled, it won't be removed. There will be two messages, the original message, and the recall message.

## Static Methods

You can call static methods from ```bot.Message```.

### find

```ts
static async find (query : string | PUPPET.filters.Message): Promise<undefined | MessageInterface> 
```

Try to find a message in cache and then puppet. If no message was found, ```undefined``` will be returned.

Example: Load a message with id.

```ts
const message = await bot.Message.find({id})
```

### findAll

```ts
static async findAll (query? : PUPPET.filters.Message): Promise<MessageInterface[]>
```

Try to find messages in puppet and then loaded them in cache and then puppet.

Example: Find all messages from contact-50

```ts
const message = await bot.Message.findAll({ fromId: 'contactId-50' })
```

## Instance Methods

### conversation

```ts
conversation (): ContactInterface | RoomInterface
```

Get the conversation (contact or room) of the message.

Example:

```ts
bot.on('message', message: MessageInterface => {
  const contact = message.conversation() // Contact<contact-52>
})
```

### talker

```ts
talker (): ContactInterface 
```

Get the sender of the message. If the message is from a contact, this is same with ```conversation()```. However if the message is in a room, ```talker()``` will return the contact sent the message, and ```conversation()``` will return the room.

Example:

```ts
bot.on('message', message: MessageInterface => {
  const contact = message.talker() // Contact<contact-54>
})
```

### listener

```ts
listener (): ContactInterface 
```

Get the listener of the message. If the message is from a room, it will return ```undefined```.

Example:

```ts
bot.on('message', message: MessageInterface => {
  const contact = message.listener() // Contact<contact-0> (self)
})
```

### room

```ts
room (): RoomInterface 
```

Get the room of the message. If the message is from a contact, it will return ```undefined```.

Example:

```ts
bot.on('message', message: MessageInterface => {
  const contact = message.room() // Room<room-1>
})
```

### text

```ts
text (): string
```

Get the text content of the messages. If the message is not a text message, for most cases it will return empty string (```''```).


Example:

```ts
bot.on('message', message: MessageInterface => {
  const text = message.text() // 'hello wechaty'
})
```

### toRecalled

```ts
async toRecalled (): Promise<undefined | MessageInterface>
```

If the message is not a recall message, an error will be thrown. Other wise it will try to get the recalled message. If no messages is loaded, however there is an original message id (this usually is something wrong with the puppet), it will return ```undefined```.

Example:

```ts
bot.on('message', message: MessageInterface => {
  const originalMessage = message.toRecalled() // Message<message-0>
})
```

### say

```ts
async say (sayable: Sayable): Promise<void | MessageInterface>
```

Send a message to the talker. The following two code sections are the same. The new message will be returned.

```ts
message.say(sayable)
```

```ts
const contactOrRoom = await message.conversation()
contactOrRoom.say(sayable)
```

### recall

```ts
async recall (): Promise<boolean>
```

Recall the message. Return success or not.

Example:

```ts
const contact = await bot.Contact.find({ id: 'contactId-54' })
const message = await contact.say('this message will be recalled')
await message.recall()
```

### type

```ts
type (): PUPPET.types.Message
```

Return the type of the message.

Example:

```ts
bot.on('message', message: MessageInterface => {
  const type = message.type() // PUPPET.types.Message.Text
})
```

### self

```ts
self (): boolean
```

Returns whether the message is sent by bot self or not.

Example:

```ts
const contact = await bot.Contact.find({ id: 'contactId-56' })
const message = await contact.say('hello there')
console.log(message.self()) // true
```

### mentionList

```ts
async mentionList (): Promise<ContactInterface[]>
```

Returns the contacts that were mentioned in this message.

Example:

```ts
bot.on('message', message: MessageInterface => {
  const contacts = await message.mentionList() // [Contact<contact-0>, Contact<contact-1>]
})
```

### mentionText

```ts
async mentionText (): Promise<string>
```

Returns text that removes all mention text fragments. e.g. 'Wechaty is awesome @A, @B' will be turned to 'Wechaty is awesome'.

Example:

```ts
bot.on('message', message: MessageInterface => {
  const text = await message.mentionText() // 'hello everyone'
})
```

### mentionSelf

```ts
mentionSelf (): boolean
```
Returns whether the message mentions bot self or not.

Example:

```ts
bot.on('message', message: MessageInterface => {
  const mentionSelf = message.mentionSelf() // true
})
```

### forward

```ts
async forward (to: RoomInterface | ContactInterface): Promise<void | MessageInterface>
```

Send the messages to another conversation.

Example:

```ts
bot.on('message', message: MessageInterface => {
  const contact = await bot.Contact.find({ id: 'contactId-40' })
  await message.forward(contact)
})
```

### date

```ts
date (): Date
```

Return the date (and time) of the message.

Example:

```ts
bot.on('message', message: MessageInterface => {
  console.log(message.date()) // 2023-05-22T15:44:21.298Z
})
```

### age

```ts
age (): number
```

Returns the age of the message in seconds.

Example:

```ts
bot.on('message', message: MessageInterface => {
  console.log(message.age()) // 120
})
```

### toFileBox

```ts
async toFileBox (): Promise<FileBoxInterface>
```
Extract the media file in the message. Check out filebox section for more detail.

Example:

```ts
bot.on('message', message: MessageInterface => {
  const file = await message.toFileBox()
  await file.toFile(pathToFile) // saved into hard disk
})
```

### toImage

```ts
async toImage (): Promise<ImageInterface>
```

Extract the image file in the message. Check out image section for more detail.

Example:

```ts
bot.on('message', message: MessageInterface => {
  const image = await message.Image()
  const thumb = await image.thumbnail()
  const hd = await image.hd()
  await thumb.toFile(pathToThumbFile)
  await hd.toFile(pathToHdFile)
})
```

### toContact

```ts
async toContact (): Promise<ContactInterface>
```

Get contact from contact card message.

Example:

```ts
bot.on('message', message: MessageInterface => {
  const contact = await message.toContact() // Contact<contact-60>
})
```

### toUrlLink

```ts
async toUrlLink (): Promise<UrlLinkInterface>
```

Get urlLink from urlLink message.

Example:

```ts
bot.on('message', message: MessageInterface => {
  const url = await message.urlLink() // UrlLink<https://www.baidu.com>
})
```

### toMiniProgram

```ts
async toMiniProgram (): Promise<MiniProgramInterface>
```

Get miniProgram from miniProgram message.

Example:

```ts
bot.on('message', message: MessageInterface => {
  const miniProgram = await message.toMiniProgram() // MiniProgram Interface. See sayable section. (cannot be stringified)
})
```

### toLocation

```ts
async toLocation (): Promise<LocationInterface>
```

Get location from location message.

Example:

```ts
bot.on('message', message: MessageInterface => {
  const location = await message.toLocation() // Location<东升镇>
})
```

### toPost

```ts
async toPost (): Promise<PostInterface>
```

Transfer the message into a post, for further process like quoting. Any message can be a transfer into a post.

Example:

```ts
bot.on('message', message: MessageInterface => {
  const post = await message.toPost() // Post Interface. See post and sayable section. (cannot be stringified)
})
```

### toSayable

```ts
async toSayable (): Promise<undefined | Sayable>
```

Transfer the message into a sayable, for further process like send to other conversations. A sayable represents any sendable content.

Example:

```ts
bot.on('message', message: MessageInterface => {
  const sayable = await message.toSayable() // Any sayable above, see sayable section.
})
```

### toString()

```ts
override toString (): string
```

Gets a string represents a message instance. Useful when debugging.

Example:

```ts
bot.on('message', message: MessageInterface => {
  const str = message.toString() // Message#Text[🗣contact-20]
})
```
