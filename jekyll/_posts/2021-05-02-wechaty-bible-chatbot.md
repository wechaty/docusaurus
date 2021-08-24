---
title: "微信群机器人-读经助手"
author: kkdev163
categories: project
tags:
  - nodejs
  - chatroom-tool
  - bible
  - other
image: /assets/2021/05-wechaty-bible-chatbot/logo.png
---

笔者将从 开发意图、产品功能特性、技术方案、心得体会 等方面回顾总结 微信群机器人-读经助手 的产品开发历程，希望对其他开发者有所帮助。

## 二、开发意图

笔者是一名基督徒微信群的成员，群里需要人工每天定时发送「文章」链接，并统计群成员「已读」人数。最早我们采取的方案是人工定时发送，群成员到 在线协同工具 如「石墨文档」手动填写「已读」。该方案虽然节省了统计人数的工作量，但依然有几个缺点：

- 群成员年龄分布广，包含 60、70岁成员，让他们跳转至第三方应用手动填写，操作成本高，导致打卡率低。
- 在群里直接文字打卡，可激励其他成员，而跳转至第三方应用打卡，就减弱了这个互动性。
- 每天人工定时发送，长期来看对发送人员是个不小的挑战。

所以希望能够开发一个 微信机器人-读经助手 帮助实现如下功能：

- 1. 定时在微信群中发送文章链接
- 2. 基于群成员的聊天信息(已读、完成) 等，自动进行统计打卡

感谢 [Wechaty](https://wechaty.js.org/) ，基于 Wechaty SDK，笔者通过一个晚上，就实现了 读经助手 的上述核心诉求，从此解放双手。目前 读经助手 在投入到 6 个微信群中使用，最长服务时长达 2 个月，服务人数 200+。(不敢主动推广，原因后面会讲)

## 三、产品功能特性

核心功能仅用了一个晚上就实现了，但笔者大概花了 一个月(代码量3000行左右 ts 代码) 的时间来丰富 读经助手 的周边功能。完整功能大致分为以下几类：

- 1. 定时文章推送 (支持了多种基督教刊物)
- 2. 群成员打卡 (基于群成员聊天，统计打卡人数、汇总生成 excel 表格)
- 3. 获取文章链接 (获取多种基督教刊物的在线链接)
- 4. 搜索文章内容 (搜索基督教刊物的内容)

### 功能简介

![image](/assets/2021/05-wechaty-bible-chatbot/03-01.jpg)

### 更多功能

![image](/assets/2021/05-wechaty-bible-chatbot/03-02.jpg)

[更多功能长图](/assets/2021/05-wechaty-bible-chatbot/03-03.jpg)

### 文章推送

![image](/assets/2021/05-wechaty-bible-chatbot/03-04.jpg)

![image](/assets/2021/05-wechaty-bible-chatbot/03-05.jpg)

### 打卡统计

![image](/assets/2021/05-wechaty-bible-chatbot/03-06.jpg)

![image](/assets/2021/05-wechaty-bible-chatbot/03-07.jpg)

![image](/assets/2021/05-wechaty-bible-chatbot/03-08.jpg)

### 搜文章内容

![image](/assets/2021/05-wechaty-bible-chatbot/03-09.jpg)

## 四、技术实现

### Wechaty

目前来看，上手成本最低的应该是只用 [puppet-services](https://wechaty.js.org/docs/puppet-services/)，我使用的 token 提供商是 [Paimon](https://wechaty.js.org/docs/puppet-services/paimon), 注册手机号，即可获取 7 天 token。

### 部署方案

一共经历了如下几个部署方案：

- 1. 闲置电脑部署 wechaty 应用 + 数据库(AWS dynamodb 香港节点)，使用 dynamodb 是因为这是亚马逊云的免费数据库产品，想白嫖。
- 2. 阿里云轻量应用服务器(1C 2G 40G-SSD 杭州节点) 部署 wechaty 应用 + 数据库(AWS dynamodb 香港节点)，阿里云服务器是98元每年(新用户活动价)，可连续买三年。但阿里云杭州节点 连 亚马逊香港节点，延迟有时候会有 几十秒。尝试过阿里云香港节点，数据库请求是快了，但发送给 puppet-services 的请求有时会有几秒的延迟。
- 3. 阿里云部署 wechaty 应用 + 数据库换成服务器自带的 mongodb。 这样访问 puppet-services、数据库都非常快。 由于两种数据库都是文档型，迁移的成本还不算太高，大概花了一天时间做数据库迁移+适配层代码。

由于需要做内容搜索，所以也在阿里云服务器上部署了 ElasticSearch。阿里云 98 一年真香。

### 实现思路

代码开源在该[仓库](https://github.com/kkdev163/wechaty-bible-robot)，感兴趣的可以参考下，本节主要介绍下目录结构

``` bash
├── README.md
├── deploy.sh  部署脚本
├── dev.sh  开发环境脚本
├── ecosystem.config.js pm2进程管理配置
├── nodemon.json 本地开发配置
├── package-lock.json
├── package.json
├── prod.sh 生产环境脚本
├── server
│   ├── index.ts  wechaty 主入口
│   └── src
│       ├── actions  actions 命令的实现
│       │   ├── _7cthSchedule.ts
│       │   ├── bibleSchedule.ts
│       │   ├── commit.ts
│       │   ├── index.ts
│       │   ├── pushSchedule.ts
│       │   ├── remind.ts
│       │   ├── search.ts
│       │   ├── smdjSchedule.ts
│       │   └── static.ts
│       ├── bible  圣经相关的资源
│       │   ├── _7cth.ts
│       │   ├── plan.ts
│       │   ├── shareRes.ts
│       │   └── smdj.ts
│       ├── constants.ts  
│       ├── controller 放开 http 服务的控制器
│       │   ├── index.ts
│       │   ├── proxy.ts
│       │   ├── search.ts
│       │   ├── setting.ts
│       │   └── utils.ts
│       ├── ddb 数据库相关
│       │   ├── commands
│       │   ├── index.ts
│       │   ├── mongoDb.ts
│       │   ├── schema.ts
│       │   ├── script
│       │   └── syncModels.ts
│       ├── handleMessage.ts 消息处理
│       ├── http.ts http 服务器入口
│       ├── interface
│       │   └── index.ts
│       ├── schedule.ts 定时任务入口
│       ├── service http 服务对应的 service
│       │   ├── esClient.ts
│       │   ├── search.ts
│       │   └── setting.ts
│       └── util 工具函数库
│           ├── bibleData.json
│           ├── bibleUtils.ts
│           ├── canvas.html
│           ├── devUtils.ts
│           ├── drawBible.html
│           ├── drawUtils.ts
│           ├── formatUtils.ts
│           ├── index.ts
│           ├── smdj-es-doc
│           ├── smdjStats
│           ├── smdjUtils.ts
│           ├── songUtils.ts
│           ├── timeUtils.ts
│           └── wxUtils.ts
```

## 五、心得体会

### 第一次为自己写代码

笔者之前大部分写的代码都是为了学习、工作(赚钱)。这次是 为了解放自己的双手、便利身边朋友 而写代码，心态从赚钱变成了奉献。发现自己又重新找回了，写程序的激情 和 热情，在开发读经机器人期间，有好几次通宵的经历，而且功能上线后，及时的反馈 和自我满足感是很让人愉悦的。

这也让我意识到，写代码不仅仅是一种工作，而确确实实是一项实用的生活技能、特长。

### 微信侧风险

开发阶段，有次把机器人号，从测试群中主动踢出，发现 Provider Service 抛出了一个 Error，为了复现这个异常，我重复多次把这个号从测试群中踢出。然后过了一段时间，就收到了 微信风控通知，提示该号被 多人投诉、有骚扰用户的行为。 所以大家尽量不要将 机器人踢出群，最好采用主动退出的方式，以免被微信风控。

换了新的微信号后，大概服务了 2 个月不到，发现被微信主动踢下线了，再次登录提示使用了 微信外挂、非官方客户端或模拟器。不清楚是, provider service 的方案，被大批检测出，还是仅仅是 笔者的微信号，被投诉导致。。
(/assets/2021/05-wechaty-bible-chatbot/04-01.jpg)

笔者开发机器人的初衷是希望解放人力，其实越多的微信群使用(免费使用)，对我来说，开发机器人的价值越高。但由于存在微信封号风险，是目前笔者不敢主动推广，仅靠群成员的口口相传。

### 2 8 原则

如上文提到的核心功能，笔者1个晚上就实现了，剩下的时间都在丰富七七八八的周边功能。但说实话，这些周边功能，都是我个人在使用，频率非常低，但却占据了我整体开发的 80% 以上时间。

### 交互友好性

由于读经机器人有部分功能是需要输出长段的文字，考虑到阅读的友好性，防止老年机大段文字刷屏，读经机器人使用了 node-canvas 渲染引擎，并实现了简单的文字排版，将大段文字通过图片的方式发送给用户。

### 便利性与通用性

为了使功能更加通用性，部分功能的开发，常常是站在程序员的视角出发，提供出多个参数化的配置，但这却加大了使用者的认知成本。比如 读经助手 提供了如下命令

```@读经助手  创建读经计划 创世记1~玛拉基书4 90天```

该命令中包含了如下几个参数「起始书卷、起始章节、结束书卷、结束章节、阅读天数」，更便利的做法是包装成如下指令

```@读经助手 创建读经计划 旧约 90天```

另外笔者还尝试过开发了一个 H5 页面，当群成员输入

```@读经助手 群设置```

返回该群设置的 H5 页面链接，这样通过 H5 页面的方式进行配置，虽然可以方便使用者。但同时也引入了安全性问题：任意一名群成员都能打开 H5 页面，他可以随意 删除、改变 群配置。如果要防止该问题，就需要额外开发 登录、鉴权。相比而言，使用群聊输入命令，是处于 全群监督下，不会有人进行乱操作。。所以虽然开发了 H5 设置页面，但没有对用户开发。

> 作者: [kkdev163](https://github.com/kkdev163)，软件开发工程师
