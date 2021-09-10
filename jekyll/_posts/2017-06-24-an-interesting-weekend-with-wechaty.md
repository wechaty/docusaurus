---
title: "An interesting weekend with Wechaty"
author: tingyinhelen
categories: project
tags:
  - code
  - featured
  - social
image: /assets/2017/helen-screenshot-testing.jpg
---

Thanks for inviting me to write this article that give me a chance to share my story for each other. And Wechaty is a very awesome library that is powerful and easy to use. The most important point is that is interesting for Wechat  users and developers.
Last week, I want to help my friend to make a chat bot. Because she is a manager of a technic community and she is also a owner of a chat group. In her daily life, many people add her to be the bunny on wechat. Then she needs add these persons into wechat group. It is a manual work, right? So I want to help her to lessen workload. So I ready to use wechaty.

Firstly, I implemented some basic features. Like below

## The chat bot can receive the friend request automatically

```javascript
const bot = Wechaty.instance({profile: 'secretary'});
bot.on('friend', async function(contact, request){
  if(request){
    await request.accept()
    await contact.say('您好，我是 FCC（freeCodeCamp成都社区）的姜姜姜，很高兴认识你*^_^*回复暗号”FCC成都社区”， 加入FCC成都社区群。直接聊天，请  随意…')
  }
})
```

## Input keyword then add him/her into the chat group

```javascript
  bot.on('message', async function(m){
    const fromContact = m.from()
    const fromContent = m.content()
    const room = m.room()
    if(/FCC成都社区/.test(fromContent)){
      let keyroom = await Room.find({topic: 'FreeCodeCamp-成都'});
      if(keyroom){
        await keyroom.add(fromContact);
        await keyroom.say(`欢迎 @${fromContact.name()} 加入FCC(freecodecamp)成都社区*^_^*`)
      }
    }
  })
```

The above feature has already help her lessen some work. But my friend think it is not enough to satisfy her requirement. She is a very beautiful girl, so there is someone always asked her if she has boyfriend. That makes her boyfriend a little annoyed. So she want me to implement a feature that is if someone in this chat group ask her something about her bf the chat bot can send a photo of her bf.
Wow I’m honoured to develop this feature. So I started to read the doc of wechaty. But I can’t get how to send a media message. I continued reading all of the issues that let me know wechaty can send a media message but I don’t know the details. Then I try to use another methods. I try to use node.js to resolve. I want to change the images to be the buffer of base64. But it didn’t work, users just receive some strange string…..Finally I ask @huan directly. He sent me an article [给机器人添加发送图片视频功能](https://wechaty.github.io/2017/04/13/support-message-type-of-image-and-video.html). This article analysis the principle about how the wechat sends images. It says wechat use “MediaId” to store the information of media and blablablabla……Finally the Wechaty contributors got the “MediaId”. WoW so cool! They integrate this function in Wechaty which use `say(MediaMessage(filename))`.  If someone interested in this principle can read this article.
In the end of the article says `ding-dong-bot.ts` has already implement it. So I found this file that use like below:

```javascript
import { MediaMessage } wechaty
await m.say(new MediaMessage(__dirname + '/../image/BotQrcode.png'))
```

I tried immediately, it does work. haha~perfect~
Then I  use `api.ai`. If someone say: ‘Does  @姜姜姜 have boy friend?’ or say some synonym the chat bot will send a photo of her bf automatically. Well that was I did in last weekend. I think wechaty is an interesting library.

At the end, I help the author of Wechaty add this api to the Wechaty documentation.

![Photo][screenshot-test]

![doc][screenshot-doc]

Well, the complete codes like below:

```javascript
import 'babel-polyfill'
import { Wechaty, Room, MediaMessage, log } from 'wechaty'
import apiai from 'apiai'

const app = apiai('46a33e7a9cb741fb96e0dcc3d2d03a6c');
const bot = Wechaty.instance({profile: 'secretary'});

bot.on('scan', (url, code)=>{
  log.info(url);
})
.on('login', user => {
  log.info(`${user} is login`)
})
.on('friend', async function(contact, request){
  if(request){
    await request.accept();
    await contact.say('您好，我是 FCC（freeCodeCamp成都社区）的姜姜姜，很高兴认识你*^_^*回复暗号”FCC成都社区”， 加入FCC成都社区群。直接聊天，请随意…')
  }
})
.on('message', async function(m){
  if(m.self()){
    return;
  }
  const fromContact = m.from();
  const fromContent = m.content();
  const room = m.room();
  const noAtMention = fromContent.replace(/@\w+/ig, '');
  let roomTopic;

  const request = app.textRequest(noAtMention, {
    sessionId: '1234567890'
  });

  request.on('error', function(error) {
    log.error(error);
  });

  request.on('response', async function(response) {
    const speech = response.result.fulfillment.speech;
    if(/FCC成都社区/.test(fromContent)){
      let keyroom = await Room.find({topic: 'FreeCodeCamp-成都'});
      if(keyroom){
        await keyroom.add(fromContact);
        await keyroom.say(`欢迎 @${fromContact.name()} 加入FCC(freecodecamp)成都社区*^_^*`)
      }
    }
    m.type() == 10000 && m.say('@Helen') // Umm.. shame on me.... If someone give out a Red packet the chat bot will @ myself
    if(room && room.rawObj.NickName == 'FreeCodeCamp-成都'){
      if(/jiangjiangjiang/.test(speech)){
        await m.say(new MediaMessage('images/test.jpg'))
      }else{
        m.say(speech)
      }
    }else if(!room){
      m.say(speech)
    }
  })
  request.end();
})
.init()
```

Finally, I want to thank our teammate [@拖拉机](https://github.com/dianwuone) [@姜姜姜](https://github.com/jiangyuzhen) [@glowd](https://github.com/Glowdable) [@myself](https://github.com/TingYinHelen)

[screenshot-test]: /assets/2017/helen-screenshot-testing.jpg
[screenshot-doc]: /assets/2017/helen-screenshot-doc.png

![avatar](https://avatars2.githubusercontent.com/u/14006826?v=3&s=88)

> Author: [@Helen](https://github.com/TingYinHelen), Lenovo
>
> Helen is a full stack engineer living in Chengdu, familiar with D3. When not coding, she loves dancing, sings and play Erhu.
