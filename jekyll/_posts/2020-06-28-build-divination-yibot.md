---
title: "使用wechaty自助算卦"
author: willcup
categories: project
tags:
  - typescript
  - entertainment
  - case-study
image: /assets/2020/yibot/1.jpg
---

写这个小东西，本就是想玩耍一下，发现很有意思！ 面临人生重大抉择犹豫不定，头脑乱成浆糊的时候，鄙人会问卦，根据卦象客观分析当前的局势。但是从来不问命，只是借用卦象来让自己以一种不含感情的分析方式重新认识当前面临的形势。朋友中有一两个有类似爱好的，对易经有些兴趣，我们几个谈论的时候，其他人就会要求我们给他们解卦。

易经本来就是一个工具书，只需要理解并会正当使用就行了，并不难。我就想写个机器人，可以让他们自己去操作，然后也慢慢学会掌握这种东西。

**注意**：非常不推荐占卜！ 个人目前只推崇易理！

## wechaty实现

实现其实很简单了。就是使用0、1分别表示阴、阳两种爻。 然后用户输入自己求得的六爻，获得对应的卦象词条。

```javascript

// 简单列一下示意
var ddict = [
  "坤为地000000=0",
  "山地剥000001=1",
  "水地比000010=2",
  "风地观000011=3",
  "雷地豫000100=4",
  "火地晋000101=5",
  "泽地萃000110=6",
  "天地否000111=7",
  "地山谦001000=8",
  "艮为山001001=9",
  ]

async function onMessage (msg) {
  // log.info('StarterBot', msg.toString())
  room = msg.room()
  let text = msg.text()
  if(text == "求卦") {
    await msg.say(GUA_HELP)
  }
  if(text.indexOf("求卦-") > -1) {
      let code = text.split("求卦-")[1]
      try {
        ddict.forEach((item,index,array)=>{
          if (item.indexOf(code) > -1 ) {
            let o_name = item.split(code)[0]
            let names = o_name.split("为")
            if (names.length > 1) {
              o_name = names[0]
            }
            if (o_name.length > 2) {
              o_name = o_name.slice(2)
            }
            throw new Error(o_name + "卦")
          }
        })
      } catch (error) {
        log.info("找到了" + error.message)
        let resp = "https://baike.baidu.com/item/" + error.message
        const linkPayload = new UrlLink({ description : (" === 友情提示" + msg.from().name() + " === \n看易理，命运自己掌握，我们只需要看清时局！"),
              thumbnailUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3740483648,506813176&fm=26&gp=0.jpg',
              title : error.message,
              url : resp})

        log.info(resp)
        await msg.say(linkPayload)
      }
  }
}
```

## 截图

![效果图 @4x](/assets/2020/yibot/1.jpg)

## 其他

过程中看了wechaty的其他的很多博客，发现大家贡献了很多有意思且实用的工具。比我弄得这个实用多了。计划后面选择性地丰富一下功能，添加一些生活元素，丢到群里，给朋友们玩耍。

最后再提示一下：善易者不卜！ 我是不善的，但是也不占卜。 虽然是传说，但是我觉得很多时候浑沌一些挺好的，有助于个人思考，也算是个人活过，真实的体验。什么都靠占卜，命系于天不由自己无说，不知道会不会遭天谴~~ 哈哈

思之~ 慎之~

## token的问题

本人是Java程序员出身，工作一直在大数据领域，对python、scala都比较熟悉。但是对前端js的知识就有些贫瘠了。

Wechaty社区对技术人员是蛮开放与支持的。社区当前也正在对多语言做支持。但是当前人们拿到的大多是padplus版本的。

文档中对于token的介绍个人觉得不太详细，因为很多人都在群内提到了相同的问题：为啥我拿到我的token在java/python中运行不了？

同学，如果你的padplus版本的token，**只能使用js/ts进行编码测试**。不要一看是一种新的语言，以前没玩儿过就直接放弃了。写好很难，但是逐渐玩儿起来并不难。加油！

## 致谢

感谢Wechaty团队。

> Author: [@runningdata](https://github.com/runningdata)
