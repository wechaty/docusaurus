---
title: Wechaty Java 移植组件开发
author: cunkoulaocai
categories: project
tags:
  - java
  - soc2020
  - soc
  - ecosystem
image: /assets/2020/java-wechaty-transplant/java-wechaty-transplant.webp
---

> Author: [@cunkoulaocai](https://github.com/cunkoulaocai)
> Code: [@cunkoulaocai/java-wechaty](https://github.com/cunkoulaocai/java-wechaty)

## 暑期 2020

“开源软件供应链点亮计划-暑期 2020”（以下简称 暑期 2020）是由中科院软件所与 openEuler 社区共同举办的一项面向高校学生的暑期活动。旨在鼓励在校学生积极参与开源软件的开发维护，促进国内优秀开源软件社区的蓬勃发展。 根据项目的难易程度和完成情况，参与者还可获取“开源软件供应链点亮计划-暑期 2020”活动奖金和奖杯。 官网：<https://isrc.iscas.ac.cn/summer2020> 官方新闻：<http://www.iscas.ac.cn/xshd2016/xshy2016/202004/t20200426_5563484.html> 本项目 [Wechaty Java 移植组件开发] 系 暑期 2020 支持的开源项目。

## [Wechaty Java 移植组件开发]具体计划

- 导师：刁政欣
- 学生：陈炀
- 模块列表
  - memory-card 存储
  - state-switch 状态机
  - 其他模块基本 api 移植
  - (选做) api 优化为更加符合 kotlin 风格
  - (选做) 理解底层原理,添加一些新功能
- 计划安排
  - memory-card 存储
    - 7.1 - 7.19
    - 该模块移植是基本要求,为了能够满足机器人重新登陆不需要扫码,保存机器人自身信息等功能,需要用到这个组件,这个组件将存储的功能和存储数据的 结构相分离,以便能够简单的更换存储方式,支持阿里云 oss,华为云 obs,亚马逊 s3,json 存储等,同时提供了易用的 api 来使用
    - 基本功能
  - state-switch 状态机
    - 7.20 - 7.26
    - state-switch 是用于管理异步操作的监视器/保护器,在原本的 ts 版本中可以通过 Promise 的特性来比较轻松的实现,在 kotlin 则需要其他的 api 来实现,思路 比较清晰,但是要找到合适的实现手段有点麻烦
    - 基本功能
  - (选做) 其他 api 移植与测试
    - 7.27 - 8.7
    - java-wechaty 中还有许多 api 没有实现,api 的风格也是仿照 js 来实现的,后续需要将这些 api 逐步实现,并且修改其 api 风格,以更适合 java 和 kotlin 等语言
    - 扩展功能
  - (选做) 理解底层原理,添加一些新功能
    - 8.8-8.15
    - 此部分为选作内容,wechaty 还有一些关于 miniprogram,红包等功能还未实现,需要能够理解底层,以便进行后续的扩展,逐步增强 wechaty 的功能
    - 扩展功能
- 项目链接：<https://github.com/cunkoulaocai/java-wechaty>
- 联系方式：+86 15806082601 | e: <1184016190@qq.com>
