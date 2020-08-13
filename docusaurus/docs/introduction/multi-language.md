---
title: Multi-language Support
description: 'Wechaty supports almost all common programming languages for building your chatbot!'
---

:::tip

We have multi-language support!

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="js"
  values={[
    { label: 'TypeScript', value: 'ts', },
    { label: 'JS (ES5)', value: 'js', },
    { label: 'Python', value: 'py', },
    { label: 'Go', value: 'go', },
    { label: 'Java', value: 'java', },
    { label: 'PHP', value: 'php', },
    { label: 'Scala', value: 'scala', },
    { label: 'CSharp', value: 'csharp', },
  ]
}>

<TabItem value="js">

```js
const { Wechaty } = require('wechaty')

Wechaty.instance()
  .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\nhttps://wechaty.github.io/qrcode/${encodeURIComponent(qrcode)}`))
  .on('login',            user => console.log(`User ${user} logged in`))
  .on('message',       message => console.log(`Message: ${message}`))
  .start()
```

</TabItem>
<TabItem value="ts">

```ts
import { Wechaty } from 'wechaty'

Wechaty.instance()
  .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\nhttps://wechaty.github.io/qrcode/${encodeURIComponent(qrcode)}`))
  .on('login',            user => console.log(`User ${user} logged in`))
  .on('message',       message => console.log(`Message: ${message}`))
  .start()
```

</TabItem>
<TabItem value="py">

```py
from wechaty import Wechaty
import asyncio

async def main():
    bot = Wechaty()
    bot.on('scan', lambda status, qrcode, data: print('Scan QR Code to login: {}\nhttps://wechaty.github.io/qrcode/{}'.format(status, qrcode)))
    bot.on('login', lambda user: print('User {} logged in'.format(user)))
    bot.on('message', lambda message: print('Message: {}'.format(message)))
    await bot.start()

asyncio.run(main())
```

</TabItem>
<TabItem value="java">

```java
package io.github.wechaty;

class Bot{
  public static void main(String args[]){
    Wechaty bot = Wechaty.instance()
      .onScan((qrcode, statusScanStatus, data) -> System.out.println(QrcodeUtils.getQr(qrcode)))
      .onLogin(user -> System.out.println("User logged in :" + user))
      .onMessage(message -> System.out.println("Message:" + message))
      .start(true);
  }
}
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
  _ = wechaty.NewWechaty().
    OnScan(func(qrCode, status string) {
      fmt.Printf("Scan QR Code to login: %s\nhttps://wechaty.github.io/qrcode/%s\n", status, qrCode)
    }).
    OnLogin(func(user string) { fmt.Printf("User %s logged in\n", user) }).
    OnMessage(func(message string) { fmt.Printf("Message: %s\n", message) }).
    Start()
}
```

</TabItem>
<TabItem value="php">

```php
$wechaty = \IO\Github\Wechaty\Wechaty::getInstance($token, $endPoint);
$wechaty->onScan(function($qrcode, $status, $data) {
    $qr = \IO\Github\Wechaty\Util\QrcodeUtils::getQr($qrcode);
    echo "$qr\n\nOnline Image: https://wechaty.github.io/qrcode/$qrcode\n";
})->onLogin(function(\IO\Github\Wechaty\User\ContactSelf $user) {
})->onMessage(function(\IO\Github\Wechaty\User\Message $message) {
    $message->say("hello from PHP7.4");
})->start();
```

</TabItem>
<TabItem value="csharp">

```csharp
var wechaty = new Wechaty(options, logger).onScan((qrcode, status) => {
  Console.WriteLine($"Scan QR Code to login: {status} https://wechaty.github.io/qrcode/{(qrcode)}`");
}).OnLogin( user => {
  Console.WriteLine("User {user} logined");
}).OnMessage( message => {
  Console.WriteLine($"Message: {message}");
}).Start();
```

</TabItem>
<TabItem value="scala">

```scala
package wechaty

object DingDongBot {
  def main(args: Array[String]): Unit = {
    Wechaty.instance()
      .onScan(payload     => { println("Scan QR Code to login: %s\nhttps://wechaty.github.io/qrcode/%s\n".format(payload.status, payload.qrcode)) })
      .onLogin(payload    => { println("User %s logged in\n".format(payload.id)) })
      .onMessage(message  => { println(message) })
      .start()
    Thread.currentThread().join()
  }
}
```

</TabItem>
</Tabs>
