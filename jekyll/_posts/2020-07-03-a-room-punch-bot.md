---
title: "微信群打卡统计机器人"
author: secreter
categories: tutorial
tags:
  - assistant
image: /assets/2020/tiny-bot/teaser.jpeg
---

一个可以OCR 打卡并生成统计方块图的机器人。

![打卡图片](/assets/2020/tiny-bot/teaser.jpeg)

## 项目背景

由于疫情的影响，大家都减少了不必要的外出，互联网行业也有很多公司在家办公。带来的一个问题就是，大家外出和运动的时间减少了，几乎都宅在家里，很多人体重开始飙升。于是朋友建了一个健身打卡群，每天大家在家运动健身，然后在群里进行打卡。非常好的一件事情，唯一的缺点就是，打卡行为只能靠自觉约束，并且不能很好的记录到底打卡多少天了？是否连续打卡？也不能准确的知道打卡最积极的人并给予一些奖励。

这个时候想到微信机器人，其实很多年前我就搞过微信机器人，后来由于web  版本的掉线太频繁，就放弃了一段时间。这次借此契机，又上github 搜索了一下wechaty,看到ipad 协议的机器人支持度很好，于是决定重操旧业，开发一个打开机器人。

## 项目需求

1. 支持关键字打卡，例如：发送“打卡”即可打卡成功
2. 记录打卡人的详细信息，包括昵称、备注、头像、打卡时间等
3. 打卡成功后，生成精美的图片卡片，并包含打卡日期统计图
4. 针对分享在群里的图片（keep截图等），进行ocr识别，提前关键字自动打卡
5. 支持机器人聊天，活跃群气氛

## 项目实现

感谢wechaty提供的框架，项目目前以上功能均已实现，并且还增加了一些外的小功能。在此分享几个实现过程中的功能点。

### 开发框架

首先，我们在代码编码之前，应该设计一些代码的目录结构和基本框架，好的框架能让开发得心应手，提高效率。

```js
|-tiny-bot
  |-Dockerfile
  |-README.md
  |-package.json
  |-src
  |  |-api
  |  |  |-constellation.js
  |  |  |-turing.js
  |  |  |-unsplash.js
  |  |-config.js
  |  |-lib
  |  |  |-adDetect.js
  |  |  |-admin.js
  |  |  |-common.js
  |  |  |-file.js
  |  |  |-forward.js
  |  |  |-logger.js
  |  |  |-room.js
  |  |  |-utils.js
  |  |-listeners
  |  |  |-on-filehelper-message.js
  |  |  |-on-friend-message.js
  |  |  |-on-friend.js
  |  |  |-on-login.js
  |  |  |-on-logout.js
  |  |  |-on-message.js
  |  |  |-on-room-admin-message.js
  |  |  |-on-room-invite.js
  |  |  |-on-room-join.js
  |  |  |-on-room-leave.js
  |  |  |-on-room-mention.js
  |  |  |-on-room-message.js
  |  |  |-on-room-topic.js
  |  |  |-on-scan.js
  |  |  |-on-superadmin-message.js
  |  |-robot.js
  |  |-tpl
  |  |  |-punch.html
  |  |-util
  |  |  |-callerFileName.js

```

其中listeners 目录对消息类型进行了分类，这样，需要添加特定消息的业务逻辑时，就可以很清晰的添加。config.js 中提供了项目中的所有动态配置项，tpl/ 目录里，存放了代码的打卡模板，可以[点击查看效果](http://images.redream.cn/upic/2019/20200629184711-punch.html?data=[{"count":1,"timestamp":1593097495015},{"count":1,"timestamp":1593270295015},{"count":1,"timestamp":1593339046223},{"count":1,"timestamp":1593427696584},{"count":1,"timestamp":1593521084178},{"count":1,"timestamp":1593574357851},{"count":1,"timestamp":1593688908645},{"count":1,"timestamp":1593705938358}]&avatar=https://github.com/wechaty/wechaty.github.io/raw/master/assets/2020/tiny-bot/qr.jpeg&name=@2020&&h=450&w=375&x=0&y=0)（手机版）

### 打卡模板实现

打卡模板，是一个纯html 文件，逻辑非常简单，就是从url 上读取用户昵称、头像、数据，进行页面渲染，其中打卡方块图的绘制，用到了可视化库[F2](https://f2.antv.vision/zh/docs/tutorial/getting-started)。

### 图片生成

图片生成是在服务端实现的，主要是用到了无头浏览器[puppeteer](https://try-puppeteer.appspot.com/)的截图功能。相当于浏览器访问tpl.html地址，将生成的页面进行截图，再通过File-box 返回给用户，即实现了打卡生成图片的功能。

![打卡图片](/assets/2020/tiny-bot/teaser.jpeg)

### OCR打卡

手动输入打卡关键字打卡，对于有的比较懒的同学，还是比较麻烦的。OCR 技术能实现无感知打卡，当用户将keep 运动的截图发送到群聊的时候，就可以通过OCR 技术识别关键字，进行打卡。这里主要调用的接口是[腾讯的AI 开放平台](https://ai.qq.com/)的通用识图技术。

![打卡图片](/assets/2020/tiny-bot/ocr.jpeg)

![打卡图片](/assets/2020/tiny-bot/menu.jpeg)

## 功能增强

至此，你已经能实现一个很好的打卡机器人了。但其实我们还能做更多，这些我也正在开发中，敬请期待，例如：

1. OCR 识别运动时长，生成更细的打卡记录
2. 采用定时任务，对长期未打卡人进行主动@提醒
3. 智能转发优质运动公众号文章到群聊
4. 支持keep 小程序打卡
5. ...

## 体验

目前代码开源，大家可以clone 下来体验一下，项目地址：[https://github.com/secreter/tiny-bot](https://github.com/secreter/tiny-bot)，博客地址：[https://www.redream.cn/](https://www.redream.cn/)

也欢迎大家添加我的机器人张三进行体验。

![机器人二维码](/assets/2020/tiny-bot/qr.jpeg)

> Author: [@secreter](https://github.com/secreter) 公众号redream
> Code: [@tiny-bot](https://github.com/secreter/tiny-bot)
