---
title: 'Puppet Service: Paimon'
sidebar_label: Paimon
---

[![Wechaty Puppet Service Paimon](https://img.shields.io/badge/Service-Paimon-blue)](paimon.md)

- Provider: [zpaimon](https://github.com/zpaimon)
- Support & Feedback: <https://github.com/wechaty/puppet-services/issues>
- Term of Service (ToS): To-be-added
- Privacy Policy: To-be-added
- Service Level Agreement (SLA): To-be-added

## Simple and Effective

- Paimon service is so simple.It don't need Token Gateway(Docker) and don't need the 3rd party library.
- Paimon的服务很简单，不需要token网关也不需要第三方的库，原生支持Wechaty。

package.json

```json
{
  "name": "wechaty-puppet-paimon",
  "version": "0.0.1",
  "description": "Demo for paimon",
  "author": "you",
  "license": "Apache-2.0",
  "dependencies": {
    "qrcode-terminal": "^0.12.0",
    "wechaty": "^0.68"
  }
}

```

bot.js

```js
const {
  log,
  ScanStatus,
  Wechaty
} = require('wechaty')

const bot = new Wechaty({
  name: 'ding-dong-bot',
  puppet: 'wechaty-puppet-service',
  puppetOptions: {
    tls: {
      disable: true
    },
    token: "puppet_paimon_928387cc-b904-4b22-bbfc-148d56ff2f72"
  }
})

bot.on('scan', onScan)
bot.on('login', onLogin)
bot.on('logout', onLogout)
bot.on('message', onMessage)

bot.start()
  .then(() => {
    log.info('StarterBot', 'Starter Bot Started.');
  })
  .catch(e => {
    log.error('StarterBot', e);
  })

function onScan(qrcode, status) {
  if (status === ScanStatus.Waiting && qrcode) {
    const qrcodeImageUrl = [
      'https://wechaty.js.org/qrcode/',
      encodeURIComponent(qrcode),
    ].join('')

    log.info('StarterBot', 'onScan: %s(%s) - %s', ScanStatus[status], status, qrcodeImageUrl)
  } else {
    log.info('StarterBot', 'onScan: %s(%s)', ScanStatus[status], status)
  }
}

function onLogin(user) {
  log.info('StarterBot', '%s login', user);
}

function onLogout(user) {
  log.info('StarterBot', '%s logout', user);
}

function onMessage(msg) {
  console.log(msg)
  if (msg.self()) return;
}

```

```bash
>> npm i
>> node bot.js
```

## Paimon supports multi languages

NO token gateway required.（不需要Token网关直接使用）

- [Python](https://wechaty.readthedocs.io/zh_CN/latest/introduction/use-paimon-protocol/)
- [GO](https://github.com/wechaty/go-wechaty-getting-started)

## How to buy

[Get a FREE trail token for 7 days.](http://120.55.60.194/)

## Contact

- Wechat: hutusheng-bot

## Blogs

Read blogs with the `paimon` tag at <https://wechaty.js.org/tags.html#paimon>
