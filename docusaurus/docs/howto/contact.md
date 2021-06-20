---
title: 'Manage contacts'
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

All wechaty contacts are encapsulated as a Contact.Example includes [Examples/Contact-Bot](https://github.com/wechaty/wechaty/blob/1523c5e02be46ebe2cc172a744b2fbe53351540e/examples/contact-bot.ts)

## List all contacts

List down all the contacts by its `id`, `name` & `Type`.

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
import { Contact } from 'wechaty'

async function onReady () {
  const contactList = await bot.Contact.findAll()
  console.info('Total number of contacts:', contactList.length)

  for (const contact of contactList) {
    console.info('Id:',   contact.id)
    console.info('Name:', contact.name())

    const type = contact.type()
    console.info('Type:', Contact.Type[type])
  }
}

bot.on('ready', onReady)
```

</TabItem>
<TabItem value="js">

```js
const { Contact } from 'wechaty'

async function onReady () {
  const contactList = await bot.Contact.findAll()
  console.info('Total number of contacts:', contactList.length)

  for (const contact of contactList) {
    console.info('Id:',   contact.id)
    console.info('Name:', contact.name())
    
    const type = contact.type()
    console.info('Type:', Contact.Type[type])
  }
}

bot.on('ready', onReady)
```

</TabItem>
<TabItem value="py">

```py
from typing import List
from wechaty import Wechaty, Contact

class MyBot(Wechaty):
    async def on_ready(self, _):
        contacts: List[Contact] = await self.Contact.find_all()
        for contact in contacts:
            print(f'id<{contact.contact_id}>, name<{contact.name}>, type<{contact.type()}>')
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

### Explanation :

* `Contact.findAll` gets the contact list of the bot and include the contacts from bot's rooms.

* `contactList.length` find out the total contacts from the list.

* `contact.id` gets the contact id of the friend(wechaty contacts). This function is depending on the Puppet Implementation, see [puppet-compatible-table](https://wechaty.js.org/docs/specs/puppet/)

* `contact.name` gets the name from a contact from the list.

* `contact.type` return the type of the Contact from the list.

## Search in contacts

Helps you find your contact from the list of contact.

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
  // find by id:
  const filehelper = await bot.Contact.find('filehelper')
  console.info('filehelper:', filehelper)

  // find by name:
  const nameContainsJList = await bot.Contact.findAll({ name: /j/i })
  console.info('Total number of contacts:', nameContainsJList.length)

  for (const contact of nameContainsJList) {
    console.info('contact:', contact)
  }
}

bot.on('ready', onReady)
```

</TabItem>
<TabItem value="js">

```js
async function onReady () {
  // find by id:
  const filehelper = await bot.Contact.find('filehelper')
  console.info('filehelper:', filehelper)

  // find by name:
  const nameContainsJList = await bot.Contact.findAll({ name: /j/i })
  console.info('Total number of contacts:', nameContainsJList.length)

  for (const contact of nameContainsJList) {
    console.info('contact:', contact)
  }
}

bot.on('ready', onReady)
```

</TabItem>
<TabItem value="py">

```py
from typing import List, Optional
from wechaty import Wechaty, Contact
from wechaty_puppet.schemas.contact import ContactQueryFilter

class MyBot(Wechaty):
    async def on_ready(self, _):
        # find by id
        filehelper: Optional[Contact] = await self.Contact.find('filehelper')
        if filehelper:
            print(f'filehelper<{filehelper}>')
        
        # find by name
        contacts: List[Contact] = await self.Contact.find_all(ContactQueryFilter(name='your-friend-name'))
        print(f'total number of contacts: {len(contacts)}')

        for contact in contacts:
            print(contact)
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

### Explanation :

* `Contact.find` finds the contact by name or alias, if the result is more than one, it return the first one.

* `Contact.findAll` gets the contact list of the bot and include the contacts from bot's rooms.
