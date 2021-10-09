---
title: "OSPP 2021-结项报告-基于 Wechaty Puppet Official Account 项目的用户与消息等基础功能的完善"
author: zzzyer
categories:
  - project
  - ospp
image: /assets/2021/10-ospp-final-term-wechaty-puppet-oa/wechaty-puppet-official-account.webp
tags:
  - puppet
  - summer-of-wechaty
  - summer-2021
  - ecosystem
  - ospp
  - ospp-2021
  - final-term
---
“[开源软件供应链点亮计划-暑期2021](https://summer.iscas.ac.cn)”（以下简称 暑期2021）是由中科院软件所与 openEuler 社区共同举办的一项面向高校学生的暑期活动。旨在鼓励在校学生积极参与开源软件的开发维护，促进国内优秀开源软件社区的蓬勃发展。活动联合各大开源社区，针对重要开源软件的开发与维护提供项目，并向全球高校学生开放报名。 学生可自主选择感兴趣的项目进行申请，并在中选后获得该软件资深维护者（社区导师）亲自指导的机会。 根据项目的难易程度和完成情况，参与者还可获取“开源软件供应链点亮计划-暑期2021”活动奖金和奖杯。

本项目 [项目名称] 系 暑期2021 支持的开源项目。

## [项目名称]信息

- 导师：[吴京京](https://github.com/wj-Mcat)
- 学生：[zzzyer](https://github.com/zzzyer)  
- 项目介绍：[https://github.com/wechaty/summer/issues/82](https://github.com/wechaty/summer/issues/82)
- 项目名称：基于 Wechaty Puppet Official Account 项目的用户与消息等基础功能的完善  
- 需求介绍：
  - 申请开发专用测试公众账号
  - 架设 [wechaty-puppet-official-account](https://github.com/wechaty/wechaty-puppet-official-account/) 并可以进行微信公众账号的正常文本消息收发
  - Wechaty Puppet Official Account 的功能进行试用，分析其当前的功能，然后列出需要完善的功能列表，以及欠缺的功能列表，并作出开发计划
  - 在初期开发中，能够实现图片消息的接收和发送，即可完成原型验证 POC。
- 模块列表：
  - [ ] 文本消息收发模块
  - [ ] 图片
  - [ ] 音频消息收发模块
  - [ ] 小程序消息收发模块：  

## 项目时间规划：  

### 时间：2021.07.01-2021.07.21

- 申请微信公众平台测试账号
- 阅读Wechaty Puppet Official Account代码
- 成功运行Wechaty Puppet Official Account相关样例（ding-dong-bot）
- 与导师讨论得出要开发的功能模块

### 时间：2021.07.21-2021.08.15

- 完成文本消息收发的功能完善
- 完成图片消息的简单收发

### 时间：2021.08.15-2021.09.30

- 完善中期开发之前的功能模块
- 完成音频消息的收发模块
- 完成小程序消息的收发模块
- 完成link消息的收发模块

## 项目进度

- 已完成工作：  
  - [x] 文本消息收发模块
  - [x] 图片消息收发模块  
  - [x] 语音消息收发模块
  - [x] link消息收发模块
  - [x] 小程序消息收发模块（待测试）
  
- 遇到的问题及解决方案：
  
  Q&A1:在使用localtunnel进行内网穿透时，使用流程不太了解，在导师的仔细指导下完成了localtunnel内网穿透，对微信测试账号接口进行配置。

  Q&A2：在进行图片消息收发的时候，对整个数据的上传下载过程不了解，通过仔细阅读微信公众平台的接口文档了解整个交互机制。

  Q&A2：在进行音频消息收发的时候，我们采用的FileBox模块并不能识别出语音文件的amr后缀名，这样就会导致在后续根据后缀名进行mimetype判断时只能得到undefined的值。为了解决这一问题，我们在得到用户发送的语音文件时，直接将气文件名指定为'message.amr'而不是用路径作为文件名的方法，这样就可以识别出消息类型了。

  Q&A4:在开发小程序发送功能时，经过查阅资料发现公众号只有绑定了小程序的appid才能进行正常的收发，耳测试公众号是没有绑定小程序功能的，所以暂时我只写好了小程序的功能代码，还没有进行测试。为了弥补功能的多样性，我多开发了一个link消息的收发功能。

## 项目成果

项目仓库: 项目仓库: <https://github.com/wechaty/wechaty-puppet-official-account>  

### live coding视频

{% include iframe.html src="https://youtu.be/iVyutBZMZRE" %}

Bilibili link: <https://www.bilibili.com/video/BV1CQ4y1Q7dX/>

### PPT展示视频

{% include iframe.html src="https://youtu.be/ySxpkKjv018" %}

Bilibili link: <https://www.bilibili.com/video/BV1344y1t7aU/>

### 项目PPT

{% include iframe.html src="/assets/2021/10-ospp-final-term-wechaty-puppet-oa/final-term-ppt.pdf" %}
