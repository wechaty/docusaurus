---
title: "OSPP 2021-期中报告-基于 Itchat 为 Python Wechaty 实现社区首个 Python 语言的本地 Puppet"
author: lyleshaw
categories:
  - project
image: /assets/2021/08-ospp-mid-term-wechaty-itchat-puppet/python-wechaty-puppet-itchat.webp
tags:
  - itchat
  - puppet
  - summer-of-wechaty
  - summer-2021
  - ecosystem
  - ospp
  - ospp-2021
  - mid-term
---

“开源软件供应链点亮计划-暑期2021”（以下简称 暑期2021）是由中科院软件所与 openEuler 社区共同举办的一项面向高校学生的暑期活动。
旨在鼓励在校学生积极参与开源软件的开发维护，促进国内优秀开源软件社区的蓬勃发展。
根据项目的难易程度和完成情况，参与者还可获取“开源软件供应链点亮计划-暑期2021”活动奖金和奖杯。
官网：[https://summer.iscas.ac.cn/](https://summer.iscas.ac.cn/)

本项目 [基于 Itchat 为 Python Wechaty 实现社区首个 Python 语言的本地 Puppet] 系 暑期2021 支持的开源项目。

## 基于 Itchat 为 Python Wechaty 实现社区首个 Python 语言的本地 Puppet信息

- 导师：吴京京、李卓桓
- 学生：肖良玉
- 项目介绍：<https://github.com/wechaty/summer/issues/75>

- 项目名称：基于 Itchat 为 Python Wechaty 实现社区首个 Python 语言的本地 Puppet
- 方案描述：
  - L0阶段：
    - 预期效果：熟悉 Itchat 的各项 API ；熟悉 Wechaty Puppet 的开发流程；创建 python-wechaty-puppet-itchat 的 repository 。
    - 实施方案：阅读 Itchat 文档，了解 Wechaty Puppet。
  - L1阶段：
    - 预期效果：完成 python-wechaty-puppet-itchat 的登录与初始化部分的实现；完成  ding-dong-bot 的实现。
    - 实施方案：了解 python-wechaty-puppet-service 是如何通过 gRPC 与远程服务器通讯的，并结合 Itchat 的设计模式，对比二者异同，思考如何将 Itchat 的函数封装进 wechaty-puppet ，思考 wechaty-puppet 的哪些代码对于该项目而言是不必要的，并完成对 Itchat 中 auto_login 函数的封装。 在此基础上深入了解 Itchat msg_register 函数的实现方法，并在此基础上封装进 wechaty-puppet ，同时完成发送消息函数的封装。同时参考其他 wechaty-puppet 完成 ding-dong-bot.py 并使其能正常运行。
  - L2阶段：
    - 预期效果：配置 GitHub Action 实现 python-wechaty-puppet-itchat 自动发布到  Pypi 并完成自动化测试。
    - 实施方案：了解 Pypi 的发布流程，并在参考已有 GitHub Action 配置文件的基础上完成自动发布的流程，同时完成自动化测试。
  - L3阶段：
    - 预期效果：使用 Itchat 的 API 为 python-wechaty-puppet-itchat 实现 User 和  Room 部分的功能。
    - 实施方案：在该阶段，我计划深入了解 Itchat 关于 User 部分的 get_contact 等函数的实现，封装为 Wechaty 的 User 相关模块的功能。同时将 Itchat create_chatroom 等函数封装为 Wechaty Room 模块的功能。
  - L4阶段：
    - 预期效果：为 python-wechaty-puppet-itchat 实现 Itchat 的其他功能。
    - 实施方案：在该阶段，我计划将 Itchat 剩余的接口根据 Wechaty 的代码风格封装进 python-wechaty-puppet-itchat 。
  - *L5阶段：
    - 预期效果：完善 python-wechaty 文档。
    - 实施方案：在了解 python-wechaty 的基础上，我计划在 python-wechaty 原有文档的基础上进行完善和补充。

- 时间规划：
  - 第一阶段（7月-8月）
    - L0阶段开发 5天
    - L1阶段开发 10天
    - L2阶段开发 20天
    - 中期验收
  - 第二阶段（8月-10月）
    - L3阶段开发 10天
    - L4阶段开发 15天
    - L5阶段开发 15天
    - 结项验收

## 项目进度

- 已完成工作：  
  - L0阶段：已完成（PR：[init code by python wechaty puppet service #1](https://github.com/wechaty/python-wechaty-puppet-itchat/pull/1)）；
  - L1阶段：已完成对收发消息接口的封装，可以正常发出文字或图片消息， Puppet 已经可以收到消息，但 Wechaty 层由于部分原因，在事件触发上还存在问题（PR：[添加scan/login事件 #4](https://github.com/wechaty/python-wechaty-puppet-itchat/pull/4) 和 [Debug emit problem #6](https://github.com/wechaty/python-wechaty-puppet-itchat/pull/6)）；
  - L2阶段：已完成 CI/CD 配置（PR：[Add CI/CD #7](https://github.com/wechaty/python-wechaty-puppet-itchat/pull/7)）和 PyPi 打包发布：[https://pypi.org/project/wechaty-puppet-itchat/](https://pypi.org/project/wechaty-puppet-itchat/)；
  - L3阶段：已完成对获取联系人列表和获取群列表接口的封装，剩余接口的封装工作待二期完成（PR：[Debug emit problem #6](https://github.com/wechaty/python-wechaty-puppet-itchat/pull/6)）；

- 遇到的问题及解决方案：  
  - 困难1：对 CI/CD 中的各项工具不熟悉，推代码时遇到困难。
  - 解决方案：根据导师推荐的资料，学习 GitHub Action 、 MakeFiles 、 pre-commit 等工具的用法，并配置 GPG key 等。
  - 困难2：在 Wechaty Puppet 中无法正常使用 Itchat 的函数。
  - 解决方案：根据导师的建议，深入了解了 Python 协程，将 Itchat 函数全部改为异步函数后得以解决。

- 后续工作安排：  
  - 0815-0820：解决当前关于 AsyncIOEventEmitter 与 Itchat 事件顺序混乱的问题；
  - 0821-0831：完成 Itchat 中 create_chatroom 、 set_chatroom_name 等关于 User 和 Room 部分接口的封装；
  - 0901-0915：完成单元测试和代码优化；
  - 0916-0930：考虑实现 Wechaty 接口中存在，但 Itchat 中没有的几个接口；
  - 1001-1025：时间精力充足的情况下，完成对 Itchat 的重构工作，并在重构代码上修改  python-wechaty-puppet-itchat 的代码  

## 项目成果

项目仓库: <https://github.com/wechaty/python-wechaty-puppet-itchat>  

### live coding视频

> 国内链接：[https://www.bilibili.com/video/BV15P4y1p7JN/](https://www.bilibili.com/video/BV15P4y1p7JN/)

{% include iframe.html src="https://youtu.be/hce3c4WZylo" %}

### PPT展示视频

> 国内链接：[https://www.bilibili.com/video/BV1Ef4y1G7hE](https://www.bilibili.com/video/BV1Ef4y1G7hE)

{% include iframe.html src="https://youtu.be/gjg1EW30pOw" %}

### 项目PPT

{% include iframe.html src="/assets/2021/08-ospp-mid-term-wechaty-itchat-puppet/itchat.pdf" %}

## 联系我们

- 项目链接：<https://github.com/wechaty/summer/issues/75>
- 联系方式：<lyle@hdu.edu.cn>
