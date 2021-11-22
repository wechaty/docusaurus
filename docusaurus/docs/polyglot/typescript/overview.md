---
slug: /polyglot/typescript/
title: 'TypeScript Wechaty'
sidebar_label: TypeScript
---

import NodeInstall from './transclusions/install.mdx'

[![TypeScript Wechaty](https://img.shields.io/badge/Wechaty-TypeScript-blue)](https://github.com/wechaty/wechaty)

:::tip

TypeScript is the language that Wechaty ecosystem built on.

:::

## Quick Started

Template Repo: <https://github.com/wechaty/wechaty-getting-started>

### 1. Gitpod ❤️  Wechaty

[![GitPod Ready-to-Code][gitpod_img]][gitpod_link]

[gitpod_img]: https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod
[gitpod_link]: https://gitpod.io/#https://github.com/wechaty/wechaty-getting-started

Use Gitpod to run our [Wechaty Getting Started ding-dong BOT](https://github.com/wechaty/wechaty-getting-started/blob/master/examples/ding-dong-bot.ts) instantly inside your browser!

Learn more from blog post: [Getting Started Without Leave Your Browser: Wechaty ❤️ Gitpod](https://wechaty.js.org/2021/02/06/wechaty-getting-started-without-leave-your-browser/)

### 2. Google Cloud Shell

[![Open in Cloud Shell][shell_img]][shell_link]

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.svg
[shell_link]: https://ssh.cloud.google.com/cloudshell/editor?cloudshell_git_repo=https%3A%2F%2Fgithub.com%2Fwechaty%2Fwechaty-getting-started&cloudshell_open_in_editor=examples/ding-dong-bot.ts&cloudshell_workspace=.&cloudshell_tutorial=examples/tutorials/google-cloud-shell-tutorial.md

The Google Cloud Shell should open our tutorial in the right panel for you to follow and finish the tutorials easily.

Learn more from blog post: [Google Cloud Shell Tutorials for Wechaty](https://wechaty.js.org/2021/02/20/google-cloud-shell-tutorials/)

## Getting Started

## Install

<NodeInstall />

## World's shortest chatbot code

6 lines of JavaScript/TypeScript:

```ts
import { WechatyBuilder } from 'wechaty'

WechatyBuilder.build()
  .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))
  .on('login',            user => console.log(`User ${user} logged in`))
  .on('message',       message => console.log(`Message: ${message}`))
  bot.start()
```

## Getting Started

Getting Started Template Repo <https://github.com/wechaty/wechaty-getting-started>

## Maintainers

- [@huan](https://wechaty.js.org/contributors/huan) Huan
- [@lijiarui](https://wechaty.js.org/contributors/lijiarui) Rui

## History

- [Welcome to Wechaty, Huan, Dec 3, 2016](https://wechaty.js.org/2016/12/03/welcome-to-wechaty/)
- [一个姑娘如何用6行代码写出微信聊天机器人, Rui, Dec, 2016](https://wechaty.js.org/2016/12/10/try-to-write-wexinrobot/)
- [Wechaty 101: from v0.0 to v0.7, Huan, Dec, 2016](https://wechaty.js.org/2017/01/06/wechaty-101-presentation/)
- [Getting Started with Wechaty - Live Coding Tutorial(outdated), Rui, Jan, 2017](https://wechaty.js.org/2017/01/01/getting-started-wechaty/)
- [Wechaty Contributor Dinner, Yang, Apr, 2017](https://wechaty.js.org/2017/04/21/wechaty-meeting-dinner/)

## Docs

- API Reference: <https://wechaty.github.io/wechaty/>
- [Wechaty How-to Guides](../../howto/overview.mdx)

## Badge

[![TypeScript Wechaty](https://img.shields.io/badge/Wechaty-TypeScript-blue)](https://github.com/wechaty/wechaty)

```md
[![TypeScript Wechaty](https://img.shields.io/badge/Wechaty-TypeScript-blue)](https://github.com/wechaty/wechaty)
```

## Contribute

You can [join our Gitter](https://gitter.im/wechaty/wechaty) network if you aren’t already a member, [read our Meeting Notes](https://bit.ly/2zpi2XG) to learn what we discussed in the past, join our meeting(you are welcome!), or star & fork [Wechaty GitHub repo](https://github.com/wechaty/wechaty) right now!

- Read & create an [issues](https://github.com/wechaty/wechaty/issues)
- Read & create a [pull requests](https://github.com/wechaty/wechaty/pulls)
- [Publish blog post](../../contributing/blog.md)
- etc.
