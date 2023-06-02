---
title: Friendship
sidebar_label: ' Friendship'
---

## Friendship Class

Friendship class is used only when you want to add new friends. Unlike most user modules that can be loaded with ```find``` or ```findAll```, friendship can created internally and passed as parameter in ```friendship``` event callback. It can also be serialized and deserialized to and from JSON.

### Static Methods

#### search

```ts
static async search (queryFilter : PUPPET.filters.Friendship): Promise<undefined | ContactInterface>
```

Search for a new contact. As we talked in contact section, a contact doesn't have to be a friend.

```Contact.find``` is to find a contact in current scope.

```Friendship.search``` is try to search for a new contact in IM scope.

Example:

```ts
const contact = await bot.Friendship.search({id: 'contactId-31'}) // Contact<contact-31>
```

#### add

```ts
static async add (contact : ContactInterface, options: FriendshipAddOptions): Promise<void>
```

Send a friendship request to the contact. The options indicates the hello message and the scenario when adding the contact to your friend list. This scenario may be useful for some IM (e.g. Wechat.)

Example1: Add a contact from a room

```ts
const room = await bot.Room.find({ topic: 'room' })
const contact = await room.member({ name: 'roomMember' })
bot.Friendship.add(contact, { room, hello: 'Hi, this is Wechaty bot from room.'})
```

Example2: Add a contact from a room

```ts
const contact = await bot.Friendship.search({ phone: '13812345678' })
bot.Friendship.add(contact, { hello: 'Hi, this is Wechaty bot from phone search.'})
```

#### fromJSON

```ts
static async fromJSON (payload: string | PUPPET.payloads.Friendship): Promise<FriendshipInterface>
```

Deserialized from a JSON string or object to a friendship instance.

#### toJSON

```ts
toJSON (): string
```

Get the JSON string of the friendship.

Example:

```ts
bot.on('friendship', friendship: FriendshipInterface => {
  const jsonStr = friendship.toJSON()
  // {
  //   id: 'friendship-1',
  //   contactId: 'contactId-33',
  //   hello: 'hello from contact 33',
  //   timestamp: 1684776502976
  // }
  const friendship2 = await bot.Friendship.fromJSON(jsonStr)
  console.log(friendship === friendship2) // true. Although friendship interfaces are objects, they are loaded from a pool by wechaty. So two friendship instance with the same id will be the same object.
})
```

### Instance Methods

#### accept

```ts
async accept (): Promise<void>
```

Accepts this friendship request received.

Example:

```ts
bot.on('friendship', friendship: FriendshipInterface => {
  await friendship.accept()
})
```

#### hello

```ts
hello (): string
```

Get the hello message from the friendship request.

Example:

```ts
bot.on('friendship', friendship: FriendshipInterface => {
  const hello = friendship.hello() // hello from contact-35
})
```

#### contact

```ts
contact (): ContactInterface
```

Get the contact who send the friendship request.

Example:

```ts
bot.on('friendship', friendship: FriendshipInterface => {
  const contact = friendship.contact() // Contact<contact-37>
})
```

#### type

```ts
type (): PUPPET.types.Friendship
```

Get the type of the friendship.

Example:

```ts
bot.on('friendship', friendship: FriendshipInterface => {
  const type = friendship.type() // PUPPET.types.Friendship.Confirm
})
```
