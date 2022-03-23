---
title: How to install Wechaty
sidebar_label: Install Wechaty
---

We have a Wechaty [starter repository](https://github.com/wechaty/wechaty-getting-started) for beginners with the simplest setting. It will be **just work** out-of-the-box after you `clone`, run `npm install` in the terminal, followed by `npm start`.

## Requirements

1. Node.js v16
1. `sudo apt-get install build-essential && sudo snap install shellcheck`

## The World's Shortest ChatBot Code: 6 lines of JavaScript

```javascript

import { Wechaty }  from 'wechaty' // import { Wechaty } from 'wechaty'

Wechaty.instance() // Global Instance
.on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))
.on('login',            user => console.log(`User ${user} logged in`))
.on('message',       message => console.log(`Message: ${message}`))
.start()
```

Please save the above _The World's Shortest ChatBot Code: 6 lines of JavaScript_ example to a file named `bot.js` before you can use either NPM or Docker to run it.

### 1. Npm

[![NPM Version](https://img.shields.io/npm/v/wechaty?color=brightgreen&label=wechaty%40latest)](https://www.npmjs.com/package/wechaty)
[![npm (tag)](https://img.shields.io/npm/v/wechaty/next?color=yellow&label=wechaty%40next)](https://www.npmjs.com/package/wechaty?activeTab=versions)

[![Downloads](https://img.shields.io/npm/dm/wechaty.svg?style=flat-square)](https://www.npmjs.com/package/wechaty)
[![install size](https://packagephobia.now.sh/badge?p=wechaty)](https://packagephobia.now.sh/result?p=wechaty)

```shell
npm init
npm install wechaty

# create your first bot.js file, you can copy/paste from the above "The World's Shortest ChatBot Code: 6 lines of JavaScript"
# then:
node bot.js
```

### 2. Docker

[![Docker Pulls](https://img.shields.io/docker/pulls/wechaty/wechaty.svg?maxAge=2592000)](https://hub.docker.com/r/wechaty/wechaty/)
[![Docker Layers](https://images.microbadger.com/badges/image/wechaty/wechaty.svg)](https://microbadger.com/#/images/wechaty/wechaty)

- Wechaty Starter Repository for Docker - <https://github.com/wechaty/docker-wechaty-getting-started>

> Wechaty Docker supports both JavaScript and TypeScript. To use TypeScript just write in TypeScript and save with extension name `.ts`, no need to compile because we use `ts-node` to run it.

2.1. Run JavaScript

```shell
# for JavaScript
docker run -ti --rm --volume="$(pwd)":/bot wechaty/wechaty bot.js
```

2.2. Run TypeScript

```shell
# for TypeScript
docker run -ti --rm --volume="$(pwd)":/bot wechaty/wechaty bot.ts
```

> Learn more about Wechaty Docker at [Wiki:Docker](https://github.com/Wechaty/wechaty/wiki/Docker).

## TEST

[![NPM](https://github.com/wechaty/wechaty/workflows/NPM/badge.svg)](https://github.com/wechaty/wechaty/actions?query=workflow%3ANPM)
[![Docker](https://github.com/wechaty/wechaty/workflows/Docker/badge.svg)](https://github.com/wechaty/wechaty/actions?query=workflow%3ADocker)
[![Coverage Status](https://coveralls.io/repos/github/Wechaty/wechaty/badge.svg?branch=master)](https://coveralls.io/github/Wechaty/wechaty?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/Wechaty/wechaty/badge.svg)](https://snyk.io/test/github/Wechaty/wechaty)

Wechaty is fully automatically tested by unit and integration tests, with Continious Integration & Continious Deliver(CI/CD) support powered by CI like Travis, Shippable and Appveyor.

To test Wechaty, run:

```shell
npm test
```

Get to know more about the tests from [Wiki:Tests](https://github.com/Wechaty/wechaty/wiki/Tests)

## POWERED BY WECHATY

[![Powered by Wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-brightgreen.svg)](https://wechaty.js.org)
