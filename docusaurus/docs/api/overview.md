---
title: API
sidebar_label: 'Overview'
---

## Intro

Wechaty is a Node.js library for building chatbots that work on WeChat, WhatsApp, and other messaging platforms. With Wechaty, you can build intelligent chatbots that automate tasks, engage with customers, and provide a personalized experience for your users.

With the help of wechaty, you can build chatbots with 6 lines of code.

```ts
import { WechatyBuilder } from 'wechaty'

async function main () {
  const bot = new WechatyBuilder.build()
  bot
    .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))
    .on('login',            user => console.log(`User ${user} logged in`))
    .on('message',       message => console.log(`Message: ${message}`))
  await bot.start()
}
```

### How to install

In most cases, you should install ```wechaty``` only. The package ```wechaty``` has ```wechaty-puppet```, ```wechaty-puppet-service``` in its dependencies, so you don't have install them by yourself. So all you have to is

```bash
npm install wechaty
```

If you wish to use a particular version of ```wechaty-puppet``` or ```wechaty-puppet-service```, you can install such package manully.

### Code example mock data

Bot info:

```ts
{
  name: 'bot',
  id: 'contactId-0',
}
```

Contact info:

```ts
{
  // n = 1 to 100
  name: `contact-${n}`,
  id: `contactId-${n}`,
  alias: `alias-${n}`,
  description: `description-${n}`,
  isFriend: n % 2 === 0,
  tags: [n % 10, Math.floor(n / 10)],
  type: Contact.Individual,
  gender: n % 2 == 0 ? ContactGender.Male : ContactGender.Female,
  avatar: FileBox.fromUrl(`https://www.cdn.com/image-${n}`),
  handle: `handle-${n}`,
}
```

A contact instance with name contact-n will be stringified as ```Contact<contact-n>```.

Room Info:

```ts
{
  // n = 1 to 100
  topic: `room-${n}`,
  id: `roomId-${n}`,
  memberList: [contact(1-n)]
}
```

### Changelog

- v1.20.2 new doc online
