---
title: "手把手教你用python-wechaty+paddlehub+阿里云白嫖一个智能微信机器人"
author: Lovely-Pig
categories: article
tags:
  - blog
  - study
  - python
  - paddlehub
image: /assets/2021/06-how-to-obtain-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun/cover.jpg
---

> 作者: [Lovely-Pig](https://github.com/Lovely-Pig/)，一个热爱技术的大二学生

## 前言

- 这绝对是全网最细教程，没有之一

**项目展示**

![](https://ai-studio-static-online.cdn.bcebos.com/1f0e8a29e38e4768b3f95769e42eaa2e0f69c243c45746e3bb78c03bc5ef66d5)


## 1. 搞定云服务器部分

我这里是用的阿里云的云服务器，你也可以用其他的比如腾讯云的、华为云的等等。

### 1.1 注册一个阿里云账号并完成实名认证
阿里云官网: [https://account.aliyun.com/](https://account.aliyun.com/)

![](https://ai-studio-static-online.cdn.bcebos.com/0f529c2f1a3240f2aa2040cfd8d676fabf5a11fe404c46b4ab3c5747b1446317)

![](https://ai-studio-static-online.cdn.bcebos.com/4cb2feb515cb4daeaed766a59e9909ca73c3453e6fee436783367d4a05ea88af)

### 1.2 点击底部的**免费试用**
![](https://ai-studio-static-online.cdn.bcebos.com/24f2d6d9df9246e88dc3c55d559fd842807948f47cbc4f0d98c1b7480df2b4a8)

### 1.3 点击右下角**了解试用**
![](https://ai-studio-static-online.cdn.bcebos.com/2c0366a5b2954e5f968e78c036e66210bd2a299cf32048b98fa5e02aae8fe7a2)

### 1.4 选择一款产品
![](https://ai-studio-static-online.cdn.bcebos.com/815e1a8332a34985a75fdf177e2cba141f496582eb0143118147f88cb62ae97c)

### 1.5 选择操作系统为Ubuntu, 点击**立即购买**
![](https://ai-studio-static-online.cdn.bcebos.com/d138801c14ae4a0ab659814db62ca6df3fd7d43adb2f416e9b0d3bcdfc3e9768)

### 1.6 接下来打开**控制台**
![](https://ai-studio-static-online.cdn.bcebos.com/0d283b2ef43640c8a2f1355e41a86917185473eed7654cb981b938f8355034f2)

### 1.7 找到左边的**云服务器ECS**打开
![](https://ai-studio-static-online.cdn.bcebos.com/0f112743114947b3bc65921cd4852224fec40bf0559044db9022fad14425c7c3)

### 1.8 进入我们刚才创建的实例
![](https://ai-studio-static-online.cdn.bcebos.com/0564662338cd4288a37e2c858f8959b99ef03a878f0e493b90e09e6d9bba4659)

### 1.9 点击**安全组**
![](https://ai-studio-static-online.cdn.bcebos.com/ed27ff5d2dc843daad926c55d76bb043e0694f6cd7b04a949dbad26d1ce91fa2)

### 1.10 点击**配置规则**
![](https://ai-studio-static-online.cdn.bcebos.com/26edd84e42e94f5d842736eb9829255550b60f0e259046f4b45b31c24a0aa72d)

### 1.11 点击**手动添加**, **目的**栏填入8080/8080, **源**栏填入0.0.0.0/0, 点击**保存**
![](https://ai-studio-static-online.cdn.bcebos.com/3872aa9eaa4f465b8792b3794b1ac7baec3d6a02d1d447178e6407633e317edf)

### 1.12 回到刚才的页面, 点击**远程连接**
![](https://ai-studio-static-online.cdn.bcebos.com/d9e79a14c96241c796faf7f998d51195a7eed9f1e1354b4b8879d594fd925d54)

### 1.13 点击**立即登录**
![](https://ai-studio-static-online.cdn.bcebos.com/1274156a0db94c5aba7140430eb674dc38d77641a99f4c4297910647f2815945)

### 1.14 要输入密码, 我们之前没有设置密码, 所以我们返回刚才的页面去设置密码
![](https://ai-studio-static-online.cdn.bcebos.com/a46cbab9debc4759804c3e121ac3dac85ab641e27e934397bd31ed41b81a5dc0)

### 1.15 点击**重置实例密码**
![](https://ai-studio-static-online.cdn.bcebos.com/1cb4d87ba95947c391397de20c14c38e05cfa42877434b448f9ab9d7f91aaed5)

### 1.16 设置新密码完成后, 再次进入**远程连接**
![](https://ai-studio-static-online.cdn.bcebos.com/b22836677ec7419b8823e245c9cf20e6b0086d97707a4f3b929dd77905548830)

![](https://ai-studio-static-online.cdn.bcebos.com/edd5eb864ce84869b737b80821173b5a374d64eb49944147ae2b5bd4060b7e0b)

### 1.17 我们就进入到终端里面了
![](https://ai-studio-static-online.cdn.bcebos.com/c6b149adcefa436eb2ef127d31d5f14f7bd5878e58cd46838c7914f9cdb8b6cc)

### 1.18 在终端里输入以下指令
免费token申请地址: [http://pad-local.com](http://pad-local.com)

(温馨提示: 免费的token有效期为7天，如需使用有效期更长的token，请访问wechaty官网: [https://wechaty.js.org/](https://wechaty.js.org/))


```python
>>> apt update

>>> apt install docker.io

>>> docker pull wechaty/wechaty:latest

>>> export WECHATY_LOG="verbose"

>>> export WECHATY_PUPPET="wechaty-puppet-wechat"

>>> export WECHATY_PUPPET_SERVER_PORT="8080"

>>> export WECHATY_TOKEN="puppet_padlocal_xxxxxx" # 这里输入你自己的token

>>> docker run -ti --name wechaty_puppet_service_token_gateway --rm -e WECHATY_LOG -e WECHATY_PUPPET -e WECHATY_TOKEN -e WECHATY_PUPPET_SERVER_PORT -p "$WECHATY_PUPPET_SERVER_PORT:$WECHATY_PUPPET_SERVER_PORT" wechaty/wechaty:latest
```

![](https://ai-studio-static-online.cdn.bcebos.com/fe13e5dffbea4b3b9d87e172b6afff824adb4f4196004568b17eb29b9219c980)

### 1.19 检查是否运行成功
- 输入网址: https://api.chatie.io/v0/hosties/xxxxxx (后面的xxxxxx就是你的token)
例如我输入的地址就是这个: https://api.chatie.io/v0/hosties/puppet_padlocal_ef0c112ddf9b49fdaa8242b87b83b030

- 如果返回了服务器的ip地址以及端口号，比如{"ip":"121.43.228.90","port":8080}，就说明运行成功了
如果返回的是{"ip":"0.0.0.0","port":0}，就说明没有运行成功
![](https://ai-studio-static-online.cdn.bcebos.com/25733b3b40b84403afd2b297477d32c97045ca57c9724741ae36ced81abbb45a)

### 1.20 运行后会输出一大堆东西，这时候我们找到一个Online QR Code的地址点击进去
![](https://ai-studio-static-online.cdn.bcebos.com/537cdcb683e64b658281b5c8abd873c1e13e259417734d18b6dffa251c5f7476)

### 1.21 就会出现下面这个二维码，用微信扫码即可(温馨提示: 用哪个微信号扫二维码哪个微信号就是机器人)
![](https://ai-studio-static-online.cdn.bcebos.com/1402bbed02c74e4dbbf6327cfa79f7c849a6a53443504a76b76f91867c3121eb)

### 1.22 点击**登录**，**继续登录**
![](https://ai-studio-static-online.cdn.bcebos.com/6983ebdc380445ff9e7ad9dcfdd723d0f82a503bd49d491ab1baf18403e3a80f)

![](https://ai-studio-static-online.cdn.bcebos.com/dbd7341f24df4b7ca6d8ae6af984f7a5c45eb211d5f144e383d54d7f7707b23a)

### 1.23 会看到最上面有一个**桌面微信已登录**就说明成功啦
![](https://ai-studio-static-online.cdn.bcebos.com/05738d2814c24bef9bafef59bde17c85b35aa9992e3749bcafd1f4fcfaa1bba6)


## 2. 在AI Studio上跑一个简单的ding-dong机器人

### 2.1 创建一个脚本项目(温馨提示: 在notebook的终端里跑不起来)
![](https://ai-studio-static-online.cdn.bcebos.com/4f0e16b6914048da81b8159b2ddcd42e26d61db2a846416baeb402b263e40e58)

#### 2.1.1 点击**下一步**
![](https://ai-studio-static-online.cdn.bcebos.com/ed0e8e56d45c4aca9907efc1ac90305659099189be194e8cbbe43aafc65372cf)

#### 2.1.2 填好项目名称，项目标签，项目描述，点击**创建**
![](https://ai-studio-static-online.cdn.bcebos.com/1f88b619b1b3424f865241de16696b55c9c1fbbf95224fe48f3051c2304a0986)

#### 2.1.3 进入项目
![](https://ai-studio-static-online.cdn.bcebos.com/7313400edd774d4ba85bde88a3751b1fad757d29f20042a4bf787491844ac098)


### 2.2 在`run.sh`文件中写入以下内容


```python
pip install --upgrade pip
pip install wechaty

# 设置环境变量
export WECHATY_PUPPET=wechaty-puppet-service
export WECHATY_PUPPET_SERVICE_TOKEN=puppet_padlocal_xxxxxx

# 运行python文件
python run.py
```

### 2.3 在`run.py`文件中写入以下内容


```python
import os
import asyncio

from wechaty import (
    Contact,
    FileBox,
    Message,
    Wechaty,
    ScanStatus,
)


async def on_message(msg: Message):
    if msg.text() == 'ding':
        await msg.say('这是自动回复: dong dong dong')

    if msg.text() == 'hi' or msg.text() == '你好':
        await msg.say('这是自动回复: 机器人目前的功能是\n- 收到"ding", 自动回复"dong dong dong"\n- 收到"图片", 自动回复一张图片')

    if msg.text() == '图片':
        url = 'http://qrul2d5a1.hn-bkt.clouddn.com/image/street.jpg'
        
        # 构建一个FileBox
        file_box_1 = FileBox.from_url(url=url, name='xx.jpg')

        await msg.say(file_box_1)


async def on_scan(
        qrcode: str,
        status: ScanStatus,
        _data,
):
    print('Status: ' + str(status))
    print('View QR Code Online: https://wechaty.js.org/qrcode/' + qrcode)


async def on_login(user: Contact):
    print(user)


async def main():
    # 确保我们在环境变量中设置了WECHATY_PUPPET_SERVICE_TOKEN
    if 'WECHATY_PUPPET_SERVICE_TOKEN' not in os.environ:
        print('''
            Error: WECHATY_PUPPET_SERVICE_TOKEN is not found in the environment variables
            You need a TOKEN to run the Python Wechaty. Please goto our README for details
            https://github.com/wechaty/python-wechaty-getting-started/#wechaty_puppet_service_token
        ''')

    bot = Wechaty()

    bot.on('scan',      on_scan)
    bot.on('login',     on_login)
    bot.on('message',   on_message)

    await bot.start()

    print('[Python Wechaty] Ding Dong Bot started.')


asyncio.run(main())

```

### 2.4 运行任务

#### 2.4.1 启动命令填`sh run.sh`, 点击**提交**
![](https://ai-studio-static-online.cdn.bcebos.com/0669cf26cfb94b2b9afed662624f4055d6d22725357741f8b461423958aedba3)

#### 2.4.2 选择任务运行环境(双机四卡它不香吗)
![](https://ai-studio-static-online.cdn.bcebos.com/bcd65300eae8425283190fd1a6edd97e3ca29345bf7c45869d1f2d186361937c)

#### 2.4.3 任务要排队，等一小会儿看到在执行中了就可以点击**查看日志**了
![](https://ai-studio-static-online.cdn.bcebos.com/ee272df555274b3f8f9d18e254944545f2e73c4da02349118b32357c6076bfad)

#### 2.4.4 如果看到下面的这种情况就说明机器人已经跑起来啦，赶紧去给你的机器人发信息试一试吧
![](https://ai-studio-static-online.cdn.bcebos.com/8aceab806bd74c0eb44934644073c333ccce93a9fd884f209a55af42f67292d5)


## 3. 接入paddlehub模型使机器人更智能
paddlehub官网地址: [https://www.paddlepaddle.org.cn/hub](https://www.paddlepaddle.org.cn/hub)

![](https://ai-studio-static-online.cdn.bcebos.com/eeff0549e4f4407787c41558eabc1e156fc5bb53317647a4bf90643d77b6d1e2)

模型库地址: [https://www.paddlepaddle.org.cn/hublist](https://www.paddlepaddle.org.cn/hublist)

![](https://ai-studio-static-online.cdn.bcebos.com/e211ced240d84c098344027a3f40343f4883e07dd774430190bbd521894a63e6)

### 3.1 在paddlehub找一个你需要的模型，这里我以图像生成模型作为演示
模型地址: [https://www.paddlepaddle.org.cn/hubdetail?name=animegan_v2_shinkai_33&en_category=GANs](https://www.paddlepaddle.org.cn/hubdetail?name=animegan_v2_shinkai_33&en_category=GANs)

![](https://ai-studio-static-online.cdn.bcebos.com/04ae7c14912841d0b099243f732ade6f73dba6f006e244b98ee64efde49b85bc)


### 3.2 修改`run.sh`文件


```python
pip install --upgrade pip
pip install wechaty

# 下载模型
hub install animegan_v2_shinkai_33

# 设置环境变量
export WECHATY_PUPPET=wechaty-puppet-service
export WECHATY_PUPPET_SERVICE_TOKEN=puppet_padlocal_xxxxxx

# 设置使用GPU进行模型预测
export CUDA_VISIBLE_DEVICES=0

# 创建两个保存图片的文件夹
mkdir -p image
mkdir -p image-new

# 运行python文件
python run.py
```

### 3.3 修改`run.py`文件


```python
import os
import cv2
import asyncio
import numpy as np
import paddlehub as hub

from wechaty import (
    Contact,
    FileBox,
    Message,
    Wechaty,
    ScanStatus,
)

# 定义model
model = hub.Module(name='animegan_v2_shinkai_33', use_gpu=True)


def img_transform(img_path, img_name):
    """
    将图片转换为新海诚《你的名字》、《天气之子》风格的图片
    img_path: 图片的路径
    img_name: 图片的文件名
    """
    # 图片转换后存放的路径
    img_new_path = './image-new/' + img_name

    # 模型预测
    result = model.style_transfer(images=[cv2.imread(img_path)])

    # 将图片保存到指定路径
    cv2.imwrite(img_new_path, result[0])

    # 返回新图片的路径
    return img_new_path


async def on_message(msg: Message):
    if msg.text() == 'ding':
        await msg.say('这是自动回复: dong dong dong')

    if msg.text() == 'hi' or msg.text() == '你好':
        await msg.say('这是自动回复: 机器人目前的功能是\n- 收到"ding", 自动回复"dong dong dong"\n- 收到"图片", 自动回复一张图片\n- 收到一张图片, 将这张图片转换为动漫风格并返回')

    if msg.text() == '图片':
        url = 'http://qrul2d5a1.hn-bkt.clouddn.com/image/street.jpg'
        
        # 构建一个FileBox
        file_box_1 = FileBox.from_url(url=url, name='xx.jpg')

        await msg.say(file_box_1)

    # 如果收到的message是一张图片
    if msg.type() == Message.Type.MESSAGE_TYPE_IMAGE:

        # 将Message转换为FileBox
        file_box_2 = await msg.to_file_box()

        # 获取图片名
        img_name = file_box_2.name

        # 图片保存的路径
        img_path = './image/' + img_name

        # 将图片保存为本地文件
        await file_box_2.to_file(file_path=img_path)

        # 调用图片风格转换的函数
        img_new_path = img_transform(img_path, img_name)

        # 从新的路径获取图片
        file_box_3 = FileBox.from_file(img_new_path)

        await msg.say(file_box_3)


async def on_scan(
        qrcode: str,
        status: ScanStatus,
        _data,
):
    print('Status: ' + str(status))
    print('View QR Code Online: https://wechaty.js.org/qrcode/' + qrcode)


async def on_login(user: Contact):
    print(user)


async def main():
    # 确保我们在环境变量中设置了WECHATY_PUPPET_SERVICE_TOKEN
    if 'WECHATY_PUPPET_SERVICE_TOKEN' not in os.environ:
        print('''
            Error: WECHATY_PUPPET_SERVICE_TOKEN is not found in the environment variables
            You need a TOKEN to run the Python Wechaty. Please goto our README for details
            https://github.com/wechaty/python-wechaty-getting-started/#wechaty_puppet_service_token
        ''')

    bot = Wechaty()

    bot.on('scan',      on_scan)
    bot.on('login',     on_login)
    bot.on('message',   on_message)

    await bot.start()

    print('[Python Wechaty] Ding Dong Bot started.')


asyncio.run(main())

```

### 3.4 像之前一样提交任务就可以啦

## 后记

**机器人目前还不太完善的地方**

- 只要收到一张图片就会自动去转换

- 可能会在图片转换的时候卡住，然后就处理不了其他信息了

- 只有这一个功能，更多功能等你自己去发掘啦

**更多功能**

- 请访问我的GitHub仓库: [https://github.com/Lovely-Pig/paddlehub-wechaty](https://github.com/Lovely-Pig/paddlehub-wechaty)

- 如果GitHub打不开的话，我在AI Studio上也准备了一个相同的仓库: [https://aistudio.baidu.com/aistudio/projectdetail/1886330](https://aistudio.baidu.com/aistudio/projectdetail/1886330)

- 觉得不错的话给我一个Star哦🎉🎉🎉