---
title: Room
sidebar_label: ' Room'
---

# Room Class

Room, as the name indicates, represents a room in IM. The Room class provides many functions including getting properties, send messages, edit info, etc.

## Static Methods

You can call static methods from ```bot.Room```, e.g.

```ts
const room = await bot.Room.find({id})
```

### create

```ts
static async create (contactList: ContactInterface[],topic?: string): Promise<RoomInterface>
```

Create a new room with contact list and topic provided. Returns the new room instance.

### find

```ts
static async find (query : string | PUPPET.filters.Room): Promise<undefined | RoomInterface> 
```

Try to find a room in cache and then puppet. If no room was found, ```undefined``` will be returned.

### findAll

```ts
static async findAll (query? : PUPPET.filters.Room): Promise<RoomInterface[]>
```

Try to find rooms in puppet and then loaded them in cache and then puppet.

## Instance Methods

### sync

```ts
async sync (): Promise<void>
```

Force reload data of the room, useful when the info of the room has been modified.

### handle

```ts
async handle (): undefined | string
```

Return the handle of the room. This value depends on puppet implementation, usually represents an internal ID represents the room in IM.

If the IM or the room has no handle info, ```undefined``` will be returned.

### say

```ts
say (sayable: Sayable): Promise<void | MessageInterface>
say (text: string, ...mentionList: ContactInterface[]): Promise<void | MessageInterface>
say (textList: TemplateStringsArray, ...varList: any[]): Promise<void | MessageInterface>
```

Send a message in the room.

You can mention someone by passing mention list or by using temp string array.

example:

```ts
const contact1 = await bot.Contact.find({ name: 'contact1' })
const contact2 = await bot.Contact.find({ name: 'contact2' })

const room = await bot.Room.find({ topic: 'room' })

await room.say('hello', contact1, contact2) // @contact1 @contact2 hello
await room.say`hello ${contact1}, hola ${contact2}` // hello @contact1, hola @contact2
```

### add

```ts
async add (contact: ContactInterface): Promise<void>
```

Add a new contact to this room.

### remove

```ts
async remove (contact: ContactInterface): Promise<void>
```

Remove a contact from this room.

### quit

```ts
async quit (): Promise<void>
```

Quit from this room.

### topic

```ts
async topic (): Promise<string>
async topic (newTopic: string): Promise<void>
```

Get or set the topic of the room.

Example:

```ts
const room = bot.Room.find({ topic: 'oldTopic' })
const oldTopic = room.topic() // oldTopic
await room.topic('newTopic')
const newTopic = room.topic() // newTopic
```

## announce

```ts
async announce (): Promise<string>
async announce (text: string) : Promise<void>
```

Get or set the announcement of the room.

### qrCode

```ts
async qrCode (): Promise<string>
```

Get the qrCode to join this room.

### alias

```ts
async alias (contact: ContactInterface): Promise<undefined | string>
```

Get the alias of the contact in the room, which may be different with the contact's name.

example:

```ts
const contact = await bot.contact.find({ name: 'contact' })
const room = bot.Room.find({ topic: 'room' })

const alias = await room.alias(contact) // alias
```

### readMark

```ts
async readMark (hasRead: boolean): Promise<void>
async readMark (): Promise<boolean>
```

Get or set the readmark condition of the room. Readmark is the read dot in IM that marks new messages.

If the hasRead parameter is ```undefined```, the readmark status of the room will be returned.

If the hasRead is a valid boolean, the readmark will be set as the hasRead parameter and ```void``` will be returned.

### has

```ts
async has (contact: ContactInterface): Promise<boolean>
```

Returns whether the contact is a room member or not.

### memberAll

```ts
async memberAll (): Promise<ContactInterface[]>
async memberAll (name: string): Promise<ContactInterface[]>
async memberAll (filter: PUPPET.filters.RoomMember): Promise<ContactInterface[]>
```

Find room members according to the filter passed in.

### member

```ts
async member (name: string): Promise<undefined | ContactInterface>
async member (filter: PUPPET.filters.RoomMember): Promise<undefined | ContactInterface>
```

Find room member according to the filter passed in. Similar to ```memberAll```, but just return the first one.

### owner

```ts
owner (): undefined | ContactInterface
```

Get the owner of the room.

### avatar

```ts
async avatar (): Promise<FileBoxInterface>
```

Get the avatar of the room.
