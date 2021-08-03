---
title: "Wechaty Summer of Code 2020 Talk"
author: juzibot
categories: announcement
tags:
  - summer-of-wechaty
  - summer-2020
  - talk
  - news
  - meetup
  - featured
image: /assets/2020/06-wechaty-summer-of-code-2020-talk/00.wepb
---

> 作者: [juzibot](https://github.com/juzibot/)

## 关于暑期2020

“开源软件供应链点亮计划-暑期2020”（简称 暑期2020）是由中科院软件所与 openEuler 社区共同举办的一项面向高校学生的暑期活动。
旨在鼓励在校学生积极参与开源软件的开发维护，促进国内优秀开源软件社区的蓬勃发展。
根据项目的难易程度和完成情况，参与者还可获取“开源软件供应链点亮计划-暑期2020”活动奖金和奖杯。

官网：<https://isrc.iscas.ac.cn/summer2020>

官方新闻：<http://www.iscas.ac.cn/xshd2016/xshy2016/202004/t20200426_5563484.html>

## Wechaty 与暑期2020

![Wechaty SoC破冰会现场合影](/assets/2020/wechaty-soc-kick-off-meeting/group-photo.png)

Wechaty 作为中国最大的聊天机器人开源项目，与其他数十个中国顶级开源项目一起参与“暑期2020”。
Wechaty合计发布了11个项目，共收到来自清华大学、北京大学、中国科学院大学、南开大学、四川大学等高校的数十份申请，并由Wechaty社区的资深Contributor作为导师，选出了11位同学进行项目开发。
此次 Wechaty 发布的11个项目涉及多语言、多平台、多功能三个核心主题，来自Wechaty社区的导师将和来自高校的学生开发者们一起，在三个月的时间里完成对应的开源项目。

## Wechaty 暑期2020宣讲会

<div class="video-container" style="
    position: relative;
    padding-bottom:56.25%;
    padding-top:30px;
    height:0;
    overflow:hidden;
">
<iframe width="560" height="315" src="https://www.youtube.com/embed/fMFzCexnDsY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

你可以在Bilibili上查看[暑期2020宣讲会视频](//player.bilibili.com/player.html?aid=625978692&bvid=BV1et4y1y7a2&cid=199810616&page=13)

你也可以在Google Docs上查看[暑期2020宣讲会Slide](https://docs.google.com/presentation/d/1ZLH37rQyRgChGqFCUDjA5rbVgBuRkVM4Tys-_ls0gs0/edit#slide=id.g88410f616d_1_20)

## 开源的微信聊天机器人框架SDK

我们的链接是<www.github.com/wechaty/wechaty>，我们目前所有的repo加起来也有8000star，我们想要做的事情就是，用最简单的方式用代码模拟微信的登陆，然后用机器去控制微信的收发消息和群管理等功能

![02](/assets/2020/06-wechaty-summer-of-code-2020-talk/02.webp)

- 我们怎样实现这样的功能？很简单，当我们的微信去自由接入的时候，可以自由选择接入哪一个puppet,不同的puppet对应不同的底层代码，底层代码完全不会暴露在大家面前，只用关心怎么调用应用层的代码，去实现智能对话的能力就可以，对用户来说，用户是无感知的，对他来说就是一个微信上的真人在跟他聊天，不知道这个机器人接入的哪一种底层，不管是模拟登陆mac，ipad，还是windows，对用户来说就是在跟真人对话，wechaty是做这件事做的最好的，

- 我们可以想这样一个问题，是不是本质上，微信的接入来说，首先要接入底层协议，基于协议写一些应用层代码，然后直接去跟用户交互，
既然能够把微信这件事情做好，那么我们来思考问题：是不是可以让更多的IM接入，只要切换环境变量，就可以切换到不同的IM系统，实现同一套代码应用于不同的平台

![03](/assets/2020/06-wechaty-summer-of-code-2020-talk/03.webp)

- 所以我们想要做的是下面4件事情：让所有的IM平台都封装同一套IM代码，但是底层代码不同，只需要切换环境变量，就可以把原来在微信上的聊天机器人切换到飞书上，
还可以在不同语言，不同插件，不同行业都应用到，去解决很多问题

- 我们认为wechaty期待同为智能的基础设施，所有行业，所有语言的开发者，都可以使用这个框架去接入微信以及更多的IM通讯平台，我们希望做三大件事情：

![04](/assets/2020/06-wechaty-summer-of-code-2020-talk/04.webp)

- 首先介绍一下我们团队的导师：wechaty团队实际上是站在技术和商业的十字路口，选择了一个现代的场景，通过聊天机器人，让技术为商业更好的服务，我们很欢迎大家可以和我们一起去共建智能对话的基础设施，从六行代码接入微信开始，能够快速的实现机器人的接入。

![035](/assets/2020/06-wechaty-summer-of-code-2020-talk/035.webp)

- 我们想要做的事情，11个任务，对应不同的场景

![05](/assets/2020/06-wechaty-summer-of-code-2020-talk/05.webp)

## 多平台

- 首先说说多平台，我们认为做智能对话这件事，最核心的就是要接入，如果说不能让代码很快的接入微信，很快的去操作，后面就成了空谈，wechaty花了4年时间做好了这件事，我们希望用同一套应用层代码去接入剩下的5个平台，飞书叮叮企业微信快手抖音，只要把这些事情都做好了，开发者只要用一套应用层代码和不多余10行的代码就可以去完成不同平台的建立。
- 我们着重介绍一下企业微信，企业微信会是未来一个非常大的机会，实际上和微信不同，企业微信提供了大量的开放接口，基于开放接口去封装成wechaty对应的应用层代码，会实现一个安全符合规定的机器人，创造出极大的商业价值，非常期待大家在这样的框架上和我们一起努力。
![07](/assets/2020/06-wechaty-summer-of-code-2020-talk/07.webp)

### 多平台：基于开放 API 封装 Wechaty 接口下的企业微信聊天机器人 <https://github.com/wechaty/summer-of-code/issues/2>

- 导师：高原，句子互动CTO、前亚马逊工程师（gaoyuan@juzi.bot）；李佳芮，句子互动CEO、专注微信生态近10年（rui@juzi.bot）
- 学生开发者：谢昱清，清华大学本科生（1205402283@qq.com）

![08](/assets/2020/06-wechaty-summer-of-code-2020-talk/08.webp)

### 多平台：基于开放 API 封装 Wechaty 接口下的钉钉聊天机器人 <https://github.com/wechaty/summer-of-code/issues/11>

- 导师：高原，句子互动CTO、前亚马逊工程师（gaoyuan@juzi.bot）；李佳芮，句子互动CEO、专注微信生态近10年（rui@juzi.bot）
- 学生开发者：杨明哲，福州大学本科生（yutinice@foxmail.com）

![09](/assets/2020/06-wechaty-summer-of-code-2020-talk/09.webp)

### 多平台：基于开放 API 封装 Wechaty 接口下的飞书聊天机器人 <https://github.com/wechaty/summer-of-code/issues/12>

- 导师：高原，句子互动CTO、前亚马逊工程师（gaoyuan@juzi.bot）；李佳芮，句子互动CEO、专注微信生态近10年（rui@juzi.bot）
- 学生开发者：范蕊，南开大学本科生（953299708@qq.com）

![10](/assets/2020/06-wechaty-summer-of-code-2020-talk/10.webp)

### 多平台：基于 RPA 封装 Wechaty 接口下的抖音聊天机器人 <https://github.com/wechaty/summer-of-code/issues/13>

- 导师：尹伯昊，连续创业者，句子互动CMO（yinbohao@juzi.bot）
- 学生开发者：王俊伟，长春工业大学本科生（863445607@qq.com）

![11](/assets/2020/06-wechaty-summer-of-code-2020-talk/11.webp)

### 多平台：基于 RPA 封装 Wechaty 接口下的快手聊天机器人 <https://github.com/wechaty/summer-of-code/issues/14>

- 导师：尹伯昊，连续创业者，句子互动CMO（yinbohao@juzi.bot）
- 学生开发者：毕凯乔，长春工业大学本科生（358461417@qq.com）

![12](/assets/2020/06-wechaty-summer-of-code-2020-talk/12.webp)

## 多语言

### 多语言：Wechaty Java 移植组件开发 <https://github.com/wechaty/summer-of-code/issues/4>

- 导师：刁政欣 阿里开发工程师 Author of Java-wechaty （diaozxin@gmail.com）
- 学生开发者：陈炀，福州大学本科生（1184016190@qq.com）

![14](/assets/2020/06-wechaty-summer-of-code-2020-talk/14.webp)

### 多语言：Go-wechaty Github Action optimization <https://github.com/wechaty/summer-of-code/issues/8>

- 导师：丁小雨（ 614422099@qq.com），丁超飞（dchaofei@163.com），李博杰（silkage@silkage.net）
- 学生开发者：唐光彬，华南农业大学本科生（Tang.Packet@outlook.com）

![15](/assets/2020/06-wechaty-summer-of-code-2020-talk/15.webp)

### 多语言：为 go-wechaty 设计实现 插件体系 <https://github.com/wechaty/summer-of-code/issues/9>

- 导师：丁小雨（ 614422099@qq.com），丁超飞（dchaofei@163.com），李博杰（silkage@silkage.net）
- 学生开发者：林昊翰，西安电子科技大学本科生（finctive@foxmail.com）

![16](/assets/2020/06-wechaty-summer-of-code-2020-talk/16.webp)

## 多功能

多功能想做的事情，原来写一个功能可能需要大家一起来写，可能每个功能需要几十行或者是几百行代码，

### 基于python-wechaty的群聊助手机器人 <https://github.com/wechaty/summer-of-code/issues/6>

- 导师：吴京京：Wechaty Committer，Python Wechaty Author<1435130236@qq.com>
- 学生开发者：孔祥哲，清华大学本科生<15068701650@163.com>

![18](/assets/2020/06-wechaty-summer-of-code-2020-talk/18.webp)

### 编写一个“每日一句”插件 <https://github.com/wechaty/summer-of-code/issues/10>

- 导师：Gcaufy，20000+Star小程序框架Wepy作者、Wechaty Plugin系统设计师,<gcaufy@gmail.com>
- 学生开发者：江姗姗，北京大学二学位本科生<univerone@outlook.com>

![19](/assets/2020/06-wechaty-summer-of-code-2020-talk/19.webp)

### 基于Python-wechaty建立一个斗图机器人 <https://github.com/wechaty/summer-of-code/issues/7>

- 导师：黄纯洪，python-wechaty contributor<huangaszaq@gmail.com>
- 学生开发者：肖子霖，四川大学本科生<me@mrxiao.net>

![20](/assets/2020/06-wechaty-summer-of-code-2020-talk/20.webp)

## 欢迎正在阅读的你参与其中

- 社区官网链接：<https://wechaty.js.org>
- 社区运营微信： FridayBot
