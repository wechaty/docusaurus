---
title: Tag
sidebar_label: 'Tag'
---

# Tag Mixin

## Abstract Methods

### tagContactAdd

```ts
abstract tagContactAdd (tagId: string, contactId: string): Promise<void>
```

Tag a contact. Should create the tag if the tag does not exist.

### tagContactRemove

```ts
abstract tagContactRemove (tagId: string, contactId: string): Promise<void>
```

Remove a tag from a contact.

### tagContactDelete

```ts
abstract tagContactDelete (tagId: string): Promise<void>
```

Delete a tag from the IM (not just remove from a contact.)

### tagContactList

```ts
abstract tagContactList (): Promise<string[]>
```

Get complete tag list from IM.

```ts
abstract tagContactList (contactId: string): Promise<string[]>
```

Get tag list from a contact
