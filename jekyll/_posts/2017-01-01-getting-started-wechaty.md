---
title: Getting Started with Wechaty - Live Coding Tutorial
author: lijiarui
categories: tutorial
tags:
  - code
  - news
image: /assets/2017/lijiarui-speech-nodejs.jpg
---

{% include iframe.html src="https://www.youtube.com/watch?v=IUDuxHaV9bQ?t=85" %}

Wechaty is super easy to use, especially when you are using Docker.

In this video, @lijiarui will show you how to getting started with Wechaty through a 10 minutes live coding tutorial, with Wechaty Docker Runtime. (Event Node.js Party #18, Beijing)

For visiters come from China who can not visit YouTube.com, this video is also hosted on YouKu.com & Tencent Video

* [Getting Started with Wechaty @ YouKu](http://v.youku.com/v_show/id_XMTkyNDgzMjY5Ng==.html)
* [Getting Started with Wechaty @ Tencent](https://v.qq.com/x/page/b0363p9kg3q.html)

Learn more about how to use Wechaty: <https://github.com/wechaty/wechaty/wiki/GettingStarted>

Code in the video:

```typescript
import {Wechaty, Room} from 'wechaty'

const bot = Wechaty.instance()

bot
.on('scan', (url, code)=>{
    let loginUrl = url.replace('qrcode', 'l')
    require('qrcode-terminal').generate(loginUrl)
    console.log(url)
})

.on('login', user=>{
    console.log(`${user} login`)
})

.on('friend', async function (contact, request){
    if(request){
        await request.accept()
        console.log(`Contact: ${contact.name()} send request ${request.hello}`)
    }
})

.on('message', async function(m){
    const contact = m.from()
    const content = m.content()
    const room = m.room()

    if(room){
        console.log(`Room: ${room.topic()} Contact: ${contact.name()} Content: ${content}`)
    } else{
        console.log(`Contact: ${contact.name()} Content: ${content}`)
    }

    if(m.self()){
        return
    }

    if(/hello/.test(content)){
        m.say("hello how are you")
    }

    if(/room/.test(content)){
        let keyroom = await Room.find({topic: "test"})
        if(keyroom){
            await keyroom.add(contact)
            await keyroom.say("welcome!", contact)
        }
    }

    if(/out/.test(content)){
        let keyroom = await Room.find({topic: "test"})
        if(keyroom){
            await keyroom.say("Remove from the room", contact)
            await keyroom.del(contact)
        }
    }
})

.init()
```

docker command:

```sh
docker run -ti --volume="$(pwd)":/bot --rm zixia/wechaty mybot.ts
```

[Click here to get the repo](https://github.com/lijiarui/Getting-Started-with-Wechaty---Live-Coding-Tutorial "Click here to get the repo")

[ruirui-speech-nodejs-image]: /assets/2017/lijiarui-speech-nodejs.jpg
