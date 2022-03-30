---
title: "Java Wechaty Beta Released: 终于有了 Java 可以用的微信机器人"
author: diaozxin007
categories: announcement
tags:
  - news
  - java
  - featured
image: /assets/2020/java-wechaty/2020-06-15-java-wechaty.webp
---

终于有一个 Java 版的微信机器人了。

公众号很久没有更新了。主要两个原因，换了工作之后，第一，要花更多的时间去了解和学习新的业务。第二，我最近把几乎所有的业余时间都来写这个 Java 版的微信机器人了。

![java-wechaty](/assets/2020/java-wechaty/2020-06-15-java-wechaty.webp)

## Wechaty 是什么

官网的描述是：

- A Conversational AI RPA SDK for Chatbot

其实就是一个能够快速构建聊天机器人的开源 SDK。最早的时候，Wechaty 只是一个基于服务于微信工具库，现在逐渐的发展到可以对接世面上的主流聊天软件包括不限于：微信，企业微信，钉钉，Line 等。

编程语言也由原来的单一语言（TypeScript） 发展到，Java，Scala，Python，Go 等多语言实现的工具库了，同时社区生态还在不断的壮大。

Github 地址：[https://github.com/wechaty/wechaty](https://github.com/wechaty/wechaty) 目前已经有 7.9k 的 star 了。

## 与 Wechaty 结缘

之前的工作，老板有一个要求，是就每天下班后，发一封邮件日报简单描述一下今天工作进展。如果忘记发日报，第二天就负责整理 全组人的日报。作为一个健忘的人，忘记发日报简直就是家常便饭。

于是就考虑需要一个机制：

- 每天提醒我发日报
- 动作尽可能简单，且自动化。

当时就想能不能在微信上有一个机器人，每天定时提醒我发日报，而且只要回复这个机器人，他就能够把我回复的消息，按照固定模板生成日报并发送给老板。这样既不会忘记，也能简单自动化的完成这个工作。

一顿 Google 还真找到了 Wechaty 这个工具。尝试写了一个日报机器人满足了我的需求。于是再接再厉，又写了一个提醒女朋友吃饭的工具，但是因为不熟悉 TypeScript。写出的机器人没法停止，变成了一个信息轰炸机，差点被拉黑。[居然有人能忘记吃饭？写个微信机器人提醒他](https://mp.weixin.qq.com/s?__biz=MzU2NTQ1NTAxNQ==&mid=2247483767&idx=1&sn=ca72401e514dded0c84b1220f887cdf4&chksm=fcba30bfcbcdb9a98e8c455357b38fda66f7af203ce09101597f23ae6a5d1eb133c48c7f63d3&token=656593281&lang=zh_CN#rd)

就是因为这篇文章，还结识了 Wechaty 的作者李佳芮。现在她的公司已经估值很多个 0 了。

由于我的主要工作语言是 Java ，对 TypeScript 还是了解不多，就暂时放下了。

## Java 版的 Wechaty

在 Wechaty 的某个版本后，开始支持 GRPC 作为传输协议。这个时候我觉得多语言开发的环境就比较成熟了。于是我就开始尝试写一个 Java 版的 wechaty。

### Java vs Kotlin

Wechaty 使用 TypeScripe 开发，在移植的过程中，发现要实现 TS 版对应的功能，Java 所需要的模板代码就太多了，开发起来效率不够快。于是就考虑可不可以使用 Kotlin 来构建 Java-wechaty sdk。

Kotlin 有以下特性感觉比较适合 Wechaty 的开发：

- Java 和 Kotlin 之间可以无障碍的互相操作
- 在 Kotlin 中，函数也是第一公民，可以脱离类的存在，这一点在移植 TS 代码的时候优势就比较明显了。
- 空指针安全，之前写 Java 的时候，受够了一步一检查。Kotlin 在语言层面就解决了空指针安全的问题。写起来有效的减少心智负担。
- Kotlin 是务实的，更有表现力的语言。语法更加接近 TS 和 GO，相对 Java 来说更加简洁。

### 事件驱动

TS 版的 Wechaty 是基于 Nodejs 开发的，一个典型的事件驱动的架构。在开发初期我就自然想到了使用 `Vertx` 框架来开发。但是开发一段时间后发现，其实 `Vertx` 是一个事件驱动的网络框架。主要解决的还是网络相关的问题，放到 Java-wechaty 中还是太重了。

于是移除了代码中的 Vertx 框架，自己参考 Nodejs 中的 EventEmitter 实现了 Kotlin 版的事件驱动组件。

### 整体架构

```ascii
  +--------------------------+ +--------------------------+
  |                          | |                          |
  |   Wechaty (TypeScript)   | |     Wechaty (Java)       |
  |                          | |                          |
  +--------------------------+ +--------------------------+

  +-------------------------------------------------------+
  |                 Wechaty Puppet Service               |
  |                                                       |
  |                (wechaty-puppet-service)               |
  +-------------------------------------------------------+

+---------------------  @chatie/grpc  ----------------------+

  +-------------------------------------------------------+
  |                Wechaty Puppet Abstract                |
  |                                                       |
  |                   (wechaty-puppet)                    |
  +-------------------------------------------------------+

  +--------------------------+ +--------------------------+
  |      Pad Protocol        | |      Web Protocol        |
  |                          | |                          |
  | wechaty-puppet-padplus   | |(wechaty-puppet-puppeteer)|
  +--------------------------+ +--------------------------+
  +--------------------------+ +--------------------------+
  |    Windows Protocol      | |       Mac Protocol       |
  |                          | |                          |
  | (wechaty-puppet-windows) | | (wechaty-puppet-macpro)  |
  +--------------------------+ +--------------------------+
```

通过这个图可看到，Wechaty 的结构设计还比清晰。利用 Puppet 的架构，将真正的通信协议和具体的 IM 软件进行了隔离。基于这一点不同的语言基于 Puppet 的协议就可以进行多语言开发。

### 好用么

感谢 Wechaty 前期良好的 API 设计几行代码就可以开发自己聊天机器人：

Demo 1：

```java
class Bot{
  public static void main(String args[]){
    Wechaty bot = Wechaty.instance()
      .onScan((qrcode, statusScanStatus, data) -> System.out.println(QrcodeUtils.getQr(qrcode)))
      .onLogin(user -> System.out.println("User logined :" + user))
      .onMessage(message -> System.out.println("Message:" + message))
      .start(true);
  }
}
```

这个 Demo 6 行代码，就实现了机器人的扫码登录，接受消息的功能。同时现在 Java-wechaty 还支持可插拔的插件。利用插件，可以更简单的构建机器人。

Demo 2：

```java
class Bot{
  public static void main(String args[]){
    Wechaty bot = Wechaty.instance()
            .use(
                WechatyPlugins.ScanPlugin(),
                WechatyPlugins.DingDongPlugin(null)
            )
            .start(true);
  }
}
```

随着插件的原来越丰富，可能以后，用户只需要组合各种插件，就能达成自己的需求，尽量的做到低代码开发。

### 现在达到什么程度了？

目前 Java-wechaty 已经完成了 TS 版的功能的移植。

实现了基础的的聊天，好友管理，群管理功能。接下来的开发就会集中在 API 的打磨，稳定性的提升。同时也期待你的加入为 Java-wechaty 贡献代码。

### 从 Java-wechaty 中能得到什么？

1. 真正的参与开源代码的贡献。
2. 在 Maven 中央库，发布了自己的 Jar 包。
3. 认识了各种各样小伙伴，包括写了 25 年程序的天使投资人 @Huan。
4. 在写 Java-wechaty 的时候，不断的参考伙伴们的 TypeScript，Go，Python 代码，从实际的角度去审视各种编程语言的特性。探寻语言各个特性设计的初衷。

## 期待你的加入

Wechtay 社区加入了由 **中科院软件所** 与 **openEuler 社区** 共同举办的一项面向高校学生的暑期活动《开源软件供应链点亮计划-暑期2020》。

详情见： [https://github.com/wechaty/summer-of-code](https://github.com/wechaty/summer-of-code)

Wechaty 给学生们提供了很多有意思的题目，比如：

1. 利用 AI 技术，开发一个 AI 斗图机器人
2. 利用 Wechaty 的插件技术，开发一个“每日一句”插件，替你向妹子嘘寒问暖的”撩妹“机器人
3. 还有偏向工程的，代码移植工作，让学生真正的参与到开源项目其中

开发语言涉及，TypeScript，Go，Java，Kotlin，Python 甚至还有 Scala，总有一个适合你。

希望看到这里的你，可以把篇文章，转发给学习计算机，或者对编程感兴趣的学生朋友，期待他们加入。

## 后记

Java-wechaty [项目地址](https://github.com/wechaty/java-wechaty)。 加入我们你也可以六行代码写一个微信机器人。

> Author: [@diaozxin007](https://github.com/diaozxin007) The author of Java-wechaty
> Code: [@Java-wechaty](https://github.com/wechaty/java-wechaty)
