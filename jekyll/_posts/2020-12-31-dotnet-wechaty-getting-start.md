---
title: ".NET Wechaty Getting Start"
author: jesn
categories: tutorial
tags:
  - dotnet
  - csharp
  - getting-started
image: /assets/2020/12-dotnet-wechaty/dotnet-wechaty.webp
---

.NET Wechaty 是使用.Net Core对TS版本Wechaty的翻译。

.Net Core 支持跨平台，因此.NET Wechaty同样也支持跨平台,目前在Windows,Centos,Ubuntu 下已测试通过，Mac未测试，如果有Mac系统的欢迎测试，ARM架构的目前只测试Raspberry，但是GRPC连接有问题，问题待排查。

[.NET Wechaty](https://github.com/wechaty/dotnet-wechaty)

[dotnet-wechaty-getting-started](https://github.com/wechaty/dotnet-wechaty-getting-started)

## .NET Wechaty Geetting Start

### 新建一个控制台程序

新建一个.Net Core 3.1 控制台程序

![创建console控制台程序](/assets/2020/12-dotnet-wechaty/console-project.webp)

### 添加Nuget包

只需要引用Wechaty一个Nuget包即可，其他相关包会自动引入

![添加Wechaty Nuget包](/assets/2020/12-dotnet-wechaty/add-wechaty-nuget.webp)

### 6行代码运行一个Bot

```csharp
// 初始化一个bot
var bot = new Wechaty.Wechaty(new PuppetOptions()
{
    // 如何申请token，请看：https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty
    Token = "your token",
    PuppetService = "wechaty-puppet-service"
});

 // 监听bot事件
 await bot
  .OnScan((string qrcode, ScanStatus status, string? data) => { })
  .OnLogin((ContactSelf user) => { })
  .OnMessage((Message message) => { })
  .OnHeartbeat((object data) => { })
  .Start();
```

### 实现ding dong 最简单的功能

```csharp
 await bot
  .OnScan((string qrcode, ScanStatus status, string? data) => { })
  .OnLogin((ContactSelf user) => { })
  .OnMessage((Message message) => {
         // 如果接收到的文本消息为 ding
        if (message.Text == "ding")
        {
            // 则发送一个文本: dong
            message.Say("dong");
        }
   })
  .OnHeartbeat((object data) => { })
  .Start();
```

### 完整代码

```csharp
using System;
using System.Threading.Tasks;
using Wechaty.Module.Puppet.Schemas;
using Wechaty.User;

namespace dotnet_wechaty_getting_start
{
    class Program
    {
        static async Task Main(string[] args)
        {
            // 初始化一个bot
            var bot = new Wechaty.Wechaty(new PuppetOptions()
            {
                Token = "puppet_rock_4448d7e832fd436c9f2a1d33eea8e865",
                PuppetService = "wechaty-puppet-service"
            });

            // 监听bot事件
            await bot
                .OnScan((string qrcode, ScanStatus status, string? data) =>
                {
                    const string QrcodeServerUrl = "https://wechaty.js.org/qrcode/";
                    if (status == ScanStatus.Waiting || status == ScanStatus.Timeout)
                    {
                        var qrcodeImageUrl = QrcodeServerUrl + qrcode;
                        Console.WriteLine(qrcodeImageUrl);
                    }
                    else if (status == ScanStatus.Scanned)
                    {
                        Console.WriteLine(data);
                    }
                })
                .OnLogin((ContactSelf user) => { })
                .OnMessage((Message message) =>
                {
                    if (message.Text == "ding")
                    {
                        message.Say("dong");
                    }

                })
                .OnHeartbeat((object data) => { })
                .Start();

            Console.ReadLine();

        }
    }
}

```

## Wechaty 社区

### 社区信息

:octocat: <https://github.com/Wechaty/wechaty>  
:beetle: <https://github.com/Wechaty/wechaty/issues>  
:book: <https://github.com/Wechaty/wechaty/wiki>  
:whale: <https://hub.docker.com/r/wechaty/wechaty>  

### 多语言Wechaty

[![Python Wechaty](https://img.shields.io/badge/Wechaty-Python-blue)](https://github.com/wechaty/python-wechaty)
[![Go Wechaty](https://img.shields.io/badge/Wechaty-Go-7de)](https://github.com/wechaty/go-wechaty)
[![Java(Kotlin) Wechaty](https://img.shields.io/badge/Wechaty-Java-f80)](https://github.com/wechaty/java-wechaty)
[![Scala Wechaty](https://img.shields.io/badge/Wechaty-Scala-890)](https://github.com/wechaty/scala-wechaty)
[![PHP Wechaty](https://img.shields.io/badge/Wechaty-PHP-99c)](https://github.com/wechaty/php-wechaty)
[![.NET(C#) Wechatyin](https://img.shields.io/badge/Wechaty-.NET-629)](https://github.com/wechaty/dotnet-wechaty)

- [Wechaty](https://github.com/wechaty/wechaty) - Conversatioanl SDK for Chatot Makers (TypeScript)
- [Python Wechaty](https://github.com/wechaty/python-wechaty) - RPA SDK for Chatbot Makers written in Python
- [Go Wechaty](https://github.com/wechaty/go-wechaty) - RPA SDK for Chatbot Makers written in Go
- [Java Wechaty](https://github.com/wechaty/java-wechaty) - RPA SDK for Chatbot Makers written in Java(Kotlin)
- [Scala Wechaty](https://github.com/wechaty/scala-wechaty) - RPA SDK for Chatbot Makers written in Scala
- [PHP Wechaty](https://github.com/wechaty/php-wechaty) - RPA SDK for Chatbot Makers written in PHP
- [.Net(C#) Wechaty](https://github.com/wechaty/dotnet-wechaty) - RPA SDK for Chatbot Makers written in .NET(C#)

## Join Wechaty

![Wechaty Friday.BOT QR Code](https://wechaty.js.org/img/friday-qrcode.svg)  

口令：`wechaty`

## .NET Wechaty Contributors 招募

如果您对.NET 感兴趣，对Wechaty感兴趣欢迎加入.NET Wechaty Tearm
[#pr-24](https://github.com/wechaty/dotnet-wechaty/issues/24)
有任何关于.NET Wechaty的开发问题，可以在该issue下提问
