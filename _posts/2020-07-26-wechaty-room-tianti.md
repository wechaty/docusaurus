---
title: "微信群聊天记录天梯机器人(wechaty-room-tianti)"
author: fangmuke
categories: project
tags:
  - wechaty
  - wechaty-puppet-padplus
image: /assets/2020/wechaty-room-tianti/header.png
---
> Author: [fangmuke](https://github.com/fangmuke)
> Code: [wechaty-room-tianti](https://github.com/fangmuke/wechaty-room-tianti)

### 背景

这个需求被群里的程序员pm提过好多次，但由于不可抗拒的原因，一直没有实施🤪
直到看到了[wechaty](https://github.com/wechaty/wechat)的开源计划，又重新燃起了这个计划，于是这个项目横空出世🎉

### 功能

- 查询群天梯排行🎈
- 查询群内个人排行🏅

<!--more-->

### 逻辑

- "@bot 天梯" 触发机器人😎
- 关键字触发后，将数据库内当前群的记录分组统计，进行文字排版后使用bot发送至群内👀
- ![截图](/assets/2020/wechaty-room-tianti/screenshot1.png)

### 运行

```shell
git clone https://github.com/fangmuke/wechaty-room-tianti.git

cd wechaty-room-tianti

npm install

node bot.js
```
