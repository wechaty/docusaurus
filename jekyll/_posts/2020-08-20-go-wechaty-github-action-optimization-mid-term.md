---
title: "暑期2020 [Go-wechaty Github Action optimization] POC 成果展示"
author: nebell
categories: project
tags:
  - summer-of-wechaty
  - summer-2020
  - go
  - devops
image: /assets/2020/go-wechaty-github-action-optimization/header.jpg
---

## 暑期2020

“开源软件供应链点亮计划-暑期2020”（以下简称 暑期2020）是由中科院软件所与 openEuler 社区共同举办的一项面向高校学生的暑期活动。
旨在鼓励在校学生积极参与开源软件的开发维护，促进国内优秀开源软件社区的蓬勃发展。
根据项目的难易程度和完成情况，参与者还可获取“开源软件供应链点亮计划-暑期2020”活动奖金和奖杯。

官网：[https://isrc.iscas.ac.cn/summer2020](https://isrc.iscas.ac.cn/summer2020)

官方新闻：[http://www.iscas.ac.cn/xshd2016/xshy2016/202004/t20200426_5563484.html](http://www.iscas.ac.cn/xshd2016/xshy2016/202004/t20200426_5563484.html)

本项目 [Go-wechaty Github Action optimization] 系 暑期2020 支持的开源项目。
wechaty-words-per-day-plugin-mid-term

## 项目信息

- 导师：丁小雨
- 学生：唐光彬

- 项目名称：Go-wechaty Github Action optimization
- 方案描述：使用 Github Actions 相关特性为 Go-wechaty 相关项目作相关优化，提高用户体验。
- 时间规划：8月20 - 9月5日，将相关代码落实到 Go-wechaty 项目中

## 项目进度

- 已完成工作：
  - 自动更新 `go-wechaty-getting-started` 依赖到最新版本
  - 完成 `win` 平台下 `ding-dong` 编译测试
  - 完成 ding-dong 的 docker 并推送到 Github Packages

- 遇到的问题及解决方案：
  自动化流程使得软件构建、测试、发布等操作更为便捷，提升了相关效率，也使得开源项目的维护更加容易。

  在完成第一个核心目标时，考虑到更新`go.mod`时，其中的依赖不仅仅有`go-wechaty`相关包，后续的 examples 中可能加入其他示例，有其他依赖的加入，故而不直接使用`go get -u`仅对`go-wechaty`进行相关更新。而用了一个笨方法，在 Action 中的项目文件中，将`go.mod`备份，再使用`go mod init github.com/wechaty/go-wechaty-getting-started`再注册一次，再使用`go mod tidy`更新。之后对比新旧`go.mod`，如果两者不一致则向提交一个 Pull-Request，更新依赖。

  在完善 Dockerfile 相关测试时，其中 golang 依赖下载需要的网络环境不支持，故而将 ENV 中的 goproxy 设置成了`goproxy.io`。且在测试时，测试用的 TOKEN 无法使用，通过自己搭建服务解决了。

- 后续工作安排：

  - 8月15日~9月5日：完善内容，提交项目代码，确保原项目中代码能顺利触发。

### 相关地址

- [go-wechaty 测试](https://github.com/Nebell/go-wechaty)
- [go-wechaty-getting-started 测试](https://github.com/Nebell/go-wechaty-getting-started)
- [Docker Image](https://github.com/Nebell/go-wechaty-getting-started/packages/322606)

### 视频报告

{% include iframe.html src="//player.bilibili.com/player.html?aid=926781806&bvid=BV13T4y1L748&cid=227497146&page=1" %}

{% include iframe.html src="//player.bilibili.com/player.html?aid=371800597&bvid=BV1qZ4y1K7Mh&cid=227500615&page=1" %}

## 联系我们

- 项目链接：[https://github.com/Nebell/go-wechaty-getting-started](https://github.com/Nebell/go-wechaty-getting-started)
- 联系方式：[tang.packet@outlook.com](tang.packet@outlook.com)
