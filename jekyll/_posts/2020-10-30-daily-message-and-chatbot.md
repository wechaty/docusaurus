---
title: "基于wechaty的定时消息推送（可以哄女朋友）、智能聊天和私人助理"
author: jasonlovesharon
email: 54027901@163.com
categories: project
tags:
  - nodejs
  - padplus
  - project
  - social
---

- 自从2017年微信web端API限制以后，itchat等一大批bot歇菜了，一直都在找一款合适的替品
- 目前来看，大部分都是针对windows微信客户端，基于HOOK的dll注入实现对微信的操控，有一定的封号风险，只能用固定的版本，部署在linux服务器端比较困难，意味着只能一直开着电- -wechaty，支持IPAD,,MAC等多种协议，不用去调用WEB网页API,并且可以布署在服务器，满足我所有需求。[项目地址](https://github.com/wechaty/wechaty)
- 看完官方文档后（[token官方介绍](https://github.com/juzibot/welcome/wiki/everything-about-wechaty)）， 发现需要申请Token,并且python版本的Token是要付费的，但没有学过typescript，有点想放弃，浏览了一下ding-dong-bot的Example,似乎可以看懂，那就边学习边摸索吧。（ps:后来偶然见发现了另一篇可以使用将token转变一下实现python版wechaty,但此时已经基本用TS写完了,如果想用Python等其他语言可以参考[官方文档](https://github.com/wechaty/wechaty/issues/1985)。）

## 具备功能

### 1. 关键词触发功能

1.1 关键词"介绍一下自己"、 "自我介绍一下"、 "你是谁"触发自我介绍
1.2 地名+天气 触发天气查询

### 2. 智能聊天功能

2.1群外直接聊天
2.2群内成员皆有聊天权限“@bot” 聊天
2.3不会回复 @其他群成员 的消息

## 实现过程

Talk is cheap，show your code

### 1. 主程序

```typescript
import { Wechaty, Message, UrlLink,log,} from 'wechaty'
import { PuppetPadplus } from 'wechaty-puppet-padplus'
import { EventLogger, QRCodeTerminal } from 'wechaty-plugin-contrib'
import { WechatyWeixinOpenAI, } from 'wechaty-weixin-openai'
import { setSchedule, } from './schedule/index'
import { getDay, formatDate,} from './utils/index'
import { getOne, getTXweather, getSweetWord,} from './superagent/index'

// 创建微信每日说定时任务
async function initDay() {
  console.log(`已经设定每日说任务`);
  setSchedule('0 40 0 * * *', async () => {
    console.log('你的贴心小助理开始工作啦！')
    let logMsg
    let contact =
      (await bot.Contact.find({ name: 'Jason' })) ||
      (await bot.Contact.find({ alias: 'boss' })) // 获取你要发送的联系人
    let one = await getOne() //获取每日一句
    let weather = await getTXweather() //获取天气信息
    let today = await formatDate(new Date()) //获取今天的日期
    let memorialDay = getDay('2009/08/07') //获取纪念日天数
    let sweetWord = await getSweetWord()
    let str = `${today}\n我们相爱的第${memorialDay}天\n\n元气满满的一天开始啦,要开心噢^_^\n\n今日天气\n${weather.weatherTips}\n${
      weather.todayWeather
    }\n每日一句:<br>${one}<br><br>每日土味情话：<br>${sweetWord}<br><br>————————最爱你的我`
    try {
      logMsg = str
      await delay(2000)
      await contact.say(str) // 发送消息
    } catch (e) {
      logMsg = e.message
    }
    console.log(logMsg)
  })
}

const padplusToken = '你自己的TOKEN'

const puppet = new PuppetPadplus({
  token: padplusToken,
})

const bot = new Wechaty({
  name: 'jason-assistant',
  puppet,
})

bot.use(EventLogger())
bot.use(QRCodeTerminal({ small: true }))

//在Wechaty里面引用和配置插件

const openAIToken = '你自己的机器人TOKEN' //需要在微信对话开放平台申请,点击机器人设置》绑定应用》在页面最下方即可看到
const openAIEncodingAESKey = '你自己的EncodingAESKey' //微信对话开放平台申请,点击机器人设置》绑定应用》在页面最下方即可看到

const preAnswerHook = async (message: Message) => {
  const isCommonMaterial = await processCommonMaterial(message)
  if (isCommonMaterial) {
    return false
  }
}
/**
 * 获得boss联系名片，当机器人找不到问题答案时，将BOSS的名片推送过去
 */
const getBoss = async () => {
    const contact = bot.Contact.load('boss微信ID')
    await contact.sync()
    return contact
  }
  
  const noAnswerHook = async (message: Message) => {
    const room = message.room()
    const from = message.from()

    if (!room) {
      const boss = await getBoss()
      await message.say('你的问题我不会回答，你可以联系我的老板')
      await message.say(boss)
      return;
    }
    const members = await room.memberAll()
    const bossInRoom = members.find(m => m.id === 'boss微信id')
    if (bossInRoom) {
      await room.say`${bossInRoom}，${from}问的问题我不知道，你帮我回答一下吧。`
    } else {
      const boss = await getBoss()
      await room.say`${from}，你的问题我不会回答，你可以联系我的老板`
      await room.say(boss)
    }
  }
  
/**
 * 用wechaty-weixin-openai可以实现快速接入微信对话平台
 */
bot.use(WechatyWeixinOpenAI({
    token: openAIToken,
    encodingAESKey: openAIEncodingAESKey,
    noAnswerHook, //在机器人无法回答时，推送设定的回答
    preAnswerHook, //判断是否是关键字，如果是关键字，触发关键字回答而不接入微信开放平台
  }))
  
const processCommonMaterial = async (message: Message) => {
    const room = message.room()
    // const from = message.from()
    const mentionSelf = await message.mentionSelf()
    const text = message.text()
    let intro = 'Jason,爱好广泛，广交天下豪杰，上得了九天摘月，下得了五洋捉鳖，俗话说的好，不会烘培的飞行员不是好户外人，不会玩音乐的水族爱好者不是好厨师，不会画画的极限爱好者不是好程序员，这就是我的老板Jason，吼吼吼~~'

  
    if (room !== null && mentionSelf) {
      if (/jason|你老板|你上司/.test(text)) {
        await room.say(intro)
        await room.say(new UrlLink({
            description: '户外贱客 & Fighting,fighting,finghting and finghting，读万卷书，行万里路，学习AND吃，喝，玩，乐',
            thumbnailUrl: '',
            title: 'Jason',
            url: 'http://mp.weixin.qq.com/s?__biz=MzkxODE3MjAyNQ==&mid=100000001&idx=1&sn=d05de320c6fbe6c9f9149a09a4da81ec&chksm=41b4391776c3b001c143ac2c284c58ac8b08de41d95cab682aa5a07022e32096567f5780d5be#rd',
          }))
        return true
      } else if (/户外贱客/.test(text)) {
        await room.say(new UrlLink({
            description: '户外贱客 & Fighting,fighting,finghting and finghting，读万卷书，行万里路，学习AND吃，喝，玩，乐',
            thumbnailUrl: '',
            title: 'Jason',
            url: 'http://mp.weixin.qq.com/s?__biz=MzkxODE3MjAyNQ==&mid=100000001&idx=1&sn=d05de320c6fbe6c9f9149a09a4da81ec&chksm=41b4391776c3b001c143ac2c284c58ac8b08de41d95cab682aa5a07022e32096567f5780d5be#rd',
          }))
        return true
      }
    }
    return false
}

// 登录
async function onLogin(user) {
  console.log(`贴心小助理${user}登录了`)
  // 登陆后创建定时任务
  await initDay()
}

bot.on('login', onLogin)

bot.start()
  .then(() => log.info('StarterBot', 'Starter Bot Started.'))
  .catch(e => log.error('StarterBot', e))
```

### 2.创建schedule定时函数

```typescript
import { schedule } from 'node-schedule'
// date 参数

//其他规则见 https://www.npmjs.com/package/node-schedule
// 规则参数讲解    *代表通配符
//
// *  *  *  *  *  *
// ┬ ┬ ┬ ┬ ┬ ┬
// │ │ │ │ │  |
// │ │ │ │ │ └ day of week (0 - 7) (0 or 7 is Sun)
// │ │ │ │ └───── month (1 - 12)
// │ │ │ └────────── day of month (1 - 31)
// │ │ └─────────────── hour (0 - 23)
// │ └──────────────────── minute (0 - 59)
// └───────────────────────── second (0 - 59, OPTIONAL)

// 每分钟的第30秒触发： '30 * * * * *'
//
// 每小时的1分30秒触发 ：'30 1 * * * *'
//
// 每天的凌晨1点1分30秒触发 ：'30 1 1 * * *'
//
// 每月的1日1点1分30秒触发 ：'30 1 1 1 * *'
//
// 每周1的1点1分30秒触发 ：'30 1 1 * * 1'

function setSchedule(date,callback) {
  schedule.scheduleJob(date, callback)
}

export function setSchedule()
```

### 3.创建几个功能函数，爬取ONE网站的每日一句，提取通过API获取的消息

```typescript
import * as cheerio from 'cheerio'
import * as superagent from 'superagent'

const ONE = 'http://wufazhuce.com/' // ONE的web版网站
const TXHOST = 'http://api.tianapi.com/txapi/' // 天行host

function req(url,method, params, data, cookies) {
  return new Promise(function (resolve,reject) {
    superagent(method, url)
      .query(params)
      .send(data)
      .set('Content-Type','application/x-www-form-urlencoded')
      .end(function (err, response) {
        if (err) {
        reject(err)
        }
        resolve(response)
      })
    })
}

async function getOne() {
  // 获取每日一句
  try {
    let res = await req(ONE, 'GET')
    let $ = cheerio.load(res.text)
    let todayOneList = $('#carousel-one .carousel-inner .item')
    let todayOne = $(todayOneList[0])
      .find('.fp-one-cita')
      .text()
      .replace(/(^\s*)|(\s*$)/g, '')
    return todayOne
  } catch (err) {
    console.log('错误', err)
    return err
  }
}

async function getTXweather() {
  // 获取天行天气
  let url = TXHOST + 'tianqi/'
  try {
    let res = await req(url, 'GET', {
      key: '你自己的KEY',//需要自己去天行申请，地址https://www.tianapi.com/signup.html?source=474284281
      city: 'Arlington'
    })
    let content = JSON.parse(res.text)
    if (content.code === 200) {
      let todayInfo = content.newslist[0]
      let obj = {
        weatherTips: todayInfo.tips,
        todayWeather:`阿林顿今天${todayInfo.weather}\n温度:${todayInfo.lowest}/${todayInfo.highest}
        \n${todayInfo.wind}风： ${todayInfo.windspeed}\n紫外线指数:${todayInfo.uv_index}\n湿度
        ${todayInfo.humidity}`
      };
      console.log('获取天行天气成功', obj)
      return obj
    } else {
      console.log('获取接口失败', content.code)
    }
  } catch (err) {
    console.log('获取接口失败', err)
  }
}

async function getSweetWord() {
  // 获取土味情话
  let url = TXHOST + 'saylove/'
  try {
    let res = await req(url, 'GET', { key: '' })
    let content = JSON.parse(res.text)
    if (content.code === 200) {
      let sweet = content.newslist[0].content
      let str = sweet.replace('\r\n', '<br>')
      return str
    } else {
      console.log('获取接口失败', content.msg)
    }
  } catch (err) {
    console.log('获取接口失败', err)
  }
}

export { getOne, getTXweather, getSweetWord, }
```

### 计算距离某日（生日，结婚纪念日等）还有多少天

```typescript
function getDay(date) {
  var date2 = new Date()
  var date1 = new Date(date)
  var iDays = parseInt(
    Math.abs(date2.getTime() - date1.getTime()) / 1000 / 60 / 60 / 24
  )
  return iDays
}

function formatDate(date) {
  var tempDate = new Date(date)
  var year = tempDate.getFullYear()
  var month = tempDate.getMonth() + 1
  var day = tempDate.getDate()
  var hour = tempDate.getHours()
  var min = tempDate.getMinutes()
  var second = tempDate.getSeconds()
  var week = tempDate.getDay()
  var str = ''
  if (week === 0) {
    str = '星期日'
  } else if (week === 1) {
    str = '星期一'
  } else if (week === 2) {
    str = '星期二'
  } else if (week === 3) {
    str = '星期三'
  } else if (week === 4) {
    str = '星期四'
  } else if (week === 5) {
    str = '星期五'
  } else if (week === 6) {
    str = '星期六'
  }
  if (hour < 10) {
    hour = '0' + hour
  }
  if (min < 10) {
    min = '0' + min
  }
  if (second < 10) {
    second = '0' + second
  }
  return year + '-' + month + '-' + day + '日 ' + hour + ':' + min + ' ' + str
}
export { getDay, formatDate }
```

![关键字触发消息](/assets/2020/daily-message-and-chatbot/keyword-push.webp)
![无法回答推送名片](/assets/2020/daily-message-and-chatbot/push-contact.webp)
![定时推送消息](/assets/2020/daily-message-and-chatbot/daily-message.webp)
![智能聊天](/assets/2020/daily-message-and-chatbot/talk-to-bot.webp)

## 后记

到此已经实现了私人人助理和定时推送消息的功能（[项目地址](https://github.com/jasonlovesharon/my_bot)），由于对Typescript不熟，很多功能都是借鉴很多大神的轮子实现的，还是对Python熟悉点，下步准备用Python来实现以上功能，并进一步拓展更多有趣的功能。
