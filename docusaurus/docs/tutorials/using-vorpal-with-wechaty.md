---
title: 'Using Vorpal with Wechaty'
---

[![Wechaty Vorpal](https://img.shields.io/badge/Wechaty-Vorpal-brightgreen.svg)](https://github.com/wechaty/wechaty-vorpal)
[![NPM](https://github.com/wechaty/wechaty-vorpal/workflows/NPM/badge.svg)](https://github.com/wechaty/wechaty-vorpal/actions?query=workflow%3ANPM)
 [![NPM Version](https://img.shields.io/npm/v/wechaty-vorpal?color=brightgreen)](https://www.npmjs.com/package/wechaty-vorpal)

Extensible Interactive CLI Plugin for Wechaty ChatOps, Powered by Vorpal.

[![Wechaty Vorpal](https://wechaty.github.io/wechaty-vorpal/images/wechaty-vorpal.png)](https://github.com/wechaty/wechaty-vorpal)

> Image: [rainbow sword](http://pixelartmaker.com/art/3008b950f5ab168)

[![Powered by Wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-brightgreen.svg)](https://github.com/Wechaty/wechaty)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue.svg)](https://www.typescriptlang.org/)

## Try out the bot

[![Edit vorpal-wechaty-hackernews](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/sbis04/vorpal-wechaty-hackernews/tree/main/?fontsize=12&hidenavigation=1&module=%2Fvorpal-bot.ts&theme=dark)

You can try out the **Vorpal Hacker News** chat bot using this interactive CodeSandbox.

Just scan the generated QR code with **WeChat** app, and you are ready to play with the bot!

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/sbis04/vorpal-wechaty-hackernews/tree/main/?fontsize=12&hidenavigation=1&module=%2Fvorpal-bot.ts&theme=dark"
  title="vorpal-wechaty-hackernews"
  sandbox="allow-forms allow-modals allow-popups allow-same-origin allow-scripts"
></iframe>

## Requirements

1. [Node.js](https://nodejs.org/en/download) v12+
2. [Wechaty](https://github.com/wechaty/wechaty) v0.40+
3. [WechatyVorpal](https://github.com/wechaty/wechaty-vorpal) v0.2+

## Usage

```ts
import { Wechaty }        from 'wechaty'
import { WechatyVorpal }  from 'wechaty-vorpal'
const hackerNews = require('vorpal-hacker-news')

const wechaty = new Wechaty()

wechaty.use(
  WechatyVorpal({
    use: hackerNews,
  }),
)

wechaty.start()
```

See: [wechaty-vorpal-contrib](https://github.com/wechaty/wechaty-vorpal-contrib) for more Wechaty Vorpal Extension CLI for Chatbots.

## Getting started

In this tutorial you will learn how to use [Vorpal](https://github.com/wechaty/wechaty-vorpal) with [Wechaty](https://wechaty.js.org/) to build a [Hacker News](https://news.ycombinator.com/) chat bot.

Before getting started, make sure you have `Node.js` installed on your system. If you do not have `Node.js` installed (or have a version below 12), then you need to install the latest version of `Node.js` by following the links below:

:::note Node.js installation docs

* [Windows](https://nodejs.org/en/download/package-manager/#windows)
* [Linux\(Debian/Ubuntu\)](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)
* [macOS](https://nodejs.org/en/download/package-manager/#macos)

> Installation guide for `Node.js` on other platforms can be found [here](https://nodejs.org/en/download/package-manager/).

:::

### 1. Clone the repository

Use the following commands to clone the [GitHub repository](https://github.com/sbis04/vorpal-wechaty-hn) and navigate to the directory:

```bash
git clone https://github.com/sbis04/vorpal-wechaty-hn
cd vorpal-wechaty-hn
```

### 2. Install dependencies

You can install the `npm` packages required for running the bot, using this command:

```sh
npm install
```

### 3. Run the bot

First, you have to `export/set` the environment variables, and then you can run the bot:

#### Linux/macOS

```bash
export WECHATY_LOG=verbose
export WECHATY_PUPPET=wechaty-puppet-wechat
# If you want to use WhatsApp
# export WECHATY_PUPPET=wechaty-puppet-whatsapp
npm start
```

#### Windows

```bash
set WECHATY_LOG=verbose
set WECHATY_PUPPET=wechaty-puppet-wechat
# If you want to use WhatsApp
# set WECHATY_PUPPET=wechaty-puppet-whatsapp
npm start
```

> There are various **Wechaty puppets** available, you can know more about them [here](https://github.com/wechaty/wechaty-getting-started#working-with-different-puppets).

Now, the bot is ready. Scan the QR code using WeChat or WhatsApp (according to the puppet you have used), and you are ready to start playing with the bot.

## Bot demo

![Wechaty Vorpal Hacker News](https://wechaty.github.io/wechaty-vorpal/images/wechaty-vorpal-hacker-news.png)

Some of the commands that you can try out with the bot are as follows:

> help

```sh
Commands:

    help [command...]       Provides help for a given command.
    exit                    Exits application.
    hacker-news [options]   Lists the top stories on hacker news.
```

> help hacker-news

```sh
Usage: hacker-news [options]

  Lists the top stories on hacker news.

  Options:

    --help              output usage information
    -l, --length [amt]  Limits the list to a given length.
```

> hacker-news --length 3

```sh
Pulling top 3 stories on Hacker News:

  1. Discovering Dennis Ritchies Lost Dissertation (org)
     93 points by beefhash 3 hours ago | 23 comments

  2. Updating the Git protocol for SHA-256 (net)
     81 points by chmaynard 14 hours ago | 48 comments

  3. Mac OS X Leopard and Xcode on iPad Pro (com)
     134 points by tosh 10 hours ago | 28 comments
```
