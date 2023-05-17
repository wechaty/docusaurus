---
title: Contact
sidebar_label: 'User Module: Contact'
---

# Contact Class

Contact, as the name indicates, represents a contact in IM. The Contact class provides many functions including getting properties, send messages, edit info, etc.

Note that a contact may not be a friend. They may just be a member in one of your rooms.

## Static Methods

You can call static methods from ```bot.Contact```, e.g.

```ts
const contact = await bot.Contact.find({id})
```

### find

```ts
static async find (query : string | PUPPET.filters.Contact): Promise<undefined | ContactInterface> 
```

Try to find a contact in cache and then puppet. If no contact was found, ```undefined``` will be returned.

### findAll

```ts
static async findAll (query? : PUPPET.filters.Contact): Promise<ContactInterface[]>
```

Try to find contacts in puppet and then loaded them in cache and then puppet.

### tags

```ts
static async tags (): Promise<TagInterface[]>
```

Get all contact tags.

## Instance Methods

### say

```ts
async say (sayable: Sayable): Promise<void | MessageInterface>
```

Send a message to the contact.

### name

```ts
name (): string
```

Get the name of the contact.

### alias

```ts
async alias (newAlias?: null | string): Promise<void | undefined | string>
```

Get or set the alias of the contact.

If the new alias parameter is ```undefined```, the alias of the contact will be returned.

If the new alias is a valid string ('' is acceptable), the new alias will be set and ```void``` will be returned.

### phone

```ts
async phone (phoneList?: string[]): Promise<string[] | void> 
```

Get or set the phone number list of the contact.

If the new phone list parameter is ```undefined```, the list of the phone numbers of the contact will be returned.

If the new phone list is a valid string array ([] is acceptable), the new phone list will be set and ```void``` will be returned.

### corporation

```ts
async corporation (remark?: string | null): Promise<void | undefined | string>
```

Get or set the corporation of the contact.

If the new corporation parameter is ```undefined```, the corporation of the contact will be returned.

If the new corporation is a valid string ('' is acceptable), the new corporation will be set and ```void``` will be returned.

### description

```ts
async description (newDescription?: string | null): Promise<void | undefined | string>
```

Get or set the description of the contact.

If the new description parameter is ```undefined```, the description of the contact will be returned.

If the new description is a valid string ('' is acceptable), the new description will be set and ```void``` will be returned.

### title

```ts
async title (): string | null
```

Get the title of the contact. If the IM or the contact has no title info, ```null``` will be returned.

### friend

```ts
async friend (): undefined | boolean
```

Return whether the contact is bot's friend or not. As not all contacts are friends.

### type

```ts
type (): PUPPET.types.Contact
```

Return the type of the contact.

### star

```ts
async star (): undefined | boolean
```

Return whether the contact is a start contact (a.k.a. favorite contact) or not.

### gender

```ts
type (): PUPPET.types.ContactGender
```

Return the gender of the contact.

### province

```ts
async province (): undefined | string
```

Get the province of the contact. If the IM or the contact has no province info, ```undefined``` will be returned.

### city

```ts
async city (): undefined | string
```

Get the city of the contact. If the IM or the contact has no city info, ```undefined``` will be returned.

### avatar

```ts
async avatar (): Promise<FileBoxInterface>
```

Get the avatar of the contact.

### tags

```ts
async tags (): Promise<TagInterface[]>
```

Get the tags of the contact.

### sync

```ts
async sync (): Promise<void>
```

Force reload data of the contact, useful when the info of the contact has been modified.

### readMark

```ts
async readMark (hasRead: boolean): Promise<void>
async readMark (): Promise<boolean>
```

Get or set the readmark condition of the contact. Readmark is the read dot in IM that marks new messages.

If the hasRead parameter is ```undefined```, the readmark status of the contact will be returned.

If the hasRead is a valid boolean, the readmark will be set as the hasRead parameter and ```void``` will be returned.

### self

```ts
async self (): boolean
```

Return whether the contact is bot self or not.

### handle

```ts
async handle (): undefined | string
```

Return the handle of the contact. This value depends on puppet implementation, usually represents an internal ID represents the contact in IM. e.g., A Twitter handle is the username that appears at the end of your unique Twitter URL.

If the IM or the contact has no handle info, ```undefined``` will be returned.
