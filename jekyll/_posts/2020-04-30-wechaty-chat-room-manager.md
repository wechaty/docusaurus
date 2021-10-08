---
title: "微信群管辅助"
author: tianyugeng
categories: project
tags:
   - utility
image: /assets/2020/room-manager/bio-photo.webp
---

## 微信群管辅助

[![Powered by Wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-brightgreen.svg)](https://github.com/wechaty/wechaty)

[![Node.js CI](https://github.com/wechaty/wechaty-getting-started/workflows/Node.js CI/badge.svg)](https://github.com/wechaty/wechaty-getting-started/actions?query=workflow%3A%22Node.js+CI%22)
![Node.js v16](https://img.shields.io/badge/node-%3E%3D16-green.svg)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue.svg)](https://www.typescriptlang.org/)

[Wechaty](https://github.com/wechaty/wechaty/) is a Wechat Bot SDK for Personal Account that lets you create software to extend the functionality of the Wechat, writen in Node.js with TypeScript, Support all platforms including Linux, OSX, Win32, and Docker.

## 功能目的

- 大型微信群（员工群）通常需要多位管理员分工管理，有各种信息需要发布。但是目前微信群中不论规模均最多只能设置三位群管理员，这在有三名以上管理人员的场景中显得十分不便。本项目的目的是通过机器人代办解决超过三名管理员的情况，方便大型微信群的管理。
  - [x] 群主可设置机器人管理员
  - [x] 响应机器人管理员指令
  - [x] 根据机器人管理员的指令发布群公告
  - [ ] 根据机器人管理员的指令移除群成员

- 此外对于人员较多且拥有自己的OA系统的公司而言，HR在微信群的维护上也是苦不堪言。人员流动带来的成员变动、人数超过500人限制导致的分群消息同步等问题都为HR带来了巨量的麻烦。本项目的第二步计划通过网络接口的形式提供API供OA系统调用，达到可以自动控制群成员，解放人力的目的。
  - [ ] 提供http访问接口供外部程序引用
  - [ ] 对http访问接口添加必要的合法性验证
  - [ ] 根据外部接口指令对指定群发送群公告
  - [ ] 根据外部接口指令对指定群添加成员
  - [ ] 根据外部接口指令对指定群移除成员

- 对于分群，本项目第三步计划是通过命令连接两个甚至多个不同的微信群，达到消息自动转发的目的，从某种意义上实现群成员超过500人上限。
  - [ ] 群主可直接开启群联通，直接开启群联通时将生成联通口令
  - [ ] 群主可通过联通口令开启群联通，通过口令开启群联通将于口令拥有群导通并开始转发所有消息
  - [ ] 群主或机器人管理员可通过指令设置屏蔽指定人员的消息转发
  - [ ] 群主或机器人管理员可通过指令设置屏蔽指定格式的消息转发

## 系统需求

> 我是用的是centos7作为开发运行环境，已经提前安装了git

1. Node.js v16 或以上
2. 基本开发编译环境

## 开始使用

### 0. 安装 Node.js (>=10)

如果你没有安装node或已经安装的node版本低于10，请根据下面步骤安装新的nodejs环境

- Linux （centos7）

```sh
wget https://npm.taobao.org/mirrors/node/v16.2.0/node-v16.2.0-linux-x64.tar.xz
tar -xvf node-v16.2.0-linux-x64.tar.xz
mv node-v16.2.0-linux-x64 /opt/node
tee /etc/profile << EOF
  export NODE_HOME=/opt/node
  export PATH=$NODE_HOME/bin:$PATH
EOF
source /etc/profile
```

随后可验证安装是否成功

```sh
node -v
```

> 在其他平台安装 Node.js 的方法可参见 <https://nodejs.org/en/download/package-manager/>

### 1. 下载项目

```sh
git clone https://github.com/tianyugeng/wechaty_room_manager.git
cd wechaty_room_manager
```

### 2. 安装依赖包

```sh
#因为某些原因,一些依赖包无法直接从官方源下载，故此需要使用淘宝镜像源
npm install -g cnpm --registry=https://registry.npm.taobao.org

cnpm install node-pre-gyp
cnpm install bufferutil@^4.0.1
cnpm install utf-8-validate@^5.0.2
cnpm install file-box@^0.8.23
cnpm install puppeteer
cnpm install wechaty-puppet-padplus@^0.6.1
cnpm install express
cnpm rebuild
```

### 3. 开始运行

```sh
WECHATY_PUPPET_PADPLUS_TOKEN=${YOUR_TOKEN} npm start
```

或者直接通过node来启动

```shell
# Linux: export WECHATY_LOG=verbose
# Win32: set WECHATY_LOG=verbose
node examples/ding-dong-bot.ts
```

至此启动完成，去给机器人发指令吧。

## 补充

### 1. TypeScript

虽然官网的示例中提供了js和ts两种方式可供选择，但实际使用时发现用js进行开发会发生许多莫名其妙的错误。
调试修改到烦之后换到ts发现可以运行启动。估计是我没怎么用过node，有哪个配置项没有找到的缘故吧。
所以虽然我没有删除js，但本项目的所有内容均使用ts完成。

> 作者: [tianyugeng](https://github.com/tianyugeng) 前端开发工程师(自称)
