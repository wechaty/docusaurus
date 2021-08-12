---
title: "SpringBoot搭建wechaty智能聊天机器"
author: smwsk
categories: project
tags:
  - springboot
  - java
  - weixin-openai
  - entertainment
image: /assets/2020/smwsk-java-wechaty-bot/home.jpg
---

> 本项目是基础wechaty项目实现微信的聊天功能、通过微信对话开放平台提供的API进行智能的应答、实现了微信的智能聊天、最后非常感谢wechaty的无私奉献。

## 智能机器人功能

* 高级转人工
* 周边生活服务
* 聊聊电影
* 讲笑话
* 成语接龙
* 天气查询
* AI时光机
* 心里年龄测试
* 中英互译功能

## 微信机器人头像

![微信二维码](/assets/2020/smwsk-java-wechaty-bot/code.jpg)

## 准备工作

* 需要先准备一台token网关服务器
* 跟wechaty人员申请token
* [微信对话开放平台](https://openai.weixin.qq.com/) 申请一个机器人、学习技能、获取TOKEN

## 项目信息

* [项目地址](https://github.com/smwsk/wechaty-bot)

## 项目成果

<img src="/assets/2020/smwsk-java-wechaty-bot/results-1.jpg" width="300" alt="讲笑话-听歌"/>

<img src="/assets/2020/smwsk-java-wechaty-bot/results-2.jpg" width="300" alt="新闻-成语接龙"/>

<img src="/assets/2020/smwsk-java-wechaty-bot/results-3.jpg" width="300" alt="心理年龄测试"/>

## 待完善功能

* TODO 根据群里的每个人回答对象@响应对应的群友

## 项目研究血泪史

>本人英语不是很好，对于一个都是英文文档的项目看的简直是头疼、但是还是能看的懂一点点、我们从[wechaty](https://github.com/wechaty/wechaty
)项目中得知,我们用到ipad协议的话，需要一个token、然后找到了客户拿到了token。

### 客服发的材料

* puppet_padplus_xxxxx 有效期2020-08-25
* 请务必反复阅读我们的Wiki，Wechaty 的 API 中英文文档、各个项目链接、多个协议的使用说明、Web协议不能使用情况下如何申请其他协议Token等内容均在其中：[https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)
* API文档：[https://wechaty.js.org/api](https://wechaty.js.org/api)
* Padplus Token 进行多语言开发指南[https://github.com/wechaty/wechaty/issues/1985](https://github.com/wechaty/wechaty/issues/1985)

>我看到多语言版本有JAVA版本，马上就下载下来试一下能不能运行。没有详细看后面的文档、这导致我把[JAVA版本Demo](https://github.com/wechaty/java-wechaty-getting-started)下载下来一直运行不起来、后面仔细看了文档之后才知道需要部署一个网关服务、而且要在公网的服务器上面、希望后面的开发不要走我这个弯路、好好查看文档。
