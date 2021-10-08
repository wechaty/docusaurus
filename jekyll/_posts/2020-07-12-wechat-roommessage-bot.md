---
title: "群消息同步机器人"
author: sidny
categories: project
tags:
  - padplus
  - project
  - productivity
  - hospitality
image: /assets/2020/wechat-roommessage-bot/teaser.webp
---

[![wechaty/wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-green.svg#align=left&display=inline&height=20&margin=%5Bobject%20Object%5D&originHeight=20&originWidth=132&status=done&style=none&width=132)](https://github.com/wechaty/wechaty)
[![Everything-about-Wechaty](https://img.shields.io/badge/Wechaty-%E5%BC%80%E6%BA%90%E6%BF%80%E5%8A%B1%E8%AE%A1%E5%88%92-green.svg#align=left&display=inline&height=20&margin=%5Bobject%20Object%5D&originHeight=20&originWidth=134&status=done&style=none&width=134)](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)

## 背景

前几个月出差，公司租用的公寓房东提出了一个想法
1 租户大概有几百户
2 租户有散户，也有公司长期出差统一租赁（例如我）
3 很多微信群管理起来很麻烦

于是有了这个需求的模型：
1 机器人存在于多个群组中 ，例如 散户1群 ，囧东出差群，渣浪出差群，企鹅出差群，。。。。（排名不分先后）
2 有个管理群组，只有房东及工作人员在其中
3 租户在自己的群中@机器人，提出自己的问题， 机器人会将内容转发至 管理群
4 房东接受问题，或将问题处理完后，可以回复相应信息，机器人会在对应的群众转发房东的回复并@租户
5 房东可以在管理群中发送公告 ，同步至所有的机器人所在的群

## 功能

- 咨询 ：
  @机器人 【咨询】你要咨询的内容

- 回复 ：
  @机器人 msgId:xxxxoooo
  【回复】你要回复的内容

- 公告：
  @机器人 【公告】公告内容

## 实现逻辑

- 监听群消息，分析消息文本，使用 【】作为关键次标识，然后进行相应的消息发送

## 依赖

wechaty：wechaty核心库
wechaty-puppet-padplus：wechaty的ipad协议实现

## 实现过程

具体代码可以上github参看 [Github](https://github.com/sidny/wxbot)

## 本地运行

1. 克隆项目

```shell
git clone https://github.com/sidny/wxbot.git
```

1. 安装依赖

```shell
npm install
```

1. 启动项目

```shell
npm run serve
```

## 效果图

- 咨询
  ![咨询](/assets/2020/wechat-roommessage-bot/query.webp)

- 回复
  ![回复](/assets/2020/wechat-roommessage-bot/answer.webp)

- 公告
  ![公告](/assets/2020/wechat-roommessage-bot/notice.webp)

## 致谢

非常感谢 [Wechaty](https://wechaty.github.io/) 团队提供微信机器人SDK，让开发者可以专注于业务代码。
感谢 [句子互动](https://www.juzibot.com/) 提供的pad协议版token。

wechaty：[https://wechaty.github.io/](https://wechaty.github.io/)
句子互动：[https://www.juzibot.com/](https://www.juzibot.com/)

> 作者: [sidny](https://github.com/sidny/)
> Code: [Github](https://github.com/sidny/wxbot)
