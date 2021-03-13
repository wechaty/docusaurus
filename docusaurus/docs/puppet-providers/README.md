---
slug: /puppet-providers/
title: Wechaty Puppet Providers
sidebar_label: 'Puppet Providers: Index'
---

[![Wechaty Puppet WeChat](https://img.shields.io/badge/Puppet-WeChat-blueviolet)](wechat)
[![Wechaty Puppet Whatsapp](https://img.shields.io/badge/Puppet-Whatsapp-blueviolet)](whatsapp)
[![Wechaty Puppet Official Account](https://img.shields.io/badge/Puppet-Official%20Account-blueviolet)](official-account)
[![Wechaty Puppet Gitter](https://img.shields.io/badge/Puppet-Gitter-blueviolet)](gitter)
[![Wechaty Puppet Lark](https://img.shields.io/badge/Puppet-Lark-blueviolet)](lark)
[![Wechaty Puppet PadLocal](https://img.shields.io/badge/Puppet-PadLocal-blueviolet)](padlocal)
[![Wechaty Puppet WeChat4U](https://img.shields.io/badge/Puppet-WeChat4U-blueviolet)](wechat4u)
[![Wechaty Puppet Service](https://img.shields.io/badge/Puppet-Service-blueviolet)](service)
[![Wechaty Puppet Mock](https://img.shields.io/badge/Puppet-Mock-blueviolet)](mock)

For different instant messaging (IM) systems (such as WeChat, Whatsapp, and TikTok), the Wechaty community builds separate RPA modules for each, and we call those modules [Wechaty Puppet](https://github.com/wechaty/wechaty-puppet).

Wechaty Puppet Provider is an NPM module for a specific IM protocol Wechaty Puppet.

```sh
npm install wechaty-puppet-NAME
export WECHATY_PUPPET=wechaty-puppet-NAME
npm start
```

> You can switch between different Wechaty Puppet Provider by changing your `WECHATY_PUPPET` environment variable. All your source code should work between different tokens without any changes.

## Wechaty Puppet Providers

Now, we have the following Wechaty Puppet Providers:

| Name | Platform | Protocol | Stable |
| :---: | :---: | :---: | :---: |
| [WeChat](wechat/) | WeChat | Web | Beta |
| [Wahtsapp](whatsapp/) | Whatsapp | Web | Alpha |
| [Official Account](official-account/) | WeChat Official Account | API | Alpha |
| [Gitter](gitter/) | Gitter | API | Alpha |
| [Lark](lark/) | Lark | API | Alpha |
| [PadLocal](padlocal/) | WeChat | Pad | Beta |
| [WeChat4U](wechat4u/) | WeChat | Web | Alpha |
| [Service](service/) | Universal | gRPC | Beta |
| [Mock](mock/) | Universal | Mock | Beta |

## History

- [Wechaty Puppet Providers Trends, Huan, Mar 4, 2021](https://wechaty.js.org/2021/03/04/wechaty-puppet-providers-trends/)
- [Introducing Wechaty Puppet Service, Huan, Jan 14, 2021](https://wechaty.js.org/2021/01/14/wechaty-puppet-service/)

## See Also

If you want to learn more about the concepts behind Wechaty Puppet Provider, you can read:

1. [Wechaty Puppet Specification](specifications/puppet.md)
1. [Introducing Wechaty Puppet Service](https://wechaty.js.org/2021/01/14/wechaty-puppet-service/)
