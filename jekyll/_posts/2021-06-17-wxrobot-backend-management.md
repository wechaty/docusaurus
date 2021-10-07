---
title: "基于Nodejs+Wechaty开发微信机器人管理平台"
author: zwl
categories: project
tags:
  - nodejs
  - vue
  - padplus
  - project
  - nuxt
  - feature
  - utility
image: /assets/2021/06-wxrobot-backend-management/admin.webp
---

微信机器人开源库调研，[GitHub](https://github.com/) 找到以下 3 个开源作品：

- [itchat](https://github.com/littlecodersh/ItChat)
  - `itchat` 是一个开源的微信个人号接口，使用 `python` 调用微信
  - 使用不到 `30` 行的代码，你就可以完成一个能够处理所有信息的微信机器人
- [wechaty](https://github.com/wechaty/wechaty)
  - `wechaty` 是适用于微信个人的 `Bot SDK` ，可以使用 `6` 行 `js` 创建一个机器人
  - 具有包括 `linux`，`Windows`，`MacOS` 和 `Docker` 在内的跨平台支持，基于 `Node.js`
- [vbot](https://github.com/Hanson/vbot)
  - `vbot` 是基于微信 `web` 版的接口，使用 `http 协议` 以及轮询方式实现
  - 亮点在于通过匿名函数，能够实现多种有趣的玩法
  - 通过 `API`，更方便的打造属于自己的网页版微信，基于 `PHP`

## 初识 wechaty

`Wechaty` 是一个开源的的对话机器人 `SDK`，支持 `个人号` 微信。它是一个使用 `Typescript` 构建的 `Node.js` 应用。支持多种微信接入方案，包括网页，`ipad`，`ios`，`windows`，`android` 等。同时支持 `Linux`, `Windows`, `Darwin(OSX/Mac)` 和 `Docker` 多个平台。

先看一下官方文档：

- [wechaty-github](https://github.com/wechaty/wechaty)
- [wechaty中文文档](https://wechaty.js.org/v/zh/)

只需要 6 行代码，你就可以 通过个人号 搭建一个 微信机器人功能 ，用来自动管理微信消息。

```js
import { Wechaty } from 'wechaty'

Wechaty.instance()
.on('scan',        qrcode  => console.log('扫码登录：' + qrcode))
.on('login',       user    => console.log('登录成功：' + user))
.on('message',     message => console.log('收到消息：' + message))
.on('friendship',  friendship => console.log('收到好友请求：' + friendship))
.on('room-invite', invitation => console.log('收到入群邀请：' + invitation))
.start()
```

更多功能包括：

- 消息处理：关键词回复
- 群管理：自动入群，拉人，踢人
- 自动处理好友请求
- 智能对话：通过简单配置，即可加入智能对话系统，完成指定任务
- ... 请自行开脑洞

好了，文档齐全 & api 丰富，完全满足我的需求，就选这个库了。

首先跑一个示例看看  [wechaty-getting-started](https://github.com/wechaty/wechaty-getting-started)。下载完之后先 `npm install & npm start` 一顿操作，然后运行就有了登录二维码，拿出手机扫码，然后 GG。

## wechaty-puppet

~~使用 [wechaty-puppet-padplus](https://github.com/wechaty/wechaty-puppet-padplus) 一套基于 ipad 协议的包。~~

目前 ~~wechaty-puppet-padplus~~ 已弃用，后续使用 [wechaty-puppet-service](https://github.com/wechaty/wechaty-puppet-service)。

不过天下没有免费的午餐，需要申请 `token`，见 [Wechaty Token 申请及使用文档和常见问题](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)。

## 聊天机器人 API

目前网络上有许多非常好的智能聊天机器人，这里找了6个目前使用很广泛的：

- [海知智能](http://docs.ruyi.ai/416309) 功能很强大，不仅仅用于聊天。需申请 key，免费
- [思知对话机器人](https://www.ownthink.com/) 注册很简单，调用也很简单，而且完全免费
- [图灵机器人](http://www.turingapi.com/) 需要注册账号，可以申请 5 个机器人，未认证账户每个机器人只能回 3 条/天，认证账户每个机器人能用 100 条/天
- [青云客智能机器人](http://api.qingyunke.com/) 无须申请，无数量限制，但有点智障，分手神器，慎用
- [腾讯闲聊](https://ai.qq.com/console/capability/detail/8) 需要注册和申请，还需要加密处理
- [天行机器人](https://www.tianapi.com/apiview/47) 白嫖用户绑定微信后有 10000 次永久额度，之后 1 元 10000 次

## 搭建微信机器人平台

项目初始参考 [`wxbot`](https://github.com/beclass/wxbot) 搭建机器人后台管理。

### 项目介绍

- 控制台
  - 绑定机器人
  - 登录
  - 自动通过好友验证关键词设置，当有人添加机器人时，关键词匹配后直接通过
  - 好友验证通过自动回复
  - 退出
- 自动回复
  - 普通消息
    - 针对好友/某个群聊/所有群聊 设置关键词自动回复
  - 加群邀请
    - 机器人回复群聊列表，好友可以选择性进群
  - 踢人指令
    - 机器人识别指令，自动把成员移出群聊
- 我的好友
  - 单独对某个好友送消息
- 我的群聊
  - 群聊列表，管理所有群聊
  - 设置群聊名称，发布公告，发送群消息
  - 设置群聊基本信息，入群欢迎语，成员违规次数上限，是否受机器人控制
- 定时任务
  - 针对好友/某个群聊/所有群聊设置定时任务，机器人在指定时间会触发消息推送
- 智能聊天
  - 低智商对话
  - 成语接龙，查天气，查酒店，歇后语...

![admin](/assets/2021/06-wxrobot-backend-management/admin.webp)

### 技术构成

- 服务端 [Node.js](https://nodejs.org/)
- SSR框架 [NuxtJS](https://nuxtjs.org/)
- 前端框架 [Vue](https://vuejs.org/)
- UI组件 [Ant Design of Vue](https://www.antdv.com/docs/vue/introduce-cn/)
- 持久化 [MongoDB](https://www.mongodb.org/)
- 协议 [wechaty-puppet-service](https://github.com/wechaty/wechaty-puppet-service)

这里就直接介绍下机器人模块

```js
|-- server/
|———- /lib
|------ FriendShip.js   # 友谊关系，好友添加监听
|------ Login.js        # 机器人登录退出
|------ Message.js      # 消息监听处理
|------ Room.js         # 加群，退出群聊
|------ Task            # 机器人定时任务
|———- index.js          # 入口文件
```

### 快速开始

#### 准备条件

- 安装 [Node.js](https://nodejs.org/en/download/) (v10 以上版本)、[MongoDB](https://www.mongodb.org/downloads/)。  
- 推荐安装 [cnpm](https://cnpmjs.org/)

#### 安装依赖

```sh
cnpm i
```

#### 启动服务

- 开发模式

```sh
npm run dev
```

- 生产模式

先编译项目

```sh
npm run build
```

再启动服务

```sh
npm start
```

打开浏览器，访问 [http://localhost:3000/](http://localhost:3000)

#### 系统配置

根据实际情况修改 `config.js` 配置文件，修改后需要重启服务才能生效。  
参数说明：

##### host

`String` 类型，主机名，配置为 `0.0.0.0` 表示监听任意主机。

##### port

`Number` 类型，端口号。

##### mongoUrl

`String` 类型，MongoDB 链接。

##### secret

`String` 类型，[JWT](https://github.com/auth0/node-jsonwebtoken) 秘钥。

##### tianApiKey

`String` 类型，[天行数据秘钥](https://www.tianapi.com/console/)

### 线上部署

#### 使用PM2

推荐使用 [pm2](https://pm2.keymetrics.io/) 进行 `Node.js` 的进程管理和持久运行。

##### 安装

```sh
cnpm i -g pm2
```

##### 启动

```sh
pm2 start pm2.config.js --env production
```

### 踩坑

1.`Wechaty Token` 申请及使用文档和常见问题

- [Wechaty 开源激励计划2.0 申请表](https://juzibot.wjx.cn/jq/80103105.aspx)
- [填写项目信息](https://github.com/juzibot/Welcome/wiki/Support-Developers)
- [Wechaty Token 申请及使用文档和常见问题](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)

2.`tianApiKey` 申请及天行机器人配置

- 首先，去 [天行数据](https://www.tianapi.com/console/) 注册账号，申请 `APIKEY`
- 其次，申请 [天行机器人](https://www.tianapi.com/apiview/47) 接口，用于机器人自动回复
- 最后，别忘记配置 [机器人身份设置](https://www.tianapi.com/console/)，否则在机器人回复中会有奇怪的代码串，如 `{robotname}`

3.部署中执行 `sudo pm2` 报错 `command not found` 问题

- 原因是没有将 `pm2` 加至环境变量中，先找到 `node` 的目录 可以用 `whereis node` 来查找，然后查找 `whereis pm2`，再使用 `ln` 建立软连接
- 参考文章 [Linux下使用pm2部署node以及安装后command not found解决](https://blog.csdn.net/d597180714/article/details/82619735)

4.部署中执行 `sudo pm2` 报错 `permission denied` 问题

- 原因是项目会动态生成中 `logs` 目录中的文件，报错权限不足，即 `permission denied`
- 参考文章 [解决 pm2 中的 permission denied 问题](https://blog.csdn.net/geol200709/article/details/81744477)

4.Ubuntu MaxReports 报错问题

- 安装报错依赖关系问题
- 参考文章 [Ubuntu16.04 由于已经达到 MaxReports 限制，没有写入 apport 报告](https://blog.csdn.net/lanhaixuanvv/article/details/78387545?locationNum=1&fps=1)

5.`Ubuntu` 安装 `node-canvas` 以及中文乱码/自定义字体的问题

- 首先 sudo apt-get install build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev 安装完成后 npm install canvas
- 中文乱码/自定义字体的问题解决方案：①安装 sudo apt-get install ttf-wqy-microhei #文泉驿-微米黑 ②注册 registerFont('/usr/share/fonts/truetype/wqy/wqy-microhei.ttc', { family: 'WQY' }) ③使用 ctx.font = 'bold 22px "WYQ"'
- 参考文章 [node-canvas](https://github.com/Automattic/node-canvas)

6.`CentOS` 安装 `better-sqlite3` 报错的问题

- 首先执行 `sudo yum install centos-release-scl-rh，sudo yum install devtoolset-8-build` 这两个方法
- 安装相应的gdb，`sudo yum install devtoolset-8-gdb`
- 同样，也可以安装相应版本的 gcc 和 g++，`sudo yum install devtoolset-8-gcc devtoolset-8-gcc-c++`
- yum安装完后，原来的gcc不覆盖，所以需要执行enable脚本更新环境变量，`sudo source /opt/rh/devtoolset-8/enable`
- 可以通过加入到profile里面开机自动`source, vim /etc/profile`, 跳到最后一行加入以下内容，`source /opt/rh/devtoolset-8/enable`
- 参考文章 [better-sqlite3](https://www.cnblogs.com/clwsec/p/12493653.html)

## 感谢

[![Powered by Wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-green.svg)](https://github.com/wechaty/wechaty)
[![Wechaty开源激励计划](https://img.shields.io/badge/Wechaty-开源激励计划-green.svg)](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)

- 感谢 [beclass](https://github.com/beclass) 的开源项目 [`wxbot`](https://github.com/beclass/wxbot)，这是一套优秀的微信机器人平台。
- 感谢 [Wechaty](https://wechaty.js.org) 团队提供微信机器人 `SDK`，让开发者可以专注于业务代码。
- 感谢 [句子互动](https://www.juzibot.com) 提供的 `pad` 协议版 `token`。

> 作者: [zwl](https://github.com/zhang704)
> Code: [Github](https://github.com/zhang704/wxrobot)
