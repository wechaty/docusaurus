---
title: Room Invitation
---

## Room Invitation

Room Invitation is a global class that accepts room invitation. This section describes the methods of the Room Invitation class.

| Instance Methods | Return type |
|----------------|---------------|
| accept\(\)     | `Promise`   |
| inviter\(\)    | `Promise`(Contact)   |
| topic\(\)    | `Promise` (String)   |
| date\(\)    | `Promise` (Date)   |
| age\(\)    | `Promise` (Number)   |

### roomInvitation.accept\(\) ⇒ `Promise <void>`

This method accepts the room invitation. See the following example:

#### Example

```javascript
const bot = new Wechaty()
bot.on('room-invite', async roomInvitation => {
  try {
    console.log(`received room-invite event.`)
    await roomInvitation.accept()
  } catch (e) {
    console.error(e)
  }
}
.start()
```

### roomInvitation.inviter\(\) ⇒ `Promise <Contact>`

This method gets the inviter from the room invitation. Check the following example below :

#### Example

```javascript
const bot = new Wechaty()
bot.on('room-invite', async roomInvitation => {
  const inviter = await roomInvitation.inviter()
  const name = inviter.name()
  console.log(`received room invitation event from ${name}`)
}
.start()
```

### roomInvitation.topic\(\) ⇒ `Promise <string>`

The method gets the room topic from room invitation as shown in the below example:

#### Example

```javascript
const bot = new Wechaty()
bot.on('room-invite', async roomInvitation => {
  const topic = await roomInvitation.topic()
  console.log(`received room invitation event from room ${topic}`)
}
.start()
```

### roomInvitation.date\(\) ⇒ `Promise <Date>`

The method gets the invitation date and time.

### roomInvitation.age\(\) ⇒ `Promise <number>`

The method returns the roopm invitation age in seconds.
For example, the invitation is sent at time `8:43:01`, and when we received it in Wechaty, the time is `8:43:15`, then the age\(\) will return `8:43:15 - 8:43:01 = 14 (seconds)`
