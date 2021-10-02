---
title: "Wechaty-Puppet-Whatsapp Has been Published"
author: univerone
categories: announcement
tags:
  - news
  - release
  - puppet-provider
  - whatsapp
image: /assets/2021/02-publishment-of-wechaty-whatsapp-puppet/logo.webp
---

With the introduction of wechaty puppet and the growth of the wechaty ecosystem and community, we're happy to introduce `wechaty-puppet-whatsapp` which connects Wechaty API, the conversational RPA SDK for chatbot makers, and WhatsApp, a free, multi-platform messaging app.

As a developer, you can use `wechaty-puppet-whatsapp` to build your own WhatsApp chatbot with a few lines of code, which can send and receive WhatsApp messages with wechaty API.

- GitHub repo: <https://github.com/wechaty/wechaty-puppet-whatsapp>
- npm package: <https://npmjs.com/package/wechaty-puppet-whatsapp>

## Getting started

First, you should install the package.

```bash
npm i wechaty-puppet-whatsapp
npm i wechaty
```

To enable the display of QR code in the terminal, `qrcode-terminal` should also be installed.

```bash
npm i qrcode-terminal
```

Then, you can implement your bot in a few lines of code, here is an basic demo:

```javascript
import { Wechaty, log}  from 'wechaty';
import qrterminal  from 'qrcode-terminal';
import { PuppetWhatsapp}  from 'wechaty-puppet-whatsapp';

const puppet  = new PuppetWhatsapp()
const bot = new Wechaty({ puppet })

bot
  .on('scan', qrcode => qrterminal.generate(qrcode, { small: true }))
  .on('login', user => log.info(`User ${user} logged in`))
  .on('message', message => log.info(`Message: ${message}`))

bot.start()
  .then(() => log.info('StarterBot', 'Starter Bot Started.'))
  .catch(e => log.error('StarterBot', e))
```

After scanning a WhatsApp QR code and logging in, you can view the received messages in the terminal, feel free to implement your own function over the messages based on your need.

![basic demo](/assets/2021/02-publishment-of-wechaty-whatsapp-puppet/wechaty-puppet-whatsapp-demo.webp)

## Next Steps

As always, feel free to file an issue on the [github repo](https://github.com/wechaty/wechaty-puppet-whatsapp/issues) for any feedback.

`wechaty-puppet-whatsapp` is an open-source project. If you’re interested in contributing to this project, check out the contribution guidelines to learn more, and welcome to join the [Wechaty Developers' Home](https://github.com/wechaty/wechaty#raising_hand-join-us) or our Gitter network <https://gitter.im/wechaty/wechaty> to join our community.

Here are some features to be implemented:

| Feature  | Status |
| ------------- | ------------- |
| Send and Receive text messages  | ✅ |
| Send media (images/audio/documents)  | ❌  |
| Send video  | ❌ |
| Receive Video | ❌ |
| Receive media (images/audio/video/documents)  | ❌  |
| Send contact cards | ❌ |
| Get invite for group  | ❌ |
| Modify group subject  | ❌  |
| Add group participants  | ❌  |
| Kick group participants  | ❌  |
| Mention users | ❌ |
| Get contact info | ❌ |
| Get profile pictures | ❌ |
| Set user status message | ❌ |

## Thanks

Wechaty Puppet Whatsapp is built on top of [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js), which is A WhatsApp client library for NodeJS that connects through the WhatsApp Web browser app, created by Pedro S. Lopez, [@pedroslopez](https://github.com/pedroslopez).

## Learn more

Other than WhatsApp, wechaty ecosystem also supports different instant messaging (IM) systems(such as TikTok, Dingding), you can refer to the following links for more details:

- [Wechat Offical Account](https://github.com/wechaty/wechaty-puppet-official-account)
- [TikTok](https://wechaty.js.org/2020/10/13/wechaty-puppet-douyin-final-term/)
- [Lark](https://wechaty.js.org/2020/09/30/wechaty-puppet-lark-final-blog/)
- [Kuaishou](https://wechaty.js.org/2020/10/13/wechaty-puppet-kuaishou-final-term/)
- [Gitter](https://github.com/wechaty/wechaty-puppet-gitter)
- [WxWork](https://github.com/juzibot/wxwork-tester)
