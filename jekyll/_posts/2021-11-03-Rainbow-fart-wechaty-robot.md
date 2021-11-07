---
title: 彩虹屁机器人  开心每一天
author: Livingbody
categories: project
tags:
  - code
  - openapi
  - rainbow-fart
  - python
image: assets/2021/10-osschat-is-what-you-need-for-opensouce-community-operations/cover.webp
---

## 一、彩虹屁机器人     开心每一天

### 1.主要功能

* 1.彩虹屁，不开心哄你开心
* 2.舔狗日记，舔与被舔是不是都很开心啊哈哈
* 3.毒鸡汤，兄弟干了这碗鸡汤还能熬
* 4.带我去one，自动ps人像并动漫到one的每日美图美文中

### 2.所用技术

* 1.利用爬虫技术，爬取当天one优美句子、图片
* 2.利用PaddlePaddle超能力扣取微信人像照片
* 3.合并人像和one的图片
* 4.利用PaddlePaddle超能力风格化图片
* 5.利用图像处理超能力合并图像和语句
* 6.对接天行API，各种彩虹屁不停息

<iframe width='1000', height='800' src="//player.bilibili.com/player.html?aid=291932794&bvid=BV19f4y157NL&cid=377824174&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

![img](/assets/2021/11-Rainbow-fart-wechaty-robot/df042d8661e2466ab923b30a224c4c6888443c9f600a451a964ddc8d28011428.webp)

![img](/assets/2021/11-Rainbow-fart-wechaty-robot/a7cc431a0f2244aea6e24213b238a15adbfbb5c0da204080b765b708bbf7987c.webp)

![img](/assets/2021/11-Rainbow-fart-wechaty-robot/6433c5be0f8a4a888fb792712e62abd0194fa91fd958473e9398697aa7c1ccaf.webp)

![img](/assets/2021/11-Rainbow-fart-wechaty-robot/1f8df8fd8ce6492d95f3eabf43b0b04a894a289714c64c178587f46c71bf1ecb.webp)



## 二、wechaty配置

具体配置可参看前面的项目： [https://aistudio.baidu.com/aistudio/projectdetail/2177502](https://aistudio.baidu.com/aistudio/projectdetail/2177502)

## 三、代码

- 0.基于wechaty-python库
- 1.语言类对接天行API获取
- 2.图片类对接天行api获取，同时应用paddlehub进行处理


```python
import os
import asyncio
import paddlehub as hub
import cv2
import numpy as np
import sys, urllib, json
import urllib.request
import PIL

from wechaty import (
    Contact,
    FileBox,
    Message,
    Wechaty,
    ScanStatus,
)

model = hub.Module(name="humanseg_lite")


# 彩虹屁
def caihongpi():
    APIKEY = '#####################替换成你的###########################'
    url = 'http://api.tianapi.com/txapi/caihongpi/index?key=' + APIKEY

    req = urllib.request.Request(url)

    resp = urllib.request.urlopen(req)
    content = json.loads(resp.read())
    print(content)
    if (content):
        return content['newslist'][0]['content']
    else:
        return '你的彩虹屁机器人离岗了'


# 舔狗日记
def tiangouriji():
    APIKEY = '#####################替换成你的###########################'
    url = 'http://api.tianapi.com/txapi/tiangou/index?key=' + APIKEY

    req = urllib.request.Request(url)

    resp = urllib.request.urlopen(req)
    content = json.loads(resp.read())
    print(content)
    if (content):
        return content['newslist'][0]['content']
    else:
        return '你的彩虹屁机器人离岗了'


# 毒鸡汤
def dujitang():
    APIKEY = '#####################替换成你的###########################'
    url = 'http://api.tianapi.com/txapi/dujitang/index?key=' + APIKEY

    req = urllib.request.Request(url)

    resp = urllib.request.urlopen(req)
    content = json.loads(resp.read())
    print(content)
    if (content):
        return content['newslist'][0]['content']
    else:
        return '你的彩虹屁机器人离岗了'


# 下载one
def one():
    APIKEY = '50b404254dc7bbde25adc1432b1050b2'
    url = 'http://api.tianapi.com/txapi/one/index?key=' + APIKEY

    req = urllib.request.Request(url)

    resp = urllib.request.urlopen(req)
    content = json.loads(resp.read())
    print(content)
    if (content):
        word = content['newslist'][0]['word']
        img_url = content['newslist'][0]['imgurl']
        local_img = str(content['newslist'][0]['oneid']) + '.jpg'
        local_img = os.path.join('local_img', local_img)
        if not os.path.exists('local_img'):
            urllib.request.urlretrieve(img_url, local_img)
        return word, local_img
    else:
        return '你的彩虹屁机器人离岗了'


def img_koutu(img_path):
    res = model.segment(
        paths=[img_path],
        visualization=True,
        output_dir='humanseg_output')
    # 返回新图片的路径
    src = 'humanseg_output'
    files = os.listdir(src)
    files_path = [f'{src}\\{file}' for file in files]
    files_path.sort(key=lambda fp: os.path.getctime(fp), reverse=True)
    img_new_path = files_path[0]
    print(img_new_path)  # 绝对路径
    return img_new_path


def merge(img_path):
    # 当日美句、美图
    word, local_img = one()
    new_img_path = r'merge/result.png'

    frame = cv2.imread(local_img, cv2.IMREAD_COLOR)  # 捕获图像1
    height, width = frame.shape[:2]
    size = (int(width * 0.3), int(height * 0.3))
    frame = cv2.resize(frame, size, interpolation=cv2.INTER_AREA)
    logo = cv2.imread(img_path, cv2.IMREAD_UNCHANGED)
    rows, cols, channels = logo.shape
    dx, dy = 120, 150
    roi = frame[dx:dx + rows, dy:dy + cols]
    for i in range(rows):
        for j in range(cols):
            if not (logo[i, j][3] == 0):  # 透明的意思
                roi[i, j][0] = logo[i, j][0]
                roi[i, j][1] = logo[i, j][1]
                roi[i, j][2] = logo[i, j][2]
    frame[dx:dx + rows, dy:dy + cols] = roi
    cv2.imwrite(new_img_path, frame)
    return new_img_path, word


def add_word(new_img_path, word):
    # PingFang.ttc
    from PIL import ImageFont, Image, ImageDraw
    font = ImageFont.truetype('simhei.ttf', 20)
    image = Image.open(new_img_path)
    draw = ImageDraw.Draw(image)
    draw.text((70, 20), word, (220, 20, 60), font=font)
    # image.show()
    image.save(new_img_path, quality=50, subsampling=0)
    return new_img_path


def dongman(img_path):
    # 图片转换后存放的路径
    img_new_path = r'dongman/dongman.jpg'
    print(img_new_path)
    model = hub.Module(name='animegan_v2_shinkai_33')
    result = model.style_transfer(images=[cv2.imread(img_path)], visualization=True,
                                  output_dir='dongman')
    cv2.imwrite(img_new_path, result[0])
    return img_new_path


async def on_message(msg: Message):
    if msg.text() == '自我介绍':
        await msg.say(
            '这是彩虹屁机器人\n- 收到"ding", 自动回复"dong dong dong"\n- 收到"图片", 自动回复一张图片\n- 收到"彩虹屁"，自动回复花式彩虹屁\n- 收到"舔狗"，自动回复花式舔狗日记\n- 收到"毒鸡汤"，自动回复花式毒鸡汤\n-收到您的照片，自动返回旅游到one意境美图美句，让你开开心心朋友圈')
    if msg.text() == '彩虹屁':
        await msg.say(caihongpi())
    if msg.text() == '舔狗':
        await msg.say(tiangouriji())
    if msg.text() == '毒鸡汤':
        await msg.say(dujitang())
    if msg.text() == 'ding':
        await msg.say('这是自动回复: dong dong dong')

    if msg.text() == 'hi' or msg.text() == '你好':
        await msg.say('这是自动回复: 机器人目前的功能是\n- 收到"ding", 自动回复"dong dong dong"\n- 收到"图片", 自动回复一张图片')

    if msg.text() == '图片':
        url = 'https://ai.bdstatic.com/file/403BC03612CC4AF1B05FB26A19D99BAF'
    if msg.text() == '自我介绍':
        await msg.say(
            '这是彩虹屁机器人\n- 收到"ding", 自动回复"dong dong dong"\n- 收到"图片", 自动回复一张图片\n- 收到"彩虹屁"，自动回复花式彩虹屁\n-收到您的照片，自动返回旅游到one意境美图美句，让你开开心心朋友圈')
    # 如果收到的message是一张图片
    if msg.type() == Message.Type.MESSAGE_TYPE_IMAGE:
        # 1.消息图片存储
        # 将Message转换为FileBox
        file_box_2 = await msg.to_file_box()
        # 获取图片名
        img_name = file_box_2.name
        # 图片保存的路径
        img_path = './image/' + img_name
        # 将图片保存为本地文件
        print('1.消息图片存储', img_path)
        await file_box_2.to_file(file_path=img_path)
        # 2.抠图
        img_new_path = img_koutu(img_path)
        print('2.抠图', img_new_path)
        # 3.获取one图文并合并
        last_img, word = merge(img_new_path)
        print(' 3.获取one图文并合并', last_img, word)
        # 4.风格画图片
        last_img = dongman(last_img)
        print('4.风格画图片', last_img)
        #
        add_word(last_img, word)
        print('5.加入文字', last_img)
        print(word)
        # 6.发送图片
        file_box_3 = FileBox.from_file(last_img)
        await msg.say(file_box_3)


async def on_scan(
        qrcode: str,
        status: ScanStatus,
        _data,
):
    print('状态: ' + str(status))
    print('查看在线二维码: https://wechaty.js.org/qrcode/' + qrcode)


async def on_login(user: Contact):
    print(user)


async def main():
    # 确保我们在环境变量中设置了WECHATY_PUPPET_SERVICE_TOKEN
    if 'WECHATY_PUPPET_SERVICE_TOKEN' not in os.environ:
        print('''
            Error: WECHATY_PUPPET_SERVICE_TOKEN 没有配置，详情见链接：
            https://github.com/wechaty/python-wechaty-getting-started/#wechaty_puppet_service_token
        ''')

    bot = Wechaty()

    bot.on('扫描', on_scan)
    bot.on('登录', on_login)
    bot.on('消息', on_message)

    await bot.start()

    print('[Wechaty] 彩虹机器人启动了......')


asyncio.run(main())

```
