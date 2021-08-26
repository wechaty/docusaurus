---
title: "OSPP 2021-期中报告-基于 Wechaty 开发开源的二师兄社群逗乐机器人"
author: reikohaku
categories:
  - project
  - ospp
image: /assets/2021/08-ospp-mid-term-wechaty-piggy-bro/piggy-bro-logo.webp
tags:
  - chat
  - summer-of-wechaty
  - summer-2021
  - ospp
  - ospp-2021
  - mid-term
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

## 项目进度

* 已完成工作

  目前已经完成了机器人基本框架的全部搭建，并且提供了讲笑话、看热搜、查天气、搜音乐、成语接龙、猜字谜的预置功能。

  二师兄的Logo已基本定稿。

* 遇到的问题及解决方案

  目前的主要问题是不能很好地应对自然语义的复杂环境。

  由于设计上希望响应尽可能快速、高效，目前提供的示例插件均使用正则表达式来检查功能触发、解析参数。这样做有两个缺点：

  * 正则表达式的覆盖虽广，却也不全面。

    例如查天气功能中，预设了两种触发方式：“二师兄，查xx天气”和“二师兄，xx天气如何/怎么样”。但事实上问天气不止有这些问法，还有如“xx的天好不好”、“xx在下雨吗”等问法。这些特殊的问法并不能被正则表达式解析。

  * 正则表达式对参数的提取不是非常好。

    依旧以查天气功能距离，“二师兄，xx天气如何”这句话，关键在于提取出地名。但是由于“二师兄”这一触发词后面就是参数，所以提取地名就稍显困难。另外就如上一条举例，“xx在下雨吗”这类问话中，用户还表达了**xx是否在下雨**这一含义，这时更符合自然语言的应答应该是“xx在下雨”或“xx没有在下雨”。正则表达式暂时还做不到这些。

  关于这一问题的解决方案，有一种是接入微信开放平台的语境检测API，这样可以较为准确地识别语义。另外也可以考虑使用**jieba**库分词来解决语义分析和参数提取的问题。

* 后续工作安排

  后续工作与计划基本一致，优先考虑完成计划清单上的任务。
  
  另外，计划着手对于拦截器的逻辑做进一步优化，允许开发者为功能配置预检和帮助文本。
  
  关于自然语义识别这方面将会视产能而定。、

## 项目成果

项目仓库：[https://github.com/ReiKohaku/piggy-bro](https://github.com/ReiKohaku/piggy-bro)

### Live Code视频

{% include iframe.html src="https://www.youtube.com/embed/i1AhcgQzQHw" %}

### PPT展示视频

{% include iframe.html src="https://www.youtube.com/embed/VQ56QFz69Ek" %}

### 项目PPT

{% include iframe.html src="/assets/2021/08-ospp-mid-term-wechaty-piggy-bro/mid-term-ppt.pdf" %}

## 其它

* 项目链接：[https://github.com/wechaty/summer-of-wechaty/issues/83](https://github.com/wechaty/summer-of-wechaty/issues/83)

* 联系方式：

  微信：ReiKohaku
  E-mail：hbsjzjwj@163.com
