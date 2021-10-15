---
title: "女生科技体验节，Wechaty专场技术复盘"
author: tingyinhelen
categories: event
tags:
  - talk
  - news
image: /assets/2018/helen-techie-festival.webp
---

女孩子天生喜欢漂亮的衣服，衣柜里琳琅满目的首饰，化妆品。周末和闺蜜约会，逛街，喝下午茶。这似乎是众人眼中的姑娘们的标配。然而又有着这么一群女孩，她们喜欢编程，用代码改变着身边细小的事情，改变着世界。聪明，具有创造力，她们用行动诠释了新时代女性的性感。一个女孩的美丽不仅仅来自她的外表，更来自她的思想。2018年女生科技体验节，便是一道独有的风景线，讲师李佳芮带领女孩子们体验使用Wechaty制作自己的微信机器人。

![techie-festival][techie-festival]

在2018女生科技体验节中，讲师李佳芮向大家讲解了[《从0到1，搭建你的个人智能助理》](https://mp.weixin.qq.com/s?__biz=MzI4NDkwNDA2NA==&mid=2247484233&idx=1&sn=e6e4d66c9e81ae909c8a523d70972d26&chksm=ebf51ca6dc8295b02c5b320a17e2bb69918500ecdda69bdf565fa69377dac5a2a3ee3aef3387&mpshare=1&scene=1&srcid=0129BCkHC0MAzDl6r6y10V1j&pass_ticket=KEvH2mABSfNtoFSgclVOWz9M40KevjNRkSVjxyPhWuc%3D#rd)，基于同学们大多没有太多编码经验，所以这篇文章做一个技术复盘，把课程中讲到的技术知识点做一个总结。

OK，时间是把杀猪刀。课程第一步做了什么呢？嗯，做了课前准备。对，就是整个课程最复杂最麻烦的一步！很多同学在就牺牲在了第一步，俗话说得好，万事开头难，开了头就可以骑着马跑~为了保证到场人数达标，活动方派出了两位助教帮助同学们装环境。

这里我需要花一定的篇幅来表扬我们的助教雨鸟同学，他乐于助人，是身边的活雷锋，在前期准备工作中，雨鸟同学帮助100多位女生安装docker，搭建环境，手都抽经了。作为一个高级运维，雨鸟在课程中，不仅解决环境搭建的问题，还帮着同学们解bug，成为了一大波女生心中的偶像。

下面开始讲技术。

安装Wechaty有两种方法，Node和Docker。课前希望同学们能安装好。因为安装会花费很多时间，一个是本身软件很大，再加上wechaty镜像很大，如果全在会场来下载，会场的网络怕是扛不住的。。。
[具体安装方法](https://www.jianshu.com/p/6ca8e4074cf6)，安装成功的标志是，在命令行中输入node --version，会显示node的版本。

![node-screenshot][node-screenshot]

接下来讲一下docker， docker是一个简化部署的工具。为什么我们需要docker？对于初学者来说可能比较难理解，打一个比喻，集装箱！在集装箱出现之前，我们是怎么运输货物的呢，货物从工厂生产出来之后装箱，然后一箱箱的搬到卡车上，然后再一箱箱卸下来，一箱箱送上火车，运送到码头附近的火车站，再一箱箱卸下来，装上卡车，拉到货轮上，再一箱一箱的装上。可以看出在这个整个流程中，大量的时间，人力  ，物力全部浪费在了中间的装卸上。集装箱重要在它提供了一种通用的封装货物的标准规格（尺寸，外形符合统一标准）。只需要在运输前一次性封装，集装箱就可以放上火车，卡车，拉到码头，直接放在货船上这里后面还会具体介绍。理解就是，docker可以把整个开发环境中所需要应用按照一定的格式封装，开发者可以直接拉取镜像进行安装，就可以很容易的获取一套开发环境。如果把镜像比喻成面向对象中的类，容器就是一个实例。容器的实质就是一个进程。

docker安装好的标志是命令行运行：`docker --version`会显示docker的版本号。

![docker-screenshot][docker-screenshot]

好了，安装好docker之后我们要做的就是download wechaty的镜像

获取镜像的命令：`docker pull [选项] [Docker Registry 地址]<仓库名>:<标签>`

获取wechaty的镜像：`docker pull [registry.docker-cn.com/zixia/wechaty]`

获取镜像之后 运行 `docker run zixia/wechaty`

如果看到wechaty的欢迎界面就表示已经在本地成功运行wechaty

![run-ding][run-ding]

以上是环境搭建，搭好环境之后就可以编写我们想要的微信机器人了。

## Wechaty

Wechaty是一个为个人微信号搭建的chat bot框架。
这里讲师给大家提供了一个[机器人代码](https://github.com/lijiarui/wechaty-getting-started)，实现了简单的自动通过好友请求，拉人入群，欢迎新人入群，踢人等功能。

需要大家拉下这个仓库，使用命令`git clone https://github.com/lijiarui/wechaty-getting-started.git`，没有安装git的同学可以直接下载这个仓库。下载好仓库后，需要进入到项目目录下（使用命令行：`cd wechaty-getting-started`），然后运行项目（使用命令行：`docker run -ti --volume="$(pwd)":/bot --rm zixia/wechaty mybot.ts`）这里我解释一下这两句命令行的意思：

1.`cd wechaty-getting-started`就是进入到wechaty-getting-started这个文件夹下面；

2.`docker run -ti --volume="$(pwd)":/bot --rm zixia/wechaty mybot.ts`

docker run的意思是创建一个新的容器，并运行一个命令，语法是`docker run [OPTIONS] IMAGE [COMMAND] [ARG...]`

 `-ti`是两个命令：`-i`是以交互模式运行容器，`-t`是为容器重新分配一个伪输入终端，这里我们打算进入bash执行一些命令并查看返回结果，因此我们需要交互式终端。

`—rm`这个参数是指容器退出后随之将其删除。

`--volume`是增加一个数据卷，具体什么是数据卷，将在后面的文章详细讲，这里只需要理解--volume="$(pwd)":/bot的意思就是把当前目录映射到容器里的bot

然后就是运行的zixia/wechaty这个镜像下的mybot.ts文件。

可能对js有了解的同学可能会问.ts文件和.js文件的区别，Wechaty框架是使用Typescript编写的项目，TypeScript 是 JavaScript 的超集，扩展了 JavaScript 的语法，TypeScript 通过类型注解提供编译时的静态类型检查。我们也可以直接用JavaScript进行编写

讲师提供的这个机器人做了一件什么事儿呢？

首先，当有好友请求添加好友的时候，能够自动添加为好友。

具体是这段代码

```javascript
.on('friend', async function (contact, request) {
  if (request) {
    await request.accept()
    console.log(`Contact: ${contact.name()} send request ${request.hello}`)
  }
})
```

然后当接收到消息的时候，当对方说“hello”，机器人就会回应："hello how are you”。这里的代码有一个小bug，就是回应的语句中也含有“hello”这个词，所以发生的当天著名的炸群事件，群里一个劲儿的回复“hello how are you”，导致当天有同学的微信号被封了。要修改这个bug很简单，就是将回复语中的“hello”换成其他词。继续往后，当同学们输入”room”的时候，机器人会找到一个名为“test”的群，然后将该同学拉进群里，并且会说：“welcome！${同学的名字}”,

```javascript
.on('message', async function (m) {
    const contact = m.from()
    const content = m.content()
    const room = m.room()
    if (/room/.test(content)) {
      let keyroom = await Room.find({ topic: "test" })
      if (keyroom) {
        await keyroom.add(contact)
        await keyroom.say("welcome!", contact)
      }
    }
  })
```

当同学发送“out”这个信息的时候，会把自己从“test”这个群里把自己踢出去（这个功能也是很有意思的，自己把自己踢出群）

```javascript
    if (/out/.test(content)) {
      let keyroom = await Room.find({ topic: "test" })
      if (keyroom) {
        await keyroom.say("Remove from the room", contact)
        await keyroom.del(contact)
      }
    }

```

好了，我把代码实现的功能讲述了一边，具体的就需要同学们自己去看代码了。这里我重点给大家介绍一下这段代码中用到的wechaty的几个类，分别是Wechaty、Contact、Message、和FriendRequest。每次我们只需要引入需要用到的类就可以使用类提供的方法了。
还提供了一些事件：‘scan’（扫描二维码），,’login’（机器人登录），‘logout’（机器人退出），‘message’（接收到新消息），‘error’（程序报错），‘friend’（好友请求）等。Wechaty提供了一套非常方便的API，供开发者方便的使用，满足机器人来管理群。

## Server酱

网页版微信会经常把用户踢下线，Server酱可以帮助我们知道Wechaty发生了哪些异常。
Server酱，他是一个能从服务器推报警和日志到手机的工具，非常简单易操作：

1.用GitHub账号登入后，获得一个SCKEY（在「发送消息」页面） 按照引导，点击“微信推送”，扫码关注“方糖”后即可完成绑定 2.在login、logout、scan、和error事件触发后，将一些关键信息往 <http://sc.ftqq.com/SCKEY.send> 发Get请求，我自己的微信里就收到消息了。

这样，当我的机器人出现各种异常情况，我随时随地都可以知道，需要再扫码进入的时候，方糖这公众号就会把二维码推到我的手机上，我只要用机器人的微信扫码就可以了。

## UNIT

最后，我们向大家介绍了怎么去制作智能微信机器人，使用了百度的UNIT框架。UNIT不需要有开发经验，我们需要做的是了解机器人使用在什么样的场景下，如何理解、如何回应用户。机器人是通过识别意图和词槽理解用户的。我们通过建立词槽，引入词典，配置词槽的澄清话术。配置回复文本及触发条件，配置引导话术、引导目标和触发条件，最后保存所有配置，导入语料，编辑对话模板，最后训练并生效模型。

这篇文章先写到这里，后面将会对同学们在课程中遇到的问题和一些专有名词进行解释。

文章最后还是提一下我自己的志向，我希望做一个面向女性和儿童的程序员社区，希望有更多的女性加入到编程行业，成为行业的引领者。同时大力提倡儿童编程，如果想跟我聊一聊的，下面是我的联系方式。

![halen](/assets/2018/helen-weixin.webp)

[techie-festival]: /assets/2018/helen-techie-festival.webp
[docker-screenshot]: /assets/2018/helen-docker-screenshot.webp
[node-screenshot]: /assets/2018/helen-node-screenshot.webp
[run-ding]: /assets/2017/lijiarui-write-bot-run-ding.webp

![a](https://avatars2.githubusercontent.com/u/14006826?v=3&s=88)
>
> 作者: [@Helen](https://github.com/TingYinHelen), Lenovo
>
> 一个爱玩的程序员，喜欢折腾新技术，还喜欢研究框架源码。不写代码时喜欢跳舞，架子鼓，马拉松，是这次女生科技体验节的志愿者助教。
>
