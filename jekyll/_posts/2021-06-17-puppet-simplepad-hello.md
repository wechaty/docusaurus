---
title: "New Wechaty Puppet Service: SimplePad"
author: simplepad
image: /assets/2021/06-puppet-simplepad-hello/logo.webp
categories: announcement
tags:
  - puppet
  - featured
  - simplepad
  - puppet-provider
  - puppet-service
---
大家好,我是[SimplePad](https://github.com/chatrbot/wechaty-puppet-simplepad)的开发者,也是之前[小丸子](https://github.com/chatrbot/chatbot)项目的开发者,群里的"银河飞车".

之前也在我们Wechaty群内宣传(~~搔扰~~)过几次大家,可能有些同学已经见过或者使用过了.

`Wechaty-Puppet`我们大家已经很熟悉了,得益于Wechaty精巧合理的接口设计和高度抽象的模型,让我们在使用Puppet的时候得心应手的同时又能十分方便的在各种Puppet中切换自如.

在我们享受SDK这种模式给我带来的便捷的同时,可能偶尔也会因此受到一些困扰:

> 1. 依赖冗余.例如你的项目里只是想用Bot发送一些简单的文本内容,但是不得不引入整个SDK生态来达到这一个目的.
> 2. 使用受限.得益于社区的发展,现在除了官方Node版本的Wecahty外,已经有了`python-wechaty`和`go-wechaty`等其他语言项目.但如果你使用的是其他语言,就只能选择自己开发一个对应语言的Wechaty或者学习一门已有Wechaty实现的语言.
> 3. 调试不易.如果我们使用的SDK中出现问题,只能研究其中的源码实现来做本地临时修正,或者提交一份PR,更或者只能联系(等待)开发者修复.这样会影响我们的开发进度,增加额外的排错时间.
> 4. 功能冗余.比如你的机器人只想发送一些简单的文本信息,但是必须购买完整功能的Token,这在我看来并不是最佳的使用体验.

好在Wechaty社区也考虑到了这些问题,并且提供了一个正在开发的方案[WechatyOpenAPI](https://github.com/wechaty/openapi),提供一个网关来对接目前的`Wechaty-Grpc-Service`,而对外提供一整套Restful形式的Http接口来解决我上面说的问题.

我说这么多可能大家心里会想:那这些和SimplePad又有什么关系?

我想说的是,有关系而且关系还挺大.

在开发SimplePad之前我也调查了目前市场上的Wechaty方案,意识到了前面说的几个痛点,为了解决上面说的几个问题,已经先开发了一套Http协议调用形式的协议系统,而SimplePad反而是之后才进行开发的.所以自然而然,整个SimplePad的API部分也是完全使用了这套系统的接口.对于我们互联网开发工作者而言,Http是使用最多也是最熟悉的协议方案,协议清晰易懂,调试方便,这也是SimplePad名称的由来和核心意义.希望给大家提供一个方便使用,调试简单的Puppet.开发者在拥有Token后可以选择使用Puppet,也可以选择直接调用Http协议的形式来实现相应的操作.这里我为大家画了一个简单的流程图.
![process](/assets/2021/06-puppet-simplepad-hello/process.webp)

所以对于上面说的几个问题,SimplePad提供的方案更为灵活.

- 没有第三方库的依赖
- 也没有开发语言的限制
- 调试更为简单直观,可以使用开发者常用的Postman,也可以使用我在后台提供的API调试工具
- 按需使用(为了保证基本使用流程通畅,会有一些必须选择的接口).开发者可以自由选择需要的接口,按需付费.
- 提供一个完善功能的后台,可以方便调试接口和管理自己的Token.

以上就是SimplePad开发的初衷和由来,以及我在解决目前社区痛点问题上的思路和一些小小的优势,更深入的使用和体验欢迎大家来探索.

也期望大家能够和我积极[交流反馈](https://github.com/chatrbot/wechaty-puppet-simplepad/issues),我会尽最大努力让开发者们获得最优的使用体验.
