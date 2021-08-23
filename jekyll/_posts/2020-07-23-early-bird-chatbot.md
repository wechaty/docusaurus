---
title: 基于wechaty的求职社群管理工具
author: lmacode
categories: event
tags:
  - bot
  - job
  - intern
image: /assets/2020/early-bird-chatbot/bird.png
---

早鸟平台是一群硅谷在职的工程师创建的平台。受全球疫情的影响，今年的求职季变得很特殊，对于企业来说，缩减招聘需求成了一段时间的常态。对于求职者来说面试周期拉长、求职压力倍增。而早鸟作为专业的求职交流公益平台，在全球疫情蔓延，经济低迷的情况下，更应该助广大毕业生或求职者一臂之力。

早鸟的定位如下：

1. 提供包括但不限于刷题、做项目、互改简历等服务的平台
2. 对接各大公司内推，连接学校到职场的断层
3. 一个你能长期获得帮助的社群，从找实习、全职到职业发展等

2020的秋招马上开始了，早鸟计划扩展出刷题、项目、简历、求职、内推、面试和实习等十余个分队，每个分队涉及众多国内外名校的学生，将分别以不同的主题建群。为了更方便地维护求职信息群，急需生成一款社群管理工具。受限于部分用户无法登录`web 协议` 的wechaty。所以使用基于`iPad 协议`的wechaty-puppet-padplus来实现功能。

> Wechaty 是一个开源的的个人号微信机器人接口，是一个使用 Typescript 构建的 Node.js 应用。支持多种微信接入方案，包括网页，ipad，ios，windows， android 等。同时支持 Linux, Windows, Darwin(OSX/Mac) 和 Docker 多个平台。

## 如何获取免费 Token

官方文档中提供了免费 token 的获取方式。
[https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)

细节如下：
> 为了参与开源激励计划，需要开发者填写表单，联系Juzi BOT（微信号：juzibot）或等待其主动联系均可。
直接填写： Wechaty 开源激励计划2.0申请表 。
>
> 在收到开源激励计划申请表和 Github 项目信息后，Juzi BOT（微信号：juzibot）将依照开源激励计划申请表中的联系方式主动联系。
在确认开发者愿意将最终成品代码开源同时在Wechaty社区内撰写一篇博客后，将为开发者发放一个有效期 15 天的 Token 。
开源激励计划的 Token 为 padplus 协议，目前主要支持 node.js 的开发，如果想要使用 Java / Python / Go 进行开发，可以申请 Donut Token，其针对多语言进行了优化，但需要进行付费购买。
>
> 在提供有效期 15 天的 Token 后，我们期待开发者将 MVP （最小可行化产品）代码在 Github 中开源，并储存在一个 public repo 中。

## 本工具已实现功能

- 接收用户好友申请，并自动发送欢迎信息
- 邀请入群
- 入群欢迎词
- 自动建群，比如发送“建群-早鸟群1”就自动建一个群
- 求职信息
- 海外疫情

示例：
回复序号或关键字获取对应服务

1. 加入Wechaty群聊（或其他已配置的群聊）
2. 求职信息
3. 海外疫情

如需创建群聊，请输入"创建群聊-"+群名称（例：创建群聊-求职群1）

如图：

![1](/assets/2020/early-bird-chatbot/job.png)
![2](/assets/2020/early-bird-chatbot/covid.png)

## 目录结构

- `config`文件夹存放公共配置文件以及`superagent`请求相关配置
- `imgs`存放相关图片
- `listeners`存放机器人初始化后一系列事件处理(分模块)
  - `on-friendship.js` 处理好友请求
  - `on-login.js` 处理登录
  - `on-message.js` 处理用户消息、群消息
  - `on-scan.js` 处理登录二维码
- `schedule` 对定时任务`node-schedule`库进行了封装
- `superagent` 存放所有的数据请求、接口封装都在此
- `app.js` 入口文件

## 如何使用

克隆仓库代码
[Early-Bird-ChatBot](https://github.com/lmaCode/early-bird-chatbot)

安装依赖

```bash
npm install
```

1. 修改`config`配置
   打开`config/index.js` 文件，将里面的配置改为自己的。
2. 修改天行接口配置
   天行 api 官网 ：[https://tianapi.com/](https://tianapi.com/)  
    注册成功后，申请以下接口：
   - [海外疫情]

   之后请打开`superagent/index.js`，将顶部`APIKEY`改为自己天行 api 的`key`即可

其他免费接口可随意申请，不想用天行的接口可以删掉对应的关键字。

启动程序

```bash
npm start
```

终端会出现一个二维码，扫码登录即可。

## 展望

因目前工作较忙，时间和精力所限只实现了部分功能，未来会有更多的开发者加入到早鸟机器人的开发队列中，我们计划扩展的功能列表如下（持续更新中）：

- 每日算法
- 架构设计精讲
- 面试宝典
- 硅谷新鲜事
- 职场求生录
- 科技日报
- 湾区生活指南

感兴趣的小伙伴可以探索wechaty更多的功能，请参见:(<https://github.com/wechaty/wechaty-puppet-padplus>)

便于查找的API列表:(<https://github.com/wechaty/wechaty>)

> Author: [lmaCode](https://github.com/lmaCode)
> Code: [early-bird-chatbot](https://github.com/lmaCode/early-bird-chatbot)
