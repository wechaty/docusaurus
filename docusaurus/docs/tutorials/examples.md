---
title: Examples
---

## Ding Dong Bot

Run the [Ding Dong Bot](https://github.com/wechaty/wechaty-getting-started/tree/master/examples/ding-dong-bot.ts) example:

```sh
git clone https://github.com/wechaty/wechaty-getting-started.git

cd wechaty-getting-started
npm install
npm start
```

Or check out the [sandbox](https://codesandbox.io/s/github/wechaty/wechaty-getting-started/tree/master/examples/third-parties/codesandbox?hidenavigation=1&module=%2Fding-dong-bot.ts&theme=dark):

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/wechaty/wechaty-getting-started/tree/master/examples/third-parties/codesandbox?hidenavigation=1&module=%2Fding-dong-bot.ts&theme=dark"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

It does not require a build system or a view framework and exists to show the raw Redux API used with ES5.

## More Examples

You can find more examples in the [Wechaty Getting Started Examples Directory](https://github.com/wechaty/wechaty-getting-started/tree/master/examples)
page.

## Wechaty Examples Directory

You can get all of the following examples as follows

[https://github.com/wechaty/wechaty-getting-started/tree/master/examples](https://github.com/wechaty/wechaty-getting-started/tree/master/examples)

### 1. BASIC

Wechaty Basic Functions, see [https://github.com/wechaty/wechaty-getting-started/tree/master/examples/basic](https://github.com/wechaty/wechaty-getting-started/tree/master/examples/basic)

| FileName | Description |
| :--- | :--- |
| the-worlds-shortest-chatbot-code-in-6-lines.js | The very first wechaty example showcasing how easy it is to get started |
| ding-dong-bot.js | Practical example illustrates on how to do message handling |
| contact-bot.js | List all contacts by Wechat ID & Name |

## Contact Bot

### Try out the bot

[![Edit wechaty-contact-bot](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/Soumi7/Contact-Bot-Wechaty/tree/main/?fontsize=14&hidenavigation=1&module=%2Fcontact-bot.js&theme=dark)

You can try out the Wechaty Contact bot using this interactive CodeSandbox.

Just scan the generated QR code with WeChat app, and you are ready to play with the bot!

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/Soumi7/Contact-Bot-Wechaty/tree/main/?fontsize=12&hidenavigation=1&module=%2Fcontact-bot.js&theme=dark"
  title="wechaty-contact-bot"
  sandbox="allow-forms allow-modals allow-popups allow-same-origin allow-scripts"
></iframe>

### 2. ADVANCED

Wechaty Advanced Functions, see [https://github.com/wechaty/wechaty-getting-started/tree/master/examples/advanced](https://github.com/wechaty/wechaty-getting-started/tree/master/examples/advanced)

| FileName | Description |
| :--- | :--- |
| demo-in-tutorial.js | the demo bot from the tutorial |
| busy-bot.js | auto response "busy" message for you when you are |
| media-file-bot.js | Save Media Attachment in Message to local files |
| room-bot.js,room-say-cli.js | Practical example illustrates on how to do room handling |
| friend-bot.js | Practical example illustrates on how to do friend handling |
| gist-bot/ | Best template for bigger modules, with each handler in separated files |

### 3. PROFESSIONAL

Wechaty Integrated with Other Modules/Services, see [https://github.com/wechaty/wechaty-getting-started/tree/master/examples/professional](https://github.com/wechaty/wechaty-getting-started/tree/master/examples/professional)

| FileName | Description |
| :--- | :--- |
| hot-import-bot/ | Using Hot Module Reload\(HMR\) for Wechaty Listeners |
| ctrl-c-signal-bot.ts | Ctrl-C signal handling demo |
| monster-bot/ | demo that tried to include everything -- message, room, HMR & signal handling, with each handler in separated files |
| api-ai-bot.ts | Wechaty bot that uses ApiAi.com brain |
| speech-to-text-bot.ts | bot that uses baidu speech \(vop.baidu.com\) |
| tuling123-bot.ts | Connect to [tuling123](http://www.tuling123.com/) chatbot |
| telegram-roger-bot.js | single bot that runs under/for both Telegram and Wechaty |
| blessed-twins-bot/ | Wechaty multi-instance support \(v0.16+\) demo |
