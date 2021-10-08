---
title: "资讯自动推送机器人（Daily push wechat robot）"
author: evany
categories: project
tags:
  - python
  - padplus
  - media
image: /assets/2020/daily-push-wechat-robot/fake-robot.webp

---

[![Wechaty Badge](https://img.shields.io/badge/Powered%20By-Wechaty-green.svg#align=left&display=inline&height=20&margin=%5Bobject%20Object%5D&originHeight=20&originWidth=132&status=done&style=none&width=132)](https://github.com/wechaty/wechaty)
[![Everything about Wechaty](https://img.shields.io/badge/Wechaty-%E5%BC%80%E6%BA%90%E6%BF%80%E5%8A%B1%E8%AE%A1%E5%88%92-green.svg#align=left&display=inline&height=20&margin=%5Bobject%20Object%5D&originHeight=20&originWidth=134&status=done&style=none&width=134)](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)

## 前言

工作后慢慢发现，学习的成本越来越低，真正困难的是没有“空闲时间”学习，如何利用这有限的时间创造更大的价值变得尤为重要。

以 AI 领域的微信公众号为例，每天都在产出最前沿的资讯，以及对经典问题的沉淀，文章篇幅也都不会太长，方便读者阅读，但是假设用户关注了100个这样类型的公众号，每次想看文章都要从100个公众号下逐个审查，这也是一个耗时的过程，那是否可以定时或指令性的自动筛选和推送文章给到用户呢？

没错，这就是这个机器人要解决的问题。

## 项目说明

根据需求，项目可分为两大模块，即 **信息爬取模块** 和 **消息发送模块**：

1. **信息爬取模块----低端的静态爬虫**

   概述：每天定时从固定微信公众号同名的微博账号主页爬取文章标题及其链接

   实现：Python

2. **消息发送模块----Wechaty**

   概述：推送等聊天功能

   实现：JavaScript

## 具备功能

### 0. 静态网页爬取

0.1 每天定时从"微博"相关公众号主页爬取当日资讯

### 1. 关键词触发功能

1.1 关键词"介绍一下自己"、 "自我介绍一下"、 "你是谁"触发自我介绍

1.2 关键词“推送”触发咨询推送，内容为前一日资讯

1.3 地名+天气 触发天气查询

### 2. 群外聊天（好友私聊）

2.1 功能1全部具备

2.2 自动回复文本消息

2.3 图片、视频、表情包、链接、撤回等非文本消息随机回复颜文字

### 3. 群内聊天（机器人一对多）

3.1 白名单群

功能如同 1、2，

群内成员皆有聊天权限，可 “@bot” 触发，也可直接对话，

不会回复 @其他群成员 的消息

3.2 灰名单群

功能如 3.1，但权限有别，仅由指定管理人触发，且必须通过 “@bot”

3.3 入群欢迎词

## 目录结构

```js
│  │
│  │      README.md                       # 本文件
│  │
│  ├─pull_message
│  │      pull_data_from_weibo.py         # 静态抓取资讯
│  │
│  ├─message_warehouse
│  │      push_me_2020-06-11.txt          # 抓取资讯样例 日期为前一天日期
│  │
│  │─my_robot
│  │      bot.js                        # 机器人主程序
│  │      config.js                     # 配置文件 补充自己的信息
│  │      onMessage.js                  # 主要对话逻辑
│  │      onRoomJoin.js                 # 进群欢迎程序
│  │      onScan.js                     #  扫码登录程序
│  │
```

## 快速运行

**按照 github 中 repo 的 README.md 操作即可**，另有几点需要说明

1. 信息爬取模块推荐部署成定时任务
2. 打开`config.js` 文件，配置自己的信息
3. `onMessage.js` 中的闲聊接口为[小思机器人](https://www.ownthink.com/)，需要单独申请

## 完善方向

- 加入 NLP 技术，bot 通过识别指令推送相应资讯，比如：

```log
  张三：@Bot 推送 知识图谱
  Bot：@张三 最新的 知识图谱 资讯如下......
```

- 加入 NLP 技术，过滤爬取数据中的广告文章

- 加入定时推送功能，筛选出假节日和工作日，仅在工作日推送

- 提醒/备忘 功能监听

- ......

## 部分功能展示

![群内推送](/assets/2020/daily-push-wechat-robot/push-inroom.webp)
![私聊推送](/assets/2020/daily-push-wechat-robot/push-per.webp)
![自我介绍](/assets/2020/daily-push-wechat-robot/intro.webp)
![非文本回复颜文字](/assets/2020/daily-push-wechat-robot/emoji.webp)

![天气查询](/assets/2020/daily-push-wechat-robot/whether.webp)

> 作者: [IvanEvan](https://github.com/IvanEvan/)
> Code: [Github](https://github.com/IvanEvan/daily-push-wechat-robot)
