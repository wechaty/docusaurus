---
title: "Win10通过Docker搭建Web协议服务开发机器人"
author: mrwis
categories: article
tags:
  - blog
  - study
  - web-protocol
  - python
image: /assets/2021/05-win10-use-docker-build-web-protocol-server-develop-bot/ding-dong.webp
---

## 介绍

### 背景介绍

最近本人在自学编程，选择的是 python 语言，自学一段时间后，自我感觉理论知识良好，需要找项目实践。然后找到 python-wechaty 这个项目，并加入微信群。在四月底听到群里说 web 协议复活后，决定亲手尝试一下。在尝试的过程中，遇到不少困难，最终在群友们的指点下顺利的走通整个流程。也就是说顺利的执行了 ding-dong-bot。考虑到群里可能也有和我一样的小白，所以决定记录一下自己开发的过程，并发表出来，希望能帮助和我之前有一样困惑的朋友，节约他们的摸索时间。

### 本文读者

如果您不是和我一样的小白，那么这篇文章很可能就不适合您了。本文面向的读者是和我一样，在 win10 开发环境下，想用 docker 来搭建免费 web 协议服务，通过 python-wechaty 来开发机器人的小白或零基础的朋友。

### 开发环境

本人的开发环境如下，win10 系统版本号 1909，Docker Desktop 版本 3.3.1，Pycharm 版本 2020.3，python3.7。

不同的版本环境下，可能会有兴许差异，请自我查验。

## 正文

通过免费 web 协议服务来开发 python-wechaty 微信机器人分为两个步骤

### docker 启动 web 服务

首先我们需要在 docker 启动 web 协议服务容器，启动 docker 容器之前，我们对其进行简单配置，考虑到我的系统是 windows，所以并不支持 export 指令。在 windows 下，用 set 替代 export。但是最后结果并不理想，容器在启动之后立马又关闭了，所以就不细说了。

经过对比启动 docker 其他的容器，并没用出现问题，因此我判断 docker 软件本身没有问题，最后在群友的帮助下，采用一条指令顺利启动 docker 容器，打开 cmd。输入指令，指令如下

`docker run -ti --name wechaty_puppet_service_token_gateway --rm -e WECHATY_LOG="verbose" -e WECHATY_PUPPET="wechaty-puppet-service" -e WECHATY_PUPPET_SERVER_PORT="30001" -e WECHATY_TOKEN="e9b50dd4-e24d-409e-98aa-53e686101f0c" -p "30001:30001" wechaty/wechaty:latest`

如果有朋友想复制使用的话，请全部复制，这是一条完整指令。简单介绍：`wechaty_puppet_service_token_gateway` 就是我们启动的容器的名字。`WECHATY_PUPPET_SERVER_PORT="30001"`是指端口设定为 30001。这个可以根据需要自己设定其他的数字。`WECHATY_TOKEN="e9b50dd4-e24d-409e-98aa-53e686101f0c"`绑定 token 到 web 协议服务，这个 token 是我用 uuid 自动生成的。在启动之前，请通过 python 脚本生成所需 token。脚本如下：

```python
import uuid
print(uuid.uuid4())
```

生成的 token 记录保存下来，请根据自己的需要，修改自己的 token。

这样我们就成功的启动了一个端口在 30001 的 docker 容器。启动后 cmd 立马可以看到如下：

![docker-build-web](/assets/2021/05-win10-use-docker-build-web-protocol-server-develop-bot/docker-build-web.webp)

打开 docker 也可以看到容器已经顺利启动。

![docker-status](/assets/2021/05-win10-use-docker-build-web-protocol-server-develop-bot/docker-status.webp)

### 启动 python 脚本链接 docker 容器

启动容器之后，接下来我们就需要用 python 脚本去链接这个容器，

脚本如下：

```python
import os
import asyncio
from wechaty import (
    FileBox,
    Wechaty,
    Contact,
    Message,
    Room,
)

os.environ['WECHATY_PUPPET_SERVICE_ENDPOINT'] = '127.0.0.1:30001'
os.environ['WECHATY_PUPPET_SERVICE_TOKEN'] = 'e9b50dd4-e24d-409e-98aa-53e686101f0c'

class MyBot(Wechaty):

    async def on_message(self, msg: Message):
        """
        listen for message event
        """
        from_contact: Optional[Contact] = msg.talker()
        text = msg.text()
        room: Optional[Room] = msg.room()
        if text == 'ding':
            conversation: Union[
                Room, Contact] = from_contact if room is None else room
            await conversation.ready()
            await conversation.say('dong')
            file_box = FileBox.from_url(
                'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/'
                'u=1116676390,2305043183&fm=26&gp=0.webp',
                name='ding-dong.webp')
            await conversation.say(file_box)

asyncio.run(MyBot().start())
```

代码的主要部分来源于官方文档，我们需要做的就是两个事情，一个绑定 web 协议服务端口，因为我的 docker 容器是本地运行的，所以`os.environ['WECHATY_PUPPET_SERVICE_ENDPOINT'] = '127.0.0.1:30001'` ，指定端口到本地的 30001 端口。第二个就是 token 进行一个绑定`os.environ['WECHATY_PUPPET_SERVICE_TOKEN'] = 'e9b50dd4-e24d-409e-98aa-53e686101f0c'`，如果不进行这个操作，执行程序就会报错，token 不存在。这个 token 必须和我们之前配置 docker 容器的 token 保持一致，否则就无法执行。

代码写好后，执行代码，会出现一个二维码，要求我们扫码登录。

![run-python](/assets/2021/05-win10-use-docker-build-web-protocol-server-develop-bot/run-python.webp)

目前会有一个问题就是二维码太大了，无法扫描。不过官方很贴心的给了一个链接，点击链接就会跳转到一个可以扫描的二维码页面出了，扫码登录即可。

![scan-qrcode](/assets/2021/05-win10-use-docker-build-web-protocol-server-develop-bot/scan-qrcode.webp)

扫码登陆微信后就可以验证，发送 ding，机器人会自动回复 dong。

![ding-dong](/assets/2021/05-win10-use-docker-build-web-protocol-server-develop-bot/ding-dong.webp)

## 补充内容

### 更改 docker 镜像位置，否则立马占满空间

程序运行一晚上后，我发现我的 C 盘可用空间急速下降。通过调查发现，docker 的镜像默认位置就是 C 盘，所以我需要通过更改 docker 镜像位置来避免 C 盘可用空间不足导致的程序崩溃。首先将 docker 镜像导出：我这里将镜像文件导入到 e 盘。

```bash
wsl --export docker-desktop-data e:\wsl2\docker\docker-desktop-data.tar
wsl --export docker-desktop e:\wsl2\docker\docker-desktop.tar
```

然后卸载之前的镜像：

```bash
wsl --unregister docker-desktop
wsl --unregister docker-desktop-data
```

导入镜像文件：

```bash
wsl --import docker-desktop e:\wsl2\docker\docker-desktop e:\wsl2\docker\docker-desktop.tar --version 2
wsl --import docker-desktop-data e:\wsl2\docker\docker-desktop-data e:\wsl2\docker\docker-desktop-data.tar --version 2
```

最后删除压缩文件：

```bash
del e:\wsl2\docker\docker-desktop.tar
del e:\wsl2\docker\docker-desktop-data.tar
```

重新启动 docker 服务，就可以了。

#### 多开 docker 容器，达成多开机器人的目的

能不能同时启动多个机器人呢？我这边测试了一下是可以的。

首先需要再打开一个 docker 容器，给新的容器自定一个新的名字，同时指定不同的端口和 token，新 python 脚本绑定的端口与 token 要与新开的 docker 容器一致。

然后启动 docker 容器，再启动 python 脚本，扫码登录后，测试结果如下：

![multi-bot](/assets/2021/05-win10-use-docker-build-web-protocol-server-develop-bot/multi-bot.webp)

#### 关闭睡眠状态，保持程序的持续运行

在中午离开电脑吃饭的时候，我发现机器人并没有回应我发送的 ding，查看日志发现，因为电脑断网，虽然 docker 容器还在运行，python 脚本也在运行，但是已经失去了网络连接，python 脚本在请求重新扫码。后面分析，win10 系统带有的自动睡眠功能会自动断网。导致程序运行失败。为了可以持续运行我的机器人，我选择暂时关闭睡眠功能。打开 win10`设置`，选择`系统`，选择`电源和睡眠`，选择`睡眠`，设置成`从不`。这样你的程序就可以一直运行，而不会因为断网停掉。

**特别提示：必须使用已经开通了微信支付的微信号扫码登录，否则登录失败，提示开通微信支付。**

以上就是我本次尝试 ding-dong-bot 所遇到的一些情况的分享。

## 鸣谢

感谢 wechaty 社区的辛苦工作，为我提供了可以免费使用的工具，也感谢 python-wechaty 社区，提供了 python 可用的测试脚本。

最后感谢 Polygplot Wechaty Home 微信群内小伙伴们的指点，否则我一定还需要更多的时间才能走通这个 ding-dong 机器人流程。

> 感谢您的阅读，考虑到本人水平极其有限，文章难免有差错，若读者发现文中错误，欢迎指正，或联系我修改。

## 参考链接：

- [教你用 python-wecahty 和 web 协议开发机器人](https://wechaty.js.org/2021/04/17/python-wechaty-use-web/)
- [Puppet Service: DIY](https://wechaty.js.org/docs/puppet-services/diy)
- [使用免费 Web 协议](https://python-wechaty.readthedocs.io/zh_CN/latest/introduction/use-web-protocol/)
- [How To Post a Blog](https://github.com/wechaty/wechaty.js.org)
