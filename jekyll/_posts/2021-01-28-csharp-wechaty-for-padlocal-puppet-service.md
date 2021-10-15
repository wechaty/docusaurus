---
title: .NET Wechaty如何使用PadLocal Puppet Service
author: jesn
tags:
  - dotnet
  - csharp
  - puppet-service
categories: tutorial
image: /assets/2021/01-csharp-wechaty-for-padlocal-puppet-service/dotnet-wechaty.webp
---

## .NET Wechaty 如何使用 PadLocal Puppet Service

### PadLocal 介绍

至于什么是PadLocal的详细介绍我这里就不累述了，把相关的文档贴在这里，大家可以去仔细的查看

- [New Wechaty Puppet Service: PadLocal](https://wechaty.js.org/2020/10/12/puppet-padlocal-intro/)
- [wechaty-puppet-padlocal](https://github.com/padlocal/wechaty-puppet-padlocal)
- [wechaty-puppet-padlocal-demo](https://github.com/padlocal/wechaty-puppet-padlocal-demo)
- [TOKEN 申请方法](https://wechaty.js.org/docs/puppet-services/) 或者在 `Wechaty Contributors` 群 @好大

### 部署Wechaty Gateway

- `WECHATY_PUPPET_PADLOCAL_TOKEN`  是你的PadLocal token，前缀 `puppet_padlocal_` 请勿去掉
- `WECHATY_TOKEN` 可以随机生成一个GUID作为你GateWay的token，可以访问改地址随机生成：[https://www.uuidgenerator.net/version4](https://www.uuidgenerator.net/version4)
- `WECHATY_PUPPET_SERVER_PORT` 在设置端口前，请保证该端口没有被占用，如果是Linux系统，则可以通过 `netstat  -anp  |grep 端口` 命令检查该端口是否被占用

```csharp
# 设置环境变量

export WECHATY_LOG="verbose"

export WECHATY_PUPPET="wechaty-puppet-padlocal"
export WECHATY_PUPPET_PADLOCAL_TOKEN="puppet_padlocal_XXX"

export WECHATY_PUPPET_SERVER_PORT="9001"
export WECHATY_TOKEN="0c7b8f97-f3cc-40a5-a537-d492fd689801"

# 运行docker
docker run -ti \
  --name wechaty_puppet_service_token_gateway \
  --rm \
  -e WECHATY_LOG \
  -e WECHATY_PUPPET \
  -e WECHATY_PUPPET_PADLOCAL_TOKEN \
  -e WECHATY_PUPPET_SERVER_PORT \
  -e WECHATY_TOKEN \
  -p "$WECHATY_PUPPET_SERVER_PORT:$WECHATY_PUPPET_SERVER_PORT" \
  wechaty/wechaty:0.56
  
```

### 多语言Wechaty对接GateWay

在对接Gateway的时候，这里需要注意下，如果GateWay的是部署在公网可以访问的服务器上，则我们可以直接设置 `WECHATY_TOKEN` 即可连接，如果是部署在自己内网服务器上，这里则需要指定自己服务器的 `IP`  和 `Port` ，其他的多语言版本也是类似，其他的地方就没有什么变动的。<br />我这里以 .NET Wechaty 为例做个说明：

```csharp
// GateWay 部署在 dev.chatie.io
var PuppetOptions = new Module.Puppet.Schemas.PuppetOptions()
{
    Token = "0c7b8f97-f3cc-40a5-a537-d492fd689801",
};


// GateWay部署在自己的服务器上
var PuppetOptions = new Module.Puppet.Schemas.PuppetOptions()
{
    Token = "0c7b8f97-f3cc-40a5-a537-d492fd689801",
    Endpoint = "192.168.1.100:9004"
};
```

```bash
info: Wechaty.Wechaty[0]
      init puppet event bridge
info: Microsoft.Hosting.Lifetime[0]
      Application started. Press Ctrl+C to shut down.
info: Microsoft.Hosting.Lifetime[0]
      Hosting environment: Production
info: Microsoft.Hosting.Lifetime[0]
      Content root path: D:\coding\github\wechaty\dotnet\dotnet-wechaty\src\Wechaty.Getting.Start\bin\Debug\netcoreapp3.1
info: Wechaty.Module.Puppet.WechatyPuppet[0]
      dateTime:2021-01-28 17:53:00 Login,PayLoad:{"contactId":"xiaoxianxian"}
"onGrpcStreamEvent(Login)"
info: Wechaty.Module.Puppet.WechatyPuppet[0]
      dateTime:2021-01-28 17:53:04 Message,PayLoad:{"messageId":"379439903307716939"}
"onGrpcStreamEvent(Message)"
info: Wechaty.Module.Puppet.WechatyPuppet[0]
      dateTime:2021-01-28 17:53:06 Message,PayLoad:{"messageId":"1921871762129872913"}
"onGrpcStreamEvent(Message)"
<msg>
<op id='11'>
<name>HandOffMaster</name>
<arg><handofflist opcode="4" seq="1528" deviceid="A1ce85b51b227c93" networkstatus="wifi">

        </handofflist></arg>
</op>
</msg>
```

### .NET Wechaty Getting Start

 6行命令启动一个 `.NET Wechaty` 服务

```csharp
var PuppetOptions = new PuppetOptions()
{
    Token = "0c7b8f97-f3cc-40a5-a537-d492fd689801",
};
 bot = new Wechaty.Wechaty(PuppetOptions);

 await bot.OnScan(WechatyScanEventListener)
     .OnLogin(WechatyLoginEventListener)
     .OnMessage(WechatyMessageEventListenerAsync)
     .OnHeartbeat(WechatyHeartbeatEventListener)
     .Start();
```

具体的使用可以查看` dotnet-wechaty-getting-started `

- [.NET Wechaty](https://github.com/wechaty/dotnet-wechaty)
- [dotnet-wechaty-getting-started](https://github.com/wechaty/dotnet-wechaty-getting-started)
- 之前我写过一篇博客介绍如何使用[.NET Wechaty](https://wechaty.js.org/2020/12/31/dotnet-wechaty-getting-start/)，大家可以通过这里了解如何使用

### dev.chatie.io 服务器申请

- Wechaty Contributor Server Host 是由微软 MVP Sponsorship 赞助的，只针对 [Wechaty Contributor Program](https://wechaty.js.org/docs/contributor-program/) 的 `Contributor` 使用，具体的申请方式请查看 [PMC-issue-13](https://github.com/wechaty/PMC/issues/13)。
- 如何成为 `Wechaty Contributor` 可以通过该链接查看 [https://wechaty.js.org/docs/contributor-program/](https://wechaty.js.org/docs/contributor-program/)

## Blogs

1. [Introducing Wechaty Puppet Service (Providers), @huan, Jan 14, 2021](https://wechaty.js.org/2021/01/14/wechaty-puppet-service/)
