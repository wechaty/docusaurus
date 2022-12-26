---
title: 'Installation'
---

Before diving into the tutorials, you will need to install a few build tools. This guide will show you complete installation process of the minimum tools required to start building your own bots. If you have already installed `Node.js` version **16** or higher, then go to [Install Wechaty](#install-wechaty).

## Install Node.js

Wechaty being a JavaScript based SDK, it requires a JavaScript runtime environment provided by [Node.js](https://nodejs.org/), and [npm](https://www.npmjs.com/) which is a package manager for JavaScript. You don't need to download `npm` separately, as you install `Node.js` you automatically get `npm` installed on your system.

> Wechaty requires `Node.js` version higher than **16**

You can install the latest version of `Node.js` on your system by following the links below as per the operating system (OS) you are running:

:::note Node.js installation docs

* [Windows](https://nodejs.org/en/download/package-manager/#windows)
* [Linux\(Debian/Ubuntu\)](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)
* [macOS](https://nodejs.org/en/download/package-manager/#macos)

> Installation guide for `Node.js` on other platforms can be found [here](https://nodejs.org/en/download/package-manager/).

:::

After the installation is complete, you can check the version of `Node.js` using:

```sh
node -v
```

You can check your `npm` version by using:

```sh
npm -v
```

If your `Node.js` version is not **16** or greater, you can update `Node.js` and `npm` to their latest stable version by following instructions in the links below:

* [Get the latest stable version of node](https://docs.npmjs.com/try-the-latest-stable-version-of-node)
* [Get the latest stable version of npm](https://docs.npmjs.com/try-the-latest-stable-version-of-npm)

## Install Wechaty

In order to use **Wechaty** in your `Node.js` project, you need to install it inside your project directory. Wechaty is distributed as a **npm** package, so you can easily install it using the `npm` CLI tool.

1. Navigate to your project directory:

   ```sh
   cd <your wechaty dir>
   ```

2. Install `wechaty` using:

   ```sh
   npm install wechaty
   ```

This will add it to the `package.json` file of your project under `dependencies`:

```json
{
  "name": "wechaty_demo",
  "version": "1.0.0",
  "main": "index.js",
  "dependencies": {
    "wechaty": "^0.60.12"
  }
}
```

## Install Puppet

For running a Wechaty bot on an **instant messaging (IM)** systems (such as WeChat, WhatsApp and Gitter) you will need to use [Wechaty Puppet](https://github.com/wechaty/wechaty-puppet).

Wechaty Puppet Providers are **npm** packages that you can install by using the following command:

```sh
npm install wechaty-puppet-NAME
```

> You have to replace the `wechaty-puppet-NAME` with the puppet you want to use. There are various puppets available, you can choose from [here](../puppet-providers/overview.mdx).

## Good to go

Now, you have the minimal setup required to build a bot. You can head over to the [tutorials](./../getting-started/running-locally.mdx).
