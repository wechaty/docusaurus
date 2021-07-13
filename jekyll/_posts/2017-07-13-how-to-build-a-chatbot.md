---
title: "如何编写聊天机器人"
author: lijiarui
categories: tutorial
tags:
  - talk
  - featured
image: /assets/2017/itdakashuo-how-to-build-a-chatbot-7.webp
---

> 摘要:
> Chatbot，聊天机器人，用于和人类用户聊天的电脑程序。它是场交互革命，也是一个多技术融合的平台。桔子互动创始人根据自己的经验告诉大家，> 该如何来编写微信聊天机器人。

## What are chatbots and why the hype

![wechaty](/assets/2017/itdakashuo-how-to-build-a-chatbot-1.webp)

早在 80 年代，大家普遍使用 PC 上网，所有网上交互都是通过 PC 客户端去实现的。随着网速变得越来越快，浏览器开始普及。

智能手机出现以后，人们使用电脑的时间越来越少，手机里安装的 APP 则越来越多。

而现在就到了聊天机器人的时代。所有 bots 都搭载在 message 的平台上，去实现所有 APP 上的服务。

我觉得公众号、直达号和 H5 这些在最开始的时候都是很像 chatbot 的雏形。APP 实在是让用户太焦虑了，大家都希望有一个可以简单迅速找到服务的程序。

因为数据、计算能力和网速都在迅速发展，在 message 这种消息的 APP 上会出现很多有意思的应用和服务，就像 PC 到 Web，APP 到 chatbot 这个过程的转换一样。

我认为 chatbot 是未来，接下来的所有服务可能都是通过 chatbot 去实现的。

![wechaty](/assets/2017/itdakashuo-how-to-build-a-chatbot-2.webp)

Chatbot Magazine 创始人 Matt Schlicht 对 chatbot 的定义是：“A chatbot is a service,powered by rules and sometimes artificial intelligence,that you interact with via a chat interface.”

聊天机器人是一种由规则和一部分人工智能驱动的服务，通过聊天接口进行交互。

现在的交互方式已经发生了新的改变，我们可以通过说话去实现所有的功能。在 Web 和 APP 的时代，人要像计算机一样思考，而 chatbot 则是让计算机像人一样思考，做到“no UI”。

当今用户不喜欢使用 APP，因为不仅用户下载的成本高，APP 的开发和升级成本也非常高，而且只有极少数的 APP 还处于活跃状态。

而 bots 搭建在 message 平台上，无需安装，甚至在网速不佳的情况下也能进入它的服务。Chatbot 处于“no UI”状态。如果只是关注逻辑层面去解决一些场景上的问题，开发的成本不会很高。

## Overview of the bot ecosystem

![wechaty](/assets/2017/itdakashuo-how-to-build-a-chatbot-3.webp)
Facebook Message 已经向开发者开放了，Apple ios Message APPS 也在开放，Slack、Kik、Telegram 和 Skype 都支持相关的接口。

Facebook 收购了 Wit.ai，google 收购了 Api.ai，微软推出了 luis.ai。我认为这三个都是实现一样的功能，就是实行意图识别。

微软还有一个 Bot Framework 去做整个 chat 中控的系统，以及 IBM 推出了 Watson Conversation API。

Facebook Message 上面有超过 10 万个 bots，大概有 10 万个开发者在 Facebook Message 上进行这些 bots 的开发。

有超过 200 万的用户每天在和 chatbot 进行交互。

在其它平台如 Skype、Telegram 上也有上千的 bot。

![wechaty](/assets/2017/itdakashuo-how-to-build-a-chatbot-4.webp)

消费者能够真正接触到的 chatbots 大概分为三类：

第一类是个人助理，帮助用户实现各种服务。

第二类是虚拟客服，根据用户的问题给相应回答。

第三类是提高生产力的工具，可以做一些信息的收集、分发消息等工作。

Chatbot 是一个很大的产业，它不是只有 AI 和 deep learning，不一定要 high tech 去做，也不只有算法。而是要真正去解决一些实际问题。未来它就会像 APP 一样在我们身边，为我们提供非常一些简洁的服务。

![wechaty](/assets/2017/itdakashuo-how-to-build-a-chatbot-5.webp)

Requirement 和正常软件开发相似，然后写一些需求的文档和需求说明。

做软件开发或 APP 的时候会做一些线框图或流程图。Chatbot 是一个“no UI”的体验，所以要写 script，了解如何收集用户的信息、怎样理解用户，并把这些用户的话术整理出来。它就是一个和用户交流的线框图的概念。

接下来要做架构开发，它同样分为前端和后端。前端就是 script，更完整地收集用户信息。收集好了做成一个 action 给到后端，和其它的 Web service 做整合。

在做 chatbot 开发的时候，往往会陷入编码和测试反复的循环之中，因为交互还不是结构化的数据，所以会有点复杂。

Chatbot 里做的测试和一般的 APP 测试不一样。在 APP 里可以简单暴力地做测试，但在 chatbot 里，不同的 message 有不同的需求或限制。做测试的时候要摸清不同 message 平台的区别。

要部署到一个可托管的环境并时刻去监控它，然后做推广。

最后还要做 chatbot 的分析，需要知道每一个会话时长是怎样的、用户对什么最感兴趣。拿到这些数据后再去调研用户的需求，形成一个循环。
![wechaty](/assets/2017/itdakashuo-how-to-build-a-chatbot-6.webp)
Chatbot 主要是从场景入手，更关注的是解决一些问题和创新的点，而不是底层的开发。我认为接下来各种开发者也会从 APP 开发者转换成 chatbot 开发者，只是时间问题。

## itdakashuo-how-to-build-a-chatbot

![wechaty](/assets/2017/itdakashuo-how-to-build-a-chatbot-7.webp)

Wechaty 是一个可以让微信变成机器人的接口，利用这个框架可以把个人微信号变成机器人，能自动回复和提供一些服务。

Wechaty 的实现原理主要是监听网页上的信息，把信息封装然后给开发者调用，开发者发送信息的时候让浏览器去实现这些功能。

Side project 通过代码追踪的方式应对微信网页变化。

Wechaty 的七个基本事件分别是 error、scan、login、logout、message、friend 和 join。

![wechaty](/assets/2017/itdakashuo-how-to-build-a-chatbot-8.webp)

## Related Scene

我们已经实现了微信群的 CRM 管理、通过各种方式邀请好友进群以及做一些多群的直播。

还有一些有意思的东西想和大家分享。

挑选一个最吸引人的头像到微信上。通过用户点赞数分析出哪些头像在男性和女性中分别最受欢迎，帮助用户挑选微信头像。

存储文件。把微信和云盘打通，可以直接把微信上收到的文件转给机器人，让机器人存进云盘里。

把歌词生成一张好看的图片。订机票、车票、酒店等。Github 的通知。把用户关注的动态实时发送到微信群里，让微信群和各种平台的信息做对接，也可以收集群里的消息做分析和训练。

Chatbot 确实是一个可以帮我们解决生活中很多问题的工具，只要是开发者都能去实现它。
