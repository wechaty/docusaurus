---
title: "Python Wechaty Beta Released: A Simple Bot"
author: wj-mcat
categories: announcement
tags:
  - python
  - news
  - featured
image: /assets/2020/python-wechaty/python-wechaty-logo.png
---

Python-wechaty能够使用少量代码即可完成一个机器人，使用起来非常简单，基于OOP的设计思路能够很好监听和处理微信内部大量的事件，比如：自动回复消息，定时发送消息，拉人入群，好友申请同意等等。此外，目前的插件系统里面有很多拿来即用的工具，比如拉人入群等。当然开发一个自己的插件也是非常简单，无需很高深的概念，只需要你能够理解事件和OOP即可。

python-wechaty项目源于wechaty，甚至说很大程度上代码是直接从其翻译过来的，然后加上一些python的特性，让其更加pythonic。作为一个IM的入口工具，未来我们也将添加更多的Chatbot元素进去，让其能够成为一个真正的聊天机器人。

在介绍python-wechaty之前，还是简要介绍一下wechaty。

## wechaty

或许有很多人会把`wechaty`和`wechat`联系起来，毕竟在名称上面只是一字之差。这个得从`wechaty`的起源开始说起，起初，此项目只是作为微信的一个工具库，能够进行一些简单的自动化操作过程，比如：定时发送消息，入群消息发送，好友申请接受等。

可随着项目的逐步更新，`wechaty`已支持主流的IM软件，比如：微信，钉钉，Telegram。

这个[项目](https://github.com/wechaty/wechaty)从2016年开始，到现在已经获取8k star，是一个非常稳定且用户量非常庞大的项目。官方对其给出的介绍是：

> A Conversational AI RPA SDK for Chatbot

所以wechaty作为IM ChatBot的入口工具，是很多聊天机器人的基础架构组件，也将会逐步支持主流聊天机器人的功能。

## python-wchaty的诞生

与Wechaty的结缘是在2019年底的一次技术沙龙会上，认识到了原来6行代码就能够开发出一款足够灵活的机器人，当时给我一个很大的震撼。微信作为我们日常聊天工具之一，如果能够对其做一些自动化的过程，能够很大程度上减少繁琐过程的工作量，比如说：办活动时的拉人入群，定时提醒用户打卡，提醒女朋友姨妈快来了等等。而wechaty能够很好的支持以上所有功能，只需要简单的几行代码即可完成。回去之后就立马着手相关资料的查阅，然后逐步进入wechaty的社区。

一个很巧的机会群里面说可以开发一款go-wechaty的开发，当时我就在想，为什么不能够有一款python-wechaty呢，然后就毛遂自荐，成为了python-wechaty的联合作者之一。由于对开源软件和DevOps不是很熟悉，起步阶段遇到了很多的问题，不过经过社区大佬的耐心指导，目前已能够完成对issue和feature的开发和管理。亲身经历，建议大家有机会一定要参加开源项目，能够让你学习到很多知识点。

## 最简单的Bot

使用python-wechaty能够很简单的开发一款Bot，特别是使用了一个插件系统之后，如下所示：

![image-20200617105548475](/assets/2020/python-wechaty/simple-bot.png)

以上代码中实现了两个主要的功能：

- 当Bot接受到一个`#ding`信号，就立马回复一个`dong`消息，这就是一个基本的`ding-dong-bot`。
- 当接受到查阅天气的文本语句时，则返回对应的天气查询结果，比如：今天天气如何？

以上两个插件是系统内置的，后续也会增加更多的拿来即用的实用插件，当然用户也可创建自己的插件，方式很简单。

## 如何开发插件系统

在了解如何开发插件系统之前，可先移驾[Plug-in`](https://en.wikipedia.org/wiki/Plug-in_%28computing%29)，插件系统支持对插件的安装，卸载，自定义配置等内容 ，至于具体的实现形式我相信也是需要面对具体的应用场景。而在Wechaty这个面相事件型且交互逻辑非常简单的场景下，插件的设计与开发就非常简单。

我们现在直接来看看，系统内置的叮咚插件是如何实现的。

```python
"""basic ding-dong bot for the wechaty plugin"""
from typing import Union

from wechaty import Message, Contact, Room, FileBox
from wechaty.plugin import WechatyPlugin


class DingDongPlugin(WechatyPlugin):
    """basic ding-dong plugin"""
    @property
    def name(self):
        """name of the plugin"""
        return 'ding-dong'

    async def on_message(self, msg: Message):
        """listen message event"""
        from_contact = msg.talker()
        text = msg.text()
        room = msg.room()
        if text == '#ding':
            conversation: Union[
                Room, Contact] = from_contact if room is None else room
            await conversation.ready()
            await conversation.say('dong')
```

代码很简单，不过也是需要氛围一下几个层面来介绍。

- WechatyPlugin
- on_[event_name]
- init_plugin

### WechatyPlugin

此类为一个抽象类，所有的插件必须要继承此基类，并重写其中的函数。

- name 属性函数

  为抽象函数，必须重写。主要是为了标识插件的名称，作为插件唯一性身份认证。

- init_plugin 初始化函数

  能够支持插件的初始化过程，比如初始化定时器对象，数据库延迟连接对象等。

- on_[event_name]

  此类函数主要是为了监听系统中的不同事件，比如：`on_message`, `on_login`, `on_friendship`等事件的监听都只需要重写一下函数即可完成。不同插件之间以及不同事件之间都是独立的，能够很好的专注于不同业务场景下的开发。

### event_name

`python-wechaty`很大程度上是由事件驱动，毕竟很多操作都是基于**消息接受**触发，由此事件的监听是其基础特性，可能第一感觉就是实用`EventEmitter`这种模式来监听事件，这样每个事件我都可以注册不同的函数来监听，每个函数中会有不同的逻辑处理。这也是传统的事件监听方法，可这至少会给开发上带来一些不方便：函数的参数需要查阅文档才能够获知，标准的函数式编程。

> 我不是说函数式编程不好，只是在这种场景下对系统性能并不能提升多少，且`python-wechaty` 也并不能太注重性能。

由此将其扩展了OOP的方式，用户可继承`Wechaty`或`WechatyPlugin`来监听不同的事件，且在常规的代码编辑器里面重写函数时就可以自动填充函数参数，从而减少查阅事件函数参数的问题。

监听事件的类型有：`error`, `friendship`, `heartbeat`, `login`, `logout`, `message`, `ready`, `room_invite`, `room_join`, `room_leave`, `room_topic`, `scan`。

在上面已经展示了WechatyPlugin如何开发，需要注意的地方，那接下来我将给大家详细介绍一下最基础的`每日一说`的机器人如何开发。

## 每日一说机器人

每日一说，顾名思义每天每个固定时间段发送一个祝福或提醒，具体内容可自定义。这其中需要注意几点：

- 机器人内部有一个调度器，用于调度时间事件的触发。
- 机器人可给制定的人和群发送对应的内容。

以上的功能我封装成一个插件，然后注入到`python-wechaty`中即可。

```python
"""daily word plugin"""
from datetime import datetime

from apscheduler.schedulers.asyncio import AsyncIOScheduler

from wechaty import Wechaty
from wechaty.plugin import WechatyPlugin


class DailyPlugin(WechatyPlugin):
    """
    say something everyday, like `Daily Words`
    """
    @property
    def name(self) -> str:
        """get the name of the plugin"""
        return 'dayily'

    async def tick(self):
        """time tick for the plugin scheduler"""
        room_id = get_room_id()
        room = self.bot.Room.load(room_id)
        await room.ready()
        await room.say(f'i love you -> {datetime.now()}')

    async def init_plugin(self, wechaty: Wechaty):
        """init plugin"""
        await super().init_plugin(wechaty)
        scheduler = AsyncIOScheduler()
        scheduler.add_job(self.tick, 'cron', hour=6, minute=16)
        scheduler.start()

```

插件就开发完了，然后将其注入到Wechaty中即可跑起来。

```python
async def main():
    bot = Wechaty().use(DailyPlugin())
    await bot.start()
asyncio.run(main())
```

是不是超级简单，插件系统帮你隔离所有的业务场景，让代码非常易于开发和维护。

## python-wechaty还可以做更多

现在python-wechaty只完成了基本的Chatbot入口工具，离真正的聊天机器人还距离很远，所以未来还有很多工作量可以做，也欢迎更多的研究chatbot，nlp的小伙伴联系我，共同开发让大家都喜欢用的开源软件。

微信号：`pure-_--love`

![image-20200617145659900](/assets/2020/python-wechaty/wujing-weixin.png)

> Author: [wj-Mcat](https://github.com/wj-Mcat)
> Code: [python-wechaty](https://github.com/wechaty/python-wechaty)
