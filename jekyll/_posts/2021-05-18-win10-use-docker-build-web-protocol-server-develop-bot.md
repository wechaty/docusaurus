---
title: "Win10通过Docker搭建Web协议服务开发机器人"
author: mrwis
categories: article
tags:
  - blog
  - study
  - web-protocol
  - python
image: /assets/2021/05-win10-use-docker-build-web-protocol-server-develop-bot/ding-dong.jpg
---

## 介绍

### 背景介绍

最近本人在自学编程，选择的是python语言，自学一段时间后，自我感觉理论知识良好，需要找项目实践。然后找到python-wechaty这个项目，并加入微信群。在四月底听到群里说web协议复活后，决定亲手尝试一下。在尝试的过程中，遇到不少困难，最终在群友们的指点下顺利的走通整个流程。也就是说顺利的执行了ding-dong-bot。考虑到群里可能也有和我一样的小白，所以决定记录一下自己开发的过程，并发表出来，希望能帮助和我之前有一样困惑的朋友，节约他们的摸索时间。

### 本文读者

如果您不是和我一样的小白，那么这篇文章很可能就不适合您了。本文面向的读者是和我一样，在win10开发环境下，想用docker来搭建免费web协议服务，通过python-wechaty来开发机器人的小白或零基础的朋友。

### 开发环境

本人的开发环境如下，win10系统版本号1909，Docker Desktop版本3.3.1，Pycharm版本2020.3，python3.7。

不同的版本环境下，可能会有兴许差异，请自我查验。

## 正文

通过免费web协议服务来开发python-wechaty微信机器人分为两个步骤

### docker启动web服务

首先我们需要在docker启动web协议服务容器，启动docker容器之前，我们对其进行简单配置，考虑到我的系统是windows，所以并不支持export指令。在windows下，用set替代export。但是最后结果并不理想，容器在启动之后立马又关闭了，所以就不细说了。

经过对比启动docker其他的容器，并没用出现问题，因此我判断docker软件本身没有问题，最后在群友的帮助下，采用一条指令顺利启动docker容器，打开cmd。输入指令，指令如下

`docker run -ti --name wechaty_puppet_service_token_gateway --rm -e WECHATY_LOG="verbose" -e WECHATY_PUPPET="wechaty-puppet-service" -e WECHATY_PUPPET_SERVER_PORT="30001" -e WECHATY_TOKEN="e9b50dd4-e24d-409e-98aa-53e686101f0c" -p "30001:30001" wechaty/wechaty:latest`

 如果有朋友想复制使用的话，请全部复制，这是一条完整指令。简单介绍：`wechaty_puppet_service_token_gateway` 就是我们启动的容器的名字。`WECHATY_PUPPET_SERVER_PORT="30001"`是指端口设定为30001。这个可以根据需要自己设定其他的数字。`WECHATY_TOKEN="e9b50dd4-e24d-409e-98aa-53e686101f0c"`绑定token到web协议服务，这个token是我用uuid自动生成的。在启动之前，请通过python脚本生成所需token。脚本如下：

```python
import uuid
print(uuid.uuid4())
```

生成的token记录保存下来，请根据自己的需要，修改自己的token。

这样我们就成功的启动了一个端口在30001的docker容器。启动后cmd立马可以看到如下：

![docker-build-web](/assets/2021/05-win10-use-docker-build-web-protocol-server-develop-bot/docker-build-web.jpg)

打开docker也可以看到容器已经顺利启动。

![docker-status](/assets/2021/05-win10-use-docker-build-web-protocol-server-develop-bot/docker-status.jpg)

### 启动python脚本链接docker容器

启动容器之后，接下来我们就需要用python脚本去链接这个容器，

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
                'u=1116676390,2305043183&fm=26&gp=0.jpg',
                name='ding-dong.jpg')
            await conversation.say(file_box)

asyncio.run(MyBot().start())
```

代码的主要部分来源于官方文档，我们需要做的就是两个事情，一个绑定web协议服务端口，因为我的docker容器是本地运行的，所以`os.environ['WECHATY_PUPPET_SERVICE_ENDPOINT'] = '127.0.0.1:30001'` ，指定端口到本地的30001端口。第二个就是token进行一个绑定`os.environ['WECHATY_PUPPET_SERVICE_TOKEN'] = 'e9b50dd4-e24d-409e-98aa-53e686101f0c'`，如果不进行这个操作，执行程序就会报错，token不存在。这个token必须和我们之前配置docker容器的token保持一致，否则就无法执行。

代码写好后，执行代码，会出现一个二维码，要求我们扫码登录。

![run-python](/assets/2021/05-win10-use-docker-build-web-protocol-server-develop-bot/run-python.jpg)

目前会有一个问题就是二维码太大了，无法扫描。不过官方很贴心的给了一个链接，点击链接就会跳转到一个可以扫描的二维码页面出了，扫码登录即可。

![scan-qrcode](/assets/2021/05-win10-use-docker-build-web-protocol-server-develop-bot/scan-qrcode.jpg)

扫码登陆微信后就可以验证，发送ding，机器人会自动回复dong。

![ding-dong](/assets/2021/05-win10-use-docker-build-web-protocol-server-develop-bot/ding-dong.jpg)

## 补充内容

### 更改docker镜像位置，否则立马占满空间

程序运行一晚上后，我发现我的C盘可用空间急速下降。通过调查发现，docker的镜像默认位置就是C盘，所以我需要通过更改docker镜像位置来避免C盘可用空间不足导致的程序崩溃。首先将docker镜像导出：我这里将镜像文件导入到e盘。

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

重新启动docker服务，就可以了。

#### 多开docker容器，达成多开机器人的目的

能不能同时启动多个机器人呢？我这边测试了一下是可以的。

首先需要再打开一个docker容器，给新的容器自定一个新的名字，同时指定不同的端口和token，新python脚本绑定的端口与token要与新开的docker容器一致。

然后启动docker容器，再启动python脚本，扫码登录后，测试结果如下：

![multi-bot](/assets/2021/05-win10-use-docker-build-web-protocol-server-develop-bot/multi-bot.jpg)

#### 关闭睡眠状态，保持程序的持续运行

在中午离开电脑吃饭的时候，我发现机器人并没有回应我发送的ding，查看日志发现，因为电脑断网，虽然docker容器还在运行，python脚本也在运行，但是已经失去了网络连接，python脚本在请求重新扫码。后面分析，win10系统带有的自动睡眠功能会自动断网。导致程序运行失败。为了可以持续运行我的机器人，我选择暂时关闭睡眠功能。打开win10`设置`，选择`系统`，选择`电源和睡眠`，选择`睡眠`，设置成`从不`。这样你的程序就可以一直运行，而不会因为断网停掉。

**特别提示：必须使用已经开通了微信支付的微信号扫码登录，否则登录失败，提示开通微信支付。**

以上就是我本次尝试ding-dong-bot所遇到的一些情况的分享。

## 鸣谢

感谢wechaty社区的辛苦工作，为我提供了可以免费使用的工具，也感谢python-wechaty社区，提供了python可用的测试脚本。

最后感谢Polygplot Wechaty Home微信群内小伙伴们的指点，否则我一定还需要更多的时间才能走通这个ding-dong机器人流程。

> 感谢您的阅读，考虑到本人水平极其有限，文章难免有差错，若读者发现文中错误，欢迎指正，或联系我修改。

## 参考链接：

- [教你用python-wecahty和web协议开发机器人](https://wechaty.js.org/2021/04/17/python-wechaty-use-web/)
- [Puppet Service: DIY](https://wechaty.js.org/docs/puppet-services/diy)
- [使用免费Web协议](https://python-wechaty.readthedocs.io/zh_CN/latest/introduction/use-web-protocol/)
- [How To Post a Blog](https://github.com/wechaty/wechaty.js.org)
