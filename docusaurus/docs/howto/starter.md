---
title: 'Getting started with the bot on Wechat or Whatsaap'
---

This will be a step by step guide on how to run the bot on most popular messaging apps, Whatsapp and Wechat:

:::tip

If you do not wish to run the bot locally, you can also use use Gitpod  or Google Cloud Shell. The steps can be found [here](../getting-started/quick-start)

:::

## Requirements

1. Node.js v12+
2. Build tools

## Installation

- ### Download Node.js 
  You can downlad the latest version from [here](https://nodejs.org/en/download/)
- ### Build Tools
   On your terminal  run this command  :

   ```bash 
   sudo apt install build-essential
   ```

## Running Locally

This guide will go through the steps to generate QR code for the bot to test it with Whatsaap and Wechat.

1. Clone the [Wechaty Getting Started](https://github.com/wechaty/wechaty-getting-started) repository by following the commands below, and navigate to the directory:

```bash
git clone https://github.com/wechaty/wechaty-getting-started
cd wechaty-getting-started
```
 2. Install the`npm dependencies` by running this command:
 ```bash
 make install
 ```  
3.  Set-up the the environment vaiables:
 ```bash
 export WECHATY_LOG=verbose
 ```

 4. Setup the relevant puppet provider for the messaging app with which you want to test the bot: 
  - <b>Wechat</b>

  ```bash
export WECHATY_PUPPET=wechaty-puppet-wechat
   ```

  - <b>Whatsapp</b>

   ```bash
export WECHATY_PUPPET=wechaty-puppet-whatsapp
 ```

5. Start the ding dong bot by using the command:
```bash 
npm start
```

7. Scan the code displayed on the terminal using Wechat/ Whatsapp Web
![Getting Started Tutorial Completion Page](../../static/img/docs/howto/starter/qr-code.png)
The Ding Dong bot is now set up and can read recieved messages. Ding Dong bot is the simplest wechaty bot that automatically replies with a `dong` message when a `ding` message is recieved.

