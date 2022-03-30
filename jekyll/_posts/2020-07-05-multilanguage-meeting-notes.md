---
title: "Multi-language Wechaty Meeting: Mocking & Code Quality"
author: wj-mcat
categories: event
tags:
  - news
  - meeting
  - talk
  - featured
image: /assets/2020/meeting-notes/07-05-head-picture.webp
---

## 漫长的会议

昨晚（7.5）的会议开了接近三个小时，即使如此，大家热情依然饱满，几乎忘却了时间，全身心投入到技术主题讨论中。满载而归的我必须要发一篇博客来分享一下昨晚的成果。

昨晚会议围绕 Mock & Test & Restful Api 这三个主题展开，并进行了深入的讨论，详细的会议议程大家可转到[google doc](https://docs.google.com/document/d/1fVCk8qRYc4RKGMf2UY5HOe07hEhPUOpGC34v88GEFJg/edit#heading=h.85djedyd54di)上面查看。

接下来我将一一介绍各位参与者分享的内容，如果想要观看整个会议的过程，可转移到[油管](https://www.youtube.com/watch?v=qWkv0F_pluQ)观看。

## Mock Is required for wechaty

分享者：[wj-Mcat 吴京京](https://www.github.com/wj-Mcat/)

![mock-is-required-for-wechaty](/assets/2020/meeting-notes/07-05-mock-is-required.webp)

`Mocker`在多语言`wechaty`中占据着非常重要的地位，是`Wechaty`和单元测试的桥梁，能够创建一个测试虚拟环境，动态创建用户，房间，模拟登录注销等事件，并同时将一系列的数据流传抛至`wechaty`，能够在一定程度上实现自动化测试的工作。

![mock-is-required-for-wechaty](/assets/2020/meeting-notes/07-05-mock-server-can-test-more.webp)

`mock-server`是一个`*-wechaty-puppet-service`连接的对象，可以看作是`puppet-server`，我们可以在不改变任何代码的情况下完成测试的流程，并且这整个流程是非常完整的：`language-wechaty` + `language-wechaty-puppet-service`。也就是每次测试是同时测试了`language-wechaty`和`language-wechaty-puppet-service` 这两个模块。

![api](/assets/2020/meeting-notes/07-05-hook-restful-api.webp)

- 将`wechaty`中所有的事件和消息发送和获取都转化成api
- 根据restful api，可创建web-bot
- web-bot依然可使用指定插件
- 还可存在插件商店这个概念

## Introducing the wechaty-puppet-mock & the new Mocker

分享者：[Huan 李卓桓](https://github.com/huan)

![mocker](/assets/2020/meeting-notes/07-05-mocker.webp)

- 能够模拟登录注销等微信操作事件
- 模拟指定登录用户
- 随机创建用户和群组
- 模拟消息发送

![template](/assets/2020/meeting-notes/07-05-puppet-mock-template.webp)

- 可以用来测试`wechaty`框架，同时大面积覆盖功能函数
- 可以作为一个新的`puppet`实现类的模板

## Python Wechaty Web

分享者：[fish-ball 黄文超](https://github.com/fish-ball)

![function](/assets/2020/meeting-notes/07-05-python-wechaty-web-functions.webp)

[文超](https://github.com/fish-ball)分享了关于`web-bot`的概念和设计，通过将`wechaty`中不同的操作转化成`restful api`从而创建`web-bot`。

![asyncio](/assets/2020/meeting-notes/07-05-python-wechaty-web-asyncio.webp)

以上就是创建示例一个`python-wechaty` + `restful api`最小可行性代码。

![python](/assets/2020/meeting-notes/07-05-python-wechaty-web-bot.webp)

![python](/assets/2020/meeting-notes/07-05-python-wechaty-restful-api.webp)

![python](/assets/2020/meeting-notes/07-05-python-wechaty-plugin-page.webp)

## How to use ts-wechaty plugin in multi-language-wechaty

分享者：[Huan 李卓桓](https://github.com/huan)

![plugin](/assets/2020/meeting-notes/07-05-wechaty-plugin-in-server.webp)

为了让多语言`wechaty`使用`typescript-wechaty`里面的插件，可以将`Plugin`移至`puppet-server`端，那这样`Language-wechaty`只需要添加指定的配置参数即可调用插件。

## How to improve stability of puppet implementation

分享者：[Gao Yuan 高原](https://github.com/windmemory)

句子互动的CTO，给我们分享了很多有价值的实践经验，多方面多角度讲述了如何提升`wechaty`稳定性方面的方法。

![gaoyuan](/assets/2020/meeting-notes/07-05-gao-yuan-agenda.webp)

以上为此次分享的大纲。

![gaoyuan](/assets/2020/meeting-notes/07-05-why-puppet-is-not-stable.webp)

![gaoyuan](/assets/2020/meeting-notes/07-05-gao-yuan-how-to-define-stable.webp)

![gaoyuan](/assets/2020/meeting-notes/07-05-how-to-make-it-stable.webp)

![gaoyuan](/assets/2020/meeting-notes/07-05-the-target-of-test.webp)

![gaoyuan](/assets/2020/meeting-notes/07-05-user-test.webp)

## Some think about the plugin

分享者：[dingdayu 丁大雨](https://github.com/dingdayu)

![dingdayu](/assets/2020/meeting-notes/07-05-xiaoyu-some-experience.webp)
![dingdayu](/assets/2020/meeting-notes/07-05-xiaoyu-some-think.webp)
![dingdayu](/assets/2020/meeting-notes/07-05-xiaoyu-some-thinking.webp)
![dingdayu](/assets/2020/meeting-notes/07-05-xiaoyu-some-thinking-01.webp)
![dingdayu](/assets/2020/meeting-notes/07-05-xiaoyu-some-thinking-02.webp)

## 合照

![pic](/assets/2020/meeting-notes/07-05-final-smile-picture.webp)

这次会议讨论的主题虽然不多，可针对于具体的解决方案有非常深入的讨论，也让加深了对`wechaty`生态的理解。

欢迎大家参与`wechaty`社区相关的活动以及成为`Contributor`，感谢大家的参与，我们下次再见。

> 作者: [wj-Mcat](https://github.com/wj-Mcat/)
