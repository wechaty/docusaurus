---
title: "微信群过于频繁提醒功能"
author: chianquan
image: /assets/2020/wechaty-speaker-mention/speaker-mention.webp
categories: project
tags:
  - nodejs
  - padplus
  - project
  - productivity
---

自己在的知识讨论分享群里人数比较多，经常有人在群里闲聊，发言太多，导致有用的信息容易被淹没。

于是决定添加一个群规则，每个人半小时内只能发言三次，如过超过则会通过机器人@发言人 提醒对方控制发言频率。

## 实现方式

维护一个数组（这里用链表代替），当有人发言时，在数组中推入一条记录，移除30分钟前的记录，检查该消息发言人是否有超过3条记录在数组中。如果超过，则提示用户不要过度发言。

## 代码实现

项目地址：[speaker-mention](https://github.com/chianquan/wechaty-speaker-mention)

## 启动方式

### 拉取代码

    git clone git@github.com:chianquan/wechaty-speaker-mention.git

### 安装依赖

    npm install

### 第一次启动服务（使用padplus协议控制wx，需要配置token和启动方式 XXX位置为申请的token）

    WECHATY_PUPPET_PADPLUS_TOKEN=XXX WECHATY_PUPPET=wechaty-puppet-padplus npm start

### 扫描二维码登录pad微信

  ![登录扫码](/assets/2020/wechaty-speaker-mention/speaker-mention-scan.webp)

### 在需要生效的微信群中有发言时，日志中会打出该微信群的名称和id，从日志中获取对应微信群id

  ![获取微信群id](/assets/2020/wechaty-speaker-mention/speaker-mention-get-wxg-id.webp)

### 关闭服务

  ctr-C 退出服务

### 正式启动服务

需要先配置环境变量

//必填，微信群id，使用前面获取到的微信群id

ROOM=19231818861@chatroom

//可选，时间限定范围，单位ms 默认为半小时

TIME_LIMIT=1800000

//可选，允许发言次数，超过该次数则提醒用户不要过度发言，默认为3

SPEAK_LIMIT=3

//可选，自定义提醒的文本 默认为 `请${ms(timeLimit)}内不要超过${speakLimit}次发消息哦`}`

MENTION_TEXT=不要过度发言  

例如：

  WECHATY_PUPPET_PADPLUS_TOKEN=XXX WECHATY_PUPPET=wechaty-puppet-padplus ROOM=19231818861@chatroom npm start

### 在微信群中发言效果

   ![获取微信群id](/assets/2020/wechaty-speaker-mention/speaker-mention-result.webp)

## 结语

  wechaty 的功能很强大，打通了微信使用的很多环节，接口很优雅，使用简单。体验很好。还可以基于它实现很多功能，解放双手，赞
