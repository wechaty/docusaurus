---
title: 'Making friends'
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

## Sending Request

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
async function onReady () {
  const weixin  = 'FridayBOT' // weixin id
  const contact = await bot.Friendship.search({ weixin })

  if (contact) {
    console.info('Sending friend request...')
    await bot.Friendship.add(contact)
  } else {
    console.info('Friendship.search: not found')
  }
}

bot.on('ready', onReady)
```

</TabItem>
<TabItem value="js">

```js
async function onReady () {
  const weixin  = 'FridayBOT' // weixin id
  const contact = await bot.Friendship.search({ weixin })

  if (contact) {
    console.info('Sending friend request...')
    await bot.Friendship.add(contact)
  } else {
    console.info('Friendship.search: not found')
  }
}

bot.on('ready', onReady)
```

</TabItem>
<TabItem value="py">

```py
from typing import Optional
from wechaty import Wechaty, Contact

class MyBot(Wechaty):
    async def on_ready(self, _):
        contact: Optional[Contact] = await self.Friendship.search(phone='phone-of-someone')
        if contact:
            self.Friendship.add(contact)
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

## Receiving Request

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
import { Friendship } from 'wechaty'

async function onFriendship (friendship: Friendship) {
  if (friendship.type() === Friendship.Type.Receive) {
    console.info('New requrest from', friendship.contact())
    console.info('Hello message:', friendship.hello())
    await friendship.accept()
  } else if (friendship.type() === Friendship.Type.Confirm) {
    console.info('New request confirmed with', friendship.contact().name())
  }
}

bot.on('friendship', onFriendship)
```

</TabItem>
<TabItem value="js">

```js
import { Friendship } from 'wechaty'

async function onFriendship (friendship) {
  if (friendship.type() === Friendship.Type.Receive) {
    console.info('New requrest from', friendship.contact())
    console.info('Hello message:', friendship.hello())
    await friendship.accept()
  } else if (friendship.type() === Friendship.Type.Confirm) {
    console.info('New request confirmed with', friendship.contact().name())
  }
}

bot.on('friendship', onFriendship)
```

</TabItem>
<TabItem value="py">

```py
from wechaty import Wechaty, Friendship, FriendshipType

class MyBot(Wechaty):
    async def on_friendship(self, friendship: Friendship):
        if friendship.type() == FriendshipType.FRIENDSHIP_TYPE_RECEIVE:
            await friendship.accept()
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
