---
title: "Google Season of Docs 2021 Mid Term Blog: Tutorials"
author: shwetalsoni
categories: tutorial
tags:
  - google
  - gsod
  - 2021
  - docs
  - tutorials
  - project
image: /assets/2021/08-gsod-2021-mid-term-blog-tutorials/mid-term-blog-tutorials.webp
---

This is the mid term blog  for demonstrating all our work that we have done till 8 weeks for creating and improving the **Wechaty Tutorials** documentation as a part of Google Season of Docs 2021.

## Team members

### Souvik Biswas (email: `sbis1999@gmail.com`)

I am Souvik Biswas, currently pursuing a B.Tech degree in Computer Science and Engineering from IIIT Kalyani in India. I am a freelance technical writer of [Codemagic](https://blog.codemagic.io/) and [LogRocket](https://blog.logrocket.com/) Blog, and a passionate mobile app developer. You can also find some of my articles on [Medium](https://medium.com/@sbis1999), and explore my projects on [GitHub](https://github.com/sbis04).

### Shwetal Soni (email: `sonishwetal704@gmail.com`)

I am Shwetal Soni, currently pursuing B.Tech in Computer Science and Engineering from NIT Hamirpur in India. I am interested in UI/UX Design, Frontend web development and I'm also learning blockchain development. Currently I'm working as Tezos India Fellow.

## Mid Term Video Presentation

{% include iframe.html src="https://youtu.be/STxFTWBHoiw" %}

## Abstract

- Refactor the overall Tutorials documentation
- Add / improve the step-by-step instructions
- Add interactive CodeSandbox
- Screenshots / GIF of the bot running on a device
- Add various bots building tutorials to Examples
- Create the Cheat sheet

## Overall structure of Tutorials

The overall structure of the Tutorials will be as follows:

- **Overview**
Here we can have all the links for each of the pages present in the Tutorials section along with a brief description. This will help the user to easily navigate through the Docs.

- **Quick start**
  - Overview (containing a brief introduction to each of the sub pages)
  - Running on GitPod
  - Running on Google Cloud Shell
  - Running Locally

- **Advanced Usage**
  - Usage with Docker
  - Usage with Heroku
  - Using Plugin with wechaty
  - Using Redux with wechaty
  - Using Vorpal with wechaty

- **Examples**
  - Overview (introduction to the different types of bot included in this examples section)
  - Basic
    - World’s shortest chatbot
    - Contact Bot
    - Ding dong Bot
  - Advanced
    - Demo Bot
    - Busy Bot
    - Media File Bot
    - Room Bot
    - Friend Bot
    - Gist Bot
  - Professional
    - Hot Import Bot
    - Ctrl C Signal Bot
    - Monster Bot
    - Api AI Bot
    - Speech to Text Bot
    - Turing Bot
    - Telegram Roger Bot
    - Blessed Twins Bot

- **Cheat sheet**
  - Brief description of a bot
  - Code snippet to use it
  - Tech description (in brief)
  - Example - CodeSandbox (maybe included)
  - Screenshots / GIFs

## Structure for each tutorial page

A proposed structure of the tutorial documentation is as follows:

- **Introduction** (also include the goal of the tutorial)
- **Try out the bot** (CodeSandbox)
- **Requirements** (tools required to follow the tutorial)
- **Getting started**

  Quick introduction to the required tools and how to setup their development environment to get started building the bot

- **Building the bot**

  Step-by-step guide for building the bot, with a **CodeSandbox** at the end having minimal code and *TODO* steps where users can try building the bot by themselves directly on the documentation page without installing any tools on their local system

- **Running the bot**

  Commands for running the bot locally

- **Bot demonstration**

  Commands that they can use with the bot, and maybe a GIF showing the invocation of some of the commands on WeChat or WhatsApp

- **Conclusion**
- **References**

## Tasks Completed

![todo-img](/assets/2021/08-gsod-2021-mid-term-blog-tutorials/tutorials.webp)

![example-section](/assets/2021/08-gsod-2021-mid-term-blog-tutorials/tutorials-example.webp)

## Total PR's

In total we have submitted 25 PR's out of which 21 are weekly PR's as per our weekly tasks. Remaining 4 are minor improvements and bug related PR's.

### Shwetal's PR's

- **Running locally** [#888](https://github.com/wechaty/wechaty.js.org/pull/888): Added tutorial for running ding-dong bot locally
- **Overview** [#935](https://github.com/wechaty/wechaty.js.org/pull/935) [#934](https://github.com/wechaty/wechaty.js.org/pull/934): Added overview for tutorials and getting started
- **Gitpod** [#923](https://github.com/wechaty/wechaty.js.org/pull/923): Added tutorial for running ding-dong bot on gitpod
- **Plugins** [#969](https://github.com/wechaty/wechaty.js.org/pull/969): Added tutorial for QR code terminal plugin
- **Redux** [#989](https://github.com/wechaty/wechaty.js.org/pull/989): Added overview for using redux with wechaty

### Souvik's PR's

- **Vorpal page** [#779](https://github.com/wechaty/wechaty.js.org/pull/779) [#780](https://github.com/wechaty/wechaty.js.org/pull/780) [#791](https://github.com/wechaty/wechaty.js.org/pull/791) [#882](https://github.com/wechaty/wechaty.js.org/pull/882) - Step-by-step guide & CodeSandbox
- **Installation page** [#905](https://github.com/wechaty/wechaty.js.org/pull/905) - Tools required for running Wechaty
- **Google Cloud Shell page** [#922](https://github.com/wechaty/wechaty.js.org/pull/922) - Improve the guide
- **Plugins section** [#957](https://github.com/wechaty/wechaty.js.org/pull/957) [#963](https://github.com/wechaty/wechaty.js.org/pull/963) [#985](https://github.com/wechaty/wechaty.js.org/pull/985) - Overview, EventLogger & Heartbeat plugin
- **Using Redux with Wechaty** [#1126](https://github.com/wechaty/wechaty.js.org/pull/1126) - Guide for Wechaty Redux plugin in Ducks proposal style

## Challenges

- Understanding git version control
- Building the first bot using Wechaty
  - Knowledge about NPM projects
  - Using plugins
  - Running bot
  - Interacting with the bot from the connected device
- Understanding how to build CodeSandboxes
- Errors in some bot example codes

## Tasks todo

In upcoming weeks, we have to create tutorial for bots under `examples/advanced` and `examples/professional` sections. Later we will be preparing a `cheet sheet` containing some important code snippets and some plugins. At the end we will review our work right from the start and will refactor it wherever it is required.
