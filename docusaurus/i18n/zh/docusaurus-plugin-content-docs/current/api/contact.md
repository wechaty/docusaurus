---
title: Contact Class
---

所有的联系人（好友）都会被封装成Contact类实例。

## Classes

所有的联系人（好友）都会被封装成Contact类实例。
[Examples/Contact-Bot](https://github.com/wechaty/wechaty/blob/1523c5e02be46ebe2cc172a744b2fbe53351540e/examples/contact-bot.ts)

## Contact

所有的联系人（好友）都会被封装成Contact类实例。

### Properties

| 名称  | 类型 | 描述 |
| :--- | :--- | :--- |
| id | `string` | 获取联系人ID，这个ID 是否为永久唯一ID 取决于您使用什么puppet, 参照 [puppet-compatible-table](https://wechaty.js.org/docs/specs/puppet/) |

## Global Class `Contact`

### 实例方法

| 实例方法                    | 返回类型                                                           |
|--------------------------------------|-----------------------------------------------------------------------|
| say(text 或 Contact 或 File 或 URL)  | `Promise`                                                             |
| name()                               | `String`                                                              |
| alias(newAlias)                      | `Promise`                                                             |
| friend()                             | `Boolean 或 null`                                                     |
| type()                               | `ContactType.Unknown 或 ContactType.Personal 或 ContactType.Official` |
| gender()                             | `ContactGender.Unknown 或 ContactGender.Male 或 ContactGender.Female` |
| province()                           | `String 或 null`                                                      |
| city()                               | `String 或 null`                                                      |
| avatar()                             | `Promise`                                                             |
| sync()                               | `Promise`                                                             |
| self()                               | `Boolean`                                                             |

### 静态方法

| 静态方法            | 返回类型                 |
|---------------------------|-----------------------------|
| find(query)               | `Promise <Contact \| null>` |
| findAll(Query Arguments) | `Promise <Contact []>`      |

### contact.say\(textOrContactOrFileOrUrlLinkOrMiniProgram\) ⇒ `Promise <void>`

> 备注: 这个方法是否能实现，取决于用的是什么Puppet, 参照 [puppet-compatible-table](https://wechaty.js.org/docs/specs/puppet/)

| Param | Type | Description |
| :--- | :--- | :--- |
| text或Contact或File或UrlLink或MiniProgram | `string` \| [`Contact`](contact.md#Contact) \| `FileBox` \| `UrlLink` \| `MiniProgram` | 给微信好友发送文本，联系人名片，文件或者链接。你可以使用[FileBox](https://www.npmjs.com/package/file-box) 来发送文件。|

### 示例

```javascript
import { FileBox }  from 'file-box'
import {
  Wechaty,
  UrlLink,
  MiniProgram,
}  from 'wechaty'

const bot = new Wechaty()
await bot.start()
const contact = await bot.Contact.find({name: 'lijiarui'})

// 1. 为contact发短信

await contact.say('welcome to wechaty!')

// 2. 为contact发文件

import { FileBox }  from 'file-box'
const fileBox1 = FileBox.fromUrl('https://wechaty.github.io/wechaty/images/bot-qr-code.png')
const fileBox2 = FileBox.fromFile('/tmp/text.txt')
await contact.say(fileBox1)
await contact.say(fileBox2)

// 3. 为contact发contact card

const contactCard = bot.Contact.load('contactId')
await contact.say(contactCard)

// 4. 为contact发url链接

const urlLink = new UrlLink({
  description : 'WeChat Bot SDK for Individual Account, Powered by TypeScript, Docker, and Love',
  thumbnailUrl: 'https://avatars0.githubusercontent.com/u/25162437?s=200&v=4',
  title       : 'Welcome to Wechaty',
  url         : 'https://github.com/wechaty/wechaty',
})
await contact.say(urlLink)

// 5. 发小程序 (仅`wechaty-puppet-macpro`支持)

const miniProgram = new MiniProgram ({
  appid              : 'gh_0aa444a25adc',
  title              : '我正在使用Authing认证身份，你也来试试吧',
  pagePath           : 'routes/explore.html',
  description        : '身份管家',
  thumbUrl           : '30590201000452305002010002041092541302033d0af802040b30feb602045df0c2c5042b777875706c6f61645f31373533353339353230344063686174726f6f6d3131355f313537363035393538390204010400030201000400',
  thumbKey           : '42f8609e62817ae45cf7d8fefb532e83',
});

await contact.say(miniProgram);
```

### contact.name\(\) ⇒ `string`

获取联系人的昵称。

### 示例

```javascript
const name = contact.name()
```

### contact.alias\(newAlias\) ⇒ `Promise <null | string | void>`

获取/设置/删除 好友的备注。如果设置备注过于频繁，设置将会失效\(比如1分钟设置60次\)。

| Param | Type |
| :--- | :--- |
| newAlias | `none` \| `string` \| `null` |

### 示例 \( GET contact的备注, return {\(Promise&lt;string \| null&gt;\)}\)

```javascript
const alias = await contact.alias()
if (alias === null) {
  console.log('You have not yet set any alias for contact ' + contact.name())
} else {
  console.log('You have already set an alias for contact ' + contact.name() + ':' + alias)
}
```

### 示例 \(SET contact的备注\)

```javascript
try {
  await contact.alias('lijiarui')
  console.log(`change ${contact.name()}'s alias successfully!`)
} catch (e) {
  console.log(`failed to change ${contact.name()} alias!`)
}
```

### 示例 \(DELETE contact的备注\)

```javascript
try {
  const oldAlias = await contact.alias(null)
  console.log(`delete ${contact.name()}'s alias successfully!`)
  console.log(`old alias is ${oldAlias}`)
} catch (e) {
  console.log(`failed to delete ${contact.name()}'s alias!`)
}
```

### Contact.friend\(\) ⇒ `boolean` \| `null`

判断这个联系人是否为机器人的好友。Returns: `boolean` 或 `null`, 是friend, return`true`，不是friend, return`false`，`null`是unknown

> 备注: 这个方法是否能实现，取决于用的是什么Puppet, 参照 [puppet-compatible-table](https://wechaty.js.org/docs/specs/puppet/)

### 示例

```javascript
const isFriend = contact.friend()
```

### Contact.type\(\) ⇒ `ContactType.Unknown` \| `ContactType.Personal` \| `ContactType.Official`

获取好友的类型，是公众号还是普通还有。

> 备注：ContactType 在这里是enum

### 示例

```javascript
const bot = new Wechaty()
await bot.start()
const isOfficial = contact.type() === bot.Contact.Type.Official
```

### contact.gender\(\) ⇒ `ContactGender.Unknown` \| `ContactGender.Male` \| `ContactGender.Female`

获取联系人的性别。
> 备注：ContactGender在这里是enum

### 示例

```javascript
const gender = contact.gender() === bot.Contact.Gender.Male
```

### Contact.province\(\) ⇒ `string` \| `null`

获取联系人设置的省份信息。

### 示例

```javascript
const province = contact.province()
```

### Contact.city\(\) ⇒ `string` \| `null`

获取联系人设置的城市信息。

### 示例

```javascript
const city = contact.city()
```

### Contact.avatar\(\) ⇒ `Promise <FileBox>`

获取联系人的头像。

### 示例

```javascript
// Save avatar to local file like `1-name.jpg`

const file = await contact.avatar()
const name = file.name
await file.toFile(name, true)
console.log(`Contact: ${contact.name()} with avatar file: ${name}`)
```

### Contact.sync\(\) ⇒ `Promise <void>`

强制重新加载好友数据，会从低级别的 API 中重新同步一遍。

### 示例

```javascript
await contact.sync()
```

### Contact.self\(\) ⇒ `boolean`

检测好友是否是机器人自己。

### 示例

```javascript
const isSelf = contact.self()
```

## Static Methods

### Contact.find\(query\) ⇒ `Promise <Contact | null>`

通过类似这样的命令查找联系人: {name: string \| RegExp} / {alias: string \| RegExp}。支持通过昵称或者备注查找。如果查到不止一个联系人，返回找到的第一个。能找contact, return `Promise`, 没有contact, return `null`.

| Param | Type |
| :--- | :--- |
| query | [`ContactQueryFilter`](contact.md#ContactQueryFilter) |

#### 示例

```javascript
const bot = new Wechaty()
await bot.start()
const contactFindByName = await bot.Contact.find({ name:"ruirui"} )
const contactFindByAlias = await bot.Contact.find({ alias:"lijiarui"} )
```

### Contact.findAll\(\[queryArg\]\) ⇒ `Promise <Contact []>`

通过`name`(昵称)或者`alias`(备注)查找联系人。用 Contact.findAll() 获取机器人的所有联系人列表。

#### 定义

* `name`   用户自己设置的昵称叫做name
* `alias`  机器人给这个用户设置的昵称叫做alias

| Param | Type |
| :--- | :--- |
| queryArg | [`ContactQueryFilter`](contact.md#ContactQueryFilter) |

#### 示例

```javascript
const bot = new Wechaty()
await bot.start()
const contactList = await bot.Contact.findAll()                      // get the contact list of the bot
const contactList = await bot.Contact.findAll({ name: 'ruirui' })    // find all of the contacts whose name is 'ruirui'
const contactList = await bot.Contact.findAll({ alias: 'lijiarui' }) // find all of the contacts whose alias is 'lijiarui'
```

## Typedefs

### ContactQueryFilter

搜索联系人的方式。

### Properties

| Name | Type | Description |
| :--- | :--- | :--- |
| name | `string` | 用户自己设置的昵称叫做name |
| alias | `string` | 机器人或者其他人给这个用户设置的昵称叫做alias [更多](https://github.com/wechaty/wechaty/issues/365) |