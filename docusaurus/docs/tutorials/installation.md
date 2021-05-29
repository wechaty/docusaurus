---
title: 'Installation'
---

Before diving into the tutorials, you will need to install a few build tools. This guide will show you complete installation process of the minimum tools required to start building your own bots.

## Install Node.js

Wechaty being a JavaScript based SDK, it requires a JavaScript runtime environment provided by [Node.js](https://nodejs.org/), and [npm](https://www.npmjs.com/) which is a package manager for JavaScript. You do not need to download `npm` separately, as you install `Node.js` you automatically get `npm` installed on your system.

> Wechaty requires `Node.js` version higher than **12.0**

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

## Update Node.js and npm

Though `Node.js` and `npm` are installed together, they are separate projects and require to be updated separately.

### Update Node.js

To update `Node.js` you can follow the steps mentioned below:

#### Linux

The best way to update `Node.js` on **Linux** is by using [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm). It's a tool for managing multiple `Node.js` versions.

1. Update the Linux package repository:

    ```sh
    sudo apt update
    ```

2. Download the following dependencies:

    ```sh
    sudo apt install build-essential checkinstall libssl-dev
    ```

3. Install **NVM** using the curl command:

    ```sh
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.35.1/install.sh | bash
    ```

4. Close and reopen the **terminal**.

5. Verify if NVM is successfully installed:

    ```sh
    nvm --version
    ```

6. Now you can check for newly available releases using:

    ```sh
    nvm ls-remote
    ```

7. To install the latest version, use the `nvm` command with the specific `Node.js` version:

    ```sh
    nvm install [version.number]
    ```

#### Windows and macOS

The best way to update `Node.js` on **Windows** and **macOS** is by going to the official download page and install the latest release, the system should overwrite the older version with the updated one.

1. Go to the [Downloads page of Node.js](https://nodejs.org/en/download/), you can choose between **LTS** (recommended) and **Current** release.

2. Click on either **Windows Installer** or **macOS Installer** depending on your system, and download the latest version.

3. Once the download is complete, run the installer and follow the steps to get it installed.

4. Now, check the version once more to verify you are on the latest version:

   ```sh
   node -v
   ```

### Update npm

To update `npm` you can just run the following command:

```sh
npm install npm@latest -g
```

## Install Wechaty

In order to use **Wechaty** in your `Node.js` project, you need to install it inside your project directory. Wechaty is distributed as a **npm** package, so you can easily install it using the `npm` CLI tool.

1. Navigate to your project directory:

   ```sh
   cd node/proj/dir
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

> You have to replace the `wechaty-puppet-NAME` with the puppet you want to use. There are various puppets available, you can choose from [here](./puppet-providers/overview.mdx).

## Good to go

Now, you have the minimal setup required to build a bot. You can head over to the [tutorials](./../getting-started/hard-way.mdx).
