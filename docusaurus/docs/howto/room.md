---
title: 'Managing rooms'
---

Managing room is one of the important features in Wechaty. The word "room" here refers to Wechat rooms (also called groups).
You can instruct the bot to create a new room, change the topic (or name) of the room, add a contact to a specific room, remove a contact from a room, and mention(@) someone in the room.

:::tip

A Room can be identified by either groupId or room topic (room name)

:::

---
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

## Creating New Room

<Tabs
  groupId="programming-languages"
  defaultValue="ts"
  values={[
    { label: 'TypeScript',  value: 'ts', },
    { label: 'JavaScript',  value: 'js', },
    { label: 'Python',      value: 'py', },
    { label: 'Go',          value: 'go', },
    { label: 'Java',        value: 'java', },
    { label: 'PHP',         value: 'php', },
    { label: 'Scala',       value: 'scala', },
    { label: 'C#',          value: 'csharp', },
    { label: 'Rust',        value: 'rust', },
  ]
}>

<TabItem value="ts">

```ts
// TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="js">

```js
// TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="py">

```py
from __future__ import annotations
from typing import List

from wechaty import (
    WechatyBuilder,
    Contact,
    Room,
    Message
)


class MyBot(Wechaty):
    async def on_ready(self, _):
        """creating room"""
        # 1. filter friend
        friends: List[Contact] = await self.Contact.find_all()
        # find my python-wechaty related friends
        friends = [friend for friend in friends if friend.alias().startswith('python-wechaty')]

        # 2. create room and invite them
        room: Room = await self.Room.create(friends, topic='Python❤Wechaty')
        if room:
            room.say('hello, python-wechaty is ready for you.')
```

</TabItem>
<TabItem value="go">

```go
// TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="java">

```java
// TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="php">

```php
// TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="scala">

```scala
// TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="csharp">

```csharp
// TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="rust">

```rust
// TODO: Pull Request is welcome!
```

</TabItem>
</Tabs>

## Adding contact to room

`add` accepts 'Contact' as an argument. You can get the Contact by using `msg.talker()`.

<Tabs
  groupId="programming-languages"
  defaultValue="ts"
  values={[
    { label: 'TypeScript',  value: 'ts', },
    { label: 'JavaScript',  value: 'js', },
    { label: 'Python',      value: 'py', },
    { label: 'Go',          value: 'go', },
    { label: 'Java',        value: 'java', },
    { label: 'PHP',         value: 'php', },
    { label: 'Scala',       value: 'scala', },
    { label: 'C#',          value: 'csharp', },
    { label: 'Rust',        value: 'rust', },
  ]
}>

<TabItem value="ts">

```ts
import {
  Contact,
  WechatyBuilder,
  log,
  Room,
} from 'wechaty'

//helper function
async function putInRoom(person: Contact, room: Room) {
  //Add a log
  log.info("Bot", 'putInRoom("%s", "%s")', contact.name(), await room.topic());

  try {
    //Try put the person into the room
    await room.add(person);
  } catch (e) {
    //any error will be here
    log.error("Bot", "putInRoom() exception: " + e.stack);
  }
}

//in the main code
//If the secrete code is ding
if (msg.text() === 'ding') {
  //get the Person/Contact
  const from = msg.talker();

  //find the targetRoom from the bot's room list
  //Option1: by group id
  //set the targetRoomId
  const tagetRoomId = '12345678910@chatroom'
  const targetRoom = await bot.Room.find({id: tagetRoomId})
  //Option2: by group name
  // const tagetRoomTopic =  'testGroup'
  // const targetRoom = await bot.Room.find({topic:tagetRoomTopic})
  if (targetRoom instanceof Room) {
    await putInRoom(from, targetRoom);
  } else {
    log.info('Cannot find room, unable to put the person into the room')
  }
}
```

</TabItem>
<TabItem value="js">

```js
// TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="py">

```py
from __future__ import annotations
from typing import List

from wechaty import (
    WechatyBuilder,
    Contact,
    Room,
    Message
)


class MyBot(Wechaty):

    async def on_message(self, msg: Message):
        """add friend to room if they send `python-wechaty` keyword to be"""

        # invite someone to the room by keyword<python-wechaty>
        if msg.text() == 'python-wechaty':
            talker: Contact = await msg.talker()
            room: Room = await msg.room()
            mention_self: bool = await msg.mention_self()
            python_wechaty_room: Room = await self.Room.find(query='id-of-your-room')
            if room:
                if mention_self:
                    await python_wechaty_room.add(talker)
            else:
                await python_wechaty_room.add(talker)
```

</TabItem>
<TabItem value="go">

```go
// TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="java">

```java
// TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="php">

```php
// TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="scala">

```scala
// TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="csharp">

```csharp
// TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="rust">

```rust
// TODO: Pull Request is welcome!
```

</TabItem>
</Tabs>

## Remove contact from room

<Tabs
  groupId="programming-languages"
  defaultValue="ts"
  values={[
    { label: 'TypeScript',  value: 'ts', },
    { label: 'JavaScript',  value: 'js', },
    { label: 'Python',      value: 'py', },
    { label: 'Go',          value: 'go', },
    { label: 'Java',        value: 'java', },
    { label: 'PHP',         value: 'php', },
    { label: 'Scala',       value: 'scala', },
    { label: 'C#',          value: 'csharp', },
    { label: 'Rust',        value: 'rust', },
  ]
}>

<TabItem value="ts">

```ts
// TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="js">

```js
// TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="py">

```py
from __future__ import annotations
from typing import List

from wechaty import (
    WechatyBuilder,
    Contact,
    Room,
    Message
)


class MyBot(Wechaty):

    async def on_message(self, msg: Message):
        room: Room = await msg.room()
        if room:
            # func<is_dangerous_words> is to detect whether the content is dangerous
            if is_dangerous_words(msg.text()):
                talker: Contact = await msg.talker()
                room.delete(talker)
```

</TabItem>
<TabItem value="go">

```go
// TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="java">

```java
// TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="php">

```php
// TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="scala">

```scala
// TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="csharp">

```csharp
// TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="rust">

```rust
// TODO: Pull Request is welcome!
```

</TabItem>
</Tabs>

## Changing topic of the room
  
`topic` accepts a `String` as an argument.
 You can find the `Room` by either room name (a `String`) or room id (format '12345678910@chatroom')

<Tabs
  groupId="programming-languages"
  defaultValue="ts"
  values={[
    { label: 'TypeScript',  value: 'ts', },
    { label: 'JavaScript',  value: 'js', },
    { label: 'Python',      value: 'py', },
    { label: 'Go',          value: 'go', },
    { label: 'Java',        value: 'java', },
    { label: 'PHP',         value: 'php', },
    { label: 'Scala',       value: 'scala', },
    { label: 'C#',          value: 'csharp', },
    { label: 'Rust',        value: 'rust', },
  ]
}>

<TabItem value="ts">

```ts
import {
  WechatyBuilder,
  log,
  Room,
} from 'wechaty'
//helper function
async function changeRoomTopic(room: Room) {
  log.info("Bot", 'changing room topic for group', await room.topic());
  const newName ="newName"
  try {
    await room.topic(newName);
    
  } catch (e) {
    log.error("Bot", "changeRoomTopic() exception: " + e.stack);
  }

  //Option1: by group id
  //set the targetRoomId
  const tagetRoomId = '12345678910@chatroom'
  const targetRoom = await bot.Room.find({id: tagetRoomId})
  //Option2: by group name
  // const tagetRoomTopic = 'ceshiqun'
  // const targetRoom = await bot.Room.find({topic:tagetRoomTopic})
  if (targetRoom instanceof Room) {
    await changeRoomTopic(targetRoom);
  } else {
    log.info('cannot find room, unable to changeRoomTopic')
  }
  
}

```

</TabItem>
<TabItem value="js">

```js
// TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="py">

```py
from __future__ import annotations
from typing import List

from wechaty import (
    WechatyBuilder,
    Room,
    Message
)


class MyBot(Wechaty):

    async def on_message(self, msg: Message):
        """change room topic by token"""
        room: Room = await msg.room()
        if not room:
            return

        text: str = await msg.text()
        talker: Contact = await msg.talker()
        keyword = 'new-topic:'
        if talker.alias() == 'admin' and text.startswith(keyword):
            new_topic: str = text[len(keyword):]
            old_topic: str = await room.topic()
            await room.say(f'ok, I will change old_topic<{old_topic}> to new_topic<{new_topic}>')
            
            # change the topic of room
            await room.topic(new_topic)
```

</TabItem>
<TabItem value="go">

```go
// TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="java">

```java
// TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="php">

```php
// TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="scala">

```scala
// TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="csharp">

```csharp
// TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="rust">

```rust
// TODO: Pull Request is welcome!
```

</TabItem>
</Tabs>

## Mention(@) others in the room

<Tabs
  groupId="programming-languages"
  defaultValue="ts"
  values={[
    { label: 'TypeScript',  value: 'ts', },
    { label: 'JavaScript',  value: 'js', },
    { label: 'Python',      value: 'py', },
    { label: 'Go',          value: 'go', },
    { label: 'Java',        value: 'java', },
    { label: 'PHP',         value: 'php', },
    { label: 'Scala',       value: 'scala', },
    { label: 'C#',          value: 'csharp', },
    { label: 'Rust',        value: 'rust', },
  ]
}>

<TabItem value="ts">

```ts
await room.say`Hello, ${contact}`
```

</TabItem>
<TabItem value="js">

```js
await room.say`Hello, ${contact}`
```

</TabItem>
<TabItem value="py">

```py
# TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="go">

```go
// TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="java">

```java
// TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="php">

```php
// TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="scala">

```scala
// TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="csharp">

```csharp
// TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="rust">

```rust
// TODO: Pull Request is welcome!
```

</TabItem>
</Tabs>

## Moniting room events

TBW ...
