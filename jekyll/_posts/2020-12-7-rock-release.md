---
title: "Wechaty Puppet Service Rock Beta版发布公告"
author: lijiarui
categories: announcement
tags:
  - news
  - puppet-service-provider
  - rock
image: /assets/2020/12-07-rock/rock.jpeg
---

恭喜 Rock 作为 Wechaty 社区新的 Puppet Service 正式进入 Beta 版！经过历时一个月的测试，Rock 现在已经通过社区验证，可以正式售卖给社区的小伙伴了！

想要使用的，请点击[Rock 购买链接](https://github.com/wechaty/puppet-service-providers#buy-token) 购买吧！

## 关于 Rock

Rock 的作者是 [jcai](https://wechaty.js.org/developers/jcai/) scala-wechaty 作者,基于 wechaty-puppet-hostie 做的新 puppet service，自由职业者,scala狂热爱好者！

通过 Scala Wechaty 认识了阿蔡，后来他决定做 Wechaty Puppet Service Provider，很快就上线了 Rock 服务。我带大家一起回顾一下 Wechaty Puppet Service Rock Beta 版的发布历程：

## Rock 的 Alpha Release

首先，他先通过了 Wechaty 的 Alpha Release 阶段，并发了很多token给了参与内测的开发者：

- [x] 写一篇博客介绍这个新的puppet: <https://wechaty.js.org/2020/10/19/rock/>
- [x] 写一个 getting started 告诉开发者如何将这个 puppet 跑起来: <https://github.com/wechaty/puppet-service-providers/issues/2>
- [x] puppet service provider 的 token 要通过 api.chatie.io 发布，以最大化提升开发者社区体验。
- [x] token 设置规范为：puppet_rock_XXX

为了能让开发者更好的了解如何运行 rock, 在这里给出大家运行的最小化代码：

```ts
import { Wechaty } from 'wechaty'
import { ScanStatus } from 'wechaty-puppet'
import QrcodeTerminal from 'qrcode-terminal';

const token = 'get a rock token from: https://github.com/wechaty/puppet-service-providers#buy-token'

const bot = new Wechaty({
  puppet: 'wechaty-puppet-hostie', // 注意这里是 wechaty-puppet-hostie 而不是 wechaty-puppet-rock
  puppetOptions: {
    token
  }
});

bot
  .on('scan', (qrcode, status) => {
    if (status === ScanStatus.Waiting) {
      QrcodeTerminal.generate(qrcode, {
        small: true
      })
    }
  })
  .on('login', async user => {
    console.log(`user: ${JSON.stringify(user)}`)
  })
  .on('message', async message => {
    console.log(`message: ${JSON.stringify(message)}`)
  })
  .start()
```

### 介绍 wechaty-puppet-hostie

> This part is written by Huan

在 Wechaty 的发展过程中，我们曾经发布过很多 Wechaty Puppet ，比如 Web 协议的 wechaty-puppet-puppeteer， Pad 协议的 wechaty-puppet-padplus ，Mac 协议的 wechaty-puppet-macpro，iOS 协议的 wechaty-puppet-iosbird ，等等。

所以，如果你是一个随着 Wechaty 发展一路走来的开发者，那么你会记得，过去每一个不同的协议，我们都需要在运行 Wechaty 的本地环境中，安装上述的 NPM 包，来启用对应的协议。

然而，Wechaty 社区在发展过程中，我们发现其实针对不同的协议，其核心的区别在于 Wechaty Puppet Abstract Class 这个抽象层之下的逻辑实现，而 Wechaty Puppet API 是完全一致的。所以，我们如果能够把 Wechaty Puppet API 及其之上层的代码重用，而将其之下层面的代码进行 gRPC 化封装，这样我们就能够通过一个 Wechaty Puppet 的实现，最终得以支持不同的底层协议。这就是 wechaty-puppet-hostie 的由来。

简而言之，[Wechaty Puppet Hostie](https://github.com/wechaty/wechaty-puppet-hostie) 是一个可以兼容任意 Wechaty Puppet 协议的模块，Wechaty 只需要安装 wechaty-puppet-hostie ，然后通过设置 `WECHATY_PUPPET_HOSTIE_TOKEN`，即可通过 gRPC 协议，与 token 所对应的 gRPC 服务器进行通讯，实现 Wechaty Puppet Service 化，而提供 Wechaty Puppet Service 的第三方，既是我们称之为 [Wechaty Puppet Service Provider](https://github.com/wechaty/puppet-service-providers) 的角色。

在未来，Wechaty 社区计划大部分的 Puppet Service 都将基于 wechaty-puppet-hostie 进行发布和使用。同时针对某些特定的 Puppet Service ，比如 [wechaty-puppet-padlocal](https://www.npmjs.com/package/wechaty-puppet-padlocal) ([PadLocal](https://github.com/padlocal/padlocal-client-ts)可以使用本地服务器 IP 与 Server 进行连接），也可以通过本地运行一个 Hostie Token Gateway 进行转换。（详见 [Issue #1986](https://github.com/wechaty/wechaty/issues/1986))

目前，在社区最佳实践中，使用 wechaty-puppet-hostie 的方法如下：

```sh
export WECHATY_PUPPET=wechaty-puppet-hostie
export WECHATY_PUPPET_HOSTIE_TOKEN=__YOUR_TOKEN__

// Start your bot with the above two variables
ts-node bot.ts
```

在上面的 `__YOUR_TOKEN__` 可以是任何的 Wechaty Puppet Service Token。了解如何获取 Wechaty Puppet Service Token 可以官网介绍： <https://wechaty.js.org/docs/puppet-service-provider/>

## Rock 的 Alpha Test

紧接着，rock 通过了 Alpha test 的内容，以下是 Rock 支持的功能清单，并和已有的Puppet进行对比。

### Puppet Comparison

Rock 支持的内容正在逐渐增强中，更新信息见：[Puppet Comparison](https://github.com/wechaty/puppet-service-providers/wiki/Basic-Test)

| Puppet         | rock                | donut    | padplus                        | wxwork   |
| -------------- | ------------------- | -------- | ------------------------------ | -------- |
| 支持账号       | 个人微信            | 个人微信 | 个人微信                       | 企业微信 |
| <消息>         |                     |          |                                |          |
| 收发文本       | ✅                   | ✅        | ✅                              | ✅        |
| 收发个人名片   | ✅                   | ✅        | ✅                              | ✅        |
| 收发图文链接   | ✅                   | ✅        | ✅                              | ✅        |
| 发送图片、文件 | ✅（较慢）           | ✅        | ✅（对内容有大小限制，20M以下） | ✅        |
| 接收图片、文件 | ✅                   | ✅        | ✅（对内容有大小限制，25M以下） | ✅        |
| 发送视频       | ✅（较慢）           | ✅        | ✅                              | ✅        |
| 接收视频       | ✅                   | ✅        | ✅                              | ✅        |
| 发送小程序     | ✅                   | ✅        | ✅                              | ✅        |
| 接收动图       | ❌                   | ❌        | ✅                              | ✅        |
| 发送动图       | ✅（以文件形式发送） | ✅        | ✅                              | ✅        |
| 接收语音消息   | ❌                   | ✅        | ✅                              | ✅        |
| 发送语音消息   | ❌                   | ❌        | ❌                              | ❌        |
| 转发文本       | ✅                   | ✅        | ✅                              | ✅        |
| 转发图片       | ✅                   | ✅        | ✅                              | ✅        |
| 转发图文链接   | ❌                   | ✅        | ✅                              | ✅        |
| 转发音频       | ❌                   | ✅        | ❌                              | ✅        |
| 转发视频       | ✅                   | ✅        | ✅                              | ✅        |
| 转发文件       | ✅                   | ✅        | ✅                              | ✅        |
| 转发动图       | ❌                   | ❌        | ❌                              | ✅        |
| 转发小程序     | ✅                   | ✅        | ✅                              | ✅        |
| <群组>         |                     |          |                                |          |
| 创建群聊       | ✅                   | ✅        | ✅                              | ✅        |
| 设置群公告     | ✅                   | ✅        | ✅                              | ✅        |
| 获取群公告     | ✅                   | ❌        | ✅                              | ❌        |
| 群二维码       | ❌                   | ❌        | ✅                              | ❌        |
| 拉人进群       | ✅                   | ✅        | ✅                              | ✅        |
| 踢人出群       | ✅                   | ✅        | ✅                              | ✅        |
| 退出群聊       | ✅                   | ✅        | ✅                              | ❌        |
| 改群名称       | ❌                   | ✅        | ✅                              | ✅        |
| 入群事件       | ✅                   | ✅        | ✅                              | ✅        |
| 离群事件       | ✅                   | ✅        | ✅                              | ✅        |
| 群名称变更事件 | ❌                   | ✅        | ✅                              | ✅        |
| @群成员        | ✅                   | ✅        | ✅                              | ✅        |
| 群列表         | ✅                   | ✅        | ✅                              | ✅        |
| 群成员列表     | ✅                   | ✅        | ✅                              | ✅        |
| 群详情         | ✅                   | ✅        | ✅                              | ✅        |
| <联系人>       |                     |          |                                |          |
| 修改备注       | ❌                   | ✅        | ✅                              | ✅        |
| 添加好友       | ❌                   | ✅        | ✅                              | ✅        |
| 自动通过好友   | ✅                   | ✅        | ✅                              | ✅        |
| 好友列表       | ✅                   | ✅        | ✅                              | ✅        |
| 好友详情       | ✅                   | ✅        | ✅                              | ✅        |
| <其他>         |                     |          |                                |          |
| 登录事件       | ✅                   | ✅        | ✅                              | ✅        |
| 扫码状态       | ❌                   | ❌        | ✅                              | ❌        |
| 登出事件       | ❌                   | ✅        | ✅                              | ✅        |
| 主动退出登录   | ✅                   | ✅        | ✅                              | ❌        |
| 依赖协议       | iPad                | Windows  | iPad                           | Windows  |

## Rock 的 Beta Test

接下来，Rock 正在经历我们的压力测试阶段

- [ ] 压力测试：
正在进行中....

| 项目名                   | 详情                                         | 状态                         |
| ------------------------ | -------------------------------------------- | ---------------------------- |
| crash                    | 崩溃，测扫码登录ready事件顺序是否正常        |                              |
| flood-message            | 群发消息，测大批量发消息是否都有回调         |                              |
| group-chat               | 群聊功能，测群加载人数，建群离群操作是否正常 |                              |
| loading                  | 加载，测加载时长，联系人和群的数量是否匹配   |                              |
| loading-lost-tag         | 测启动奔溃导致的标签备注丢失问题             |                              |
| receive-and-send-message | 测收发不同类型的消息都正常                   |                              |
| receive-small-image      | 测试是否有收不到小图片的情况                 | 测试是否有收不到小图片的情况 |

- [ ] 产品测试：
  - [ ] 通过[句子秒回](https://crm.botorange.com/)的在线测试，详见[Product Test](https://github.com/wechaty/puppet-service-providers/wiki/Product-Test)
  - [ ]Friday Bot 连续正常工作一周 <https://github.com/wechaty/friday>

Rock 的产品测试，已完成 70%

## Rock 的下一步

- 关于Rock 的最新进度，可以随时在这里查看： [rock 发布进展](https://github.com/wechaty/puppet-service-providers/issues/20)
- 使用过程中，有任何问题，欢迎[在这里发布 issue!](https://github.com/wechaty/puppet-service-providers/issues/new?assignees=jcai&labels=rock&template=rock.md&title=Rock%3A+)

## Rock 的多语言进展

- go: need later version 0.2.0 (see wechaty/go-wechaty#69 )
- python:need later version 0.4.1 (see wechaty/python-wechaty-puppet-hostie#35)
- java: see wechaty/java-wechaty#77

## 最后，要在此感谢 puppet provider 为社区持续做出如下贡献：

1. 为每个wechaty contributor提供2个免费token
2. 未申请开源激励计划的开发者，提供15天的免费测试token
