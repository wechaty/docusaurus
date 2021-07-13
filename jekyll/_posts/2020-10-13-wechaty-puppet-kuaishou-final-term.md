---
title: "基于RPA封装的Wechaty接口下的快手聊天机器人结项报告"
author: wangjunwei
categories: project
image: /assets/2020/wechaty-puppet-kuaishou-mid-term/wechaty-puppet-kuaishou-mid-term.webp
tags:
  - kuaishou
  - summer-of-wechaty
  - summer-2020
  - ecosystem
---

## 暑期 2020

“开源软件供应链点亮计划-暑期 2020”（以下简称 暑期 2020）是由中科院软件所与 openEuler 社区共同举办的一项面向高校学生的暑期活动。

旨在鼓励在校学生积极参与开源软件的开发维护，促进国内优秀开源软件社区的蓬勃发展。

根据项目的难易程度和完成情况，参与者还可获取“开源软件供应链点亮计划-暑期 2020”活动奖金和奖杯。

官网：[https://isrc.iscas.ac.cn/summer2020](https://isrc.iscas.ac.cn/summer2020) 官方新闻：[http://www.iscas.ac.cn/xshd2016/xshy2016/202004/t20200426_5563484.html](http://www.iscas.ac.cn/xshd2016/xshy2016/202004/t20200426_5563484.html)

本项目 [基于 RPA 封装 Wechaty 接口下的快手聊天机器人] 系 暑期 2020 支持的开源项目。

<!--more-->

## 结项报告：基于 RPA 封装 Wechaty 接口下的快手聊天机器人

## 项目信息

- 项目名称：基于 RPA 封装 Wechaty 接口下的快手聊天机器人
- 方案描述：服务器端架设虚拟机，通过 auto.js 操作虚拟机内部的快手。类似于通过 puppeteer 操作微信网页版，但是被迫增加了通信。
- 时间规划：7.19-8.15 完成主要方案的探索 8.15-9.30 完成 dingdong-bot 完善接口

## 项目总结

- 项目成果：

  - 熟悉 wechaty 的使用
  - 使用 RPA 方式完成了 puppet 的部分接口
    - 服务端在特定条件下可以完成一套流程，从登录到收发消息（验证问题仍然不能解决）
    - 服务端增加了图片消息类型，通过 base64 直接发送，处理时间略长
    - 创建群，以及群消息管理也可以实现，若有人多同时发送消息则效果不是很好
  - 完成了 readme 文档的编写

- 遇到的问题及解决方案：
  - 初期探索了很多方案，拦截收发消息的接口，或者使用 puppeteer 操作网页版
  - 最终选择了使用 auto.js 在虚拟机操控快手与 puppet 通信来控制收发消息
  - 初期的困难在于应用组件的命名不规则等导致的难以选取。
  - 框架快速操作导致的 bug（代码运行到页面 b 的操作的时候，应用还处于页面 a 跳转页面 b 的动画状态）
  - 私信的消息没办法监听，后来通过特定的 app 启动顺序解决了该问题。局限性较大且不够稳定，猜测和 auto.js 的底层有关
  - 通信也曾出现过问题，无法顺利的多次收发消息。后来通过调整文本末的代码解决（增加换行符）
  - 修改 puppet 后出现了各种 eslint 错误，虽然最终被解决并且提交了 dingdongbot 的初期版本，但是后续修改调试略有困难
  - 完成的 dingdong-bot[演示地址](https://www.bilibili.com/video/BV1ei4y1g7og)()
  - 由于使用的是 RPA 方式所以多数的时间都放在了修改服务端代码上，puppet 还有很多待改进的地方

### PPT

{% include iframe.html src="https://player.bilibili.com/player.html?bvid=BV1vi4y1g7L2" %}

### Live coding

{% include iframe.html src="https://player.bilibili.com/player.html?bvid=BV1ei4y1g7og" %}

### 项目地址

- 项目链接：[https://github.com/bikaiqiao/kuaishou-auto](https://github.com/bikaiqiao/kuaishou-auto) / [https://github.com/bikaiqiao/kuaishouPuppet](https://github.com/bikaiqiao/kuaishouPuppet)
