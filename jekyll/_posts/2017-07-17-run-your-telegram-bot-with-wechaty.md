---
title: "Run Your Telegram Bot with Wechaty"
author: hczhcz
categories: project
tags:
  - code
  - telegram
  - news
  - utility
image: /assets/2017/hczhcz-run-your-telegram-bot-with-wechaty-1.webp
---

Before introducing [Wechaty Telegram Bot Adaptor](https://github.com/hczhcz/wechaty-telegram), I would like to say something about Telegram chatbots. Recent days, I have a lot of fun playing chatbots on Telegram. After lynched hundreds of tanners in [Werewolf](http://www.tgwerewolf.com/) games, I realized that a chatbot can bring so much fun to users.

![telegram](/assets/2017/hczhcz-run-your-telegram-bot-with-wechaty-1.webp)

## Playing Werewolf on Telegram

What are the differences between a chatbot and a game app? A chatbot is much more accessible. You do not need to let your friends download and install it. Instead, just say "hey, let's play Werewolf/UNO/Avalon..." and the chatbot will be ready for your friends and you. The process of playing the game and the process of chatting are actually "fused" together.

In addition to games, chatbots can involve in one's daily life from many aspects. When I wake up in the morning, I can call a bot to add myself to the list of early-morning guys (even if I get up later than 10 a.m. XD). I can keep tracking the updates from GitHub via a bot. A bot can also get random XKCD comics, Konachan wallpapers or Wikipedia entries for me. There are some super funny chatbots. One of them would let you ban a user in a group for several seconds but you have a probability of 50% that gets yourself banned. Another will pair the parentheses you sent. For example, if you say something like "（逃", it will reply "） ○(￣^￣○)".

![telegram](/assets/2017/hczhcz-run-your-telegram-bot-with-wechaty-2.webp)

## A Bot Involves in Your Daily Life (via Imgur)

Chatbots are good at encouraging user-generated contents. There are auto-reply bots in Telegram which allow users to add their own reply rules. Since auto-reply bots were added to our group, we fed a lot of interesting rules to it. Now, it looks like:

> someone: 今日运程
>
> bot: 手机掉到了沟里
>
> someone: 四字真言
>
> bot: 多喝热水
>
> another bot: 多喝开水
>
> someone: 。。。。。。
>
> bot: 你是豌豆射手吗？

## So, Why WeChat and Wechaty?

WeChat is a great chatting application and it may be the most functional one. It can even call a taxi for you. But a concern is it lacks an official API for chatbots. Although third-party developers have made a lot of effort to bring APIs and tools, the number of chatbots is still limited. On the other hand, there are so many chatbots available on Telegram and, as we can see, chatbots are bringing a huge impact on the application and its users. It would be really cool to introduce them to WeChat users.

Taking [MESE bot](https://github.com/hczhcz/mese-next-telegram) as an example, it is a Telegram chatbot of a business simulation game MESE. Several months ago, I ported it to WeChat because the majority of MESE players in China do not use Telegram. The idea is creating a mock Telegram chatbot library which provides Telegram's interface but interacts with WeChat internally. It is somewhat a dirty hack. The mock library processes text message only, and the user identification still works in WeChat's way. I slightly modified the code of MESE bot so that it works as expected. Since then, by writing the code once, the new feature of MESE bot will be deployed to both Telegram and WeChat.

![telegram](/assets/2017/hczhcz-run-your-telegram-bot-with-wechaty-3.webp)

## Telegram MESE Bot

![telegram](/assets/2017/hczhcz-run-your-telegram-bot-with-wechaty-4.webp)

## WeChat MESE Bot

Now, when creating a new Telegram chatbot, I would like to run it on WeChat too. Considering each chatbot has its own needs and the solution from MESE bot can not cover all of them, it requires a more general way to adapt between Telegram and WeChat. The difference here is that a "general" library should be strictly compatible (as much as it can be) with Telegram's API standard like using an integer as a user ID and providing complete message objects as defined in [Telegram Bot API](https://core.telegram.org/bots/api).

That is why I started the project to build a WeChat adaptor for Telegram Bot API. "An adaptor" means it has two ends. On Telegram's side, it clones the interface of [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api) which implements the latest version of Telegram Bot API. On WeChat's side, I decided to use [Wechaty](https://github.com/wechaty/wechaty) because it is well maintained by an active community. For this project, it is important to keep both ends work well. The WeChat's side worth more attention since WeChat's protocol is not officially provided to developers. An active community like Wechaty's can help a lot in keeping the library updated in this case.

## From a Technical Perspective

Let us move on to the implementation of Wechaty Telegram Bot Adaptor. The library is basically a class called `WechatyTelegramBot` just like the original `TelegramBot` in node-telegram-bot-api. It maintains a Wechaty instance internally:

```javascript
this.wechaty = wechaty.Wechaty.instance(this.options.wechaty);
```

The adaptation between node-telegram-bot-api and Wechaty falls into these parts:

**Events:** When receiving an event from Wechaty, it needs to be translated as an update object as in Telegram. The update handling system is the same as the original one which supports event emission and regular expression matching. Why we do not skip the update objects and emit an event directly? The reason is that the update handling system itself is defined in Telegram Bot API and bots may pass mock updates to it (actually, it is a useful skill when developing a Telegram bot).

**Methods:** Some methods are not supported in WeChat like message pinning and callback queries. The adaptor would support alternative behaviors. For example, pinning a message could be translated as sending a message with an "@all". Since these hacks are not standard and might be tricky, they are configurable in options. *This part is still in development. There are really a lot of work to do.*

**Objects:** There are some differences in the structure and content of objects. For example, in Telegram, groups and private chat is differentiated by a chat object while it is a `Message.room()` call in Wechaty. So it needs some code like:

```javascript
message = {
    from: <translate message.from() as a user object>,
    chat: message.room()
        ? <translate message.room() as a chat object>
        : <translate message.from() as a chat object>,
    ...
}
```

The most difficult part is managing IDs. Telegram assigns a permanent ID to each user, each group, and each message. As mentioned in [Wechaty FAQ](https://github.com/wechaty/wechaty/wiki/FAQ), an alias which contains a unique ID would be able to identify a user. The unique ID is generated based on the timestamp and ensured uniqueness by spining:

```javascript
while (Date.now() === lastID) {
    // spin
}

lastID += 1;
```

For groups and messages, I added a fallback mechanism which keeps the ability of identification in a single session but loses it when the chatbot logs out. The implementation is as simple as remembering the latest groups and messages. The number is limited to prevent the memory leak. Besides, `Message.entities` in Telegram requires parsing the text of a message. It is still working in progress.

**Sessions/Polling:** Wechaty is based on sessions. Currently, polling is implemented as simply start/stop the session. In the future, it will be implemented with an update object queue, so that it would support manually polling.

```javascript
startPolling(options = {}) {
    if (options.restart) {
        return this.stopPolling().then(() => {
            return this.wechaty.init();
        });
    } else {
        return this.wechaty.init();
    }
}

stopPolling() {
    return this.wechaty.quit();
}
```

## Finally

I am really glad to share the story of [Wechaty Telegram Bot Adaptor](https://github.com/hczhcz/wechaty-telegram) to you. Wechaty is cool! As well, the community's blog and WeChat group benefit developers a lot.

There are still a lot of work to do. If you are interested in making this adaptor work better, please feel free to submit issues/PRs. In addition, some parts of Wechaty still lack documentation. I have had some discussion with [@huan](https://github.com/wechaty/wechaty/pull/640) and @ax4 about it. If you are interested in adding documentation to them, it would be helpful to many projects powered by Wechaty including this one.
