---
title: Getting Started
---

<!-- Pushes a curious reader through the first few minutes of use. -->

With just a few lines of code, your application can send and receive messages with WeChat using the Wechaty Puppets for WeChat.

## Getting Started

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

## World's shortest chatbot code

6 lines of JavaScript/TypeScript:

```ts
import { Wechaty } from 'wechaty'

Wechaty.instance()
  .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))
  .on('login',            user => console.log(`User ${user} logged in`))
  .on('message',       message => console.log(`Message: ${message}`))
  bot.start()
```

## Local Install

This Quickstart will teach you how to do this using the Wechaty SDK for WeChat, wechaty-puppet-mock, TypeScript.
In this Quickstart, you will learn how to:

1. Install Node.js
1. Install Wechaty
1. Start running your first chatbot

### Requirements

1. Node.js v12 or above
2. Build Tools for your Platform

### 0. Install Node.js \(&gt;=10\)

If you have not installed Node.js\(or version is below 10\),You need to install the latest version of Node.js first by following the links below:

* [Windows](https://nodejs.org/en/download/package-manager/#windows)
* [Linux\(Debian/Ubuntu\)](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)
* [macOS](https://nodejs.org/en/download/package-manager/#macos)

> Instal Node.js for other platforms can be found at [https://nodejs.org/en/download/package-manager/](https://nodejs.org/en/download/package-manager/)

### 1. Clone wechaty-getting-started Repository

```bash
git clone https://github.com/wechaty/wechaty-getting-started
cd wechaty-getting-started
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Bot

> **Notice: Wechaty requires Node.js version &gt;= 10**

```text
npm start
# or make bot
```

You are all set!

You can see the following result after running:

![demo](/img/docs/getting-started-qrcode.png)

This demo will show all message on the bot.

## Demo

![Wechaty Developers' Home](/img/friday-qrcode.svg)

Scan the following QR Code in WeChat with secret code _wechaty_, join our **Wechaty Developers' Home**. This group is only for developers.
