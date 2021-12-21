---
title: "2021-期中报告-基于5G平台开发puppet模块接入wechaty"
author: fabian
categories:
  - project
image: /assets/2021/12-mid-term-wechaty-puppet-walnut-report/puppet-walnut.webp
tags:
  - 5g
  - puppet-walnut
  - chatbot
  - ecosystem
  - plan
---

## 基于 5G 平台开发 puppet 模块接入 wechaty

- 项目名称：基于5G消息的 Wechaty Puppet 模块的设计与实现
- 学生：鲍耀龙
- 导师：苏畅
- 项目介绍：<https://github.com/juzibot/intern/issues/1>
- 代码地址：<https://github.com/wechaty/puppet-walnut>

### 背景介绍

- Wechaty 社区目前已经支持微信、Whatsapp、企业微信、飞书等常见流行即时通讯工具，并且能够通过多语言 SDK （比如 Python Wechaty） 进行调用。
- [5G Chatbot (RCS)](https://wechaty.js.org/2021/03/27/rcs-messaging-chatbot/) 是近期中国电信运营商基于 5G 的消息战略落地平台，未来的 5G 手机将会内置 RCS 消息的处理能力。
- [硬核桃社区](https://www.5g-msg.com/#/) 的 [电信运营商商5G Chatbot](https://wechaty.js.org/2021/03/27/rcs-messaging-chatbot/) 平台。

### 目标计划

- 基于 5G 平台的开放 api 进行封装，实现简单的`ding-dong-bot`。
- 丰富 5G 的消息模式，实现支持富文本、文件、css等多样消息格式的 puppet。

### 项目进展

- 已经实现的puppet的封装，支持简单消息、位置消息等多样信息格式。
- 完善了联系人的模块，实现联系人的数据结构整合方便wechaty的调用。
- 引入了本地缓存，将消息和联系人模块都接入缓存，实现快速的加载和存储。

### 视频展示

{% include iframe.html src="https://youtu.be/i5UohqZ9uTs" %}

### 计划安排

- 阶段一
  1. 熟悉 wechaty 的 api，将 5G 消息和 wechaty 的丰富功能进行整合。
  2. 封装 文本、文件、css等多样消息格式，简化调用模式。
- 阶段二
  1. 完善消息和缓存模块、支持消息和联系人内容的缓存。
  2. 完善 sever 和 5G 平台的交互过程。
- 阶段三
  1. 完善项目的构建和说明文档。
  2. 项目进行部署和稳定性测试。

> Author: [@fabian](https://github.com/fabian4)
