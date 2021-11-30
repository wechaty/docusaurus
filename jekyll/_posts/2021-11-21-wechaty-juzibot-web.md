---
 title: "基于wechaty秒回实现的互动机器人 JuziBot"
 author: jiantong-code
 categories: article
 tags:
  - blog
  - study
 image: /assets/2021/11-wechaty-juzibot-web/info.webp
---

## 基于wechaty秒回实现的互动机器人 JuziBot

## 背景信息

我们在做一个基于wechaty的机器人，是一个可以在微信群聊以及私聊可以实现实时TODO，对常用文件进行储存等我们经常实现但微信没有做的很好的功能，目标是通过JuziBot去帮助用户解决自己的痛点，我主要负责对用户的TODO，File进行可视化管理的实现。
我们通过wechaty机器人对信息就行收集，内部处理后做出相应回应。

## 目标用户

- 你有在日常生活中需要随手记录的图片？是不是感觉上传到云盘操作很复杂。
- 你有想要记录明天你要做什么嘛？是不是很不想为此下载一个APP，那么你应该试试JuziBot。
- 想要有一个秒回并且很聪明的小伙伴嘛？可以试试JuziBot，他还会作诗哟。

## 目标

我们希望我们的JuziBot可以帮助我们做以下事情：

- 用户可以随手记录自己想要记录到信息或网址并帮助自动保存。
- 对于url我们可以帮助用户解析，并保存为快照。
- 可以帮助用户快速创建并管理TODO，可定时提醒用户完成设置的TODO。

## 结果

我们已经通过JuziBot做到了以下事情：

- 用户可以发送一段Url给我们的JuziBot，我们的JuziBot会自动帮助用户解析并帮用户保存为文件。
- 用户可以给我们的JuziBot发送他将来想要完成的事情，JuziBot会帮他记录下来，并且在他完成以前JuziBot会定时提醒我们的用户。
