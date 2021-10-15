---
title: "基于Wechaty的夸夸机器人"
author: yinizhilian
categories: project
tags:
  - padplus
  - entertainment
  - social
image: /assets/2020/kuakua-wechaty/titleimage.webp
---

[![Wechaty Badge](https://img.shields.io/badge/Powered%20By-Wechaty-green.svg#align=left&display=inline&height=20&margin=%5Bobject%20Object%5D&originHeight=20&originWidth=132&status=done&style=none&width=132)](https://github.com/wechaty/wechaty)
[![Everything about Wechaty](https://img.shields.io/badge/Wechaty-%E5%BC%80%E6%BA%90%E6%BF%80%E5%8A%B1%E8%AE%A1%E5%88%92-green.svg#align=left&display=inline&height=20&margin=%5Bobject%20Object%5D&originHeight=20&originWidth=134&status=done&style=none&width=134)](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)

<!--more-->
&ensp;&ensp;&ensp;&ensp;疫情期间，记得微信加过一个朋友，给他发消息立马就能回复，后来才知道其中有一些是机器人回复的。特别好奇这是怎么做到的，因为之前了解到的就只有微信公众号可以做到。难道微信也可以？因为好奇，网上查询了相关资料才了解到了强大的wechaty。恰巧自己的研究方向是自然语言处理，前段时间公众号上的夸夸机器人很火，所以想着写一个微信版本的夸夸机器人吧。如果想体验可以加一下：AINLPER-BOT 。相关功能实现的方式不是很完美，还请各位大神勿喷~

## 夸夸机器人

&ensp;&ensp;&ensp;&ensp;之前看网上有个帖子是这么说的：一个男生邀请她女朋友进入了一个群，然后不论女朋友说什么都是一顿狂夸，最后女朋友是又惊又喜。其实这群里面都是人去赞美、表扬的，那么能不能在微信群里里面整个机器人去夸呢？所以该项目的初衷是实现一个微信群里面的夸夸机器人。

&ensp;&ensp;&ensp;&ensp;在做项目的时候，发现如果只做一个群内夸夸机器人是不是有点浪费wechaty的强大功能了，所有又添加了**每日一句早安语**、**每日天气**、**多群使用夸夸机器人**、**机器人召唤**、**机器人退出**、**加群自动欢迎语**等功能。

## 相关功能实现介绍

### 每日早安语

&ensp;&ensp;&ensp;&ensp;该功能实现主要是通过爬取网络上的早安语，然后去重，并将其做成了json文件，供程序每天随机读取。为了防止出现重复，每天发完都会删除。我工程中data目录下面就有公布的部分数据，大概有个300条吧，也能够大家用快一年的了。效果截图如下：
![goodmorning](/assets/2020/kuakua-wechaty/goodmorning.webp)

### 每日天气

&ensp;&ensp;&ensp;&ensp;该功能会根据微信个人设置的地理位置实现天气的自动推送，本文工程设定是每天8点推送。该功能的实现主要是调用的第三方API接口，这里就不打广告了。因为第三方的接口个人感觉不好用，后面我计划采用个人爬取的方式获取天气结果，这样自主权更好一点。
![weather](/assets/2020/kuakua-wechaty/weather.webp)

### 夸夸机器人

&ensp;&ensp;&ensp;&ensp;终于到了最关键的功能了。夸夸机器人主要使用的是一份别人爬好的数据集，然后我对数据集做了一些清洗处理（去重、去无效词、去关键词等），处理后的数据集我也会放到我工程的目录下面。在问答处理上我采用的是key-value的方式，用到的最主要的匹配算法采用的是余弦cos计算相似度。这样好友在说一些话的时候，会自动的匹配出相关赞美的话。
![kuakua](/assets/2020/kuakua-wechaty/kuakua.webp)

### 夸夸机器人的召唤和退出

&ensp;&ensp;&ensp;&ensp;机器人刚做出来的时候，发现在群里面别人说一句话，它就夸一句，时间长了就容易烦了，能不能让它通过特定的口令实现夸夸机器人的在线和下线呢，就和小爱音响、小度音响一样。功能实现起来很简单，主要是采用了一个标志位来控制机器人的开关。

### 加群欢迎语

&ensp;&ensp;&ensp;&ensp;该功能主要是我一个朋友提出的，主要是新人加群的时候可以比较及时的给与反馈，这样给人感受比较好。其实现方式主要利用wechaty的room-join监听事件实现。

## 功能部署

&ensp;&ensp;&ensp;&ensp;如果对我的project感兴趣，你可以自己部署测试一下。其主要部署方法可以参考[https://github.com/wechaty/wechaty-puppet-padplus](https://github.com/wechaty/wechaty-puppet-padplus)，完成之后执行 ts-node bot.ts然后扫码登陆就可以了。

## 待完善的内容

&ensp;&ensp;&ensp;&ensp;后面还想利用wechaty对接小冰机器人等其它机器人，实现多个机器人的自由切换；另外关于机器人的管理想通过数据库的方式实现，因为每个群对于每个群的需求不一样，每个人对每个人的需求也不一样；最后希望自己提高自己的自制力。

## 感谢

最后，真心的感谢Wechaty开源项目提供的 token。

> Author:&ensp;[yinizhilian](https://github.com/yinizhilian/kuakua_wechaty)
> Code:&ensp;[GitHub](https://github.com/yinizhilian/kuakua_wechaty)
