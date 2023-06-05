---
title: Room-Invitation
sidebar_label: ' Room-Invitation'
---

## Room-Invitation Class

Room-Invitation class is kind like Friendship class. It is used only when received a room invitation. Unlike most user modules that can be loaded with ```find``` or ```findAll```, friendship can created internally and passed as parameter in ```room-invitation``` event callback. It can also be serialized and deserialized to and from JSON.

### Static Methods

#### fromJSON

```ts
static async fromJSON (payload: string | PUPPET.payloads.RoomInvitation): Promise<RoomInvitationInterface>
```

Deserialized from a JSON string or object to a friendship instance.

#### toJSON (instance method)

```ts
toJSON (): string
```

Get the JSON string of the invitation.

Example:

```ts
bot.on('room-invitation', invitation: RoomInvitationInterface => {
  const jsonStr = invitation.toJSON()

  const invitation2 = await bot.RoomInvitation.fromJSON(jsonStr)
  console.log(invitation === invitation2) // false, different with friendship, room-invitation class is not poolified, which means every time you load a new invitation, it will be a new object.

  await invitation.accept()

  await invitation2.accept() // at this time, the invitation will be accepted already (since this two invitation objects represents the same invitation in IM). An error may be thrown (depend on puppet implementation).
})
```

### Instance Methods

#### accept

```ts
async accept (): Promise<void>
```

Accepts this friendship request received.

Example:

```ts
bot.on('room-invitation', invitation: RoomInvitationInterface => {
  await invitation.accept()
})
```

#### inviter

```ts
async inviter (): Promise<ContactInterface>
```

Get the contact that invited you to the room.

Example:

```ts
bot.on('room-invitation', invitation: RoomInvitationInterface => {
  const inviter = await invitation.inviter()
  await inviter.say('thank you for inviting me!')
})
```

#### topic

```ts
async topic (): Promise<string>
```

Get the topic of the room that you were invited to.

Example:

```ts
bot.on('room-invitation', invitation: RoomInvitationInterface => {
  const topic = await invitation.topic()
})
```

#### memberCount

```ts
async memberCount (): Promise<number>
```

Get the count of members of the room that you were invited to.

Example:

```ts
bot.on('room-invitation', invitation: RoomInvitationInterface => {
  const roomMemberCount = await invitation.memberCount()
})
```

#### memberList

```ts
async memberList (): Promise<ContactInterface[]>
```

Get the list of contacts of the room that you were invited to.

Example:

```ts
bot.on('room-invitation', invitation: RoomInvitationInterface => {
  const contactList = await invitation.memberList()
})
```

#### date

```ts
date (): Date
```

Return the date (and time) of the invitation.

Example:

```ts
bot.on('room-invitation', invitation: RoomInvitationInterface => {
  console.log(invitation.date()) // 2023-05-22T15:44:21.298Z
})
```

#### age

```ts
age (): number
```

Returns the age of the invitation in seconds.

Example:

```ts
bot.on('room-invitation', invitation: RoomInvitationInterface => {
  console.log(invitation.age()) // 120
})
```
