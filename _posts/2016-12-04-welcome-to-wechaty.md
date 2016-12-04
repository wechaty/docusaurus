---
layout: post
title:  "Welcome to Wechaty!"
date:   2016-12-04 14:04:27 +0800
categories: news
---

```typescript
import { Wechaty } from 'wechaty'

Wechaty.instance() // Singleton
.on('scan', (url, code) => console.log(`Scan QR Code to login: ${code}\n${url}`))
.on('login',       user => console.log(`User ${user} logined`))
.on('message',  message => console.log(`Message: ${message}`))
.init()
```

Check out the [Wechaty IO][wechaty-io] for more info on how to get the most out of Wechaty. File all bugs/feature requests at [Wechaty’s GitHub repo][wechaty-gh]. If you have questions, you can ask them on _Wechaty Developers' Home_ by scan belowing Qr Code and send the secret code: `wechaty`.

![Wechaty Developers' Home][wechaty-qrcode-image]

_secret code: `wechaty`_

[wechaty-gh]: https://github.com/wechaty/wechaty/
[wechaty-io]: https://www.wechaty.io/
[wechaty-qrcode-image]: https://raw.githubusercontent.com/wechaty/wechaty/master/image/BotQrcode.png
