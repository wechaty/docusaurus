---
slug: /puppet-providers/
title: Wechaty Puppet Providers
sidebar_label: 'Puppet Providers: Index'
---

For different instant messaging (IM) systems (such as WeChat, Whatsapp, and TikTok), the Wechaty community builds separate RPA modules for each, and we call those modules [Wechaty Puppet](https://github.com/wechaty/wechaty-puppet).

Wechaty Puppet Provider is an NPM module for a specific IM protocol Wechaty Puppet.

```sh
npm install wechaty-puppet-NAME
export WECHATY_PUPPET=wechaty-puppet-NAME
npm start
```

> You can switch between different Wechaty Puppet Provider by changing your `WECHATY_PUPPET` environment variable. All your source code should work between different tokens without any changes.

## What is Wechaty Puppet Provider

If you want to learn more about the concepts behind TOKEN, please read our blog post: [Introducing Wechaty Puppet Service](https://wechaty.js.org/2021/01/14/wechaty-puppet-service/)

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
