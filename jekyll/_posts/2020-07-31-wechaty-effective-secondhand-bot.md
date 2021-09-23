---
title: "更有效率的二手捡漏助手"
author: krapnik
categories: project
tags:
  - padplus
  - project
  - electron
  - ecommerce
image: /assets/2020/wechaty-electron/header.png
---

作为一个爱逛二手闲置数码的程序员，怎么淘到自己喜欢且性价比高的设备是个技术活~

曾经写过浏览器插件弹窗以及邮件推送等手段来传递信息，但是总是觉得稍微还是差了那么一点...

场景覆盖性&信息实时性&所及即所得...这些痛点该如何解决呢？

于是我找到了wechaty~

👐 代码配置化很极客

🙌 可视化配置操作更贴近大众用户

👌 wechaty消息推送实时到达很棒

☝️ 直接图文阅读无须二次跳转更快

<!--more-->

## 功能

🌙基于electron的主要原因是为了可视化配置wechaty设置

⭐可视化配置wechaty相关设置【token&bot_name等等】

⭐可视化配置推送相关设置【关键词&推送时间段等】

🌙利用electron自动生成资讯内容图片

⭐自动生成推送内容图片，无须二次跳转访问链接

## 逻辑

- 通过electron生成的桌面程序启动&管理wechaty
- 可视化配置推送关键字及时间段等相关设置
- 获取到相关资讯信息后自动生成内容图片并保存到本地
- 通过wechaty推送已生成的资讯精要信息和内容图片

## 依赖

- wechaty：wechaty核心库
- wechaty-puppet-padplus：wechaty iPad协议
- electron: 基于Web技术创建原生程序的框架
- react+antd: 框架+UI

## 运行

克隆项目

```shell

git clone git@github.com:krapnikkk/wechaty-electron.git

cd wechaty-electron

```

安装依赖

```shell
yarn install
```

启动项目

```shell
yarn run dev
```

## 效果图

- ![截图](/assets/2020/wechaty-electron/pic01.jpg)
- ![截图](/assets/2020/wechaty-electron/pic02.jpg)

## 致谢

🙏感谢[wechaty](https://github.com/wechaty/wechaty)团队提供微信机器人SDK  
🙏感谢[句子互动](https://www.juzibot.com/)提供的iPad协议版token

> Author: [krapnik](https://github.com/krapnikkk)
> Code: [wechaty-electron](https://github.com/krapnikkk/wechaty-electron)
