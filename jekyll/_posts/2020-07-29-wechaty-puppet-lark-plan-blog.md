---
title: "基于开放 API 封装 Wechaty 接口下的飞书聊天机器人：期初"
author: roxanne718
categories: project
image: /assets/2020/lark-puppet/wechaty-lark.webp
tags:
  - summer-2020
  - puppet-provider
  - lark
  - summer-of-wechaty
  - ecosystem
---

“开源软件供应链点亮计划-暑期2020”（以下简称暑期2020）是由中科院软件所与 openEuler 社区共同举办的一项面向高校学生的暑期活动。旨在鼓励在校学生积极参与开源软件的开发维护，促进国内优秀开源软件社区的蓬勃发展。
根据项目的难易程度和完成情况，参与者还可获取“开源软件供应链点亮计划-暑期2020”活动奖金和奖杯。
官网：[https://isrc.iscas.ac.cn/summer2020](https://isrc.iscas.ac.cn/summer2020) 官方新闻：[http://www.iscas.ac.cn/xshd2016/xshy2016/202004/t20200426_5563484.html](http://www.iscas.ac.cn/xshd2016/xshy2016/202004/t20200426_5563484.html)
本项目 [基于开放 API 封装 Wechaty 接口下的飞书聊天机器人] 系 暑期2020 支持的开源项目。

## [基于开放 API 封装 Wechaty 接口下的飞书聊天机器人]具体计划

- 导师：高原 吴京京

- 学生：范蕊

- 模块列表
  - [ ] 接收消息
  - [ ] 通讯录获取
  - [ ] 实现 puppet 上各个类型的消息接口
  - [ ] 设计配置参数
  - [ ] 使用文档

- 计划安排：
  - 阅读源代码
    - 7.29 - 7.31
    - 阅读 wechaty 源代码
    - 学习飞书服务端 API
    - 整理需要实现的 puppet list
  - 接收消息
    - 8.1 - 8.5
    - 通过飞书订阅消息事件实现消息接收
  - 通讯录获取
    - 8.6 - 8.10
    - 通过飞书订阅通讯录事件实现通讯录更新信息的接收
  - 实现 puppet 上各个类型的消息接口
    - 8.10 - 8.30
    - 对接飞书接口, 实现各个类型的消息接口
    - 消息类型包括: 文字, 图片, 富文本, 群名片
  - 设计配置参数
    - 8.31 - 9.7
  - 使用文档
    - 9.8 - 9.12
  - 项目完善
    - 9.12 - 9.30
    - 代码重构

- 项目链接：[https://github.com/Roxanne718/wechaty-puppet-lark](https://github.com/Roxanne718/wechaty-puppet-lark)

- 联系方式：+86 17822015718 | email: 953299708@qq.com

> Author: [@roxanne718](https://github.com/Roxanne718)
> Code: [wechaty-puppet-lark](https://github.com/Roxanne718/wechaty-puppet-lark)
