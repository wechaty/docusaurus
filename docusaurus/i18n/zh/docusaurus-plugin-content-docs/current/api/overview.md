---
title: API
sidebar_label: 'Overview'
---

## Intro

Wechaty 是一个能让你可以轻松在微信、WhatsApp以及各种其他即时通讯平台创建 chatbot 的 Node.js 库。在 Wechaty 的帮助下，你可以利用 chatbot 自动执行任务、与客户交流、提供个性化的服务体验。

你甚至可以只用6行代码就创造出一个最简单的 chatbot。

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

### 如何安装

在大多数情况下，你只需要安装 ```wechaty``` 包即可。 ```wechaty``` 包含了对 ```wechaty-puppet``` 和 ```wechaty-puppet-service``` 的依赖，因此你不需要单独安装他们。

```bash
npm install wechaty
```

对于进阶的使用者，则可以指定版本安装相关依赖以实现特殊需求。

### 实例代码中的模拟数据规范。

Bot 自身的信息：

```ts
{
  name: 'bot',
  id: 'contactId-0',
}
```

联系人信息：

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

一个名字叫做 ```contact-n``` 的联系人实例，可以被转换为 ```Contact<contact-n>``` 的字符串。

群信息：

```ts
{
  // n = 1 to 100
  topic: `room-${n}`,
  id: `roomId-${n}`,
  memberList: [contact(1-n)]
}
```

### 版本历史

- v1.20.2 全新文档上线
