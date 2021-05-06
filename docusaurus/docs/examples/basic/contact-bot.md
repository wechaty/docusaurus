---
title: Contact Bot
---

[![Powered by Wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-brightgreen.svg)](https://github.com/Wechaty/wechaty)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue.svg)](https://www.typescriptlang.org/)

Wechaty **Contact bot** is a bot which can list all contacts by Wechat ID & Name.

## Try out the bot

[![Edit wechaty-contact-bot](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/Soumi7/Contact-Bot-Wechaty/tree/main/?fontsize=14&hidenavigation=1&module=%2Fcontact-bot.js&theme=dark)

You can try out the Wechaty Contact bot using this interactive CodeSandbox.

Just scan the generated QR code with WeChat app, and you are ready to play with the bot!

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/Soumi7/Contact-Bot-Wechaty/tree/main/?fontsize=12&hidenavigation=1&module=%2Fcontact-bot.js&theme=dark"
  title="wechaty-contact-bot"
  sandbox="allow-forms allow-modals allow-popups allow-same-origin allow-scripts"
></iframe>

## Requirements

1. [Node.js](https://nodejs.org/en/download) v12+
2. [Wechaty](https://github.com/wechaty/wechaty) v0.40+

## Getting started

You should have `Node.js` installed on your system. If you do not have `Node.js` installed (or have a version below 12), then you need to install the latest version of `Node.js` by following the links below:

:::note Node.js installation docs

* [Windows](https://nodejs.org/en/download/package-manager/#windows)
* [Linux\(Debian/Ubuntu\)](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)
* [macOS](https://nodejs.org/en/download/package-manager/#macos)

> Installation guide for `Node.js` on other platforms can be found [here](https://nodejs.org/en/download/package-manager/).

:::

You can head over to the [Building the bot](#building-the-bot) section to learn how to build the bot on your own.

Otherwise, if you just want to try out the bot on your local system, follow the steps below:

### 1. Clone the repository

Use the following commands to clone the [GitHub repository](https://github.com/Soumi7/wechaty-contact-bot) and navigate to the directory:

```bash
git clone https://github.com/Soumi7/wechaty-contact-bot
cd wechaty-contact-bot
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

It will generate a QR code, scan it using **WeChat** or **WhatsApp** (according to the puppet you have used), and you are ready to play with the bot.

## Building the bot

Let's get started with building the Vorpal Hacker News bot using Wechaty.

### 1. Initialize project

Create a new folder called `contact-bot` and move into that directory:

```bash
mkdir contact-bot
cd contact-bot
```

Use the following command to initialize an npm project:

```bash
npm init -y
```

This will generate the `package.json` file containing these:

```json
{
  "name": "vorpal-bot",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

### 2. Add dependencies

For building the bot mainly you will require the following dependencies:

* [wechaty](https://www.npmjs.com/package/wechaty): Official Wechaty package
* [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal): Displays the QR code
* [dotenv]
* [puppeteer]

```json
"dependencies": {
    "dotenv": "^8.2.0",
    "puppeteer": "^9.0.0",
    "qrcode-terminal": "^0.12.0",
    "wechaty": "^0.60.5"
  }
```

You will also need to add dependencies for using any [Wechaty Puppet](https://wechaty.js.org/docs/puppet-providers/) which helps to integrate Wechaty with various **instant messaging (IM) systems** (such as WeChat, Whatsapp, and Gitter):

```json
"devDependencies": {
    "@chatie/eslint-config": "^0.12.3",
    "@chatie/tsconfig": "^0.14.1",
    "check-node-version": "^4.1.0",
    "connect": "^3.7.0",
    "cross-env": "^7.0.3",
    "is-pr": "^2.0.0",
    "marked": "^2.0.0",
    "nodemon": "^2.0.7",
    "ts-node": "^9.1.1",
    "typescript": "^4.2.4",
    "wechaty-puppet-mock": "^0.28.2",
    "wechaty-puppet-wechat": "^0.28",
    "wechaty-puppet-wechat4u": "^0.18",
    "wechaty-puppet-whatsapp": "0.2.3"
  }
```

> You can add only the puppets that you need for using the bot.

At this point the `package.json` file will look like this (a few more required dependencies are added):

```json
{
  "name": "wechaty-contact-bot",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "lint": "eslint \"src/*.ts\"",
    "start": "node src/contact-bot.js",
    "start:wechat:web": "cross-env WECHATY_LOG=verbose WECHATY_PUPPET=wechaty-puppet-wechat npm start",
    "start:wechat:padlocal": "cross-env WECHATY_LOG=verbose WECHATY_PUPPET=wechaty-puppet-padlocal npm start",
    "start:puppet:service": "cross-env WECHATY_LOG=verbose WECHATY_PUPPET=wechaty-puppet-service npm start",
    "start:whatsapp:web": "cross-env WECHATY_LOG=verbose  WECHATY_PUPPET=wechaty-puppet-whatsapp npm start",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "dotenv": "^8.2.0",
    "puppeteer": "^9.0.0",
    "qrcode-terminal": "^0.12.0",
    "wechaty": "^0.60.5"
  },
  "devDependencies": {
    "@chatie/eslint-config": "^0.12.3",
    "@chatie/tsconfig": "^0.14.1",
    "check-node-version": "^4.1.0",
    "connect": "^3.7.0",
    "cross-env": "^7.0.3",
    "is-pr": "^2.0.0",
    "marked": "^2.0.0",
    "nodemon": "^2.0.7",
    "ts-node": "^9.1.1",
    "typescript": "^4.2.4",
    "wechaty-puppet-mock": "^0.28.2",
    "wechaty-puppet-wechat": "^0.28",
    "wechaty-puppet-wechat4u": "^0.18",
    "wechaty-puppet-whatsapp": "0.2.3"
  }
}
```

### 3. Install dependencies

Before proceeding further, you should install the dependencies that we just specified in the `package.json` file. Run the following command from the root directory:

```sh
npm install
```

This will generate a `node_modules` directory containing all the installed dependencies, and a `package-lock.json` file.

Now, you are ready to start writing the main code for building the bot.

### 4. Writing code for bot

Start by creating a new folder called `src`, and add a file `contact-bot.js`. We will be writing the code here.

Specify some functions that we will require for handling different events returned by the Wechaty bot.

#### onScan

This function will be used for generating the **QR code** for the puppet specified, and display it on the console.

```js
function onScan (qrcode, status) {
  qrTerm.generate(qrcode, { small: true })  // show qrcode on console
}
```

#### onLogin

This will print a log message when an user logs in to the bot.

```js
function onLogin (user) {
  console.log(`${user} login`)
  main()
}
```

#### onLogout

This will print a log message when an user logs out of the bot.

```js
function onLogout (user) {
  console.log(`${user} logout`)
}
```

#### onMessage

This will print a log message with the `Message` received by the bot from the user.

```ts
async function onMessage(msg: Message) {
  log.info('VorpalBot:', msg.toString())
}
```

Now, initialize the Wechaty bot by providing a name:

```js
const bot = new Wechaty()
```

Assign proper function to call when an event is triggered by the bot:

```js
bot.on('scan',    onScan)
bot.on('login',   onLogin)
bot.on('logout',  onLogout)
bot.on('error',   onError)
```

Use the following to start the bot:

```js
bot.start()
.catch(console.error)
```

Add the main function to print the official and personal contacts list to the terminal.:

```js
async function main() {
  const contactList = await bot.Contact.findAll()

  log.info('Bot', '#######################')
  log.info('Bot', 'Contact number: %d\n', contactList.length)

  /**
   * official contacts list
   */
  for (let i = 0; i < contactList.length; i++) {
    const contact = contactList[i]
    if (contact.type() === Contact.Type.Official) {
      log.info('Bot', `official ${i}: ${contact}`)
    }
  }

  /**
   *  personal contact list
   */

  for (let i = 0; i < contactList.length; i++) {
    const contact = contactList[i]
    if (contact.type() === Contact.Type.Personal) {
      log.info('Bot', `personal ${i}: ${contact.name()} : ${contact.id}`)
    }
  }

  const MAX = 17
  for (let i = 0; i < contactList.length; i++ ) {
    const contact = contactList[i]

    /**
     * Save avatar to file like: "1-name.jpg"
     */
    const file = await contact.avatar()
    const name = file.name
    await file.toFile(name, true)

    log.info('Bot', 'Contact: "%s" with avatar file: "%s"',
                    contact.name(),
                    name,
            )

    if (i > MAX) {
      log.info('Bot', 'Contacts too many, I only show you the first %d ... ', MAX)
      break
    }
  }

  const SLEEP = 7
  log.info('Bot', 'I will re-dump contact weixin id & names after %d second... ', SLEEP)
  setTimeout(main, SLEEP * 1000)

}
```

### 6. Defining scripts

You have to define the script for running the bot. Add the following to your `package.json` file:

```json
"scripts": {
    "lint": "eslint \"src/*.ts\"",
    "start": "node src/contact-bot.js",
    "start:wechat:web": "cross-env WECHATY_LOG=verbose WECHATY_PUPPET=wechaty-puppet-wechat npm start",
    "start:wechat:padlocal": "cross-env WECHATY_LOG=verbose WECHATY_PUPPET=wechaty-puppet-padlocal npm start",
    "start:puppet:service": "cross-env WECHATY_LOG=verbose WECHATY_PUPPET=wechaty-puppet-service npm start",
    "start:whatsapp:web": "cross-env WECHATY_LOG=verbose  WECHATY_PUPPET=wechaty-puppet-whatsapp npm start",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

Here, we have specified the script in way so that the type of puppet can be passed as an environment variable.

## Running the bot

In order to run the bot, first you have to **export/set** an environment variable with the type of puppet to use and then run the bot:

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

This will start the bot and generate a QR code.

Scan it using your **WeChat/WhatsApp** as per the puppet you have selected, and you are ready to play with the bot!

You can try building this bot without setting up any dev environment on your local system, just head over to this interactive **CodeSandbox** by clicking the button below (a preview of the starter project is given below):

[![Edit wechaty-contact-bot](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/Soumi7/Contact-Bot-Wechaty/tree/main/?fontsize=14&hidenavigation=1&module=%2Fcontact-bot.js&theme=dark)

<iframe
  class="codesandbox"
  src="https://codesandbox.io/embed/github/Soumi7/Contact-Bot-Wechaty/tree/main/?fontsize=12&hidenavigation=1&module=%2Fcontact-bot.js&theme=dark"
  title="wechaty-contact-bot"
  sandbox="allow-forms allow-modals allow-popups allow-same-origin allow-scripts"
></iframe>

## References

* [Wechaty Getting Started GitHub repository](https://github.com/wechaty/wechaty-getting-started)
