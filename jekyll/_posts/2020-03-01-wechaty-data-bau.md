---
title: wechatfordata数据碎片化响应与BAU常规运维的探索实践
author: kelly-cheng
categories: project
tags:
  - code
  - productivity
image: /assets/2020/wechat-for-data-bau/wechat-reply-night.jpg
---

新冠疫情爆发于 2020 年2 月，某大型跨国药企业务数据的响应与维护工作随着疫情爆发迅速提升，一时间数据需求方的响应诉求迅速攀升，找到合适的开源解决方案成为目前乃至长期的救命稻草。

## wechatfordata 希望解决的问题

- 碎片化数据被动查询（已实现）
- BAU运维监控信息的主动推送（已实现）
- 按业务场景进行邀请并一定程度的管理微信群（计划实现）
- 聊天内容的分析(计划实现)

## 业务分析与技术实现（基于已实现部分）

- 代码参见：[GitHub](https://github.com/hkenter/wechatfordata)
- 基于 [wechaty](https://github.com/wechaty/wechaty)

### 碎片化数据被动查询

单一业务场景的数据应急需求，通常以碎片形式体现，或是阶段性有规律的需求，所以总结部分高频率、碎片化、有规律的需求，是此部分实现的前提。

> 比如：~某会议数据是否已推送？~目前推送活动的类型是什么？

实现方案：构建此类场景的查询关键词规则，入参查询并回复

### BAU运维监控信息的主动推送

目前需要监控的BAU信息分布于两处：

- 位于内网的关系型数据库中
- 位于内网的某些web展现层

实现方案：请求数据库监控数据，构建nodejs爬虫，爬取web层数据

### 开发与生产环境

目前环境均基于windows X64，对安装、部署等要求比较繁琐，且均处于内网，对代理的要求配置也比较讲究。

> Tips：npm环境尽量提前安装windows-build-tools@4.0.0，内网环境或代理不满足，可尝试离线安装vsbuild2015/2017

## 结尾

wechatfordata 依然是一个正在开发中的项目, 欢迎留言交流你对它的看法

> Author: [@KellyCheng](https://github.com/hkenter) 数据工程师，Java工程师,偶尔写写python、Node.js在医疗,医药行业打杂
