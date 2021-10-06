---
title: "Wechaty 走进北大开源实验班"
author: limingth
categories: event
tags:
  - meetup
  - lecture
  - news
image: /assets/2019/wechaty-pku-lecture/pku-liming2.webp
---

## 内容纲要

* Wechaty整体架构  
* Wechaty开源社区治理  
* Wechaty社区生态治理  
* Wechaty应用案例分享  

![北大讲座现场](/assets/2019/wechaty-pku-lecture/wechaty-pku-lecture.webp)

2019.10.18，受[北京大学软件与微电子学院](http://www.ss.pku.edu.cn/)张齐勋老师邀请，经华为云庄表伟的介绍，我代表Wechaty开源项目，给来自北大软院实验班的120多位同学，完整系统地介绍了Wechaty项目，并分享了Wechaty应用案例-[毛豆课堂小助手](/assets/2019/wechaty-pku-lecture/wechaty-pku-mdktxzs.webp)。

![李明北大讲座](/assets/2019/wechaty-pku-lecture/pku-liming.webp)

这一批学生大部分都是95年之后才出生，他们的成长阶段，本身就是Linux开源文化通过互联网传入中国，到萌芽传播再到发展壮大，最后做出我们自己的开源项目的一个历史过程。

![北大讲座现场2](/assets/2019/wechaty-pku-lecture/wechaty-pku-lecture2.webp)

下面，我来重点介绍一下在讲座分享中比较有亮点的几张PPT。

## Wechaty整体架构

Wechaty是一个典型的三层架构，最上层提供接口，中间层进行抽象，最下层对接各种不同的实现，这和Linux的系统调用层，fs文件系统层，driver层的逻辑和理念很接近，这样对上层的应用可以尽量保持接口一致和稳定性，便于构建各种chatbot实现；对下层可以接入不同的微信通信协议，例如puppeteer对应微信web协议，padpro对应微信pad协议。

![Wechaty整体架构](/assets/2019/wechaty-pku-lecture/wechaty-arch.webp)

## Wechaty开源社区治理

Wechaty的开源社区，同样遵循了众多开源社区的组织形式，包括了PMC（社区管理团队），CDG（社区开发者群体），OC（组织者委员会）。其中人数最多的是开发者群体，按照对项目的贡献程度和话语权，从高到低分为了4个等级：维护者Maintainer，代码提交者Commiter，代码贡献者Contributor，社区成员Community Member。大部分参与项目贡献代码的开发者，都是通过fork-pr-merge的流程来对项目作出自己的贡献。

![Wechaty社区架构](/assets/2019/wechaty-pku-lecture/wechaty-community.webp)。

## Wechaty社区生态治理

社区不是只有线上的代码提交，还包括每周五的Bot Friday线下活动。每次活动的人数大概在10-20左右，小规模的参会人数确保了大部分的人都能有发言和输出的机会，这也体现了社区管理者更重视质量而不是数量的治理理念。

![Wechaty Bot Friday](/assets/2019/wechaty-pku-lecture/wechaty-bot-friday.webp)。

下面是一系列的数字，对Wechaty项目做一个总结！

![Wechaty Summary](/assets/2019/wechaty-pku-lecture/wechaty-summary.webp)

## Wechaty应用案例分享

毛豆课堂项目是为少儿教育机构和老师提供一个全线上可实时互动的教学平台，借助AI人工智能进行教学辅助和学习反馈，并通过课程智能推荐引擎为家长提供最可信赖和适合孩子的课程。在这个项目中，有一个部分是帮助老师进行创建课程提醒的微信机器人，就是毛豆课堂小助手。

![毛豆课堂演示](/assets/2019/maodou-ketang-demo.webp)

通过自然语言给毛豆课堂小助手发一条消息，就可以自动提取出其中的时间、地点和主题，帮助老师创建课程提醒，并给老师推送相关课程小程序。基本流程如下图所示：

![毛豆课堂小助手流程](/assets/2019/wechaty-pku-lecture/xzs-workflow.webp)。

这个项目的代码，目前就在 [Wechaty Examples](https://github.com/wechaty/wechaty-getting-started/tree/master/examples/third-party/maodou) 里面，如果对此有兴趣也欢迎和我联系。（加我微信号 limingth）

推荐阅读和这个项目有关的三篇博客：

* [实现支持微信小程序的聊天机器人](https://www.bot5.ml/talks/wechaty-send-miniprogram/)

* [The Bad Part of My Chatbot Experience](https://www.bot5.ml/talks/maodou-bot-limingth/)

* [如何用 padpro 发送微信小程序](https://wechaty.github.io/send-miniprogram-using-padpro/)

## 致谢

* **[lijiarui](https://github.com/lijiarui)** 的PPT。这次讲座所用的ppt，绝大部分来自于李佳芮的贡献。如果不是那么精美的Slides已经完美总结了项目的方方面面，我很难有勇气走上讲台去做这个lecture。

* 感谢北大张齐勋老师提供这么好的一个机会，能够让我们给新一代的大学生研究生来介绍来自开源社区的最新进展。会后有100多位同学加入了Wechaty-北大开源技术交流群，这一批新鲜血液相信会让Wechaty项目焕发出新的生机！

> 作者: [limingth](https://github.com/limingth) 毛豆网
