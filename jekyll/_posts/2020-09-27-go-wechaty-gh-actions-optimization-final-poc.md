---
title: "暑期2020 [Go-wechaty Github Action optimization] 结项 POC"
author: nebell
categories: project
tags:
  - summer-of-wechaty
  - summer-2020
  - go
  - devops
image: /assets/2020/go-wechaty-gh-actions-optimization-final-poc/header.png
---

“开源软件供应链点亮计划-暑期2020”（以下简称 暑期2020）是由中科院软件所与 openEuler 社区共同举办的一项面向高校学生的暑期活动。
旨在鼓励在校学生积极参与开源软件的开发维护，促进国内优秀开源软件社区的蓬勃发展。
根据项目的难易程度和完成情况，参与者还可获取“开源软件供应链点亮计划-暑期2020”活动奖金和奖杯。

官网：[https://isrc.iscas.ac.cn/summer2020](https://isrc.iscas.ac.cn/summer2020)

官方新闻：[http://www.iscas.ac.cn/xshd2016/xshy2016/202004/t20200426_5563484.html](http://www.iscas.ac.cn/xshd2016/xshy2016/202004/t20200426_5563484.html)

本项目 [Go-wechaty Github Action optimization] 系 暑期2020 支持的开源项目。

## 项目信息

- 项目名称：Go-wechaty Github Action optimization

- 方案描述：使用 Github Actions 相关特性为 Go-wechaty 相关项目作相关优化，提高使用以及开发体验。

- 时间规划：
  - 7月1日到7月7日：阅读 Go-wechaty 及其插件的文档以及源码，分别进行本地手动编译测试、通过 Github Action 持续集成脚本编译测试。
  - 7月7日到7月14日：编写 Github Action 脚本，实现 Go-wechaty 的 go-wechaty-getting-started 依赖进行更新，实现 Windows 平台下的ding-dong 编译测试。
  - 7月14日到7月21日：寻找其他的 Github Action 用处，钻研 wechaty 已有的持续集成方案的优化方案。
  - 8月1日到9月5日：完善 Dockerfile，以及触发 Dispatch 的条件。

## 项目总结

- 项目成果：
  - 自动更新 go-wechaty-getting-started 依赖到最新版本
    - 使用 [Repository Dispatch](https://docs.github.com/en/free-pro-team@latest/actions/reference/events-that-trigger-workflows#repository_dispatch) 跨仓库触发 Actions
      - 达到更新条件时更新后向 go-wechaty-getting-started 提交 Pull-Request
  - 完成 win 平台下 ding-dong 编译测试
  - 完成 ding-dong 的 docker 并推送到 Github Packages
    - 使用多阶段构建，减小镜像体积
    - 尝试了 buildx

- 遇到的问题及解决方案：
  - 学习Docker相关时，尝试使用buildx一次构建多个平台，但由于Github Packages不支持多平台镜像，改为测试了9月上线的ghcr。
  - 在测试go-wechaty时，对触发条件理解不够深入，个人认为将发送dispatch作为step放在编译测试之后符合逻辑，仅仅用`if:Contains()`语句粗略的判断是否为`Pull-Request`事件从而跳过。经过导师提醒后，认识到这样容易发生混淆，在此感谢丁老师的提醒。
  - 在Github Actions优化的核心目标实现后，在现有的项目基础上的优化失去方向，我在导师丁老师的提醒下转向对 Dockerfile 的优化，学习了相关内容，多阶段构建也减小了镜像体积，优化上手体验，再次感谢老师的指导。

### 视频报告

{% include iframe.html src="//player.bilibili.com/player.html?aid=244737639&bvid=BV1cv411y7jY&cid=239638372&page=1" %}

## 导师评论

### 评审对象

- 评审内容：*结项报告*
- 提交人：*唐光彬*

### 评审结果

- 项目完成度：*完成了原既定的跨项目触发CI，以及Docker镜像的编译等工作。*
- 学生参与度：*跨项目触发完全有学生完成，Docker编译部分由学生进行新方案的改进，Dockerfile在指导下完成优化*
- 代码贡献量：*新方案的CI/CD的部分全部由学生完成，代码量涉及开源项目的5%-10，但不能以代码量论英雄，CI/CD对整个开源项目具有积极意义*
- 综合评价及建议：
  - 光彬同学能够很好的主动扩充自己尚未掌握的知识领域，甚至于在一定方向上能够主动的去探索新的技术方案，这一点在工作中是很重要的技能，希望你能够不段的扩充自己的知识领域，能够解决更多未知的问题。
  - 技术方面相信你有足够的积极性去解决，就像你在总结中提到的你会意识到自己技术上的提升空间，但是另一方面希望你能够在开源方面有更多的收获，它可以使你在今后的工作中能够推动更多项目协同上的改进。
- 最终评审结果：*通过*
