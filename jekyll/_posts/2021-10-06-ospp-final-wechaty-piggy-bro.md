---
title: "OSPP 2021-结项报告-基于 Wechaty 开发开源的二师兄社群逗乐机器人"
author: reikohaku
categories:
  - project
  - ospp
image: /assets/2021/10-ospp-final-wechaty-piggy-bro/piggy-bro-logo.webp
tags:
  - chat
  - summer-of-wechaty
  - summer-2021
  - ospp
  - ospp-2021
  - final
---

> Author: [@ReiKohaku](https://github.com/ReiKohaku)

## 暑期2021

“开源软件供应链点亮计划-暑期2021”（以下简称 暑期2021）是由中科院软件所与 openEuler 社区共同举办的一项面向高校学生的暑期活动。
旨在鼓励在校学生积极参与开源软件的开发维护，促进国内优秀开源软件社区的蓬勃发展。
根据项目的难易程度和完成情况，参与者还可获取“开源软件供应链点亮计划-暑期2021”活动奖金和奖杯。
官网：[https://summer.iscas.ac.cn/](https://summer.iscas.ac.cn/)

本项目 [基于 Wechaty 开发开源的二师兄社群逗乐机器人] 系 暑期2021 支持的开源项目。

## 项目信息

* 导师：韩磊、鲁玉超、王玉丹
* 学生：井维嘉
* 项目介绍：[https://github.com/wechaty/summer-of-wechaty/issues/83](https://github.com/wechaty/summer-of-wechaty/issues/83)

* 项目名称：基于 Wechaty 开发开源的二师兄社群逗乐机器人

* 方案描述

  本项目需要基于Wechaty开发一个多功能群聊机器人。

  该机器人的核心功能是编写并配置**拦截器**来实现对消息的响应。拦截器是一种**固定传入参数和返回值类型的函数**，通过编写拦截器的逻辑，可以**拦截消息**或**放行消息给下一个拦截器**，同时**做出一定的响应**。

  本项目**预置了若干功能**，如查天气、讲笑话、成语接龙、猜字谜等以供使用和参考。同时，本项目希望能够**允许用户自行添加功能**，所以用户可以通过自己编写拦截器的方式，来为机器人添加功能。

  本项目也将提供一个**二师兄后花园**页面，作为扩展的帮助文档、状态查询和日活功能使用。

* 时间规划：

  * 开发可扩展式开发框架（7.1-7.7）
    * 熟悉Wechaty开发模式
    * 搭建二师兄开发脚手架
  * 具体功能实现（7.8-7.30）
    * 初步实现要求中的具体功能，可能包括且不限于：讲笑话、看热搜、查天气、成语接龙、猜图片、猜歌名
    * 初步编写相关功能API的注册与部署文档

  * 设计二师兄Logo及形象（8.1-8.7）
    * 为二师兄的Logo和形象做出初步描述
    * Logo及形象定稿
  * 开发二师兄后花园（8.8-8.30）
    * 设计后花园功能和页面布局
    * 搭建二师兄后花园服务及页面

  * 编写文档与完善功能（9.1-9.30）
    * 编写使用、部署及开发文档
    * 整理代码并完善功能

## 项目总结

项目仓库：[https://github.com/ReiKohaku/piggy-bro](https://github.com/ReiKohaku/piggy-bro)

### 项目成果

截至到项目结束，取得了如下成果：

* 搭建了在任意支持的环境中可以自行部署的开箱即用的微信机器人。
* 内置了讲笑话、查天气、搜音乐、看热搜、成语接龙和猜字谜六项基本娱乐功能。
* 设计了“具备电子感、偏卡通的、类似大众心目中传统二师兄形象”的Logo。
* 编写了基本的后花园服务和页面，通过阅读文档可以学会部署的方法。后花园提供了使用帮助和状态查询两个模块。
* 编写了详细的部署文档，以及功能开发相关的文档。

项目原计划的核心目标已经全部完成。

### Live Code视频

{% include iframe.html src="https://www.youtube.com/embed/51EwCNB_Y90" %}

### PPT展示视频

{% include iframe.html src="https://www.youtube.com/embed/Na9pGdf_6oY" %}

### 项目PPT

{% include iframe.html src="/assets/2021/10-ospp-final-wechaty-piggy-bro/final-ppt.pdf" %}

## 其它

* 联系方式：

  微信：ReiKohaku
  E-mail：hbsjzjwj@163.com
