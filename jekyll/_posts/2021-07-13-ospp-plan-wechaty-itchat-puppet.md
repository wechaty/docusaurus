---
title: "OSPP 2021-期初报告-基于 Itchat 为 Python Wechaty 实现社区首个 Python 语言的本地 Puppet"
author: lyleshaw
categories:
  - project
  - ospp
image: /assets/2021/07-ospp-plan-wechaty-itchat-puppet/python-wechaty-puppet-itchat.webp
tags:
  - itchat
  - puppet
  - summer-of-wechaty
  - summer-2021
  - ecosystem
  - ospp
  - ospp-2021
  - plan
---
> Author:[@lyleshaw](https://github.com/lyleshaw)

## 暑期2021

“开源软件供应链点亮计划-暑期2021”（以下简称 暑期2021）是由中科院软件所与 openEuler 社区共同举办的一项面向高校学生的暑期活动。
旨在鼓励在校学生积极参与开源软件的开发维护，促进国内优秀开源软件社区的蓬勃发展。
根据项目的难易程度和完成情况，参与者还可获取“开源软件供应链点亮计划-暑期2021”活动奖金和奖杯。
官网：[https://summer.iscas.ac.cn/](https://summer.iscas.ac.cn/)

本项目 [基于 Itchat 为 Python Wechaty 实现社区首个 Python 语言的本地 Puppet] 系 暑期2021 支持的开源项目。

## 项目介绍

- 项目名称：基于 Itchat 为 Python Wechaty 实现社区首个 Python 语言的本地 Puppet
- 导师：吴京京、李卓桓
- 学生：肖良玉
- 项目链接：[https://github.com/lyleshaw/python-wechaty-puppet-itchat](https://github.com/lyleshaw/python-wechaty-puppet-itchat)
  
## 详细方案

- L0阶段：
  - 预期效果：
    熟悉 Itchat 的各项 API ；熟悉 Wechaty Puppet 的开发流程；创建python-wechaty-puppet-itchat的repository。
  - 实施方案：
    阅读 Itchat 文档，了解 Wechaty Puppet。

- L1阶段：
  - 预期效果：
    完成python-wechaty-puppet-itchat 的登录与初始化部分的实现；完成 ding-dong-bot 的实现。
  - 实施方案：
    了解 python-wechaty-puppet-service 是如何通过gRPC 与远程服务器通讯的，并结合 Itchat 的设计模式，对比二者异同，思考如何将 Itchat 的函数封装进 wechaty- puppet，思考 wechaty-puppet 的哪些代码对于该项目而言是不必要的，并完成对 Itchat 中 auto_login 函数的封装。
    在此基础上深入了解 Itchat msg_register 函数的实现方法，并在此基础上封装进 wechaty-puppet，同时完成发送消息函数的封装。同时参考其他 wechaty-puppet 完成 ding-dong-bot.py 并使其能正常运行。

- L2阶段：
  - 预期效果：
    配置 GitHub Action 实现 python-wechaty-puppet-itchat 自动发布到 Pypi 并完成自动化测试。
  - 实施方案：
    了解 Pypi 的发布流程，并在参考已有GitHub Action 配置文件的基础上完成自动发布的流程，同时完成自动化测试。

- L3阶段：
  - 预期效果：
    使用 Itchat 的 API 为 python-wechaty-puppet-itchat 实现User 和 Room 部分的功能。
  - 实施方案：
    在该阶段，我计划深入了解 Itchat 关于 User 部分的 get_contact 等函数的实现，封装为 Wechaty 的 User相关模块的功能。同时将 Itchat create_chatroom等函数封装为 Wechaty Room 模块的功能。

- L4阶段：
  - 预期效果：
    为 python-wechaty-puppet-itchat 实现Itchat 的其他功能。
  - 实施方案：
    在该阶段，我计划将 Itchat 剩余的接口根据 Wechaty 的代码风格封装进 python-wechaty-puppet-itchat。

- *L5阶段：
  - 预期效果：
    完善 python-wechaty 文档。
  - 实施方案：
    在了解 python-wechaty 的基础上，我计划在 python-wechaty 原有文档的基础上进行完善和补充。

## 项目开发时间计划

### 第一阶段（7月-8月）

1. L0阶段开发 5天
2. L1阶段开发 10天
3. L2阶段开发 20天
4. 中期验收

### 第二阶段（8月-10月）

1. L3阶段开发 10天
2. L4阶段开发 15天
3. L5阶段开发 15天
4. 结项验收
