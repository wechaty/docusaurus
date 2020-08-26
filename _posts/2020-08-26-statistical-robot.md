---
title: "群订餐助手"
author: ovarte
categories: project
tags:
  - wechaty
  - wechaty-puppet-padplus
  - order
image: /assets/2020/wechaty-statistical-robot/header.jpg
---
> Author: [ovarte](https://github.com/ovarte)
> Code: [statistical-robot](https://github.com/ovarte/statistical-robot)

[![Powered by Wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-green.svg)](https://github.com/wechaty/wechaty)
[![Wechaty开源激励计划](https://img.shields.io/badge/Wechaty-开源激励计划-green.svg)](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)

## 背景

新冠疫情期间，公司订餐需要接龙，每天接龙也是真的麻烦。使用了机器人，再不怕同事忘记订餐了。


<!--more-->

### 功能

- 统计功能
  - 使用机器人定时发送订餐信息，提醒公司同事订餐
  - 同事回复订餐消息后，将订餐的同事统计
  - 指定管理员发送 ‘查看订餐’ 等关键词，查看当天订餐记录
- 自动通过好友验证
  - 当有人添加机器人时，判断验证消息关键字后通过或直接通过
  - 通过验证后自动回复并介绍机器人功能
- 私聊关键字回复
  - 例如回复 `加群` 推送群聊邀请

### 运行

克隆项目

```shell
git clone https://github.com/ovarte/statistical-robot.git

cd statistical-robot
```

- 安装依赖机器人所需依赖

```shell
npm install
```


- 启动项目

```shell
npm serve
```

### 后续

来吧，生命在于折腾，好玩的东西总要试一试，毕竟费不了多少时间，你也可以加下我的小助手【圈子】微信体验下呦，验证消息写【前端】可以直接通过，和他聊聊天，或者加技术交流群我们一块玩耍都可以的

![WechatIMG127](./README.assets/WechatIMG127.jpeg)

如果你加小助手微信遇到了问题，也可以通过以下方式联系我或加群

![20200111-143924](./README.assets/20200111-143924.png)

### 致谢

🙏感谢[wechaty](https://github.com/wechaty/wechaty)团队提供微信机器人SDK  
🙏感谢[句子互动](https://www.juzibot.com/)提供的iPad协议版token
