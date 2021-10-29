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

Wechaty Room is a group of Contacts. This section will teach you how to make a new room and add to it the first ten people who have sent you a message.The guide will demonstrate in JavaScript, but you can choose between various programming languages available.

## Requirements

1. [Node.js](https://nodejs.org/en/download) v16+
2. [Wechaty](https://www.npmjs.com/package/wechaty) v0.40+

## Prerequisites

### 1. Getting Started

This guide assumes that you have node installed and are familiar with Wechaty **Starter Bot**. The below function needs a basic script that can help run the bot. The basic script starts by importing the code from [Github/Room-Bot](https://github.com/wechaty/wechaty-getting-started/blob/main/examples/advanced/room-bot.js).

### 2. Install dependency

In order to create a new Room, you need to first install some npm dependencies. You can install it using the following command:

```sh
npm i wechaty
```

### 3. Integrate the dependencies

Add the dependencies at the head of the `bot.js` file:

```js
import { 
  Room,
  Wechaty, 
}           = from 'wechaty'
```

## Creating a Room and adding Contacts

<ol>
<li> In the bot.js file add a contactList global array. The onMessage function will populate this array with contacts.

```js
const contactList=[];
```

</li>
<li> The onMessage function should be defined as follows:</li>
</ol>

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
  Wechaty,
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
const contactList=[];
async function onMessage (msg) {
  const helperContact =msg.talker()  
 contactList.push(helperContact);
if(contactList.length>=10)
{
  console.log('Bot', 'contactList: %s', contactList)
  const room = await bot.Room.create(contactList, 'ding')
  console.log('Bot', 'createDingRoom() new ding room created: %s', room)
  await room.topic('ding - created')
}
}
```

</TabItem>
<TabItem value="py">

```py
from __future__ import annotations
from typing import List

from wechaty import (
    Wechaty,
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

When a new message is received, the onMessage function is called. The sender will be added to a contactList array. A room called ding will be created once ten senders have been registered.

## Remove contact from room

To remove the contacts already added in the room, you can add the following function in your bot.js file.

<Tabs
  groupId="remove-contact"
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
    Wechaty,
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

Wechaty allows to change the room topic with ease using a simple function.`topic` accepts a `String` as an argument. You can find the `Room` by either room name (a `String`) or room id (format '12345678910@chatroom')

<Tabs
  groupId="topic-change"
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
  Wechaty,
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
    Wechaty,
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

To display a welcome message to the new contact in a room, add the following function in the bot.js file:

<Tabs
  groupId="mention"
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

## Run the bot

To run the bot, first you have to **export/set** an environment variable with the type of puppet to use, and then start the bot:

<Tabs
  groupId="environment"
  defaultValue="limc"
  values={[
    { label: 'Linux/Mac',  value: 'limc', },
    { label: 'Windows',  value: 'win', },
  ]
}>

<TabItem value="limc">

```bash
export WECHATY_LOG=verbose
export WECHATY_PUPPET=wechaty-puppet-whatsapp
# If you want to use WeChat
# export WECHATY_PUPPET=wechaty-puppet-wechat
npm start
```

</TabItem>

<TabItem value="win">

```bash
set WECHATY_LOG=verbose
set WECHATY_PUPPET=wechaty-puppet-whatsapp
# If you want to use WeChat
# set WECHATY_PUPPET=wechaty-puppet-wechat
npm start
```

</TabItem>

</Tabs>

After running the bot, it will generate a QR code for **WeChat** or **WhatsApp** (as per the puppet you have used), scan it with the appropriate app, and the bot will now be connected to the app. You will notice that the bot will create a new room with 10 contacts.

## Output

The expected result will be:
![Room output](../../static/img/howto/room/room.webp)

## Conclusion

You can apply a similar concept to create a `Room` and add `contacts` to any of your Wechaty bots. You can also add predefined contacts to the contactList array and create a Wechaty room.

## Blog

[Room bot](https://github.com/wechaty/getting-started/blob/main/examples/advanced/room-bot.js)
