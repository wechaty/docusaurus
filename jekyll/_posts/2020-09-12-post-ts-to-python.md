---
title: "Wechaty 将 TS 转发到 Python 的探索实践"
author: jcq15
image: /assets/2020/post-ts-to-python/screenshot.webp
categories: project
tags:
  - padplus
  - project
  - nodejs
  - python
  - utility
---

报时机器人，每逢整点在群里发送报时信息。

## Wechaty 将 TS 转发到 Python 的探索实践

许多朋友可能对 Python 更为熟悉，而对 Typescirpt 则比较生疏。同时 Python 在文件处理、图像处理、机器学习等领域更为简易灵活。如果能将微信机器人接入 Python 将为开发者带来极大的便利。目前官方正在开发 Python 版本的机器人，在开发完善之前我们可以使用一些替代方案。本项目以一个简单的报时机器人为例，展示了如何将 Typescript 程序收到的消息转发给 Python 后端处理，可以作为 Python 版 Wechaty 正式上线之前的简易替代。

项目地址：<https://github.com/jcq15/wechaty>

联系作者：<mailto:jcq15@mails.tsinghua.edu.cn>

## 使用方法

报时机器人，每逢整点在群里发送报时信息。具体报时内容可以由群友设置。

基本功能：

- 每逢整点自动报时
- 发送“报时”立刻报时
- 发送“修改模板 新模板”可以修改报时内容，其中`\h` 表示当前小时，`\m` 表示当前分钟，`\s` 表示当前秒。类似于其他语言的转义字符，`\\` 表示字符 `\`。例如现在是 `11:45:14`，`\\\h:\mm` 会被解析为 `\11:45m`。

为了重点展示框架，本项目没有添加过多复杂的功能，后续可以在此基础上实现群友报时情况统计、排行榜等涉及文件操作的功能。

## 环境

CentOS 7

## 开始

照着[官方文档](https://github.com/wechaty/wechaty-puppet-padplus)初始化一些东西就可以。

首先检查 `Node` 版本

```shell
node --version
```

如果是 `v10.16.0` 以下，需要先更新 `Node`。

创建文件夹，我的文件夹名字叫 `wechatbot`：

```shell
mkdir wechatbot
cd wechatbot
npm init -y
npm install ts-node typescript -g
tsc --init --target ES6
touch bot.ts
```

上面我们新建了文件 `bot.ts`，这个文件就是主程序了，我们把官方示例代码放到这个文件里，不要忘了把 `token` 和 `name` 改成你自己的：

```typescript
// bot.ts
import { Contact, Message, Wechaty } from 'wechaty'
import { ScanStatus } from 'wechaty-puppet'
import { PuppetPadplus } from 'wechaty-puppet-padplus'
import QrcodeTerminal from 'qrcode-terminal'
import { FileBox }  from 'wechaty'

const token = your_token

const puppet = new PuppetPadplus({
  token,
})

const name  = your_name

const bot = new Wechaty({
  name,
  puppet, // generate xxxx.memory-card.json and save login data for the next login
})

var baoshi: RegExp = new RegExp('报时.*')   // 正则表达式，群名以“报时”开头

//报时器，整点触发
async function hourReport() {
    //当前时间
    var time = new Date();
    //小时
    var hours = time.getHours();
    //分钟
    var mins = time.getMinutes();
    //秒钟
    var secs = time.getSeconds();
    //下一次报时间隔
    var next = ((60 - mins) * 60 - secs) * 1000;
    //设置下次启动时间
    setTimeout(hourReport, next);
    //整点报时，因为第一次进来mins可能不为0所以要判断
    const room = await bot.Room.find({topic:baoshi})

    var request = require('request')
    request.get({url:'http://127.0.0.1:5000/clock'}, function (error, response, body) {  
        if (error) {
            console.log('Error :', error)
            return
        }
        console.log(' Body :', body)
        if(body.length > 0){
          room?.say(body)
        }
    })
}

bot.on('scan', (qrcode, status) => {
    if (status === ScanStatus.Waiting) {
      QrcodeTerminal.generate(qrcode, {
        small: true
      })
    }
  })
bot.on('login', async (user: Contact) => {
    console.log(`login success, user: ${user}`)
    //启动报时器
    hourReport();
  })
bot.on('message', async (msg: Message) => {
    console.log(`msg : ${msg}`)
    var room = msg.room()
    var topic = ''
    if(room){
      topic = await room.topic()
    }
    var contact = msg.from()

    //直接推给python处理，我们获得回复内容
    var request = require('request')
    var formData = {
      text: msg.text(),
      roomtopic: topic,
      date: JSON.stringify(msg.date()),
      contactid: contact?.id,
    }
    try{
      // 所有的东西都推到后端用python处理
      request.post({url:'http://127.0.0.1:5000/message', formData: formData}, function (error, response, body) {  
          if (error) {
              console.log('Error :', error)
              return
          }
          console.log(' Body :', body)
          var response = JSON.parse(body)
          if(body.length > 0){
            const type: string = response['type']
            if(type=='image'){
              const path: string = response['content']
              const filebox: FileBox = FileBox.fromFile(path)
              if(room){
                console.log('准备发啦！')
                room.say(filebox)
              }else{
                contact?.say(filebox)
              }
            }else if(type=='text'){
              const text: string = response['content']
              if(room){
                room.say(text)
              }else{
                contact?.say(text)
              }
            }else{
              //什么也不做
            }
          }
      })
    }catch(e){
      console.log(e)
    }
  })
```

安装 `wechaty` 和 `qrcode-terminal`

```shell
npm install wechaty@latest
npm install wechaty-puppet-padplus@latest
npm install qrcode-terminal
```

这一步我遇到了点问题，装着装着就卡住不动了，因为某些不可描述的原因国外的网站连接质量不好，我们需要使用代理：

```shell
npm config set registry https://registry.npm.taobao.org
```

然后安装就好了。

## 后端代码

```python
# backend.py
from flask import Flask
from flask import request
import json
import datetime

app = Flask(__name__)

# 全局变量
name = '报时'
model = r'淦！已经\h点\m分了！你今天学习了吗？'

# 获取报时内容
def gettext():
    response_text = ''
    status = False
    for c in model:
        if not status:
            if c == chr(92):
                status = True
            else:
                response_text += c
        else:
            status = False
            if c == chr(92):
                response_text += c
            elif c == 'h':
                response_text += str(datetime.datetime.now().hour)
            elif c == 'm':
                response_text += str(datetime.datetime.now().minute)
            elif c == 's':
                response_text += str(datetime.datetime.now().second)
            else:
                pass
    return response_text

def handle(data):
    global model
    text = data['text']
    if len(text) >= 6 and text[:4] == '修改模板':
        model = text[5:]
        return json.dumps({'type': 'text', 'content': '修改大成功！现在的模板是：\n'+model})
    elif text == '报时':
        return json.dumps({'type': 'text', 'content': gettext()})
    else:
        return json.dumps({'type': 'null'})

@app.route('/message', methods=['GET', 'POST'])
def message():
    if request.method == 'POST':
        data = request.form
        print(data)
        roomtopic = data['roomtopic']
        if roomtopic:     # 是群
            if len(roomtopic) >= 2 and roomtopic[0:2] == name:
                return handle(data)
    return json.dumps({'type':'null'})

# 返回当前报时内容
@app.route('/clock', methods=['GET'])
def clock():
    return gettext()

if __name__ == '__main__':
    app.run()

```

启动服务（可以使用 screen 同时运行两个程序）：

```shell
ts-node bot.ts
python3 backend.py
```

大功告成！
