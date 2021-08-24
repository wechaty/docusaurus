---
slug: /tutorials/
title: Wechaty tutorials overview
sidebar_label: 'Overview'
---

<!-- tutorial/Codelab - Converts a reader from curious investigator to active user. -->

These tutorials take you by the hand through a series of steps to create a chatbot application.

## Build your first chatbot with wechaty

If you are a total beginner to Wechaty or chatbot application development in general, we recommend you to start from the [Getting started](getting-started/overview.mdx) tutorials. In these tutorials you'll be building a **ding-dong bot** which replies with a `dong` message when it recieves a `ding` message.

The fastest way to get started with Wechaty is to use a Cloud based IDE for **running the bot**. To understand how it works, You can either use:

- [Gitpod](quick-start/running-on-gitpod.md)
- [Google Cloud Shell](quick-start/running-on-google-cloud-shell.md)

If you are a total begginer then we recommend using [Gitpod](https://gitpod.io/#https://github.com/wechaty/wechaty-getting-started).

Once you get basic idea of ding-dong bot, you can try out building it from scratch by following our [Running Locally](getting-started/running-locally.mdx) tutorial.

## Advanced Tutorials (Using plugins with wechaty)

If you have some experience with Wechaty or Chatbot application development, we have intermediate to advanced tutorials on the following topics as well.

- [Using plugin with Wechaty](using-plugin-with-wechaty/overview.mdx)
- [Using Vorpal with Wechaty](tutorials/using-vorpal-with-wechaty.mdx)
- [Using Redux with Wechaty](using-redux-with-wechaty/overview.md)

You can skip to any of them.

## Explore more bots (Adding more features to your bot)

If you have already run your ding-dong bot successfully, you can now explore some more bots with wechaty.

For better understanding we have classified the bots under three categories taking you from building basic to professional bots.

### Basic

- [World's Shortest Chatbot](examples/basic/the-worlds-shortest-chatbot-code-in-6-lines.mdx): The very first wechaty example showcasing how easy it is to get started
- [Starter Bot](examples/basic/starter-bot.mdx): Most basic bot built using wechaty which can be used as a template for creating advanced bots.
- [Ding Dong bot](examples/basic/ding-dong-bot.md): Practical example demonstrating how to do message handling
- [Contact bot](examples/basic/contact-bot.mdx): List all contacts by Wechat ID & Name

### Advanced

- [Demo in tutorial](examples/advanced/demo-in-tutorial.md): The demo bot from tutorial
- [Busy bot](examples/advanced/busy-bot.mdx): Auto response `busy` message for you when you are busy
- [Media file bot](examples/advanced/media-file-bot.md): Save media attachment in message to local files
- [Room bot](examples/advanced/room-bot.mdx): Practical examples illustrating how to do room handling
- [Friend bot](examples/advanced/friend-bot.mdx): Practical example illustrating how to do friend handling
- [Gist bot](examples/advanced/gist-bot.md): Best template for bigger modules, with each handler in separated files

### Professional

- [Hot import bot](examples/professional/hot-import-bot.md): Using Hot Module Reload(HMR) for Wechaty Listeners
- [Ctrl C Signal bot](examples/professional/ctrl-c-signal-bot.mdx): Ctrl-C signal handling demo
- [Monster bot](examples/professional/monster-bot.md): Demo that tried to include everything -- message, room, HMR & signal handling, with each handler in separated files
- [Api ai bot](examples/professional/api-ai-bot.md): Wechaty bot that uses ApiAi.com brain
- [Speech to text bot](examples/professional/speech-to-text-bot.md): Bot that uses baidu speech
- [Tuling 123 bot](examples/professional/tuling123-bot.md): Connect to *[tuling123](http://www.turingapi.com/)* chatbot
- [Telegram roger bot](examples/professional/telegram-roger-bot.md): Single bot that runs under/for both Telegram and WeChaty
- [Blessed twins bot](examples/professional/blessed-twins-bot.md): Wechaty multi-instance support (v0.16+) demo
