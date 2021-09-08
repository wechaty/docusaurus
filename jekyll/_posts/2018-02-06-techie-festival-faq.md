---
title: "女生科技体验节，Wechaty杂货铺"
author: tingyinhelen
categories: tutorial
tags:
  - datagirls
---

这篇文章主要针对女生科技体验节Wechaty专场，同学们问的问题的汇总。因为很多同学没有太多编程基础，所以这篇文章讲解会比较基础。

故事从哪里说起呢？通过这次女生科技体验节活动，同学们遇到的问题主要来自三方面，第一，是docker安装方面的问题；第二，是对一些专有名词的不理解；第三，是程序运行和代码编写方面的问题。那么，我会把重心放在，程序编写和运行中遇到的问题，和对同学们来说比较陌生的专业术语的解释上。因为，安装的问题五花八门，安装好以后大家都就可以随心所欲的写自己的机器人了，遇到更多的是程序代码上的问题。还有，我对安装真的不是特别在行。。。。

So，这篇文章主要以问答的形式来写，并且，后面遇到新的问题，也可以告诉我，我会及时的补充。

## 1.  Wechaty微信机器人可以用到公众号上吗？

不能用于公众号，公众号本身有自动回复的功能，可以直接调用公众号的接口，具体可以查看文档，使用Wechaty制作微信机器人只能用在个人微信号上。但是wechaty 有计划把公众号整合进来，详细讨论见 [issue1016](https://github.com/wechaty/wechaty/issues/1016)

## 2.  docker的镜像加速器

因为国内访问Docker 官方的Docker Hub有时候速度会很慢，此时就可以配置镜像加速器。比如：阿里云加速器，DaoCloud加速器等。
配置方法就是，我们注册新用户之后，申请加速器，会获得一个地址，然后我们将这个地址配置给Docker引擎，添加到docker的registry-mirrors中。
Docker Hub是仓库集中存放镜像的地方，Docker官方维护了一个公共的仓库Docker Hub，可以通过docker pull来将需要的镜像下到本地。

这里我们的雨鸟助教将wechaty的镜像直接放在了registry.docker-cn.com一个国内的hub ，我们就可以很快速的拉取镜像。

拉取镜像的命令：
`docker pull registry.docker-cn.com/zixia/wechaty`
将Wechaty版本号指定到最新的版本
`docker tag zixia/wechaty:latest`
启动程序
`docker run zixia/wechaty`

## 3.在运行李佳芮讲师的get start代码的时候，为什么自己发的信息不能回复

其实单从Wechaty来说是可以自己发信息，自己回复的，但是自己给自己发信息会进入一个死循环。

讲师提供的get start 的代码，有这么一句

```javascript
if(m.self()){
  return;
}
```

当接收到的消息是自己发出的，就直接终止代码继续往后执行。

## 4.  Windows7下发送不了中文message

这是MinGW的问题。MinGW 是一组包含文件和端口库，其功能是允许控制台模式的程序使用微软的标准C运行时（C Runtime）库。
简单的说，有一些软件必须在Linux的环境下运行，MinGW可以在Windows上提供一套Linux的运行的环境，表象的说就是可以在Windows上执行Linux的命令。但是MinGW对中文的支持很不友好。  我们在安装git的时候会自动安装MinGW。所以导致同学们发送不了中文的message。
具体的解决方法就是：使用命令`docker-machine ssh`，ssh连接到docker镜像内部，然后再运行。ssh是一种网络协议。用户想要通过本地计算机登录到远程计算机，就要使用ssh。具体想要多了解的可以看阮一峰的这篇小白入门文章：[http://www.ruanyifeng.com/blog/2011/12/ssh_remote_login.html](http://www.ruanyifeng.com/blog/2011/12/ssh_remote_login.html) 。这里我们使用docker-machine ssh访问到docker镜像，因为docker内部就是linux环境，所以内部没有用到MinGW，这样就解决了系统的兼容性问题。
但是ssh进入内部，就不能直接使用docker run -t挂载本地目录，因为现在命令的执行是直接在虚拟机内部的，操作不了宿主机的文件。解决的方法是，把本地的目录挂在到docer虚拟机内部，然后ssh连接进虚拟机，docker run -t是挂载虚拟机内部的目录。

这里感谢我们的远程助教[杉木](https://github.com/binsee)和[Fery](https://github.com/h4dex)提供的解决方案。

## 5.正则表达式

因为在机器人拉人入群的时候，我们主要采用的是，好友输入入群的关键词，然后机器人匹配关键词，自动拉人入群。这里我们就要用到正则表达式。

首先理一下什么是正则表达式：正则表达式是一种文本模式，可以是普通的字符，也可以是特殊字符。正则表达式使用单个字符串来描述、匹配一系列某个句法规则的字符串。可能这样说大家还不是很明白，举一个例子：
我们希望拉人到test群，希望好友向机器人发送“room”，机器人收到这个词，才会将好友自动添加到test群里。那么我们就需要用到正则表达式来匹配。
这里提一下一位同学写的非常具有教育意义的代码。可以看出这位同学有一定的编程基础，她想实现的功能是，当好友在输入：“Hello”或者”Hi”的时候，都能自动添加到群里。下面是代码：

```js
if(/Hello || Hi/.test(content)){
  ...
}
```

js的正则表达式中“或”是这么写的/Hello|Hi/，并且中间不能有空格，如果有空格，正则也将匹配到空格，好友必须输入”Hello ”或者” Hi”才能匹配上。
正则表达式学起来很繁琐，但是功能很强大，感兴趣的同学需要自己下来花时间学习。

## 6.  Typescript

Javascript是一个弱类型语言，就是说变量类型是不确定的，比如：

```javascript
var x = 5;
x = x + 'A'
```

声明x的时候是一个数值，但是第二句直接把x变成了一个字符串。也就是说js中变量的类型完全是由当前的值来决定的。这样对于最初的js作为一个脚本语言来说是很方便简单的，但是随着项目的逐渐变大，用这种弱类型的语言一直要到程序运行的时候才能检测出错误，为了开发人员能够在编译时就能发现代码的问题，现在很多大型的项目都希望Js能够支持强类型，就是指定变量的类型，比如Flow，Typescript。Typescript 是微软2012年推出的一种编程语言，属于 JavaScript 的超集，可以编译为 JavaScript 执行。  它的最大特点就是支持强类型和 ES6 class。

Wechaty本身是使用的Typescript编写。我们在编写机器人的时候，也可以使用Typescript。

## 7.怎么知道好友自动通过的条件

有同学问，不想通过所有的好友请求，怎么办呢？

这里可以参考这个示例：<https://github.com/wechaty/wechaty/blob/master/example/friend-bot.ts>
和`friend Event` API：
<https://wechaty.github.io/wechaty/#Wechaty+on>

Wechaty提供的接口可以通过验证信息来过滤掉一部分发送请求的好友。具体的的代码：

```javascript
.on('friend', async (contact, request) => {
  if (request && request.hello == ‘ding’) {
    request.accept()
  }
}）
```

当验证信息是’ding’才会自动添加好友。

## 8.支持红包类型的消息吗？

Wechaty提供的接口可以识别机器人接收到的消息时什么类型的，因为Wechaty是基于web的，所以不能做领取红包的操作。

可以参考我的这个代码:
<https://github.com/TingYinHelen/wechaty-test/blob/master/index.js>
在49行的地方，判断message的类型，红包信息的m.type() =10000，当`m.type() == 10000`的时候，说明是红包，机器人就会@一下我自己，提醒我赶紧抢红包。

## 9.  如何防止封号

需要控制消息发送频率，过高的发送频率会容易被识别。另外账号最好是经过认证、绑定过银行卡，日常也在手机端正常使用（如发朋友圈之类）。总而言之，让你的号行为看起来像是一个真人在用。

还有很重要的，别用于发广告、骚扰，否则被举报很容易被封。

## 10.自己的账号登录不了网页版微信

微信账号太年轻，需要换一个早期注册的账号。其实就是遭遇了上面所说的号被封了。

## 11.机器人掉线问题解决

这里建议使用Server酱。网页版微信会经常把用户踢下线，Server酱可以帮助我们知道Wechaty发生了哪些异常。 Server酱，他是一个能从服务器推报警和日志到手机的工具，非常简单易操作：

1.用GitHub账号登入后，获得一个SCKEY（在「发送消息」页面）  按照引导，点击“微信推送”，扫码关注“方糖”后即可完成绑定

2.在login、logout、scan、和error事件触发后，将一些关键信息往 <http://sc.ftqq.com/SCKEY.send> 发Get请求，我自己的微信里就收到消息了。

这样，当我的机器人出现各种异常情况，我随时随地都可以知道，需要再扫码进入的时候，方糖这公众号就会把二维码推到我的手机上，我只要用机器人的微信扫码就可以了。

## 12.  怎么终止程序

终止程序命令: `ctrl + c`

## 13.怎么区分群和私聊

机器人在获取message的时候可以判断message.room()方法返回值，当返回是null，就说明是私聊，返回不是null就是群聊。null在js 中转为Boolean之后是false。所以直接看代码

```javascript
const room = m.room()
if(room){
  //这里是群聊
}else{
  //这里是私聊
}
```

## 14.wechaty的适用场景

Wechaty的适用场景非常的广泛，[Wechaty](https://wechaty.github.io) 提供了一套非常方便的接口。以前我们总是去App store中安装App，然后使用App来满足我们对应用场景的一些需求。然后现在使用手机，大多数的时间都花在了微信上。不管是私聊，群聊还是看朋友圈，我们不得不承认，微信占据了我们生活的很大一部分时间。那么为何不省去下载App的时间，就在微信上满足我们对应用的需求。预定机票，酒店，租房，天气查询，周边美食查询。可以说，chat bot可以实现大多数App实现的功能，只是需要开发者自己设计。chat bot能简化一切机械的人力成本，比如：拉人入群，发送欢迎语，自动添加好友，自动踢人。说到自动踢人，其实很多群里是群主手动踢人，在wechaty developer home微信群中，实现自动踢人，当有人在群里发送无关消息时，群里的成员可以@此人，用微信表情投票，得票超过三个，机器人将自动踢人。所以chat bot能做的事情是在太多了。如果你感兴趣在可以在Wechaty的blog中有发现很多开发者写得技术文章[https://wechaty.github.io/](https://wechaty.github.io/)，和wechaty的实际应用。当然你也可以发挥想象，做出更加有意思的微信机器人。

## 15.执行docker run要在项目目录下

很多同学都有这个问题，在下载get start项目之后，没有进入到项目目录就开始运行代码了，需要进入到项目目录下再运行

`cd wechaty-getting-started`

下面是五花八门的安装问题

## 16.安装docker的问题

Error with pre-create check: "This computer doesn't have VT-X/AMD-v enabled. Enabling it in the BIOS is mandatory"

Looks like something went wrong in step ´Checking if machine default exists´... Press any key to continue...

重启进Bios设置一下

Security->Virtualization->Intel(R)Virtualization Technology From Disabled->Enabled

## 17.ash.exe找不到的问题

如果安装路径不在C盘可能遇到这个的问题,手工浏览一下就好

## 18.boot2docker下载不了

手工下载下来,放在C:\users\用户名\.docker\machine\cache下

## 19.bash.exe找不到问题

下载下面提供的链接，然后安装。
<https://github.com/boot2docker/boot2docker/releases/download/v18.01.0-ce/boot2docker.iso>

![a](https://avatars2.githubusercontent.com/u/14006826?v=3&s=88)
>
> 作者: [@Helen](https://github.com/TingYinHelen), Lenovo
>
> 女生科技体验节的志愿者助教。
>
