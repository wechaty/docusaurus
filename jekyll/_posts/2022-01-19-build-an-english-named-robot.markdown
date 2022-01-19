---
title:"如何使用python-wechaty搭建英文取名机器人"
author:"ssstw"
categories:"artical"
tags:
 - python
 - wechaty
 image: /assets/2022/01-build-an-chatbot-with-python-wechaty/cover.webp
 ---

[![Wechaty Contributor Program](https://img.shields.io/badge/Wechaty-Contributor%20Program-green.svg)](https://wechaty.js.org/docs/contributing/)

## 前言
本文主要有两个目的：
(一)使用python-wechaty实现一个英文取名机器人，用户输入中文名(输入格式：英文取名：XXX)，即可获取对应的英文名，
扩展wechaty的应用场景。
(二)关于WeChaty网上已经有很多教程了，但是大多数是关于Linux或MacOS系统的，对于没接触过的Windows新手难免会走些弯路，
因此我把自己的搭建过程写成blog，以便大家参考。
由于很多微信号不能通过web登录，所以本篇使用Padlocal协议来建立一个微信聊天机器人。
搭建过程主要是参考[B站视频](https://www.bilibili.com/video/BV1BB4y1A714?from=search&seid=7669334820557139832&spm_id_from=333.337.0.0)，配合自己搜索的一些问题解决方案。

## 1、 连接远程服务
### 1.1 配置环境变量
(一)使用Padlocal协议需要[申请token](http://pad-local.com/)，注册之后可以申请一个免费的7天token。
(二)Windows系统需要先启用Hyper-V,然后下载Docker，具体过程可以参考[这里](https://www.runoob.com/docker/windows-docker-install.html)，需要注意的是Windows10 家庭版没有内置Hyper-V，
要自己[手动安装](https://zhuanlan.zhihu.com/p/356396288)。
(三)完成之后新建一个wechaty_test.sh文件，输入
```python
export WECHATY_LOG="verbose"
export WECHATY_PUPPET="wechaty-puppet-padlocal"
export WECHATY_PUPPET_PADLOCAL_TOKEN="puppet_padlocal_XXXXXX"   #刚刚申请的token

export WECHATY_PUPPET_SERVER_PORT="9001"
export WECHATY_TOKEN="1fe5f846-3cfb-401d-b20c-XXXXX"

#运行docker
docker run -ti \
  --name wechaty_puppet_service_token_gateway \
  --rm \
  -e WECHATY_LOG \
  -e WECHATY_PUPPET \
  -e WECHATY_PUPPET_PADLOCAL_TOKEN \
  -e WECHATY_PUPPET_SERVER_PORT \
  -e WECHATY_TOKEN \
  -p "$WECHATY_PUPPET_SERVER_PORT:$WECHATY_PUPPET_SERVER_PORT" \
  wechaty/wechaty:0.56
  ```
参考这篇[blog](https://wechaty.js.org/2021/02/03/python-wechaty-for-padlocal-puppet-service/)了解其中的参数含义，修改对应的参数。

### 1.2 连接服务 
运行wechaty_test.sh文件，Linux和MacOS可以直接运行。Windows可以在git bash中运行，输入
```
winpty sh wechaty_test.sh
```
出现下图界面就代表运行成功。

![1-1](/assets/2022/01-build-an-chatbot-with-python-wechaty/1-1.webp)

## 2、Python代码部分
接下实现英文取名机器人，修改ding-dong-bot.py中的代码。
### 2.1、通过API获取英文名
```python
#传入中文名，获取英文名
def get_english_name(realName):
    url = 'https://name.XXX.com/webapi/XXX'
    header = {
        'content-type': 'application/x-www-form-urlencoded'
    }
    data = {"realName": "realName", "gender": "male", "initialLetter": "", "spell": "0", "pronounce": "0", "popularity": "1",
            "pageIndex": "0"}
    timeout = 50
    try:
        req = requests.post(url, headers=header, data=data, timeout=timeout)  # 发post请求
        req.raise_for_status()
        result = req.json()
        if req.status_code == 200:
            # print(result)
            if result['IsSuccess']:
                enname = result['ResponseData']['result'][0]['EnName']
                cnname = result['ResponseData']['result'][0]['CnName']
                message = '你查询的第一个英文名是 ：{},谐音中文名是：{}'.format(enname, ' '.join(cnname))
            else:
                print('网络出错了 请稍后再试 ')
    except requests.exceptions.HTTPError as e:
        print(e.response.text)
    return message
```
### 2.2、全部的python代码
```python
import os
import asyncio
import urllib.request
import gzip
import json
import re
import requests

from wechaty import (
    Contact,
    FileBox,
    Message,
    Wechaty,
    ScanStatus,
)

os.environ['WECHATY_PUPPET'] = "wechaty-puppet-service"
os.environ['WECHATY_PUPPET_SERVICE_TOKEN'] = "puppet_padlocal_XXX"
os.environ['WECHATY_PUPPET_SERVICE_ENDPOINT'] = "127.0.0.1:9001"

#传入中文名，获取英文名
def get_english_name(realName):
    url = 'https://name.XXX.com/webapi/XXX'
    header = {
        'content-type': 'application/x-www-form-urlencoded'
    }
    data = {"realName": "realName", "gender": "male", "initialLetter": "", "spell": "0", "pronounce": "0", "popularity": "1",
            "pageIndex": "0"}
    timeout = 50
    try:
        req = requests.post(url, headers=header, data=data, timeout=timeout)  # 发post请求
        req.raise_for_status()
        result = req.json()
        if req.status_code == 200:
            # print(result)
            if result['IsSuccess']:
                enname = result['ResponseData']['result'][0]['EnName']
                cnname = result['ResponseData']['result'][0]['CnName']
                result_list = '你查询的第一个英文名是 ：{},谐音中文名是：{}'.format(enname, ' '.join(cnname))
            else:
                print('网络出错了 请稍后再试 ')
    except requests.exceptions.HTTPError as e:
        print(e.response.text)
    return result_list


async def on_message(msg: Message):
    """
    Message Handler for the Bot
    """
    if msg.is_self():
        return
    if msg.text()=="ding":
        await  msg.say("dong")
    #使用正则表达式判断是否查询英文名，并截取查询姓名
    if re.compile("英文名查询：.*").search(msg.text()):
        realname = msg.text()[6:len(msg.text())]
        await msg.say(get_english_name(realname))

async def on_scan(
        qrcode: str,
        status: ScanStatus,
        _data,
):
    """
    Scan Handler for the Bot
    """
    #BEGIN print('Status: ' + str(status))
    #END print('View QR Code Online: https://wechaty.js.org/qrcode/' + qrcode)

async def on_login(user: Contact):
    """
    Login Handler for the Bot
    """
    #BEGIN ENDprint(user)
    # TODO: To be written


async def main():
    """
    Async Main Entry
    """
    #
    # Make sure we have set WECHATY_PUPPET_SERVICE_TOKEN in the environment variables.
    #
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
### 2.3、运行结果
![运行结果](/assets/2022/01-build-an-chatbot-with-python-wechaty/2-1.webp)

## 结语

通过这个例子就能体会到python-WeChaty开箱即用的特性，让我们在开发过程中只需要专注于逻辑代码的实现。这是一篇入门博客，其中可能会有错误，欢迎指出，希望以后能使用WeChaty实现更多的功能。到这里就已经完成了一个基于WeChaty的小项目，感谢观看。