---
title: "Wechaty Puppet Rock Beta版发布公告"
author: lijiarui
categories: announcement
tags:
  - news
  - wechaty
image: /assets/2020/12-07-rock/rock.jpeg
---

恭喜 Wechaty-Puppet-Rock 正式进入 Beta 版！经过历时一个月的测试，Rock 现在已经通过社区验证，可以正式售卖给社区的小伙伴了！

想要使用的，请点击[Rock 购买链接](http://www.chatools.top/?utm_source=wechaty&utm_medium=referral) 购买吧！

## 关于 Rock

Wechaty-Puppet-Rock 的作者是 [jcai](https://wechaty.js.org/developers/jcai/) scala-wechaty 作者,基于wechaty-puppet-hostie新provider,，自由职业者,scala狂热爱好者！

通过 Scala Wechaty 认识了阿蔡，后来他决定做 Wechaty Puppet Service Provider，很快就上线了 Wechaty-Puppet-Rock. 我带大家一起回顾一下 Wechaty Puppet Rock Beta 版的发布历程：

## Rock 的 Alpha Release

首先，他先通过了 Wechaty 的 Alpha Release 阶段，并发了很多token给了参与内测的开发者：

- [x] 写一篇博客介绍这个新的puppet: <https://wechaty.js.org/2020/10/19/rock/>
- [x] 写一个 getting started 告诉开发者如何将这个 puppet 跑起来: <https://github.com/wechaty/puppet-service-providers/issues/2>
- [x]  puppet service provider 的 token 要通过 api.chatie.io 发布，以最大化提升开发者社区体验。
- [x]  token 设置规范为：puppet_rock_XXX

为了能让开发者更好的了解如何运行 wechaty-puppet-rock, 在这里给出大家运行的最小化代码：

```ts
import { Wechaty } from 'wechaty'
import { ScanStatus } from 'wechaty-puppet'
import QrcodeTerminal from 'qrcode-terminal';

const token = 'get token from here: http://www.chatools.top/?utm_source=wechatydoc&utm_medium=referral'

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

TOB

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

- 关于Rock 的最新进度，可以随时在这里查看： [wechaty-puppet-rock 发布进展](https://github.com/wechaty/puppet-service-providers/issues/20)
- 使用过程中，有任何问题，欢迎[在这里发布 issue!](https://github.com/wechaty/puppet-service-providers/issues/new?assignees=jcai&labels=rock&template=rock.md&title=Rock%3A+)

## Rock 的多语言进展

- go: need later version 0.2.0 (see wechaty/go-wechaty#69 )
- python:need later version 0.4.1 (see wechaty/python-wechaty-puppet-hostie#35)
- java: see wechaty/java-wechaty#77

## 最后，要在此感谢 puppet provider 为社区持续做出如下贡献：

1. 为每个wechaty contributor提供2个免费token
2. 未申请开源激励计划的开发者，提供15天的免费测试token
