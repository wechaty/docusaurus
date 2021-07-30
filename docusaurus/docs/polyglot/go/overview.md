---
slug: /polyglot/go/
title: Go Wechaty
sidebar_label: Go
---

[![Go Wechaty](https://img.shields.io/badge/Wechaty-Go-7de)](https://github.com/wechaty/go-wechaty)

Go-Wechaty is the Go- Programming language client.Wechaty is already is implemented in TypeScript so can be easily translated to Go language as Wechaty has only three thousand (3,000) lines of the TypeScript code, they are well designed and de-coupled by the wechaty-puppet abstraction.Wechaty already has an ecosystem in TypeScript, so you will not have to implement everything in Go, especially, in the Feb 2020, we have finished the grpc service abstracting module with the wechaty-puppet-service implementation.For more information on the Go-Wechaty you can visit[Github Repo](https://github.com/wechaty/go-wechaty)
More details on  Go Wechaty And WeChat Web Protocol can be [check here](https://wechaty.js.org/2021/04/16/go-wechaty-use-web/).
The [Polyglot Architecture Diagram](https://wechaty.js.org/docs/polyglot/diy/) illustrates on how the Wechaty-Go can be implemented on the already existing TypeScript Wechaty ecosystem.

## Getting Started

You can run the below commands for starting the Go-Wechaty.Also for more information you can check the [Go-Wechaty getting started](<https://github.com/wechaty/go-wechaty-getting-started>).

```sh
git clone git@github.com:wechaty/go-wechaty-getting-started.git
cd go-wechaty-getting-started
make install
# set token
export WECHATY_PUPPET_SERVICE_TOKEN=your_token_at_here
# Run the bot
make bot
```

## Blogs

Here in this section are some of the blogs related to Go-Wechaty.

* [Go-Wechaty and web protocol to develop robots, @dchaofei, Apr 16, 2021](https://wechaty.js.org/2021/04/16/go-wechaty-use-web/)

## History 

Check out the links below for Beta releases of Go-Wechaty also for more information on the .

* [Go Wechaty Beta Released!, dchaofei, Jun 29, 2020](https://wechaty.js.org/2020/06/29/go-wechaty-beta-released/)

## Maintainers

* [@dingdayu](https://github.com/dingdayu)
* [@dchaofei](https://wechaty.js.org/contributors/dchaofei)
