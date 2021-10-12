---
title: "Go开发微信群聊互动机器人"
author: blueseashore
categories: tutorial
tags:
  - golang
  - padplus
image: /assets/2021/04-wechat-group-chat-interactive-robot/header.webp
---

公司小程序的相关通知需要及时、定时推送到相关的群，由于微信web网页登录基本全部被封建，所有在查阅了大量微信机器人的资料后，选择了wechaty进行机器人开发，
以此达到用户可以通过指令进行绑定微信群、查询活动、活动推送等功能，借此提高用户粘性，提高活动的达成率。

## 功能

自动通过好友、自动同意入群、绑定/解绑微信群、#活动指令交互、消息池消息推送（同步/异步）、异常退出监测并重启

## 部署环境

Go 1.14.6 darwin/amd64、Mysql 5.7、Redis 6.0

## 购买Token

[chatTools平台]购买Token(http://120.55.60.194/)

## 下载代码

```sh
git clone https://github.com/blueseashore/wechaty-go.git && cd wechaty-go
```

## 配置环境变量

```sh
export WEROBOT_TOKEN = xxx
export REDIS_PORT = 6379
export WEROBOT_LOGFILE = /tmp/robot.log
```

## 编译可执行文件werobotctl和werobotd

```sh
go build -o ./bin/werobotctl
cd room
go build -o ../bin/werobotd
cd ../bin
./werobotctl start
```

## 运行效果

![启动效果图](/assets/2021/04-wechat-group-chat-interactive-robot/start.webp)
![指令效果图](/assets/2021/04-wechat-group-chat-interactive-robot/bind.webp)

## 其他Tips

需要配置环境变量，需要替换指令功能的API地址

## 感谢

感谢[Wechaty](https://wechaty.js.org/)团队提供微信机器人SDK，让开发者可以专注于业务代码。
感谢[句子互动](https://www.juzibot.com)提供的pad协议版token。

[![Powered by Wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-brightgreen.svg)](https://wechaty.js.org)

> 作者: [blueseashore](https://github.com/blueseashore)
> Code: [Github](https://github.com/blueseashore/wechaty-go)
> Email: 455019825@qq.com
