---
title: "2021-期初报告-基于5g平台开发puppet模块接入wechaty"
author: fabian
categories:
  - project
image: /assets/2021/07-ospp-plan-5g-chatbot-puppet/5g-chatbot-ospp.webp
tags:
  - 5G
  - chatbot
  - ecosystem
  - plan
---

## 基于5g平台开发puppet模块接入wechaty

- 项目名称：基于5G消息的Wechaty Puppet模块的设计与实现
- 导师：苏畅
- 学生：鲍耀龙
- 项目介绍：<https://github.com/juzibot/intern/issues/1
- 代码地址：<https://github.com/fabian4/puppet-5G>
- 背景介绍
  - Wechaty 社区目前已经支持微信、Whatsapp、企业微信、飞书等常见流行即时通讯工具，并且能够通过多语言 SDK （比如 Python Wechaty） 进行调用。
  - [5G Chatbot (RCS)](https://wechaty.js.org/2021/03/27/rcs-messaging-chatbot/) 是近期中国电信运营商基于 5G 的消息战略落地平台，未来的 5G 手机将会内置 RCS 消息的处理能力。
  - [硬核桃社区](https://www.5g-msg.com/#/) 的 [电信运营商商5G Chatbot](https://wechaty.js.org/2021/03/27/rcs-messaging-chatbot/) 平台。
- 目标计划
  - 基于5g平台的开放api进行封装，实现简单的`ding-dong-bot`
  - 丰富5g的消息模式，整合富文本、文件、css等多样消息格式
  - 根据wechaty的api和接口，将puppet进行完善使其方便接入wechaty
  - 进行模块拆分、结构解耦，并且完善项目文档
  - 完善项目构建过程、部署进行稳定性测试
- 计划安排
  - 阶段一
    1. 熟悉 wechaty 的api，将5g消息和wechaty的丰富功能进行整合
    2. 封装 文本、文件、css等多样消息格式，简化调用模式
  - 阶段二
    1. 完善消息和缓存模块、支持消息和联系人内容的缓存
    2. 完善 sever 和 5g 平台的交互过程
  - 阶段三
    1. 完善项目的构建和说明文档
    2. 项目进行部署和稳定性测试

> Author: [@fabian](https://github.com/fabian4)