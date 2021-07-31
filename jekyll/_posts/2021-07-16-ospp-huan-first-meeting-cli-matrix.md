---
title: "OSPP'21 first meeting for CLI & Matrix projects"
author: huan
categories:
  - ospp
image: /assets/2021/07-ospp-huan-first-meeting-cli-matrix/group-photo.webp
tags:
  - matrix
  - summer-of-wechaty
  - summer-2021
  - ospp
  - ospp-2021
  - meeting
---

## 关于开源软件供应链点亮计划：暑期2021

开源软件供应链点亮计划-暑期2021（以下简称 暑期2021）是由 中国科学院软件研究所 与 openEuler 社区 共同举办的一项面向高校学生的暑期活动，旨在鼓励在校学生积极参与开源软件的开发维护，促进优秀开源软件社区的蓬勃发展。该活动将联合各大开源社区，针对重要开源软件的开发与维护提供项目，并向全球高校学生开放报名。

学生可自主选择感兴趣的项目进行申请，并在中选后获得该软件资深维护者（社区导师）亲自指导的机会。根据项目的难易程度和完成情况，参与者还将获取 开源软件供应链点亮计划-暑期2021 活动奖杯和奖金。

- 官网：<https://summer.iscas.ac.cn/>
- Wechaty OSPP'21: <https://wechaty.js.org/docs/ospp/2021>

## 基于 Matrix AppService Wechaty 项目的用户、群与消息等基础功能的完善 #59

[Matrix](https://matrix.org/blog/index) 是一个 open network for secure, decentralized communication, like [Pidgin](http://pidgin.im) on your Phone.

[matrix-appservice-wechaty](https://github.com/wechaty/matrix-appservice-wechaty/) 是一个 WeChat (微信) Matrix AppService for bridging the Matrix user with WeChat user.

> It has been officially listed at [[Matrix] Bridge Page for Wechaty](https://matrix.org/docs/projects/bridge/matrix-appservice-wechaty).

我们在本次 Summer 2021 的项目中，社区希望可以将我们的 [matrix-appservice-wechaty](https://github.com/wechaty/matrix-appservice-wechaty/) 项目进行继续完善，将它对用户、群、消息收发（包括文本、图片、视频等）的基础功能进行完善和支持。

## 基与 Blessed 的 Wechaty 命令行文本客户端软件（仿IRC） #80

[Blessed](https://github.com/chjj/blessed) 是一个 curses-like library with a high-level terminal interface API for node.js. 基于 Blessed 能够快速的完成命令行文本节目的开发：

通过 [blessed-contrib](https://github.com/yaronn/blessed-contrib#readme) 可以快速的 Build dashboards (or any other application) using ASCII/ANSI art and javascript， 达到 Friendly to terminals, ssh, and developers. Extends blessed with custom drawille and other widgets 的使用效果。

我们在本次 Summer 2021 的项目中，Wechaty 希望可以实现对一个基于 Blessed 的 CLI 命令行文本客户端，通过 Wechaty 的基础支持，实现一个能够作为 WeChat, WeCom, Lark, Whatsapp 等所有 Wechaty 支持的 IM 的命令行文本客户端。

## Attendees

1. Huan, mentor of [wechaty/summer-of-wechaty#80](https://github.com/wechaty/summer-of-wechaty/issues/80) and [wechaty/summer-of-wechaty#59](https://github.com/wechaty/summer-of-wechaty/issues/59)
1. 刘靖，student of blessed-based wechaty-cli, <liuchinggg@gmail.com>
1. 林宇靖, student applying for Matrix AppService Wechaty, <545641826@qq.com>, +8
1. 张瑞宁, student applying for Matrix AppService Wechaty, <3134191406@qq.com>

## Meeting zoom recording playback

{% include iframe.html src="https://youtu.be/waFht2BeKb0" %}

1. 0:00 [Huan] Meeting started
1. 4:00 [Jing LIU] Introducing <https://github.com/chinggg/wechaty-cli/>
1. 14:00 [Yujing LIN] Introduce the project progress of Matrix AppService Wechaty
1. 31:00 [Ruining ZHANG] learn how to configure the server <https://wechaty.js.org/2021/02/04/matrix-with-wechaty/>
1. 40:00 [Huan] Review & Introducing Wechaty Contributor Program
1. 54:00 Group photo

> [Meeting Notes](https://docs.google.com/document/d/1fVCk8qRYc4RKGMf2UY5HOe07hEhPUOpGC34v88GEFJg/edit#heading=h.c7zo1ifjarho)

## 关于 Wechaty 社区

Wechaty 社区目前已经支持微信、Whatsapp、企业微信、飞书等常见流行即时通讯工具，并且能够通过多语言 SDK （比如 Python Wechaty） 进行调用。
