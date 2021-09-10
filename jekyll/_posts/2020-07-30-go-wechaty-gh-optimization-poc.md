---
title: "暑期2020 [Go-wechaty Github Action optimization] 计划书"
author: nebell
categories: project
image: /assets/2020/go-wechaty-github-action-optimization-poc/header.jpg
tags:
  - go
  - summer-of-wechaty
  - summer-2020
  - devops
---

“开源软件供应链点亮计划-暑期2020”（以下简称 暑期2020）是由中科院软件所与 openEuler 社区共同举办的一项面向高校学生的暑期活动。
旨在鼓励在校学生积极参与开源软件的开发维护，促进国内优秀开源软件社区的蓬勃发展。
根据项目的难易程度和完成情况，参与者还可获取“开源软件供应链点亮计划-暑期2020”活动奖金和奖杯。

官网：[https://isrc.iscas.ac.cn/summer2020](https://isrc.iscas.ac.cn/summer2020)

官方新闻：[http://www.iscas.ac.cn/xshd2016/xshy2016/202004/t20200426_5563484.html](http://www.iscas.ac.cn/xshd2016/xshy2016/202004/t20200426_5563484.html)

本项目 [Go-wechaty Github Action optimization] 系 暑期2020 支持的开源项目。

<!--more-->

## [Go-wechaty Github Action optimization]具体计划

- 导师：丁小雨
- 学生：唐光彬
- 模块列表
  - [x] 更新 `go-wechaty-getting-started` 依赖
  - [x] 完成 `Windows` 平台下 `ding-dong` 编译测试
  - [ ] 完成 ding-dong 的 docker 并推送到 Github Packages
- 计划安排：
  - 更新 `go-wechaty-getting-started` 依赖
    - 预期完成时间：7月14日
    - 模块描述：在`go-wechaty-getting-started`代码更新时检测依赖是否更新到最新，如果没有更新到最新，则更新后提交一个 Pull-Request。
  - 完成 `Windows` 平台下 `ding-dong` 编译测试
    - 预期完成时间：7月14日
    - 模块描述：实现在`Windows`平台下编译`ding-dong`，在第一个模块为基础上。
  - 完成 ding-dong 的 docker 并推送到 Github Packages
    - 预期完成时间：8月1日
    - 模块描述：ding-dong 能编译通过则根据 dockerfile 生成镜像并推送。
    - 备注：需要提供 Docker Image 的命名格式
- 项目链接：[wechaty/go-wechaty-getting-started](https://github.com/wechaty/go-wechaty-getting-started)
- 联系方式：tang.packet@outlook.com

> 作者: [TangGuangbin](https://github.com/Nebell/)
