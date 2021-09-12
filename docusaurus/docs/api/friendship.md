---
title: Friendship 
---

Wechaty bot allows you to make friends via its global class called `Friendship`.This section is completely about the `Frienship` class.

[Examples or Friend-Bot](https://github.com/wechaty/wechaty/blob/1523c5e02be46ebe2cc172a744b2fbe53351540e/examples/friend-bot.ts)

## Global class Friendship

The Friendship class allows you to do the following fuctionalities.

1. send friend requests
2. receive friend requests \(in friend event\)
3. confirmation of friendship\( in friend event\)

### Instance Method

| Instance Methods | Return Type      |
|------------------|------------------|
| accept()         | `Promise (void)` |
| hello()          | `string`         |
| contact()        | `contact`        |
| type()           | `Frienshiptype`  |

### Static Method

| Static Methods | Return Type      |
|----------------|------------------|
| add()          | `Promise (void)` |

### friendship.accept\(\) ⇒ `Promise <void>`

The method accepts friend request.Check the example below for implementation
 
#### Example

```javascript
const bot = new Wechaty()
bot.on('friendship', async friendship => {
  try {
    console.log(`received friend event.`)
    switch (friendship.type()) {

    // 1. New Friend Request

    case bot.Friendship.Type.Receive:
      await friendship.accept()
      break

    // 2. Friend Ship Confirmed

    case bot.Friendship.Type.Confirm:
      console.log(`friend ship confirmed`)
      break
    }
  } catch (e) {
    console.error(e)
  }
})
.start()
```

### friendship.hello\(\) ⇒ `string`

The method verifies message.Check the example below for implementation.

**Example** _\(If request content is \`ding\`, then accept the friendship\)_

```javascript
const bot = new Wechaty()
bot.on('friendship', async friendship => {
  try {
    console.log(`received friend event from ${friendship.contact().name()}`)
    if (friendship.type() === bot.Friendship.Type.Receive && friendship.hello() === 'ding') {
      await friendship.accept()
    }
  } catch (e) {
    console.error(e)
  }
}
.start()
```

### friendship.contact\(\) ⇒ `Contact`

The method gets the contact from friendship.Below is an example for implementation.

#### Example

```javascript
const bot = new Wechaty()
bot.on('friendship', friendship => {
  const contact = friendship.contact()
  const name = contact.name()
  console.log(`received friend event from ${name}`)
}
.start()
```

### friendship.type\(\) ⇒ `FriendshipType`

The method returns the friendship type.Check the below example for implementation.

> Tips: FriendshipType is enum here. &lt;/br&gt;
>
> * FriendshipType.Unknown
> * FriendshipType.Confirm
> * FriendshipType.Receive
> * FriendshipType.Verify
 
### Example _\(If request content is \`ding\`, then accept the friendship\)_

```javascript
const bot = new Wechaty()
bot.on('friendship', async friendship => {
  try {
    if (friendship.type() === bot.Friendship.Type.Receive && friendship.hello() === 'ding') {
      await friendship.accept()
    }
  } catch (e) {
    console.error(e)
  }
}
.start()
```

### Friendship.add\(contact, hello\) ⇒ `Promise <void>`

The method sends a Friend Request to a `contact` with message `hello`.The best practice is to send friend request once per minute. Remember not to do this too frequently, or your account may be blocked.

| Param | Type | Description |
| :--- | :--- | :--- |
| contact | `Contact` | Send friend request to contact |
| hello | `string` | The friend request content |

#### Example

```javascript
const memberList = await room.memberList()
for (let i = 0; i < memberList.length; i++) {
  await bot.Friendship.add(member, 'Nice to meet you! I am wechaty bot!')
}
```
