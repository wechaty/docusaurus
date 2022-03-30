---
title: "Wechaty community meetup: PadLocal Office Hour, @padlocal, Feb 5th, 2022"
author: binsee
categories: talk
tags:
  - puppet-padlocal
  - ipad
  - meetup
image: your_teaser_image_path
---

2月5日，周六，社区在线上举办了一个 [Padlocal](https://github.com/wechaty/puppet-padlocal) 专题的视频会议，由 Padlocal 的作者 `@Haoda` 讲解了 Padlocal 的起源与技术架构，并对 Padlocal 的一些 issues 进行了回复。

> [Padlocal](https://github.com/wechaty/puppet-padlocal) 是 Wechaty 社区中一个非常重要且成功的商业化 puppet，它提供了稳定接入个人微信的方案，是个非常棒的项目。

**本篇文章是基于视频会议回放整理出来的内容**，视频会议回放如下：

{% include iframe.html src="https://www.youtube.com/watch?v=2tYcrFaWTZQ" %}

## 与会者介绍

[@huan](https://github.com/huan), [Huan LI](https://wechaty.js.org/contributors/huan), Creator of Wechaty, Tencent TVP of Chatbot

[@lijiarui](https://github.com/lijiarui): Full stack developer, serial entrepreneur, Founder & CEO of JuziBot

[@Haoda](https://github.com/padlocal), Author of PadLocal

[@Osindex](https://github.com/osindex), Contributor of Wechaty, A lazy full stack developer. 使用 wechaty 开发了 [谁是卧底小游戏](https://wechaty.js.org/2020/06/06/wechaty-game-bot/)

[@Hongye](), user of Wechaty

[@Snow Wang](), Contributor of Python Wechaty

[@Yi Zhihang](), Contributor of Wechaty

[Su Chang](), Contributor of Wechaty, 句子互动高级工程师

[KDB](), user of Wechaty

[Liu Siyao](), Contributor of Wechaty

## 个人分享环节

### 李佳芮

近期关注：

- WhatsApp 的 puppet

### 卓桓

近期关注：

- 特别努力的把 `Friday bot` 推动到 DDD 领域 (`Domain Driven Design` 即 `领域驱动设计`)，它最关键的是把商业业务逻辑和代码划分的比较清楚。
- 把 wechaty 向消息驱动方向做些尝试。使用的模式是 `CQRS` 即 `读写分离`，可见 [Friday bot 的 pr #112] (https://github.com/wechaty/friday/pull/112)

### 好大

现在日常主要是在维护 Padlocal 的状况。

- 虽然大家能在 Github 上看到 [Padlocal](https://github.com/wechaty/puppet-padlocal) 几个月没更新了，但其实在背后的代码都在维护着。大家在使用中，没有遇到什么状况，这就是好事。
- 今天主要是回答大家使用中的一些疑惑，分享关于 wechaty、puppet、padlocal 的一些实现的东西。例如逆向、微信协议相关的内容，有疑问都可以提问。

### Osindex

一个默默无闻的 Contributor。

- 想了解 @Haoda 对于 Padlocal 协议的一些想法和过程。一开始怎么想到逆向解析协议，使用了哪些工具、资源，如何实现为 puppet 的。

### Hongye

现在在英国读 Master of Science in Artificial Intelligence，使用偏功能性，在探索使用 wechaty 的落地工作。

### Snow Wang

Padlocal 的受益者，通过使用 padlocal 获得了一些持续收益。

使用 Padlocal 向许多个群内发送关于美团 CPS（`Cost Per Sales` 即 按销售量计费） 广告的小程序，每个月能入账几千块钱，天天躺赚。

项目实际运作中，感受到 Padlocal **特别稳定**，几个月可能才掉一次。

### Yi Zhihang

借助 Padlocal 编写过一个小项目([基于Wechaty的个人助理，++生活效率&&有效对抗内卷](https://wechaty.js.org/2022/01/16/wechaty-assistant-bot-opensource/))，作为普通用户来参加会议。

### Su Chang

参与过很多 puppet 的编写，近期在做企业微信和 WhatsApp 相关的开发。

> 之前在社区中的马甲叫做 `百年`。

### KDB

近期和 @Hongye 在研究中接触到 Wechaty，抱着学习的心态来参会。

### Liu Siyao

很早就接触到聊天机器人，在微软夏令营接触到QQ机器人，后来做微信机器人。

因为发现在微软用的 LUIS 和做 QQ 机器人时用的工具函数，在 Wechaty 这边没有，用起来不方便，就贡献了一个插件。

当前在字节跳动做机器人平台相关的工程研发，同时也在上美国那边一个 Master 的网课。

## Padlocal FAQ Meetup

主要是介绍 Padlocal 底层运作的一些机制，来帮助用户来理解和解决开发中的问题。

https://youtu.be/2tYcrFaWTZQ?t=1975

主要讲三块：

- Reverse Engineering
- Inside Wechaty
- Padlocal Design (Robust and high efficient architecture)

另外就是**关于安全性**的一些问题。

### Padlocal 的缘起

之前的公司是做社群分销的工作，而微信是很重要的一个渠道，就是要做一个机器人这样的东西。

当时先从网上搜到的就是 Wechaty 协议，用了一些 Wechaty 的 puppet，也付费用了一些第三方的接入。但是第三方的多少存在一些问题，主要是两方面：

1. 第三方不是很稳定，比如隔一段时间需要重新登陆，就很头疼，想着是否有其他方式去做。
2. 社区里的 puppet 有一定生命周期，当时用了半年左右，后来又换了其他 puppet。

作为一个商业项目，希望最好还是有一个稳定的，而且自己也需要懂一些这方面的知识。但当时也没想自己做一套完整实现，从头写一个完整的puppet这样，因为也估计到里边的困难和工作量会非常大，只是想了解里边的东西，来协助我们去解决业务上的问题。后来摊子铺开了，越来越大，慢慢的就把协议做了出来，又实现了 wechaty 的 puppet。做出来之后，就想到这个东西给大家用，是不是更好，就到了现在的状态。

### 逆向工程

Padlocal 是模拟 Ipad 的协议，最开始是把协议弄清楚，就要掌握逆向工程相关的知识。

用的比较多的工具：

- `IDA` 逆向工程工具，很贵，最后还是付费了
- `WireShark` 抓包工具
- `Checkra1n` IOS 上越狱的工具
- `LLDB` 调试工具
- `voltron` 调试工具
- `Cydia Substrate` 反编译工具。用来对程序内部进行 hook，分析协议会比较方便一些
- `theos` 反编译工具。用来对程序内部进行 hook，分析协议会比较方便一些

#### 代码混淆

微信对内部比较深的代码做了混淆，来保护它的代码。如果你想去解决这个问题，我觉得需要一些耐心，也需要这方面相关的积累。

当前主流代码混淆有以下三种方式：

- `Control Flow Flattening` 控制流平坦化
- `Bogus Control Flow` 虚假控制流，插入乱序的控制流
- `Instructions Substitution` 指令替换

我感觉微信里边很像 [o-llvm](http://o-llvm.org) 的理念，甚至我猜测有可能他们的混淆工具是在 `o-llvm` 的基础上改了些东西，因为它混淆出的代码和 o-llvm 的理念很相似。

##### 控制流平坦化

视频时间点： https://youtu.be/2tYcrFaWTZQ?t=2372

关于控制流平坦化，有一篇很好的论文，提到了这个，对我的帮助非常大。感兴趣的同学可以去看看：

> OBFUSCATING C++ PROGRAMS VIA CONTROL FLOW FLATTENING
> Annales Univ. Sci. Budapest., Sect. Comp. 30 (2009) 3-19
> http://ac.inf.elte.hu/Vol_030_2009/003.pdf



- TODO: https://youtu.be/2tYcrFaWTZQ?t=2388
