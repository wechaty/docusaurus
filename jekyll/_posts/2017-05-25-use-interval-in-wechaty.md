---
title: "How to use interval in Wechaty to overcome some web-wechat API limitations"
author: kungfu-software
categories: hacking
tags:
  - code
  - api
---
![avatars2](https://avatars2.githubusercontent.com/u/700550?v=3&s=88)

Hello, first of all, thanks for inviting me to write a knowledge sharing post in Wechaty. I am just starting to learn Wechaty and immediately fall in love with it. It's really easy to get started to make your own wechatbot. :-)

I am currently exploring all the examples from the Wechaty and try to customize it to make my own requirements happening. Everyday I try to think of a user case that I can use wechaty to make it happen.

So I had a particular evil thought in my mind one day. I wanted to add a Wechaty bot to any chatrooms and sent bot a command, then somehow the bot can start to send Friend Requests to all the people in the room.

Below is the code snippet

```javascript
function sendFriendRequest(room, msg) {

    if (!room) {
        console.log('Bot', 'there is no room yet');
        return;
    }

    let content = msg.content();
    if (msg && /希望和大家做朋友/.test(content)) {

        let contacts = room? room.memberList({}) : [];

        for (let i = 10; i < contacts.length; i ++) {
            let contact = contacts[i];
            let request = new FriendRequest();
            request.send(contact, "Hi 很高兴认识您")
                .then( result => {
                    console.log("Friend Request Send ", contact.name(), result);
                })
                .catch(e => {
                    console.log('Bot', 'Friend Request Error: %s', e.stack);
                })

        }
    }

}

```

The code is simple, when the bot saying `希望和大家做朋友`, the bots will get all the contacts from the room and start to send FriendRequest.

However, it failed quickly with some exceptions in the log sometimes, or the Send Friend Request is always `False`. At this stage, the `Send Friend Request` is pretty much useless. So I created `ISSUE` in github and asked around.

The original `ISSUE` link: <https://github.com/wechaty/wechaty/issues/540>

Thanks for the help from @huan and @lijiarui, which let me understand the Limitations of web-wechat and I did some research online saying web-wechat only allows to send 100 user request per day. And the api call throttle need to be steady. Obvisouly the original For-Loop is just too fast. I am wondering is there any kinda `Sleep` function in javascript?

Thanks for the help from @huan. Turns out there is a built in `Sleep` function already. Here is how to use `Wechaty Sleep`.

```javascript

async function asyncAwait() {

    for (let i = 0; i < 10; i++) {
        console.log("Knock", i);
        await Wechaty.sleep(5000);
    }
}

asyncAwait();

```

And I used same technics to finally make my `Send Friend Request` stable. Below is the full code. Bear in mind, I set the sleep time threshold to 2mins, which successfully send out 100 `Friend Requests` before web-wechat shut me down.  

```javascript
import { Message, Room, FriendRequest, Wechaty }  from 'wechaty';

exports = module.exports = async function onMessage (msg) {

    const room      = msg.room();
    const sender    = msg.from();
    const content   = msg.content();

    if (msg.self()) {
        sendFriendRequest(room, msg);
        return;
    }


}


async function sendFriendRequest(room, msg) {

    if (!room) {
    console.log('Bot', 'there is no room yet');
        return;
    }

    let content = msg.content();
    if (msg && /希望和大家做朋友/.test(content)) {

        let contacts = room? room.memberList({}) : [];

        if(!contacts || contacts.length == 0) {
            return;
        }

        console.log('Contacts Size:', contacts.length);

        for (let i = 10; i < contacts.length; i ++) {
            let contact = contacts[i];
            let request = new FriendRequest();
            request.send(contact, "Hi 很高兴认识您")
                .then( result => {
                    console.log("Friend Request Send ", contact.name(), result);
                })
                .catch(e => {
                     console.log('Bot', 'Friend Request Error: %s', e.stack);
                })
            await Wechaty.sleep(1000*60*2); // 2 mins is a good threshold
        }
    }

}

```

I think it's a common pattern when we are using Wechaty to do sth in the For-Loop block. It's better to make it wait a bit.

Hopefully this article helps.

Thanks
Seabook

Author: Seabook, [@kungfu-software](https://github.com/kungfu-software), Founder of [Kungfu Software](http://kungfusoftware.net)
