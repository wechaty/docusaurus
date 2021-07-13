---
title: "Docker玩转微信机器人框架Wechaty"
author: shevyan
categories: tutorial
tags:
  - code
  - docker
image: /assets/2016/ghostcloud-banner.webp
---

- 本文作者：@[shevyan](https://github.com/shevyan) 晏东，[精灵云 GhostCloud](https://www.ghostcloud.cn/)创始人&CEO
- 原文地址：<http://mp.weixin.qq.com/s/o-4VMcAMz0K8yJVdNaUXow>

![GhostCloud Banner][ghostcloud-banner]

Wechaty(<https://github.com/wechaty/wechaty>)是一款开源的微信 SDK，它基于微信公开的 API，对接口进行了一系列的封装，提供一系列简单的接口，然后开发者可以在其之上进行微信机器人的开发。在跟作者沟通试用以后，发现其中有着非常多的应用场景，比如：

1. 如果你的好友众多，如何管理和维护好友分组；
1. 如何快速有序地处理海量聊天信息，并区分重要性；
1. 如何处理海量的聊天组，特别是微信可以任意建组，长期以后会出现非常多的聊天组；
1. 能否可以自动智能地进行聊天回复
1. ……

## 1 快速上手

wechaty 使用 node 编写，所以支持几乎所有的平台，wechaty 的 hello-world 只需要 6 行代码即可实现聊天记录的动态收集。为了使用方便作者还进行了 docker 化的封装，结合 docker 绝对是一个不错的选择。

Step 1: 新建一个 mybot.js，内容如下：

```javascript
const { Wechaty } = require("wechaty");

Wechaty.instance() // Singleton
  .on("scan", (url, code) =>
    console.log(`Scan QR Code to login: ${code}\n${url}`)
  )
  .on("login", (user) => console.log(`User ${user} logined`))
  .on("message", (message) => console.log(`Message: ${message}`))
  .init();
```

Step 2: 在主机上运行命令

```shell
docker run -ti --rm --volume"$(pwd)":/bot zixia/wechaty mybot.js
```

Step 3: 拷贝二维码到浏览器

![QR Code][ghostcloud-qrcode]

Step 4: 所有聊天记录就会打印到屏幕上

![Message][ghostcloud-message]

## 2 容器化分析

wechaty 是一个比较好的 docker 化例子，其工程根目录下的 Dockerfile 详细描述了如何构建镜像，也就是需要哪些环境。通过 Dockerfile 我们可以看出，它使用的基础镜像是基于 alpine 的 node 镜像 mhart/alpine-node:7

alpine 是我们日常比较推荐的镜像，最小的只有 4M 左右。之后是一些常用的包的安装，具体可以参看 Dockerfile。在运行时，会将 mybot.js 映射到容器内部，这样就相当于把运行环境和具体的应用进行了隔离。

## 3 其他例子

hello-world 一般只是最简单的例子，这个框架真正厉害的是包含了其他一些用例，具体位于<https://github.com/wechaty/wechaty/tree/master/example>

其中包含了：

1. api-ai-bot.ts : 通过调用 api.ai，进行人工智能方面的识别
1. contact-bot.ts : 列举的好友 weixin id 和 name
1. ding-dong-bot.ts : 一个自动回复例子，如果好友输入’ding’，自动回复’dong’
1. friend-bot.ts : 添加好友，同意添加，消息验证的例子
1. media-file-bot.ts : 多种不同消息类型十倍的例子，保存 media-file 到本地
1. room-bot.ts : 对于聊天组的一系列例子，包括查找、添加、删除、改主题、监控组事件等等
1. speech-to-text-bot.ts : 当收到语音时，调用第三方接口，转换成文字，用户可以根据需求选择不同的语音识别 API
1. tuling123-bot.ts : 国内的一个机器人集成例子

其实细心的朋友，看到这里会问，到底这个框架能否支持动态抢红包呢？这就留给有兴趣的朋友去研究了。同时，我们也会在后续分享一些其他的开源项目介绍。

## 4 通过 Ghostcloud EcOS 部署 wechaty

EcOS (Enterprise container Operation System)是由 Ghostcloud 精灵云全自主研发的 Docker 容器云平台, 为企业研发、运维及新业务上线部署提供了一整套解决方案和管理平台。通过 EcOS 用户可以快速在私有云和混合云环境安装 Docker，官方地址是：www.ghostcloud.cn

Ghostcloud EcOS，安装步骤如下：

1. 浏览器访问 <http://ecospkg.ghostcloud.cn/EcOS/stable/> ， 下载最新的安装文件（EcOS-install\*）和服务镜像文件(srvimgs.tgz)到需要安装的服务器根目录
1. 解压安装文件，执行安装脚本: tar -zxf Ecos-install\* && bash install.sh IPADDR(这里的 IPADDR 是安装 EcOS 所在的服务器 IP 地址)
1. 解压服务镜像文件，执行 push 镜像操作 tar -zxvf srvimgs.tag && ./srvimgs/pushimgs.sh
1. 详细安装步骤请移步至：<http://ecospkg.ghostcloud.cn/EcOS/video/EcOS_Install.mp4>

部署

1）创建 wechaty 服务

通过 EcOS 平台创建 wechaty 容器（容器具体操作见
<http://ecospkg.ghostcloud.cn/EcOS/video/EcOS_Contianer.mp4>）
镜像选择 wechaty:latest, 创建启动选择为是，可适当的增加内存容量（允许容器使用的内存）

2）监听 wechaty 容器的日志

使用 putty 或其他 ssh 客户端工具登录到创建 wechaty 容器的主机，执行
docker logs -f wechaty

![Log][ghostcloud-log]

扫描日志中的二维码或将 URL 地址复制到浏览器中扫描，然后正常的使用微信，可以看到终端中会有相关信息。

[ghostcloud-banner]: /assets/2016/ghostcloud-banner.webp
[ghostcloud-log]: /assets/2016/ghostcloud-log.webp
[ghostcloud-message]: /assets/2016/ghostcloud-message.webp
[ghostcloud-qrcode]: /assets/2016/ghostcloud-qrcode.webp
