---
title: Welcome to Wechaty!
author: huan
categories: announcement
tags:
  - code
  - news
---
![Wechaty Logo][wechaty-logo-image]

Hello, ChatBot Developers!

Today is a big day because [Wechaty][wechaty-gh] got a brand new Blog! ;-)

In the past half year, Wechaty growth from version 0.0.1 to 0.6.32. Today, it has dozens of pull requests, 100+ issues, 200+ stars, 1,400+ commits and 10,000+ lines of code.

## The Worlds Smallest ChatBot

Wechaty is a easy to use **ChatBot Framework** which can help you write **the worlds smallest chatbot**. Maybe you are very interesting in ChatBot industory, or you just want to get your own wechat personal account robot, Wechaty will always be your friend.

The following 6 lines javascript code example will show you how does Wechaty work:

```javascript
import { Wechaty }  from 'wechaty'

Wechaty.instance() // Singleton
.on('scan', (url, code) => console.log(`Scan QR Code to login: ${code}\n${url}`))
.on('login',       user => console.log(`User ${user} logined`))
.on('message',  message => console.log(`Message: ${message}`))
.init()
```

How to run this piece of code? Easy. Wechaty has a docker image which can help you put your bot on duty in seconds:

```shell
docker run -ti --rm --volume="$(pwd)":/bot zixia/wechaty mybot.js
```

> `mybot.js` contains our source code in the above example.

See? death easy to use!

## Last but not least

* Check out the [Chatie IO][chatie-io] for more info on how to get the most out of Wechaty.
* File all bugs/feature requests at [Wechaty’s GitHub repo][wechaty-gh].
* If you have questions, you can ask other developers in _Wechaty Developers' Home_ by scan belowing Qr Code and send the secret code: `wechaty`.

![Wechaty Developers' Home][wechaty-qrcode-image]

_secret code: `wechaty`_

Visit Wechaty Github: <https://github.com/wechaty/wechaty/>

Cheers!

Best,

Huan, a ChatBot & Deep Learning Fan

[wechaty-gh]: https://github.com/wechaty/wechaty/
[chatie-io]: https://www.chatie.io
[wechaty-qrcode-image]: https://wechaty.js.org/img/friday-qrcode.svg
[wechaty-logo-image]: https://wechaty.js.org/img/wechaty-logo.svg
