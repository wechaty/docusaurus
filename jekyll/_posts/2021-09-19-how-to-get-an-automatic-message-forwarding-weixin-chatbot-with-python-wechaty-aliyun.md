---
title: "如何使用python-wechaty来搭建一个自动转发消息的微信机器人"
author: Gan-lang
categories: article
tags:
  - blog
  - study
  - python
image: /assets/2021/09-how-to-get-an-automatic-message-forwarding-weixin-chatbot-with-python-wechaty-aliyun/cover.jpg
---

[![Wechaty Contributor Program](https://img.shields.io/badge/Wechaty-Contributor%20Program-green.svg)](https://wechaty.js.org/docs/contributing/)

## 前言

先前在本社区看到一篇关于怎么使用 `python`-`wechaty`+`paddlehub`+阿里云白嫖一个智能微信机器人，

本人先尝试了一遍，但是因为使用免费Web协议被封和不能登陆的情况经常出现，

所以本篇是**关于使用付费`Padlocal`协议来构建的微信机器人**。因为本人在学校，来自老师的微信通知比较多，

手动转发到班群有时候会忘记了，会误事，所以增加了自动转发消息的功能。

在本项目参考了`github`中 [python-wechaty-getting-started](https://github.com/wechaty/python-wechaty-getting-started) 的示例代码，并且有踩坑的情况，纪录下来。



## 1. 搞定云服务器部分

这部分大佬可以参考 `Lovely-Pig` 大佬的一篇 [blog](https://wechaty.js.org/2021/06/08/how-to-get-a-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun/) 这里面对怎么白嫖一个阿里云服务器以及怎么进行初始的配置有了很清楚详细的介绍，所以这里就不再赘述。这篇博客是采用了 `Ubuntu` 系统，所以这边也采用这个系统。

前面的  **1.1** 到 **1.17** 可以完全参考 `Lovely-Pig` 大佬这篇 [blog](https://wechaty.js.org/2021/06/08/how-to-get-a-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun/) 但是从 **1.18** 开始就有变化，因为从这里开始会使用付费`Padlocal`协议，即`Ipad`来登陆你的微信。

### 1.1 在终端里输入以下指令

这里有一个免费的`Padlocal`协议的token申请地址: [http://pad-local.com](http://pad-local.com)

先申请一下这个七天的token

-  连接服务器并且运行以下代码，做好前期工作

```python
>>> apt update

>>> apt install docker.io

>>> docker pull wechaty/wechaty:latest

```

- 配置环境变量

```python
>>> vi /root/.bashrc
```

  打开`.bashrc`，在其末尾编辑以下内容配置环境变量，保存并退出

​	`WECHATY_PUPPET`：这里填 `Ipad` 协议

​	`WECHATY_PUPPET_PADLOCAL_TOKEN` ：填写你自己刚刚申请的 token

​	`WECHATY_TOKEN`：可以任意填写，这个相当于是你的主机到服务器的一个令牌

```python
export WECHATY_LOG="verbose"
export WECHATY_PUPPET="wechaty-puppet-padlocal"
export WECHATY_PUPPET_PADLOCAL_TOKEN= your_puppet_padlocal_token
export WECHATY_PUPPET_SERVER_PORT="8086"
export WECHATY_TOKEN=your_token
```

```python
>>> source ~/.bashrc
```



- 到这里可以使用 export 来查看环境变量是否配置成功

```python
>>> export
```

![1-1](/assets/2021/09-how-to-get-an-automatic-message-forwarding-weixin-chatbot-with-python-wechaty-aliyun/1-1.png)

![](C:\Users\Gang lang\Desktop\Rob\git\wechaty.js.org\jekyll\assets\2021\09-how-to-get-an-automatic-message-forwarding-weixin-chatbot-with-python-wechaty-aliyun\1-1.png)



- 可以运行机器人了

```dockerfile
>>> docker run -ti --name wechaty_puppet_service_token_gateway --rm -e WECHATY_LOG -e WECHATY_PUPPET -e WECHATY_PUPPET_PADLOCAL_TOKEN -e WECHATY_PUPPET_SERVER_PORT -e WECHATY_TOKEN -p "$WECHATY_PUPPET_SERVER_PORT:$WECHATY_PUPPET_SERVER_PORT" wechaty/wechaty:0.56
```



-  检查是否运行成功

- 输入网址: <https://api.chatie.io/v0/hosties/your_token_at_here>，例如我输入的地址就是这个: <https://api.chatie.io/v0/hosties/puppet_padlocal_210c112ddf9b49fdaa8242b87b83b0eb>
- 如果返回了服务器的ip地址以及端口号，比如{"host":"121.43.228.90","port":8080}，就说明运行成功了，如果返回的是{"host":"0.0.0.0","port":0}，就说明没有运行成功



## 2. 搞定 python 代码部分

### 2.1 全部的python代码

```python
import asyncio
import logging
from typing import Optional, Union
from wechaty_puppet import FileBox, ScanStatus
from wechaty_puppet import MessageType
from wechaty import Wechaty, Contact
from wechaty.user import Message, Room

class MyBot(Wechaty):

    async def on_message(self, msg: Message):
        """
        listen for message event
        """
        msg_from_contact: Optional[Contact] = msg.talker()       
        msg_from_text = msg.text()                                  
        msg_from_room: Optional[Room] = msg.room()                  
        msg_from_room_name = ''                                     
        msg_from_contact_name = msg_from_contact.name              
        msg_to_room = await self.Room.find('XXX')        			

        if msg_from_room is not None:                              
            msg_from_room_name = str(await msg_from_room.topic())

        if msg_from_room_name == 'XXX' and msg_from_contact_name == 'XXX':
            if msg.type() == self.Message.Type.MESSAGE_TYPE_TEXT:
                await msg_to_room.say(msg_from_text)		
                
        	if msg.type() == self.Message.Type.MESSAGE_TYPE_IMAGE:      
                img = await msg.to_file_box()
                await img.to_file(f'./{img.name}')
                file_box = FileBox.from_file(f'./{img.name}')           
                await msg_to_room.say(file_box)

asyncio.run(MyBot().start())
```



### 2.2 踩坑的地方

```python
if msg.type() == self.Message.Type.MESSAGE_TYPE_IMAGE:      
                img = await msg.to_file_box()
                await img.to_file(f'./{img.name}')

                file_box = FileBox.from_file(f'./{img.name}')           # 注意路径，以及文件不能为空
                await msg_to_room.say(file_box)
```

如果要将接收的图片，再转发给别人，这里有一个示例代码，出自于 [python-wechaty-getting-started](https://github.com/wechaty/python-wechaty-getting-started) 的示例代码

示例代码如下：

```python
elif msg.type() == MessageType.MESSAGE_TYPE_IMAGE:
    img = await msg.to_file_box()
    # save the image as local file
    await img.to_file(f'./{img.name}')
    # send image file to the room
    if room:
        await room.say(img)
```

此处直接将消息转化成了一个`FileBox` 对象，能保存图片，但是不能 `room.say()`

我猜测，是因为微信端对**微信图片进行了加密处理**，因为一个图片类型的 `msg` 是一个加密的 `xml` 文本

可能方法 `img.to_file()` 中封装了解码的模块，但是 `room.say()`中没有

所以我的思路是先将图片储存在本地，然后再进行发送，也可以达到转发图片的效果



### 参考资料

- PaddleHub官网：[https://www.paddlepaddle.org.cn/hub](https://www.paddlepaddle.org.cn/hub)
- python-wechaty: [https://github.com/wechaty/python-wechaty](https://github.com/wechaty/python-wechaty)
- python-wechaty-getting-started: https://github.com/wechaty/python-wechaty-getting-started
- https://wechaty.js.org/2021/06/08/how-to-get-a-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun

> 作者: `Gan-lang`

