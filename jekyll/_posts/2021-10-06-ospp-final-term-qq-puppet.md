---
title: "OSPP 2021-结项报告-开发支持 QQ 聊天软件的 Wechaty Puppet Provider 模块"
author: anaivebird
categories:
  - project
  - ospp

image: /assets/2021/10-ospp-final-term-qq-puppet/wechaty-qq-puppet-logo.webp
tags:
  - summer-of-wechaty
  - summer-2021
  - ospp
  - ospp-2021
  - final-term
  - ecosystem
  - puppet
  - qq
---

本项目通过 Wechaty Puppet 的接口，可以将 QQ 进行 RPA 封装，使其成为 wechaty-puppet-oicq 供 Wechaty 开发者方便接入 QQ 平台，使其成为 Wechaty 可以使用的社区生态模块。

“[开源软件供应链点亮计划-暑期2021](https://summer.iscas.ac.cn)”（以下简称 暑期2021）是由中科院软件所与 openEuler 社区共同举办的一项面向高校学生的暑期活动。旨在鼓励在校学生积极参与开源软件的开发维护，促进国内优秀开源软件社区的蓬勃发展。活动联合各大开源社区，针对重要开源软件的开发与维护提供项目，并向全球高校学生开放报名。 学生可自主选择感兴趣的项目进行申请，并在中选后获得该软件资深维护者（社区导师）亲自指导的机会。 根据项目的难易程度和完成情况，参与者还可获取“开源软件供应链点亮计划-暑期2021”活动奖金和奖杯。

本项目 [开发支持 QQ 聊天软件的 Wechaty Puppet Provider 模块] 系 暑期2021 支持的开源项目。

## 开发支持 QQ 聊天软件的 Wechaty Puppet Provider 模块

### 项目背景

Wechaty 社区目前已经支持微信、Whatsapp、企业微信、飞书等常见流行即时通讯工
具，并且能够通过多语言 SDK (比如 Python Wechaty) 进行调用。
QQ 是国内和微信并列的两大聊天软件。我们在本次 Summer 2021 的项目中，Wechaty
希望可以实现对 QQ Chatbot 的支持。通过 Wechaty Puppet 的接口，可以将 QQ 进行 RPA 封装，使其成为 wechaty-puppet-oicq 供 Wechaty 开发者方便接入 QQ 平台，使其成
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

    开始正式进行代码的prototyping，先完成基础的功能，完成通过 Wechaty 加载 wechaty-puppet-oicq 模块，并通过oicq项目实现的qq协议，实现文本消息的收发功能。每周协同导师进行功能的开发和完善

- 第二阶段（8月-10月）
  - 8.16-8.30（已如期完成）

    完成期中 Demo Day 视频和wechaty.js.org上的中期报告。在现有基础上，对显示二维码，保存设备信息等问题进行调研和解决。

  - 9.1-9.30（已如期完成）

    将项目包上传npm，并与[wechaty-getting-started](https://github.com/wechaty/wechaty-getting-started)项目相连，使得用户可以通过设置环境变量一键化使用wechaty-puppet-oicq模块。设置github action自动测试代码，并在push版本时自动上传npm。实现了联系人信息的导入（QQ好友的昵称、性别等信息），wechaty bot可以在终端显示发送消息者的QQ昵称。

## 项目进度

### 已完成部分

1. ding dong bot完成登录：实现显示QQ登录二维码，并完成扫码登录环节，成功登录账号
2. ding dong bot消息回复：扫码即可运行QQ机器人，发送ding给机器人，即可收到dong的消息
3. 使得wechaty-puppet-oicq模块启动ESM（ES Modules）的支持（感谢李卓桓导师的帮助）
4. 设置github action自动测试代码，并在push版本时自动上传npm。
5. 与[wechaty-getting-started](https://github.com/wechaty/wechaty-getting-started)项目相连，使得用户可以通过设置环境变量一键化使用wechaty-puppet-oicq模块。
6. ContactPayload相关函数的实现：完成联系人信息的导入（QQ好友的昵称、性别等信息），wechaty bot可以在终端显示发送此消息者的QQ昵称。

### 遇到的困难与解决

- wechaty消息处理链路相对复杂，难以理解`

    通过咨询项目导师和wechaty飞书机器人负责人等途径，观看社区live coding视频，对消息处理进行快速学习，并通过编码实践，最终成功将oicq的事件和消息格式转换为了wechaty的messageRawPayload，也加深了对框架架构设计的理解。

- 遇到QQ风控
    通过途径弄到了一些QQ小号方便测试。

- 在CentOS7机器上安装ruby和jekyll遇到较多报错
    原因是ruby version manager依赖的GPG keyserver失效，更换[新的服务器地址](https://github.com/rvm/rvm/issues/5096)即可

- 中期报告修改在PR上讨论，和预览看到的实际效果有些差异，对话中导师想要的效果和我的理解可能不太一样，一次次来回比较费时间。感谢李佳芮导师耐心的指导和审核，最终完成了blog的修正。

- 与[wechaty-getting-started](https://github.com/wechaty/wechaty-getting-started)项目连接，做成一键化使用的过程中，遇到不少报错。感谢李卓桓导师的帮助下，完成了ESM（ES Modules）的支持，并跑通npm publish的github action，最终成功连接

- oicq库会显示额外的命令行调试信息。已经通过查阅文档去除这些信息。

## 项目成果

项目仓库: <https://github.com/wechaty/wechaty-puppet-oicq>

npm包：<https://www.npmjs.com/package/wechaty-puppet-oicq>

### live coding视频：

{% include iframe.html src="https://youtu.be/TbIgFhSWVxI" %}

> 国内版：<http://www.iqiyi.com/v_1uv2wbi4p44.html>

### PPT展示视频：

{% include iframe.html src="https://youtu.be/Z2IIPe0FLA4" %}

> 国内版：<https://www.iqiyi.com/v_1f3m7rhczog.html>

### 项目PPT：

{% include iframe.html src="/assets/2021/10-ospp-final-term-qq-puppet/final-qq-puppet.pdf" %}

## 联系我们

- 导师：李佳芮 Wechaty co-creator, Founder & CEO of Juzi.BOT (rui@chatie.io)
- 导师：李卓桓 Wechaty creator, Tencent TVP of Chatbot (huan@chatie.io)
- 学生：naivebird(github)：20210240029@fudan.edu.cn
- 项目链接：<https://github.com/wechaty/summer/issues/81>
