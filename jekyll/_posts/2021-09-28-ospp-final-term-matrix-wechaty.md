---
title: "OSPP 2021-结项报告-基于 Matrix AppService Wechaty 项目的用户、群与消息等基础功能的完善"
author: lprintf
categories:
  - project
  - ospp
image: /assets/2021/09-ospp-final-term-matrix-wechaty/wechaty-matrix.webp
tags:
  - matrix
  - summer-of-wechaty
  - summer-2021
  - ospp
  - ospp-2021
  - final-term
  - ecosystem
---

“[开源软件供应链点亮计划-暑期2021](https://summer.iscas.ac.cn)”（以下简称 暑期2021）是由中科院软件所与 openEuler 社区共同举办的一项面向高校学生的暑期活动。旨在鼓励在校学生积极参与开源软件的开发维护，促进国内优秀开源软件社区的蓬勃发展。活动联合各大开源社区，针对重要开源软件的开发与维护提供项目，并向全球高校学生开放报名。 学生可自主选择感兴趣的项目进行申请，并在中选后获得该软件资深维护者（社区导师）亲自指导的机会。 根据项目的难易程度和完成情况，参与者还可获取“开源软件供应链点亮计划-暑期2021”活动奖金和奖杯。

本项目 [Matrix AppService Wechaty](https://github.com/wechaty/matrix-appservice-wechaty) 系 暑期2021 支持的开源项目。

## [Matrix AppService Wechaty](https://github.com/wechaty/matrix-appservice-wechaty)项目信息

- 导师：李卓桓，yswtrue
- 学生：林宇靖，张瑞宁
- 项目介绍：<https://github.com/wechaty/summer/issues/59>

- 项目名称：基于 Matrix AppService Wechaty 项目的用户、群与消息等基础功能的完善
- 方案描述：通过 Matrix-Appservice-Bridge 桥接 Wechaty 和 Matrix 的消息，使我们能在 Matrix 收发 Wechaty 消息，即收发来自微信，飞书等的消息。
- 时间规划：<https://github.com/wechaty/summer/issues/59#issuecomment-882246195>

## 项目总结

- 项目成果：  
  
  | 计划 | 完成情况 | 成果 |
  |---|---|---|
  | 架设 Matrix 系统 | 完成 | 在家庭环境， 境内外VPS 均进行过实验部署， 并部署了一套社区 Matrix 服务器 |
  | 整合[matrix-appservice-wechaty](https://github.com/wechaty/matrix-appservice-wechaty/)到Matrix系统中 | 完成 | 通过该实验熟悉了Matrix系统的各个功能模块，对后面的开发有启发作用 |
  | 分析项目需求 | 完成 | 需求([details](https://github.com/wechaty/summer/issues/59#issuecomment-882246195))： 图片，附件消息收发；虚拟用户头像，昵称，备注的显示；部署方案的简化；开发方案的简化；实现“双傀儡”，同步其他设备主动发送的消息； |
  | 实现图片消息的接收和发送，完成原型验证 POC | 完成 | 成功模拟收发群组和私聊中的图片及附件消息 |
  | 实现其他欠缺功能 | 部分完成 | 支持指定 Chrome 程序； 支持修改消息延迟阈值等； 未实现“双傀儡” |
  | 进行测试，完善项目文档 | 完成 | 进行自动测试和人工测试，并解决发现的问题 |
  | 设计实现新部署方案，提供更加简便的部署方案 | 完成 | [easy-matrix-wechaty](https://github.com/wechaty/easy-matrix-wechaty) |
  | 设计实现新开发方案，提供更加简便的开发环境部署方案 | 完成 | [devcontain-support](https://github.com/wechaty/matrix-appservice-wechaty/tree/devcontainer-support) |
  
- 遇到的问题及解决方案：

  学生本科学的是软件工程专业，对软件建模语言有一定了解，课堂项目中也经常使用相关技术产品。

  从程序设计到程序系统到软件工程，软件工程解决了很多难题，但软件建模语言在几十年来却一直被诟病为“语义丰富但不严谨”，本人在实际实践中也觉得它们用起来并不怎么方便。

  在本项目的实践中，我第一次体验完整的开源项目贡献流程。尽管一开始犯了一些错误，在导师的指导下，我最终学会如何使用 issue 和 PR 请求来高效地参与开源项目。在开发流程中，我几乎没有使用 UML ，但这不妨碍我阅读 issue，README 文档和源码来了解这个项目，并进行开发排错。在开发过程中，我们与导师能更多地就新功能的实现方式进行沟通，而不必花时间讨论以前的代码，这是我以前未体验过的高效的编程体验。

  我也怀疑过这是否是因为该项目比较特殊。它有完整的自动测试和自动编译配置（和 CI/CD 类似，但目的通常不是部署），这和 Wechaty 社区里多数项目一致，和其他优秀开源项目一致，但这是可复制的。我也怀疑过是否因为这项目比较简单。然而，一开始的部署方案里，我们要部署近十个服务来实现邮箱，安全认证，突触，突触联合等服务，要求部署计算机有可以申请证书的域名以及一些需要备案的共有IP端口。我们后来做了很多努力才把依赖降低为两个服务器，无域名端口要求，这依赖于 docker 的强大功能，和 linux，matrix 等一系列开源应用的透明易用。

  我觉得这个项目的开发流程有很多可以借鉴的地方，虽然我目前没能从事软件工程方面的研究学习，但这份开发经历给我留下了深刻印象，有机会的话我会继续深入研究学习或者应用它。

- 项目展望：  
  - 实现[“双傀儡”](https://github.com/wechaty/matrix-appservice-wechaty/issues/85)
  - 实现一个机器人，桥接微信消息到社区 Matrix 房间中，如 <#wechaty_wecahty:gitter.im> 中的 Mike Bo，并且显示每个用户的头像和昵称
  - 让桥接机器人<@Wechaty:localhost>同时为多个 Matrix 用户提供桥接服务

## 项目成果

项目仓库: [matrix-appservice-wechaty](https://github.com/wechaty/matrix-appservice-wechaty)，[easy-matrix-wechaty](https://github.com/wechaty/easy-matrix-wechaty)

### live coding视频

{% include iframe.html src="https://youtu.be/qtbExkN0uoI" %}

> 国内链接：<https://www.bilibili.com/video/BV1Eq4y1Z7Ya/>

### PPT展示视频

{% include iframe.html src="https://youtu.be/3j3BGRnoVtE" %}

> 国内链接：<https://www.bilibili.com/video/BV1QR4y1p7Hd/>

### 项目PPT

{% include iframe.html src="/assets/2021/09-ospp-final-term-matrix-wechaty/final-term-report.pdf" %}

## 联系我们

- 项目链接：<https://github.com/wechaty/summer/issues/59>
- 联系方式：
  - 林宇靖：lprintf@qq.com
  - 张瑞宁：3134191406@qq.com
