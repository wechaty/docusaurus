---
title: '一个姑娘如何用6行代码写出微信聊天机器人'
author: lijiarui
excerpt_separator: <!--more-->
categories: story
tags:
  - code
header:
  teaser: /assets/2016/ruirui-dance.jpg
---

作者：@[lijiarui](https://github.com/lijiarui), Entrepreneur, [Wechaty Contributor](https://github.com/orgs/Chatie/teams/contributor)

我一直和我的小伙伴在业余时间拍摄舞蹈教学视频，叫“舞哩”，原创了几百个视频，近千万的播放，所以就建了微信群来和粉丝交流。

![RuiRui][ruirui-dance-image]

<!--more-->

## 1. 与微信机器人的结缘

当微信群超过100人以后，就必须要靠群主来手工拉人了，所以我在pad上注册了一个微信小号，让大家通过加小号进微信群，每天晚上9点，我登上这个小号，通过所有的好友请求，然后拉他们进来。有的时候会有几十个好友请求，我就先按一遍通过，然后用手机把这些新好友拍成照片，对照照片去通讯录里一个一个的找到这些好友，拉到微信群里。

直到有一次我出国玩，觉得Pad太沉了就没有带，这意味着有10天无法处理微信小号，等我回来以后，我发现了一个非常悲剧的事情......大概100多个好友请求，仅仅只是拍下这些好友请求，我就得拍好几十张照片！

这明明就是一些机械化的流水作业啊！这怎么能让一个程序员去完成呢？于是我开始梳理了我的需求，其实只有三个：

1. 自动通过好友请求。
1. 当我的粉丝和我微信聊天的时候，能通过关键词进行自动回复。毕竟问题80%都是一样的。
1. 自动的把他们拉进群里。

所以我在GitHub上找到了Wechaty，发现只要几十行代码，就可以满足我的需求。最主要的是，机械化的流水操作，机器人做的比人工要好很多。

## 2. 一款简单的微信机器人框架介绍

GitHub上与微信机器人相关的开源项目有很多，通过JavaScript、Electron、Go、Perl、Python等等都可以实现。

因为我只对JavaScript比较熟悉，所以选择了Wechaty，他是使用Typescript进行编写的Node项目，是一个专门为个人微信号搭建的bot框架，使用Wechaty的API，只需要6行Javascript代码就可以搭建一个最简单的微信机器人，支持 Linux, Windows, Darwin(OSX/Mac) 和Docker。
![wechaty-pic][wechaty-pic]

我特别喜欢Wechaty的一点是，我不用关心任何实现逻辑，仅仅用JS写业务逻辑层面的事情，就可以了。当我把我需要做什么想清楚以后，JS实现起来，是非常简单便捷的。

Wechaty基本的实现原理，是通过Chrome实时监听微信网页版的各类信息，然后将抓取的信息封装成接口，供开发者使用。 她有9个基本的事件，基本上涵盖了我们Web微信上的所有事件，分别是：

1. scan事件会在需要扫码登陆微信的被触发
1. login事件会在机器人成功登陆后被触发
1. logout事件会在机器人掉线以后被触发
1. message事件会在有新消息的时候被触发
1. error事件会在程序出现error的时候被触发
1. friend事件会在有好友请求的时候被触发
1. room-join事件会在有人加入群时被触发
1. room-leave事件会在群主移好友出群时被触发
1. room-topic事件会在群名称被修改时被触发

另外，Wechaty将机器人、联系人、微信群、好友请求封装成类，分别是Wechaty、Contact、Message、和FriendRequest，这样我只要import这些包，就可以直接使用这些类里面的函数模拟微信的各种操作了。比如给指定的人发送消息，我只要用contact.say(‘hello’) 就可以了。Wechaty里面的函数名称起的非常人性化，使用JS进行业务逻辑编写的时候，读代码像和读英文文档一样流畅舒服。

## 3. 如何安装Wechaty

安装Wechaty有两种方式：

1. Docker
1. NPM

非常推荐使用Docker安装Wechaty，虽然我最开始是使用第二种方式，也正是因为我两种方式都试过，才会深深感慨出“Docker大法好” 。

两种方式的安装---Docker和NPM 我在这里进行简单的介绍：

### Docker

安装Docker以后（可以点击这里查看如何安装docker），运行下面的命令，Wechaty就已经成功安装在电脑上了。

`docker run -ti --rm --volume="$(pwd)":/bot zixia/wechaty run demo`

首次运行以后会有如下的截图： 
![docker-pull][docker-pull]

Docker会自动的将相关的包部署到电脑里面，安装成功后，以后再运行就会是如下的截图了：
![run-ding][run-ding]

Wechaty的编写者对这种特殊字体的热爱到疯狂的地步了，为了让大家了解的更清楚，我就把所有截图内容也就都放上来了。

通常情况下，我会将这串命令alias给wechaty：

`alias wechaty='docker run -t -i --rm -e WECHATY_LOG="silly" --volume="$(pwd)":/bot zixia/wechaty:0.5.9’`

并加入-e WECHATY_LOG="silly" 和后面的版本号：zixia/wechaty:0.5.9，然后这样运行：

`wechaty run demo`

-e WECHATY_LOG="silly" 是为了把wechaty的系统日志都打印出来，方便发现问题和代码调试，zixia/wechaty:0.5.9 在后面加了版本号，因为作者经常更新代码，最近的代码偶尔会出问题，0.5.9是我认为相对比较稳定的版本。

### NPM

```shell
npm install --save wechaty
node mybot.js
```

有以下几点值得注意的是：

1. Wechaty需要的Node版本最少在6以上，我现在在使用7。
1. 有一些环境是需要安装Chromedriver的，根据版本不同，大家可能需要注意一下。
1. 如果是在服务器上，需要到Script的脚本中，运行下xvfb.sh的脚本，为Chrome提供一个虚拟的运行环境，并根据运行后的提示，设置程序运行的环境变量。
1. 同样可以设置WECHATY_LOG的值来打印系统日志：WECHATY_LOG=SILLY node mybot.js

关于服务器的说明

Wechaty依赖的很多包都在墙外，建议使用国外的VPS，我使用的是digitalocean 如果只是跑一个机器人服务的话，建议使2GB/2 CPUs 以上的配置，一个机器人服务会占用1G内存左右，如果配上swap的话，短期使用也可以。

## 4. 如何使用wechaty

环境部署好以后下面6行代码，就可以成功的实现基础的bot功能：将微信机器人收到的所有消息打印出来：

```shell
const { Wechaty } = require('wechaty')

Wechaty.instance()
.on('scan', (url, code) => console.log(`Scan QR Code to login: ${code}\n${url}`))
.on('login',  user => console.log(`User ${user.name()} logined`))
.on('message',  message => console.log(`Message: ${message.content()}`))
.init()
```

下面对这段代码进行简单的介绍：

- scan事件：两个返回值

  - code：返回了扫描的状态
    - 0：初始状态
    - 200：已经成功登陆
    - 201：微信已经扫码，等待确认
    - 408：等待微信扫码中
  - url：登陆需要扫描的二维码图片的地址，你需要将这个url粘贴到浏览器中打开，进行扫码登陆

- login事件：返回的user，代表登陆的用户，返回的是一个Contact的类型，打印出来，是可以看到你当前登陆的用户昵称的。通过user.id()可以获取用户唯一id，user.name()可以获取用户的微信昵称，user.weixin()可以获取用户的微信号。

- message事件：返回的是message，代表收到的消息，是一个Message类型。通过message.content()可以获取到消息的内容，message.from()可以获取到消息的发送者，返回的是一个Contact类型。
以上只是一些简单的接口介绍，更多详细的接口文档可以点击查看：Wechaty的接口文档 接口文档还在更新中，如果希望更多接口，直接clone源码查看代码，你会发现很多惊喜好玩的小东西。

除此之外，我还希望分享两个实用的Wechaty的工具：

### qrcode-terminal

仅仅把需要扫描的二维码图片作为链接打印在屏幕上，复制链接到浏览器中再去扫描，依然很麻烦，我更希望在terminal上直接扫描二维码登陆进来，这样才能到达demo中的炫酷效果，只需要两步：

1.安装依赖包：

`npm install qrcode-terminal`

2.稍微修改下scan事件后的代码就可以了：

```ts
wechaty.on('scan', (url, code) => {  
if (!/201|200/.test(String(code))){
   let loginUrl = url.replace(/\/qrcode\//, '/l/')
   require('qrcode-terminal').generate(loginUrl)  
}  
console.log(`${url}\n[${code}] Scan QR Code in above url to login: `)
})

```

### Server酱

虽然机器人可以稳定的跑在VPS中，但是网页版微信会经常把用户踢下线，所以我需要知道Wechaty的各种异常情况，有一个简单的第三方工具：Server酱，他是一个能从服务器推报警和日志到手机的工具，非常简单易操作：

1.用GitHub账号登入后，获得一个SCKEY（在「发送消息」页面） 按照引导，点击“微信推送”，扫码关注“方糖”后即可完成绑定
2.在login、logout、scan、和error事件触发后，将一些关键信息往 http://sc.ftqq.com/SCKEY.send 发Get请求，我自己的微信里就收到消息了。

这样，当我的机器人出现各种异常情况，我随时随地都可以知道，需要再扫码进入的时候，方糖这公众号就会把二维码推到我的手机上，我只要用机器人的微信扫码就可以了。

恩，就是这样，我实现了闭着眼镜就可以拉人的美梦中。

## 5. 后续

当我开始使用机器人做所有的重复操作的时候，对于加群的工作，我有了进一步的思考，比如我把很多微商拉入黑名单，他们再也无法进入我的微信群；另外我写了个功能，在微信群中加入了管理员功能，这样管理员即使不是群主，也可以把用户踢出微信群；有的时候脑洞大开，还会做个恶作剧，专门收集群友撤回信息，娱乐大众......

忽然想起了一句话： “People should think, Bot should work”。 当机器能够帮助我们把机械化的工作完成之后，我们才会有更多的时间，思考真正有价值的事情。

Wechaty解放了我的一些重复性工作，我也希望能为Wechaty做点什么，所以我现在在业余时间更新Wechaty的文档，有的时候也会分享一些我在使用Wechaty时候遇到的问题，希望帮助更多的人能够快速上手使用Wechaty。

如果你对Wechaty感兴趣，希望一起交流，一起分享，共同学习，可以扫码添加"桔小秘"为好友，回复wechaty加入WECHATY DEVELOPERS' HOME。也可以顺便体验下wechaty实现的小功能。

![qr-code][qr-code]

[ruirui-dance-image]: /assets/2016/ruirui-dance.jpg
[wechaty-pic]: /assets/2017/lijiarui-write-bot-wechaty-pic.jpeg
[docker-pull]: /assets/2017/lijiarui-write-bot-docker-pull.jpeg
[run-ding]: /assets/2017/lijiarui-write-bot-run-ding.jpeg
[qr-code]: /assets/2017/lijiarui-write-bot-qr-code.jpeg
