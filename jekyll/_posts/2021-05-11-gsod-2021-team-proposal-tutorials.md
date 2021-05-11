---
title: "Google Season of Docs 2021 Team Proposal: Tutorials"
author: sbis04
categories: proposal
tags:
  - google
  - gsod
  - 2021
  - docs
  - tutorials
  - project
  - proposal
image: assets/2021/05-gsod-2021-team-proposal-tutorials/wechaty-tutorials-proposal.png
---

This is the project proposal for creating and improving the **Wechaty Tutorials** documentation on which we will be working as a part of Google Season of Docs 2021. We are looking forward to completing this work during a span of **12 weeks** (or, 3 months).

## Team members

### Souvik Biswas (email: `sbis1999@gmail.com`)

I am Souvik Biswas, currently pursuing a B.Tech degree in Computer Science and Engineering from IIIT Kalyani in India. I am a freelance technical writer of [Codemagic](https://blog.codemagic.io/) and [LogRocket](https://blog.logrocket.com/) Blog, and a passionate mobile app developer. You can also find some of my articles on [Medium](https://medium.com/@sbis1999), and explore my projects on [GitHub](https://github.com/sbis04).

### Shwetal Soni (email: `sonishwetal704@gmail.com`)

I am Shwetal Soni, currently pursuing B.Tech in Computer Science and Engineering from NIT Hamirpur in India. I am interested in UI/UX Design, Frontend web development and recently I’m also exploring the field of Technical Writing. Recently I have only written one technical blog on *writing smart contracts on Tezos Blockchain*. You can check it out here [Medium](https://shwetalsoni.medium.com/building-your-first-dapp-on-tezos-part-1-writing-smart-contract-on-smartpy-d7cdf27476f9). You can also find my projects on [Github](https://github.com/shwetalsoni/).

## Proposal Video Presentation

{% include iframe.html src="https://youtu.be/aYlHgGFJoJM" %}

## Abstract

### Current State of WeChaty Tutorials

* Users come to Wechaty website seeking how to use Wechaty to build a chatbot application for solving their problems. Unfortunately, the learning curve is not friendly to our users, they always struggle with setting up their development environment, can not get started with the simplest example source code, and find it hard to know what they can do with our API. This problem leads to us losing lots of new users, increased number of questions asked in the community, and lowered user satisfaction.
* The current version of the [Wechaty Tutorials](https://wechaty.js.org/docs/tutorials/) is not properly structured.
* The tutorials on the website need improvement, and should be beginner friendly.

## Proposed Work

Update the **Tutorials** to include a step-by-step guide (easy for beginners to follow) for achieving the final goal of building a bot.

The Tutorial project should:

* Allow the user to learn by doing
* Get the user started
* Make sure that the tutorial works all the time
* Ensure the user sees results immediately
* Make the tutorial repeatable
* Focus on concrete steps, not abstract concepts
* Provide the minimum necessary explanation
* Focus only on the steps the user needs to take
* Work with the contributor team to update the documentation on the Wechaty site.
* Add easy to follow video tutorials

The current **overall structure** of the Tutorials documentation is a bit confusing, so uses might find it difficult to find their relevant information for which they came to the Docs. We have proposed a revised structure of the Tutorials section.

Each of the documentation pages should be structured in a particular format (so that users get familiarized with the format and would be much easier to follow). And, each of the tutorial pages for building a bot should contain an interactive **CodeSandbox** at the end (consisting of minimal code and TODO steps) where they can apply the knowledge that they gained by following the tutorial, and build a bot totally by themselves!

We have included a detailed **structure** (further down the article) of each documentation page that we propose to be followed for every bot building tutorial.

One more thing that we noticed in the Tutorials is the lack of a **defined goal** that the user should expect to achieve at the end of that step-by-step guide. So, there should be a clear description of the goal in the introduction of each tutorial.

## Overall structure of Tutorials

The overall structure of the Tutorials will be as follows:

* **Overview**
  
  Here we can have all the links for each of the pages present in the Tutorials section along with a brief description. This will help the user to easily navigate through the Docs.

* **Quick start**
  * Overview (containing a brief introduction to each of the sub pages)
  * Running on GitPod
  * Running on Google Cloud Shell
  * Running Locally

* **Advanced Usage**
  * Usage with Docker
  * Usage with Heroku
  * Using Plugin with wechaty
  * Using Redux with wechaty
  * Using Vorpal with wechaty

* **Examples**
  * Overview (introduction to the different types of bot included in this examples section)
  * Basic
    * World’s shortest chatbot
    * Contact Bot
    * Ding dong Bot
  * Advanced
    * Demo Bot
    * Busy Bot
    * Media File Bot
    * Room Bot
    * Friend Bot
    * Gist Bot
  * Professional
    * Hot Import Bot
    * Ctrl C Signal Bot
    * Monster Bot
    * Api AI Bot
    * Speech to Text Bot
    * Turing Bot
    * Telegram Roger Bot
    * Blessed Twins Bot

* **Cheat sheet**
  * Brief description of a bot
  * Code snippet to use it
  * Tech description (in brief)
  * Example - CodeSandbox (maybe included)
  * Screenshots / GIFs

> We think the [Video tutorial](https://wechaty.js.org/docs/tutorials/video-tutorial) section is not required as a separate topic. Currently the contents of this page are just two quick start videos (in chinese), so that can be included in the **Quick Start: Overview** section.

## Structure for each tutorial page

A proposed structure of the tutorial documentation is as follows:

* **Introduction** (also include the goal of the tutorial)
* **Try out the bot** (CodeSandbox)
* **Requirements** (tools required to follow the tutorial)
* **Usage*** (can be renamed as **Quick Start**)

  Code snippet - for users who may be searching for how to use the bot in their project, and doesn’t want to go deep into the step-by-step tutorial.
  
  > One more suggestion: These are like quick start code snippets, so we think it should be moved to the Cheat Sheet section which will look more appropriate.

* **Video tutorial** (optional)*
* **Getting started**

  Quick introduction to the required tools and how to setup their development environment to get started building the bot

* **Building the bot**

  Step-by-step guide for building the bot, with a **CodeSandbox** at the end having minimal code and *TODO* steps where users can try building the bot by themselves directly on the documentation page without installing any tools on their local system

* **Running the bot**

  Commands for running the bot locally

* **Bot demonstration**

  Commands that they can use with the bot, and maybe a GIF showing the invocation of some of the commands on WeChat or WhatsApp

* **Conclusion**
* **References**

> *Require some feedback from the community members

## Project Goals (Timeline)

### Week 1

* Start by adding missing content to one of the tutorials (maybe **Vorpal** first as I have already started contributing to that page)
* Try out the bot (**CodeSandbox** - already added: [#779](https://github.com/wechaty/wechaty.js.org/pull/779))
* Update the step-by-step guide to have more technical details on how to build the bot, adding brief explanation of each function used
* Add a **CodeSandbox** at the end with the TODO (as explained above)
* Structure the tutorial properly as per the proposed structure given above

### Week 2

* Update the [Tutorials: Overview](https://wechaty.js.org/docs/tutorials/) page by adding information about what are the different types of tutorial available that then can go through (keep updating this as new tutorials are added to the docs)
* In the [Getting started overview](https://wechaty.js.org/docs/getting-started/) page add information about what are the different ways that can get started with Wechaty bots.
* Include the **CodeSandbox** of the Ding Dong bot to the [Quick start](https://wechaty.js.org/docs/getting-started/quick-start) page, so that users can try out the bot directly.
* Short videos may be included for running the Ding Dong bot using GitPod and Google Cloud Shell.
* Update the page with screenshots or GIF of the Ding Dong bot running on a device (WeChat / WhatsApp).
* Splitting Quick Start into two different pages, separate page for Running on Gitpod and same for Running on Cloudshell. (Removing the unnecessary information)

### Week 3

* Add getting started examples for [Polyglot Wechaty](https://wechaty.js.org/docs/polyglot/) (multi-language) as per the conversation [here](https://github.com/wechaty/wechaty.js.org/pull/763#discussion_r619794643).
* Update the page structure and include **CodeSandbox** for the bot (if necessary).
* Add screenshots / GIFs to this page.
* Device screenshots / GIF after running the bot.

### Week 4

* Check any improvements that can be made to the [Usage with Docker](https://wechaty.js.org/docs/tutorials/docker) page, and add any missing section (if required).
* Verify the examples run properly on Wechaty Docker.
* Make the page consistent and follow the proposed structure.
* Add screenshots / GIF of the running Docker instance (if required)

### Week 5

* Add instructions to the [Usage with Heroku](https://wechaty.js.org/docs/tutorials/usage-with-heroku) page.
* Structure this page correctly.
* Add screenshots while updating the instructions.

### Week 6

* The [Using Plugin with Wechaty](https://wechaty.js.org/docs/tutorials/using-plugin-with-wechaty) page can be divided into several sub-sections each consisting of a tutorial for one Wechaty Plugin Contrib Package.
* Adding information and step-by-step tutorial for each plugin.
* Include a **CodeSandbox** to try out the bot.
* Add screenshots and GIFs where necessary.

### Week 7

* Continue with creating separate pages for each plugin.
* Make each page follow the proposed structure
* Adding information and step-by-step tutorial for each plugin.
* Include a **CodeSandbox** to try out the bot.
* Adding screenshots and GIFs where necessary.

### Week 8

* Add proper introduction to the [Using Redux with Wechaty](https://wechaty.js.org/docs/tutorials/using-redux-with-wechaty) along with a defined goal for following this tutorial.
* Structure the page properly
* Include code explanation and interactive **CodeSandbox**.
* Add screenshots or GIFs (if necessary)

### Week 9

* Create tutorial pages for some of the bots mentioned on the [Showcases](https://wechaty.js.org/docs/showcases/) page (need feedback from the community members).
* Build tutorial for [OSSChat](https://wechaty.js.org/docs/showcases/osschat-bot) bot (if approved by community members).
* Add **CodeSandbox** and code explanation.
* Add screenshots or GIFs (if necessary)

### Week 10

* Work on creating tutorials for using the [RuiBot](https://wechaty.js.org/docs/showcases/rui-bot) & [Friday BOT](https://wechaty.js.org/docs/showcases/friday-bot)
* Include step-by-step guide and **CodeSandbox**
* Add screenshots or GIFs (if necessary)

### Week 11 : (11th July - 17th July)

* Start working on the [Cheat Sheet](https://wechaty.js.org/docs/tutorials/cheatsheet) which would consist of the following:
  * Brief description of a bot
  * Code snippet to use it
  * Tech description (in brief)
  * Example - CodeSandbox (maybe included)
  * Screenshots / GIFs

Creating the cheat sheet will take time (most probably two weeks).

### Week 12 : (18th July - 24th July)

* Continue with the cheat sheet.
* Create short video tutorials for some of the most used bots (if necessary).
* Decide what are the things to be included to the [Examples](https://wechaty.js.org/docs/tutorials/examples) page.

This is an estimated project goal, changes might be done if suggested by mentors and community members.

## Communication

We will be communicating with the organization through the mailing list, Gitter & GitHub.

We have set up our personal communication through WhatsApp and email.

## Stipend

As suggested by the organization the following structure is to be followed:

* Each writer will get a base stipend of `$2000`
* The other `$1000` is a performance stipend. It will be voted by the volunteers and mentors after the project has been finished. (as suggested by organization, maybe changed later)
