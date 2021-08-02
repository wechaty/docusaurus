---
title: "OSPP 2021-期初报告-基于 Blessed 的 Wechaty 命令行文本客户端软件"
author: chinggg
categories:
  - project
  - ospp
image: /assets/2021/07-ospp-plan-blessed-cli/wechaty-cli-logo.webp
tags:
  - summer-of-wechaty
  - summer-2021
  - ecosystem
  - ospp
  - ospp-2021
  - plan
---

> Author:[@chinggg](https://github.com/chinggg)

## 暑期2021

「开源软件供应链点亮计划-暑期2021」（以下简称 暑期2021）是由中科院软件所与 openEuler 社区共同举办的一项面向高校学生的暑期活动，旨在鼓励在校学生积极参与开源软件的开发维护，促进国内优秀开源软件社区的蓬勃发展。
根据项目的难易程度和完成情况，参与者还可获取「开源软件供应链点亮计划-暑期2021」活动奖金和奖杯。
官网：[https://summer.iscas.ac.cn/](https://summer.iscas.ac.cn/)

本项目 [基于 Blessed 的 Wechaty 命令行文本客户端软件] 系 暑期2021 支持的开源项目。

## 项目介绍

- 项目名称：基于 Blessed 的 Wechaty 命令行文本客户端软件
- 导师：李卓桓
- 学生：刘靖
- 模块列表
  - [x] 所有消息的实时接收与展示
  - [ ] 联系人与群聊列表的获取与展示
  - [ ] 右侧群聊成员/联系人详情的展示
  - [ ] 消息内容按来源存储与查看，联系人与群聊信息的缓存
  - [ ] 未读新消息数量展示与联系人智能排序
  - [ ] 私聊与群聊消息的发送
  - [ ] 细粒度的联系人、群和对话管理
- 项目链接：[https://github.com/wechaty/summer-of-wechaty/issues/81](https://github.com/wechaty/summer-of-wechaty/issues/81)
  
## 详细方案

- 任务要求  
利用 [Blessed](https://github.com/chjj/blessed) 和 [blesssed-contrib](https://github.com/yaronn/blessed-contrib) 提供的组件，仿照 Linux 命令行终端的 IRC 文本客户端，实现一个基于 Wechaty 的即时通讯客户端，通过 Wechaty 支持所有现有的 [Wechaty Puppet Providers](https://wechaty.js.org/docs/puppet-providers/)，比如微信、企业微信、飞书、Whatsapp 等。在初期开发中，能够实现文本消息的接收和发送，即可完成原型验证 POC 。

- 实现方案  
学习 blessed 和 Wechaty 的使用，并研究 [node-facenet](https://github.com/huan/node-facenet/tree/master/src/manager/ui) 和 [console-tg-client](https://github.com/lekzd/console-tg-client) 的架构设计，多和导师进行沟通，利用事件绑定或 RxJS 实现文本消息的收发功能和未读状态的提示，并提供一定的联系人和群对话管理功能，达到接近现有 IRC 客户端的完整程度。

设计方案如下图所示：
![diagram](/assets/2021/07-ospp-plan-blessed-cli/wechaty-cli-diagram.webp)

## 项目开发时间计划

### 第一阶段（7.1 - 8.14）

对接后端事件，选择恰当的架构与技术栈完成数据的存储、展示与更新。

- 7.1 - 7.14
自行探索做出 demo，实现简单的消息接收和联系人列表展示，与导师沟通架构设计和需使用的技术栈。

- 7.15 - 7.29  
军训期间，时间有限，学习前端相关知识或抽空实现较简单的功能。

- 8.1 - 8.14
改进代码结构，重点推进数据的存储与状态的管理，实现消息内容按来源存储与查看，以及联系人与群聊信息的缓存，并撰写中期报告。

### 第二阶段（8.15 - 9.30）

重点完善前端交互，持续改进用户体验。

- 8.15 - 8.30
根据未读消息数量对联系人进行状态管理和智能排序，提供更多的交互选项和管理功能。

- 9.1 - 9.14
实现消息的发送

- 9.15 - 9.30
完善文档，编写样例代码，如有需要还需编写测试。

- 10月及以后
继续维护并优化代码，实现新功能。
