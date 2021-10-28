---
title: "Wechaty - the missing bot SDK for WeChat"
author: dcsan
categories: story
tags:
  - api
  - unofficial
  - news
image: /assets/2017/dcsan-dashbot.webp
---

Recently I was in San Francisco talking to a lot of my friends in the Chatbot community, and realized how the Wechaty community is becoming central to Chatbot development in China.

A lot of Americans look to China and WeChat for the future of Chatbots, but in fact Tencent has still not released an official "Chatbot SDK". Unlike Facebook, Slack, LINE, Telegram and every other messaging platform. [bot.QQ.com](http://bot.qq.com/) is still just a teaser of what might be.

If you are determined enough, you can still build chatbots for WeChat but it feels like swimming upstream without a guide. For those who don't know, [Wechaty](https://github.com/wechaty/wechaty) allows you to turn a wechat personal account into a chatbot, and provides a [javascript API](https://github.com/wechaty/wechaty#api-reference) to talk to WeChat.

So in many ways Wechaty is becoming the missing bot SDK for WeChat, and it's community is the main gathering point for all types of chatbot and NLP discussion in China.

Additionally the core wechaty team make a big effort to use English in their documents and community. So this community is the gateway to China for international chatbot companies too. It's great to get some ideas from [outside of the genepool](http://www.chinadaily.com.cn/business/tech/2017-08/21/content_30913647.htm) too XD

## Groups APIs and multiuser chatbots

So far the Tencent official APIs have only addressed 1:1 chatbots. Wechaty API is addressing an extra layer with addressing for users within groups.
In the US Slack is providing new APIs for botmakers, such as "buttons" that you can use [to make choices in a shared chat](https://api.slack.com/interactive-messages). This brings up surprising design problems such as - if one person pushes a button to change state, should everyone else in the group see that state reflected? Or should each person get the chance to make their own decision, such as for a voting app, where everyone can vote differently.
Slack is providing infrastructure to support both use cases.
The official tencent API allows for messages to single users, but [Wechaty also has a 'room' concept](https://github.com/wechaty/wechaty#room) to allow the multiuser messaging.

With a group shared experience, there is a huge benefit to chatbots. Suddenly you can see what other people are doing. You can learn how to "use" the bot just by watching someone else's conversation. You can do tasks together such as peer-learning. The simple text UI suddenly becomes a huge benefit as it's easy to update a shared state.
With Wechaty's ability to provide an API to a personal account, in many ways it's showing the way ahead for Wechat and how chat platforms can be a huge benefit to users over conventional websites and apps.

## Bot to Bot communications

This talk of groups and multiuser communication reminds me of a meeting last week in SF with Beerud from [Gupshup](https://gupshup.io/). As well as being a major player in the bot authoring space, they also run lots of infrastructure for things like telco messaging. He has a vision called "interbot" which is about [bot to bot communication channels](https://www.interbot.cc)

Of course this won't replace APIs but sometimes for a small business like a restaurant, a "chatbot" maybe the only API they'll provide to their menu, or making a booking for example. Gupshup is developing wrappers to allow you to compose new bots by configuring and routing messages. This is a little bit similar to some of the bots people have made with Wechaty that for example route messages between different chat groups.

They compare the Bot-to-bot vs traditional APIs:

Bot to Bot

* Connect bots without coding skills
* Bots are generally flexible and fault tolerant
* Bots are asynchronous, enable more possibilities
* Bots can do bi-directional messaging
* Bots can talk to bots and humans alike

APIs

* Integrating APIs requires coding skills
* APIs are fragile; they break with input errors
* APIs are synchronous; they don't like delays
* APIs are uni-directional
* APIs are meant for computers alone

There are some [fascinating ideas here for a language to compose bots](https://www.interbot.cc/docs)

    This operator is used to compose a composite bot. User's can assign a botname to a concatenated set of bots.
    Usage: @C = @A | @B
    Here, @C is a composite bot of 2 bots A & B concatenated serially.

## Analytics for Bots

![Dennis and Socks](/assets/2017/dcsan-dashbot.webp)

One of those from overseas who works with the Wechaty team is Dennis Yang from [Dashbot.io](https://www.dashbot.io/), one of the leading analytics providers purely for 'bots. The 'bot industry outside of China is at this established stage where the ecosystem is growing enough to have all types of companies from authoring to analytics to AI.

Dennis is planning to support the Wechaty API to make it easy for developers to immediately get great analytics for their wechat and wechaty bots. [Ping them](https://www.dashbot.io/contact) if you would like to get advance access!

Dennis gave me some natty dashbot socks to share with the Wechaty dev team :)

## The future of Wechaty

Previously I've seen unofficial APIs be embraced by forward looking platforms.
For example [this blog post from Discord](https://blog.discordapp.com/the-robot-revolution-has-unofficially-begun-unofficial-api-23a3c722d5bf)

> ### The Robot Revolution has Unofficially Begun (Unofficial API)
>
> ... a dedicated group of ballers have reverse engineered our API to create what we’re calling the official unofficial Discord API ...

I believe the Telegram API also began as a reverse engineering project, that gave inspiration to the telegram team to embrace and create their own bot platform.

Let's hope that Tencent will look to Wechaty and enable more functions for chatbot developers, or even provide a full Chatbot SDK!

## Join Us

Join the group to chat with us on wechat!

Wechaty is used in many ChatBot projects by hundreds of developers. If you want to talk with other developers, just scan the following QR Code in WeChat with secret code wechaty, join our Wechaty Developers' Home now.

Wechaty Developers' Home

![shanghai wechaty peeps](https://wechaty.github.io/wechaty/images/bot-qr-code.png)

Scan now, because other Wechaty developers want to talk with you too! (secret code: wechaty)
