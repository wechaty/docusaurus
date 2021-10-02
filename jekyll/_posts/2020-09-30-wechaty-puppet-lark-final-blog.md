---
title: "基于开放 API 封装 Wechaty 接口下的飞书聊天机器人：期末"
author: roxanne718
categories: project
image: /assets/2020/lark-puppet/wechaty-lark-final.webp
tags:
  - featured
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

## 项目总结

- 项目成果：
  - 项目仓库位于: <https://github.com/Roxanne718/wechaty-puppet-lark>
  - Live coding视频:{% include iframe.html src="https://youtu.be/eutz5EMlJCI" %}
  - Demo 视频:{% include iframe.html src="https://youtu.be/_y5DktHdL9U" %}
  
- 遇到的问题及解决方案：
  - 使用Ngrox进行内网穿透时，每次重启子域名都会发生变化，在老师的建议和指导下最终采用localtunnel解决了这一问题。
  - 由于对TypeScript和HTTP请求的理解不太透彻，遇到了一些消息格式上的问题，通过查阅资料、学习其他同学的代码等解决了这些问题。
  - 目前虽然完成了基础功能，但是项目并不能达到发布水准，如果想要像在微信中使用 wechaty 那样开发飞书机器人，还需要完成以下事情：
    - contact类、room类等的封装
    - 其他 payload 消息的封装与处理
    - 将 puppet 封装到 wechaty 中
  - 感谢 wechaty 社区对我的包容、帮助和鼓励。虽然只有短短三个月的时间，但在这个项目中收获了很多。在与导师的交流中学到了很多新的东西，也认识到了很多优秀的同伴。目前这个项目还没有达到我预期的水准，后续我还会继续跟进、完善，希望能完成一套完整的飞书机器人框架。
  - 这是我第一次严格意义上自己独立开发，在开发过程中遇到不少问题，如前后接口不一致、项目后期修改了前期的逻辑等等。在为新的 bug 焦头烂额的过程中我越来越理解到了工程化的重要性，希望自己能汲取教训，在今后的开发中做得更好。
  - 最后，希望“开源软件供应链点亮计划”系列活动越办越好，相信未来的开发者们也能从中获得成长、成为中国开源软件链新的贡献者。

## 联系我们

- 项目链接：[https://github.com/Roxanne718/wechaty-puppet-lark](https://github.com/Roxanne718/wechaty-puppet-lark)

- 联系方式：+86 17822015718 | email: 953299708@qq.com
