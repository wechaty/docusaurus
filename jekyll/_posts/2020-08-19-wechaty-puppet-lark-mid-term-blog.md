---
title: "基于开放 API 封装 Wechaty 接口下的飞书聊天机器人：期中"
author: roxanne718
categories: project
image: /assets/2020/lark-puppet/wechaty-lark-mid-term.webp
tags:
  - summer-2020
  - summer-of-wechaty
  - lark
  - ecosystem
---

“开源软件供应链点亮计划-暑期2020”（以下简称暑期2020）是由中科院软件所与 openEuler 社区共同举办的一项面向高校学生的暑期活动。旨在鼓励在校学生积极参与开源软件的开发维护，促进国内优秀开源软件社区的蓬勃发展。
根据项目的难易程度和完成情况，参与者还可获取“开源软件供应链点亮计划-暑期2020”活动奖金和奖杯。
官网：[https://isrc.iscas.ac.cn/summer2020](https://isrc.iscas.ac.cn/summer2020) 官方新闻：[http://www.iscas.ac.cn/xshd2016/xshy2016/202004/t20200426_5563484.html](http://www.iscas.ac.cn/xshd2016/xshy2016/202004/t20200426_5563484.html)
本项目 [基于开放 API 封装 Wechaty 接口下的飞书聊天机器人] 系 暑期2020 支持的开源项目。

<!--more-->

## [基于开放 API 封装 Wechaty 接口下的飞书聊天机器人]信息

- 导师：高原 吴京京
- 学生：范蕊

- 项目名称：基于开放 API 封装 Wechaty 接口下的飞书聊天机器人
- 方案描述：
  - 通过飞书订阅消息事件读取消息
  - 通过飞书订阅通讯录事件实时更新通讯录内成员信息
  - 对接飞书接口，实现 puppet 上各个类型的消息接口
  - 设计配置参数
  - 撰写飞书 puppet 的使用文档
- 时间规划
  - 熟悉技术栈
    - 7.1-7.20
    - 阅读Wechaty-puppet-plus源代码，学习TypeScript，熟悉飞书服务端API
  - 与飞书建立连接
    - 7.20-7.31
    - 通过Express与飞书建立连接，实现文本信息的收发（即ding-dong-bot机器人）
  - 完成文本信息的收发puppet
    - 8.1-8.5
    - 将文本信息的收发结合到lark-puppet中
    - 搭建项目基础框架
  - 完成其他基础消息类型的收发
    - 8.6-8.20
    - 完成其他消息类型的收发，包括：图片、视频、文件
  - 完成消息卡片的收发
    - 8.21-8.30
    - 通过消息卡片与用户建立多次交互式通信
  - 设置配置参数
    - 8.31-9.7
  - 代码重构
    - 9.8-9.20
  - 撰写使用文档
    - 9.21-9.30

## 项目进度

- 已完成工作
  - 搭建了代码基础框架，与飞书端建立了连接通路，完成了URL验证、鉴权等基础功能函数的封装
  - 完成文本消息和图片消息的收发puppet，现在可以通过wechaty-lark来编写消息收发机器人
  - 完成文件消息的接收，现在可以将收到的文件保存到本地
  - 完成了企业通讯列表、部门列表的获取（尚未封装到puppet中）

- 遇到的问题及解决方案
  - 使用Ngrox进行内网穿透时，每次重启子域名都会发生变化，在老师的建议和指导下最终采用localtunnel解决了这一问题。
  - 由于对TypeScript和HTTP请求的理解不太透彻，遇到了一些消息格式上的问题，通过查阅资料、学习其他同学的代码等解决了这些问题。

- 后续工作安排
目前在项目细节上有一些疑惑，如获取到的文件如何存储/处理等，在完成本周的任务后将针对这些细节和导师进行沟通，整体时间安排不变。

- 项目成果：
  - 中期汇报 视频:{% include iframe.html src="https://youtu.be/u5bbdWLbpBY" %}
  - Demo 视频:{% include iframe.html src="https://youtu.be/g7K8l734uuY" %}

## 联系我们

- 项目链接：[https://github.com/Roxanne718/wechaty-puppet-lark](https://github.com/wechaty/wechaty-puppet-lark)

- 联系方式：+86 17822015718 | email: 953299708@qq.com
