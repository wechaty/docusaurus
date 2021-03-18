---
title: Getting Started
---

<!-- MDX import -->
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
import ShortestChatbot from './polyglot/shortest-chatbot.mdx'

<!-- Pushes a curious reader through the first few minutes of use. -->

With just a few lines of code, your application can send and receive messages with WeChat/Whatsapp/Gitter powered by our Conversational RPA SDK Wechaty.

This Quickstart will teach you how to do this using the Wechaty SDK for WeChat, Whatsapp in TypeScript.

:::note Polyglot Wechaty

You can find othere languages as well in [Polyglot Wechaty](polyglot/README.md)

:::

<ShortestChatbot />

## TL;DR

If you want to try Wechaty quick and easy, the best way is to run [Wechaty Getting Started](https://github.com/wechaty/wechaty-getting-started) in your browser.

You have two choices:

1. Gitpod: login by GitHub. The easist way to getting started.
1. Google Cloud Shell: login by Google account. With a great step by step online tutorial.

### 1. Gitpod ❤️  Wechaty

[![GitPod Ready-to-Code][gitpod_img]][gitpod_link]

[gitpod_img]: https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod
[gitpod_link]: https://gitpod.io/#https://github.com/wechaty/wechaty-getting-started

Learn more from our blog: [Getting Started Without Leave Your Browser: Wechaty ❤️ Gitpod](https://wechaty.js.org/2021/02/06/wechaty-getting-started-without-leave-your-browser/)

### 2. Google Cloud Shell

[![Open in Cloud Shell][shell_img]][shell_link]

[shell_img]: https://gstatic.com/cloudssh/images/open-btn.svg
[shell_link]: https://ssh.cloud.google.com/cloudshell/editor?cloudshell_git_repo=https%3A%2F%2Fgithub.com%2Fwechaty%2Fwechaty-getting-started&cloudshell_open_in_editor=examples/ding-dong-bot.ts&cloudshell_workspace=.&cloudshell_tutorial=examples/tutorials/google-cloud-shell-tutorial.md

Learn more from our blog: [Google Cloud Shell Tutorials for Wechaty](https://wechaty.js.org/2021/02/20/google-cloud-shell-tutorials/)

## World's shortest chatbot code

6 lines of JavaScript/TypeScript as well as other languages:

<ShortestChatbot />

## Getting Started

In this Quickstart, you will learn how to:

1. Install Node.js
1. Install Wechaty
1. Start running your first chatbot

## REQUIREMENTS

1. Node.js v10 or above
1. Build Tools for your Platform

## RUN

### 0. Install Node.js \(&gt;=10\)

If you have not installed Node.js\(or version is below 12\),You need to install the latest version of Node.js first by following the links below:

<Tabs
  groupId="operating-systems"
  defaultValue="linux"
  values={[
    { label: 'Linux',   value: 'linux', },
    { label: 'macOS',   value: 'mac', },
    { label: 'Windows', value: 'windows', },
  ]
}>

<TabItem value="linux">

```sh
apt-get install make
```

</TabItem>
<TabItem value="mac">

```sh
brew install make
```

</TabItem>
<TabItem value="windows">

```sh
choco install make
```

</TabItem>
</Tabs>

:::note Node.js installation docs

* [Windows](https://nodejs.org/en/download/package-manager/#windows)
* [Linux\(Debian/Ubuntu\)](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)
* [macOS](https://nodejs.org/en/download/package-manager/#macos)

> Instal Node.js for other platforms can be found at [https://nodejs.org/en/download/package-manager/](https://nodejs.org/en/download/package-manager/)

:::

### Instal Build Tools

<Tabs
  groupId="operating-systems"
  defaultValue="linux"
  values={[
    { label: 'Linux',   value: 'linux', },
    { label: 'macOS',   value: 'mac', },
    { label: 'Windows', value: 'windows', },
  ]
}>

<TabItem value="linux">

```sh
sudo apt install build-essential
```

</TabItem>
<TabItem value="mac">

```sh
brew install make
```

</TabItem>
<TabItem value="windows">

```sh
choco install make
```

</TabItem>
</Tabs>

### 1. Clone wechaty-getting-started Repository

```bash
git clone https://github.com/wechaty/wechaty-getting-started
cd wechaty-getting-started
```

### 2. Install Dependencies

```bash
# npm install
make install
```

### 3. Run the Bot

> **Notice: Wechaty requires Node.js version &gt;= 10**

```sh
# npm start
#   Or use node to run bot directly
#     node examples/starter-bot.js
make bot
```

You are all set!

You can see the following result after running:

![demo](/img/docs/getting-started-qrcode.png)

This demo will show all message on the bot.

## Showcase

![Wechaty Developers' Home](/img/friday-qrcode.svg)

Scan the following QR Code in WeChat with secret code _wechaty_, join our **Wechaty Developers' Home**. This group is only for developers.

:::note Friday BOT

Learn more about our open-sourced Friday BOT from our [showcases](showcases/friday.md)

:::

## Contact us

You can [join our Gitter](https://gitter.im/wechaty/wechaty) network if you aren’t already a member.
