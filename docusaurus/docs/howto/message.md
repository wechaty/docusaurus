---
title: 'Dealing with message'
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

## Mention

Only a message in the room can mention(@) others.

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
import { Message } from 'wechaty'

async function onMessage(message: Message): Promise<void> {
  if (await message.mentionSelf()) {
    const room = message.room()
    if (!room) {
      throw new Error('Should never reach here: a mention message must in a room')
    }

    console.info(message.text())
    // "@bot Hello"
    console.info(await message.mentionList())
    // [bot]
    console.info(await message.mentionText())
    // "Hello"

    const talker = room.talker()
    await room.say`Thanks for mention me! ${talker}`
  }
}

bot.on('message', onMessage)
```

</TabItem>
<TabItem value="js">

```js
const { Message } = require('wechaty')

async function onMessage(message) {
  if (await message.mentionSelf()) {
    const room = message.room()
    if (!room) {
      throw new Error('Should never reach here: a mention message must in a room')
    }

    console.info(message.text())
    // "@bot Hello"
    console.info(await message.mentionList())
    // [bot]
    console.info(await message.mentionText())
    // "Hello"

    const talker = room.talker()
    await room.say`Thanks for mention me! ${talker}`
  }
}

bot.on('message', onMessage)
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

## Self message

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
import { Message } from 'wechaty'

async function onMessage(message: Message): Promise<void> {
  if (message.self()) {
    const talker = message.talker()
    const bot = message.wechaty.userSelf()
    assert(talker === bot, 'Message is sent from bot')
    console.info('Message is sent from bot')
  }
}

bot.on('message', onMessage)
```

</TabItem>
<TabItem value="js">

```js
const { Message } = require('wechaty')

async function onMessage(message) {
  if (message.self()) {
    const talker = message.talker()
    const bot = message.wechaty.userSelf()
    assert(talker === bot, 'Message is sent from bot')
    console.info('Message is sent from bot')
  }
}

bot.on('message', onMessage)
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
