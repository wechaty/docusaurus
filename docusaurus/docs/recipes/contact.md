---
title: 'Searching Contacts'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## List all contacts

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
import { Contact } from 'wechaty'

const contactList = await bot.Contact.findAll()
console.info('Total number of contacts:', contactList.length)

for (const contact of contactList) {
  console.info('Id:',   contact.id)
  console.info('Name:', contact.name())

  const type = contact.type()
  console.info('Type:', Contact.Type[type])
}
```

</TabItem>
<TabItem value="js">

```js
const { Contact } from 'wechaty'

const contactList = await bot.Contact.findAll()
console.info('Total number of contacts:', contactList.length)

for (const contact of contactList) {
  console.info('Id:',   contact.id)
  console.info('Name:', contact.name())
  
  const type = contact.type()
  console.info('Type:', Contact.Type[type])
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

## Search in contacts

`Contact.find` and `Contact.findAll` supports search by `id`, `name`, `alias`, `weixin`.

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
// find by id:
const filehelper = await bot.Contact.find('filehelper')
console.info('filehelper:', filehelper)

// find by name:
const nameContainsJList = await bot.Contact.findAll({ name: /j/i })
console.info('Total number of contacts:', nameContainsJList.length)

for (const contact of nameContainsJList) {
  console.info('contact:', contact)
}
```

</TabItem>
<TabItem value="js">

```js
// find by id:
const filehelper = await bot.Contact.find('filehelper')
console.info('filehelper:', filehelper)

// find by name:
const nameContainsJList = await bot.Contact.findAll({ name: /j/i })
console.info('Total number of contacts:', nameContainsJList.length)

for (const contact of nameContainsJList) {
  console.info('contact:', contact)
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
