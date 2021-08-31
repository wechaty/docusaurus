---
title: "OSPP 2021-期中报告-开发支持 QQ 聊天软件的 Wechaty Puppet Provider 模块"
author: anaivebird
categories:
  - project
  - ospp

image: /assets/2021/08-ospp-mid-term-qq-puppet/wechaty-qq-puppet-logo.webp
tags:
  - summer-of-wechaty
  - summer-2021
  - ospp
  - ospp-2021
  - plan
  - mid-term
  - other
---

“[开源软件供应链点亮计划-暑期2021](https://summer.iscas.ac.cn)”（以下简称 暑期2021）是由中科院软件所与 openEuler 社区共同举办的一项面向高校学生的暑期活动。旨在鼓励在校学生积极参与开源软件的开发维护，促进国内优秀开源软件社区的蓬勃发展。活动联合各大开源社区，针对重要开源软件的开发与维护提供项目，并向全球高校学生开放报名。 学生可自主选择感兴趣的项目进行申请，并在中选后获得该软件资深维护者（社区导师）亲自指导的机会。 根据项目的难易程度和完成情况，参与者还可获取“开源软件供应链点亮计划-暑期2021”活动奖金和奖杯。

本项目 [开发支持 QQ 聊天软件的 Wechaty Puppet Provider 模块] 系 暑期2021 支持的开源项目。

## 开发支持 QQ 聊天软件的 Wechaty Puppet Provider 模块

### 项目背景

Wechaty 社区目前已经支持微信、Whatsapp、企业微信、飞书等常见流行即时通讯工
具，并且能够通过多语言 SDK (比如 Python Wechaty) 进行调用。
QQ 是国内和微信并列的两大聊天软件。我们在本次 Summer 2021 的项目中，Wechaty
希望可以实现对 QQ Chatbot 的支持。通过 Wechaty Puppet 的接口，可以将 QQ 进行 RPA 封装，使其成为 wechaty-puppet-qq 供 Wechaty 开发者方便接入 QQ 平台，使其成
为 Wechaty 可以使用的社区生态模块。

### 方案描述

使用 <https://github.com/wechaty/wechaty-puppet-mock> 项目作为模版，参考社区其他
的 Wechaty Puppet Provider 代码模块，对 QQ 进行规划、RPA 选型、原型测试，和最终
的代码封装。
构建一个 Wechaty Puppet Provider 模块。 在初期开发中，能够实现文本消息的接收和发送，即可完成原型验证 POC。

### 项目技术栈

1. TypeScript programming language
2. Git
3. [RPA](https://wechaty.js.org/docs/explainations//rpa)

### 时间规划

- 第一阶段（7月-8月）
  - 7.1-7.10（已如期完成）

        先和导师沟通，并观看Wechaty Puppet Provider 的 workshop 视频，熟悉Wechaty Puppet Provider的业务流程，并对自己目前还没有掌握的nodejs、npm、typescript等内容进行快速的了解和学习，对时间安排做好具体的规划

  - 7.11-8.15（已如期完成）

        开始正式进行代码的prototyping，先完成基础的功能，完成通过 Wechaty 加载 wechaty-puppet-5g-qq 模块，并通过oicq项目实现的qq协议，实现文本消息的收发功能。每周协同导师进行功能的开发和完善

- 第二阶段（8月-10月）

    在现有基础上，滑动验证码登陆、设备锁、qq登陆风控等问题进行调研和排查
  - 8.16-9.30（即将完成）

        将CI（持续集成）的测试跑通，如果时间充足，可以尝试完成一下配置 GitHub Actions 实现自动化测试的任务。

  - 10.1-10.30（即将完成）

        继续完善功能，将消息接收，扩展到群聊天消息、图片消息等领域。

## 项目进度

### 已完成部分

1. wechaty.js.org的博客的配置
2. npm项目包的安装
3. typescript开发环境的熟悉
4. github pull request使用的全流程
5. wechaty-puppet-oicq模块的ding dong的完成（扫码即可运行QQ机器人，发送ding给机器人，即可收到dong的消息）

完全按照有计划顺利进行，还略有加快。

### 遇到的困难与解决

- 中途实习繁忙和生病导致拉下两周进度
  
  虽然中间有生病，拉下两周，但也已经通过提高效率，重点攻克项目难点，成功赶上进度，并略有提前。

- wechaty消息处理链路相对复杂，难以理解`

    通过咨询项目导师和wechaty飞书机器人负责人等途径，观看社区livecoding视频，对消息处理进行快速学习，并通过编码实践，最终成功将oicq的事件和消息格式转换为了wechaty的messageRawPay，也加深了对框架架构设计的理解。

- 遇到QQ风控
    通过途径弄到了一些QQ小号方便测试。

### 后续工作安排

    按照原计划继续进行，并且尽可能对图片消息、语音消息等增加支持，使wechaty-puppet-oicq成为事件和API支持非常详细的机器人协议提供端。",
