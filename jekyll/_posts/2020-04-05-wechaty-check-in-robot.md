---
title: "微信打卡机器人"
author: yeojongki
categories: project
tags:
  - checkin
  - social
  - game
image: /assets/2020/wechaty-check-in-robot/notice.png
---

## 1. 开发背景

女朋友(逃)建了一个学习打卡的微信群，邀请了一些同学进群进行每日打卡学习，三天没有打卡就会被踢出群聊。于是需要记录每个用户的打卡时间，并进行相关的结算。之前看到过开发微信机器人，于是就想到可以做一个机器人代替手动记录以节省时间。本项目用的是 [wechaty](https://github.com/wechaty/wechaty) 的 [wechaty-puppet-padplus](https://github.com/wechaty/wechaty-puppet-padplus) 协议进行开发。

## 2. **打卡说明**

- **用户需要每天将打卡及学习内容或者学习图片发送到群聊中**
- **每日凌晨 `00:00:00` 结算今天未打卡人数**
  - 未打卡的人机器人会在群聊中 `@`  TA，提醒今日未打卡
- **每日凌晨 `00:00:00` 结算三天内都没打卡的人数**
  - 会发送三天内未打卡的人到管理员的微信上，管理员再进行移除
    - 这里可以做成自动移除该用户
- **用户可以进行请假**
- **请假之后当天可以不打卡**
- **白名单内的用户不会计入结算内**

## 3. 功能

- 群聊功能
  - [x] 记录用户打卡
  - [x] 进群发送欢迎语
  - [x] 用户可以进行请假
  - [x] 每日早上 `8:00` 推送一条**历史上的今天**
  - [ ] 用户补卡
  - [ ] 打卡排行榜
- 管理员功能
  - [x] 查看当天未签到用户 (当天0点前)
  - [x] 查看三天未签到用户
  - [x] 更新群聊用户信息  (用户可能改名，避免 @ 时名字错误，可以做成定时更新)
  - [x] 获取历史上的今天
  - [ ] 修正某个用户的打卡时间
  - [ ] 设置管理员 - 目前手动在数据库中设置
  - [ ] 设置白名单 - 目前手动在数据库中设置

## 4. 技术栈

- `TypeScript`
- `TypeOrm` (`MySQL`)
- 原生 `NodeJS` (主要用了发布订阅模式)
- `wechaty` (机器人)

## 5. 运行项目

```shell
#1.下载项目
git clone https://github.com/yeojongki/wechaty-check-in-robot.git

#2.安装依赖
yarn config set registry https://registry.npm.taobao.org
yarn config set disturl https://npm.taobao.org/dist
yarn config set puppeteer_download_host https://npm.taobao.org/mirrors
yarn install

#3.复制 .env.sample 为.env文件 并设置相关环境

#4.配置 mysql 环境

#5.运行
yarn dev

#6.打包 会在根目录生成 dist 文件夹
yarn build

# 注意：配置好管理员和白名单 目前只能在数据库中设置 字段为 is_admin, isWhiteList (突然发现没有把数据库中的字段设为下划线风格...)
```

## 6. 部署

### 6.1 你可以自行将 dist 文件夹复制到你的服务器中运行

### 6.2 可以参考本项目进行部署 (PM2 + webhook)

注意：首次需要先在服务器 `clone` 好项目，并运行 `dist/src/webhook.js` 和 `dist/src/main.js`。

- 在对应的 `github` 仓库中配置好 `webhook`
- 在 `.env` 文件中配置以`WEBHOOK_` 开头的相关配置
- 修改 `script/depoly.sh.sample` 为 `depoly.sh` 并修改 `PROJECT_NAME` 为你的项目名
- `push` 上 `github` 时服务器会发送 `webhook`
- 然后服务器会执行 `script/deploy` 自动拉取项目并构建重载

## 7. 其他

- 用到了 `Server` 酱，突然发现不需要用也行，直接用机器人发信息给管理员就行了...
- 机器人判定打卡功能很粗糙，有待完善
- 将业务功能抽离处理
- 开发更多功能

> 作者: [yeojongki](https://github.com/yeojongki) 前端开发工程师
