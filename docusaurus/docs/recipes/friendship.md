---
title: 'Making Friends'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
    { label: 'CSharp',      value: 'csharp', },
    { label: 'Rust',        value: 'rust', },
  ]
}>

<TabItem value="ts">

```ts
import { Friendship } from 'wechaty'

const weixin  = 'FridayBOT' // weixin id
const contact = await Friendship.search({ weixin })

if (contact) {
  console.info('Sending friend request...')
  await Friendship.add(contact)
} else {
  console.info('Friendship.search: not found')
}
```

</TabItem>
<TabItem value="js">

```js
const { Friendship } = require('wechaty')

const weixin  = 'FridayBOT' // weixin id
const contact = await Friendship.search({ weixin })

if (contact) {
  console.info('Sending friend request...')
  await Friendship.add(contact)
} else {
  console.info('Friendship.search: not found')
}
```

</TabItem>
<TabItem value="py">

```py
# TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="java">

```java
// TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="go">

```go
// TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="php">

```php
// TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="csharp">

```csharp
// TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="scala">

```scala
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
    { label: 'CSharp',      value: 'csharp', },
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
# TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="java">

```java
// TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="go">

```go
// TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="php">

```php
// TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="csharp">

```csharp
// TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="scala">

```scala
// TODO: Pull Request is welcome!
```

</TabItem>
<TabItem value="rust">

```rust
// TODO: Pull Request is welcome!
```

</TabItem>
</Tabs>
