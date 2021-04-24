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

## Requirements

1. [Node.js](https://nodejs.org/en/download) v12+
2. [Wechaty](https://github.com/wechaty/wechaty) v0.40+
3. [WechatyVorpal](https://github.com/wechaty/wechaty-vorpal) v0.2+

## Usage

```ts
import { Wechaty }        from 'wechaty'
import { WechatyVorpal }  from 'wechaty-vorpal'
import hackerNews         from 'vorpal-hacker-news'

const wechaty = new Wechaty()

wechaty.use(
  WechatyVorpal({
    use: hackerNews,
  }),
)

wechaty.start()
```

See: [wechaty-vorpal-contrib](https://github.com/wechaty/wechaty-vorpal-contrib) for more Wechaty Vorpal Extension CLI for Chatbots.

## Demo

![Wechaty Vorpal Hacker News](https://wechaty.github.io/wechaty-vorpal/images/wechaty-vorpal-hacker-news.png)

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
