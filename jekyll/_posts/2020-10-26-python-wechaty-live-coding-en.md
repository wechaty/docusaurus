---
title: "Python-Wechaty Live Coding"
author: wj-mcat
categories: project
tags:
  - featured
  - news
  - wechaty
  - python-wechaty
image: /assets/2020/python-wechaty/live-coding.png
---

## Python-Wechaty

Wechaty, as a dialogue SDK, has the excellent ability to adapt to multiple platforms and also has multi-language features. Now I will show you how to start writing a simple chatbot using Python-Wechaty in the below video.

{% include iframe.html src="https://www.youtube.com/watch?v=KSELdGeJIzo" %}

## quick start

### 1. installation¸

```shell
pip install wechaty
```

### 2. configure token

There are many ways to configure token to wechaty:

Way One: through environment variable

```shell
export WECHATY_PUPPET_HOSTIE_TOKEN='your-token'
```

Way Two: through python code

```python
import os
os.environ['WECHATY_PUPPET_HOSTIE_TOKEN'] = 'your-token'
```

How to get token? please refer to：[Everything-about-Wechaty](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)

### 3. Writing a Simple Chatbot

> talk is cheep, show you the code

```python
import asyncio
from wechaty import Wechaty, Message

class MyBot(Wechaty):
    async def on_message(self, msg: Message):
        talker = msg.talker()
        await talker.ready()
        if msg.text() == "ding":
            await talker.say('dong')
        elif msg.text() == 'image':
            file_box = FileBox.from_url(
                'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/'
                'u=1116676390,2305043183&fm=26&gp=0.jpg',
                name='ding-dong.jpg')
            await talker.say(file_box)

async def main():
    bot = MyBot()
    await bot.start()

asyncio.run(main())
```

The above code can complete the simplest 'ding-dong' chatbot, and you send a keyword 'image' to it, and it can reply you with an image. Is the code very simple?

There are more powerful robot example code library [python-wechaty-getting-started](https://github.com/wechaty/python-wechaty-getting-started), you can come to here to get your favorite chatbot code.

Also welcome to continuous attention [python-wechaty](https://github.com/wechaty/python-wechaty), in the future we will continue to release some short video to introduce the use of the related.
