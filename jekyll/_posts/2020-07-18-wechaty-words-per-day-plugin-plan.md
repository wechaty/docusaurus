---
title: "暑期2020 [编写一个“每日一句”插件] 计划书"
author: univerone
categories: project
tags:
  - plugins
  - summer-of-wechaty
  - summer-2020
  - entertainment
image: /assets/2020/wechaty-words-per-day-plugin-plan/header.jpg
---

“开源软件供应链点亮计划-暑期2020”（以下简称 暑期2020）是由中科院软件所与 openEuler 社区共同举办的一项面向高校学生的暑期活动。
旨在鼓励在校学生积极参与开源软件的开发维护，促进国内优秀开源软件社区的蓬勃发展。
根据项目的难易程度和完成情况，参与者还可获取“开源软件供应链点亮计划-暑期2020”活动奖金和奖杯。

官网：<https://isrc.iscas.ac.cn/summer2020>

官方新闻：<http://www.iscas.ac.cn/xshd2016/xshy2016/202004/t20200426_5563484.html>

本项目 [编写一个“每日一句”插件] 系 暑期2020 支持的开源项目。

## 编写一个“每日一句”插件具体计划

- 导师：gcaufy
- 学生：univerone
- 模块列表
  - [x] 开发插件的基本框架
  - [ ] 发布NPM包，引入CI/CD
  - [ ] 丰富语料库
  - [ ] 进行测试，完善项目文档
  - [ ] 根据群名推荐每日一句的发送内容（可选）
- 计划安排：
  - 开发插件的基本框架
    - 7/1 - 7/21
    - 插件的输入参数有：使用的内置API接口名称、应用的群聊名称以及发布每日一句内容的时间，完成基本代码构建。插件能够设置定时发送的时间、群名、发送的内容，也可以根据请求结构中的图片地址下载图片，并根据每日一句内容以及微信群的相关信息添加水印。
    - 基本步骤
  - 发布NPM包，引入CI/CD
    - 7/22 - 8/05
    - 进一步优化代码以及注释，引入CI/CD来进行代码质量控制以及包的版本管理
    - 无
  - 丰富语料库
    - 8/06 - 8/20
    - 首先确定使用的API接口或者爬取的网址，根据不同的网址进行不同的解析，返回指定的结果。构造请求并解析内容，返回需要的字符串（每日一句的内容或者图片的URL）。如有余力的话，能够支持用户自主设定语料的来源。
    - 无
  - 进行测试完善项目文档
    - 8/20 - 9/03
    - 完善项目文档，撰写整个项目过程的总结文章。增加单元测试等。
    - 无
- 项目链接：[https://github.com/univerone/WordsPerDay](https://github.com/univerone/WordsPerDay)
- 联系方式：univerone@outlook.com

> 作者: [univerone](https://github.com/univerone/)
> Code: [Github](https://github.com/univerone/WordsPerDay)
