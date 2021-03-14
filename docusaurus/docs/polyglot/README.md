---
slug: /polyglot/
title: 'Polyglot Wechaty'
sidebar_label: 'Polyglot: Index'
---

[![TypeScript Wechaty](https://img.shields.io/badge/Wechaty-TypeScript-blue)](typescript)
[![Python Wechaty](https://img.shields.io/badge/Wechaty-Python-blue)](python)
[![Go Wechaty](https://img.shields.io/badge/Wechaty-Go-7de)](go)
[![Kotlin(Java) Wechaty](https://img.shields.io/badge/Wechaty-Kotlin-orange)](java)
[![Scala Wechaty](https://img.shields.io/badge/Wechaty-Scala-890)](scala)
[![PHP Wechaty](https://img.shields.io/badge/Wechaty-PHP-7de)](php)
[![.NET Wechaty](https://img.shields.io/badge/Wechaty-.NET-blueviolet)](dotnet)
[![Rust Wechaty](https://img.shields.io/badge/Wechaty-Rust-f42)](rust)
[![DIY Wechaty](https://img.shields.io/badge/Wechaty-DIY-brightgreen)](diy)

| Language | Git Repo | Creator | Getting Started |
| --- | --- | --- | --- |
| [TypeScript](typescript) | [wechaty](https://github.com/wechaty/wechaty) | [@huan](https://wechaty.js.org/contributors/huan) [@lijiarui](https://wechaty.js.org/contributors/lijiarui) | [wechaty-getting-started](https://github.com/wechaty/wechaty-getting-started) |
| [Python](python) | [python-wechaty](https://github.com/wechaty/python-wechaty) | [@wj-Mcat](https://wechaty.js.org/contributors/wj-Mcat) | [python-wechaty-getting-started](https://github.com/wechaty/python-wechaty-getting-started) |
| [Go](go) | [go-wechaty](https://github.com/wechaty/go-wechaty) | [@dingdayu](https://wechaty.js.org/contributors/dingdayu) [@dchaofei](https://wechaty.js.org/contributors/dchaofei) | [go-wechaty-getting-started](https://github.com/wechaty/go-wechaty-getting-started) |
| [Java](java) | [java-wechaty](https://github.com/wechaty/java-wechaty) | [@diaozxin007](https://wechaty.js.org/contributors/diaozxin007) | [java-wechaty-getting-started](https://github.com/wechaty/java-wechaty-getting-started) |
| [Scala](scala) | [scala-wechaty](https://github.com/wechaty/scala-wechaty) | [@jcai](https://wechaty.js.org/contributors/jcai) | [scala-wechaty-getting-started](https://github.com/wechaty/scala-wechaty-getting-started) |
| [PHP](php) | [php-wechaty](https://github.com/wechaty/php-wechaty) | [@zhangchunsheng](https://github.com/zhangchunsheng) | [php-wechaty-getting-started](https://github.com/wechaty/php-wechaty-getting-started) |
| [.NET](dotnet) | [dotnet-wechaty](https://github.com/wechaty/dotnet-wechaty) | [@echofool](https://github.com/echofool) [@jesn](https://wechaty.js.org/contributors/jesn) | [dotnet-wechaty-getting-started](https://github.com/wechaty/dotnet-wechaty-getting-started) |
| [Rust](rust) | [rust-wechaty](https://github.com/wechaty/rust-wechaty) | [@lucifer1004](https://github.com/lucifer1004) | [rust-wechaty-getting-started](https://github.com/wechaty/rust-wechaty-getting-started) |

:::tip

We have the world's shortest lines code of chatbot in all programming languages!

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
  ]}
>

<TabItem value="ts">

```ts
import { Wechaty } from 'wechaty'

async function main () {
  conswt bot = new Wechaty()
  bot
    .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))
    .on('login',            user => console.log(`User ${user} logged in`))
    .on('message',       message => console.log(`Message: ${message}`))
  await bot.start()
}

main()
  .catch(console.error)
```

</TabItem>
<TabItem value="js">

```ts
const { Wechaty } = require('wechaty')

async function main () {
  conswt bot = new Wechaty()
  bot
    .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))
    .on('login',            user => console.log(`User ${user} logged in`))
    .on('message',       message => console.log(`Message: ${message}`))
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
    bot.on('scan', lambda status, qrcode, data: print('Scan QR Code to login: {}\nhttps://wechaty.js.org/qrcode/{}'.format(status, qrcode)))
    bot.on('login', lambda user: print('User {} logged in'.format(user)))
    bot.on('message', lambda message: print('Message: {}'.format(message)))
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
  _ = wechaty.NewWechaty().
    OnScan(func(qrCode, status string) {
      fmt.Printf("Scan QR Code to login: %s\nhttps://wechaty.js.org/qrcode/%s\n", status, qrCode)
    }).
    OnLogin(func(user string) { fmt.Printf("User %s logged in\n", user) }).
    OnMessage(func(message string) { fmt.Printf("Message: %s\n", message) }).
    Start()
}
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
<TabItem value="php">

```php
$wechaty = \IO\Github\Wechaty\Wechaty::getInstance($token, $endPoint);
$wechaty->onScan(function($qrcode, $status, $data) {
    $qr = \IO\Github\Wechaty\Util\QrcodeUtils::getQr($qrcode);
    echo "$qr\n\nOnline Image: https://wechaty.js.org/qrcode/$qrcode\n";
})->onLogin(function(\IO\Github\Wechaty\User\ContactSelf $user) {
})->onMessage(function(\IO\Github\Wechaty\User\Message $message) {
    $message->say("hello from PHP7.4");
})->start();
```

</TabItem>
<TabItem value="scala">

```scala
package wechaty

object DingDongBot {
  def main(args: Array[String]): Unit = {
    Wechaty.instance()
      .onScan(payload     => { println("Scan QR Code to login: %s\nhttps://wechaty.js.org/qrcode/%s\n".format(payload.status, payload.qrcode)) })
      .onLogin(payload    => { println("User %s logged in\n".format(payload.id)) })
      .onMessage(message  => { println(message) })
      .start()
    Thread.currentThread().join()
  }
}
```

</TabItem>
<TabItem value="csharp">

```csharp
var wechaty = new Wechaty(options, logger).onScan((qrcode, status) => {
  Console.WriteLine($"Scan QR Code to login: {status} https://wechaty.js.org/qrcode/{(qrcode)}`");
}).OnLogin( user => {
  Console.WriteLine("User {user} logined");
}).OnMessage( message => {
  Console.WriteLine($"Message: {message}");
}).Start();
```

</TabItem>
<TabItem value="rust">

```rust
let bot = Wechaty::new(PuppetService::new(options).await.unwrap());

bot.on_scan(handle_scan)
    .on_login(handle_login)
    .on_logout(handle_logout)
    .on_message(handle_message)
    .start()
    .await;
```

</TabItem>

</Tabs>

:::tip

Wechaty in all programming languages have the same API, as the TypeScript documented version.

:::

## Blogs

- [Multi Language Wechaty Beta Release Announcement!](https://wechaty.js.org/2020/06/19/multi-language-wechaty-beta-release/)

## Docs (Issues)

- [Wechaty is All You Need: Python, Go, and Java Translation Project wechaty/wechaty#1927](https://github.com/wechaty/wechaty/discussions/1927)
- [Python the Wechaty Way wechaty/python-wechaty#13](https://github.com/wechaty/python-wechaty/issues/13)
- [Go Wechaty project initialized! wechaty/go-wechaty#1](https://github.com/wechaty/go-wechaty/issues/1)]
