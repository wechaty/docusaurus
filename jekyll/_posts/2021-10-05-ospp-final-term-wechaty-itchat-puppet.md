---
title: "OSPP 2021-结项报告-基于 Itchat 为 Python Wechaty 实现社区首个 Python 语言的本地 Puppet"
author: lyleshaw
categories:
  - project
  - ospp
image: /assets/2021/10-ospp-final-term-wechaty-itchat-puppet/python-wechaty-puppet-itchat.webp
tags:
  - itchat
  - puppet
  - summer-of-wechaty
  - summer-2021
  - ecosystem
  - ospp
  - ospp-2021
  - final-term
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

## 项目总结

- 项目产出：
  - 产出1：Python Wechaty Puppet Itchat：[https://github.com/wechaty/python-wechaty-puppet-itchat](https://github.com/wechaty/python-wechaty-puppet-itchat)，代码已合并到社区
  - 产出2：PyPi 包：[https://pypi.org/project/wechaty-puppet-itchat/](https://pypi.org/project/wechaty-puppet-itchat/)，已可以正常使用
- 方案进度：
  - 已完成工作：  
    - L0阶段：已完成（PR：[init code by python wechaty puppet service #1](https://github.com/wechaty/python-wechaty-puppet-itchat/pull/1)）
    - L1阶段：已完成（PR：[添加scan/login事件 #4](https://github.com/wechaty/python-wechaty-puppet-itchat/pull/4) 和 [Debug emit problem #6](https://github.com/wechaty/python-wechaty-puppet-itchat/pull/6) 和 [Fix emit bugs add receive msg #10](https://github.com/wechaty/python-wechaty-puppet-itchat/pull/10)）
    - L2阶段：已完成（PR：[Add CI/CD #7](https://github.com/wechaty/python-wechaty-puppet-itchat/pull/7) 和 [Fix code style to pass ci/cd #8](https://github.com/wechaty/python-wechaty-puppet-itchat/pull/8) 和 PyPi 打包发布：[https://pypi.org/project/wechaty-puppet-itchat/](https://pypi.org/project/wechaty-puppet-itchat/))
    - L3阶段：已完成（PR：[Debug emit problem #6](https://github.com/wechaty/python-wechaty-puppet-itchat/pull/6)）
    - L4阶段：已完成（PR：[add features #13](https://github.com/wechaty/python-wechaty-puppet-itchat/pull/13)）
- 遇到的问题及解决方案：
  - 困难1：对 CI/CD 中的各项工具不熟悉，推代码时遇到困难
  - 解决方案：根据导师推荐的资料，学习 GitHub Action 、 MakeFiles 、 pre-commit 等工具的用法，并配置 GPG key 等
  - 困难2：在 Wechaty Puppet 中无法正常使用 Itchat 的函数
  - 解决方案：根据导师的建议，深入了解了 Python 协程，将 Itchat 函数全部改为异步函数后得以解决
  - 困难3：在使用 AsyncIOEventEmitter 时发现事件无法 Emit 到 Wechaty 层
  - 解决方案：根据导师指导，添加 await asyncio.sleep() 后解决
- 项目完成质量：
  - 已完成全部预定进度，Python Wechaty Puppet Itchat 已可以正常使用，且代码已通过 CI 检查，符合社区对代码规范的要求
  - 不足之处：在于由于时间有限，未能对 Itchat 的代码进行重构，该项任务将会在后续结项后继续完成
  - 综合以上两点，个人对项目完成质量评价：良好
- 与导师沟通及反馈情况：
  - 与导师保持积极的沟通，能及时反馈疑问及问题
  - 反馈的问题会及时得到导师的回复，并且导师会通过讨论引导我独立解决
- 项目展望：
  - Python Wechaty Puppet Itchat
    - 在结项后，我仍计划持续维护这一 Puppet，并计划将 Itchat 的代码进行重构
  - Python Wechaty
    - 我计划之后也持续参与到 Python Wechaty 生态的建设中去 （包括但不限于：为 Python Wechaty 贡献代码、为 python-wechaty-plugin-contrib 贡献 Plugin 等）
  - Wechaty
    - 我还计划于年末为 Wechaty 社区提供一个基于 CQHTTP 的 QQ Puppet [wechaty-puppet-cq](https://github.com/lyleshaw/wechaty-puppet-cq)

## 项目成果

项目仓库: <https://github.com/wechaty/python-wechaty-puppet-itchat>  

### live coding视频

> 国内链接：[https://www.bilibili.com/video/BV1sP4y187Vj/](https://www.bilibili.com/video/BV1sP4y187Vj/)

{% include iframe.html src="https://youtu.be/SKhgnRaljzk" %}

### PPT展示视频

> 国内链接：[https://www.bilibili.com/video/BV1z34y1U7MR/](https://www.bilibili.com/video/BV1z34y1U7MR/)

{% include iframe.html src="https://youtu.be/fGjEd5O97lQ" %}

### 项目PPT

{% include iframe.html src="/assets/2021/10-ospp-final-term-wechaty-itchat-puppet/itchat.pdf" %}

## 联系我们

- 项目链接：<https://github.com/wechaty/summer/issues/75>
- 联系方式：<lyle@hdu.edu.cn>
