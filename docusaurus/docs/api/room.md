---
title: Room
---

## Class

### Room

The `Room` ia a global class.All wechat rooms\(groups\) will be encapsulated as a Room.

[Examples/Room-Bot](https://github.com/wechaty/wechaty/blob/1523c5e02be46ebe2cc172a744b2fbe53351540e/examples/room-bot.ts)

#### Properties

| Name | Type | Description |
| :--- | :--- | :--- |
| id | `string` | Get Room id. This function is depending on the Puppet Implementation, see [puppet-compatible-table](https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table) |

## Global class `Room`

### Instance Methods

| Instance Methods                                    | Return Type       |
|-----------------------------------------------------|-------------------|
| sync()                                              | `Promise`         |
| say(text Or Contact Or File Or Url, ...mentionList) | `Promise`         |
| on(event, listener)                                 | `Room`            |
| add(contact)                                        | `Promise`         |
| del(contact)                                        | `Promise`         |
| quit()                                              | `Promise`         |
| topic(newTopic)                                     | `Promise`         |
| announce(text)                                      | `Promise`         |
| qrcode()                                            | `Promise`         |
| alias(contact)                                      | `Promise`         |
| has(contact)                                        | `Promise`         |
| memberAll(query)                                    | `Promise`         |
| member(queryArg)                                    | `Promise`         |
| owner()                                             | `Contact or null` |
| avatar()                                            | `Promise`         |

### Static Methods

| Static Methods            | Return Type              |
|---------------------------|--------------------------|
| create(contactList,topic) | `Promise <Room>`         |
| findAll(query)            | `Promise`                |
| find(query)               | `Promise <Room> or null` |

### room.sync\(\) ⇒ `Promise <void>`

The method forces reload of data for Room and Sync data from lowlevel API again.

#### Example

```javascript
await room.sync()
```

### room.say\(text Or Contact Or File Or UrlLink Or MiniProgram, ...mentionList\) ⇒ `Promise <void>`

The method sends message inside Room, if set mentionList, wechaty will mention the contact list as well.

> Tips: This function is depending on the Puppet Implementation, see [puppet-compatible-table](https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table)

| Param | Type | Description |
| :--- | :--- | :--- |
| text Or Contact Or File Or UrlLink Or MiniProgram | `string` \| `Contact` \| `FileBox` \| `UrlLink` \| `MiniProgram` | Send `text`, `media file` or `link` inside Room.   You can use [FileBox](https://www.npmjs.com/package/file-box) to send file |
| ...mentionList | `Contact []` | Send content inside Room, and mention @contact list. |

#### Example

```javascript
import { FileBox }  from 'file-box'
import {
  WechatyBuilder,
  UrlLink,
  MiniProgram,
}  from 'wechaty'

const bot = WechatyBuilder.build()
await bot.start()
// after logged in...
const room = await bot.Room.find({topic: 'wechaty'})

// 1. Send text inside Room

await room.say('Hello world!')

// 2. Send media file inside Room

import { FileBox }  from 'file-box'
const fileBox1 = FileBox.fromUrl('https://wechaty.github.io/wechaty/images/bot-qr-code.png')
const fileBox2 = FileBox.fromLocal('/tmp/text.txt')
await room.say(fileBox1)
await room.say(fileBox2)

// 3. Send Contact Card in a room

const contactCard = await bot.Contact.find({name: 'lijiarui'}) // change 'lijiarui' to any of the room member
await room.say(contactCard)

// 4. Send text inside room and mention @mention contact

const members = await room.memberAll() // all members in this room
const someMembers = members.slice(0, 3);
await room.say('Hello world!', ...someMembers)

// 5. send Link inside room

const linkPayload = new UrlLink({
  description : 'WeChat Bot SDK for Individual Account, Powered by TypeScript, Docker, and Love',
  thumbnailUrl: 'https://avatars0.githubusercontent.com/u/25162437?s=200&v=4',
  title       : 'Welcome to Wechaty',
  url         : 'https://github.com/wechaty/wechaty',
})
await room.say(linkPayload)

// 6. send MiniProgram (only supported by `wechaty-puppet-macpro`)

const miniProgram = new MiniProgram ({
  appid              : 'gh_0aa444a25adc',
  title              : '我正在使用Authing认证身份，你也来试试吧',
  pagePath           : 'routes/explore.html',
  description        : '身份管家',
  thumbUrl           : '30590201000452305002010002041092541302033d0af802040b30feb602045df0c2c5042b777875706c6f61645f31373533353339353230344063686174726f6f6d3131355f313537363035393538390204010400030201000400',
  thumbKey           : '42f8609e62817ae45cf7d8fefb532e83',
});
await room.say(miniProgram);
```

### room.on\(event, listener\) ⇒ `this`

The method returns: `this` - - Room for chain.

| Param | Type | Description |
| :--- | :--- | :--- |
| event | [`RoomEventName`](room.md#RoomEventName) | Emit WechatyEvent |
| listener | [`RoomEventFunction`](room.md#RoomEventFunction) | Depends on the WechatyEvent |

#### Example  \(Event:join \)

```javascript
const bot = WechatyBuilder.build()
await bot.start()
// after logged in...
const room = await bot.Room.find({topic: 'topic of your room'}) // change `event-room` to any room topic in your wechat
if (room) {
  room.on('join', (room, inviteeList, inviter) => {
    const nameList = inviteeList.map(c => c.name()).join(',')
    console.log(`Room got new member ${nameList}, invited by ${inviter}`)
  })
}
```

#### Example \(Event:leave \)

```javascript
const bot = WechatyBuilder.build()
await bot.start()
// after logged in...
const room = await bot.Room.find({topic: 'topic of your room'}) // change `event-room` to any room topic in your wechat
if (room) {
  room.on('leave', (room, leaverList) => {
    const nameList = leaverList.map(c => c.name()).join(',')
    console.log(`Room lost member ${nameList}`)
  })
}
```

#### Example \(Event:topic \)

```javascript
const bot = WechatyBuilder.build()
await bot.start()
// after logged in...
const room = await bot.Room.find({topic: 'topic of your room'}) // change `event-room` to any room topic in your wechat
if (room) {
  room.on('topic', (room, topic, oldTopic, changer) => {
    console.log(`Room topic changed from ${oldTopic} to ${topic} by ${changer.name()}`)
  })
}
```

#### Example \(Event:invite \)

```javascript
const bot = WechatyBuilder.build()
await bot.start()
// after logged in...
const room = await bot.Room.find({topic: 'topic of your room'}) // change `event-room` to any room topic in your wechat
if (room) {
  room.on('invite', roomInvitation => roomInvitation.accept())
}
```

### room.add\(contact\) ⇒ `Promise <void>`

The method adds contact in a room.Check the below example for implementation.

> Tips: This function is depending on the Puppet Implementation, see [puppet-compatible-table](https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table)
>
> see [Web version of WeChat closed group interface](https://github.com/wechaty/wechaty/issues/1441)

| Param | Type |
| :--- | :--- |
| contact | `Contact` |

#### Example

```javascript
const bot = WechatyBuilder.build()
await bot.start()
// after logged in...
const contact = await bot.Contact.find({name: 'lijiarui'}) // change 'lijiarui' to any contact in your wechat
const room = await bot.Room.find({topic: 'wechat'})        // change 'wechat' to any room topic in your wechat
if (room) {
  try {
     await room.add(contact)
  } catch(e) {
     console.error(e)
  }
}
```

### room.del\(contact\) ⇒ `Promise <void>`

The method deletes a contact from the room .It works only when the bot is the owner of the room.Check the below example for implementation.

> Tips: This function is depending on the Puppet Implementation, see [puppet-compatible-table](https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table)
>
> see [Web version of WeChat closed group interface](https://github.com/wechaty/wechaty/issues/1441)

| Param | Type |
| :--- | :--- |
| contact | `Contact` |

#### Example

```javascript
const bot = WechatyBuilder.build()
await bot.start()
// after logged in...
const room = await bot.Room.find({topic: 'wechat'})          // change 'wechat' to any room topic in your wechat
const contact = await bot.Contact.find({name: 'lijiarui'})   // change 'lijiarui' to any room member in the room you just set
if (room) {
  try {
     await room.del(contact)
  } catch(e) {
     console.error(e)
  }
}
```

### room.quit\(\) ⇒ `Promise <void>`

This method helps the bot quit the room itself.Check the below example for implementation.

> Tips: This function is depending on the Puppet Implementation, see [puppet-compatible-table](https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table)

#### Example

```javascript
await room.quit()
```

### room.topic\(\[newTopic\]\) ⇒ `Promise <void | string>`

The method sets or gets topic from the room.Check the below example for implementation.

| Param | Type | Description |
| :--- | :--- | :--- |
| \[newTopic\] | `string` | If set this para, it will change room topic. |

#### Example \(When you say anything in a room, it will get room topic. \)

```javascript
const bot = WechatyBuilder.build()
bot
.on('message', async m => {
  const room = m.room()
  if (room) {
    const topic = await room.topic()
    console.log(`room topic is : ${topic}`)
  }
})
.start()
```

#### Example _\(When you say anything in a room, it will change room topic. \)_

```javascript
const bot = WechatyBuilder.build()
bot
.on('message', async m => {
  const room = m.room()
  if (room) {
    const oldTopic = await room.topic()
    await room.topic('change topic to wechaty!')
    console.log(`room topic change from ${oldTopic} to ${room.topic()}`)
  }
})
.start()
```

### room.announce\(\[text\]\) ⇒ `Promise <void | string>`

The methos sets or gets announcement from the room.Check the below example for implementation.

> Tips: It only works when bot is the owner of the room.
>
> This function is depending on the Puppet Implementation, see [puppet-compatible-table](https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table)

| Param | Type | Description |
| :--- | :--- | :--- |
| \[text\] | `string` | If set this para, it will change room announce. |

#### Example  \(When you say anything in a room, it will get room announce. \)

```javascript
const bot = WechatyBuilder.build()
await bot.start()
// after logged in...
const room = await bot.Room.find({topic: 'your room'})
const announce = await room.announce()
console.log(`room announce is : ${announce}`)
```

#### Example \(When you say anything in a room, it will change room announce. \)

```javascript
const bot = WechatyBuilder.build()
await bot.start()
// after logged in...
const room = await bot.Room.find({topic: 'your room'})
const oldAnnounce = await room.announce()
await room.announce('change announce to wechaty!')
console.log(`room announce change from ${oldAnnounce} to ${room.announce()}`)
```

### room.qrcode\(\) ⇒ `Promise <string>`

This method get QR Code of the Room from the room, which can be scanned to join the room.

> Tips: This function is depending on the Puppet Implementation, see [puppet-compatible-table](https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table)

### room.alias\(contact\) ⇒ `Promise <string | null>`

The method gets the contact's roomAlias in the room.It returns  `Promise <string | null>` - - If a contact has an alias in room,otherwise return `null`.

| Param | Type |
| :--- | :--- |
| contact | `Contact` |

#### Example

```javascript
const bot = WechatyBuilder.build()
bot
.on('message', async m => {
  const room = m.room()
  const contact = m.from()
  if (room) {
    const alias = await room.alias(contact)
    console.log(`${contact.name()} alias is ${alias}`)
  }
})
.start()
```

### room.has\(contact\) ⇒ `Promise <boolean>`

Check if the room has member `contact`, the return is a Promise and must be `await`-ed.The method returns `true` if has contact, else return `false`.

| Param | Type |
| :--- | :--- |
| contact | `Contact` |

#### Example _\(Check whether 'lijiarui' is in the room 'wechaty'\)_

```javascript
const bot = WechatyBuilder.build()
await bot.start()
// after logged in...
const contact = await bot.Contact.find({name: 'lijiarui'})   // change 'lijiarui' to any of contact in your wechat
const room = await bot.Room.find({topic: 'wechaty'})         // change 'wechaty' to any of the room in your wechat
if (contact && room) {
  if (await room.has(contact)) {
    console.log(`${contact.name()} is in the room wechaty!`)
  } else {
    console.log(`${contact.name()} is not in the room wechaty!`)
  }
}
```

### room.memberAll\(\[query\]\) ⇒ `Promise <Contact []>`

Find all contacts in a room

#### definition

* `name`                 the name-string set by user-self, should be called name, equal to `Contact.name()`
* `roomAlias`            the name-string set by user-self in the room, should be called roomAlias
* `contactAlias`         the name-string set by bot for others, should be called alias, equal to `Contact.alias()`

**Kind**: instance method of [`Room`](room.md#Room)

| Param | Type | Description |
| :--- | :--- | :--- |
| \[query\] | [`RoomMemberQueryFilter`](room.md#RoomMemberQueryFilter) \| `string` | Optional parameter, When use memberAll\(name:string\), return all matched members, including name, roomAlias, contactAlias |

#### Example

```javascript
const memberList: Conatct[] = await room.memberAll()
console.log(`room all member list: `, memberList)

const memberContactList: Conatct[] = await room.memberAll(`abc`)
console.log(`contact list with all name, room alias, alias are abc:`, memberContactList)
```

### room.member\(queryArg\) ⇒ `Promise <Contact | null>`

This method finds all contacts in a room, if it gets many, then first one is returned.

| Param | Type | Description |
| :--- | :--- | :--- |
| queryArg | [`RoomMemberQueryFilter`](room.md#RoomMemberQueryFilter) \| `string` | When use member\(name:string\), return all matched members, including name, roomAlias, contactAlias |

#### Example \(Find member by name\)

```javascript
const bot = WechatyBuilder.build()
await bot.start()
// after logged in...
const room = await bot.Room.find({topic: 'wechaty'})           // change 'wechaty' to any room name in your wechat
if (room) {
  const member = await room.member('lijiarui')             // change 'lijiarui' to any room member in your wechat
  if (member) {
    console.log(`wechaty room got the member: ${member.name()}`)
  } else {
    console.log(`cannot get member in wechaty room!`)
  }
}
```

#### Example \(Find member by MemberQueryFilter\)

```javascript
const bot = WechatyBuilder.build()
await bot.start()
// after logged in...
const room = await bot.Room.find({topic: 'wechaty'})          // change 'wechaty' to any room name in your wechat
if (room) {
  const member = await room.member({name: 'lijiarui'})        // change 'lijiarui' to any room member in your wechat
  if (member) {
    console.log(`wechaty room got the member: ${member.name()}`)
  } else {
    console.log(`cannot get member in wechaty room!`)
  }
}
```

### room.owner\(\) ⇒ `Contact` \| `null`

The method gets the room's owner from the room.

> Tips: This function is depending on the Puppet Implementation, see [puppet-compatible-table](https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table)

#### Example

```javascript
const owner = room.owner()
```

### room.avatar\(\) ⇒ `Promise <FileBox>`

The method gets room's avatar.Check the below example for implementation.

> Tips: This function is depending on the Puppet Implementation, see [puppet-compatible-table](https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table)

#### Example

```javascript
const owner = room.avatar()
```

## Static Methods

### Room.create\(contactList, \[topic\]\) ⇒ [`Promise <Room>`](room.md#Room)

The method creates a new room.Check the below example for implementation.

| Param | Type |
| :--- | :--- |
| contactList | `Array` |
| \[topic\] | `string` |

#### Example _\(Creat a room with 'lijiarui' and 'juxiaomi', the room topic is 'ding - created'\)_

```javascript
const helperContactA = await Contact.find({ name: 'lijiarui' })  // change 'lijiarui' to any contact in your wechat
const helperContactB = await Contact.find({ name: 'juxiaomi' })  // change 'juxiaomi' to any contact in your wechat
const contactList = [helperContactA, helperContactB]
console.log('Bot', 'contactList: %s', contactList.join(','))
const room = await Room.create(contactList, 'ding')
console.log('Bot', 'createDingRoom() new ding room created: %s', room)
await room.topic('ding - created')
await room.say('ding - created')
```

### Room.findAll\(\[query\]\) ⇒ `Promise <Room []>`

The method finds the  room by by filter: {topic: string \| RegExp},  and returns all the matched rooms.Check the below example for implementation.

| Param | Type |
| :--- | :--- |
| \[query\] | [`RoomQueryFilter`](room.md#RoomQueryFilter) |

#### Example

```javascript
const bot = WechatyBuilder.build()
await bot.start()
// after logged in
const roomList = await bot.Room.findAll()                    // get the room list of the bot
const roomList = await bot.Room.findAll({topic: 'wechaty'})  // find all of the rooms with name 'wechaty'
```

### Room.find\(query\) ⇒ `Promise <Room>`

Try to find a room by filter: {topic: string \| RegExp}. The method returns `Promise <Room>` String - If it finds the room,or return `null`.If the method gets get many,it returns the first one.

| Param | Type |
| :--- | :--- |
| query | [`RoomQueryFilter`](room.md#RoomQueryFilter) |

#### Example

```javascript
const bot = WechatyBuilder.build()
await bot.start()
// after logged in...
const roomList = await bot.Room.find()
const roomList = await bot.Room.find({topic: 'wechaty'})
```

## Typedefs

There are many Typedefs supported by `Room` and details about each of the typedefs are given below :

## RoomQueryFilter

This typedef is used as a filter to find the room: {topic: string \| RegExp}.

### Properties

| Name | Type |
| :--- | :--- |
| topic | `string` |

## RoomEventName

Room Class Event Type

### Properties

| Name | Type | Description |
| :--- | :--- | :--- |
| join | `string` | Emit when anyone join any room. |
| topic | `string` | Get topic event, emitted when someone change room topic. |
| leave | `string` | Emit when anyone leave the room.                                If someone leaves the room by themselves, wechat will not notice other people in the room, so the bot will never get the "leave" event. |

## RoomEventFunction

This typedef is a Room Class Event Function that has the following properties as listed below:

### Properties

| Name | Type | Description |
| :--- | :--- | :--- |
| room-join | `function` | \(this: Room, inviteeList: Contact\[\] , inviter: Contact\)  =&gt; void |
| room-topic | `function` | \(this: Room, topic: string, oldTopic: string, changer: Contact\) =&gt; void |
| room-leave | `function` | \(this: Room, leaver: Contact\) =&gt; void |

## RoomMemberQueryFilter

This typedef is used to search member by Room.member\(\).

### Properties

| Name | Type | Description |
| :--- | :--- | :--- |
| name | `string` | Find the contact by wechat name in a room, equal to `Contact.name()`. |
| roomAlias | `string` | Find the contact by alias set by the bot for others in a room. |
| contactAlias | `string` | Find the contact by alias set by the contact out of a room, equal to `Contact.alias()`. [More Detail](https://github.com/wechaty/wechaty/issues/365) |
