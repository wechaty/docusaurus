---
title: "wechaty Web Panel的plugin诞生"
author: leochen-g
categories: project
tags:
  - code
  - web-panel
  - plugin
  - feature
  - ecosystem
image: /assets/2020/web-panel-plugin/web-head.png
---

## 背景介绍

对，又是那个写[《微信每日说》](https://github.com/gengchen528/wechatBot)的家伙来搞事情了。周末在参加了《Wechaty插件系统发布分享会》后，看到大家在群里讨有说到要是有一个可视化的面板插件就好了，
看到这里，我就开始萌生了一个想法。其实可视化面板我已经做出来了，何不把这块逻辑直接抽成一个插件来提供web面板服务。既然如此，说干就干，凌晨3点钟，此插件终于发布成功

插件地址：[Wechaty-web-panel](https://github.com/gengchen528/wechaty-web-panel)

## 面板主要功能

- [x] 微信每日说,定时给女朋友发送每日天气提醒，以及每日一句

### 定时提醒

- [x] 当天定时提醒  例："提醒 我 18:00 下班了，记得带好随身物品"
- [x] 每天定时提醒  例："提醒 我 每天 18:00 下班了，记得带好随身物品"
- [x] 指定日期提醒  例："提醒 我 2019-05-10 8:00 还有7天是女朋友生日了，准备一下"

### 智能机器人

- [x] 天行机器人
- [x] 图灵机器人
- [ ] 更多

### 群定时任务

- [x] 群新闻定时发送
- [x] 群消息定时发送
- [ ] 更多功能等你来pr

### 关键词

- [x] 关键词加好友
- [x] 关键词加群
- [x] 关键词回复
- [x] 关键词事件
  - [x] 天气查询 例："上海天气"
  - [x] 垃圾分类 例："?香蕉皮"
  - [x] 名人名言 例： "名人名言"
  - [x] 老黄历查询 例： "黄历2019-6-13"
  - [x] 姓氏起源 例： "姓陈"
  - [x] 星座运势 例： "*双子座"
  - [x] 神回复 例： "神回复"
  - [x] 获取表情包 例： "表情包你好坏"
  - [x] 获取美女图 例： "美女图"
  - [ ] 更多待你发现
- [x] 进群自动欢迎
- [x] 加好友自动回复

### 好友及群管理

- [ ] 好友列表
- [ ] 群列表
- [ ] 聊天记录
- [ ] 数据分析

### 自动更新配置文件，无需重启

- [x] 默认给机器人发送 ‘更新’ 触发拉取新配置文件操作，可在面板`小助手配置->关键词回复->关键词事件`进行修改关键词

更多详情介绍：[传送门](https://www.xkboke.com/web-inn/secretary/client.html#%E5%B0%8F%E5%8A%A9%E6%89%8B%E5%8A%9F%E8%83%BD%E4%B8%80%E8%A7%88)

## 插件使用

### 提前准备

注册智能微秘书管理账号

1. 注册：[智能微秘书](https://wechat.aibotk.com/#/signup)

2. 初始化配置文件`小助手配置->基础配置`，修改后保存

3. 个人中心获取`APIKEY`和`APISECRET`，后续配置用到

![user-center](/assets/2020/web-panel-plugin/user-center.png)

### 开始

#### Step 1: 安装

```shell
npm install wechaty-web-panel --save
```

#### Step 2: 创建配置文件

项目根目录创建`env.json`,填入之前准备的`apiKey`和`apiSecret`

```shell
$ vim env.json

{
  "apiKey": "",
  "apiSecret": ""
}
```

再创建一个`wechat-config.json`，内容为一个空对象即可，后续会自动写入配置文件

```shell
$ vim wechat-config.json

{}
```

#### Step 3: 创建机器人

```sh
$ vim mybot.js

const { Wechaty } = require('wechaty');
const WechatyWebPanelPlugin = require('wechaty-web-panel');
const bot = Wechaty.instance({ profile: "WECHATY_PROFILE" });

bot
  .use(WechatyPanelPlugin())
  .start()
  .catch((e) => console.error(e));

```

#### Step 4: 运行

```sh
ode mybot.js
```

#### Step 5: 扫码进入

进入面板`小助手配置->登录状态`扫码登录，或直接扫码控制台二维码登录。成功登陆后，即可使用面板中所有的功能

![qrcode](/assets/2020/web-panel-plugin/qrcode-s.png)

## 面板预览

![qrcpde](/assets/2020/web-panel-plugin/qrcode.png)
![everyday](/assets/2020/web-panel-plugin/everyday.png)
![schedule](/assets/2020/web-panel-plugin/schedule.png)
![event](/assets/2020/web-panel-plugin/event.png)
![material](/assets/2020/web-panel-plugin/material.png)

## 功能预览

![news](/assets/2020/web-panel-plugin/news.jpeg)

个人定时与群定时任务

![func](/assets/2020/web-panel-plugin/func.jpeg)

功能一览

## 后续

后续会继续完善插件的功能，也欢迎大家来提交Pr。如果想要了解插件最新进展或者进行交流，欢迎添加我的小秘书，回复`插件`拉你进群

![8](/assets/2020/web-panel-plugin/qr.png)

## 致谢

感谢Wechaty团队提供这么好的一个工具，同时还开发出这么赞的插件系统。希望能够有更多的人参与进来，来继续扩大wechaty插件的生态圈

> 作者: [Leo_chen](https://github.com/leochen-g/)，高级前端工程师，喜欢使用node做各种项目
