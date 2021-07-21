---
title: 揭秘：2021GSoD为何选择Wechaty
author: juzibot
categories: gsod
tags:
  - google
  - gsod
  - event
  - gsod-2021
  - 2021
  - docs
image: /assets/2021/07-gsod-2021-publish-article/gsodandwechaty.webp
---

> 作者: [juzibot](https://github.com/juzibot/)
> 感谢点进我的博客，非常荣幸能够和你分享2021GSoD与Wechaty的相关发展情况。
  今年，Wechaty已经与GSoD达成合作，请求的预算9500美元也已经被批准。
 ![gsodandwechaty1](/assets/2021/07-gsod-2021-publish-article/gsodandwechaty1.webp)

## GSoD简介

![gsod](/assets/2021/07-gsod-2021-publish-article/gsod.webp)

- GSoD是[Google Season of Docs](https://developers.google.com/season-of-docs)的简称，是由谷歌组织的年度活动，目的是将技术文档撰写工程师和开源组织聚集到一块，在开源这个空间中共同促进和改善开源的发展。
- 谷歌的这个活动具有重大意义，因为开源项目为用户提供的不仅仅是理解学习项目的平台，同样也是一个能够为开源项目做贡献的渠道。
在该计划期间，技术文档撰写工程师们花了3-5个月时间构建一个新的文档，改进现有文档的结构，开发急需的教程，改进开源组织的贡献流程和指南。

## Wechaty简介

![wechaty](/assets/2021/07-gsod-2021-publish-article/wechaty.webp)

- Wechaty 是一个开源的的 个人号 微信机器人接口，是一个使用 Typescript 构建的 Node.js 应用。支持多种微信接入方案，包括网页，ipad，ios，windows， android 等。同时支持Linux, OSX, Win32 和 Docker 等多个平台。
- 多年来调查表明，良好的文档对于开发人员如何使用开源方面很重要。
- Wechaty作为[30](https://developers.google.com/season-of-docs/docs/participants)个[伟大的开源组织](https://developers.google.com/season-of-docs/docs/participants)之一，帮助聊天机器人开发者快速搭建聊天机器人的框架，并且支持多个系统平台。
- Wechaty的使命：给聊天机器人的开发者提供一个最好的开源sdk，给开发者最好的体验。帮助开发者能够更多关注于逻辑应用，把精力集中于编写上层应用的代码，而不是把时间花在与平台的底部对接上。
- Wechaty在2月份的时候就开始着手准备2021年的GSoD。在Wechaty于4月16日正式宣布加入2021GSoD后，联系了多位技术文档撰写工程师，几乎所有的提案都在详细规划和深刻研究。

### 为什么选择Wechaty

- 五年技术沉淀：Wechaty (Conversational RPA SDK) 2016 年发布于 GitHub，是一个基于 Apache-2.0 许可证的开源项目。经过5年多的发展，现在 Wechaty 开源社区已经拥有数十位 Committers，百余位 Contributors ，并被超过一万名 GitHub 开发者 Star。目前，使用 Wechaty 的开发者已覆盖数万人，并拥有基于微信群的数千人活跃开发者群。
- 用户遍布全球：Wechaty 社区的 Contributors 遍布全球多个国家地区，和各大互联网公司，职业背景从程序员到设计师，从大学教授到创业者。GitHub 上有千余个开源项目基于 Wechaty 构建了聊天机器人，这些开发者用户也极大地促进了社区的活跃和发展。
- 高效发布代码：Wechaty自身对代码质量的管理，使用了 GitHub Actions 的 DevOps 工具完成了 CI/CD 工作流，从自动化单元测试到自动打包集成测试，从自动发布 NPM 包到自动构建和发布对应版本的 Docker Image ，实现了全自动的社区代码发布，极大的提高了社区的协同效率。
- 社区活跃度大：截止2021年，Wechaty 已经有近百万次 NPM 安装下载，并由社区自发推动了 Python, Go, Java, Scala, .NET, PHP, Rust 等语言的适配和发布，是国内最活跃的 Conversational AI Chatbot 开发者社区。
- 信息开放透明：沟通首选渠道是 Gitter, 因为 Gitter 保存了所有的历史沟通记录，即使是刚刚加入社区的开发者，也能追溯第一天社区成员讨论过的内容。次优选的沟通渠道是加入 Mailing List ，保证社区内容开放透明并以邮件存档。
- 会议规范高效：Wechaty 社区的会议利用专业工具和规范的使用规则，保证会议简洁高效和社区透明，实现了让所有参与者都专注参与，并且获得正向产出。
- 各项荣誉成就：Google Season of Docs 支持的30个全球顶级开源项目之一；被国内顶级开源组织中国开源云联盟评为优秀开源项目；开源项目作者李卓桓入选“中国开源先锋33人”；连续入选2020、2021年度开源软件供应链点亮计划。
- 使用安全简单：只切换一个变量，其他代码不变就能登录新IM；支持常见流行编程语言，API定义跨编程语言保持一致；多加一行代码就能拥有复杂对话能力。
- 功能丰富强大：除接收消息，发送消息、添加好友、为好友备注、接受好友请求、发起群聊、加人入群等基本功能外，还能进行消息处理，群管理，自动处理好友请求，智能对话等更多功能。
- 灵活定制业务：个人号搭建一个微信机器人功能只需要6行代码，简单的操作就可对消息做不同的指令，能完成自己想要的逻辑。
- 兼容各种平台：写一份代码，可在不同的平台上运行，只需切换环境变量。同时支持Linux, OSX, Win32 和 Docker 等多个平台。支持多种接入方案，包括网页，ipad，ios，windows，android 等。
- 人才公司复用：行业很多已经正在使用 Wechaty 的开发者和公司，都可以在第一时间成为未来运营商 Chatbot 的高质量供应商。
- 商业场景复用：使用对商业最为友好的 Apache-2.0 许可协议。大量开发者和商业公司都可以通过 Wechaty 迅速切入 5G Chatbot 新市场。

### 目前的进程

- 下面是按时间进行的进程汇总：
 ![time](/assets/2021/07-gsod-2021-publish-article/time.webp)

### Welcome

非常高兴有你们都加入Wechaty，更欢迎更多的技术文档撰写工程师加入我们，共同学习共同建设Wechaty社区！
