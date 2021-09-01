---
title: "OSPP 2021-期中报告-基于 Matrix AppService Wechaty 项目的用户、群与消息等基础功能的完善"
author: lprintf
categories:
  - project
  - ospp
image: /assets/2021/08-ospp-interim-report-matrix-wechaty/wechaty-matrix.webp
tags:
  - matrix
  - summer-of-wechaty
  - ecosystem
  - summer-2021
  - ospp
  - ospp-2021
  - mid-term
---

“[开源软件供应链点亮计划-暑期2021](https://summer.iscas.ac.cn)”（以下简称 暑期2021）是由中科院软件所与 openEuler 社区共同举办的一项面向高校学生的暑期活动。旨在鼓励在校学生积极参与开源软件的开发维护，促进国内优秀开源软件社区的蓬勃发展。活动联合各大开源社区，针对重要开源软件的开发与维护提供项目，并向全球高校学生开放报名。 学生可自主选择感兴趣的项目进行申请，并在中选后获得该软件资深维护者（社区导师）亲自指导的机会。 根据项目的难易程度和完成情况，参与者还可获取“开源软件供应链点亮计划-暑期2021”活动奖金和奖杯。

本项目 [Matrix AppService Wechaty](https://github.com/wechaty/matrix-appservice-wechaty) 系 暑期2021 支持的开源项目。

## [Matrix AppService Wechaty](https://github.com/wechaty/matrix-appservice-wechaty)项目信息

- 导师：李卓桓，yswtrue
- 学生：林宇靖，张瑞宁
- 项目介绍：<https://github.com/wechaty/summer/issues/59>

- 项目名称：基于 Matrix AppService Wechaty 项目的用户、群与消息等基础功能的完善
- 方案描述：通过 Matrix-Appservice-Bridge 桥接 Wechaty 和 Matrix 的消息，使我们能在 Matrix 收发 Wechaty 消息，即收发来自微信，飞书等的消息。
- 时间规划：<https://github.com/wechaty/summer/issues/59#issuecomment-882246195>

## 项目进度

- 已完成工作：  
  - 在自己的服务器上部署Matrix和 Matrix-Wechaty，体验功能做出开发计划
  - 实现图片和附件消息的收发
  - 实现虚拟用户昵称和头像的展示
  - 设计实现一套可以[快速部署Matrix和Matrix-Wechaty的方案](https://github.com/lprintf/easy-matrix-wechaty)，并发布到github上
  - 部署社区 Matrix 服务器
- 遇到的问题及解决方案：
  - 遇到过一个puppet无法启动的问题。一开始定位问题后为了避免修改他人源码和和快速解决问题，自己使用反射方法强制修改了运行时的CPU架构。李卓桓导师提出该方式会对今后开发留下隐患，并引导我在其他项目上提出PR解决该问题。这让我体会到了开源项目的优势，我们不仅可以在自己的开源项目开发，同时能在使用开源项目时发现其他项目的不足，甚至做出修改，请求合并。同样的我们项目的使用者也可以在使用后对我们的项目提出修改意见。另外，我也更加清楚地认识到，编程开发是一件自由度很高的事情，但一个合格的程序员不仅要能根据需求实现项目功能，还应该考虑代码维护的便利，在合适的地方做出自己的修改。
- 后续工作安排：  
  - 后续工作安排及可能的调整会在<https://github.com/wechaty/summer/issues/59#issuecomment-882246195>中同步更新，同时它也能反映项目进度。

## 项目成果

项目仓库: [matrix-appservice-wechaty](https://github.com/wechaty/matrix-appservice-wechaty)，[easy-matrix-wechaty](https://github.com/lprintf/easy-matrix-wechaty)

### live coding视频

{% include iframe.html src="https://www.bilibili.com/video/BV12A411c7Nz/" %}

### PPT展示视频

{% include iframe.html src="https://www.bilibili.com/video/BV1q3411B7qi/" %}

### 项目PPT

{% include iframe.html src="/assets/2021/08-ospp-interim-report-matrix-wechaty/report-ppt.pdf" %}

## 联系我们

- 项目链接：<https://github.com/wechaty/summer/issues/59>
- 联系方式：
  - 林宇靖：lprintf@qq.com
  - 张瑞宁：3134191406@qq.com
