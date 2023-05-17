---
title: Room
sidebar_label: 'User Module: Room'
---

## Room Class

Room, as the name indicates, represents a room in IM. The Room class provides many functions including getting properties, send messages, edit info, etc.

## Static Methods

You can call static methods from ```bot.Room```, e.g.

```ts
const room = await bot.Room.find({id})
```

### create

```ts
static async create (contactList: ContactInterface[],topic?: string): Promise<RoomInterface>
```

Create a new room with contact list and topic provided. Returns the new room instance.

### find

```ts
static async find (query : string | PUPPET.filters.Room): Promise<undefined | RoomInterface> 
```

Try to find a room in cache and then puppet. If no room was found, ```undefined``` will be returned.

### findAll

```ts
static async findAll (query? : PUPPET.filters.Room): Promise<RoomInterface[]>
```

Try to find rooms in puppet and then loaded them in cache and then puppet.

## Instance Methods
