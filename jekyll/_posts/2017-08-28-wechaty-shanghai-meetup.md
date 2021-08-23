---
title: "Shanghai WWDC - Wechaty Worldwide Developers Conference"
author: dcsan
categories: event
tags:
  - meetup
  - news
image: /assets/2017/dcsan-shanghai-meetup.jpg
---

Most of the Wechaty core team are in Beijing, but there are a few of us here in Shanghai too.
[@lijiarui](https://github.com/lijiarui) was in town for a few days and so we had a small get together!

![shanghai wechaty peeps](/assets/2017/dcsan-shanghai-meetup.jpg)

We talked devops, chatbot games, NLP and more!

## Wechaty Infrastructure and DevOps

One of the issues for people running wechaty services is dev ops. Especially if you want to have many bots running. Wechaty itself is nicely docker-ized, but running multiple instances of the container, and orchestrating them is something a few companies are seeing as a common next step. We discussed ways to communicate between different node services.
In Wechaty core there's much discussion on this topic, so if this is a sub project you would like to see happen please let us know below!

## DNode vs. REST APIs

For inter-bot communication, we talked about a few methods and ax4 shared his experience of using DNode. I'll let @ax4 explain:

* Dnode is not a substitute of REST API.  REST API is essential and powerful, in all kinds of programming (cross language and cross platform). Dnode is simple and useful for Javascript stack, and only have several languages support in perl / ruby/ php/ php-sync/java (check <https://github.com/substack/dnode#dnode-in-other-languages>)
* Dnode is much easier and lightweight to configure in small projects, rather than heavy SOAP for RPC. However, in more complicated projects (for example. 5000 RPC interfaces, with high frequency of calling),  you have to design your own Nameservice, and especially the request handling.
* Since Javascript programming is all about "function"s. Dnode would be helpful, for small team to skip binding their "function"s with REST, and directly deliver the "functions" as RPC to other NodeJS/Browser instance! And, bi-direction call !

These type of services will enable bot-to-bot communications in the future. This is becoming a topic in the US now too, with so many chatbots. For many companies a chatbot maybe the only "API" they have. For example a local pizza shop won't hire a web developer to make their API, but you could 'query' their chatbot to find out their hours or prices.

## Chinese NLP libraries

No bot developers meetup would be complete without a discussion of NLP libraries. We talked about the various low-level tools such as segmenters and POS taggers. @ax4 mentioned [bosonNLP](http://www.bosonnlp.com/) but Jieba and SnowNLP seem like good options too. Personally I have had best quality from the Stanford NLP libraries but it's a hassle to maintain a Java stack so we mostly use Jieba now.
At a high level we compared [yige](http://www.yige.ai/) and [API.ai](https://api.ai) which seems to be flaky to connect to and use since they were acquired by Google and started moving to Google infrastructure. Well, that opens up the field for more [local companies](http://www.emotibot.com/)!

## Groups Bots and Games

One of the things Wechaty enables is bots in groups, not just 1:1 between a single person and an official account. This opens up a whole number of design questions shared experiences, and technical decisions like how to share state between users.

DC built a text adventure game called "Pirates" that can be played within a group. All the users see the results of any players actions, as you are travelling as a "party". It's interesting to watch people playing. One person will try something, then maybe give up, and then someone else will take over. It's almost like passing the steering wheel to your friend to try driving for a bit! On the other hand, scoring was implemented per user.

[@hczhcz](https://github.com/hczhcz) told us about bots for playing werewolf, you can read more about that [at his wechaty blog post](/2017/07/17/run-your-telegram-bot-with-wechaty.html).

Games have already spent a lot of time thinking about multiplayer and the chat platforms related to games do too, for example [Discord has a rich API for Guild management](https://discordapp.com/contributors/docs/resources/guild)

There is much that Wechaty can provide on the server APIs, but client modifications need to be added by the platform. For example Slack has the concept of a "

## Chatbots Shanghai Community

The first Wechaty DevCon was just four of us but there are more and more 'bot makers in Shanghai!

[@lijiarui](https://github.com/lijiarui) is a Wechaty core contributor and runs [batorange.com](http://batorange.com/) They manage more than 30k wechat groups and she also keeps the Wechaty community humming along.

@Ax4 and [@hcz](https://github.com/hczhcz) are two young ["sea turtles"](http://www.newsweek.com/chinese-sea-turtles-return-home-77009) who both studied in the US and now came back to Shanghai to start their businesses. They met at a science fair competition. @ax4 is working on a startup that analyzes official Wechat posts, and uses NLP to turn the unstructured data into searchable and useful structured data. The company name isn't decided yet :)

[@dcsan](https://github.com/dcsan) started RIKAI Labs and we build bots for other companies, as well as running our own "TeacherBot" - an AI chatbot to help Chinese students to learn English.

Please get in touch if you'd like to know about the next Shanghai Wechaty WWDC and be invited!

## Join Us

Wechaty is used in many ChatBot projects by hundreds of developers. If you want to talk with other developers, just scan the following QR Code in WeChat with secret code wechaty, join our Wechaty Developers' Home now.

![qrcode](https://wechaty.github.io/wechaty/images/bot-qr-code.png)

Scan now, because other Wechaty developers want to talk with you too! (secret code: wechaty)

> Author: [@dcsan](https://github.com/dcsan), making Chatbots at [RIKAI Labs](http://RIK.ai)
