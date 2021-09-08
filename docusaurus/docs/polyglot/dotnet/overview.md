---
slug: /polyglot/dotnet/
title: '.NET Wechaty'
sidebar_label: .NET
---

[![.NET Wechaty](https://img.shields.io/badge/Wechaty-.NET-blueviolet)](https://github.com/wechaty/dotnet-wechaty)

.NET Wechaty is the translation of the TypeScript version of Wechaty using .Net Core. As .Net Core supports cross-platform, so .NET Wechaty also supports cross-platform. It has been tested and passed under different operating systems like Windows, Centos, Ubuntu, and has not been tested on the MacOs yet. For more information on .NET Wechaty you can visit the [.NET Wechaty Getting started](https://github.com/wechaty/dotnet-wechaty-getting-started) and to check out the code structure you can visit its [Github repo](https://github.com/wechaty/dotnet-wechaty).

## Getting Started

You can run the below commands for starting the. NET-Wechaty.

```sh
git clone git@github.com:wechaty/dotnet-wechaty-getting-started.git
cd dotnet-wechaty-getting-started
# install Nuget Package
nuget restore
# Set token for your bot open appsettings.json set wechaty configuration
"WECHATY_PUPPET": "wechaty-puppet-hostie",
"WECHATY_PUPPET_HOSTIE_TOKEN": "token"
# Run the bot as
visual studio  F5 
# or
dotnet run
```

## Translation of TypeScript to .NET

There is a hundred (100) lines class named Image in charge of downloading the WeChat image to different sizes. Below are the links to the Image class for both TypeScript and .NET for a better understanding of the code and the translation.

TypeScript: <https://github.com/wechaty/wechaty/blob/master/src/user/image.ts>
C#: <https://github.com/wechaty/dotnet-wechaty/blob/master/src/Wechaty/User/Image.cs>

## History

For more information on the. NET-Wechaty releases and history, visit the link below.

* [How .NET Wechaty uses PadLocal Puppet Service, Darren, Jan 28, 2021](https://wechaty.js.org/2021/01/28/csharp-wechaty-for-padlocal-puppet-service/)
* [.NET Wechaty Getting Start, Darren, Dec 31, 2020](https://wechaty.js.org/2020/12/31/dotnet-wechaty-getting-start/)

## Maintainers

* [@echofool](https://github.com/echofool)
* [@jesn](https://wechaty.js.org/contributors/jesn)
