---
title: "基于Nodejs+Wechaty开发微信机器人管理平台"
author: lwp
categories: project
tags:
  - nodejs
  - vue
  - padplus
  - project
  - nuxt
  - feature
  - utility
image: /assets/2020/wxbot/qrcode.webp 
---

## 前言

曾几何时，我加了一个微信，给它发送"加群"，然后就自动进到开发群了，随之在群聊里问问题，接着那个微信就会@我，引用我的问题并附上解答和参考链接。每天上下班的时候，它还会来一句温馨提示，出于对这种技术的强烈兴趣，开始了微信机器人研究之旅。

开始找了几个第三方平台，试用了几天，但总觉得不够自由，既然是程序猿，何不通过技术手段实现？于是开始在GitHub找到以下三个开源作品

- itchat
  - `itchat`是一个开源的微信个人号接口，使用python调用微信
  - 使用不到三十行的代码，你就可以完成一个能够处理所有信息的微信机器人
- wechaty
  - `wechaty`是适用于微信个人的Bot SDK ，可以使用6行 js 创建一个机器人
  - 具有包括`linux`，`Windows`，`MacOS`和 `Docker` 在内的跨平台支持，基于Node.js
- vbot
  - `vbot`是基于微信web版的接口，使用`http协议`以及轮询方式实现
  - 亮点在于通过匿名函数，能够实现多种有趣的玩法
  - 通过 API，更方便的打造属于自己的网页版微信，基于PHP

## 初识wechaty

因为对js相对比较熟悉，直接选择了wechaty

它是使用Typescript进行编写的Node项目，是一个专门为个人微信号搭建的bot框架。基本的实现原是通过Chrome实时监听微信网页版的各类信息，然后将抓取的信息封装成接口，供开发者使用。

先看一下官方文档

[wechaty-github](https://github.com/wechaty/wechaty)
&ensp;&ensp;&ensp;&ensp; [wechaty中文文档](https://wechaty.js.org/v/zh/)

6行js创建一个机器人，实在简洁

```javascript
import { Wechaty }  from 'wechaty'
const bot = new Wechaty()
bot.on('scan',    (qrcode, status) => console.log(['https://api.qrserver.com/v1/create-qr-code/?data=',encodeURIComponent(qrcode),'&size=220x220&margin=20',].join('')))
bot.on('login',   user => console.log(`User ${user} logined`))
bot.on('message', message => console.log(`Message: ${message}`))
bot.start()
```

文档里可以看到一个示例代码  [wechaty-getting-started](https://github.com/wechaty/wechaty-getting-started)

下载完之后先 npm i 安装模块，然后运行就有了登录二维码
![err1](/assets/2020/wxbot/err1.webp)
很遗憾，失败了。

## 网页版微信登录失败

原来2017年之后注册的微信号都无法登录网页版微信，而2017年之前注册得微信账号也有很大几率登录不上，找朋友试了也都不行。

检验你的微信号是否支持网页微信登录：

<http://wx.qq.com>

点击链接链接，PC端进入然后手机扫码登录，若是可以登上，即可以使用上述示例

然后又去看了vbot 和 itchat，但发现也都是是基于网页协议实现的

从网上查资料，大概有一下几种实现方式：

- Web网页端：2017年后不再支持新号登录，仅支持老号，并且掉线严重，功能缺失严重
- Xposed技术：在2019年6月份，微信官方在行业重点打击Xposed，自此行业内一片哀嚎遍野，陆续向iPad/MAC协议转型。具体案例请点击
- PC Hook：代码注入型，也就是逆向开发。封号情况偏多，使用容易出现追封，公司大规模封号等情况，且目前在营销行业使用率较少，比较偏小团队使用
- 模拟机：延迟高、消息实时到达率低、模拟人为操作效率慢、功能偏少，承担不了商业化功能
- ipad协议：安全性较好，功能满足，行业占有率高，但具有能力研发人员偏少，基本两三个团队研发，且目前已有团队解散，部分微信号段登录失败、且通过grpc,mmtls研发，被检测几率存在
- MAC协议：安全性相比iPad协议更好，功能性相比ipad协议少些，行业内具有研发能力更少，安全性、稳定性比较优秀，不会出现追封、批量封的情况
- 混合通道：微信内部通道，最高权限，基于MAC与Ipad协议，非grpc,mmtls，功能合适，微信正版通道，不会出现技术封号问题

看了看，内部通道是不可能的，只有ipad协议个mac协议目前最好了

## wechaty-puppet-padplus

正当准备放弃的时候，看到wechaty就有一套基于ipad协议的包
[wechaty-puppet-padplus](https://github.com/wechaty/wechaty-puppet-padplus)

## 微信机器人平台—wxbot

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

![admin](/assets/2020/wxbot/admin1.webp)

### 技术构成

- 服务端 [Node.js](https://nodejs.org/)
- SSR框架 [NuxtJS](https://nuxtjs.org/)
- 前端框架 [Vue](https://vuejs.org/)
- UI组件 [Ant Design of Vue](https://www.antdv.com/docs/vue/introduce-cn/)
- 持久化 [MongoDB](https://www.mongodb.org/)
- ipad协议 [wechaty-puppet-padplus](https://github.com/wechaty/wechaty-puppet-padplus/)

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

### 在线实例

[wxbot](http://94.191.126.174:8081)

(用户名/密码：guest/111111)

### 快速开始

#### 准备条件

- 安装 [Node.js](https://nodejs.org/en/download/) (v10 以上版本)、[MongoDB](https://www.mongodb.org/downloads/)。  
- 推荐安装 [cnpm](https://cnpmjs.org/)

#### 安装依赖

```Shell
cnpm i
```

#### 启动服务

- 开发模式

```Shell
npm run dev
```

- 生产模式

先编译项目

```shell
npm run build
```

再启动服务

```shell
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

`String` 天行数据秘钥

### 线上部署

#### 使用PM2

推荐使用 [pm2](https://pm2.keymetrics.io/) 进行 Node.js 的进程管理和持久运行。

##### 安装

```Shell
cnpm i -g pm2
```

##### 启动

```Shell
pm2 start pm2.config.js
```

## 最后

感谢 [Wechaty](https://github.com/wechaty/wechaty)开源项目及[句子互动](https://www.juzibot.com/)公司提供的 token，为开发者带来极大便利！

还有很多可以完善的功能，代码上也有些不妥之处，正在慢慢升级中。欢迎大家多给意见，共同学习，让平台更完善。

欢迎扫码加我的小助手，验证消息写 `机器人` 即可直接通过啦，加群一起交流也是可以的。也可以把机器人加到你的群聊中来玩耍哦，登陆上面的在线实例，设置关键字就能体验啦。

![qrcode](/assets/2020/wxbot/qrcode.webp)
![0](/assets/2020/wxbot/wx0.webp)
![1](/assets/2020/wxbot/wx1.webp)
![2](/assets/2020/wxbot/wx2.webp)

> 作者: [lwp](https://github.com/beclass)
> Code: [Github](https://github.com/beclass/wxbot)
