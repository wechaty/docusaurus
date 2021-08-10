---
title: "OSPP 2021-期初报告-开发支持 QQ 聊天软件的 Wechaty Puppet Provider 模块"
author: anaivebird
categories:
  - project
  - ospp
image: /assets/2021/07-ospp-plan-qq-puppet/wechaty-qq-puppet-logo.webp
tags:
  - qq
  - puppet
  - summer-of-wechaty
  - summer-2021
  - ecosystem
  - ospp
  - ospp-2021
  - plan
---

“开源软件供应链点亮计划-暑期2021”（以下简称 暑期2021）是由中科院软件所与 openEuler 社区共同举办的一项面向高校学生的暑期活动。
旨在鼓励在校学生积极参与开源软件的开发维护，促进国内优秀开源软件社区的蓬勃发展。
根据项目的难易程度和完成情况，参与者还可获取“开源软件供应链点亮计划-暑期2021”活动奖金和奖杯。
官网：[https://summer.iscas.ac.cn/](https://summer.iscas.ac.cn/)

本项目 [开发支持 QQ 聊天软件的 Wechaty Puppet Provider 模块] 系 暑期2021 支持的开源项目。

## 项目介绍

- 项目名称：开发支持 QQ 聊天软件的 Wechaty Puppet Provider 模块
- 导师：李佳芮、李卓桓
- 学生：anaivebird
- 模块列表
  - [ ] node.js qq protocol client implement(based on [takayama-lily/oicq](https://github.com/takayama-lily/oicq))
  - [ ] Puppeteer
  - [ ] puppet for qq wrapper
  - [ ] 滑块登陆
  - [ ] 设备信息存储
- 项目链接：[https://github.com/wechaty/summer-of-wechaty/issues/81](https://github.com/wechaty/summer-of-wechaty/issues/81)
  
## 详细方案

- 任务要求  
使用 [wechaty-puppet-mock](https://github.com/wechaty/wechaty-puppet-mock) 项目作为模版，参考社区其他的 Wechaty Puppet Provider 代码模块，对 QQ 进行规划、RPA选型、原型测试，和最终的代码封装。  
在初期开发中，能够实现文本消息的接收和发送，即可完成原型验证 POC 。

- 实现方案  
通过对Wechaty Puppet Provider和wechaty-puppet-mock项目等进行了解和学习，并对已有项目进行梳理，多和导师进行沟通，实现通过 Wechaty 加载 wechaty-puppet-qq模块，并包装[oicq](https://github.com/takayama-lily/oicq)项目，实现文本消息的收发功能，提供一个 examples/ding-dong-bot.ts ，完成“接收到文字消息ding时，自动回复消息dong"等功能。

## 项目开发时间计划

### 第一阶段（7月-8月）

- 7.1-7.10  
先和导师沟通，并观看Wechaty Puppet Provider 的 workshop 视频，熟悉Wechaty Puppet Provider的业务流程，并对自己目前还没有掌握的nodejs、npm、typescript等内容进行快速的了解和学习，对时间安排做好具体的规划

- 7.11-8.15  
开始正式进行代码的prototyping，先完成基础的功能，完成通过 Wechaty 加载 wechaty-puppet-5g-qq 模块，并通过oicq项目实现的qq协议，实现文本消息的收发功能。每周协同导师进行功能的开发和完善

### 第二阶段（8月-10月）

在现有基础上，滑动验证码登陆、设备锁、qq登陆风控等问题进行调研和排查

- 8.16-9.30  
继续完善功能，完成“接收到文字消息ding时，自动回复消息dong"的功能，不断总结和完善功能列表。

- 10.1-10.30  
如果还有功能模块未完成则继续优化代码，梳理项目，如果时间充足，可以尝试完成一下配置 GitHub Actions 实现自动化测试的任务。

> Author:[@anaivebird](https://github.com/anaivebird)
