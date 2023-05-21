---
title: Message
sidebar_label: ' Message'
---

# Message Class

Message is more than just a message in a conversation. It also represents any 'sayable'. For example, if your friend posted a moment with images. Each image is also an image. (In this case the talker and the receiver will both be the publisher of the moment.)

If a message is recalled, it won't be removed. There will be two messages, the original message, and the recall message.

## Static Methods

You can call static methods from ```bot.Message```, e.g.

```ts
const message = await bot.Message.find({id})
```

### find

```ts
static async find (query : string | PUPPET.filters.Message): Promise<undefined | MessageInterface> 
```

Try to find a message in cache and then puppet. If no message was found, ```undefined``` will be returned.

### findAll

```ts
static async findAll (query? : PUPPET.filters.Message): Promise<MessageInterface[]>
```

Try to find messages in puppet and then loaded them in cache and then puppet.

## Instance Methods

### conversation

```ts
conversation (): ContactInterface | RoomInterface
```

Get the conversation (contact or room) of the message.

### talker

```ts
talker (): ContactInterface 
```

Get the sender of the message. If the message is from a contact, this is same with ```conversation()```. However if the message is in a room, ```talker()``` will return the contact sent the message, and ```conversation()``` will return the room.

### listener

```ts
listener (): ContactInterface 
```

Get the listener of the message. If the message is from a room, it will return ```undefined```.

### room

```ts
room (): RoomInterface 
```

Get the room of the message. If the message is from a contact, it will return ```undefined```.

### text

```ts
text (): string
```

Get the text content of the messages. If the message is not a text message, for most cases it will return empty string (```''```).

### toRecalled

```ts
async toRecalled (): Promise<undefined | MessageInterface>
```

If the message is not a recall message, an error will be thrown. Other wise it will try to get the recalled message. If no messages is loaded, however there is an original message id (this usually is something wrong with the puppet), it will return ```undefined```.

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

### type

```ts
type (): PUPPET.types.Message
```

Return the type of the message.

### self

```ts
self (): boolean
```

Returns whether the message is sent by bot self or not.

### mentionList

```ts
async mentionList (): Promise<ContactInterface[]>
```

Returns the contacts that were mentioned in this message.

### mentionText

```ts
async mentionText (): Promise<string>
```

Returns text that removes all mention text fragments. e.g. 'Wechaty is awesome @A, @B' will be turned to 'Wechaty is awesome'.

### mentionSelf

```ts
mentionSelf (): boolean
```
Returns whether the message mentions bot self or not.

### forward

```ts
async forward (to: RoomInterface | ContactInterface): Promise<void | MessageInterface>
```

Send the messages to another conversation.

### date

```ts
date (): Date
```

Return the date (and time) of the message.

### age

```ts
age (): number
```

Returns the age of the message in seconds.

### toFileBox

```ts
async toFileBox (): Promise<FileBoxInterface>
```

Extract the media file in the message. Check out filebox section for more detail.

### toImage

```ts
async toImage (): Promise<ImageInterface>
```

Extract the image file in the message. Check out image section for more detail.

### toContact

```ts
async toContact (): Promise<ContactInterface>
```

Get contact from contact card message.

### toUrlLink

```ts
async toUrlLink (): Promise<UrlLinkInterface>
```

Get urlLink from urlLink message.

### toMiniProgram

```ts
async toMiniProgram (): Promise<MiniProgramInterface>
```

Get miniProgram from miniProgram message.

### toLocation

```ts
async toLocation (): Promise<LocationInterface>
```

Get location from location message.

### toPost

```ts
async toPost (): Promise<PostInterface>
```

Transfer the message into a post, for further process like quoting. Any message can be a transfer into a post.

### toSayable

```ts
async toSayable (): Promise<undefined | Sayable>
```

Transfer the message into a sayable, for further process like send to other conversations. A sayable represents any sendable content.
