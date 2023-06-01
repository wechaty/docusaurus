---
title: Room
sidebar_label: ' Room'
---

## Room Class

Room, as the name indicates, represents a room in IM. The Room class provides many functions including getting properties, send messages, edit info, etc.

### Static Methods

You can call static methods from ```bot.Room```, e.g.

```ts
const room = await bot.Room.find({id})
```

#### create

```ts
static async create (contactList: ContactInterface[],topic?: string): Promise<RoomInterface>
```

Create a new room with contact list and topic provided. Returns the new room instance.

#### find

```ts
static async find (query : string | PUPPET.filters.Room): Promise<undefined | RoomInterface> 
```

Try to find a room in cache and then puppet. If no room was found, ```undefined``` will be returned.

Example: Find a room with name 'roomName' or id 'roomId'

```ts
const roomByName = await bot.Room.find({ topic: 'roomName' })
const roomById = await bot.Room.find({ id: 'roomId' })
```

#### findAll

```ts
static async findAll (query? : PUPPET.filters.Room): Promise<RoomInterface[]>
```

Try to find rooms in puppet and then loaded them in cache and then puppet.

Examples: Find rooms with names starts with 'room-1':

```ts
const roomsByNameReg = await bot.Room.findAll({
  name: \^room-1[3-5]$\
}) // [Room<room-13>, Room<room-14>, Room<room-15>]
```

### Instance Methods

#### sync

```ts
async sync (): Promise<void>
```

Force reload data of the room, useful when the info of the room has been modified.

Example:

```ts
const room = await bot.Room.find({id: 'oldRoomTopic' })
const topic = await room.topic() // oldRoomTopic
// edit topic on your phone to newRoomTopic
console.log(await room.topic()) // oldRoomTopic
await room.sync()
console.log(await room.topic()) // newRoomTopic
```

#### isReady

```ts
async isReady (): Promise<void>
```

Check the payload of the room exist or not.

Example:

```ts
const room = await bot.Room.find({id: 'roomTopic' })
await room.isReady()
const roomOwner = room.owner() // get the owner from the payload
```

#### handle

```ts
async handle (): undefined | string
```

Return the handle of the room. This value depends on puppet implementation, usually represents an internal ID represents the room in IM.

If the IM or the room has no handle info, ```undefined``` will be returned.

Example:

```ts
const room = await bot.Room.find({id: 'roomId' })
const handle = await room.handle() // e.g. handle stand for chatId for Wecom
```

#### say

```ts
say (sayable: Sayable): Promise<void | MessageInterface>
say (text: string, ...mentionList: ContactInterface[]): Promise<void | MessageInterface>
say (textList: TemplateStringsArray, ...varList: any[]): Promise<void | MessageInterface>
```

Send a message in the room.

You can mention someone by passing mention list or by using temp string array.

Example:

```ts
const room = await bot.Room.find({ topic: 'roomTopic' })
const memberList = await room.memberAll() // assume there has more than three members in roomTopic
const memberA = memberList[0]
const memberB = memberList[1]

await room.say('hello', memberA, memberB) // @memberA @memberB hello
await room.say`hello ${memberA}, hola ${memberB}` // hello @memberA, hola @memberB
```

#### add

```ts
async add (contact: ContactInterface): Promise<void>
```

Add a friend to this room. Please make sure the contact is friend of the bot.

Example:

```ts
const contactList = await bot.Contact.findAll()
const friendList = contactList.filter(contact => contact.friend())
const friend = friendList[0]

const room = await bot.Room.find({ topic: 'roomTopic' })
await room.add(friend)
```

#### remove

```ts
async remove (contact: ContactInterface): Promise<void>
```

Remove a member from this room.

Example:

```ts
const room = await bot.Room.find({ topic: 'roomTopic' })
const member = await room.memberAll({ name: 'memberName' })
await room.remove(member)
```

#### quit

```ts
async quit (): Promise<void>
```

Quit from this room.

Example:

```ts
const room = await bot.Room.find({ topic: 'roomTopic' })
await room.quit()
```

#### topic

```ts
async topic (): Promise<string>
async topic (newTopic: string): Promise<void>
```

Get or set the topic of the room.

Example:

```ts
const room = await bot.Room.find({ topic: 'oldTopic' })
const oldTopic = await room.topic() // oldTopic
await room.topic('newTopic')
const newTopic = await room.topic() // newTopic
```

### announce

```ts
async announce (): Promise<string>
async announce (text: string) : Promise<void>
```

Get or set the announcement of the room.

Example:

```ts
const room = await bot.Room.find({ topic: 'roomTopic' })

const announceText = await room.announce() // get announcement
await room.announce(`Update ${announceText}`) // set announcement
```

#### qrCode

```ts
async qrCode (): Promise<string>
```

Get the qrCode to join this room.

Example:

```ts
const room = await bot.Room.find({ topic: 'roomTopic' })

await room.qrCode() // get QR code of this room
```

#### alias

```ts
async alias (contact: ContactInterface): Promise<undefined | string>
```

Get the alias of the contact in the room, which may be different with the contact's name.

example:

```ts
const member = await bot.Room.memberAll({ name: 'memberName' })
const room = bot.Room.find({ topic: 'roomTopic' })

const alias = await room.alias(member) // get alias of member
```

#### readMark

```ts
async readMark (hasRead: boolean): Promise<void>
async readMark (): Promise<boolean>
```

Get or set the read mark status of the room. Read mark is the read dot in IM that marks new messages.

If the hasRead parameter is ```undefined```, the read mark status of the room will be returned.

If the hasRead is a valid boolean, the read mark will be set as the hasRead parameter and ```void``` will be returned.

Example:

```ts
const room = await bot.Room.find({ topic: 'roomTopic'})
const status = await room.readMark() // get the read mark status

await room.readMark(true) // set the read mark status as read
await room.readMark(false) // set the read mark status as unread
```

#### has

```ts
async has (contact: ContactInterface): Promise<boolean>
```

Returns whether the contact is a room member or not.

Example:

```ts
const room = await bot.Room.find({ topic: 'roomTopic'})
const contact = await bot.Contact.find({ name: 'contactName' })
const status = await room.has(contact) // the contact is a room member or not
```

#### memberAll

```ts
async memberAll (): Promise<ContactInterface[]>
async memberAll (name: string): Promise<ContactInterface[]>
async memberAll (filter: PUPPET.filters.RoomMember): Promise<ContactInterface[]>
```

Find room members according to the filter passed in.

Example:

```ts
const room = await bot.Room.find({ topic: 'roomTopic'})
const memberList = await room.memberAll() // get all members of this room
const memberListByName = await room.memberAll('memberName')
const memberListByAlias = await room.memberAll({ roomAlias: 'memberAlias' })
```

#### member

```ts
async member (name: string): Promise<undefined | ContactInterface>
async member (filter: PUPPET.filters.RoomMember): Promise<undefined | ContactInterface>
```

Find room member according to the filter passed in. Similar to ```memberAll```, but just return the first one.

Example:

```ts
const room = await bot.Room.find({ topic: 'roomTopic'})
const memberByName = await room.member('memberName')
const memberByAlias = await room.member({ roomAlias: 'memberAlias' })
```

#### owner

```ts
owner (): undefined | ContactInterface
```

Get the owner of the room.

Example:

```ts
const room = await bot.Room.find({ topic: 'roomTopic'})
const roomOwner = room.owner()
```

#### avatar

```ts
async avatar (): Promise<FileBoxInterface>
```

Get the avatar of the room.

Example:

```ts
const room = await bot.Room.find({ topic: 'roomTopic'})
const roomAvatar = await room.avatar()
roomAvatar.toFile(`${room.id}-avatar.png`) // download the avatar
```
