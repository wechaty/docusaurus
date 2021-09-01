---
title: "微信群广告检测机器人"
author: garyboygo
categories: npm
tags:
  - ads-monitor
image: /assets/2020/ads-filter-groupbot/ads-filter-groupbot.jpeg
---

[![badge](https://img.shields.io/badge/Powered%20By-Wechaty-green.svg#align=left&display=inline&height=20&margin=%5Bobject%20Object%5D&originHeight=20&originWidth=132&status=done&style=none&width=132)](https://github.com/wechaty/wechaty)
[![badge](https://img.shields.io/badge/Wechaty-%E5%BC%80%E6%BA%90%E6%BF%80%E5%8A%B1%E8%AE%A1%E5%88%92-green.svg#align=left&display=inline&height=20&margin=%5Bobject%20Object%5D&originHeight=20&originWidth=134&status=done&style=none&width=134)](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)

## 项目背景

开发了一个面向美国的租房微信小程序，为了方便推广，便给各个地区都创建了微信群，微信群的人数扩展的很快，目前大概已经有超过20个微信群，有4个微信群有500人，其余的微信群人数也在100人以上。

微信群开始变得不好管理，我们创建微信群的目的是为了方便大家让他们更好地在海外租到房子，可是之后群里开始有一些人恶意的发一些的虚假广告，比如学历造价，自制病假条等广告，尽管我们在群公告中声明不准发广告，也有管理员及时踢人，可是每天还有很多的人会发这种广告，我们也发现这些广告都会有一些特定的关键词，我们只需要把这些关键词存到一到地方，通过比对每个用户的发言，然后把那些发言带有关键词的用户踢出群中，这样可以帮助我们的群管理员减少一些负担。

## 功能

- 检测用户发言是否有广告关键词
- 识别出发了广告的用户并对其进行警告
- 将因为发了广告被被踢出群的用户加入黑名单，之后不能再进入本群

## 具体实现

- bot.js: 项目入口文件，实现了扫码微信，并注册监测广告的逻辑。
- utility.js: 广告过来逻辑的实现函数。并且我们对广告进行了分级，有严重恶意广告和不严重恶意广告，实现逻辑在isSeriousAdsText和isLightAdsText。我们可以看到程度比较严重的广告是一些带有学历认证，病假申请的文字。而不严重的广告主要是一些带有保险字样的广告。

使用这个机器人的时候要先安装一些dependency

- npm install wechaty@latest
- npm install wechaty-puppet@latest
- npm install wechaty-puppet-padplus@latest
- npm install qrcode-terminal
- npm install node-schedule
- sudo npm install ts-node typescript -g

## 最终效果

![avatar](/assets/2020/ads-filter-groupbot/ads-filter-groupbot.jpeg)

> 作者: [garyboygo](https://github.com/garyboygo/)
> Code: [Github](https://github.com/garyboygo/WeChatGroupBot)
