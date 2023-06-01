---
title: Contact
sidebar_label: ' Contact'
---

# Contact Class

Contact, as the name indicates, represents a contact in IM. The Contact class provides many functions including getting properties, send messages, edit info, etc.

Note that a contact may not be a friend. They may just be a member in one of your rooms.

## Static Methods

You can call static methods from ```bot.Contact```。

Example:

```ts
const contact = await bot.Contact.find({id: 'contactId-1' }) // contact1
```

### find

```ts
static async find (query : string | PUPPET.filters.Contact): Promise<undefined | ContactInterface> 
```

Try to find a contact in cache and then puppet. If no contact was found, ```undefined``` will be returned.

Example: Find a contact with name 'contact-2'

```ts
const contact = await bot.Contact.find({ name: 'contact-2' }) // contact2
```

### findAll

```ts
static async findAll (query? : PUPPET.filters.Contact): Promise<ContactInterface[]>
```

Try to find contacts in puppet and then loaded them in cache and then puppet.

Examples: Find contacts with names starts with 'contact9':

```ts
const contacts = await bot.Contact.findAll({
  name: \^contact9[3-8]$\
}) // [Contact<contact-93>, Contact<contact94>, Contact<contact95>, Contact<contact96>, Contact<contact97>, Contact<contact98>]
```

### tags

```ts
static async tags (): Promise<TagInterface[]>
```

Get all contact tags.

Example: Get all tags.

```ts
const tags = await bot.Contact.tags() // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## Instance Methods

### say

```ts
async say (sayable: Sayable): Promise<void | MessageInterface>
```

Send a message to the contact.

Example:

```ts
const contact = await bot.Contact.find({id: 'contactId-1' })
const message = await contact.say('hello contact1')
```

### name

```ts
name (): string
```

Get the name of the contact.

Example:

```ts
const contact = await bot.Contact.find({id: 'contactId-1' })
const name = contact.name() // contact-1
```

### alias

```ts
async alias (): Promise<undefined | string>
async alias (newAlias: string): Promise<void>
async alias (empty: null): Promise<void>
```

Get or set the alias of the contact.

If the new alias parameter is ```undefined```, the alias of the contact will be returned.

If the new alias is a valid string ('' is acceptable), the new alias will be set and ```void``` will be returned.

Example:

```ts
const contact = await bot.Contact.find({id: 'contactId-5' })
const oldAlias = await contact.alias() // 'alias-5'
await contact.alias('new-alias-5')
const newAlias = await contact.alias() // 'new-alias-5'
await contact.alias(null) // clear alias
```

### phone

```ts
async phone (): Promise<string[]>
async phone (phoneList: string[]): Promise<void>
async phone (phoneList?: string[]): Promise<string[] | void> 
```

Get or set the phone number list of the contact.

If the new phone list parameter is ```undefined```, the list of the phone numbers of the contact will be returned.

If the new phone list is a valid string array ([] is acceptable), the new phone list will be set and ```void``` will be returned.

```ts
const contact = await bot.Contact.find({id: 'contactId-4' })
const oldList = await contact.phone() // []
await contact.phone(['phone1', 'phone2'])
const newAlias = await contact.phone() // ['phone1', 'phone2']
await contact.phone([]) // clear phone
```

### corporation

```ts
async corporation (): Promise<undefined | string>
async corporation (remark: string | null): Promise<void>
async corporation (remark?: string | null): Promise<void | undefined | string> 
```

Get or set the corporation of the contact.

If the new corporation parameter is ```undefined```, the corporation of the contact will be returned.

If the new corporation is a valid string ('' is acceptable), the new corporation will be set and ```void``` will be returned.

```ts
const contact = await bot.Contact.find({id: 'contactId-6' })
const oldCorp = await contact.corporation() // ''
await contact.corporation('corp-6')
const newCorp = await contact.corporation() // 'corp-6'
await contact.corporation(null) // clear corporation
```

### description

```ts
async description (): Promise<undefined | string>
async description (newDescription: string | null): Promise<void>
async description (newDescription?: string | null): Promise<void | undefined | string>
```

Get or set the description of the contact.

If the new description parameter is ```undefined```, the description of the contact will be returned.

If the new description is a valid string ('' is acceptable), the new description will be set and ```void``` will be returned.

Example:

```ts
const contact = await bot.Contact.find({id: 'contactId-7' })
const oldDescription = await contact.description() // 'description-7'
await contact.description('new-description-7')
const newDescription = await contact.description() // 'new-description-7'
await contact.description(null) // clear alias
```

### title

```ts
async title (): string | null
```

Get the title of the contact. If the IM or the contact has no title info, ```null``` will be returned.

Example:

```ts
const contact = await bot.Contact.find({id: 'contactId-8' })
const title = contact.title() // null
```

### friend

```ts
friend (): undefined | boolean
```

Return whether the contact is bot's friend or not. As not all contacts are friends.

Example:

```ts
const contact9 = await bot.Contact.find({id: 'contactId-9' })
const contact10 = await bot.Contact.find({id: 'contactId-10' })
console.log(contact9.friend()) // false
console.log(contact10.friend()) // true
```

### type

```ts
type (): PUPPET.types.Contact
```

Return the type of the contact.

Example:

```ts
const contact = await bot.Contact.find({id: 'contactId-10' })
console.log(contact.type()) // 1 (Contact.Individual)
```

### star

```ts
async star (): undefined | boolean
```

Return whether the contact is a start contact (a.k.a. favorite contact) or not.

Example:

```ts
const contact = await bot.Contact.find({id: 'contactId-11' })
console.log(contact.star()) // undefined
```

### gender

```ts
gender (): PUPPET.types.ContactGender
```

Return the gender of the contact.

Example:

```ts
const contact = await bot.Contact.find({id: 'contactId-12' })
console.log(contact.gender()) // ContactGender.Male
```

### province

```ts
province (): undefined | string
```

Get the province of the contact. If the IM or the contact has no province info, ```undefined``` will be returned.

Example:

```ts
const contact = await bot.Contact.find({id: 'contactId-13' })
console.log(contact.province()) // undefined
```

### city

```ts
city (): undefined | string
```

Get the city of the contact. If the IM or the contact has no city info, ```undefined``` will be returned.

Example:

```ts
const contact = await bot.Contact.find({id: 'contactId-14' })
console.log(contact.city()) // undefined
```

### avatar

```ts
async avatar (): Promise<FileBoxInterface>
```

Example:

```ts
const contact = await bot.Contact.find({id: 'contactId-15' })
const file = await contact.avatar() // FileBox<https://www.cdn.com/image-15>
```

Get the avatar of the contact.

### tags

```ts
async tags (): Promise<TagInterface[]>
```

Get the tags of the contact.

Example:

```ts
const contact = await bot.Contact.find({id: 'contactId-16' })
const tags = await contact.tags() // [1, 6]
```

### sync

```ts
async sync (): Promise<void>
```

Force reload data of the contact, useful when the info of the contact has been modified.

Example:

```ts
const contact = await bot.Contact.find({id: 'contactId-17' })
const alias = await contact.alias() // alias-17
// edit alias on your phone to new-alias-17
console.log(await contact.alias()) // alias-17
await contact.sync()
console.log(await contact.alias()) // new-alias-17
```

### readMark

```ts
async readMark (hasRead: boolean): Promise<void>
async readMark (): Promise<boolean>
```

Get or set the readmark condition of the contact. Readmark is the read dot in IM that marks new messages.

If the hasRead parameter is ```undefined```, the readmark status of the contact will be returned.

If the hasRead is a valid boolean, the readmark will be set as the hasRead parameter and ```void``` will be returned.

Example:

```ts
const contact = await bot.Contact.find({id: 'contactId-18' })
await contact.readMark(true)
```

### self

```ts
self (): boolean
```

Return whether the contact is bot self or not.

Example:

```ts
const contact = await bot.Contact.find({id: 'contactId-19' })
console.log(contact.self()) // false
const contactSelf = await bot.Contact.find({id: 'contactId-0' })
console.log(contactSelf.self()) // true
```

### handle

```ts
async handle (): undefined | string
```

Return the handle of the contact. This value depends on puppet implementation, usually represents an internal ID represents the contact in IM. e.g., A Twitter handle is the username that appears at the end of your unique Twitter URL.

If the IM or the contact has no handle info, ```undefined``` will be returned.

```ts
const contact = await bot.Contact.find({id: 'contactId-20' })
const handle = await contact.handle() // handle-20
```

### toString()

```ts
override toString (): string
```

Gets a string represents a contact instance. Useful when debugging.

Example:

```ts
const contact = await bot.Contact.find({id: 'contactId-21' })
console.log(contact) // Contact<contact-21>
```
