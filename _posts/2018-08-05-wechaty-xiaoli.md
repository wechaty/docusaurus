---
layout: post
title: "用wechaty实现智能内容机器人"
date: 2018-08-05 09:00 +0800
author: judaschrist
---

> Author: [@judaschrist](https://github.com/judaschrist) What's life without Code, Movies and Musicals. Co-founder of [小理智能](https://xiaoli.ai/) 

![用wechaty实现智能内容机器人](/download/2018/wechaty-xiaoli.png)

感谢 @lijiarui 邀请我分享我们的智能内容服务，以及在wechaty上的应用场景，希望能够帮助开发者使用wechaty提供更加丰富多样的自动化服务。

我们在小理智能开发了一套智能内容服务系统，能够为各个领域提供智能资讯接口，包括新闻搜索，主题订阅，日报订阅等，帮助开发者将内容服务整合到自己的系统和产品中。
通过这些内容接口，开发者可以很方便的用小理智能的内容丰富自己机器人的功能。各种内容接口的具体用法看[这里](#append)。以下给出两个典型的应用场景：智能资讯问答以及日报定时发送。

<!--more-->
## 智能资讯问答

新闻资讯的查询、播报是很多智能对话机器人技能中很重要的一环，一个经典的场景就是用户就自己感兴趣的关键词提问，机器人返回和该关键词相关的最新新闻资讯，如下图：

![news-query-snapshot](/download/2018/xiaoli-1.jpeg)

以上场景中我们询问了机器人关于```微信机器人```的最新消息，并且查看了其中一条新闻的详细内容。利用小桔机器人和小理的内容接口，我们可以很方便的实现以上功能。直接上代码：
```javascript
const bot = new Wechaty({
    profile: config.default.DEFAULT_PROFILE,
})

bot.on('message', onMessage)
     
async function onMessage(msg) {
    let msgText = msg.text()

    // A super naive implementation of intent detection for news query
    if (msgText.endsWith("最新消息") && msgText.length > 4) {
        respText = await searchNews(msgText.substring(0, msgText.length-4)) // call xiaoli's news API
        await msg.say(respText)
    }
}
```

我们监听消息发送事件，并且对收到的消息进行意图识别。这里我们做最简单的实现：只要收到```XXX最新消息```这种模式的信息，就提取前面的```XXX```部分作为关键词，来进行新闻查询。目前一些开源或商业的解决方案，如科大讯飞等，可以实现更加准确的意图识别供开发者使用，这里不赘述。

接下来的实现searchNews方法的业务逻辑。我们只要传入消息中的关键词，调用小理的新闻搜索API，对结果进行处理后返回即可：

```javascript
const fetch = require('node-fetch')
/**
 * query xiaoli's api for news related to the keyword
 * @param keyword: search keyword
 */
async function searchNews(keyword) {
    let resText = null
    try {
        let resp = await fetch(
            'https://api.xiaoli.ai/v1/api/search/basic',
            {
                method: "POST",
                body: JSON.stringify({
                    "keywords": [keyword],
                    "token": "45d898b459b4a739474175657556249a"
                }),
            }
        )
        let resp_json = await resp.json()
        if (resp.ok) {
            // status code = 200, we got it!
            resText = makeText(resp_json['data'])
        } else {
            // status code = 4XX, sth wrong with API
            resText = 'API ERROR: ' + resp_json['msg']
        }
    } catch (err) {
        resText = 'NETWORK ERROR: ' + err
    }
    return resText
}

/**
 * parse the returned json for a list of news titles
 */
function makeText(json_obj) {
    preNewsList = []
    let newsList = json_obj.contents
    if (newsList.length === 0) {
        return "暂无相关新闻"
    }
    let newsText = ''
    for (let i = 0; i < newsList.length; i++) {
        newsText += (i+1) + '. ' + newsList[i].title + '\n'
    }
    newsText += "\n回复\"#+数字\"(例如\"#1\")看详情"
    return newsText
}
```
这里使用了node-fetch这个第三方库进行网络调用，将小理API返回的JSON数据解析后，提取其中的新闻标题（title字段），拼成一段字符串返回，这样我们就实现了最简单的新闻查询功能。

接下来，我们希望用户能够回复数字看某条新闻的详情，这也能够通过小理的接口实现。小理对每篇新闻自动提取了摘要，我们可以将新闻的摘要存在临时变量里面，当用户输入数字的时候返回对应的结果。接下来，我们希望用户能够回复数字看某条新闻的详情，这也能够通过小理的接口实现。小理对每篇新闻自动提取了摘要，我们可以将新闻的摘要存在临时变量里面，当用户输入数字的时候返回对应的结果。

定义临时变量:
```javascript
let preNewsList = []
```

查询新闻时暂存这些新闻的摘要（news_abstract字段）:
```javascript
function makeText(json_obj) {
    //...
    for (let i = 0; i < newsList.length; i++) {
        //...
        preNewsList.push(newsList[i].news_abstract) // Save the news details for later queries
    }
    //...
}
```

监听到数字模式，返回对应结果：
```javascript
async function onMessage(msg) {
    let msgText = msg.text()

    // query for news details
    if (msgText.startsWith('#')) {
        newsNum = parseInt((msgText.substring(1)), 10) - 1
        if (newsNum < preNewsList.length && newsNum >= 0) {
            await msg.say(preNewsList[newsNum])
        }
    }

}
```
到此，一个简单的新闻查询机器人就大功告成啦。除了这个例子中用到的新闻标题和摘要字段，我们还提供了时间、图片、url等基本信息；我们还支持包含复杂条件组合的多关键词搜索。开发者可以用这些信息完成更加复杂的功能。

## 日报定时发送

## <a name="append"></a>附：如何使用小理的内容接口

以基本的资讯接口为例：用户可以指定任意关键词，小理的接口能够返回和关键词相关的最新新闻。

例如，如果想要查询和"微信机器人"相关的最新新闻，可以向小理的搜索接口地址```https://api.xiaoli.ai/v1/api/search/basic```发送包含如下数据的post请求：
```
{
	"keywords": ["微信机器人"],
	"token": "45d898b459b4a739474175657556249a"
}
```
以上代码中的[token](#token)用于验证用户身份。通过解析返回的JSON串，可以获得包含标题、URL、摘要等信息的最新相关新闻列表：
```
{
    "data": {
        "contents": [
            {
                "img_url": "https://img.xiaolizhuli.com/get/070b35d5-2ed8-4a28-912b-aa845fd65818uuid-name176_4715385_4c8d32f1f1ac4477f9a9891e48463d43.jpg",
                "news_abstract": "...组建微信群后，群里有300人左右，每把参与的人有30多人。黄明找了“护群人员”充当“门神”，如果有人在群里捣乱，“门神”就负责将捣乱的人踢出群聊。作为组织者，黄明有时候也会在微信群里“玩几把”。... 黄明逐渐发现，微信群里赌博的输赢越来越大，“以前是30元起押，2000元封顶，现在是3000元封顶”。而团队也越来越大，除了之前带过去的几个人，他们又专门招聘了一批人，互相之间分工也更加明确。... “门神”“拉手”都是这个团队里的角色，30多人的团队还有后勤管理、财务、“发包手”“赌托”“兑奖”“机器人”等10多个职位，每个职位都有相应成员分两组在24小时内轮班值守。",
                "pub_date": "2018-07-31T07:19:10.187461",
                "seed_title": "中国网",
                "title": "微信群里的赌场",
                "url": "https://base.xiaoli.ai/item/070b35d5-2ed8-4a28-912b-aa845fd65818?app_uuid=a6b1ff0c-3d9d-4d44-acf5-38d05868eed6"
            },
            {
                "img_url": "",
                "news_abstract": "...36氪近日接触到的「桔子互动」是一家提供微信机器人服务的创业公司。其推出的“小桔机器人”产品，通过提供完整的微信接入服务、运维部署服务、AI服务，帮助企业客户搭建个性化的“智能对话”应用，以及高效管理微信“社群营销”活动。... 具体来说，在“智能对话”方面，桔子互动系统基于自然语言理解（NLU）、对话管理（DM）、自然语言生成（NLG）、用户仿真、强化学习等技术，结合客户业务场景，个性化定制和搭建整套对话系统。",
                "pub_date": "2018-07-20T10:57:48.222151",
                "seed_title": "36氪",
                "title": "瞄准微信生态，「桔子互动」推出能进行“智能对话”和“社群营销”的微信助手",
                "url": "https://base.xiaoli.ai/item/0d083870-a29f-446e-be6c-8a683f2488c1?app_uuid=a6b1ff0c-3d9d-4d44-acf5-38d05868eed6"
            }
            ...
        ],
        ...
    }
}
```
> 嘿嘿，不小心搜出了桔子互动


更多功能请开发者们参考小理的[接口文档](http://docs.xiaoli.ai)，我们的系统目前属于内测阶段，尚未开放注册。调用接口需要使用验证token，为了方便大家测试，这里为大家准备了3个测试用的<a name="token">token</a>：
```
45d898b459b4a739474175657556249a
6d3b08ef9188c4d5c22739fb2f073b20
ecefeb8778165cbdfb2bfaa66be42bfb
```
以上token供大家测试功能使用，会有一定的频率和次数限制。如果有进一步的需求，欢迎大家通过我们的客服微信或者邮件和我们联系**todo联系方式**。
