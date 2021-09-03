---
title: "暑期2020[基于 RPA 封装 Wechaty 接口下的快手聊天机器人]中期报告"
author: bikaiqiao
categories: project
image: /assets/2020/wechaty-puppet-kuaishou-mid-term/wechaty-puppet-kuaishou-mid-term.jpeg
tags:
  - kuaishou
  - puppet
  - summer-of-wechaty
  - summer-2020
  - ecosystem
---

“开源软件供应链点亮计划-暑期2020”（以下简称 暑期2020）是由中科院软件所与 openEuler 社区共同举办的一项面向高校学生的暑期活动。
旨在鼓励在校学生积极参与开源软件的开发维护，促进国内优秀开源软件社区的蓬勃发展。
根据项目的难易程度和完成情况，参与者还可获取“开源软件供应链点亮计划-暑期2020”活动奖金和奖杯。
官网：[https://isrc.iscas.ac.cn/summer2020](https://isrc.iscas.ac.cn/summer2020) 官方新闻：[http://www.iscas.ac.cn/xshd2016/xshy2016/202004/t20200426_5563484.html](http://www.iscas.ac.cn/xshd2016/xshy2016/202004/t20200426_5563484.html)
本项目 [基于 RPA 封装 Wechaty 接口下的快手聊天机器人] 系 暑期2020 支持的开源项目。

## [基于 RPA 封装 Wechaty 接口下的快手聊天机器人]中期报告

## 项目进度

- 已完成:
  - 探索方向
    - 7.19-7.27
    - 主要探索之前预想的方向
  - auto.js init
    - 7.27-8.03
    - 完成了以auto.js作为服务端的初始化结构
  - 为auto.js增加通信，完善封装代码
    - 8.03-8.09
    - 增加了客户端通信，使得在虚拟机上可以完成通过客户端控制的收发消息
    - 并且重新封装了原来分散的脚本为一个class
  - 构建puppet
    - 构建puppet的初版，虽然还存在一些bug但是可以完成dingdong消息的收发
- 遇到的问题及解决方案
  - auto.js碰到的问题：
    - 快手的密码组件不能够被直接设置密码
    - 客户端和服务端通信问题阻塞
    - 通信自动关闭
    - 消息不能够被直接监听。如果进入消息页面时有新消息能够获取，如果进入时没有过一会才有则不能收到消息。
  - 解决方案
    - 目前只能通过屏幕位置然后人为点击，再模拟键盘操作输入密码
    - 由于readLine()读取数据时没有换行符就会陷入阻塞状态。每次发送的字符串结尾加上\r\n即可
    - 设置死循环让readLine进入阻塞状态监听客户端发送的信息
    - 通过循环findOne(1000)以达到每隔1s重新在当前页面查找新消息提醒。
- 后续工作安排
  - 8.16-8.23修正消息监听
  - 8.23-8.30修正eslint错误
  - 在完善服务端代码的基础上继续完善puppet代码
  - 其他

## Wechaty Demo Day 视频

### PPT展示

{% include iframe.html src="https://player.bilibili.com/player.html?bvid=BV1vi4y1g7L2" %}

### Live Code视频

{% include iframe.html src="https://player.bilibili.com/player.html?bvid=BV1ei4y1g7og" %}

### 项目地址

- 项目链接：[https://github.com/bikaiqiao/kuaishou-auto](https://github.com/bikaiqiao/kuaishou-auto) / [https://github.com/bikaiqiao/kuaishouPuppet.git](https://github.com/bikaiqiao/kuaishouPuppet.git)
- 联系方式：+86 13943110476 | 358461417@qq.com
