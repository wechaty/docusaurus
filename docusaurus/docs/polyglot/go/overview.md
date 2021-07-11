---
slug: /polyglot/go/
title: Go Wechaty
sidebar_label: Go
---

[![Go Wechaty](https://img.shields.io/badge/Wechaty-Go-7de)](https://github.com/wechaty/go-wechaty)

Wechaty is already is implemented in TypeScript.It can be easily translated to Go language as Wechaty has only three thousand (3,000) lines of the TypeScript code, they are well designed and de-coupled by the wechaty-puppet abstraction.Wechaty already has an ecosystem in TypeScript, so you will not have to implement everything in Go, especially, in the Feb 2020, we have finished the grpc service abstracting module with the wechaty-puppet-service implmentation.
More details on  Go Wecahty And WeChat Web Protocol can be [checked here](https://wechaty.js.org/2021/04/16/go-wechaty-use-web/)
The following diagram illustrates on how the Wechaty-Go can be implement on the alreay existing TypeScript Wechaty ecosystem.

## Getting Started

You can run the below commands for starting the Wechaty-Go.

```sh
git clone git@github.com:wechaty/go-wechaty-getting-started.git
cd go-wechaty-getting-started
make install
make bot
```

## Blogs

- [教你用go-wecahty和web协议开发机器人, @dchaofei, Apr 16, 2021](https://wechaty.js.org/2021/04/16/go-wechaty-use-web/)

## History

- [Go Wechaty Beta Released!, dchaofei, Jun 29, 2020](https://wechaty.js.org/2020/06/29/go-wechaty-beta-released/)

## Maintainers

- [@dingdayu](https://github.com/dingdayu)
- [@dchaofei](https://wechaty.js.org/contributors/dchaofei)
