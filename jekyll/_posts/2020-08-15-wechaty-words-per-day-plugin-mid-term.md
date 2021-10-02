---
title: "暑期2020 [编写一个“每日一句”插件] POC 成果展示"
author: univerone
categories: project
tags:
  - plugins
  - summer-of-wechaty
  - summer-2020
  - entertainment
image: /assets/2020/wechaty-words-per-day-plugin-mid-term/header.webp
---

“开源软件供应链点亮计划-暑期2020”（以下简称 暑期2020）是由中科院软件所与 openEuler 社区共同举办的一项面向高校学生的暑期活动。
旨在鼓励在校学生积极参与开源软件的开发维护，促进国内优秀开源软件社区的蓬勃发展。
根据项目的难易程度和完成情况，参与者还可获取“开源软件供应链点亮计划-暑期2020”活动奖金和奖杯。

官网：<https://isrc.iscas.ac.cn/summer2020>

官方新闻：<http://www.iscas.ac.cn/xshd2016/xshy2016/202004/t20200426_5563484.html>

本项目 [编写一个“每日一句”插件] 系 暑期2020 支持的开源项目。

> Github Repo: [Github](https://github.com/univerone/words-per-day)

## [编写一个“每日一句”插件]信息

- 导师：Gcaufy
- 学生：江姗姗

- 项目名称：编写一个“每日一句”插件

- 方案描述：
  - 制作可以被wechaty调用的插件，能够使用用户自定义的每日一句语料
  - 插件能够构造POST和GET请求，设置请求参数，并根据指定的解析规则解析返回的json格式或者html格式的内容
  - 插件可以根据请求结构中的图片地址下载图片，并根据每日一句内容以及微信群的相关信息添加水印
  - 插件能够设置定时发送的时间、群名、发送的内容
  - 根据群名推荐每日一句的发送内容（候选）
  - 能够调用该插件使用自定义的api接口（候选）

- 时间规划：
  - 开发插件的基本框架
    - 7/1 - 7/21
    - 插件的输入参数有：使用的内置API接口名称、应用的群聊名称以及发布每日一句内容的时间，完成基本代码构建。插件能够设置定时发送的时间、群名、发送的内容，也可以根据请求结构中的图片地址下载图片，并根据每日一句内容以及微信群的相关信息添加水印。
  - 发布NPM包，引入CI/CD
    - 7/22 - 8/14
    - 进一步优化代码以及注释，引入CI/CD来进行代码质量控制以及包的版本管理
  - 丰富语料库
    - 8/15 - 9/07
    - 首先确定使用的API接口或者爬取的网址，根据不同的网址进行不同的解析，返回指定的结果。构造请求并解析内容，返回需要的字符串（每日一句的内容或者图片的URL）。如有余力的话，能够支持用户自主设定语料的来源。
  - 进行测试完善项目文档
    - 9/07 - 10/01
    - 完善项目文档，撰写整个项目过程的总结文章;增加单元测试等;计划延迟的缓冲时间

## 项目进度

- 已完成工作：
  - 07/01 - 07/18
    - 完成了插件的基本框架
    - 实现了往指定群聊定时发送消息、根据关键词生成打卡图片的基本功能
  - 07/19 - 07/26
    - 发布成NPM包，使用github action进行自动构建和版本更新
    - 优化项目结构
    - 统一注释风格为JSdoc
    - 优化代码
  - 07/27 - 08/02
    - 支持用户使用3种方式(jsonpath选择器、css选择器以及正则表达式)以及固定的网址自定义数据源
    - 生成的图片输出为base64字符串
    - 使用try...catch来进行await, promise 的异常捕捉
  - 08/03 - 08/15
    - 进一步抽象数据抓取模块，支持使用用户自定义的数据抓取函数。能够解析每日一句信息中的图片信息，并以图片的形式发送。

- 遇到的问题及解决方案：

  - 在编写这个插件的过程中，有很多需要等待一定时间来完成的步骤，比如图片的下载保存等，这些过程是异步执行的，如果想在这个过程结束后进行下一个过程使用它的结果，可以使用回调函数，但是可读性比较差，因此最终改用Promise以及Async/Await进行处理。
  - 图像处理使用了npm的gm包，相关文档不够详细因此在处理图像的过程中花费较多时间达到想要的效果。

- 后续工作安排：
  - 完善项目文档
  - 撰写项目的测试代码
  - 撰写整个项目过程的总结文章
  - 完善差错处理模块

## 联系我们

- 项目链接：<https://github.com/univerone/words-per-day>
- 联系方式：univeroneie(at)outlook.com

## Wechaty Demo Day 视频

### PPT展示视频

{% include iframe.html src="https://player.bilibili.com/player.html?bvid=BV1vT4y157x5" %}

### PPT

{% include iframe.html src="/assets/2020/wechaty-words-per-day-plugin-mid-term/presentation.pdf" %}

### Live Code视频

{% include iframe.html src="https://player.bilibili.com/player.html?bvid=BV1ih411d75h" %}
