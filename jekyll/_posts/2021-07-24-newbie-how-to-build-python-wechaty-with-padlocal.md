---
title: '零基础小白HOWTO系列 -- 搭建第一个基于PadLocal的Python-Wechaty应用'
author: harrisonyao
categories: article
tags:
  - blog
  - newbie
  - howto
  - python
image: /assets/2021/07-newbie-how-to-build-python-wechaty-with-padlocal/rare-book.webp
---

> 写在前面：本HowTo系列用来记录个人在Wechaty的学习和研究过程中的点滴经验，希望能帮助更多人避免我踩过的坑，快速熟悉Wechaty这个工具

## 背景

2021年初的时候，在社区上发现了Wechaty项目，由于时间不够充分，没有静下心认真的研究相关内容，加上之前的文档确实不够健全，学习成本很高，一个简单的类似HelloWorld的代码也没有跑通，遂暂时搁置了这个工具的研究。直到最近个人工作上有些需求，需要对公司的微信数据进行管理和社区的自动化运营操作，想起来之前接触的Wechaty工具，就想着再次尝试一下，重新开始学习这个工具。

欢迎大家在实践本HowTo内容的过程中，将遇到的问题及对应的解决方法发送给我 <harrison.gyao@gmail.com> ，我会在收到信息后，及时更新本文档，以帮助更多的人，谢谢你的反馈~！

## 前提要求

- 本文阅读的难度不大，按照文中的标准操作，大概率会能够自主的搭建相应的应用服务环境，并完成一个基本功能的实现。但本文要求读者必须具备基本的编程技能，在服务端领域能够知道RPC（Remote Procedure Call)、Docker的相关基本知识，如果对这方面内容不了解，可以查阅 Reference 的相关部分。

- 在执行本文中提供的 Gateway 服务脚本时，需要提前确保执行机上的 Docker Daemon 是否正常启动，否则shell脚本执行失败。

## 试验环境

- macOS Ver:11.5
- Python 3.8
- Docker desktop (latest)

## 内容介绍

本篇Blog会从以下三个方面内容来描述如何快速的能够完成一个最简单的Python-Wechaty应用的搭建，同时对一些过程中可能遇到的问题，进行及时的处理。

- 必须掌握的基本知识
- 最简Ding-Dong应用代码
- 过程中遇到过的问题

## 必须掌握的基本知识

- Wechaty的基本结构

![基本结构](/assets/2021/07-newbie-how-to-build-python-wechaty-with-padlocal/wechaty-architecture.webp)

这个结构图例很好的阐述了Wechaty的生态环境架构：

 1. 底层是各个IM工具的通讯协议层，未来可以支持更多IM工具的消息传输，并在这个层级上进行相应的扩充即可。
 1. Wechaty Puppet Service Provider 是作为对底层IM协议层的操作控制层作用而设计存在，可以在使用 "Wechaty Puppet Abstract" 通用接口层的设计基础上，忽略底层协议及IM的个性化，提炼共性的操作内容，暴露统一的操作接口给外部调用者。
 1. Wechaty （Python、NodeJS等），是基于gRPC框架基础上，在"Wechaty Puppet Abstract"的接口定义约束条件下，通过gRPC的Stub程序完成对底层Provider的掉用。

- Service相关

Wechaty 对于底层IM消息解析和处理，是通过Service Provider 控制的协议层程序来完成相关处理，所以对应不同IM的不同协议内容（如：微信的Pad协议、web协议、mac协议等），需要使用配套的Service Provider来完成对底层IM消息的处理。
目前已经实现的Service Provider有如下几种：

![Service Provider](/assets/2021/07-newbie-how-to-build-python-wechaty-with-padlocal/service-provider.webp)

具体的Service Provider的内容，可以持续关注 [provider docs](https://wechaty.js.org/docs/puppet-providers/) 的最新情况。

- 关于Token

顾名思义，针对微信相关的wechaty服务来说，token需要在Token Gateway的配合下一起使用，是作为当前服务的一个认证接入使用的凭证，用来控制访问准入和时长

- 关于GateWay

也就是 Wechaty Puppet Service Token Gateway，在整体架构过程中，通过该Gateway 利用gRPC协议，将制定的 Wechaty Service Provider 的服务封装并转化为 Wechaty Puppet Service，供更上层的业务应用层面的程序调用和使用。

换句话说，针对与目前版本的 Python-Wechaty ，使用的时候，只能通过Gateway的方式，指定使用 "wechaty-puppet-service" 来完成与业务代码的交互，实现微信数据的操作。

## 最简Ding-Dong应用代码搭建

### GateWay 服务准备

目前Gateway服务是封装在Docker容器中，使用的时候可以直接创建如下shell脚本完成对应容器服务的初始化。读者可以直接copy以下代码，在本地创建一个shell脚本文件后执行即可。

- 对应shell脚本

```shell script
#!/bin/bash

export WECHATY_LOG="verbose" # 如果觉得打印信息太多，可以使用 "error" 级别
export WECHATY_PUPPET="wechaty-puppet-padlocal"  # 针对当前例子，我们使用padlocal协议作为 Service Provider使用的底层协议 ，这个部分不能错
export WECHATY_PUPPET_PADLOCAL_TOKEN="puppet_padlocal_xxxxx" # 这里是你自己申请的padlocal Token ，这个部分不能错

export WECHATY_PUPPET_SERVER_PORT="8788" # Gateway服务在容器中暴露的本地端口
export WECHATY_TOKEN="b74d7f7f-cfd0-4def-1c68f0066254" # 使用：import uuid (回车)  print(uuid.uuid4()) 获得的结果

docker run -ti \
  --name wechaty_puppet_service_token_gateway \
  --rm \
  -e WECHATY_LOG \
  -e WECHATY_PUPPET \
  -e WECHATY_PUPPET_PADLOCAL_TOKEN \
  -e WECHATY_PUPPET_SERVER_PORT \
  -e WECHATY_TOKEN \
  -p "$WECHATY_PUPPET_SERVER_PORT:$WECHATY_PUPPET_SERVER_PORT" \
  wechaty/wechaty

```

以上shell脚本编写完成后，可以直接在本地的Term或Console中进行执行，如果过程中遇到有关docker的问题，请自行"谷歌"寻找相应的解决方法。

- 结果检查

1. 通过执行 ``` netstat -an |grep 8788 ``` 命令检查相应脚本中8788端口是否已经被监听

1. 访问 <https://api.chatie.io/v0/hosties/${uuid4}> 地址（注意：${uuid4} 是一个占位符，实际访问的时候，需要将该位置替换为shell脚本中"WECHATY_TOKEN"环境变量使用的uuid字符串），如果服务**正常**，可以看到类似

``` json
{
    "host": "122.233.170.88",
    "port": 8788
}
```

的显示内容。

1. 查看服务启动日志信息

![Gateway启动日志](/assets/2021/07-newbie-how-to-build-python-wechaty-with-padlocal/gateway-service-1.webp)

正如上面的截图，是首次正确启动service gateway的时候的服务日志，尤其关注截图中红框部分，如果看到 ```PuppetServer start()```以及```[PuppetPadlocal] start login with type: QrLogin```，说明服务已经正常启动。

经过上面几步的检查，如果没有其他问题，你当前的服务已经启动成功，并完成token的服务注册，可以正常接受业务层传递的操作信息。如果此时查看gateway的日志，找到类似

```shell script
Online QR Code Image: https://wechaty.js.org/qrcode/http%3A%2F%2Fweixin.qq.com%2Fx%2FgYEttTm04jj2_EtvmXmq
```

信息时，可以直接访问对应的链接，扫码后即可完成微信账号的Pad登录，并且在微信中，可以看到如下图的登录状态显示。

![微信登录设备列表](/assets/2021/07-newbie-how-to-build-python-wechaty-with-padlocal/wechat-logged-device-list.webp)

### Ding-Dong 代码编写

```python
# coding=utf-8
"""
# @Licensed : (C) Copyright
# @Time     : 2021/7/24 上午11:38
# @Author   : Harrison Yao
# @FILE     : WechatGroupBot.py
# @Version  : 
# @Function : 
# @Requirements:
"""

import logging,asyncio,os
from typing import Optional, Union
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from wechaty import Wechaty, Message, ScanStatus, Contact, Room, Image, UrlLink
from wechaty.plugin import WechatyPlugin
from wechaty_puppet import FileBox, UrlLinkPayload, MessagePayload  # 发送文件， 发送链接， 消息

os.environ['WECHATY_LOG_FILE_KEY'] = '一个日志文件的绝对路径'  # 如果不指定，会自动在执行程序的位置生成logs目录和根据日期时间为命名的日志文件
LOG_FORMAT = "%(asctime)s - %(levelname)s - %(message)s"
logging.basicConfig(filename='../logs/wechaty_run_server_error.log', format=LOG_FORMAT, level=logging.INFO )

class MyBot(Wechaty):

    async def on_scan(self, qr_code: str, status: ScanStatus,
                      data: Optional[str] = None):
        """监听微信扫码登录, 微信扫码的链接"""
        print("https://wechaty.js.org/qrcode/{}".format(qr_code))

    async def on_login(self, contact: Contact):
        """监听微信扫码登录的用户信息"""
        contact_info = contact.payload
        print("扫码登录的用户信息: {}".format(contact_info.name))

    async def on_ready(self, _):
        # find by id
        # 1. get all of friends
        """
        我是在这里读取的好友信息
        """
        pass

    async def on_message(self, msg: Message):
        """监听微信消息"""
        print("监听接受到的消息业务处理: {}".format(msg.text()))
        from_contact: Optional[Contact] = msg.talker()
        text = msg.text()
        room: Optional[Room] = msg.room()
        if text.lower() == 'ding':
            conversation: Union[
                Room, Contact] = from_contact if room is None else room
            await conversation.ready()
            await conversation.say('[自动回复] dong')
            file_box = FileBox.from_url(
                'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/'
                'u=1116676390,2305043183&fm=26&gp=0.webp',
                name='ding-dong.webp')
            await conversation.say(file_box)

class BotPlugin(WechatyPlugin):
    @property
    def name(self) -> str:
        """get the name of the plugin"""
        return '智能客服'

    async def tick(self):
        """send message  plugin scheduler"""
        pass

    async def init_plugin(self, wechaty: Wechaty):
        """init plugin"""
        await super().init_plugin(wechaty)
        scheduler = AsyncIOScheduler()
        scheduler.add_job(self.tick, 'cron')
        scheduler.start()

async def main():
    """
    Async Main Entry
    """
    bot = MyBot()
    bot._options.puppet = "wechaty-puppet-service"  # python-wechaty 只能使用基于gRPC的 service provider
    bot._options.puppet_options.token = "puppet_padlocal_xxxxx"  # 使用你自己申请的PadLocal Token
    bot._options.puppet_options.end_point = "127.0.0.1:9001"  # 这里一定要注意端口和gateway service启动时指定的端口保持一致
    bot.use(BotPlugin())

    await bot.start()

asyncio.run(main())
```

在使用相关代码前，各位自行安装对应的依赖库，这里就不赘述了。

## 过程中遇到的问题概览

- 本地环境网络代理引发的问题

在一开始的尝试过程中，由于本人习惯于系统开机后就自动架梯，以实现随时随地的科学上网需求，所以也没做过太多网络层的关注和检查，在启动Gateway Service时，发现 Wechaty Puppet Service 始终无法完成初始化，无法看到日志中的登录二维码链接地址或用户登录成功的信息，取而代之的是一系列心跳检查和服务状态的切换，情况如下图所示：

![微信登录设备列表](/assets/2021/07-newbie-how-to-build-python-wechaty-with-padlocal/gateway-firewall-issue.webp)

过程中，始终只是有心跳检查的日志信息，但没有其他登录成功信息或者初次登录时的扫码信息，所以怀疑是网络层的问题导致部分数据没有正常发送和处理造成，同时联想到以前自己在手机上安装代理软件进行网络抓包时很多应用基于SSL安全双向校验的问题，会导致应用网络请求失败的案例，猜测是否是本机的网络代理设置导致 gateway 与 微信服务 之间的pad协议请求无法正常处理，导致微信服务操作异常，随后关闭本地的代理服务后重新启动gateway服务以及python代码，问题解除。

## 特别致谢

本文档所述试验过程中，得到了如下几位同学的支持，再次特别提出感谢：

- 微信名：秋客
- 微信名：Wyx

## Reference

1. [RPC科普](https://zhuanlan.zhihu.com/p/187560185)
1. [Docker科普](https://zhuanlan.zhihu.com/p/187505981)
1. <https://wechaty.js.org/docs/specs/token>
1. <https://wechaty.js.org/2021/01/14/wechaty-puppet-service/>
1. <https://wechaty.js.org/docs/puppet-services/>
