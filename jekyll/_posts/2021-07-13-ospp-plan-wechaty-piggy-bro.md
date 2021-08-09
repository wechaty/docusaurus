---
title: "OSPP 2021-期初报告-基于 Wechaty 开发开源的二师兄社群逗乐机器人"
author: reikohaku
categories:
  - project
  - ospp
image: /assets/2021/07-ospp-plan-wechaty-piggy-bro/wechaty-logo.webp
tags:
  - chat
  - summer-of-wechaty
  - summer-2021
  - ecosystem
  - ospp
  - ospp-2021
  - plan
---

“开源软件供应链点亮计划-暑期2021”（以下简称 暑期2021）是由中科院软件所与 openEuler 社区共同举办的一项面向高校学生的暑期活动。
旨在鼓励在校学生积极参与开源软件的开发维护，促进国内优秀开源软件社区的蓬勃发展。
根据项目的难易程度和完成情况，参与者还可获取“开源软件供应链点亮计划-暑期2021”活动奖金和奖杯。
官网：[https://summer.iscas.ac.cn/](https://summer.iscas.ac.cn/)

本项目 [基于 Wechaty 开发开源的二师兄社群逗乐机器人] 系 暑期2021 支持的开源项目。

## 项目介绍

* 项目名称：基于 Wechaty 开发开源的二师兄社群逗乐机器人
* 导师：韩磊、鲁玉超、王玉丹
* 学生：井维嘉
* 模块列表
  * 可扩展式开发框架
  * 讲笑话、成语接龙、猜图片、猜歌名等功能
  * 二师兄Logo及形象
  * 二师兄后花园
  * 使用、部署与开发文档
* 项目要求：[https://github.com/wechaty/summer-of-wechaty/issues/83](https://github.com/wechaty/summer-of-wechaty/issues/83)

* 项目链接：[https://github.com/ReiKohaku/piggy-bro](https://github.com/ReiKohaku/piggy-bro)

## 开发方案

* 任务要求
  基于 Wechaty 开发机器人，实现讲笑话、成语接龙、猜图片、猜歌名、查航班、查天气、微博爆款热搜提醒等功能；并设计Logo及形象；开发二师兄后花园。
* 实现方案
  利用 Wechaty 特性，实现一个简单的可扩展式脚手架，模块化实现各项功能。之后收集高可用API，实现要求的功能。后花园使用 Node.js + Vue 的开发模式，实现一个简单的小游戏。

## 开发时间计划

### 二师兄机器人开发（7月）

* 开发可扩展式开发框架（7.1-7.7）

  * 熟悉Wechaty开发模式
  * 搭建二师兄开发脚手架
  
* 具体功能实现（7.8-7.30）

  * 初步实现要求中的具体功能，可能包括且不限于：讲笑话、看热搜、查天气、成语接龙、猜图片、猜歌名
  * 初步编写相关功能API的注册与部署文档

### 二师兄周边设计（8月）

* 设计二师兄Logo及形象（8.1-8.7）
  * 为二师兄的Logo和形象做出初步描述
  * Logo及形象定稿
  
* 开发二师兄后花园（8.8-8.30）
  * 设计后花园游玩流程及各项数值
  * 搭建二师兄后花园服务及页面

### 收尾工作（9月）

* 编写文档与完善功能（9.1-9.30）
  * 编写使用、部署及开发文档
  * 整理代码并完善功能

## 其它

* 联系方式：
  
  微信：ReiKohaku
  E-mail：hbsjzjwj@163.com

> Author: [@ReiKohaku](https://github.com/ReiKohaku)
