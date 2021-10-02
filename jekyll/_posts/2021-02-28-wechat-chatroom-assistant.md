---
title: "微信群消息助手（wechat chatroom assistant）"
author: paulhybryant
categories: project
tags:
  - python
  - padlocal
  - productivity
image: /assets/2021/02-wechat-chatroom-assistant/header.webp
---

[![Wechaty Badge](https://img.shields.io/badge/Powered%20By-Wechaty-green.svg#align=left&display=inline&height=20&margin=%5Bobject%20Object%5D&originHeight=20&originWidth=132&status=done&style=none&width=132)](https://github.com/wechaty/wechaty)
[![Everything about Wechaty](https://img.shields.io/badge/Wechaty-%E5%BC%80%E6%BA%90%E6%BF%80%E5%8A%B1%E8%AE%A1%E5%88%92-green.svg#align=left&display=inline&height=20&margin=%5Bobject%20Object%5D&originHeight=20&originWidth=134&status=done&style=none&width=134)](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)

## 背景

个人的微信里加了很多微信群，在这些微信群里经常会有一些重要的通知，或者一些我关心的文件等等，但是因为群里人多，所以也会有很多无关的消息。
不想错过这些重要的通知，但是又不可能又精力自己一个个群去爬楼，非常浪费时间。
所以就有了这么一个群消息助手机器人的需求，能够自动帮我按照定义的规则过滤消息，把我感兴趣的消息发到我个人的微信上。

## 功能

根据定义的规则自动识别我关心的消息，并发送到我的个人微信上。
初步的实现很简单，所有的规则，包括forward的对象都是hardcode在代码里的。
之后可以将这些修改配可配置的方式，使得机器人更通用。

还有一些其他的想法，比如提供一些命令，能够“教”机器人干些什么事情，动态的执行某些代码。

## 实现逻辑

逻辑非常简单；利用wechaty接收用户消息，对消息类型进行判断，并采取相应的行动（forward，或者say），并给出一些上下文消息（比如是从那个群来的，谁发的，等等）

## 依赖

- python-wechaty：wechaty python核心库
- wechaty-puppet-padlocal：wechaty的ipad协议实现

## 实现过程

```python

async def on_message(msg: Message):
    """
    Message Handler for the Bot
    """
    global counter
    counter += 1
    log.error('received %s messages' % counter)
    me = bot.Contact.load('paulhybryant0104')
    text = msg.text()
    mention_self = await msg.mention_self()
    mention_text = await msg.mention_text()
    if msg.room():
        topic = await msg.room().topic()
        log.error('room: %s, topic %s' % (msg.room().room_id, topic))
        # @me
        if mention_self:
            log.error('mentioned me')
            await me.say('来自群: %s' % topic)
            await msg.forward(me)
        # @all
        elif '@所有人' in mention_text or '@All' in mention_text:
            log.error('mentioned all')
            await me.say('来自群: %s' % topic)
            await msg.forward(me)
        # For testing
        elif topic == 'MyAssistant':
            log.error(msg)
            if msg.type() == MessageType.MESSAGE_TYPE_ATTACHMENT:
                filebox = await msg.to_file_box()
                await me.say(filebox)
        # 低风险投资3群
        elif msg.room().room_id == '4932234304@chatroom':
            if msg.type() == MessageType.MESSAGE_TYPE_ATTACHMENT:
                filebox = await msg.to_file_box()
                await me.say(filebox)
        # TODO: Automatically cache chatroom ids, given topic (room name)
        elif topic == '投资学习8群':
            log.error(msg.room().room_id)
            if msg.type() == MessageType.MESSAGE_TYPE_ATTACHMENT:
                filebox = await msg.to_file_box()
                await me.say(filebox)
        else:
            for keyword in KEYWORDS:
                if keyword in text:
                    log.error('contains keyword: %s' % keyword)
                    await me.say('来自群: %s' % topic)
                    await msg.forward(me)
    else:
        log.error(msg)
        if text == '#weather':
            await msg.say('TODO: report today\'s weather')

```

## 本地运行

1. 克隆项目

```shell
git clone g https://github.com/paulhybryant/wechat-bot.git
cd wechat-bot
```

1. 安装依赖

```shell
pip install -r requirements.txt
```

1. 启动项目

参考[这篇文章](https://wechaty.js.org/2021/02/03/python-wechaty-for-padlocal-puppet-service/)来配置wechaty-puppet-service环境

```shell
export WECHATY_PUPPET_SERVICE_TOKEN=<your token>
export WECHATY_PUPPET="wechaty-puppet-service"
python3 chatroom_assistant.py
```

## 效果图

![效果图](/assets/2021/02-wechat-chatroom-assistant/demo.webp)

## 致谢

感谢[Wechaty](https://wechaty.js.org/)团队提供微信机器人SDK，让开发者可以专注于业务代码。
感谢[句子互动](https://www.juzibot.com)提供的pad协议版token。

> 作者: [paulhybryant](https://github.com/paulhybryant/)
> Code: [Github](https://github.com/paulhybryant/wechat-bot)
