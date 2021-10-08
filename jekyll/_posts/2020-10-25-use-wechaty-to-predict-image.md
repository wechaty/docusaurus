---
title: "通过Wechaty使用深度学习模型预测图片类型"
author: lyleshaw
image: /assets/2020/10-use-wechaty-to-predict-image/screenshot.webp
categories: project
tags:
  - python
  - pytorch
  - machine-learning
  - productivity
---

Use wechaty to apply pytorch model via WeChat.

## 想法

在跑深度学习模型时，我时常会感觉调用一个模型好复杂，需要写好长好长的代码，而我又没有学过小程序开发，于是想到做一个用微信快速调用模型的小玩意儿。

本项目即是通过wechaty与微信通讯，利用fastapi中转数据并调用pytorch模型的实践。

同时，目前该项目仅仅作为一个MVP（最小可行产品），功能可能并不完善，在未来或许会加入模型训练完毕提醒/模型训练意外终止提醒等功能，敬请期待~

完整代码见[https://github.com/lyleshaw/Wechaty-Torch](https://github.com/lyleshaw/Wechaty-Torch)

## 原理

+ 用户在微信发送图片-->
+ -->wechaty收到图片并进行base64后post请求到后端-->
+ -->使用fastapi开发的后端收到图片的base64编码后调用模型-->
+ -->模型给与预测与置信度表传给后端-->
+ -->后端收到后向wechaty响应-->
+ -->wechaty收到数据后发送给用户.

## 文件结构

+ ```wechaty-torch.ts``` typescript文件，使用wechaty与微信通讯；
+ ```main.py``` 后端文件，基于fastapi开发，中转图片数据；
+ ```model.py``` 模型调用文件，给出预测和置信度；
+ ```model.pth``` **(由于模型文件过大，请按快速开始的说明手动下载)**模型文件（二进制），使用WideResNet在CIFAR-10数据集上进行训练，测试集准确率91.22%.

## 依赖库

typescript：请按照wechaty文档安装.

python：fastapi,uvicorn,torch,numpy,PIL

## 快速开始

> 请确保您已将所有依赖环境安装成功

1. **[点击这里](https://hdueducn-my.sharepoint.com/:u:/g/personal/lyle_hdu_edu_cn/EX3kZ7SAFlZIriRZPQdbVmkBGKWpp8CGviu7Nt9sqlaNrg?e=JLvgr2)** 下载```model.pth```，并将```model.pth```放到项目文件夹下
2. 在```wechaty-torch.ts```文件的```const token = 'YOUR_TOKEN_HERE'```处填入您的token（获取方式见wechaty文档）；
3. 在```model.py```文件的```os.chdir("Your PATH")```处修改为您的文件路径；
4. 运行```main.py```后运行```wechaty-torch.ts```.

## 开发过程

### wechaty部分

首先创建一个名叫wechaty-torch的bot；

```typescript
import { Message, Wechaty } from 'wechaty'
import { ScanStatus } from 'wechaty-puppet'
import { PuppetPadplus } from 'wechaty-puppet-padplus'
import QrcodeTerminal from 'qrcode-terminal'
var request = require('request')

const token = 'YOUR_TOKEN_HERE'

const puppet = new PuppetPadplus({
  token,
})


const name  = 'wechaty-torch'

const bot = new Wechaty({
  name: name,
  puppet,
})
```

然后扫码登录后，显示登录帐号；

```typescript
bot.on('scan', (qrcode, status) => {
  if (status === ScanStatus.Waiting) {
    QrcodeTerminal.generate(qrcode, {
      small: true
    })
  }
})


bot.on('login'  , user => console.info('Bot', `bot login: ${user}`))
```

message部分是该文件的重点，首先获取消息类型，如果非图片即跳出，是图片则将图转化为base64编码后使用request发送post请求到```http://127.0.0.1:8000/message```(后端服务器)，然后将响应值回复给用户；

```typescript
bot.on('message', async (msg: Message) => {
    if (msg.type() !== Message.Type.Audio) {
      return
    }
    const file = await msg.toFileBox();
    const bsimg = file.toBase64();
    var formData = {
      bsimg: bsimg,
    }
    try{
      request.post({url:'http://127.0.0.1:8000/message', formData: formData}, function (error:any, response:any, body:any) {  
          if (error) {
              console.log('Error :', error)
              return
          }
          console.log(' Body :', body)
          var response = JSON.parse(body)
          if(body.length > 0){
            const pred: string = response['pred']
            const other = response['other']
            msg.say(pred+'\n'+other)
          }
      })
    }catch(e){
      console.log(e)
    }
  })
```

最后启动机器人即可。

```typescript
bot.start().catch(async e => {
  console.info('Bot', 'init() fail:' + e)
  await bot.stop()
  process.exit(-1)
})
```

### 后端部分

首先，引入各种依赖库和模型调用文件；

```python
from typing import List
from fastapi import Depends, FastAPI
import time
from fastapi.middleware.cors import CORSMiddleware
from starlette.responses import RedirectResponse
from typing import TypeVar, Generic, Type, Any
from starlette.requests import Request
import sys
from pydantic import BaseModel
import os
import json

from model import get_bsimg_pred
```

然后创建一个FastAPI应用，并定义Message类（内含bsimg）；

```python
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Message(BaseModel):
    bsimg: str
```

简简单单写一个post请求，完事。

```python
@app.post("/message/")
async def m(msg: Message):
    content = get_bsimg_pred(bsimg=msg.bsimg)
    return {
        'content' : content
    }

```

### 模型部分

> 模型部分仅介绍部分函数。

**获得预测值和其余标签置信度**：传入tensor类型的变量img，返回pred:int 预测值ID、conf_list:list 其余变量置信度；

```python
def get_pred(img):
    x = Variable(img)
    x = x.to(DEVICE)
    with torch.no_grad():
        y_ = model(x)
    pred = y_.max(-1, keepdim=True)[1]
    pred = pred.tolist()[0][0]
    conf_list = nn.Softmax()(torch.tensor(y_[0])).tolist()
    return pred,conf_list
```

**将base64编码转换为PLT图片类型**：传入str类型的base64编码，返回PLT图片类型变量img；

```python
def base64_to_image(base64_str):
    base64_data = re.sub('^data:image/.+;base64,', '', base64_str)
    byte_data = base64.b64decode(base64_data)
    image_data = BytesIO(byte_data)
    img = Image.open(image_data)
    return img
```

**获得base64编码图片的预测内容**：传入str类型的base64编码，返回包含预测值和置信度的字符串；

```python
def get_bsimg_pred(bsimg: str):
    img_1 = transform(base64_to_image(bsimg))
    img_2 = []
    img_1 = img_1.tolist()
    img_2.append(img_1)
    img = torch.tensor(img_2)
    pred,con_list = get_pred(img)
    confi_list = ''
    for i in range(10):
        confi_list = confi_list + "%8s 的置信度为： %.2f%%\n" % (label[i],con_list[i]*100)
    return str(label[pred])+'\n'+confi_list
```

以上即是开发过程~
