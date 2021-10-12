---
title: "用wechaty实现新闻资讯播报机器人"
author: judaschrist
categories: project
tags:
  - code
  - media
image: /assets/2018/wechaty-xiaoli.webp
---

![用wechaty实现智能内容机器人](/assets/2018/wechaty-xiaoli.webp)

感谢 @lijiarui 邀请我分享我们的智能内容服务，以及在wechaty上的应用场景。

我们在小理智能开发了一套智能内容服务系统，能够为各个领域提供智能资讯接口，包括新闻搜索、主题订阅、日报订阅等，帮助开发者将内容服务整合到自己的系统和产品中（关于小理内容接口的详细介绍看[这里](#append)）。

在小理内部，我们用这些接口进行社群自动化运营，比如给群里定时推送某一个主题的新闻资讯，自动维护群的活跃度，并且带来额外流量。
以下给出两个典型的应用场景：**智能资讯问答**以及**日报定时推送**。

## 智能资讯问答

新闻资讯的查询、播报是很多智能对话机器人技能中很重要的一环，一个经典的场景就是用户就自己感兴趣的关键词提问，机器人返回和该关键词相关的最新新闻资讯，如下图：

![news-query-snapshot](/assets/2018/xiaoli-1.webp)

以上场景中我们询问了机器人关于```微信机器人```的最新消息，并且查看了其中一条新闻的详细内容。
利用wechaty和小理的内容接口，我们可以很方便的实现以上功能。直接上代码：

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

接下来实现searchNews方法的业务逻辑。我们只要传入消息中的关键词，调用小理的新闻搜索API，对结果进行处理后返回即可：

```javascript
import fetch  from 'node-fetch'
/**
 * query xiaoli's api for news related to the keyword
 * @param keyword: search keyword
 */
async function searchNews(keyword) {
    let searchURL = 'https://api.xiaoli.ai/v1/api/search/basic'
    let postBody = {
        "keywords": [keyword],
        "token": "45d898b459b4a739474175657556249a"
    }
    let okCallback = makeSearchResponseText
    let resText = await fetchXiaoliAPI(searchURL, postBody, okCallback);
    return resText
}
```

以上代码中，```postBody```中的[token](#token)用于验证用户身份；```fetchXiaoliAPI```是一个异步方法，使用了[node-fetch](https://www.npmjs.com/package/node-fetch)这个第三方库进行网络调用，将小理API返回的JSON数据解析后返回具体的数据，或者错误信息：

```javascript
/**
 * Fetch response from xiaoli API
 * @param URL
 * @param postBody
 * @param okCallback: covert json to msg text when fetch succeeds
 */
async function fetchXiaoliAPI(URL, postBody, okCallback) {
    let resText = null
    try {
        let resp = await fetch(
            URL,
            {
                method: "POST",
                body: JSON.stringify(postBody), // put keywords and token in the body
            }
        )
        let resp_json = await resp.json()
        if (resp.ok) {
            // status code = 200, we got it!
            resText = okCallback(resp_json['data'])
        } else {
            // status code = 4XX/5XX, sth wrong with API
            resText = 'API ERROR: ' + resp_json['msg']
        }
    } catch (err) {
        resText = 'NETWORK ERROR: ' + err
    }
    return resText;
}
```

成功获取数据的回调方法```makeSearchResponseText```提取返回数据中的的新闻标题（title字段），拼成一段字符串回复给用户。

```javascript
/**
 * parse the returned json for a list of news titles
 */
function makeSearchResponseText(json_obj) {
    preNewsList = []
    let newsList = json_obj.contents
    if (newsList.length === 0) {
        return "暂无相关新闻"
    }
    let newsText = ''
    for (let i = 0; i < newsList.length; i++) {
        newsText += (i+1) + '. ' + newsList[i].title + '\n'
        preNewsList.push(newsList[i].news_abstract) // Save the news details for later queries
    }
    newsText += "\n回复\"#+数字\"(例如\"#1\")看详情"
    return newsText
}

```

以上我们实现了最简单的新闻查询功能。

接下来，我们希望用户能够回复数字看某条新闻的详情，这也能够通过小理的接口实现。小理对每篇新闻自动提取了摘要，我们可以将新闻的摘要存在临时变量里面，当用户输入数字的时候返回对应的结果。

首先定义临时变量:

```javascript
let preNewsList = []
```

查询新闻时暂存这些新闻的摘要（news_abstract字段）:

```javascript
function makeSearchResponseText(json_obj) {
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

到此，一个简单的新闻查询机器人就大功告成啦。除了这个例子中用到的新闻标题和摘要字段，接口还提供了时间、图片、url等基本信息；我们还支持包含复杂条件组合的多关键词搜索。开发者可以用这些接口完成更加复杂的功能。

## 日报定时发送

微信群是目前进行兴趣交流、社群运营的一个重要工具。为了保持微信群的活跃度，群主往往需要定期在群里推送和群主题相关的聚合内容。例如，在一个人工智能交流群里，群主会定期整理人工智能相关资讯，在群里推送。

利用wechaty和小理的日报接口，我们就能把这项任务完全自动化！先看效果图：

![daily-snapshot](/assets/2018/xiaoli-2.webp)

小理会针对一些行业自动整理每天的相关新闻，生成一份日报，其中包含了多个主题版面，还能够通过智能分析算法自动生成新闻头条。接下来，我们就给机器人增加这个功能，让它每天定时在群里推送这样一份人工智能日报。
首先实现```sendDaily```方法：

```javascript
async function sendDaily() {
    const room = await bot.Room.find({topic: '小桔和小理'}) //get the room by topic
    console.log('Sending daily to room ' + room.id)
    let dailyText = await getDaily()
    room.say(dailyText)
}
```

我们找到需要推送的群，往里面发送文本形式的日报。```getDaily```方法通过小理接口拿到日报数据：

```javascript
/**
 * query xiaoli's api for a daily news brief
 */
async function getDaily() {
    const dailyUuid = 'e02e6f14-3212-4d44-9f3d-1d79538c38f6'
    let dailyURL = 'https://api.xiaoli.ai/v1/api/briefing/' + dailyUuid
    let postBody = {
        "token": "45d898b459b4a739474175657556249a"
    }
    let okCallback = makeDailyResponseText
    let resText = await fetchXiaoliAPI(dailyURL, postBody, okCallback)
    return resText
}


function makeDailyResponseText(json_obj) {
    let secList = json_obj.sections
    let newsText = '今日' + json_obj.title + '\n\n'
    for (let i = 0; i < Math.min(secList.length, 5); i++) {
        newsText += secList[i].title + '\n'
        let newsList = secList[i].contents
        for (let j = 0; j < Math.min(newsList.length, 3); j++) {
            newsText += (j+1) + '. ' + newsList[j].title + '\n'
        }
        newsText += '\n'
    }
    return newsText
}
```

其中，```getDaily```方法中的```dailyUuid```变量是人工智能日报的唯一标识（更多日报主题看[这里](#daily)）。
日报由多个section（版面）组成，每个section包含一个当日相关新闻的列表。
回调函数```makeDailyResponseText```中，我们取日报中前5个section，每个section取前三个新闻，拼成字符串。

接下来我们让机器人登录后定时调用```sendDaily```函数即可。这里我们用第三方模块[node-schedule](https://www.npmjs.com/package/node-schedule):

```javascript
import schedule  from 'node-schedule'

bot.on('login', onLogin)

async function onLogin(user) {
    schedule.scheduleJob('0 0 9 * * 1-5', sendDaily);
}
```

以上代码表示机器人会在周一到周五每天9:00am准时给群里发送一份人工智能日报。

到这里，这个又能查新闻，又能发日报的wechaty机器人就完成啦（完整代码看[这里](https://github.com/wechaty/wechaty-getting-started/tree/1305ada4278e7d19932a2c824e5d7eae5eb41f0f/examples/third-party/xiaoli)）。

## 附：如何使用小理的内容接口

以基本的资讯接口为例：用户可以指定任意关键词，小理的接口能够返回和关键词相关的最新新闻。

例如，如果想要查询和"人工智能"相关的最新新闻，可以向小理的搜索接口地址```https://api.xiaoli.ai/v1/api/search/basic```发送包含如下数据的post请求：

```json
{
  "keywords": ["人工智能"],
  "token": "45d898b459b4a739474175657556249a"
}
```

以上代码中的[token](#token)用于验证用户身份。通过解析返回的JSON串，可以获得包含标题、URL、摘要等信息的最新相关新闻列表：

```json
{
    "data": {
        "contents": [
            {
                "img_url": "",
                "news_abstract": "...在韩国，政府在2018年提出将在未来5年内投资2.2万亿韩元(约合130亿元人民币)用于开发核心人工智能技术，并且计划在2022年前成为该领域的全球巨头。因此，全球人工智能已经进入加速发展期，主要国家争先在人工智能领域进行布局。未来，人工智能的发展将形成国家竞争的新分水岭，将成为世界主要国家产业博弈的核心阵地。新时代我国必须树立实体经济发展的新理念，深化人工智能技术在实体经济中的广泛应用，实现实体经济与人工智能的深度融合。",
                "pub_date": "2018-08-13T08:36:57.950927",
                "seed_title": "中国网",
                "title": "推动实体经济与人工智能深度融合",
                "url": "https://base.xiaoli.ai/item/7b8803dc-1bab-43ba-a824-7db94c7a8cb2?app_uuid=516e44a5-06d0-403b-ab31-4a193c564cb4"
            },
            {
                "img_url": "",
                "news_abstract": "...那么，什么才是人工智能企业的核心竞争力？对于初创企业来说，如何才能站稳脚跟而不被市场淘汰？直面隐忧，中国人工智能企业的机会何在？... 隐忧一：发展结构“头重脚轻”... 重点突破基础领域，建立自己的生态体系... 早在2015年，谷歌开放其内部使用的机器学习软件TensorFlow源代码，脸书、亚马逊和微软也纷纷发布其工程师用于机器学习的开源软件。似乎AI进入了“免费原材料”时代，人人都可以顺手取材。但是，“国外的开源布局对于我国AI行业发展而言，埋藏着巨大隐患。”远望智库人工智能事业部部长、图灵机器人首席战略官谭茗洲指出。",
                "pub_date": "2018-08-13T08:24:15.201051",
                "seed_title": "人民网",
                "title": "直面隐忧 中国人工智能企业机会何在",
                "url": "https://base.xiaoli.ai/item/0ae5b7d2-a52f-4fef-9fc3-7296aec45ad0?app_uuid=516e44a5-06d0-403b-ab31-4a193c564cb4"
            },
            ...
        ],
        ...
    }
}
```

更多功能请开发者们参考小理的[接口文档](http://docs.xiaoli.ai)。

### 测试Token

我们的系统目前属于内测阶段，尚未开放注册。调用接口需要使用验证token，为了方便大家测试，这里为大家准备了3个测试用的token：

```log
45d898b459b4a739474175657556249a
6d3b08ef9188c4d5c22739fb2f073b20
ecefeb8778165cbdfb2bfaa66be42bfb
```

以上token供大家测试功能使用，会有一定的频率和次数限制。

### 日报

小理每天为近100个行业主题自动生成日报，并且支持用户自定义任意主题的日报。这里为大家准备了一些日报的dailyUuid：

```log
互联网医疗日报: '60108efa-2a78-41d1-994d-cb53e0b66d2e'
互联网社交娱乐日报: '07c3f2a1-9f2d-4e58-b324-54cd944adb17'
互联网大数据日报: '6e442691-43b6-4e14-ae06-25089e53b9f6'
云计算日报: 'bc30500e-3032-415d-9d40-c64e1f76b8e3'
互联网金融日报: '639b5a58-1f86-463d-9358-d4369831711f'
人工智能日报: 'e02e6f14-3212-4d44-9f3d-1d79538c38f6'
```

如果有进一步的需求，欢迎大家通过微信(judaschrist)或者邮件(zhanglx@induta.com)和我们联系。
