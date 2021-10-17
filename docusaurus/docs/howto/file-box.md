---
title: 'Processing files'
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

## Sending File

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
import { FileBox } from 'wechaty'

const fileBox = FileBox.fromUrl('https://wechaty.js.org/img/icon.png')
await bot.say(fileBox)
```

</TabItem>
<TabItem value="js">

```js
import { FileBox }  from 'wechaty'

const fileBox = FileBox.fromUrl('https://wechaty.js.org/img/icon.png')
await bot.say(fileBox)
```

</TabItem>
<TabItem value="py">

```py
from wechaty import FileBox

fileBox = FileBox.from_url('https://wechaty.js.org/img/icon.png')
await bot.say(fileBox)
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

## Receiving File

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

async function onMessage (message: Message) {
  const fileTypeList = [
    Message.Type.Attachment,
    Message.Type.Audio,
    Message.Type.Image,
    Message.Type.Video,
  ]
  if (fileTypeList.includes(message.type())) {
    const fileBox = await message.toFileBox()
    console.info(`Saving file {$fileBox.name}...`)
    await fileBox.toFile()
  }
}

bot.on('message', onMessage)
```

</TabItem>
<TabItem value="js">

```js
import { Message }  from 'wechaty'

async function onMessage (message) {
  const fileTypeList = [
    Message.Type.Attachment,
    Message.Type.Audio,
    Message.Type.Image,
    Message.Type.Video,
  ]
  if (fileTypeList.includes(message.type())) {
    const fileBox = await message.toFileBox()
    console.info(`Saving file {$fileBox.name}...`)
    await fileBox.toFile()
  }
}

bot.on('message', onMessage)
```

</TabItem>
<TabItem value="py">

```py
from wechaty_puppet import FileBox
from wechaty import Wechaty, Contact, Message

class MyBot(Wechaty):
    async def on_message(self, msg: Message):
        if msg.type() == MessageType.MESSAGE_TYPE_IMAGE:
            image_file_box = await msg.to_file_box()
            print(f'saving file<{image_file_box.name}>')
            await image_file_box.to_file('/path/to/local/file')
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

## About `FileBox`

Learn more about how to use `FileBox` module by reading its document at <https://github.com/huan/file-box>
