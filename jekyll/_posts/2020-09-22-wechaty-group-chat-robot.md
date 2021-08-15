---
title: "基于Wechaty打造智能聊天机器人(一)"
author: evilbt
image: /assets/2020/wechaty-group-chat-robot/demo.jpg
categories: project
tags:
  - padplus
  - project
  - nodejs
  - entertainment
---

由于在去年我粉上了杨超越，广州演唱会期间加入了深圳站粉丝群，群主为了活跃气氛，在小群里拉了一个闲聊机器人，当时就想着自己也是一个技术开发，好早之前也有注册过图灵机器人，看着这个机器人的玩法感觉跟图灵机器人好像，就想着要不要自己去开发一个，但是当时这个念头也只是一闪而过，当时工作比较忙，也没放在心上。
今年遇上了疫情，大家都只能在家里了，在群里闲聊的时候变多了，就想着能不能自己整个村狗机器人出来聊天，我们那个群跟机器人玩的大多是以下几个需求：

1. 星座运势，包括每日、每月、年度运势等等。
2. 点歌（网易云、QQ音乐等）。
3. 成语接龙。
4. 猜谜语。
5. 猜图片。
6. 猜歌。

主要玩法是这些，一个月前我在网上机缘巧合之下找到了这个[Weachaty](https://github.com/wechaty/wechaty),发现实现最基本的微信机器人，只需要短短十几行代码，不需要你再执行太多业务逻辑外的繁琐事情。

## 2. Wechaty框架介绍

[Weachaty](https://github.com/wechaty/wechaty) 是一个开源的的对话机器人 SDK，支持个人微信号。它是一个使用Typescript 构建的Node.js 应用。支持多种微信接入方案，包括网页，ipad，ios，windows， android 等。同时支持Linux, Windows, Darwin(OSX/Mac) 和 Docker 多个平台。
在GitHub上可以找到很多支持微信个人号接入的第三方类库，其中大多都是基于Web Wechat的API来实现的，如基于Python的WeixinBot，基于Node.js的Wechaty等。少数支持非Web协议的库，大多是商业私有闭源的，Wechaty是少有的开源项目支持非Web协议的类库。且目前来讲，Wechaty已经开始陆续支持多种编程语言了（Go、Python、Java等等）。官方说只需要6行代码，就可以做到自动管理微信消息了。

``` JavaScript
import { Wechaty } from 'wechaty'

Wechaty.instance()
.on('scan',         qrcode      => console.log('扫码登录'))
.on('login',        user        => console.log('登录成功：' + user))
.on('message',      message     => console.log('收到消息：' + message))
.on('friendship',   friendship  => console.log('收到好友请求：' + friendship))
.on('room-invite',  invitation  => console.log('收到入群邀请：' + invitation))
.start()
```

可以看到，Wechaty能做到的事情很多，可以收消息、发消息、好友管理、群管理，更多功能可以参考官方文档[中文版](https://wechaty.js.org/v/zh/)、[英文版](https://wechaty.js.org/docs/introduction/README)英文版的文档更新更全更新。

## 3. 安装Wechaty

原本一开始我是想着用Java版本的[Wechaty](https://github.com/wechaty/java-wechaty-getting-started)的，但是目前来讲Java版的还不够，入门阶段选择更加成熟的nodejs版的会更好，我选择了Docker的方式来使用开发Wechaty，系统方面选择了WSL2，配合VSCode就可以在Windows10下无缝开发，关于Windows10子系统WSL2的安装教程可以参考这篇[文章](https://segmentfault.com/a/1190000022865557)，从零开始到安装Docker成功。

### 安装nodejs和npm

我的WSL2选择的系统是Ubuntu-18.04,我们先安装nodejs、npm

``` bash
sudo apt-get install nodejs
sudo apt-get install npm
```

安装完毕后查看nodejs、npm版本

``` bash
node -v
npm -v
```

当前是分别是v8.10.0、3.5.2.目前开发环境已经搭建完毕。

### 如何使用Wechaty

我们用VSCode的Remote-WSL连接上我们的WSL系统，在当前用户文件夹下创建dog文件夹，选择它做为我们的工作区，在dog文件夹打开终端，用npm初始化项目：

``` bash
npm init -y
```

采用默认的生成package.json文件：

``` json
{
  "name": "dog",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

由于我采用 Typescript 进行开发的，在Dog文件夹创建dog.ts，对json文件手动修改一下：

``` json
{
  "name": "dog",
  "version": "1.0.0",
  "description": "",
  "main": "dog.ts",
  "scripts": {
    "start": "ts-node dog.ts",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

官方给我的是临时的puppetPadPlus协议，所以我需要安装的puppet是PadPlus版的，另外为了让二维码显示终端上，我们还需要另外一个开源库*QRCodeTerminal*,不过我这里引入的是wechaty-plugin-contrib，它包含了很多常用的库，这里我们用到的是*QRCodeTerminal*和*EventLog*
我们安装*wechaty*、*wechaty-puppet-padplus*、*wechaty-plugin-contrib*.

``` base
npm i --save wechaty
npm i --save wechaty-puppet-padplus
npm i --save wechaty-plugin-contrib
```

安装完package.json也变成这样了：

``` json
{
  "name": "dog",
  "version": "1.0.0",
  "description": "",
  "main": "dog.ts",
  "scripts": {
    "start": "ts-node dog.ts",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "wechaty": "^0.48.10",
    "wechaty-plugin-contrib": "^0.14.15",
    "wechaty-puppet-padplus": "^0.6.6"
  }
}

```

修改dog.ts源代码如下：

``` Typescript
import { Wechaty, Message, log } from 'wechaty'
import { PuppetPadplus } from 'wechaty-puppet-padplus'
import { EventLogger, QRCodeTerminal } from 'wechaty-plugin-contrib'

// 创建puppet为PadPlus版
const puppet = new PuppetPadplus({
    token: 'puppet_padplus_xxxxxxxxxxxxx' // 此Token自己向官方申请的
})

// 创建机器人实例
const bot = new Wechaty({
    name: 'Sherlock',
    puppet
})

// 注册Log日志
bot.use(EventLogger())
// 注册二维码打印显示
bot.use(QRCodeTerminal( { small: false}))

// 监听消息事件
bot.on('message', async (message: Message) => {
    log.info('发来的消息呀'+message.text())
})

// 开启机器人
bot.start()
```

接下来我们在Docker上运行该项目：

``` bash
docker run -ti --rm --volume="$(pwd)":/bot wechaty/wechaty run start
```

第一次运行时wechaty镜像还没安装，docker会自动帮我们安装wechaty镜像，稍等片刻，一切正常的情况下，我们能看到终端打印出来的登录二维码，用你的微信扫码登录即可。目前运行的时候会发生以下这个错误：

``` bash
Error: Failed to load gRPC binary module because it was not installed for the current system
Expected directory: node-v72-linux-x64-glibc
Found: [node-v57-linux-x64-glibc]
This problem can often be fixed by running "npm rebuild" on the current system
```

我们先执行rebuild再重新执行上面的代码。

``` bash
docker run -ti --rm --volume="$(pwd)":/bot wechaty/wechaty npm rebuild
```

重新运行后，扫码登录之后后台就打印出已确认的日志：

``` bash
=================================================
    QRCODE_SCAN MSG : 已扫码，请在手机端确认登陆...
=================================================
=================================================
            QRCODE_SCAN MSG : 已确认
=================================================
```

目前来讲我们已经成功运行Wechaty项目了，想要实现上面的需求只需要实现具体的业务代码即可，从社区上可以了解到，微信对话开放平台对接进来是比较适合我的需求的，而且看了官方文档，需求那里对于QQ音乐或者网易云音乐这类消息类型，Wechaty暂时是不支持的，这后续也得看看怎么替代，这篇先写到这里，下一篇要写一下接入微信对话开放平台，让它接管消息的收发。
