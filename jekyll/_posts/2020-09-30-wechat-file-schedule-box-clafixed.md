---
title: Wechat File Schedule Box
author: hywhuangyuwei
categories: project
tags:
  - padplus
  - productivity
  - nodejs
  - sync
  - netdisk
---

使用Wechaty以少量的代码实现一个微信文件日程匣子项目。可快速将微信中的内容同步（转存）到其他网盘中。同时还添加自动识别处理日程等的小功能。

## 关于Wechaty

### 官方定义：

> Wechaty是一个开源的的个人号微信机器人接口，使用Typescript构建的Node.js应用。支持多种微信接入方案，包括网页，ipad，ios，windows，android 等。同时支持 Linux, Windows, Darwin(OSX/Mac) 和 Docker 多个平台。

一句话概括——是一个能模拟登录微信并收发微信信息、添加自定义处理逻辑的库。值得注意的是其中的模拟登录，可以是模拟Web端登录（Wechaty提供免费支持），也可以是模拟Mac、iPad端登录（Wechaty以收费的云服务形式提供，但是可以申请成为开发者获取使用权限）。

## 项目背景

在使用微信作为主力办公工具的过程中，经常令人头大的问题之一就是处理文件，不论是同事之间互传文件或者是群聊里发送文件，要统一归档到网盘同步都是很麻烦的事情（尤其在iOS端微信，只能挨个打开在选择用其他应用打开）。因此希望实现一个能自动归档文件的效率小工具。

## 实现思路

由于Wechaty提供了很方便的File API，通过fileMsg.toFileBox方法就能获取一个消息的文件，因此通过“收到多个文件-转发到文件匣子（一个微信号）-转存到其他位置”的流程，就能实现把文件多选转发到文件匣子，然后自动归档到网盘的效果。

此外，如果msg.type方法还能判断消息类型，从而可以对应日程文本使用正则匹配日期的NLP方法，将转发到匣子的日程文本识别出来存到数据库中供后续处理；如果是URL分享类型的消息，也可以识别出来并统一存储。

## 代码结构

> 代码仓库[已开源](https://github.com/hywhuangyuwei/Wechat-file-schedule-box)。

目录结构如下：

> ├── LICENSE
>  
> ├── Node
>  
> │   ├── coursHandler.js
>  
> │   ├── databasesConfig.js
>  
> │   ├── databases.js
>  
> │   ├── fileHandler.js
>  
> │   ├── functions.js
>  
> │   ├── httpServer.js
>  
>  
> │   ├── main.js
>  
> │   ├── menuHandler.js
>  
> │   ├── scheduleHandler.js
>  
>  
>  
> │   ├── test.js
>  
>  
> │   └── webdav.js
>  
> ├── package.json
>  
> ├── package-lock.json
>  
> ├── public
>  
> │   └── cours.json
>  
>  
> ├── README.md
>  
> ├── RunDir
>  
> ├── RunRobot.sh
>  
> ├── template
>  
> │   └── template.html
>  
> └── Time-NLP
>  
>     ├── pom.xml
>  
>     ├── README.md
>  
>     ├── resource
>  
>     ├── src
>  
>     └── target

主要代码位于`Node/`下。其中：

- main.js初始化Wechaty实例并判断收到消息的类型
- databases.js和databasesConfig.js配置数据库表结构和连接数据库
- webdav.js配置node的webdav模块，通过Webdav连接到个人网盘
- menuHandler.js, scheduler.js, fileHandler.js, coursHandler.js分别处理控制消息、日程消息、文件消息、课程表查询消息
- httpServer.js, template.html, cours.json则实现了一个简易的webpage用于网页端访问这些信息。

`Time-NLP/`中的源代码编译后，能够得到class字节码供node的java模块调用，从而实现从含有日程的文本信息解析出日期。

`RunDir/`的存在主要是因为msg.toFileBox方法会在运行目录保存文件，故在此目录下暂存这些文件。

## 结语

众所周知微信作为我们每天都在使用的工具，在文件管理等方面较QQ等其他工具功能过于单一，因此可以通过Wechaty搭建一个文件匣子，给微信加上文件自动同步网盘、日程自动收集等小功能，让日常办公更加效率：）
