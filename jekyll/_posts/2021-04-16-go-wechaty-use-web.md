---
title: "教你用go-wecahty和web协议开发机器人"
author: dchaofei
categories: article
tags:
  - code
  - wechaty-puppet-wechat
  - web-protocol
  - go
image: /assets/2021/04-go-wechaty-use-web/struct.webp
---

写这篇文章的原因: 最近发现 web 协议以某种方式又复活了，所以想让 go-wechaty 的小伙伴也能使用 web 协议。

## 前言

大家都知道目前微信有 web、mac、pad、windows 等平台, 如果想实现一个微信自动化机器人就需要了解这些平台所使用的协议，
而 web 平台我们可以看到 js 代码，相对来说是比较简单，其他平台就需要去 hook 或者反编译才能了解底层协议，正因为这些平台实现难度比较大所有没有开源的代码。

虽然难度比较大，但还是有人实现了这些协议，但是会以服务的方式提供出来，如果我们要想使用这些协议就必须找服务提供者商
`申请token` 或者`购买token`。

go-wechaty 与 服务提供商的交互如下图
![交互图](/assets/2021/04-go-wechaty-use-web/struct.webp)

1. go-wecahty 首先会用之前我们购买或申请的 token 通过网关获取到服务提供商 token 所对应的服务器地址
2. 然后用获取到的服务器地址与 puppet 服务进行直接连接

可能购买或申请 token 会阻挡大多开发者开发微信机器人的想法，但是既然 web 协议可以用了，我们就可以自实现 puppet service了。

## 如何使用

一、先用 @huan 提供的镜像启动一个 web 协议的 puppet-service

```bash
export WECHATY_LOG="verbose"
export WECHATY_PUPPET="wechaty-puppet-wechat"
export WECHATY_PUPPET_SERVER_PORT="30001"
export WECHATY_TOKEN="3d415ebb-7a6f-4cba-b602-1f4ae400f011"

docker run -ti \
--name wechaty_puppet_service_token_gateway \
--rm \
-e WECHATY_LOG \
-e WECHATY_PUPPET \
-e WECHATY_PUPPET_SERVER_PORT \
-e WECHATY_TOKEN \
-p "$WECHATY_PUPPET_SERVER_PORT:$WECHATY_PUPPET_SERVER_PORT" \
wechaty/wechaty:latest
```

当看到有输出 `Online QR Code Image: https://wechaty.js.org/qrcode/xxxx` 就说明启动成功了

`WECHATY_PUPPET_SERVER_PORT` 环境变量是我们启动 web 协议 puppet service 提供的端口

`WECHATY_TOKEN` 是我们随机生成的字符串，用于把当前puppet service 注册到 puppet 网关

二、启动 go-wecahty 写的一个简单的 ding-dong 机器人

```bash
git clone https://github.com/wechaty/go-wechaty-getting-started.git

WECHATY_PUPPET_SERVICE_ENDPOINT=127.0.0.1:30001 make bot

```

这个机器人只有一个功能，收到 ding 就会回复 dong

执行启动命令输出的结果，看到二维码链接我们就可以点击然后用微信扫码登录了

```bash
$ WECHATY_PUPPET_SERVICE_ENDPOINT=127.0.0.1:30001 make bot
// stdout
go run examples/ding-dong-bot.go
2021/04/16 19:44:18 PuppetService Start()
2021/04/16 19:44:18 PuppetService onGrpcStreamEvent({type:EVENT_TYPE_SCAN payload:{"qrcode":"https://login.weixin.qq.com/l/wZG2J5sZrw==","status":5}})
Scan QR Code to login: ScanStatusTimeout
https://wechaty.js.org/qrcode/https://login.weixin.qq.com/l/wZG2J5sZrw==
2021/04/16 19:44:45 PuppetService ContactRawPayload(@d9b0073d47ec85dcfbe8b0427c3da085067103aa721478f77db1cad011267bc7)
Scan QR Code to login: ScanStatusConfirmed
https://wechaty.js.org/qrcode/https://login.weixin.qq.com/l/wZG2J5sZrw==
2021/04/16 19:44:45 PuppetService onGrpcStreamEvent({type:EVENT_TYPE_LOGIN payload:{"contactId":"@d9b0073d47ec85dcfbe8b0427c3da085067103aa721478f77db1cad011267bc7"}})
2021/04/16 19:44:45 PuppetService ContactRawPayload(@d9b0073d47ec85dcfbe8b0427c3da085067103aa721478f77db1cad011267bc7)
User 微信昵称 logined
```

然后我们向机器人发送一个 ding, 机器人就会回复一个 dong
![ding-dong](/assets/2021/04-go-wechaty-use-web/ding.webp)

如果启动机器人不想依赖环境变量，也可以写在代码里

```go
// Endpoint 和 Token 二选一
var bot = wechaty.NewWechaty(wechaty.WithPuppetOption(wp.Option{
        Endpoint: "127.0.0.1:30001",
        //Token: "3d415ebb-7a6f-4cba-b602-1f4ae400f011",
        Timeout: time.Duration(2*time.Minute),
}))
```

## 🔗

- go wechty: [https://github.com/wechaty/go-wechaty](https://github.com/wechaty/go-wechaty)
- ding-dong bot: [https://github.com/wechaty/go-wechaty-getting-started](https://github.com/wechaty/go-wechaty-getting-started )
- web协议复活: [https://wechaty.js.org/2021/04/13/wechaty-uos-web/](https://wechaty.js.org/2021/04/13/wechaty-uos-web/)
- Go Wechaty Getting Started: [https://wechaty.js.org/docs/polyglot/go/](https://wechaty.js.org/docs/polyglot/go/)
- puppet-providers: [https://wechaty.js.org/docs/puppet-providers/wechat](https://wechaty.js.org/docs/puppet-providers/wechat)

> 作者: [dchaofei](https://github.com/dchaofei)，go开发工程师，go-wechaty 作者
