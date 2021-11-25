---
title: 'Create a bot'
---

:::tip

We have the world's shortest lines code of chatbot in all programming languages!

:::

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

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
import { WechatyBuilder } from 'wechaty'

async function main () {
  const bot = WechatyBuilder.build()
  // TODO: init your bot at here...
  // bot.on('scan', console.info)
  await bot.start()
}

main()
  .catch(console.error)
```

</TabItem>
<TabItem value="js">

```js
import { Wechaty }  from 'wechaty'

async function main () {
  const bot = WechatyBuilder.build()
  // TODO: init your bot at here...
  // bot.on('scan', console.info)
  await bot.start()
}

main()
  .catch(console.error)
```

</TabItem>
<TabItem value="py">

```py
from wechaty import Wechaty
import asyncio

async def main():
  bot = Wechaty()
  # TODO: init your bot at here
  await bot.start()

asyncio.run(main())
```

</TabItem>
<TabItem value="go">

```go
package main

import (
 "fmt"

  "github.com/wechaty/go-wechaty/wechaty"
)

func main() {
  bot = wechaty.NewWechaty()
  // TODO: init your bot at here...
  bot.Start()
}
```

</TabItem>
<TabItem value="java">

```java
package io.github.wechaty;

class Bot{
  public static void main(String args[]){
    Wechaty bot = WechatyBuilder.build()
    // TODO: init your bot at here...
    bot.start(true);
  }
}
```

</TabItem>
<TabItem value="php">

```php
$bot = \IO\Github\Wechaty\Wechaty::getInstance();
// TODO: init your bot at here...
$bot->start();
```

</TabItem>
<TabItem value="scala">

```scala
package wechaty

object DingDongBot {
  def main(args: Array[String]): Unit = {
    bot = WechatyBuilder.build()
    // TODO: init your bot at here
    bot.start()
    Thread.currentThread().join()
  }
}
```

</TabItem>
<TabItem value="csharp">

```csharp
var bot = WechatyBuilder.build()
// TODO: init your bot at here...
bot.Start();
```

</TabItem>
<TabItem value="rust">

```rust
use std::env;

use wechaty::prelude::*;
use wechaty_puppet_service::PuppetService;

let bot = Wechaty::new();
// TODO: init your bot at here...
bot
  .start()
  .await;
```

</TabItem>
</Tabs>
