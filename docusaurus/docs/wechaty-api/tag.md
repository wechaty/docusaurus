---
title: Tag
sidebar_label: ' Tag'
---

# Tag Class

Tag represents the a tag on the contact. Current design did not implements features like tag ids, tag groups etc. There will be rework on tag soon.

### Static Methods

## get

```ts
static async get (tag: string): Promise<TagInterface>
```

Get a Tag instance for the tag.

## delete

```ts
async delete (tag: TagInterface): Promise<void>
```

Delete a Tag IM-wise.

### Instance Methods

## add

```ts
async add (to: ContactInterface | FavoriteInterface): Promise<void>
```

Tag a contact.

Example:

```ts
const contact = await bot.Contact.find({ name: 'contact' })
const tag = await bot.Tag.get('tag')

await tag.add(contact)
```

## remove

```ts
async remove (from: ContactInterface | FavoriteInterface): Promise<void>
```

Remove a tag from contact.
