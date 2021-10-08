---
title: "基于wechaty实现的微信机器人，根据淘口令生成高佣转链接，并创建新的淘口令。"
author: henryfanyiye
image: /assets/2020/wechat-fanli-robot/weixin.webp
categories: project
tags:
  - node.js
  - typescript
  - ecommerce
---

基于wechaty实现的微信机器人，根据淘口令生成高佣转链接，并创建新的淘口令。

本项目实现功能：

- 自动同意好友申请
- 淘宝优惠券查询

![weixin](/assets/2020/wechat-fanli-robot/weixin.webp)

## 实现微信机器人

机器人是基于 [wechaty](https://wechaty.js.org/v/zh/quick-start) 来实现，官方文档已经有了非常的详细的教程，所以这里不做赘述。
由于微信 web 协议现在已经废除，所以需要采用iPad协议，wechaty 的 iPad 协议启动是需要 token 的，token 是需要申请的，[点击申请 token](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)。

## 优惠券查询准备

实现功能之前需要有一些前期准备，[申请成为淘宝联盟推广者](https://mos.m.taobao.com/union/pub/site/help?spm=a219t.11817172.0.d8067a02d.55c56a15rIqGt3)，新建媒体及推广位，这里遇到个坑，新增推广位的时候无响应，本人 Mac pro 使用 Chrome，不知道是不是只有我遇到这个问题，后来换成 Safari 就没有问题了。

![meiti](/assets/2020/wechat-fanli-robot/meiti.webp)

![tuiguang](/assets/2020/wechat-fanli-robot/tuiguang.webp)

媒体创建成功后还需要申请 APPKEY，点击申请之后会跳转到淘宝开放平台，然后新建应用，新建的应用没有 API 权限，需要申请。

![appkey](/assets/2020/wechat-fanli-robot/appkey.webp)

![yingyong](/assets/2020/wechat-fanli-robot/yingyong.webp)

![detail](/assets/2020/wechat-fanli-robot/detail.webp)

## 具体实现

1. [解析淘口令](https://www.taokouling.com/api/tkljm/)

2. [创建高佣转链接](https://www.taokouling.com/api/gyjk/)

3. [生成淘口令](https://open.taobao.com/api.htm?docId=31127&docType=2&scopeId=11655)

具体接口参数可以查看对应文档，淘宝开放平台虽然后解析淘口令和创建高佣转链接 API，但是一个没有权限，一个需要授权，所以这里采用[淘口令](https://www.taokouling.com/)现成的接口实现。

## 项目地址

[![Github](https://img.shields.io/badge/GIhub-%40henryfanyiye-brightgreen)](https://github.com/henryfanyiye/wechat-fanli-robot.git)
