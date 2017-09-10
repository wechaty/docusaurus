---
layout: post
title: "Shanghai WWDC - WeChaty Worldwide Developers Conference"
date: 2017-08-28 18:00 +0800
author: dcsan
categories: developer, community
excerpt_separator: <!--more-->
---

> Author: [@dcsan](https://github.com/dcsan), making Chatbots at [RIKAI Labs](http://RIK.ai)

Most of the WeChaty core team are in Beijing, but there are a few of us here in Shanghai too.
[@lijiarui](https://github.com/lijiarui) was in town for a few days and so we had a small get together!

![shanghai wechaty peeps]({{site.baseurl}}/download/2017/dcsan-shanghai-meetup.jpg)

## WeChaty Infrastructure and DevOps
One of the issues for people running wechaty services is dev ops. Especially if you want to have many bots running. WeChaty itself is nicely docker-ized, but running multiple instances of the container, and orchestrating them is something a few companies are seeing as a common next step. We discussed ways to communicate between different node services.
In WeChaty core there's much discussion on this topic, so if this is a sub project you would like to see happen please let us know below!


## DNode vs. REST APIs
For inter-bot communication, we talked about a few methods and ax4 shared his experience of using DNode. I'll let @ax4 explain:

* Dnode is not a substitute of REST API.  REST API is essential and powerful, in all kinds of programming (cross language and cross platform). Dnode is simple and useful for Javascript stack, and only have several languages support in perl / ruby/ php/ php-sync/java (check https://github.com/substack/dnode#dnode-in-other-languages)
* Dnode is much easier and lightweight to configure in small projects, rather than heavy SOAP for RPC. However, in more complicated projects (for example. 5000 RPC interfaces, with high frequency of calling),  you have to design your own Nameservice, and especially the request handling.
* Since Javascript programming is all about "function"s. Dnode would be helpful, for small team to skip binding their "function"s with REST, and directly deliver the "functions" as RPC to other NodeJS/Browser instance! And, bi-direction call !


These type of services will enable bot-to-bot communications in the future. This is becoming a topic in the US now too, with so many chatbots. For many companies a chatbot maybe the only "API" they have. For example a local pizza shop won't hire a web developer to make their API, but you could query their bot to find out what their hours or prices. I'll talk a bit more about this in the next blog piece.


## Groups Bots and Games
One of the things WeChaty enables is bots in groups, not just 1:1 between a single person and an official account. This opens up a whole number of questions around social and shared experience design and also how to share state between users.

DC built a text adventure game called "Pirates" that can be played within a group. All the users see the results of any players actions, as you are travelling as a "party". It's interesting to watch people playing. One person will try something, then maybe give up, and then someone else will take over. It's almost like passing the steering wheel to your friend to try driving for a bit!

[@hczhcz](https://github.com/hczhcz) told us about bots for playing werewolf, you can read more about that [at his wechaty blog post](2017/07/17/run-your-telegram-bot-with-wechaty.html).

Games have already spent a lot of time thinking about multiplayer and the chat platforms related to games do too, for example [Discord has a rich API for Guild management](https://discordapp.com/developers/docs/resources/guild)


## Chatbots Shanghai Community
The first WeChaty DevCon was just four of us but there are more and more 'bot makers in Shanghai!

[@lijiarui](https://github.com/lijiarui) is a Wechaty core contributor and runs [batorange.com](batorange.com) They manage more than 30k wechat groups and she also keeps the WeChaty community humming along.

@Ax4 and @hcz are two students who both studied in the US and now came back to Shanghai to start their business. They met at a science fair competition!

[@dcsan](https://github.com/dcsan) started RIKAI Labs and we build bots for other companies, as well as running our own "TeacherBot" - an AI chatbot to help Chinese students to learn English.

Please get in touch if you'd like to know about the next Shanghai Wechaty WWDC and be invited!
