---
title: "基于python-wechaty的CPS BOT"
author: why2lyj
categories: project
tags:
  - python
  - donut
  - ecommerce
image: /assets/2020/python-wechaty-cps-bot/jdyangli.jpg
---

无非就是想撸羊毛，自己又懒的一个一个找，一个一个发。已知目前的返佣app非常的多，比如：好省，蜜源，粉象，芬香等等等等。归根到底无非是利用淘宝、京东、拼多多、苏宁的开放平台做的。所以想到是否可以利用已有的开放平台来做一个属于自己的撸羊毛项目。

## 需求描述

定时获取优惠信息，发送到指定微信群聊

## 最终效果图

![效果图](/assets/2020/python-wechaty-cps-bot/jdyangli.jpg)

## 快速上手

### 安装

安装 python-wechaty

```sh
pip install wechaty
```

笔者使用的版本是：0.5.dev1

### 编码

#### bot.py

创建定时任务

```py
async def jd_job():
    scheduler = AsyncIOScheduler()
        # 每小时55分45秒时任务启动，抖动时间30秒
    scheduler.add_job(jingdongfenxiang, trigger='cron', minute='55', second=45, jitter=30, id='fenxiang')
        scheduler.start()
```

向群内发送消息

```py
async def jingdongfenxiang():
        # 由于 python 的 wechaty-puppet（0.0.8）并没有实现 find 方法，
        # 所以这里只能从 _pool 中获取群聊id
    room = bot.Room.load("19679596974@chatroom")
    # room = bot.Room.load(bot.Room.find("京东内部优惠券-爆品区①"))
    await room.ready()
    conversation: Union[Room, Contact] = room
    await conversation.ready()
    infos = jingfen_query() # 由于并没有使用京东自有的SDK，源码请访问项目
    for info in infos:
        for image in info[1]:
            file_box = FileBox.from_url(f'''{image}''', name='jing-dong.jpg') # 发送图片
            time.sleep(random.randint(5,10))
            await conversation.say(file_box)
        time.sleep(random.randint(5,10))
        await conversation.say(info[0]) # 发送优惠信息
```

启动

```py
async def main():
    t1 = asyncio.create_task(dingdong())   # ding-dong任务，详见 python-wechaty-get-start
    t2 = asyncio.create_task(jd_job())
    await asyncio.gather(t1, t2) #并发运行任务

asyncio.run(main())
```

### 运行

运行

```sh
python bot.py
```

### 心得

申请的token属于donut-token ，底层其实是Windows Hook原理，所以微信发送消息的规则需要满足Windows上的操作，不然你会让腾讯关注到哦。

### 致谢

感谢[Wechaty](https://wechaty.github.io)团队。感谢[juzibot](https://www.juzibot.com)提供的donut-token

项目链接

<https://github.com/why2lyj/youxiang-wechaty>

> Author: [@why2lyj](https://github.com/why2lyj)
