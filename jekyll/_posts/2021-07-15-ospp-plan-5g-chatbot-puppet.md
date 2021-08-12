---
title: "开发支持电信运营商5G Chatbot/RCS的 Wechaty接入Puppet模块"
author: sqcn
categories:
  - project
  - ospp
image: /assets/2021/07-ospp-plan-5g-chatbot-puppet/5g-chatbot-ospp.webp
tags:
  - 5g
  - chatbot
  - ecosystem
  - summer-of-wechaty
  - summer-2021
  - ospp
  - ospp-2021
  - plan
---

## 开发支持电信运营商5G Chatbot/RCS的 Wechaty接入Puppet模块

- 导师：李佳芮,康嘉,李卓桓

- 学生：张瑞宁,邵琦

- 项目介绍：<https://github.com/wechaty/summer-of-wechaty/issues/74>

- 模块列表

  - 使用5g Chatbot接口，把收发消息测通
  - 使用 <https://github.com/wechaty/wechaty-puppet-official-account> 项目作为模版，将其中的微信公众平台调用全部封装为RCS模块的调用
  - 发布 Git Repo wechaty-puppet-5g-msg，实现文本消息的发送和接收
  - 进行测试，完善项目文档
  - 配置 GitHub Actions 实现自动化测试（可选）

- 计划安排：

  - 使用5g Chatbot接口，把收发消息测通
    - 7/12 - 7/18
    - 配置好服务器，测通相关接口
  - 使用 <https://github.com/wechaty/wechaty-puppet-official-account> 项目作为模版，将其中的微信公众平台调用全部封装为RCS模块的调用
    - 7/19 - 8/10
    - 学习现有源码，学习RCS的相关知识。
    - 接入wechaty，进行代码整合，提高代码质量。
  - 项目中期总结
    - 8/11 - 8/15
    - 实现阶段性目标，总结项目阶段性成果。
  - 发布 Git Repo wechaty-puppet-5g-msg，实现文本消息的发送和接收
    - 8/16 - 8/31
    - 提供一个 examples/ding-dong-bot.ts ，完成“接收到文字消息ding时，自动回复消息dong"的功能
  - 项目完善优化
    - 9/1 - 9/15
    - 撰写整个项目过程的总结博客。配置 GitHub Actions 实现自动化测试，增加单元测试等。
  - 项目结项
    - 9/16 - 9/30
    - 总结项目成果，项目经验，准备结项材料。

- 联系方式：

  - 张瑞宁：3134191406@qq.com
  - 邵琦：shaoqichn@qq.com

- 分工合作:

  - 分工：张瑞宁同学需主要负责代码实现和gitlab项目维护，邵琦主要同学负责代码审查和gitlab项目维护。共同撰写中英文文档。
  - 津贴分配：邵琦同学：张瑞宁同学=1:1

> Author: [@zrn-fight](https://github.com/zrn-fight)[@Sochy](https://github.com/sqcn)

## 关于暑期2021

“开源软件供应链点亮计划-暑期2021”（以下简称 暑期2021）是由中科院软件所与 openEuler 社区共同举办的一项面向高校学生的暑期活动。 旨在鼓励在校学生积极参与开源软件的开发维护，促进国内优秀开源软件社区的蓬勃发展。 根据项目的难易程度和完成情况，参与者还可获取“开源软件供应链点亮计划-暑期2021”活动奖金和奖杯。

官网：<https://summer.iscas.ac.cn/#/homepage>

本项目 [开发支持电信运营商5G Chatbot/RCS的 Wechaty接入Puppet模块] 系暑期2021支持的开源项目。
