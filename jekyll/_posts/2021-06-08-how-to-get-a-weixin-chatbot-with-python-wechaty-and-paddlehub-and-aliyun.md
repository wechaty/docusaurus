---
title: "手把手教你用python-wechaty+paddlehub+阿里云白嫖一个智能微信机器人"
author: lovely-pig
categories: article
tags:
  - blog
  - study
  - python
  - paddlehub
image: /assets/2021/06-how-to-get-a-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun/cover.jpg
---

> 作者: [Lovely-Pig](https://github.com/Lovely-Pig/)，一只努力学习的可爱小猪

## 前言

这绝对是全网最细教程，没有之一

### 项目展示

![0](/assets/2021/06-how-to-get-a-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun/0.jpg)

## 1. 搞定云服务器部分

我这里是用的阿里云的云服务器，你也可以用其他的比如腾讯云的、华为云的等等。

### 1.1 注册一个阿里云账号并完成实名认证

阿里云官网: [https://account.aliyun.com/](https://account.aliyun.com/)

![1-1-1](/assets/2021/06-how-to-get-a-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun/1-1-1.jpg)

![1-1-2](/assets/2021/06-how-to-get-a-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun/1-1-2.jpg)

### 1.2 点击底部的"免费试用"

![1-2](/assets/2021/06-how-to-get-a-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun/1-2.jpg)

### 1.3 点击右下角"了解试用"

![1-3](/assets/2021/06-how-to-get-a-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun/1-3.jpg)

### 1.4 选择一款产品

![1-4](/assets/2021/06-how-to-get-a-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun/1-4.jpg)

### 1.5 选择操作系统为Ubuntu, 点击"立即购买"

![1-5](/assets/2021/06-how-to-get-a-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun/1-5.jpg)

### 1.6 接下来打开控制台

![1-6](/assets/2021/06-how-to-get-a-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun/1-6.jpg)

### 1.7 找到左边的云服务器ECS打开

![1-7](/assets/2021/06-how-to-get-a-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun/1-7.jpg)

### 1.8 进入我们刚才创建的实例

![1-8](/assets/2021/06-how-to-get-a-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun/1-8.jpg)

### 1.9 点击"安全组"

![1-9](/assets/2021/06-how-to-get-a-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun/1-9.png)

### 1.10 点击"配置规则"

![1-10](/assets/2021/06-how-to-get-a-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun/1-10.png)

### 1.11 点击"手动添加", "目的"栏填入8080/8080, "源"栏填入0.0.0.0/0, 点击"保存"

![1-11](/assets/2021/06-how-to-get-a-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun/1-11.png)

### 1.12 回到刚才的页面, 点击"远程连接"

![1-12](/assets/2021/06-how-to-get-a-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun/1-12.png)

### 1.13 点击"立即登录"

![1-13](/assets/2021/06-how-to-get-a-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun/1-13.png)

### 1.14 要输入密码, 我们之前没有设置密码, 所以我们返回刚才的页面去设置密码

![1-14](/assets/2021/06-how-to-get-a-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun/1-14.png)

### 1.15 点击"重置实例密码"

![1-15](/assets/2021/06-how-to-get-a-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun/1-15.png)

### 1.16 设置新密码完成后, 再次进入远程连接

![1-16-1](/assets/2021/06-how-to-get-a-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun/1-16-1.png)

![1-16-2](/assets/2021/06-how-to-get-a-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun/1-16-2.png)

### 1.17 我们就进入到终端里面了

![1-17](/assets/2021/06-how-to-get-a-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun/1-17.png)

### 1.18 在终端里输入以下指令

免费token申请地址: [http://pad-local.com](http://pad-local.com)

(温馨提示: 免费的token有效期为7天，如需使用有效期更长的token，请访问wechaty官网: [https://wechaty.js.org/](https://wechaty.js.org/))

或者使用UUID，链接: [https://www.uuidgenerator.net/version4](https://www.uuidgenerator.net/version4)

```python
>>> apt update

>>> apt install docker.io

>>> docker pull wechaty/wechaty:latest

>>> export WECHATY_LOG="verbose"

>>> export WECHATY_PUPPET="wechaty-puppet-wechat"

>>> export WECHATY_PUPPET_SERVER_PORT="8080"

>>> export WECHATY_TOKEN="your_token_at_here"

>>> docker run -ti --name wechaty_puppet_service_token_gateway --rm -e WECHATY_LOG -e WECHATY_PUPPET -e WECHATY_TOKEN -e WECHATY_PUPPET_SERVER_PORT -p "$WECHATY_PUPPET_SERVER_PORT:$WECHATY_PUPPET_SERVER_PORT" wechaty/wechaty:latest
```

![1-18](/assets/2021/06-how-to-get-a-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun/1-18.png)

### 1.19 检查是否运行成功

- 输入网址: <https://api.chatie.io/v0/hosties/your_token_at_here>，例如我输入的地址就是这个: <https://api.chatie.io/v0/hosties/puppet_padlocal_ef0c112ddf9b49fdaa8242b87b83b030>
- 如果返回了服务器的ip地址以及端口号，比如{"ip":"121.43.228.90","port":8080}，就说明运行成功了，如果返回的是{"ip":"0.0.0.0","port":0}，就说明没有运行成功
![1-19](/assets/2021/06-how-to-get-a-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun/1-19.png)

### 1.20 运行后会输出一大堆东西，这时候我们找到一个Online QR Code的地址点击进去

![1-20](/assets/2021/06-how-to-get-a-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun/1-20.png)

### 1.21 就会出现下面这个二维码，用微信扫码即可(温馨提示: 用哪个微信号扫二维码哪个微信号就是机器人)

![1-21](/assets/2021/06-how-to-get-a-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun/1-21.png)

### 1.22 点击"登录"，"继续登录"

![1-22-1](/assets/2021/06-how-to-get-a-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun/1-22-1.jpg)

![1-22-2](/assets/2021/06-how-to-get-a-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun/1-22-2.jpg)

### 1.23 会看到最上面有一个"桌面微信已登录"就说明成功啦

![1-23](/assets/2021/06-how-to-get-a-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun/1-23.jpg)

## 2. 在AI Studio上跑一个简单的ding-dong机器人

AI Studio官网地址: [https://aistudio.baidu.com/aistudio/index](https://aistudio.baidu.com/aistudio/index)

### 2.1 创建一个脚本项目(温馨提示: 在notebook的终端里跑不起来)

![2-1](/assets/2021/06-how-to-get-a-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun/2-1.png)

#### 2.1.1 点击"下一步"

![2-1-1](/assets/2021/06-how-to-get-a-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun/2-1-1.png)

#### 2.1.2 填好项目名称，项目标签，项目描述，点击"创建"

![2-1-2](/assets/2021/06-how-to-get-a-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun/2-1-2.png)

#### 2.1.3 进入项目

![2-1-3](/assets/2021/06-how-to-get-a-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun/2-1-3.png)

### 2.2 在`run.sh`文件中写入以下内容

```python
pip install --upgrade pip
pip install wechaty

# 设置环境变量
export WECHATY_PUPPET=wechaty-puppet-service
export WECHATY_PUPPET_SERVICE_TOKEN=your_token_at_here

# 运行python文件
python run.py
```

### 2.3 在`run.py`文件中写入以下内容

```python
import asyncio
import logging
from typing import Optional, Union

from wechaty_puppet import FileBox, ScanStatus  # type: ignore

from wechaty import Wechaty, Contact
from wechaty.user import Message, Room

logging.basicConfig(level=logging.INFO)
log = logging.getLogger(__name__)


class MyBot(Wechaty):
    """
    listen wechaty event with inherited functions, which is more friendly for
    oop developer
    """
    def __init__(self):
        super().__init__()

    async def on_message(self, msg: Message):
        """
        listen for message event
        """
        from_contact = msg.talker()
        text = msg.text()
        room = msg.room()
        
        # 不处理群消息
        if room is None:
            if text == 'hi' or text == '你好':
                conversation = from_contact
                await conversation.ready()
                await conversation.say('这是自动回复：机器人目前的功能有：\n1. 收到"ding"，自动回复"dong dong dong"\n2. 收到"图片"，自动回复一张图片')

            if text == 'ding':
                conversation = from_contact
                await conversation.ready()
                await conversation.say('这是自动回复：dong dong dong')

            if text == '图片':
                conversation = from_contact

                # 从网络上加载图片到file_box
                img_url = 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
                file_box = FileBox.from_url(img_url, name='xx.jpg')
                
                await conversation.ready()
                await conversation.say('这是自动回复：')
                await conversation.say(file_box)

    async def on_login(self, contact: Contact):
        print(f'user: {contact} has login')

    async def on_scan(self, status: ScanStatus, qr_code: Optional[str] = None,
                      data: Optional[str] = None):
        contact = self.Contact.load(self.contact_id)
        print(f'user <{contact}> scan status: {status.name} , '
              f'qr_code: {qr_code}')


bot: Optional[MyBot] = None


async def main():
    """doc"""
    # pylint: disable=W0603
    global bot
    bot = MyBot()
    await bot.start()


asyncio.run(main())
```

### 2.4 运行任务

#### 2.4.1 启动命令填`sh run.sh`, 点击"提交"

![2-4-1](/assets/2021/06-how-to-get-a-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun/2-4-1.png)

#### 2.4.2 选择任务运行环境(双机四卡它不香吗)

![2-4-2](/assets/2021/06-how-to-get-a-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun/2-4-2.png)

#### 2.4.3 任务要排队，等一小会儿看到在执行中了就可以点击"查看日志"了

![2-4-3](/assets/2021/06-how-to-get-a-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun/2-4-3.png)

#### 2.4.4 如果看到下面的这种情况就说明机器人已经跑起来啦，赶紧去给你的机器人发信息试一试吧

![2-4-4](/assets/2021/06-how-to-get-a-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun/2-4-4.png)

## 3. 接入paddlehub模型使机器人更智能

paddlehub官网地址: [https://www.paddlepaddle.org.cn/hub](https://www.paddlepaddle.org.cn/hub)

![3-0-1](/assets/2021/06-how-to-get-a-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun/3-0-1.png)

模型库地址: [https://www.paddlepaddle.org.cn/hublist](https://www.paddlepaddle.org.cn/hublist)

![3-0-2](/assets/2021/06-how-to-get-a-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun/3-0-2.png)

### 3.1 在paddlehub找一个你需要的模型，这里我以图像生成模型作为演示

模型地址: [https://www.paddlepaddle.org.cn/hubdetail?name=animegan_v2_shinkai_33&en_category=GANs](https://www.paddlepaddle.org.cn/hubdetail?name=animegan_v2_shinkai_33&en_category=GANs)

![3-1](/assets/2021/06-how-to-get-a-weixin-chatbot-with-python-wechaty-and-paddlehub-and-aliyun/3-1.png)

### 3.2 修改`run.sh`文件

```python
pip install --upgrade pip
pip install wechaty

# 下载模型
hub install animegan_v2_shinkai_33

# 设置环境变量
export WECHATY_PUPPET=wechaty-puppet-service
export WECHATY_PUPPET_SERVICE_TOKEN=your_token_at_here

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
import cv2
import asyncio
import logging
import paddlehub as hub
from typing import Optional, Union

from wechaty_puppet import FileBox, ScanStatus  # type: ignore

from wechaty import Wechaty, Contact
from wechaty.user import Message, Room

logging.basicConfig(level=logging.INFO)
log = logging.getLogger(__name__)

# 定义paddlehub模型
model = hub.Module(name='animegan_v2_shinkai_33', use_gpu=True)

# 将图片转换为动漫风格
def img_to_anime(img_name, img_path):
    # 图片名保持不变
    img_new_name = img_name

    # 图片路径改变
    img_new_path = './images-new/' + img_new_name

    # 模型预测
    result = model.style_transfer(images=[cv2.imread(img_path)])

    # 将新图片存储到新路径
    cv2.imwrite(img_new_path, result[0])

    return img_new_path


class MyBot(Wechaty):
    """
    listen wechaty event with inherited functions, which is more friendly for
    oop developer
    """
    def __init__(self):
        super().__init__()

    async def on_message(self, msg: Message):
        """
        listen for message event
        """
        from_contact = msg.talker()
        text = msg.text()
        type = msg.type()
        room = msg.room()

        # 不处理群消息
        if room is None:
            if text == 'hi' or text == '你好':
                conversation = from_contact
                await conversation.ready()
                await conversation.say('这是自动回复：机器人目前的功能有：\n1 收到"ding"，自动回复"dong dong dong"\n2 收到"图片"，自动回复一张图片\n3 收到一张图片，将这张图片转换为动漫风格并返回')

            if text == 'ding':
                conversation = from_contact
                await conversation.ready()
                await conversation.say('这是自动回复：dong dong dong')

            if text == '图片':
                conversation = from_contact

                # 从网络上加载图片到file_box
                img_url = 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
                file_box = FileBox.from_url(img_url, name='xx.jpg')
                
                await conversation.ready()
                await conversation.say('这是自动回复：')
                await conversation.say(file_box)

            # 如果消息类型是图片
            if type == Message.Type.MESSAGE_TYPE_IMAGE:
                conversation = from_contact
                await conversation.ready()
                await conversation.say('这是自动回复：正在飞速处理中...')

                # 将msg转换为file_box
                file_box = await msg.to_file_box()

                # 获取图片名
                img_name = file_box.name

                # 图片保存的路径
                img_path = './images/' + img_name

                # 将图片保存到文件中
                await file_box.to_file(file_path=img_path, overwrite=True)

                # 调用函数，获取图片新路径
                img_new_path = img_to_anime(img_name, img_path)

                # 从文件中加载图片到file_box
                file_box_new = FileBox.from_file(img_new_path)

                await conversation.say(file_box_new)


    async def on_login(self, contact: Contact):
        print(f'user: {contact} has login')

    async def on_scan(self, status: ScanStatus, qr_code: Optional[str] = None,
                      data: Optional[str] = None):
        contact = self.Contact.load(self.contact_id)
        print(f'user <{contact}> scan status: {status.name} , '
              f'qr_code: {qr_code}')


bot: Optional[MyBot] = None


async def main():
    """doc"""
    # pylint: disable=W0603
    global bot
    bot = MyBot()
    await bot.start()


asyncio.run(main())
```

### 3.4 像之前一样提交任务就可以啦

## 后记

### 机器人目前还不太完善的地方

- 只要收到一张图片就会自动去转换
- 可能会在图片转换的时候卡住，然后就处理不了其他信息了
- 只有这一个功能，更多功能等你自己去发掘啦

### 更多功能

- 请访问我的GitHub仓库: [https://github.com/Lovely-Pig/paddlehub-wechaty](https://github.com/Lovely-Pig/paddlehub-wechaty)
- 如果GitHub打不开的话，我在AI Studio上也准备了一个相同的仓库: [https://aistudio.baidu.com/aistudio/projectdetail/1886330](https://aistudio.baidu.com/aistudio/projectdetail/1886330)
- 觉得不错的话给我一个Star哦🎉🎉🎉

### 参考资料

- AI Studio官网: [https://aistudio.baidu.com/aistudio/index](https://aistudio.baidu.com/aistudio/index)
- PaddleHub官网：[https://www.paddlepaddle.org.cn/hub](https://www.paddlepaddle.org.cn/hub)
- python-wechaty: [https://github.com/wechaty/python-wechaty](https://github.com/wechaty/python-wechaty)
- python-wechaty-getting-started: [https://github.com/wechaty/python-wechaty-getting-started](https://github.com/wechaty/python-wechaty-getting-started)
- [教你用python-wechaty和web协议开发机器人](https://wechaty.js.org/2021/04/17/python-wechaty-use-web/)
