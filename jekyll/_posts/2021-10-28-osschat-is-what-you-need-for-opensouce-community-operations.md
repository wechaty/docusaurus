---
title: "微信机器人上线自动回复，OSSChat 助力开源社区运营"
author: hailiang-wang
categories:
  - article
  - project
tags:
  - osschat
  - chatopera
  - github
  - utility
image: /assets/2021/10-osschat-is-what-you-need-for-opensouce-community-operations/cover.webp
---

大家好，我是[春松客服开源社区首席运营](http://github.com/chatopera/cskefu)，我们常常发现，微信群，尤其是人多的时候，超过 30 人，就变成了不能“谈事情”的地方，**很多想法匆匆而过**。一些是非常值得追踪下去的想法，背后有一个很有必要做的任务，可是微信群，或者在微信上，我们不专注。

## 运营人员苦不堪言

对于以上，我们常常的解决思路就是：运营的人，一次次回答同样的问题；运营的人，叮嘱或者亲自，在 GitHub 上建立一个 Issue 工单。把这个事情记录下来，GitHub 或者其它什么地方，有时候，我们甚至会建立一个新群。然而问题还是存在，群里的有价值的对话数据，没有放在一个公开的地方，能被搜索到的地方。**用户不喜欢联系你，用户喜欢自助式的服务**。假如，用户能在搜索引擎上，或者 GitHub Issue 上直接搜索到，会是一个多么酷的事情。简而言之，微信群运营，苦不堪言。每天回答的重复的问题，浪费了我们多少时间？

### 一次次重复回答

在微信群人多的时候，也变成了一个效率极低的地方，比如每个新人进群，总会问之前重复的问题。

### 能开个工单说吗

另外一个问题是，**用户不喜欢开工单**。我们过着快节奏的生活，每个事情都在匆匆之间，Everything is in a rush. 并不是每个事情都值得开工单，有的时候就是闲聊，而当一个任务浮现，我们就需要一个工单，一个有状态有 Owner 的记录，可以流转、委派、跟踪、评论等等。工单意义重大，工单是一个承诺，工单是一个明确的需要输出的工作清单。我们可以容许工单开始写的不怎么样，但随后，我们就持续的跟进，这是工单的奇妙之处。以前我用 Wunderlist，现在使用微软 To-do，有了一个记录，执行力一下子就提升了。但是，在微信群，我们聊的热火朝天，口干舌燥，待到要创建一个任务，就突然艰巨了起来。

![osschat-is-what-you-need 6](/assets/2021/10-osschat-is-what-you-need-for-opensouce-community-operations/screenshot-6.webp)

从打开 GitHub Issue 到粘贴对话，到保存。动作很简单，但是只有少数人做这一步。相信我，只要开出工单，事情就会得到解决，甚至这个工单，后来发现，是一项不值得做的工作，那么这也是一项收获。**一方面，有了工单，对我们工作很有好处；一方面，很少有人去开工单。** 我们有一些惰性，我们甚至从文化上分析这个事情的合理性，多么荒谬。

你告诉我一个困难的工作，我给你开个工单，这个工作会解决，至少会有起色。你在微信群里告诉我一个事情，然后明天和下周，你得多提醒我。**人的大脑，有它工作的原理。工单帮助我们建立一种信守承诺的文化，工单帮助大家有更多信任。**

**提升执行力的秘密是，做出第一步**：从微信的讨论出发，然后建立出工单，开始执行。

## 数据隐藏着价值

另外一项，非常非常重要的事情，非常重要！**数据隐藏着你项目成功的秘密**，大家在微信里每天聊，你知道他们关注什么吗？你知道现在你应该怎么安排任务的优先级吗？

用户常问的问题，我们整理成 FAQs 常见问题列表，用户常要做的流程，我们能不能用聊天机器人多轮对话解决？用户关心的事情，我们查看关键词。

这些都依赖于数据，而这些数据在微信群里，这些数据弄好了，你的项目可以在 90 天内活跃 10 倍！我没有过度承诺的习惯 :-)，我说的是**聊天数据的分析，可以帮助你真正做到以“客户”为中心**。

## 微信不创新

8 年前，扎克伯克说经常的看微信，学习微信的创新，看看人家这劲头，汉语现在是呱呱流利，而现在，你知道吗？ Facebook Messenger 的创新，已经领先了微信一个产品世代！ Messenger 对 AR，Chatbot 等 Metaverse 元宇宙级别的场景做到了相当不错的体验。**微信不创新**，如果你体验了 Messenger 对 Chatbot 的交互的支持，你会和我有同感。

![osschat-is-what-you-need 1](/assets/2021/10-osschat-is-what-you-need-for-opensouce-community-operations/screenshot-1.webp)

**我们就像微信奴隶一样，将数据给了微信，微信挖掘这些价值来榨干我们。**

## 英雄降临

事情不会这样结束，历史的车轮滚滚向前，终于有一天，一些人觉醒了：**拿回我们的数据，我们要创新！**

![osschat-is-what-you-need 2](/assets/2021/10-osschat-is-what-you-need-for-opensouce-community-operations/screenshot-2.webp)

Wechaty，非常酷，使用 RPA 将微信变成了可编程微信，使用代码管理你的联系人、消息和微信群，对，你的，都是你的，中间那个微信是你的。然后是 Chatopera，非常酷，是定制机器人的大脑，做智能问答和对话流程。这样，我们就可以和 GitHub 集成了，让微信群和 Github 工单能自由的同步。

```plain
我有一个梦想，有一天，我在微信群里的聊天的数据，我可以分析出大家常聊什么，这样我可以做知识库机器人自动回答；

我有一个梦想，有一天，GitHub Issue 的创建和评论的事件，我可以在微信群自动的得到通知；

我有一个梦想，有一天，我只消说，“以上创建工单”，就可以将微信群的聊天记录自动创建为 GitHub Issue；

我有一个梦想，有一天，我可以和她一起 ...
```

好的，继续说工作的事情，这个梦想，可以实现。非常的酷的想法，有点激动，这些目标可以使用 **Wechaty + Chatopera + 微信 + GitHub** 实现，但是工作量比较大，此处省略十万字。

![osschat-is-what-you-need 3](/assets/2021/10-osschat-is-what-you-need-for-opensouce-community-operations/screenshot-3.webp)

在二十多位贡献者的参与下，这个想法终于实现了。

![osschat-is-what-you-need 4](/assets/2021/10-osschat-is-what-you-need-for-opensouce-community-operations/screenshot-4.webp)

[https://github.com/kaiyuanshe/osschat](https://github.com/kaiyuanshe/osschat)

## 2021-10-14，OSSChat 自动回复功能上线

自 2020 年 3 月，OSSChat 云服务上线，但是直到 2021 年 10 月 14 日，OSSChat 的自动回复功能，才做好，因为工作量确实比较大。现在我们只需要在微信群里说：以上五条开工单，那么对应的 GitHub Issue 就会开出来发群里。

![osschat-is-what-you-need 5](/assets/2021/10-osschat-is-what-you-need-for-opensouce-community-operations/screenshot-5.webp)

这是我们在春松客服开发者群里的一个对话，一句话，GitHub Issue 就创建了，香不香？激动不激动？羡慕不羡慕？

**一个开工单的过程节省 5 分钟，并最终让执行力拔高一个层次。** 一旦一个复杂流程的第一步启动，那么流程有它自己的执行力。

## 我要使用 OSSChat

* 接受托管

云服务接入，只需要联系登记和授权。

[How to use osschat](https://github.com/kaiyuanshe/osschat/wiki/How-to-use-osschat)

* 不托管，自己打理

自己来，运行服务并配置。工作量是接受托管的 20 倍！欢迎来折腾！

参考 [README.md 文档](https://github.com/kaiyuanshe/osschat) [https://github.com/kaiyuanshe/osschat](https://github.com/kaiyuanshe/osschat)

## 发现更多

微信机器人上线自动回复，OSSChat 助力开源社区运营。在 2021 年 10 月 14 日晚，OSSChat 项目组做了一次在线分享，为已经上线了 OSSChat 的用户第一次介绍自动开 Issue 等功能。

For visiters come from China who can not visit YouTube.com, this video is also hosted on bilibili.com Video:

* [微信机器人上线自动回复，OSSChat 助力开源社区运营 \| Wechaty @ bilibili](https://www.bilibili.com/video/BV1PQ4y1S7iZ)

{% include iframe.html src="https://youtu.be/qWxDnSaa29s" %}

![osschat-is-what-you-need 7](/assets/2021/10-osschat-is-what-you-need-for-opensouce-community-operations/screenshot-7.webp)
