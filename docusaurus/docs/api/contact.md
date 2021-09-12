---
title: Contact Class
---

All wechat contacts(friend) will be encapsulated as a Contact.

## Classes

All wechat contacts\(friend\) will be encapsulated as a Contact. 
[Examples/Contact-Bot](https://github.com/wechaty/wechaty/blob/1523c5e02be46ebe2cc172a744b2fbe53351540e/examples/contact-bot.ts)

## Contact

All wechat contacts\(friend\) will be encapsulated as a Contact.

**Properties**

| Name | Type | Description |
| :--- | :--- | :--- |
| id | `string` | Get Contact id. This function is depending on the Puppet Implementation, see [puppet-compatible-table](https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table) |

## Global Class `Contact`

| Instance Methods                     | Return type                                                           |
|--------------------------------------|-----------------------------------------------------------------------|
| say(text Or Contact Or File Or Url)  | `Promise`                                                             |
| name()                               | `String`                                                              |
| alias(newAlias)                      | `Promise`                                                             |
| friend()                             | `Boolean or null`                                                     |
| type()                               | `ContactType.Unknown or ContactType.Personal or ContactType.Official` |
| gender()                             | `ContactGender.Unknown or ContactGender.Male or ContactGender.Female` |
| province()                           | `String or null`                                                      |
| city()                               | `String or null`                                                      |
| avatar()                             | `Promise`                                                             |
| sync()                               | `Promise`                                                             |
| self()                               | `Boolean`                                                             |
  * _static_
    * [.find\(query\)](contact.md#Contact.find) ⇒ `Promise <Contact | null>`
    * [.findAll\(\[queryArg\]\)](contact.md#Contact.findAll) ⇒ `Promise <Contact []>`

### contact.say\(textOrContactOrFileOrUrlLinkOrMiniProgram\) ⇒ `Promise <void>`

> Tips: This function is depending on the Puppet Implementation, see [puppet-compatible-table](https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table)

| Param | Type | Description |
| :--- | :--- | :--- |
| textOrContactOrFileOrUrlLinkOrMiniProgram | `string` \| [`Contact`](contact.md#Contact) \| `FileBox` \| `UrlLink` \| `MiniProgram` | send text, Contact, file or UrlLink to contact.   You can use [FileBox](https://www.npmjs.com/package/file-box) to send file |

### Example

```javascript
import { FileBox }  from 'file-box'
import {
  Wechaty,
  UrlLink,
  MiniProgram,
}  from 'wechaty'

const bot = new Wechaty()
await bot.start()
const contact = await bot.Contact.find({name: 'lijiarui'})  // change 'lijiarui' to any of your contact name in wechat

// 1. send text to contact

await contact.say('welcome to wechaty!')

// 2. send media file to contact

import { FileBox }  from 'file-box'
const fileBox1 = FileBox.fromUrl('https://wechaty.github.io/wechaty/images/bot-qr-code.png')
const fileBox2 = FileBox.fromFile('/tmp/text.txt')
await contact.say(fileBox1)
await contact.say(fileBox2)

// 3. send contact card to contact

const contactCard = bot.Contact.load('contactId')
await contact.say(contactCard)

// 4. send url link to contact

const urlLink = new UrlLink({
  description : 'WeChat Bot SDK for Individual Account, Powered by TypeScript, Docker, and Love',
  thumbnailUrl: 'https://avatars0.githubusercontent.com/u/25162437?s=200&v=4',
  title       : 'Welcome to Wechaty',
  url         : 'https://github.com/wechaty/wechaty',
})
await contact.say(urlLink)

// 5. send MiniProgram (only supported by `wechaty-puppet-macpro`)

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

The method gets the name from a contact.Check the below illustation for implementation.

### Example

```javascript
const name = contact.name()
```

### contact.alias\(newAlias\) ⇒ `Promise <null | string | void>`

The method gets or sets or deletes the alias for a contact.Tests show it will failed if set alias too frequently\(60 times in one minute\).

| Param | Type |
| :--- | :--- |
| newAlias | `none` \| `string` \| `null` |

### Example \( GET the alias for a contact, return {\(Promise&lt;string \| null&gt;\)}\)

```javascript
const alias = await contact.alias()
if (alias === null) {
  console.log('You have not yet set any alias for contact ' + contact.name())
} else {
  console.log('You have already set an alias for contact ' + contact.name() + ':' + alias)
}
```

### Example \(SET the alias for a contact\)

```javascript
try {
  await contact.alias('lijiarui')
  console.log(`change ${contact.name()}'s alias successfully!`)
} catch (e) {
  console.log(`failed to change ${contact.name()} alias!`)
}
```

### Example \(DELETE the alias for a contact\)

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

The method checks if contact is friend.It returns `true` for friend of the bot and  `false` for not friend of the bot, `null` for unknown.

> Tips: This function is depending on the Puppet Implementation, see [puppet-compatible-table](https://github.com/wechaty/wechaty/wiki/Puppet#3-puppet-compatible-table)

### Example

```javascript
const isFriend = contact.friend()
```

### Contact.type\(\) ⇒ `ContactType.Unknown` \| `ContactType.Personal` \| `ContactType.Official`

This method returns the type of the Contact.Check the example below for implementation.

> Tips: ContactType is enum here.

### Example

```javascript
const bot = new Wechaty()
await bot.start()
const isOfficial = contact.type() === bot.Contact.Type.Official
```

### contact.gender\(\) ⇒ `ContactGender.Unknown` \| `ContactGender.Male` \| `ContactGender.Female`

The method gets the Contact gender.Check the below example for implementation.

> Tips: ContactGender is enum here.

### Example

```javascript
const gender = contact.gender() === bot.Contact.Gender.Male
```

### Contact.province\(\) ⇒ `string` \| `null`

the method gets the region 'province' from a contact.Check the below example for implementation.

### Example

```javascript
const province = contact.province()
```

### Contact.city\(\) ⇒ `string` \| `null`

The method gets the region 'city' from a contact.Check the below example for implementation.

### Example

```javascript
const city = contact.city()
```

### Contact.avatar\(\) ⇒ `Promise <FileBox>`

This method gets avatar picture from file stream.Check the below example for implementation.

### Example

```javascript
// Save avatar to local file like `1-name.jpg`

const file = await contact.avatar()
const name = file.name
await file.toFile(name, true)
console.log(`Contact: ${contact.name()} with avatar file: ${name}`)
```

### Contact.sync\(\) ⇒ `Promise <void>`

The method force reload of data for Contact, Sync data from lowlevel API again.Check the below example for implementation.

### Example

```javascript
await contact.sync()
```

### Contact.self\(\) ⇒ `boolean`

The method checks if contact is self.It returns `boolean` - True for contact is self, False for contact is others.Check the below example for implementation.

### Example

```javascript
const isSelf = contact.self()
```
## Static Methods 

### Contact.find\(query\) ⇒ `Promise <Contact | null>`

The method finds the contact by name or alias, if the result more than one, return the first one.Try to find a contact by filter: {name: string \| RegExp} / {alias: string \| RegExp}.The returns `Promise.` - If it can find the contact,or return `null`.

| Param | Type |
| :--- | :--- |
| query | [`ContactQueryFilter`](contact.md#ContactQueryFilter) |

#### Example

```javascript
const bot = new Wechaty()
await bot.start()
const contactFindByName = await bot.Contact.find({ name:"ruirui"} )
const contactFindByAlias = await bot.Contact.find({ alias:"lijiarui"} )
```

### Contact.findAll\(\[queryArg\]\) ⇒ `Promise <Contact []>`

The method finds contact by `name` or `alias`.If  you use Contact.findAll\(\) get the contact list of the bot. Include the contacts from bot's rooms.

#### Definition

* `name`   the name-string set by user-self, should be called name
* `alias`  the name-string set by bot for others, should be called alias

| Param | Type |
| :--- | :--- |
| queryArg | [`ContactQueryFilter`](contact.md#ContactQueryFilter) |

#### Example

```javascript
const bot = new Wechaty()
await bot.start()
const contactList = await bot.Contact.findAll()                      // get the contact list of the bot
const contactList = await bot.Contact.findAll({ name: 'ruirui' })    // find all of the contacts whose name is 'ruirui'
const contactList = await bot.Contact.findAll({ alias: 'lijiarui' }) // find all of the contacts whose alias is 'lijiarui'
```

# Typedefs

## ContactQueryFilter

It is a  global `typedef` used to search contacts.

**Properties**

| Name | Type | Description |
| :--- | :--- | :--- |
| name | `string` | The name-string set by user-self, should be called name |
| alias | `string` | The name-string set by bot for others, should be called alias [More Detail](https://github.com/wechaty/wechaty/issues/365) |
