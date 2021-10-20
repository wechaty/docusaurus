---
title: 'Google Season of Docs 2021 Final Blog - Tutorials'
author: sbis04
categories: gsod
tags:
  - google
  - gsod
  - 2021
  - docs
  - tutorials
  - project
image: /assets/2021/10-wechaty-tutorials-final-blog/wechaty-tutorials-final-cover.webp
---

We have been a part of **Google Season of Docs 2021** for creating and improving the **Wechaty documentation**, specifically the [Tutorials](https://wechaty.js.org/docs/tutorials/) section. It was an amazing journey of **17 weeks** (roughly 4 months) contributing to the Wechaty documentation, during which we got an opportunity to try out and learn a lot about the Wechaty bots. When we initially started contributing to the Docs, we didn't have any idea about how Wechaty bots can be created that runs on various instant messaging (IM) systems like [WhatsApp](https://www.whatsapp.com/) and [Wechat](https://www.wechat.com/). But gradually we became comfortable with building the bots and started building the documentation.

A brief introduction about us available below.

### Souvik Biswas
> email: `sbis1999@gmail.com`

I am Souvik Biswas, currently pursuing a B.Tech degree in Computer Science and Engineering from **IIIT Kalyani** in India. I am a freelance technical writer of [Codemagic](https://blog.codemagic.io/) and [LogRocket](https://blog.logrocket.com/) Blog, and a passionate mobile app developer. You can also find some of my articles on [Medium](https://medium.com/@sbis1999), and explore my projects on [GitHub](https://github.com/sbis04).

### Shwetal Soni
> email: `sonishwetal704@gmail.com`

I am Shwetal Soni, currently pursuing B.Tech in Computer Science and Engineering from **NIT Hamirpur** in India. I am interested in UI/UX Design, Frontend web development and recently I’m also exploring the field of Technical Writing. Recently I have only written one technical blog on *writing smart contracts on Tezos Blockchain*. You can check it out here [Medium](https://shwetalsoni.medium.com/building-your-first-dapp-on-tezos-part-1-writing-smart-contract-on-smartpy-d7cdf27476f9). You can also find my projects on [Github](https://github.com/shwetalsoni/).

## Final Video Presentation

{% include iframe.html src="https://youtu.be/lDaBTTSeXck" %}

## Abstract

Our main goal was to improve the Wechaty Tutorials documentation and make it easier to follow for the beginner users of Wechaty. We have added step by step guide for building each Wechaty bot from scratch and added interactive CodeSandboxes using which users can try out the bot directly from within the documentation page.

Here's an brief overview about about tasks:

- Refactor the overall Tutorials documentation
- Add / improve the step-by-step instructions
- Add interactive CodeSandbox
- Screenshots / GIF of the bot running on a device
- Add various bots building tutorials to Examples
- Create a video tutorial

Earlier the tutorial pages lacked a proper structure, so it might not be easy to follow and build a bot for a user to is new to Wechaty. So, we have introduced a structure that is followed on every documentation page, more information about it below.

## Structure of tutorial pages

This is an overview of the final structure for each of the tutorial pages that we have followed so that all the tutorials are consistent and easy to follow for any user.

- **Introduction:** Highlights the goal of the tutorial.
- **Try out the bot:** Contains the CodeSandbox of the bot along with an editable link.
- **Requirements:** List of the required tools in order to follow the tutorial.
- **Getting started:** Covers the installation step of the required tools and how users can try out the bot locally by cloning its GitHub repo.
- **Building the bot:** The main section where we include the step by step guide
- **Running the bot:** Contains commands for running the bot on the user’s system
- **Bot demonstration:** Describes the commands that can be used within the bot along with some screenshots/GIFs if required.
- **Conclusion & References:** Any links that the users can check out for knowing more about a particular concept related to the bot.

## Project Goals

We managed to completed all the GSoD tasks as per our initial proposal. In 17 weeks, we have done a total of **40 pull requests** which consist of 33 weekly PRs (addition or improvement of documentation pages that we had included in our initial proposal), and 7 miscellaneous PRs (fixes that we have done to some of the pages).

We have also created a video tutorial for building the most basic Wechaty bot, called the [Ding Dong Bot](https://wechaty.js.org/docs/tutorials/#build-your-first-chatbot-with-wechaty), from scratch.

![Coding Ding Dong Bot](../assets/2021/10-wechaty-tutorials-final-blog/wechaty-coding.gif)

You can take a look at our contributions by going to the respective links present in this section. 

You can find all PRs done by us in the links below:
* [Shwetal's PRs](https://github.com/wechaty/wechaty.js.org/pulls?q=is%3Apr+author%3Ashwetalsoni)
* [Souvik's PRs](https://github.com/wechaty/wechaty.js.org/pulls?q=is%3Apr+author%3Asbis04)

Here's a complete list of all the contributions that we have done during the GSoD season:

| Week | Pull Requests  | Technical Writer  | Status |
| --- | --- | --- | --- |
| 1 | Add instructions and interactive sandbox for Vorpal [#779](https://github.com/wechaty/wechaty.js.org/pull/779) | [Souvik Biswas](https://github.com/sbis04) | ![779]
| 1 | Update the Vorpal demo screenshot [#780](https://github.com/wechaty/wechaty.js.org/pull/780) | [Souvik Biswas](https://github.com/sbis04) | ![780]
| 1 |  Improve Vorpal docs [#791](https://github.com/wechaty/wechaty.js.org/pull/791) | [Souvik Biswas](https://github.com/sbis04) | ![791]
| 1 |  Improve and update Vorpal bot steps [#882](https://github.com/wechaty/wechaty.js.org/pull/882) | [Souvik Biswas](https://github.com/sbis04) | ![882]
| 1 |  Runnning Locally (Ding Dong bot) [#888 ](https://github.com/wechaty/wechaty.js.org/pull/888) | [Shwetal Soni](https://github.com/shwetalsoni )| ![888]
| 2 |  Getting Started Overview [#935  ](https://github.com/wechaty/wechaty.js.org/pull/935) | [Shwetal Soni](https://github.com/shwetalsoni )| ![935]
| 2 |  Tutorials Overview [#934 ](https://github.com/wechaty/wechaty.js.org/pull/934) | [Shwetal Soni](https://github.com/shwetalsoni )| ![934]
| 2 | Add installation page under tutorials [#905](https://github.com/wechaty/wechaty.js.org/pull/905) | [Souvik Biswas](https://github.com/sbis04) | ![905]
| 3 | Add Google Cloud Shell tutorial [#922](https://github.com/wechaty/wechaty.js.org/pull/922) | [Souvik Biswas](https://github.com/sbis04) | ![922]
| 3 | Running Ding Dong bot on gitpod [#923 ](https://github.com/wechaty/wechaty.js.org/pull/923) | [Shwetal Soni](https://github.com/shwetalsoni) | ![923]
| 5 | Update Wechaty Plugin Overview page under Tutorials [#957](https://github.com/wechaty/wechaty.js.org/pull/957) | [Souvik Biswas](https://github.com/sbis04) | ![957]
| 5 | Add tutorial for EventLogger plugin [#963](https://github.com/wechaty/wechaty.js.org/pull/963) | [Souvik Biswas](https://github.com/sbis04) | ![963]
| 6 | Add tutorial for `QR code terminal plugin` [#969](https://github.com/wechaty/wechaty.js.org/pull/969) | [Shwetal Soni](https://github.com/shwetalsoni) | ![969]
| 6 | Add tutorial for Heartbeat plugin [#985](https://github.com/wechaty/wechaty.js.org/pull/985) | [Souvik Biswas](https://github.com/sbis04) | ![985]
| 7 | Using Redux with wechaty overview [#989](https://github.com/wechaty/wechaty.js.org/pull/989) | [Shwetal Soni](https://github.com/shwetalsoni) | ![989]
| 8 | Add Redux: Ducks proposal style docs [#1126](https://github.com/wechaty/wechaty.js.org/pull/1126) | [Souvik Biswas](https://github.com/sbis04) | ![1126]
| 9 | Add Starter Bot under Examples: Basic [#1076](https://github.com/wechaty/wechaty.js.org/pull/1076) | [Souvik Biswas](https://github.com/sbis04) | ![1076]
| 9 | Improve the Contact Bot page [#1099](https://github.com/wechaty/wechaty.js.org/pull/1099) | [Souvik Biswas](https://github.com/sbis04) | ![1099]
| 9 | Updated `ding dong bot` under examples [#1103 ](https://github.com/wechaty/wechaty.js.org/pull/1103) | [Shwetal Soni](https://github.com/shwetalsoni) | ![1103]
| 9 | Updated `World's Shortest Chatbot` under examples [#1104  ](https://github.com/wechaty/wechaty.js.org/pull/1104) | [Shwetal Soni](https://github.com/shwetalsoni) | ![1104]
| 10 | Created tutorial for room-bot [#1131](https://github.com/wechaty/wechaty.js.org/pull/1131) | [Shwetal Soni](https://github.com/shwetalsoni) | ![1131]
| 10 | Tutorial for examples/advanced/busy-bot [#1134 ](https://github.com/wechaty/wechaty.js.org/pull/1134) | [Shwetal Soni](https://github.com/shwetalsoni) | ![1134]
| 10 | Update the Friend bot page [#1138](https://github.com/wechaty/wechaty.js.org/pull/1138) | [Souvik Biswas](https://github.com/sbis04) | ![1138]
| 11 | Add tutorial for Media File Bot [#1155](https://github.com/wechaty/wechaty.js.org/pull/1155) | [Souvik Biswas](https://github.com/sbis04) | ![1155]
| 12 | Tutorial for using vanilla redux with wechaty [#1165 ](https://github.com/wechaty/wechaty.js.org/pull/1165) | [Shwetal Soni](https://github.com/shwetalsoni) | ![1165]
| 12 | Add tutorial for Ctrl C Signal Bot [#1204](https://github.com/wechaty/wechaty.js.org/pull/1204) | [Souvik Biswas](https://github.com/sbis04) | ![1204]
| 13 | Tutorial for Tuling123 Bot [#1207 ](https://github.com/wechaty/wechaty.js.org/pull/1207) | [Shwetal Soni](https://github.com/shwetalsoni) | ![1207]
| 16 | Add video demo of ding ding bot [#1249](https://github.com/wechaty/wechaty.js.org/pull/1249) | [Souvik Biswas](https://github.com/sbis04) | ![1249]
| 16 | Add missing badges to Event Logger plugin page [#1250](https://github.com/wechaty/wechaty.js.org/pull/1250) | [Souvik Biswas](https://github.com/sbis04) | ![1250]
| 16 | Add missing badges to Heartbeat plugin page [#1251](https://github.com/wechaty/wechaty.js.org/pull/1251) | [Souvik Biswas](https://github.com/sbis04) | ![1251]
| 16 | Updated links in tutorials overview page and removed empty pages from examples section [#1254 ](https://github.com/wechaty/wechaty.js.org/pull/1254) | [Shwetal Soni](https://github.com/shwetalsoni) | ![1254]
| 16 | Added missing badges to QR code terminal plugin [#1253 ](https://github.com/wechaty/wechaty.js.org/pull/1253) | [Shwetal Soni](https://github.com/shwetalsoni) | ![1253]
| 16 | Update order of language display [#1252 ](https://github.com/wechaty/wechaty.js.org/pull/1252) | [Shwetal Soni](https://github.com/shwetalsoni) | ![1252]


<!--- Merge Status Badges --->
<!--- they are linked to the above last columns of the table, 
      to add just use the correct PR number and use the same format --->

[779]:https://img.shields.io/github/pulls/detail/state/wechaty/wechaty.js.org/779?style=flat-square
[780]:https://img.shields.io/github/pulls/detail/state/wechaty/wechaty.js.org/780?style=flat-square
[791]:https://img.shields.io/github/pulls/detail/state/wechaty/wechaty.js.org/791?style=flat-square
[882]:https://img.shields.io/github/pulls/detail/state/wechaty/wechaty.js.org/882?style=flat-square
[888]:https://img.shields.io/github/pulls/detail/state/wechaty/wechaty.js.org/888?style=flat-square
[935]:https://img.shields.io/github/pulls/detail/state/wechaty/wechaty.js.org/935?style=flat-square
[934]:https://img.shields.io/github/pulls/detail/state/wechaty/wechaty.js.org/934?style=flat-square
[905]:https://img.shields.io/github/pulls/detail/state/wechaty/wechaty.js.org/905?style=flat-square
[922]:https://img.shields.io/github/pulls/detail/state/wechaty/wechaty.js.org/922?style=flat-square
[923]:https://img.shields.io/github/pulls/detail/state/wechaty/wechaty.js.org/923?style=flat-square
[957]:https://img.shields.io/github/pulls/detail/state/wechaty/wechaty.js.org/957?style=flat-square
[963]:https://img.shields.io/github/pulls/detail/state/wechaty/wechaty.js.org/963?style=flat-square
[969]:https://img.shields.io/github/pulls/detail/state/wechaty/wechaty.js.org/969?style=flat-square
[985]:https://img.shields.io/github/pulls/detail/state/wechaty/wechaty.js.org/985?style=flat-square
[989]:https://img.shields.io/github/pulls/detail/state/wechaty/wechaty.js.org/989?style=flat-square
[1126]:https://img.shields.io/github/pulls/detail/state/wechaty/wechaty.js.org/1126?style=flat-square
[1076]:https://img.shields.io/github/pulls/detail/state/wechaty/wechaty.js.org/1076?style=flat-square
[1099]:https://img.shields.io/github/pulls/detail/state/wechaty/wechaty.js.org/1099?style=flat-square
[1103]:https://img.shields.io/github/pulls/detail/state/wechaty/wechaty.js.org/1103?style=flat-square
[1104]:https://img.shields.io/github/pulls/detail/state/wechaty/wechaty.js.org/1104?style=flat-square
[1131]:https://img.shields.io/github/pulls/detail/state/wechaty/wechaty.js.org/1131?style=flat-square
[1134]:https://img.shields.io/github/pulls/detail/state/wechaty/wechaty.js.org/1134?style=flat-square
[1138]:https://img.shields.io/github/pulls/detail/state/wechaty/wechaty.js.org/1138?style=flat-square
[1155]:https://img.shields.io/github/pulls/detail/state/wechaty/wechaty.js.org/1155?style=flat-square
[1165]:https://img.shields.io/github/pulls/detail/state/wechaty/wechaty.js.org/1165?style=flat-square
[1204]:https://img.shields.io/github/pulls/detail/state/wechaty/wechaty.js.org/1204?style=flat-square
[1207]:https://img.shields.io/github/pulls/detail/state/wechaty/wechaty.js.org/1207?style=flat-square
[1249]:https://img.shields.io/github/pulls/detail/state/wechaty/wechaty.js.org/1249?style=flat-square
[1250]:https://img.shields.io/github/pulls/detail/state/wechaty/wechaty.js.org/1250?style=flat-square
[1251]:https://img.shields.io/github/pulls/detail/state/wechaty/wechaty.js.org/1251?style=flat-square
[1252]:https://img.shields.io/github/pulls/detail/state/wechaty/wechaty.js.org/1252?style=flat-square
[1253]:https://img.shields.io/github/pulls/detail/state/wechaty/wechaty.js.org/1253?style=flat-square
[1254]:https://img.shields.io/github/pulls/detail/state/wechaty/wechaty.js.org/1254?style=flat-square

## Conclusion

The current version of [Wechaty documentation](https://wechaty.js.org/) consists a lot of easy to follow tutorial for building Wechaty bots from scratch. User will find relevant links to all the resources required for building the bot by themselves and can also run some of bots directly on the documentation page inside the CodeSandboxes that we have included.

Thanks to all the mentors ([Huan](https://github.com/huan) & [Rui](https://github.com/lijiarui)) and volunteers ([Rohitesh](https://github.com/Rohitesh-Kumar-Jain) & [Simin](https://github.com/proudofsimin)) for helping us during the documentation period and making our GSoD 2021 season successful.
