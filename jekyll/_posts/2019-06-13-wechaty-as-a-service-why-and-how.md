---
title: Wechaty-As-A-Service Why and How
author: qhduan
categories: project
tags:
  - code
  - saas
  - news
  - utility
---

[代码](https://github.com/deepdialog/Wechaty-as-a-service)

这里作者分享一下为什么要做这个Wechaty-As-A-Service的东东，它如何将Wechaty服务化，在什么场景下应用的。

## 为什么需要Wechaty

Wechaty是对接微信的工具，这个工具在今天已经很成熟，也有充足的社区的支持。

作者的想法是希望使用一个能方便支持桌面端、移动端的机器人入口平台。
目的是开发机器人，接入一个API入口，这个入口如果是放在全球角度有很多合适的方法，但是因为某原因很多服务不能用，国内很少有这样的开放平台，大部分IM的平台都保守且很难接入。

在使用Wechaty之前，作者使用的是接入slack，但是经常在不同网络下延迟很大。

## 为什么需要Wechaty-As-A-Service（waas）

首先一个原因是作者的bot是Python的，而Wechaty是基于JavaScript的。那么当然也有另一种选择，就是作者把bot变成一个服务，而用Wechaty作为客户端接入，之所以没有这样做是因为：

1. Wechaty应该持续服务。它如果能保持稳定运行，那么无论后端如何改变，也不需要重启Wechaty或者重登录了。
2. Wechaty作为服务之后，作为客户端的机器人就可以任意发挥，使用任何语言或者方法都没问题。

## 如何实现

按照 @huan 的说法，Wechaty之后会有基于gRPC的服务接口，很可惜现在没有。

这里作者选择了用一个简单的Web Server实现Wechaty的服务化。

- 优点：简单
- 缺点：用轮询方法，损耗一定资源

---

首先我们选择了`koa`作为web服务框架。遇到的第一个问题就是`koa`是需要持续服务的，`Wechaty`也需要，也就是说它们相当于各自默认都会阻塞一个线程，而JavaScript默认是单线程的，这样显然不行。

解决方法是Wechaty单独在一个worker线程运行，这里使用NodeJS 10及之后版本支持的`worker_threads`方法，这个方法要在10版本的NodeJS使用需要增加参数`-experimental-worker`

首先`bot-worker.js`的实现代码类似这样：

```JavaScript
import process  from 'process'
import { Wechaty }  from 'Wechaty'
import { parentPort }  from 'worker_threads';

// bot实例
const bot = Wechaty.instance({profile: 'Wechaty-bot'}) // Global Instance

// 这里几个函数是分别将Wechaty的几个类序列化（这里并不完全，只取了作者需要的信息）
// 序列化Message类（消息）
async function serializeMessage(message) {
    if (!message) {
        return null
    }
    let obj = {}
    obj.id = message.id
    obj.from = await serializeContact(message.from())
    obj.to = await serializeContact(message.to())
    obj.room = await serializeRoom(message.room())
    obj.text = message.text()
    obj.date = await message.date()
    return obj
}

// 序列化Contact类（联系人）
async function serializeContact(contact) {
    if (!contact) {
        return null
    }
    let obj = {}
    obj.id = contact.id
    obj.name = contact.name()
    obj.alias = await contact.alias()
    obj.isFriend = contact.friend()
    obj.gender = contact.gender()
    obj.province = contact.province()
    obj.city = contact.city()
    obj.isSelf = contact.self()
    return obj
}

// 序列化Room类（群）
async function serializeRoom(room) {
    if (!room) {
        return null
    }
    let obj = {}
    obj.id = room.id
    obj.topic = await room.topic()
    obj.announce = await room.announce()
    return obj
}

// 这里接收来自主线程（koa）的控制信号
parentPort.on('message', async message => {
    const {event, data} = message
    if (event === 'message') { // 只有一个，就是发送信息，暂时没实现别的
        const {topic, name, text} = data
        if (!text) {
            return
        }
        let contact = null
        let room = null
        if (name) {
            contact = await bot.Contact.find({name})
        }
        if (topic) {
            room = await bot.Room.find({topic})
        }
        if (room && contact && await room.has(contact)) {
            room.say(`@${contact.name()} ${text}`)
        } else if (room) {
            room.say(text)
        } else if (contact) {
            contact.say(text)
        }
    }
})

bot
.on('scan', (qrcode, status) => {
    qrurl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrcode)}`
    console.log(`Scan QR Code to login: ${status}\n${qrurl}`)
    // 当需要扫码时，发一个消息给主线程，这样client也能从koa中获取到这个二维码链接
    parentPort.postMessage({
        event: 'scan',
        data: qrurl
    })
})
.on('login', user => {
    console.log(`User ${user} logined`)
    // 当登录成功时告诉主线程，这样client也能知道登录成功了
    parentPort.postMessage({
        event: 'login',
        data: user
    })
})
.on('logout', (user) => {
    // Logout Event will emit when bot detected log out.
    console.log(`user ${user} logout`)
    // 告诉主线程清除登录信息
    parentPort.postMessage({
        event: 'logout',
        data: user
    })
})
.on('message', async (message) => {
    if (message.age() > 60 * 1000) {
        console.log('Message discarded because its TOO OLD(than 1 minute)')
        console.log(message)
        return
    }
    if (message.self()) {
        console.log('Message discarded because its mysel')
        return
    }
    console.log(`Message: ${message}`)
    // 把消息发送给主线程，client就可以通过不断轮询来获取
    parentPort.postMessage({
        event: 'message',
        data: await serializeMessage(message)
    })
})
.start()
```

主线程代码

```JavaScript
import process  from 'process'
import Koa  from 'koa'
import Router  from 'koa-trie-router'
import bodyParser  from 'koa-bodyparser'
import { Worker }  from 'worker_threads'
import lodash  from 'lodash'

// 保存bot状态，以便被client轮询
const botStatus = {
    qrurl: null,
    login: null,
    messages: []
}
// 启动Wechaty线程
const worker = new Worker('./bot-worker.js')
worker.on('message', message => {
    const {event, data} = message
    // 收到不同的Wechaty信息的时候，改变不同的bot状态，这样客户端也可以读取到状态的变化了
    switch(event) {
        case 'scan':
            botStatus.qrurl = data
            break
        case 'login':
            botStatus.login = data
            break
        case 'logout':
            botStatus.login = null
            botStatus.qrurl = null
            botStatus.messages = []
        case 'message':
            botStatus.messages.push(data)
            break
        case 'error':
            process.exit(1)
            break
    }
})

// 这里再往下主要是koa的接口了，也就似乎跟client对接的
let app = new Koa()
let router = new Router()
app.use(bodyParser());
router
.get('/', async ctx => {
    ctx.body = 'Why you here?'
})
.get('/api/scan', async ctx => {
    /**
     * 获取二维码接口
     * curl localhost:3010/api/scan | jq .
     */
    if (botStatus.qrurl) {
        ctx.body = {
            ok: true,
            qrurl: botStatus.qrurl,
        }
    } else {
        ctx.body = {
            ok: false,
            error: 'Not initialized',
        }
    }
})
.get('/api/status', async ctx => {
    /**
     * 状态查询接口
     * curl localhost:3010/api/status | jq .
     */
    if (botStatus.login) {
        ctx.body = {
            ok: true,
            login: botStatus.login
        }
    } else {
        ctx.body = {
            ok: false,
            error: 'Not login',
        }
    }
})
.get('/api/message', async ctx => {
    /**
     * 获取消息接口
     * curl localhost:3010/api/message | jq .
     */
    if (botStatus.login) {
        ctx.body = {
            ok: true,
            // 每次只发送最后的5条不超过5分钟的信息
            messages: botStatus.messages.slice(
                Math.max(botStatus.messages.length - 5, 0)
            ).filter(msg => {
                const now = new Date()
                if (now - msg.date > 5 * 60 * 1000) {
                    return false
                }
                return true
            })
        }
    } else {
        ctx.body = {
            ok: false,
            error: 'Not login',
        }
    }
})
.post('/api/message', async ctx => {
    /**
     * 发送消息接口
     * curl -H 'Content-Type: application/json' -XPOST localhost:3010/api/message -d '{"name": "superman", "text": "hello"}' | jq .
     */
    if (!ctx.request.body) {
        ctx.body = {
            ok: false,
            error: 'Invalid post body, not a JSON'
        }
        return
    }
    if (!lodash.isString(ctx.request.body.name) && !lodash.isString(ctx.request.body.topic)) {
        ctx.body = {
            ok: false,
            error: 'Invalid name or topic, must have one of them'
        }
        return
    }
    if (!lodash.isString(ctx.request.body.text)) {
        ctx.body = {
            ok: false,
            error: 'Invalid text'
        }
        return
    }
    worker.postMessage({
        event: 'message',
        data: ctx.request.body,
    })
    ctx.body = {
        ok: true,
    }
})

app.use(router.middleware())
app.listen(3010, '0.0.0.0', () => {
    console.log('SERVER GREEN')
})
```

## 如何使用

客户端的实现代码

```python
import time
import json
import requests

BOT_API = 'http://localhost:3010/api/'

class WAAS(object):
    # 初始化bot，保存机器人服务api的地址
    def __init__(self, api=BOT_API):
        if not api.endswith('/'):
            api = api + '/'
        self.api = api
        self.qrurl = None
        print(f'Running on api {api}')

    # 获取状态，如果登录之后会返回True，否则是False
    def status(self):
        r = requests.get(self.api + 'status', timeout=10)
        r = json.loads(r.text)
        if r.get('ok'):
            return True
        return False

    # 当需要扫码时，打印二维码地址，让用户可以点击-扫码-登录
    # 如果服务端还没获取到二维码会不断的停在这重复测试
    def scan(self):
        while True:
            r = requests.get(self.api + 'scan', timeout=10)
            r = json.loads(r.text)
            if r.get('ok'):
                self.qrurl = r.get('qrurl')
                return
            print(r.get('error', 'Unknown error'))
            time.sleep(5)

    # 不断测试登录状态，成功后返回
    def login(self):
        while True:
            r = requests.get(self.api + 'status', timeout=10)
            r = json.loads(r.text)
            if r.get('ok'):
                return
            print(r.get('error', 'Unknown error'))
            time.sleep(5)

    # 获取消息
    # 注意这个函数是一个generate函数，因为返回的是yield
    def message(self):
        exists_messages = {}
        while True:
            r = requests.get(self.api + 'message', timeout=10)
            r = json.loads(r.text)
            if r.get('ok'):
                for msg in r.get('messages', []):
                    # 判断id是否重复
                    if msg.get('id') not in exists_messages:
                        exists_messages[msg.get('id')] = msg
                        yield msg
            time.sleep(0.2)

    # 给远程koa发送消息
    # koa会再给Wechaty发送消息
    # 最终发送给用户
    def send_message(self, text, name=None, topic=None):
        body = {
            'name': name,
            'topic': topic,
            'text': text
        }
        r = requests.post(self.api + 'message', timeout=10, json=body)
        r = json.loads(r.text)
        if not r.get('ok'):
            print(r.get('error', 'Unknown error'))

    # 这个是一个启动流程，相当与Wechaty的start、flask的run，nodejs的listen
    def start(self, on_message):
        # 如果是未登录状态就去寻求获取二维码
        # 保证如果waas一直运行并且在登录，bot客户端任意重启也不会导致重复登录
        if not self.status():
            self.scan()  # wait qrurl generate
            print(f'Please scan {self.qrurl}')
            self.login()  # wait login
        print('logined')
        # 不断的轮询信息，如果有新信息会交给 on_message的回调函数
        for msg in self.message():
            print(msg)
            on_message(self, msg)
```

实际使用bot的代码：

```python
from waas_client import WAAS

# 消息回调函数
def on_message(bot, msg):
    text = msg.get('text')  # 文本消息
    # 发来的用户，可能是空的，例如是群消息
    from_name = msg.get('from', {}).get('name')
    # 发来的群，如果是私信就是空的
    room_topic = msg.get('room', {}).get('topic')
    if text:
        # 发送信息
        bot.send_message(text, name=from_name, topic=room_topic)

if __name__ == '__main__':
    """
        这里构造一个WAAS实力并把回调函数给到bot.start，就可以一直在监守了
        当然这里也可以自己调用类似bot.start里面的类似方法，手动运行，例如：
        if not bot.status():
            bot.scan()  # wait qrurl generate
            print(f'Please scan {bot.qrurl}')
            bot.login()  # wait login
        print('logined')
        # 不断的轮询信息，如果有新信息会交给 on_message的回调函数
        for msg in bot.message():
            print(msg)
            on_message(bot, msg)
    """
    bot = WAAS('http://localhost:3010/api/')
    bot.start(on_message)
```

## 缺陷与未来

缺陷：

- 轮询效率低
- 没有安全性
- 没有做容错
- 实现功能少
- 很多Wechaty的功能都需要一个一个实现

这些主要是因为基本功能已经足够满足作者需求，所以暂时开发到这里。
这些功能理论上都可以通过其他方法修改，例如把轮询换成一个长链接协议，例如websocket，例如gRPC。
容错需要考虑错误的传播路径，好做但是比较繁琐。

未来还是期待Wechaty推出gRPC功能，真正实现Wechaty-As-A-Service

> Author: [qhduan](https://github.com/qhduan/), A Deamer.
