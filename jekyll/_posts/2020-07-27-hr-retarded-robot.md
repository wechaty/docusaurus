---
title: "智障机器人(retarded-robot)"
author: xajeyu
categories: project
tags:
  - padplus
  - project
  - productivity
---

## 内容列表

- [背景](#背景)
- [功能列表](#功能列表)
- [安装](#安装)
- [使用说明](#使用说明)
- [功能截图](#功能截图)
- [致谢](#致谢)

## 背景

这个机器人主要作用于人力资源服务行业，辅助业务员工作的这么一个机器人。业务员每天的工作就是群发消息、收集报名以及处理58同城的邮件并筛选出合适的人，大量的重复工作，因此该机器人诞生了！！
该机器人还具备一些AI娱乐功能，例如颜值检测、智能对话等等。主要来源鹅厂开放的AI接口。

## 功能列表

- [x] 工作信息查询
- [x] 定时群发
- [X] 58同城邮件解析(解析成功后，会通知到管理员，此功能已完成，但机器人里未开启，请参考/robot/loginStatus.ts中的onLogin事件)
- [ ] 报名功能
- [ ] 智能对话
- [ ] 颜值检测

## 安装

[![node](https://img.shields.io/node/v/wechaty.svg?maxAge=604800)](https://nodejs.org/)
[![NPM Version](https://img.shields.io/npm/v/wechaty?color=brightgreen&label=wechaty%40latest)](https://www.npmjs.com/package/wechaty)
[![npm (tag)](https://img.shields.io/npm/v/wechaty/next?color=yellow&label=wechaty%40next)](https://www.npmjs.com/package/wechaty?activeTab=versions)

这个项目使用 [node](http://nodejs.org) 和 [npm](https://npmjs.com)。请确保你本地安装了它们。

```shell script
git clone https://github.com/xajeyu/retarded-robot.git
```

## 使用说明

- 该机器人基于ipad协议，请在config/robot.ts中配置自己的[token](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)
- 所有涉及到配置的文本全在config文件夹中
- 工作信息存在数据库中
- 机器人在运行时的配置，将由管理员私信机器人配置并存储在 redis 中

```shell script
npm install or yarn
npm start or yarn start
```

## 功能截图

![管理员配置端](/assets/2020/retarded-robot/private-menu.webp)
![管理员配置端-1](/assets/2020/retarded-robot/private-feat.webp)
![群里工作信息查询](/assets/2020/retarded-robot/room-feat.webp)

## 致谢

感谢[wechaty](https://github.com/wechaty/wechaty)团队提供微信机器人SDK  
感谢[句子互动](https://www.juzibot.com/)提供的iPad协议版token

> Author: [xajeyu](https://github.com/xajeyu)
> Code: [retarded-robot](https://github.com/xajeyu/retarded-robot)
