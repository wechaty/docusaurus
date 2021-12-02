---
title: "juzibot-期初报告-信息管理机器人-机器人与部分算法实现"
author: aquaindigo
categories: project
image: /assets/2021/11-juzi-ai-lab-plan-algo/pinnacles-galaxy.webp
tags:
  - internship
  - juzi-ai-lab
  - algorithm-internship
  - plan
  - productivity
---

## 项目信息

- 导师：段清华
- 实习生：苏尧
- 项目地址: <https://github.com/deepdialog/juzi-bot>
- 工作进度详见 <https://github.com/juzibot/intern/issues/5>

简介：juzibot（[repo](https://github.com/deepdialog/juzi-bot)）是基于wechaty的信息管理机器人，包括信息收集、管理、搜索、标签分析全文搜索等功能，
目前已有Arxiv论文收集和下载、图片OCR识别、记录notes等功能，方便在微信群里将各种文件、笔记等收集，
更加方便记录和检索。

## Proposal Video

{% include iframe.html src="https://www.youtube.com/watch?v=jX9B4IW1xbo" %}

{% include iframe.html src="/assets/2021/11-juzi-ai-lab-plan-algo/proposal.pdf" %}

## 项目详情

- 阶段列表
  - 熟悉机器人功能开发流程；
  - 开发数个额外功能模块；
  - Image Caption效果优化、提供置信度等；
  - 功能的开关控制，实现可定制的产品；
  - 实现功能的自动化测试。

- 当前进度
  - 完成中文关键词提取的算法优化和库的开发GitHub - deepdialog/ZhKeyBERT: Minimal keyword extraction with BERT
  - 提供了OCR、keyword extraction、object detection等功能的web api [OCR](https://github.com/deepdialog/docker-ocr-api)、[keyword extraction](https://github.com/deepdialog/docker-keywords-api)、[object detection](https://github.com/juzibot/object-detect-api)
  - 每个具体功作为独立的api后端，分派到各自的容器中，wechaty作为前端解析微信消息的各种属性和意图，再通过前后端的交互实现具体功能，有利于功能扩展、快速相应
  - 为Juzi Bot添加了识别arxiv链接并保存相应pdf文件以及爬取论文题目、摘要等信息的功能，并做了关键词抽取
  - 对含有文本的图片自动做OCR识别，对笔记、文本文件自动做中/英文关键词抽取

- 计划安排:
  - 阶段一
    - 完成时间：11月21日（已完成）
    - 计划描述：通过OCR、arxiv论文获取等小功能对JuziBot的开发流程有个整体了解，详情见**当前进度**
  - 阶段二
    - 完成时间：11月28日
    - 计划描述：研究关键词抽取、Image Captioning等NLP算法，将相应功能加入到机器人中
  - 阶段三
    - 完成时间：12月5日
    - 计划描述：做到每种功能的开关控制，群管理员可自行调整，实现可扩展、可定制的产品
  - 阶段三
    - 完成时间：12月12日
    - 计划描述：完成（部分）功能的自动化测试，考虑测试的形式并给出相应的测试代码

## 联系方式

- Email：1092702101@qq.com

> Author:[@AquaIndigo](https://github.com/AquaIndigo)
