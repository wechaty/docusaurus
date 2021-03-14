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


We already have Wechaty in TypeScript, It will be not too hard to translate the TypeScript(TS) to Python, Go, and Java languages because [wechaty](https://github.com/wechaty/wechaty) has only 3,000 lines of the TS code, they are well designed and de-coupled by the [wechaty-puppet](https://github.com/wechaty/wechaty-puppet/) abstraction. So after we have translated those 3,000 lines of TypeScript code, we will almost be done.

As we have already an ecosystem of Wechaty in TypeScript, so we will not have to implement everything in other languages, especially, in Feb 2020, we have finished the [@chatie/grpc](https://github.com/chatie/grpc) service abstracting module with the [wechaty-puppet-hostie](https://github.com/wechaty/wechaty-puppet-hostie) implementation.

### The Wechaty Way

#### Python Wechaty

- Announcement: [Issue #13](https://github.com/wechaty/python-wechaty/issues/13)
- Repo: <https://github.com/wechaty/python-wechaty> 

#### Go Wechaty

- Announcement: [Issue #1](https://github.com/wechaty/go-wechaty/issues/1)
- Repo: <https://github.com/wechaty/go-wechaty>

#### Java Wechaty

- Announcement: [Issue #1](https://github.com/wechaty/java-wechaty/issues/1)
- Repo: <https://github.com/wechaty/java-wechaty>

### Architecture

The following diagram shows out that we can reuse almost everything in TypeScript, and what we need to do is only the block located at the top right of the diagram: `Wechaty (Python)`.

```ascii
  +--------------------------+ +--------------------------+
  |                          | |                          |
  |   Wechaty (TypeScript)   | | Wechaty(Other Languages) |
  |                          | |  Python, Go, Java, etc.  |
  +--------------------------+ +--------------------------+

  +-------------------------------------------------------+
  |                 Wechaty Puppet Hostie                 |
  |                                                       |
  |                (wechaty-puppet-hostie)                |
  +-------------------------------------------------------+

+---------------------  @chatie/grpc  ----------------------+

  +-------------------------------------------------------+
  |                Wechaty Puppet Abstract                |
  |                                                       |
  |                   (wechaty-puppet)                    |
  +-------------------------------------------------------+

  +--------------------------+ +--------------------------+
  |      Pad Protocol        | |      Web Protocol        |
  |                          | |                          |
  | wechaty-puppet-padplus   | |(wechaty-puppet-puppeteer)|
  +--------------------------+ +--------------------------+
  +--------------------------+ +--------------------------+
  |    Windows Protocol      | |       Mac Protocol       |
  |                          | |                          |
  | (wechaty-puppet-windows) | | (wechaty-puppet-macpro)  |
  +--------------------------+ +--------------------------+
```

> Chart made by [AsciiFlow](http://asciiflow.com/)

## Example: How to Translate TypeScript to Python

There's a 100 lines class named `Image` in charge of downloading the WeChat image to different sizes.

It is a great example for demonstrating how do we translate the TypeScript to Python in Wechaty Way:

### Image Class Source Code

- TypeScript: <https://github.com/wechaty/wechaty/blob/master/src/user/image.ts>
- Python: <https://github.com/wechaty/python-wechaty/blob/master/src/wechaty/user/image.py>

If you are interested in the translation and want to look at how it works, it will be a good start from reading and comparing those two `Image` class files in TypeScript and Python at the same time.

## To-do List

- TS: TypeScript
- SLOC: Source Lines Of Code

### Wechaty Internal Modules

1. [ ] Class Wechaty @wj-mCat
    - TS SLOC(1160): <https://github.com/wechaty/wechaty/blob/master/src/wechaty.ts>
    - [ ] Code
    - [ ] Unit Tests
    - [ ] Documentation
1. [ ] Class Contact
    - TS SLOC(804): <https://github.com/wechaty/wechaty/blob/master/src/user/contact.ts>
    - [ ] Code
    - [ ] Unit Tests
    - [ ] Documentation
1. [ ] Class ContactSelf
    - TS SLOC(199): <https://github.com/wechaty/wechaty/blob/master/src/user/contact-self.ts>
    - [ ] Code
    - [ ] Unit Tests
    - [ ] Documentation
1. [ ] Class Message
    - TS SLOC(1054): <https://github.com/wechaty/wechaty/blob/master/src/user/message.ts>
    - [ ] Code
    - [ ] Unit Tests
    - [ ] Documentation
1. [ ] Class Room
    - TS SLOC(1194): <https://github.com/wechaty/wechaty/blob/master/src/user/room.ts>
    - [ ] Code
    - [ ] Unit Tests
    - [ ] Documentation
1. [ ] Class Image @wj-mCat
    - TS SLOC(60): <https://github.com/wechaty/wechaty/blob/master/src/user/image.ts>
    - [ ] Code
    - [ ] Unit Tests
    - [ ] Documentation
1. [x] Class Accessory @huan
    - TS SLOC(179): <https://github.com/wechaty/wechaty/blob/master/src/accessory.ts>
    - [x] Code
    - [x] Unit Tests
    - [ ] Documentation
1. [ ] Class Config @wj-mCat
    - TS SLOC(187): <https://github.com/wechaty/wechaty/blob/master/src/config.ts>
    - [ ] Code
    - [ ] Unit Tests
    - [ ] Documentation
1. [ ] Class Favorite
    - TS SLOC(52): <https://github.com/wechaty/wechaty/blob/master/src/user/favorite.ts>
    - [ ] Code
    - [ ] Unit Tests
    - [ ] Documentation
1. [ ] Class Friendship
    - TS SLOC(417): <https://github.com/wechaty/wechaty/blob/master/src/user/friendship.ts>
    - [ ] Code
    - [ ] Unit Tests
    - [ ] Documentation
1. [ ] Class MiniProgram
    - TS SLOC(70): <https://github.com/wechaty/wechaty/blob/master/src/user/mini-program.ts>
    - [ ] Code
    - [ ] Unit Tests
    - [ ] Documentation
1. [ ] Class RoomInvitation
    - TS SLOC(317): <https://github.com/wechaty/wechaty/blob/master/src/user/room-invitation.ts>
    - [ ] Code
    - [ ] Unit Tests
    - [ ] Documentation
1. [ ] Class Tag
    - TS SLOC(190): <https://github.com/wechaty/wechaty/blob/master/src/user/tag.ts>
    - [ ] Code
    - [ ] Unit Tests
    - [ ] Documentation
1. [ ] Class UrlLink
    - TS SLOC(107): <https://github.com/wechaty/wechaty/blob/master/src/user/url-link.ts>
    - [ ] Code
    - [ ] Unit Tests
    - [ ] Documentation

### Wechaty External Modules

1. [ ] Class FileBox
    - TS SLOC(638): <https://github.com/huan/file-box/blob/master/src/file-box.ts>
    - [ ] Code
    - [ ] Unit Tests
    - [ ] Documentation
1. [ ] Class MemoryCard
    - TS SLOC(376): <https://github.com/huan/memory-card/blob/master/src/memory-card.ts>
    - [ ] Code
    - [ ] Unit Tests
    - [ ] Documentation
1. [ ] Class WechatyPuppet
    - TS SLOC(1115): <https://github.com/wechaty/wechaty-puppet/blob/master/src/puppet.ts>
    - [ ] Code
    - [ ] Unit Tests
    - [ ] Documentation
1. [ ] Class WechatyPuppetHostie
    - TS SLOC(909): <https://github.com/wechaty/wechaty-puppet-hostie/blob/master/src/grpc/puppet-client.ts>
    - [ ] Code
    - [ ] Unit Tests
    - [ ] Documentation
