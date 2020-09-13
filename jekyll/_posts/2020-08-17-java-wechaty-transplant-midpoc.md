---
title: Wechaty Java 移植组件开发
date: 2020-08-17 09:00 +0800
author: cunkoulaocai
categories: project
tags:
 - wechaty
 - java
 - soc
 - soc2020
 - java-wechaty
image: assets/2020/java-wechaty-transplant-midpoc/java-wechaty-transplant-midpoc.jpg
---

> Author: [@cunkoulaocai](https://github.com/cunkoulaocai)
> Code: [@cunkoulaocai/java-wechaty](https://github.com/cunkoulaocai/java-wechaty)

## 暑期2020

“开源软件供应链点亮计划-暑期2020”（以下简称 暑期2020）是由中科院软件所与 openEuler 社区共同举办的一项面向高校学生的暑期活动。
旨在鼓励在校学生积极参与开源软件的开发维护，促进国内优秀开源软件社区的蓬勃发展。
根据项目的难易程度和完成情况，参与者还可获取“开源软件供应链点亮计划-暑期2020”活动奖金和奖杯。
官网：<https://isrc.iscas.ac.cn/summer2020> 官方新闻：<http://www.iscas.ac.cn/xshd2016/xshy2016/202004/t20200426_5563484.html>
本项目 [Wechaty Java组件移植] 系 暑期2020 支持的开源项目。

## 暑期2020 [Wechaty Java组件移植] POC 成果展示

## [Wechaty Java组件移植]信息

- 导师：刁政欣

- 学生：陈炀

- 项目名称：Wechaty

- 方案描述：用java或者kotlin将typescript版的wechaty移植到java/kotlin平台上

- 时间规划：

  memory-card存储

  - 7.1 - 7.19
  - 该模块移植是项目的基本要求,为了能够满足机器人重新登陆不需要扫码,保存机器人自身信息等功能,需要用到这个组件,这个组件将存储的功能和存储数据的结构相分离,以便能够简单的更换存储方式,支持阿里云oss,华为云obs,亚马逊s3,json存储等,同时提供了易用的api来使用
  - 基本功能

  state-switch状态机

  - 7.20 - 7.26
  - state-switch是用于管理异步操作的监视器/保护器,在原本的ts版本中可以通过Promise的特性来比较轻松的实现,在kotlin则需要其他的api来实现,思路 比较清晰,但是要找到合适的实现手段有点麻烦
  - 基本功能

  (选做) 其他api移植与测试

  - 7.27 - 8.7
  - java-wechaty中还有许多api没有实现,api的风格也是仿照js来实现的,后续需要将这些api逐步实现,并且修改其api风格,以更适合java和kotlin等语言
  - 扩展功能

  (选做) 理解底层原理,添加一些新功能

  - 8.8-8.15
  - 此部分为选作内容,wechaty还有一些关于miniprogram,红包等功能还未实现,需要能够理解底层,以便进行后续的扩展,逐步增强wechaty的功能
  - 扩展功能

## 项目进度

- 已完成工作：

1. 完成memory-card和states-witch组件的开发，由于其中一部分涉及到aws，而aws需要visa等银行卡才能注册，所以这个部分虽然编写了但是没有测试，但是我添加了一个阿里云的接口方便使用。
2. 完成大部分typescript版api的移植，目前应该是几乎所有的ts版本的api都已经移植完毕，当然会有一些bug,并且在api的易用性上还没有达到很好的要求。
3. 进行了一些现有api的测试，修复一些小bug，当然还有一些bug还没有修复,期待下一阶段开发.

- 遇到的问题及解决方案：

> 快速学习kotlin并了解程序架构和逻辑

虽然说是`java`移植开发，但根据导师的建议和整个项目的整体性，我还是选择用kotlin开发，但是我之前还没有写过kotlin，我必须立马花些时间来学习kotlin，对于高级特性和有可能会遇到的错误只能遇到了再说了。整个程序逻辑架构还是比较清晰的，虽然还是花了点时间来明白工作流程

> java和kotlin中的异步支持

由于有了async和await以及Promise，js对于异步的支持是更好的，因此对于移植过程中的异步的操作，我们是需要仔细考虑的。当然由于用了kotlin，后续还可以尝试使用协程来进行编写。

> 协程的考虑

在编写state-switch的时候，对于ts版的理解花费了点时间，主要还是因为promise的理解不到位，当理解了工作原理之后，由于kotlin中没有类似的api可以解决，因此花了点时间探索，最后在导师的建议之下，以及考虑到是用kotlin编写的，可以使用协程，暂时决定采用协程加上阻塞队列来实现，目前看来好像实现了效果。

这个协程还是蛮有意思的，kotlin的协程感觉有些地方还是很难理解的。

心得体会：在整个项目的后半段由于我这边出现了一点问题，导致拖慢了进度，好在是任务的难度没有很大，导师人也很好。最终不论有没有通过考核，这份参与开源项目的经历，都是值得回味的。

> 移植这东西我感觉蛮有意思的

不同的编程语言，有不同的思维方式的碰撞，花几天的时间快速学一门语言并进行实践也是蛮有意思的一件事情，整个移植虽然最主要的考虑到是功能的移植，但是还是要注意api的易用性，ts和java的api的风格还是有不少区别的。

> github的开发流程简单体验

用github的参与到开源社区中是一次很有意思的体验，虽然之前有在同一个小组进行github上的合作，但是流程还是不一样，还有github的CI/CD流程我也是第一次体会到，对于开源社区的会议讨论我也是第一次体会到。

> 高质量的单元测试

说实话我还是不太懂得怎么写出高质量的单元测试，后续要继续学习。

- 后续工作安排：

从目前的进度来看，还是有一些东西需要完成的

1. 写一个springboot starter方便springboot项目进行集成，里面应该会有存储的配置以及token的配置
2. 将memory-card组件进行拆分（不拆分感觉也行）
3. 继续完善api测试，我试了一下有些api达不到想要的效果，比如tags接口就有问题
4. 开发新的功能，现有的一些api还有一些未完成，还有一些功能没有实现
5. 文档的更新和完善（最近好像是更新过文档了，但是还是有一些东西还没有完善)，好像是没有中文文档

## Demo Day视频

youtube地址为：<https://www.youtube.com/watch?v=ipRq3kT32wI>
{% include iframe.html src="https://www.youtube.com/watch?v=ipRq3kT32wI" %}

## 联系我们

- 项目链接：<https://github.com/cunkoulaocai/java-wechaty>
- 联系方式：+86 15806082601 | e: <1184016190@qq.com>
