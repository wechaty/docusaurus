---
title: "OSPP 2021-期中报告-基于 Blessed 的 Wechaty 命令行文本客户端软件"
author: chinggg
categories:
  - project
  - ospp
image: /assets/2021/08-ospp-mid-term-cli/terminal-wechaty.webp
tags:
  - summer-of-wechaty
  - summer-2021
  - ospp
  - ospp-2021
  - mid-term
  - ecosystem
---

“[开源软件供应链点亮计划-暑期2021](https://summer.iscas.ac.cn)”（以下简称 暑期2021）是由中科院软件所与 openEuler 社区共同举办的一项面向高校学生的暑期活动。旨在鼓励在校学生积极参与开源软件的开发维护，促进国内优秀开源软件社区的蓬勃发展。活动联合各大开源社区，针对重要开源软件的开发与维护提供项目，并向全球高校学生开放报名。 学生可自主选择感兴趣的项目进行申请，并在中选后获得该软件资深维护者（社区导师）亲自指导的机会。 根据项目的难易程度和完成情况，参与者还可获取“开源软件供应链点亮计划-暑期2021”活动奖金和奖杯。

本项目 [基于 Blessed 的 Wechaty 命令行文本客户端软件] 系 暑期2021 支持的开源项目。

## [基于 Blessed 的 Wechaty 命令行文本客户端软件]信息

- 导师：李卓桓
- 学生：刘靖
- 项目介绍：[https://github.com/wechaty/summer/issues/80](https://github.com/wechaty/summer/issues/80)

- 项目名称：基于 Blessed 的 Wechaty 命令行文本客户端软件
- 方案描述：
  - 仿照 Linux 命令行终端的 IRC 文本客户端，实现一个基于 Wechaty 的即时通讯客户端，通过 Wechaty 支持所有现有的 [Wechaty Puppet Providers](https://wechaty.js.org/docs/puppet-providers/)，比如微信、企业微信、飞书、Whatsapp 等。  
  - 利用 [Blessed](https://github.com/chjj/blessed) 和 [blesssed-contrib](https://github.com/yaronn/blessed-contrib) 提供的组件，绘制终端图形界面程序
  - 监听消息接收和键鼠点击等事件，动态调整组件的内容，提供接近一般聊天软件的交互体验
  - 使用 [react-blessed](https://github.com/Yomguithereal/react-blessed)、RxJS 和 Redux 重构代码
- 时间规划：  
  - 第一阶段（7.1 - 8.14）对接后端事件，选择恰当的架构与技术栈完成数据的存储、展示与更新
    - 自行探索做出 demo
      - 7.1 - 7.14
      - 实现简单的消息接收和联系人列表展示
      - 与导师沟通架构设计和需使用的技术栈
    - 军训期间，项目暂缓
      - 7.15 - 7.29
      - 时间有限，学习前端相关知识或抽空实现较简单的功能
    - 改进代码结构，重点推进数据的存储与状态的管理
      - 8.1 - 8.14
      - 实现消息内容按来源存储与查看
      - 联系人与群聊信息的缓存
      - 撰写中期报告
  - 第二阶段（8.15 - 9.30）重点完善前端交互，持续改进用户体验
    - 提供更多的交互选项和管理功能
      - 8.15 - 8.30
      - 根据未读消息数量对联系人进行状态管理和智能排序
    - 实现消息的发送
      - 9.1 - 9.14
    - 完善文档，编写样例代码和测试
      - 9.15 - 9.30

## 项目进度

- 已完成工作：  
  - 所有消息的接收和存储
  - 联系人与群聊信息的展示与缓存
  - GitHub CI/CD 和 NPM 包的发布
  - 按当前聊天对象显示相应对话记录
  - 选中群聊时显示其所有成员
  - 消息的发送
- 遇到的问题及解决方案：
  - 首先是技术上的问题，主要是 [Blessed](https://github.com/chjj/blessed) 长期无人维护，使用者也少，缺乏可参考的文档和资源。为了解决组件使用中遇到的 bug，常常需要深入阅读源码，为此我学习了使用 VS Code 调试 Node.js 程序的方法，成功找到了一些问题的原因并解决，还在导师的鼓励下[向社区博客投稿](https://wechaty.js.org/2021/08/08/vscode-debug-nodejs/)。不过由于终端环境本身的限制和不同平台的兼容问题，Blessed 在渲染能力和交互性等方面确实不尽如人意，部分预想的功能可能终究难以实现。
  - 还有就是架构选型和时间规划上的问题，在本身就缺乏独立开发经验的情况下，我一开始执着于架构的选择，企图从一开始就确定好所有方案，浏览了相关项目后反而更迷茫，转而开始实现功能后才发现 Blessed 有诸多预想之外的问题，还是要自己亲自实践逐一踩坑，软件开发没有银弹。
  - 最后就是开源项目维护上的问题，在导师的帮助下，使用 Issue 来细分任务并管理进度，利用 GitHub Actions 进行 CI/CD，发布 NPM 包
- 后续工作安排：  
  - 目前基本的聊天功能已粗略实现，联系人和群聊管理还要和导师讨论以何种形式呈现
  - 考虑到 blessed 和终端的特性，一般聊天软件的设计（如新对话置顶）可能无法照搬
  - 在保证可用性的情况下，使用 React 和 Redux 重构项目

## 项目成果

项目仓库: <https://github.com/wechaty/cli>  

### live coding视频

{% include iframe.html src="https://www.youtube.com/watch?v=1U0ONeHV7z8" %}

### PPT展示视频

{% include iframe.html src="https://www.youtube.com/watch?v=xPsAwLglVdM" %}

### 项目PPT

{% include iframe.html src="/assets/2021/08-ospp-mid-term-cli/mid-slides.pdf" %}

## 联系我们

- 项目链接：[https://github.com/wechaty/cli]  
- 联系方式：liuchinggg@gmail.com
