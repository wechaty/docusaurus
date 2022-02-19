---
title: "2022寒假-王天睿-JuziBot项目开发-期中报告-智能信息助理"
author: tianrking
categories: article
tags:
  - juzibot
image: /assets/2022/01-begin-intern-juzibot-report/cover.webp

---

## 2022寒假-王天睿-JuziBot项目开发-期中报告-智能信息助理

### 项目参与人

- 导师：段清华
- 学生：王天睿

### 项目目标

  Juzibot 智能的信息助理 ，“小橘子”让您的生活更加高效 ！

### 主要功能

1. 备忘录(已有)
    - 直接输入的文本、转发的文本
    - 语音输入、图片、视频、链接存储等多媒体信息
    - 输入文本中包含标签符号

2. TODO列表(已有）
3. 搜索指令(部分)  
4. 其他指令(待完善)
   - 例如
      1. 打开web/小程序管理界面
      2. 群文件
      3. 我的文件

### 项目计划

1. 01/13-01/17 : 成功运行dingdong bot，运行juzibot 初步了解juzibot 模块 并学习nodejs
2. 01/18-01/25 : 开始根据现有功能书写测试用例，同时深入了解juzibot对应模块功能
3. 01/26-02/11 : 现有功能的完善与测试用例的持续编写
4. 02/12- : 集成测试与其他功能开发

### 项目进展

| 时间  | 重点工作                                                 | 关键进展                               |
| ----- | -------------------------------------------------------- | -------------------------------------- |
| 01/13  | 学习 wechaty；跑通getting started 项目           | 成功部署dingdong bot到服務器           |
| 01/14  | 使用juzibot 并初步学习nodejs | 成功在服务器上跑通并可以实现交互            |
| 01/15  |  继续学习nodejs 简单修改juzibot自动回复代码     | 对Juzibot 有了大体的认识  简单修改代码实现关键词回复对应的语句 |
| 01/18 | 使用jekyll 完整的尝试一次提交pr   | 谷歌了报错问题，并在段清华老师和同事的帮助下，解决了问题完成提交      |
| 01/19-22 | 使用mocha 初步完成模块测试   |    [Link](https://github.com/deepdialog/xiaojuzi/commits/master)    |
| 01/24-28 | 修改代码 完善更多模块,修改完善匹配规则  |      |

### 模块测试列表

- [x] docx转换为文本
- [ ] 文件管理
- [ ] 图片转换为句子（本地REST）
- [ ] 对象存储
- [ ] 图片中对象识别（本地REST）
- [ ] PDF转换文本
- [ ] 网页截图（本地REST）
- [ ] 搜索文本/文件
- [x] txt文本
- [ ] 文本到向量（本地REST）
- [ ] 待办事项
- [ ] URL保存到PDF

### 第一次答辩

#### 视频

{% include iframe.html src="https://youtu.be/Z2VGME2K1Oo" %}

#### 答辩PPT

{% include iframe.html src="/assets/2022/01-begin-intern-juzibot-report/01.pdf" %}

### 项目链接

- 项目链接：[https://github.com/tianrking/xiaojuzi](https://github.com/tianrking/xiaojuzi)

- 联系方式：Telegram: @qozob |  Email: me@w0x7ce.eu

> Author: [@tianrking](https://github.com/tianrking)
> Code: [@tianrking/juzibot](https://github.com/tianrking/xiaojuzi)
