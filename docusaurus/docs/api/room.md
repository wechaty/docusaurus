---
title: Room
---

All wechat rooms(groups) will be encapsulated as a Room.

## Classes

[Room](room.md#Room)

All wechat rooms\(groups\) will be encapsulated as a Room.

[Examples/Room-Bot](https://github.com/Chatie/wechaty/blob/1523c5e02be46ebe2cc172a744b2fbe53351540e/examples/room-bot.ts)

## Typedefs

[RoomQueryFilter](room.md#RoomQueryFilter)

The filter to find the room: {topic: string \| RegExp} [RoomEventName](room.md#RoomEventName)

Room Class Event Type [RoomEventFunction](room.md#RoomEventFunction)

Room Class Event Function [RoomMemberQueryFilter](room.md#RoomMemberQueryFilter)

The way to search member by Room.member\(\)

## Room

All wechat rooms\(groups\) will be encapsulated as a Room.

[Examples/Room-Bot](https://github.com/Chatie/wechaty/blob/1523c5e02be46ebe2cc172a744b2fbe53351540e/examples/room-bot.ts)

**Kind**: global class **Properties**

| Name | Type | Description |
| :--- | :--- | :--- |
| id | `string` | Get Room id. This function is depending on the Puppet Implementation, see [puppet-compatible-table](https://github.com/Chatie/wechaty/wiki/Puppet#3-puppet-compatible-table) |

* [Room](room.md#Room)
  * _instance_
    * [.sync\(\)](room.md#Room+sync) ⇒ `Promise <void>`
    * [.say\(textOrContactOrFileOrUrl, ...mentionList\)](room.md#Room+say) ⇒ `Promise <void>`
    * [.on\(event, listener\)](room.md#Room+on) ⇒ `Room`
    * [.add\(contact\)](room.md#Room+add) ⇒ `Promise <void>`
    * [.del\(contact\)](room.md#Room+del) ⇒ `Promise <void>`
    * [.quit\(\)](room.md#Room+quit) ⇒ `Promise <void>`
    * [.topic\(\[newTopic\]\)](room.md#Room+topic) ⇒ `Promise <void | string>`
    * [.announce\(\[text\]\)](room.md#Room+announce) ⇒ `Promise <void | string>`
    * [.qrcode\(\)](room.md#Room+qrcode) ⇒ `Promise <string>`
    * [.alias\(contact\)](room.md#Room+alias) ⇒ `Promise <null | string>`
    * [.has\(contact\)](room.md#Room+has) ⇒ `Promise <boolean>`
    * [.memberAll\(\[query\]\)](room.md#Room+memberAll) ⇒ `Promise <Contact []>`
    * [.member\(queryArg\)](room.md#Room+member) ⇒ `Promise <Contact | null>`
    * [.owner\(\)](room.md#Room+owner) ⇒ `Contact` \| `null`
    * [.avatar\(\)](room.md#room-owner-contact-or-null) ⇒ `Promise <FileBox>`
  * _static_
    * [.create\(contactList, \[topic\]\)](room.md#Room.create) ⇒ `Promise <Room>`
    * [.findAll\(\[query\]\)](room.md#Room.findAll) ⇒ `Promise <Room []>`
    * [.find\(query\)](room.md#Room.find) ⇒ `Promise <Room | null>`

### room.sync\(\) ⇒ `Promise <void>`

Force reload data for Room, Sync data from lowlevel API again.

**Kind**: instance method of [`Room`](room.md#Room) **Example**

```javascript
await room.sync()
```

### room.say\(textOrContactOrFileOrUrlLinkOrMiniProgram, ...mentionList\) ⇒ `Promise <void>`

Send message inside Room, if set mentionList, wechaty will mention the contact list as well.

> Tips: This function is depending on the Puppet Implementation, see [puppet-compatible-table](https://github.com/Chatie/wechaty/wiki/Puppet#3-puppet-compatible-table)

**Kind**: instance method of [`Room`](room.md#Room)

| Param | Type | Description |
| :--- | :--- | :--- |
| textOrContactOrFileOrUrlLinkOrMiniProgram | `string` \| `Contact` \| `FileBox` \| `UrlLink` \| `MiniProgram` | Send `text`, `media file` or `link` inside Room.   You can use [FileBox](https://www.npmjs.com/package/file-box) to send file |
| ...mentionList | `Contact []` | Send content inside Room, and mention @contact list. |

#### Exampl

```javascript
import { FileBox }  from 'file-box'
import {
  Wechaty,
  UrlLink,
  MiniProgram,
}  from 'wechaty'

const bot = new Wechaty()
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
  url         : 'https://github.com/chatie/wechaty',
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

**Kind**: instance method of [`Room`](room.md#Room) **Returns**: `this` - - Room for chain

| Param | Type | Description |
| :--- | :--- | :--- |
| event | [`RoomEventName`](room.md#RoomEventName) | Emit WechatyEvent |
| listener | [`RoomEventFunction`](room.md#RoomEventFunction) | Depends on the WechatyEvent |

#### Example _\(Event:join \)_

```javascript
const bot = new Wechaty()
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

#### Example _\(Event:leave \)_

```javascript
const bot = new Wechaty()
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

#### Example _\(Event:topic \)_

```javascript
const bot = new Wechaty()
await bot.start()
// after logged in...
const room = await bot.Room.find({topic: 'topic of your room'}) // change `event-room` to any room topic in your wechat
if (room) {
  room.on('topic', (room, topic, oldTopic, changer) => {
    console.log(`Room topic changed from ${oldTopic} to ${topic} by ${changer.name()}`)
  })
}
```

#### Example _\(Event:invite \)_

```javascript
const bot = new Wechaty()
await bot.start()
// after logged in...
const room = await bot.Room.find({topic: 'topic of your room'}) // change `event-room` to any room topic in your wechat
if (room) {
  room.on('invite', roomInvitation => roomInvitation.accept())
}
```

### room.add\(contact\) ⇒ `Promise <void>`

Add contact in a room

> Tips: This function is depending on the Puppet Implementation, see [puppet-compatible-table](https://github.com/Chatie/wechaty/wiki/Puppet#3-puppet-compatible-table)
>
> see [Web version of WeChat closed group interface](https://github.com/Chatie/wechaty/issues/1441)

**Kind**: instance method of [`Room`](room.md#Room)

| Param | Type |
| :--- | :--- |
| contact | `Contact` |

#### Exampl

```javascript
const bot = new Wechaty()
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

Delete a contact from the room It works only when the bot is the owner of the room

> Tips: This function is depending on the Puppet Implementation, see [puppet-compatible-table](https://github.com/Chatie/wechaty/wiki/Puppet#3-puppet-compatible-table)
>
> see [Web version of WeChat closed group interface](https://github.com/Chatie/wechaty/issues/1441)

**Kind**: instance method of [`Room`](room.md#Room)

| Param | Type |
| :--- | :--- |
| contact | `Contact` |

#### Example

```javascript
const bot = new Wechaty()
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

Bot quit the room itself

> Tips: This function is depending on the Puppet Implementation, see [puppet-compatible-table](https://github.com/Chatie/wechaty/wiki/Puppet#3-puppet-compatible-table)

**Kind**: instance method of [`Room`](room.md#Room) **Example**

```javascript
await room.quit()
```

### room.topic\(\[newTopic\]\) ⇒ `Promise <void | string>`

SET/GET topic from the room

**Kind**: instance method of [`Room`](room.md#Room)

| Param | Type | Description |
| :--- | :--- | :--- |
| \[newTopic\] | `string` | If set this para, it will change room topic. |

#### Example _\(When you say anything in a room, it will get room topic. \)_

```javascript
const bot = new Wechaty()
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
const bot = new Wechaty()
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

SET/GET announce from the room

> Tips: It only works when bot is the owner of the room.
>
> This function is depending on the Puppet Implementation, see [puppet-compatible-table](https://github.com/Chatie/wechaty/wiki/Puppet#3-puppet-compatible-table)

**Kind**: instance method of [`Room`](room.md#Room)

| Param | Type | Description |
| :--- | :--- | :--- |
| \[text\] | `string` | If set this para, it will change room announce. |

#### Example _\(When you say anything in a room, it will get room announce. \)_

```javascript
const bot = new Wechaty()
await bot.start()
// after logged in...
const room = await bot.Room.find({topic: 'your room'})
const announce = await room.announce()
console.log(`room announce is : ${announce}`)
```

#### Example _\(When you say anything in a room, it will change room announce. \)_

```javascript
const bot = new Wechaty()
await bot.start()
// after logged in...
const room = await bot.Room.find({topic: 'your room'})
const oldAnnounce = await room.announce()
await room.announce('change announce to wechaty!')
console.log(`room announce change from ${oldAnnounce} to ${room.announce()}`)
```

### room.qrcode\(\) ⇒ `Promise <string>`

Get QR Code of the Room from the room, which can be used as scan and join the room.

> Tips: This function is depending on the Puppet Implementation, see [puppet-compatible-table](https://github.com/Chatie/wechaty/wiki/Puppet#3-puppet-compatible-table)

**Kind**: instance method of [`Room`](room.md#Room)

### room.alias\(contact\) ⇒ `Promise <string | null>`

Return contact's roomAlias in the room

**Kind**: instance method of [`Room`](room.md#Room) **Returns**: `Promise <string | null>` - - If a contact has an alias in room, return string, otherwise return null

| Param | Type |
| :--- | :--- |
| contact | `Contact` |

#### Exampl

```javascript
const bot = new Wechaty()
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

Check if the room has member `contact`, the return is a Promise and must be `await`-ed

**Kind**: instance method of [`Room`](room.md#Room) **Returns**: `Promise.` - Return `true` if has contact, else return `false`.

| Param | Type |
| :--- | :--- |
| contact | `Contact` |

#### Example _\(Check whether 'lijiarui' is in the room 'wechaty'\)_

```javascript
const bot = new Wechaty()
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

Find all contacts in a room, if get many, return the first one.

**Kind**: instance method of [`Room`](room.md#Room)

| Param | Type | Description |
| :--- | :--- | :--- |
| queryArg | [`RoomMemberQueryFilter`](room.md#RoomMemberQueryFilter) \| `string` | When use member\(name:string\), return all matched members, including name, roomAlias, contactAlias |

#### Example _\(Find member by name\)_

```javascript
const bot = new Wechaty()
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

#### Example _\(Find member by MemberQueryFilter\)_

```javascript
const bot = new Wechaty()
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

Get room's owner from the room.

> Tips: This function is depending on the Puppet Implementation, see [puppet-compatible-table](https://github.com/Chatie/wechaty/wiki/Puppet#3-puppet-compatible-table)

**Kind**: instance method of [`Room`](room.md#Room) **Example**

```javascript
const owner = room.owner()
```

### room.avatar\(\) ⇒ `Promise <FileBox>`

Get room's avatar

> Tips: This function is depending on the Puppet Implementation, see [puppet-compatible-table](https://github.com/Chatie/wechaty/wiki/Puppet#3-puppet-compatible-table)

**Kind**: instance method of [`Room`](room.md#room) **Example**

```javascript
const owner = room.avatar()
```

### Room.create\(contactList, \[topic\]\) ⇒ [`Promise <Room>`](room.md#Room)

Create a new room.

**Kind**: static method of [`Room`](room.md#Room)

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

Find room by by filter: {topic: string \| RegExp}, return all the matched room

**Kind**: static method of [`Room`](room.md#Room)

| Param | Type |
| :--- | :--- |
| \[query\] | [`RoomQueryFilter`](room.md#RoomQueryFilter) |

#### Exampl

```javascript
const bot = new Wechaty()
await bot.start()
// after logged in
const roomList = await bot.Room.findAll()                    // get the room list of the bot
const roomList = await bot.Room.findAll({topic: 'wechaty'})  // find all of the rooms with name 'wechaty'
```

### Room.find\(query\) ⇒ `Promise <Room>`

Try to find a room by filter: {topic: string \| RegExp}. If get many, return the first one.

**Kind**: static method of [`Room`](room.md#Room) **Returns**: `Promise <Room>` - If can find the room, return Room, or return null

| Param | Type |
| :--- | :--- |
| query | [`RoomQueryFilter`](room.md#RoomQueryFilter) |

#### Exampl

```javascript
const bot = new Wechaty()
await bot.start()
// after logged in...
const roomList = await bot.Room.find()
const roomList = await bot.Room.find({topic: 'wechaty'})
```

## RoomQueryFilter

The filter to find the room: {topic: string \| RegExp}

**Kind**: global typedef **Properties**

| Name | Type |
| :--- | :--- |
| topic | `string` |

## RoomEventName

Room Class Event Type

**Kind**: global typedef **Properties**

| Name | Type | Description |
| :--- | :--- | :--- |
| join | `string` | Emit when anyone join any room. |
| topic | `string` | Get topic event, emitted when someone change room topic. |
| leave | `string` | Emit when anyone leave the room.                                If someone leaves the room by themselves, wechat will not notice other people in the room, so the bot will never get the "leave" event. |

## RoomEventFunction

Room Class Event Function

**Kind**: global typedef **Properties**

| Name | Type | Description |
| :--- | :--- | :--- |
| room-join | `function` | \(this: Room, inviteeList: Contact\[\] , inviter: Contact\)  =&gt; void |
| room-topic | `function` | \(this: Room, topic: string, oldTopic: string, changer: Contact\) =&gt; void |
| room-leave | `function` | \(this: Room, leaver: Contact\) =&gt; void |

## RoomMemberQueryFilter

The way to search member by Room.member\(\)

**Kind**: global typedef **Properties**

| Name | Type | Description |
| :--- | :--- | :--- |
| name | `string` | Find the contact by wechat name in a room, equal to `Contact.name()`. |
| roomAlias | `string` | Find the contact by alias set by the bot for others in a room. |
| contactAlias | `string` | Find the contact by alias set by the contact out of a room, equal to `Contact.alias()`. [More Detail](https://github.com/Chatie/wechaty/issues/365) |
