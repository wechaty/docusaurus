---
title: "每日微信音乐卡片分享机器人（wechat-daycard）"
author: leijiahang
categories: project
tags:
  - padplus
  - entertainment
image: /assets/2020/wechat-daycard/header.png
---

[![wechaty badge](https://img.shields.io/badge/Powered%20By-Wechaty-green.svg#align=left&display=inline&height=20&margin=%5Bobject%20Object%5D&originHeight=20&originWidth=132&status=done&style=none&width=132)](https://github.com/wechaty/wechaty)
[![everything about wechaty](https://img.shields.io/badge/Wechaty-%E5%BC%80%E6%BA%90%E6%BF%80%E5%8A%B1%E8%AE%A1%E5%88%92-green.svg#align=left&display=inline&height=20&margin=%5Bobject%20Object%5D&originHeight=20&originWidth=134&status=done&style=none&width=134)](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)

## 背景

公司app有一个呢喃打卡的活动，现有的方式是在app分享图片和H5的二维码。现利用wechaty，基于每日数据接口，获取到当日的歌曲和图片，利用现有的听歌小程序结合微信个人头像和昵称，做一个在群里面就能实现打卡分享每日歌曲图片的这么一个机器人。

## 功能

- 群里回复打卡，合成歌曲分享图片（分享图+微信头像+微信昵称+小程序歌曲码）

## 实现逻辑

- 监听群消息，获取打卡人的头像和昵称，这一块wechaty已经做的差不多了，我只需要简单的几行代码搞定；
- 请求每日数据接口，拉取到当日的歌曲id和对应的分享封面图；
- 保存拉取到的图片网络连接到本地
- 根据歌曲id生成对应的小程序码，这一步需要小程序服务端的相关功能
- 合成图片，这一块利用gm来实现
- 发送图片消息给用户

## 依赖

wechaty：wechaty核心库  
wechaty-puppet-padplus：wechaty的ipad协议实现  
gm: 图片合成  
axios: 发请求  

## 实现过程

具体代码可以上github参看 [Github](https://github.com/leijiahang/wechat-daycard/)

## 本地运行

1. 克隆项目

```shell
git clone g https://github.com/leijiahang/wechat-daycard
cd wechat-daycard
```

1. 安装依赖

```shell
npm install
```

1. 启动项目

```shell
node app.js
```

## 效果图

![效果图](/assets/2020/wechat-daycard/demo.jpg)

## 致谢

非常感谢[Wechaty](https://wechaty.github.io/)团队提供微信机器人SDK，让开发者可以专注于业务代码。  
感谢[句子互动](https://www.juzibot.com)提供的pad协议版token。

> 作者: [leijiahang](https://github.com/leijiahang/)
> Code: [Github](https://github.com/leijiahang/wechat-daycard)
