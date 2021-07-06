---
title: 'Send and receive files'
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

Use the guide to help you integrate additional functions to an existing project which is present at [Github/Media Bot](https://github.com/wechaty/wechaty-getting-started/blob/master/examples/advanced/media-file-bot.js) or check that your existing local system will run on Wechaty. If, you wish to learn on how to build the bot on your own, please visit one of our [Building the bot](https://wechaty.js.org/docs/examples/advanced/media-file-bot) section.

The steps outlined here mainly focus on working with Javascript, but user are free to switch between any languages. All wechaty contacts are encapsulated as a Contact.

## Prerequisites

* Your system must have [Node.js](https://nodejs.org/en/download/package-manager/) installed (version >= 12).
* Your system must have [Wechaty](https://github.com/wechaty/wechaty) (version >= 0.40).
* You need to be familiar with the basics of Wechaty platform. If not, follow our [tutorials](https://wechaty.js.org/docs/tutorials/) section.
* You need to have at least a minimal application ready to work, follow one of our [Example/Media file bot](https://wechaty.js.org/docs/examples/advanced/media-file-bot).
* You need to have some basic knowledge of [FileBox](https://github.com/huan/file-box) module.

### If you don't know where to start from

See [Running our first ding-dong bot](https://wechaty.js.org/docs/getting-started/quick-start).

## Send File - defines how to send files

This section helps you send files like Attachment, Audio, Image, Video to the desired user. Here, `FileBox.fromUrl` helps you send URL as a attachment to the user.

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

async function onMessage (message) {
  const fileBox = FileBox.fromUrl('https://wechaty.js.org/img/icon.png')
  await bot.say(fileBox)
}

bot.on('message', onMessage)
```

</TabItem>
<TabItem value="js">

```js
const { FileBox } = require('wechaty')

async function onMessage (message) {
  const fileBox = FileBox.fromUrl('https://wechaty.js.org/img/icon.png')
  await bot.say(fileBox)
}

bot.on('message', onMessage)
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

## Receive File - defines how to receive files

This section helps you receive files like Attachment, Audio, Image, Video. Here, `message.toFileBox` helps you save all the files to a specified location.

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
const { Message } = require('wechaty')

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
