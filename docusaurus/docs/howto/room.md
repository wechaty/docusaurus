---
title: 'Managing rooms'
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
const { 
  Room,
  Wechaty, 
}           = require('wechaty')
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

## Run the bot

To run the bot, first you have to **export/set** an environment variable with the type of puppet to use, and then start the bot:

### Linux/macOS

```bash
export WECHATY_LOG=verbose
export WECHATY_PUPPET=wechaty-puppet-whatsapp
# If you want to use WeChat
# export WECHATY_PUPPET=wechaty-puppet-wechat
npm start
```

### Windows

```bash
set WECHATY_LOG=verbose
set WECHATY_PUPPET=wechaty-puppet-whatsapp
# If you want to use WeChat
# set WECHATY_PUPPET=wechaty-puppet-wechat
npm start
```

After running the bot, it will generate a QR code for **WeChat** or **WhatsApp** (as per the puppet you have used), scan it with the appropriate app, and the bot will now be connected to the app. You will notice that the bot will create a new room with 10 contacts.

## Output

The expected result will be:
![Room output](../../static/img/howto/room/room.png)

## Conclusion

You can apply a similar concept to create a `Room` and add `contacts` to any of your Wechaty bots. You can also add predefined contacts to the contactList array and create a Wechaty room.
