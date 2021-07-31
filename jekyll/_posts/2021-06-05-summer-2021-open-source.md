---
title: "Open Source 大咖说开源--wechaty的开源之路"
author: windmemory
categories: announcement
tags:
  - summer-of-wechaty
  - summer-2021
  - talk
  - news
  - meetup
  - featured
image: /assets/2021/06-summer-2021-open-source/001.webp
---

> 作者:[windmemory](https://github.com/windmemory)

<!-- more -->
![intro](/assets/2021/06-summer-2021-open-source/002.webp)

## 自我介绍

高原：句子互动联合创始人&CTO，开源项目Wechaty commiter，前亚马逊，Expedia工程师，Bot Friday联合发起人。

## Wechaty开源之路直播纪实

{% include iframe.html src="https://www.youtube.com/watch?v=0UMLAA1Pa-s" %}

### Agendas议程

- [0:04:52](https://youtu.be/0UMLAA1Pa-s?t=293) 自我介绍

- [0:05:55](https://youtu.be/0UMLAA1Pa-s?t=353) 什么是wechaty

- [0:12:58](https://youtu.be/0UMLAA1Pa-s?t=778) 如何使用wechaty

- [0:22:18](https://youtu.be/0UMLAA1Pa-s?t=1338) wechaty的开源之路

- [0:39:39](https://youtu.be/0UMLAA1Pa-s?t=2379) 基于wechaty的开源项目

## 1. 什么是Wechaty

- 官方介绍：
A Conversational RPA SDK for Wechat which can help you create a bot in 6 lines of javascript, with cross-platform support including Linux, Windows, Darwin(OSX/Mac) and Docker.
也就是帮助聊天机器人开发者快速搭建聊天机器人的框架，并且支持多个系统平台。
Wechaty的使命：
给聊天机器人的开发者提供一个最好的开源sdk，不断优化sdk，给开发者最好的体验。帮助开发者更多关注于逻辑应用，而不是与平台的底部对接上，只需关乎自己写上层应用的代码就可以了。
开发者们的评价：
腾讯的软件工程师，著名小程序vp框架的作者。在管理社区时用到了wechaty。并评价："Wechaty is a great solution, I believe there would be much more users recognize it."
谷歌工程师，好室友项目的创始人，创建了帮助留学生找房的平台，所有交互在微信群内，基于wechaty搭建了平台，并服务了5000左右的活跃用户。他评价："太好用，好用的想哭"。
Wechaty越来越受欢迎，从2016年的330star到现在的10000+star很难得，因为在GitHub上超过10000star的并不多。开发者遍布全球各地，来自不同的互联网公司：微软、腾讯、谷歌、阿里巴巴、百度等等。Contributor来自各个大厂的开发者，在使用wechaty时为我们贡献了代码，Wechaty已经被854个开源项目引用了，了解到还有许多非开源项目也在使用wechaty，真正使用的数量庞大。

## 2. 怎样使用Wechaty

- 用typescript举例子：

![intro](/assets/2021/06-summer-2021-open-source/003.webp)

- 引入wechaty和二维码的包

![intro](/assets/2021/06-summer-2021-open-source/004.webp)

- 创建新的bot并给他命名，加入：登陆事件，扫码事件（用到二维码的包），message的信息（在bot上收到message的情况）

![intro](/assets/2021/06-summer-2021-open-source/005.webp)

- 六行代码实现聊天机器人

![intro](/assets/2021/06-summer-2021-open-source/006.webp)

- 一个简单的叮咚的机器人：有人说叮，机器人就会说咚

![intro](/assets/2021/06-summer-2021-open-source/007.webp)
大家可以去实现自己想要的任何逻辑，进行不同操作，获取消息后，对消息做不同的指令，做自己想要的逻辑，感兴趣的可以自己下载，随意玩一玩。

## 3. wechaty的开源之路

大家应该知道怎么用了，现在开始讲一讲开源之路上面经历了哪些事情。

Wechaty始于chatbot爱好者：李卓桓，他是一个很懒又聪明的人，在2016年，微信还没有500人的上限，他的微信里有12859个联系人，数百个百人群，有1000+未读消息，而他会写程序会开源，希望自动化处理微信里的消息，过滤不必要的消息，抽取筛选重要信息并处理。

2016年的wechaty:支持微信、Web接入，当时只有300star。

到了2018年，微信网页版限制登录，一大部分用户无法使用，社区出现非网页版接入方案；为了开发者无缝切换方案，运行稳定，提升效率，实施了新的策略，实现方式和代码都不同，对wechaty进行了一次重大的重塑，引入Puppet概念，puppet是自动化测试的框架，相当于一个适配器。

![intro](/assets/2021/06-summer-2021-open-source/009.webp)

绿色部分：为上层，是开发者直接接触到的部分，为不同的类，像刚刚例子中用到的，都是开发者在写业务逻辑时需要频繁调用使用的。
红色部分（puppet）：抽象的概念定义好了与wechaty对接的抽象接口，下面的实现需要按照要求去实现，只要底层实现符合标准，就会无缝的对接到wechaty上面。底层实现会对接到不同的平台上，去做数据的交互，再提交到上层的wechaty上面。
Puppet巨大的好处：不改动任何业务逻辑代码，切换环境变量即可切换底层实现；让开发者无需关注底层接入实现，只关心自己的业务逻辑；社区里不同的底层实现可以无缝交付到开发者手里，为后续的更多IM实现奠定了坚实的基础；就有更多的开发者愿意做底层接入，与上层开发者有更好的配合。

2019年，有趣的wechaty项目开始大量的出现。
微信上的讨论无法在邮件列表中存档，也无法通过永久地址进行访问特定讨论内容，交流讨论内容多基于中文，对国际开发者不友好，阻碍了跨越国界的理解和互动，为了解决以上问题而出现了OSS.CHAT，OSS.CHAT的功能是：当用户在 GitHub 上发布 issue 或者评论 issue 的时候，对应的微信群内会收到消息；群主引导用户将重要信息在 GitHub 的 issue 中进行回复讨论，正常群内闲聊内容在群中讨论；发布的中文issue 会被自动翻译成英文。
大家若感兴趣，加入方式如下：

[Getting Started Tutorial (video)](https://youtu.be/HNksCmm_pvY)

[GitHub Repo](https://github.com/kaiyuanshe/osschat)

[Community Meeting Notes](https://shimo.im/docs/wGHydDxvWGjWKgDK)

2020年，加入 2020 开源软件供应链点亮计划，极大程度的扩展了 Wechaty 支持的 IM 接入数量，多语言版本的 Wechaty，更多非 Javascript 语言的开发者涌入社区Wechaty 支持 Plugin 系统，写一份代码，可以在7个不同的主流平台上运行，只需要切换一下环境变量就可以。

2021年，参加了 Google Season of Docs，加入 2021 开源软件供应链点亮计划，Wechaty 主项目的 Star 数突破一万，网页版重新回归接入wechaty，更多新的有意思的IM的接入推进中。有很多来自全球各地的typewriter帮我们项目来优化我们的文档，目前还在推进中，大概有10个左右的typewriter在写。

终点和目标
我们已经在一定程度上实现了我们的使命，现在的开发者已经可以很大程度上的只关注业务上的实现了，不必关注底层的实现，wechaty不敢说是做的最好的，但从开发者的反馈来看，我们已经是很成功的项目。

## 4. 基于wechaty的开源项目

### 算卦机器人 <https://wechaty.js.org/2020/06/28/build-divination-yibot/>

![intro](/assets/2021/06-summer-2021-open-source/010.webp)

### 诗歌搜索机器人 <https://wechaty.js.org/2020/07/07/wechat-poem-robot/>

![intro](/assets/2021/06-summer-2021-open-source/011.webp)

### 聚会娱乐机器人 <https://wechaty.js.org/2020/06/06/wechaty-game-bot/>

![intro](/assets/2021/06-summer-2021-open-source/012.webp)

### 外卖机器人 <https://wechaty.js.org/2019/12/23/wechaty-north-america-ricepo/>

![intro](/assets/2021/06-summer-2021-open-source/013.webp)

### 中文学习助理 <https://wechaty.js.org/2020/06/19/archyshuo-anki-assistant/>

![intro](/assets/2021/06-summer-2021-open-source/014.webp)

### 奇绩创坛机器人 <https://wechaty.js.org/2020/08/08/qijibot-sales-automation/>

![intro](/assets/2021/06-summer-2021-open-source/015.webp)

### 工作日报机器人 <https://wechaty.js.org/2020/07/11/wechaty-daily-report/>

![intro](/assets/2021/06-summer-2021-open-source/016.webp)

若感兴趣，还有更多：<https://wechaty.js.org/blog/>

最后，欢迎大家加入wechaty的社区，项目、文档、博客的地址。

项目：<https://github.com/wechaty/wechaty>
文档：<https://wechaty.js.org/v/zh/>
博客：<https://wechaty.github.io/>

## 欢迎正在阅读的你参与其中

如果有人有兴趣一起加入，一起来在企业级的scrm软件上面为营销过程提效的话，欢迎大家联系我，我们一起聊一聊能否一起合作。
![intro](/assets/2021/06-summer-2021-open-source/008.webp)
