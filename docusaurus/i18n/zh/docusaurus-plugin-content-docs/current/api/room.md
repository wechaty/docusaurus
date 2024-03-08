---
title: Room
---

## Class

### Room

所有的微信群都会被封装成 Room 类。

[Examples/Room-Bot](https://github.com/wechaty/wechaty/blob/1523c5e02be46ebe2cc172a744b2fbe53351540e/examples/room-bot.ts)

#### Properties

| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| id | `string` | 获取群ID。这个ID 是否是永久不变的ID 取决于使用哪一个puppet，具体 查看puppet兼容性清单，参照 [puppet-compatible-table](https://wechaty.js.org/docs/specs/puppet/) |

## Global class `Room`

### 实例方法

| 实例方法                                    | 返回类型       |
|-----------------------------------------------------|-------------------|
| sync()                                              | `Promise`         |
| say(text 或 Contact 或 File 或 Url, ...mentionList) | `Promise`         |
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
| owner()                                             | `Contact 或 null` |
| avatar()                                            | `Promise`         |

### 静态方法

| 静态方法            | 返回类型              |
|---------------------------|--------------------------|
| create(contactList,topic) | `Promise <Room>`         |
| findAll(query)            | `Promise`                |
| find(query)               | `Promise <Room> 或 null` |

### room.sync\(\) ⇒ `Promise <void>`

强制加载群的数据，从底层API 重新加载数据。

#### 示例

```javascript
await room.sync()
```

### room.say\(text 或 Contact 或 File 或 UrlLink 或 MiniProgram, ...mentionList\) ⇒ `Promise <void>`

在群内发消息，如果设置了 ...mentionList 参数，机器人在群内发送消息的时候还会@这些联系人。

> 备注: 这个方法是否能实现，取决于用的是什么Puppet, 参照 [puppet-compatible-table](https://wechaty.js.org/docs/specs/puppet/)

| Param | Type | Description |
| :--- | :--- | :--- |
| text 或 Contact 或 File 或 UrlLink 或 MiniProgram | `string` \| `Contact` \| `FileBox` \| `UrlLink` \| `MiniProgram` | 群内发送text或者media file或者链接。可以通过 [FileBox](https://www.npmjs.com/package/file-box) 来发送文件。 |
| ...mentionList | `Contact []` | 可选参数，当设置这个参数的时候，在群内发送文本消息会@这些联系人。 |

#### 示例

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

// 1. 在Room发短信

await room.say('Hello world!')

// 2. 在Room发文件

import { FileBox }  from 'file-box'
const fileBox1 = FileBox.fromUrl('https://wechaty.github.io/wechaty/images/bot-qr-code.png')
const fileBox2 = FileBox.fromLocal('/tmp/text.txt')
await room.say(fileBox1)
await room.say(fileBox2)

// 3. 在room发contact card

const contactCard = await bot.Contact.find({name: 'lijiarui'}) // change 'lijiarui' to any of the room member
await room.say(contactCard)

// 4. 在room发短信和@mention contact

const members = await room.memberAll() // all members in this room
const someMembers = members.slice(0, 3);
await room.say('Hello world!', ...someMembers)

// 5. 在room发链接

const linkPayload = new UrlLink({
  description : 'WeChat Bot SDK for Individual Account, Powered by TypeScript, Docker, and Love',
  thumbnailUrl: 'https://avatars0.githubusercontent.com/u/25162437?s=200&v=4',
  title       : 'Welcome to Wechaty',
  url         : 'https://github.com/wechaty/wechaty',
})
await room.say(linkPayload)

// 6. 发小程序 (仅 `wechaty-puppet-macpro`支持)

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

Return `this` - - Room for chain.

| Param | Type | Description |
| :--- | :--- | :--- |
| event | [`RoomEventName`](room.md#RoomEventName) | 群内事件触发 |
| listener | [`RoomEventFunction`](room.md#RoomEventFunction) | 取决于是哪一个事件 |

#### 示例  \(Event:join \)

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

#### 示例 \(Event:leave \)

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

#### 示例 \(Event:topic \)

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

#### 示例 \(Event:invite \)

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

邀请好友加入群聊。

> 备注: 这个方法是否能实现，取决于用的是什么Puppet, 参照 [puppet-compatible-table](https://wechaty.js.org/docs/specs/puppet/)
>
> 参照 [网页版微信封闭群界面](https://github.com/wechaty/wechaty/issues/1441)

| Param | Type |
| :--- | :--- |
| contact | `Contact` |

#### 示例

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

将好友移出群聊，这个功能仅在机器人是群主的时候会生效。

> 备注: 这个方法是否能实现，取决于用的是什么Puppet, 参照 [puppet-compatible-table](https://wechaty.js.org/docs/specs/puppet/)
>
> 参照 [网页版微信封闭群界面](https://github.com/wechaty/wechaty/issues/1441)

| Param | Type |
| :--- | :--- |
| contact | `Contact` |

#### 示例

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

机器人主动退群。

> 备注: 这个方法是否能实现，取决于用的是什么Puppet, 参照 [puppet-compatible-table](https://wechaty.js.org/docs/specs/puppet/)

#### 示例

```javascript
await room.quit()
```

### room.topic\(\[newTopic\]\) ⇒ `Promise <void | string>`

设置 / 获取 群名称。

| Param | Type | Description |
| :--- | :--- | :--- |
| \[newTopic\] | `string` | If set this para, it will change room topic. |

#### 示例 \(当你在群里说话的时候，打印群名称\)

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

#### 示例 _\(当你在群内说话的时候，机器人修改群名称\)_

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

设置 / 获取 群公告。

> 备注: 这个方法是否能实现，取决于用的是什么Puppet, 参照 [puppet-compatible-table](https://wechaty.js.org/docs/specs/puppet/)

| Param | Type | Description |
| :--- | :--- | :--- |
| \[text\] | `string` | If set this para, it will change room announce. |

#### 示例  \(当你在群里说话的时候，打印群公告\)

```javascript
const bot = new Wechaty()
await bot.start()
// after logged in...
const room = await bot.Room.find({topic: 'your room'})
const announce = await room.announce()
console.log(`room announce is : ${announce}`)
```

#### 示例 \(当你在群里说话的时候，修改群公告\)

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

获取群二维码，用户可以通过扫描这个二维码加入群聊。

> 备注: 这个方法是否能实现，取决于用的是什么Puppet, 参照 [puppet-compatible-table](https://wechaty.js.org/docs/specs/puppet/)

### room.alias\(contact\) ⇒ `Promise <string | null>`

获取这个联系人在群内的群昵称。

| Param | Type |
| :--- | :--- |
| contact | `Contact` |

#### 示例

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

检查群内是否有这个群成员。

| Param | Type |
| :--- | :--- |
| contact | `Contact` |

#### 示例 _\(检查'lijiarui'是否在'wechaty'群\)_

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

根据 query 获取群内所有的群成员列表。如果没有设置query，返回所有的群成员信息。

#### 定义

* `name`                 微信联系人自己设置的昵称，等于`Contact.name()`
* `roomAlias`            微信联系人自己在群内设置的昵称
* `contactAlias`         机器人给微信联系人设置的，等于`Contact.alias()`

**Kind**: [`Room`](room.md#Room)实例方法

| Param | Type | Description |
| :--- | :--- | :--- |
| \[query\] | [`RoomMemberQueryFilter`](room.md#RoomMemberQueryFilter) \| `string` | 1. RoomMemberQueryFilter 可通过 name, roomAlias, contactAlias 查找指定的群成员。 2. 当memberAll(name) 的参数为string 类型的时候, 返回所有找到的群成员。这里面的name 包括上面定义的name, roomAlias, contactAlias。 |

#### 示例

```javascript
const memberList: Conatct[] = await room.memberAll()
console.log(`room all member list: `, memberList)

const memberContactList: Conatct[] = await room.memberAll(`abc`)
console.log(`contact list with all name, room alias, alias are abc:`, memberContactList)
```

### room.member\(queryArg\) ⇒ `Promise <Contact | null>`

根据 query 获取群内的群成员。

| Param | Type | Description |
| :--- | :--- | :--- |
| queryArg | [`RoomMemberQueryFilter`](room.md#RoomMemberQueryFilter) \| `string` | RoomMemberQueryFilter 可通过 name, roomAlias, contactAlias 查找指定的群成员。 |

#### 示例 \(用名字找member\)

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

#### 示例 \(用MemberQueryFilter找member\)

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

获取群主的信息。

> 备注: 这个方法是否能实现，取决于用的是什么Puppet, 参照 [puppet-compatible-table](https://wechaty.js.org/docs/specs/puppet/)

#### 示例

```javascript
const owner = room.owner()
```

### room.avatar\(\) ⇒ `Promise <FileBox>`

获取群头像的信息。

> 备注: 这个方法是否能实现，取决于用的是什么Puppet, 参照 [puppet-compatible-table](https://wechaty.js.org/docs/specs/puppet/)

#### 示例

```javascript
const owner = room.avatar()
```

## 静态方法

### Room.create\(contactList, \[topic\]\) ⇒ [`Promise <Room>`](room.md#Room)

创建群聊。

| Param | Type |
| :--- | :--- |
| contactList | `Array` |
| \[topic\] | `string` |

#### 示例 _\(Creat a room with 'lijiarui' and 'juxiaomi', the room topic is 'ding - created'\)_

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

通过 {topic: string \| RegExp}, 查找群，返回找到的所有群的数组。

| Param | Type |
| :--- | :--- |
| \[query\] | [`RoomQueryFilter`](room.md#RoomQueryFilter) |

#### 示例

```javascript
const bot = new Wechaty()
await bot.start()
// after logged in
const roomList = await bot.Room.findAll()                    // get the room list of the bot
const roomList = await bot.Room.findAll({topic: 'wechaty'})  // find all of the rooms with name 'wechaty'
```

### Room.find\(query\) ⇒ `Promise <Room>`

通过 {topic: string \| RegExp}，查找群，如果找到多个群，返回找到的第一个群。

| Param | Type |
| :--- | :--- |
| query | [`RoomQueryFilter`](room.md#RoomQueryFilter) |

#### 示例

```javascript
const bot = new Wechaty()
await bot.start()
// after logged in...
const roomList = await bot.Room.find()
const roomList = await bot.Room.find({topic: 'wechaty'})
```

## Typedefs

## RoomQueryFilter

查找群的过滤器，{topic: string \| RegExp}.

### Properties

| 名字 | 类型 |
| :--- | :--- |
| topic | `string` |

## RoomEventName

群事件的类型

### Properties

| 名字 | 类型 | 描述 |
| :--- | :--- | :--- |
| join | `string` | 当有人入群的时候，会触发这个事件。 |
| topic | `string` | 当有人修改群名称的时候，会触发这个事件。 |
| leave | `string` | 当有人离群的时候，会触发这个事件。如果是用户主动离群，是无法获取到这个事件的。 |

## RoomEventFunction

### Properties

| Name | Type | Description |
| :--- | :--- | :--- |
| room-join | `function` | \(this: Room, inviteeList: Contact\[\] , inviter: Contact\)  =&gt; void |
| room-topic | `function` | \(this: Room, topic: string, oldTopic: string, changer: Contact\) =&gt; void |
| room-leave | `function` | \(this: Room, leaver: Contact\) =&gt; void |

## RoomMemberQueryFilter

通过Room.member\(\)搜索群成员的过滤器。

### Properties

| Name | Type | Description |
| :--- | :--- | :--- |
| name | `string` | 通过用户的昵称查找群成员，这里面的name 等于`Contact.name()` |
| roomAlias | `string` | 通过用户设置的群昵称查找群成员 |
| contactAlias | `string` | 通过机器人给用户设置的备注查找群成员，这里面的contactAlias 等于  `Contact.alias()`. [更多](https://github.com/wechaty/wechaty/issues/365) |