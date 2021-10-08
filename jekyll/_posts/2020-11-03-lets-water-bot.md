---
title: "node-wechaty let's water"
author: wanglei158
categories: project
tags:
  - water
  - productivity
image: /assets/2020/11-lets-water/letswater.webp
---

## let's water wechaty-bot<水群机器人>

[![Powered by Wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-green.svg)](https://github.com/wechaty/wechaty)
[![Wechaty开源激励计划](https://img.shields.io/badge/Wechaty-开源激励计划-green.svg)](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)

> 背景：微信机器人，用于管理水群 提醒水友们（程序员）到点喝水 && 提醒我自己一些时间点，比如4点半抢券
>
> 实现：使用`nodejs`作为后端，`node-schedule`作为定时任务模块支持，`qrcode-terminal`生成登录二维码
>
> 后期：目前有一个管理系统， 希望向机器人发送指定格式的信息，由机器人完成后台管理的一些操作，减少人工操作的步骤
>
> 自动化部署：使用docker + daocloud平台 + github，一键+持续集成

## 安装依赖 && 启动

```shell

cd app/
npm i
npm start

```
