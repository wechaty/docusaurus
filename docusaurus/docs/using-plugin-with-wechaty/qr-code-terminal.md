---
title: QR Code Terminal plugin
---

`QR code terminal` plugin shows QR Code for scanning in terminal. In this tutorial you will learn how to integrate this plugin with [World's Shortest Chatbot](examples/basic/the-worlds-shortest-chatbot-code-in-6-lines.md).

You can refer to [World's Shortest Chatbot](examples/basic/the-worlds-shortest-chatbot-code-in-6-lines.md) to make a simple bot and then for adding `QR code terminal` plugin follow the steps below:

## 1. Add dependency

For using any plugin, you have to add `wechaty-plugin-contrib` NPM package to the dependencies using the following command:

```ts
npm i wechaty-plugin-contrib
```

## 2. Integrating the plugin

Inside `bot.ts` file, import the plugin:

```ts
import { QRCodeTerminal } from 'wechaty-plugin-contrib'
```

Define a `config` variable which can be used while starting the bot to make the QR code printed on terminal small.

```ts
const config = {
  small: true,   // default: false - the size of the printed QR Code in terminal
}
```

Now, before starting the bot, you can use this plugin:

```ts
bot.use(QRCodeTerminal(config))
bot.start()
```

## 3. Running the bot

Now, you are done with the integration of `QR code terminal plugin` with your bot. For running the bot you have to **export/set** an environment variable with the type of puppet to use and then run the bot.

### Linux/macOS

```bash
export WECHATY_LOG=verbose
export WECHATY_PUPPET=wechaty-puppet-wechat
# If you want to use WhatsApp
# export WECHATY_PUPPET=wechaty-puppet-whatsapp
npm start
```

### Windows

```bash
set WECHATY_LOG=verbose
set WECHATY_PUPPET=wechaty-puppet-wechat
# If you want to use WhatsApp
# set WECHATY_PUPPET=wechaty-puppet-whatsapp
npm start
```

Congratulations! you have successfully added `QR code terminal` plugin to your bot. On running the bot it will show a QR code on terminal.

![QR code terminal plugin output](../../static/img/docs/qrcode-bot/output.png)

## References

* [GitHub repository of Wechaty Plugin Contrib](https://github.com/wechaty/wechaty-plugin-contrib)

* [NPM package of Wechaty Plugin Contrib](https://www.npmjs.com/package/wechaty-plugin-contrib)
