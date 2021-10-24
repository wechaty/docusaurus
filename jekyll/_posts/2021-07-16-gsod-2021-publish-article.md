---
title: 揭秘：2021Google Season of Docs为何选择Wechaty
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

> 感谢点进我的博客，非常荣幸能够和你分享 2021Google Season of Docs 与 Wechaty 的相关发展情况。
> 今年，Wechaty 已经与 Google Season of Docs 达成合作，请求的预算 9500 美元也已经被批准。
> ![gsodandwechaty1](/assets/2021/07-gsod-2021-publish-article/gsodandwechaty1.webp)

## GSoD 简介

![gsod](/assets/2021/07-gsod-2021-publish-article/gsod.webp)

- GSoD 是[Google Season of Docs](https://developers.google.com/season-of-docs)的简称，是由谷歌组织的年度活动，目的是将技术文档撰写工程师和开源组织聚集到一块，在开源这个空间中共同促进和改善开源的发展。
- 谷歌的这个活动具有重大意义，开源项目为用户提供的不仅仅是理解学习项目的平台，同样也是一个能够为开源项目做贡献的渠道。
  在该计划期间，技术文档撰写工程师们花了 3-5 个月时间构建一个新的文档，改进现有文档的结构，开发急需的教程，改进开源组织的贡献流程和指南。

## Wechaty 简介

![wechaty](/assets/2021/07-gsod-2021-publish-article/wechaty.webp)

- Wechaty 是一个开源的的个人号微信机器人接口，一个使用 Typescript 构建的 Node.js 应用。支持多种微信接入方案，包括网页，ipad，ios，windows， android 等。同时支持 Linux, OSX, Win32 和 Docker 等多个平台。
- 多年来调查表明，良好的文档对于开发人员如何使用开源方面很重要。
- Wechaty 作为[30](https://developers.google.com/season-of-docs/docs/participants)个[伟大的开源组织](https://developers.google.com/season-of-docs/docs/participants)之一，帮助聊天机器人开发者快速搭建聊天机器人的框架，并且支持多个系统平台。
- Wechaty 的使命：给聊天机器人的开发者提供一个最好的开源 sdk，给开发者最好的体验。帮助开发者能够更多关注于逻辑应用，把精力集中于编写上层应用的代码，而不是把时间花在与平台的底部对接上。
- Wechaty 在 2 月份的时候就开始着手准备 2021 年的 Google Season of Docs。在 Wechaty 于 4 月 16 日正式宣布加入 2021Google Season of Docs 后，联系了多位技术文档撰写工程师，几乎所有的提案都在详细规划和深刻研究。

### 为什么选择 Wechaty

- 五年技术沉淀：Wechaty (Conversational RPA SDK) 2016 年发布于 GitHub，是一个基于 Apache-2.0 许可证的开源项目。经过 5 年多的发展，现在 Wechaty 开源社区已经拥有数十位 Committers，百余位 Contributors ，并被超过一万名 GitHub 开发者 Star。目前，使用 Wechaty 的开发者已覆盖数万人，并拥有基于微信群的数千人活跃开发者群。
- 用户遍布全球：Wechaty 社区的 Contributors 遍布全球多个国家地区，和各大互联网公司，职业背景从程序员到设计师，从大学教授到创业者。GitHub 上有千余个开源项目基于 Wechaty 构建了聊天机器人，这些开发者用户也极大地促进了社区的活跃和发展。
- 高效发布代码：Wechaty 自身对代码质量的管理，使用了 GitHub Actions 的 DevOps 工具完成了 CI/CD 工作流，从自动化单元测试到自动打包集成测试，从自动发布 NPM 包到自动构建和发布对应版本的 Docker Image ，实现了全自动的社区代码发布，极大的提高了社区的协同效率。
- 社区活跃度大：截止 2021 年，Wechaty 已经有近百万次 NPM 安装下载，并由社区自发推动了 Python, Go, Java, Scala, .NET, PHP, Rust 等语言的适配和发布，是国内最活跃的 Conversational AI Chatbot 开发者社区。
- 信息开放透明：沟通首选渠道是 Gitter, 因为 Gitter 保存了所有的历史沟通记录，即使是刚刚加入社区的开发者，也能追溯第一天社区成员讨论过的内容。次优选的沟通渠道是加入 Mailing List ，保证社区内容开放透明并以邮件存档。
- 会议规范高效：Wechaty 社区的会议利用专业工具和规范的使用规则，保证会议简洁高效和社区透明，实现了让所有参与者都专注参与，并且获得正向产出。
- 各项荣誉成就：Google Season of Docs 支持的 30 个全球顶级开源项目之一；被国内顶级开源组织中国开源云联盟评为优秀开源项目；开源项目作者李卓桓入选“中国开源先锋 33 人”；连续入选 2020、2021 年度开源软件供应链点亮计划。
- 使用安全简单：只切换一个变量，其他代码不变就能登录新 IM；支持常见流行编程语言，API 定义跨编程语言保持一致；多加一行代码就能拥有复杂对话能力。
- 功能丰富强大：除接收消息，发送消息、添加好友、为好友备注、接受好友请求、发起群聊、加人入群等基本功能外，还能进行消息处理，群管理，自动处理好友请求，智能对话等更多功能。
- 灵活定制业务：个人号搭建一个微信机器人功能只需要 6 行代码，简单的操作就可对消息做不同的指令，能完成自己想要的逻辑。
- 兼容各种平台：写一份代码，可在不同的平台上运行，只需切换环境变量。同时支持 Linux, OSX, Win32 和 Docker 等多个平台。支持多种接入方案，包括网页，ipad，ios，windows，android 等。
- 人才公司复用：行业很多已经正在使用 Wechaty 的开发者和公司，都可以在第一时间成为未来运营商 Chatbot 的高质量供应商。
- 商业场景复用：使用对商业最为友好的 Apache-2.0 许可协议。大量开发者和商业公司都可以通过 Wechaty 迅速切入 5G Chatbot 新市场。

### 目前的进程

- 下面是按时间进行的进程汇总：

  首先向微信邮件列表发送了一封公告:[微信 GSoD’21 技术文档撰写工程师注册表已开放](https://groups.google.com/g/wechaty/c/C7r1_GMRRa0)

  5 月 3 日:向技术文档撰写工程师发送[谷歌表格](https://forms.gle/2LDqrX5GUs6j9fJR9)

  5 月 8 日:进行了在线会议，在宣布最终评选结果之前进行论。欢迎所有技术文档撰写工程师加入[Hello Wechaty GSoD’21 Technical Writers!](https://wechaty.js.org/2021/05/08/gsod-2021-selected-technical-writers/)
  你也可以了解[会议详情](https://docs.google.com/document/d/1fVCk8qRYc4RKGMf2UY5HOe07hEhPUOpGC34v88GEFJg/edit#heading=h.edr3nzd8l43b)
  ![zero](/assets/2021/07-gsod-2021-publish-article/zero.webp)

  5 月 9 日：宣布了微信 Google Season of Docs’21 技术文档撰写工程师评选结果。

  5 月 16 日：进行了 Google Season of Docs 第一周会议,讨论了未来会议日期，做了一周工作总结，介绍下一周计划，并讨论了是否应该延长主要项目的时间表，Simin 介绍了文档结构和样式。后来我们进行了一个问答环节。
  你也可以了解[相关博客](https://wechaty.js.org/2021/05/16/gsod-2021-week1-meeting/)和[会议详情](https://docs.google.com/document/d/1fVCk8qRYc4RKGMf2UY5HOe07hEhPUOpGC34v88GEFJg/edit#heading=h.o69fqys8gbda)
  ![1st](/assets/2021/07-gsod-2021-publish-article/1st.webp)

  5 月 23 日：进行了 Google Season of Docs 第二周会议，每位与会者首先给出了自己的一周总结，报告了他们下一周的计划。一起讨论了一下 Wechaty 的未来愿景，Simin 就 PRs 中经常出现的错误进行了讨论。
  你也可以了解[相关博客](https://wechaty.js.org/2021/05/23/gsod-2021-second-meeting/)和[会议详情](https://docs.google.com/document/d/1fVCk8qRYc4RKGMf2UY5HOe07hEhPUOpGC34v88GEFJg/edit#heading=h.3ly9biu8mtyy)
  ![2nd](/assets/2021/07-gsod-2021-publish-article/2nd.webp)

  6 月 6 日：进行了 Google Season of Docs 第三周会议，每位与会者首先做了一周的总结，并向社区汇报了他们下一周的计划，提出了对大型 PRs 的关注，讨论了 PRs 的范围和规模，对于缺乏每周跟进的团队分别解释了原因。Simin 说明了需要注意的相关事项并向大家进行了演示。进行问答环节，并合影留念。
  你也可以了解[相关博客](https://wechaty.js.org/2021/06/06/gsod-2021-third-meeting/)和[会议详情](https://docs.google.com/document/d/1fVCk8qRYc4RKGMf2UY5HOe07hEhPUOpGC34v88GEFJg/edit#heading=h.lmf3j0zgmymr)
  ![3rd](/assets/2021/07-gsod-2021-publish-article/3rd.webp)

  6 月 20 日：进行了 Google Season of Docs 第四周会议，首先每位参与者都做了一周的总结，并向社区汇报了他们下一周的计划，志愿者和技术作家们在进行一周总结的同时进行了讨论。最后大家进行了问答环节，并拍了一张可爱的合影。
  你也可以了解[相关博客](https://wechaty.js.org/2021/06/22/gsod-2021-fourth-meeting/)和[会议详情](https://docs.google.com/document/d/1fVCk8qRYc4RKGMf2UY5HOe07hEhPUOpGC34v88GEFJg/edit#heading=h.3am6kd2l4v24)
  ![4th](/assets/2021/07-gsod-2021-publish-article/4th.webp)

  7 月 4 日：进行了 Google Season of Docs 第五周会议，每个参与者都进行了一周总结计划了下一周的工作，志愿者和技术文档撰写工程师们进行了讨论。
  你也可以了解[相关博客](https://wechaty.js.org/2021/07/06/gsod-2021-fifth-meeting/)和[会议详情](https://docs.google.com/document/d/1fVCk8qRYc4RKGMf2UY5HOe07hEhPUOpGC34v88GEFJg/edit#heading=h.s6s37xc2auay)
  ![5th](/assets/2021/07-gsod-2021-publish-article/5th.webp)

  7 月 18 日：进行了 Google Season of Docs 第六次会议，同样，每个参与者都对本周工作进行了总结，并对计划了下一周的工作，志愿者和技术文档撰写工程师进行了讨论，最后进行了问答环节，讨论和解决了大家存在的问题。
  你也可以了解更多的[会议详情](https://docs.google.com/document/d/1fVCk8qRYc4RKGMf2UY5HOe07hEhPUOpGC34v88GEFJg/edit#heading=h.i4kw5zu3yk32)
  ![6th](/assets/2021/07-gsod-2021-publish-article/6th.webp)

### 参与者

总共有 12 个参与者，他们是：

1. Rohitesh Jain, Volunteer (UTC + 5:30)
2. Sajen Sarvajith, Reconstruct Landing page writer (UTC + 5:30)
3. Abhishek Jaiswal, How-to-guide section writer (UTC + 05:30)
4. Simin Liao, Volunteer (+8:00)
5. Mukosa Joseph Mawa, Introductions and Explanations section writer (UTC +03:00)
6. Rajiv Ranjan Singh, Improve the gRPC and OpenAPI ecosystem writer, rajivperfect007@gmail.com, (UTC+05:30)
7. Souvik Biswas, Create easy to learn tutorials for beginner users writer, sbis1999@gmail.com (UTC +05:30)
8. Shraddha, Improve References section writer (UTC + 5:30)
9. Shwetal Soni, Create easy to learn tutorials for beginners users writer (UTC +05:30)
10. Vasvi Sood, How to guides, contactvasvisood@gmail.com writer (UTC + 5:30)
11. Arnab Saha, Reconstruction of Landing page with value propositions writer (UTC + 5:30)
12. Chris Estepa, Introduction and Explanations sections writer (UTC +08:00)

### Welcome

非常高兴有你们都加入 Wechaty，更欢迎更多的技术文档撰写工程师加入我们，共同学习共同建设 Wechaty 社区！
