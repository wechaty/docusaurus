---
title: Contact
sidebar_label: ' Contact'
---

## Contact-Self Class

Contact-Self is a special kind of contact. It represents bot self. It has all methods and properties of a regular contact, and some more. Every method that returns a ```ContactInterface```, if the contact is bot self, a ```ContactSelfInterface``` will be returned instead.

### Static Methods

You can call static methods from ```bot.ContactSelf```。

Example:

```ts
const contact = await bot.Contact.find({id: 'contactId-0' }) // contact0
```

#### find

```ts
static async find (query : string | PUPPET.filters.Contact): Promise<undefined | ContactInterface> 
```

Try to find the bot self contact. If the result is not bot self, an error will be thrown.

Example: 

```ts
const contact = await bot.ContactSelf.find({ name: 'contactId-0' }) // contact0
```

### Instance Methods

#### avatar

```ts
public override async avatar ()                       : Promise<FileBoxInterface>
public override async avatar (file: FileBoxInterface) : Promise<void>
```

Get or set the avatar of bot self.

Example: 

```ts
const contact = await bot.ContactSelf.find({ name: 'contactId-0' }) // contact0
const avatar = await contact.avatar() // filebox
await contact.avatar(file)
const newAvatar = await contact.avatar() // new file
```

#### qrcode

```ts
public async qrcode (): Promise<string>
```

Get the QRcode to add the bot to contact list.

Example:

```ts
const contact = await bot.ContactSelf.find({ name: 'contactId-0' }) // contact0
const qrcode = await user.qrcode()
console.log(`Following is the bot qrcode!`)
generate(qrcode, { small: true }) // from qrcode-terminal package
```

#### name

```ts
public override name (): string
public override name (name: string): Promise<void>
```

Get or set the name of bot self.

Example:

```ts
const contact = await bot.ContactSelf.find({ name: 'contactId-0' }) // contact0
const name = contact.name() // bot
await contact.name('newName')
const newName = contact.name() // newName
```

#### signature

```ts
public async signature (signature: string): Promise<void> 
```

Set the signature of bot self.

```ts
const contact = await bot.ContactSelf.find({ name: 'contactId-0' }) // contact0
await contact.signature('hello world')
```
