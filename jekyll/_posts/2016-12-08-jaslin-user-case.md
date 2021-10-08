---
title: 'Wechaty Case Study - a letter from JasLin'
author: jaslin
categories: story
tags:
  - case
image: /assets/2016/jaslin-case-study.webp
---

## Usercase of using wechat robot with Wechaty

![Case Study][jaslin-case]

hi brother,

the attachments are the screenshot of the little system which i using wechaty.

story about it :

we have a meditation group, people in the group take meditation every day, after meditation they check in with a emotion image in the group, to help  encourage the others or themselves keep meditation every day.

![Send][jaslin-send]

people send specific emotion.

![Record][jaslin-record]

the program record the emotion and map they to hours

![Statistics][jaslin-statistics]

some stastics.

at the beginning, we do this job manually, it spent us much time. at last i decide to build a wechat robot to do this job.

before use wechaty , i used a python sdk to build the robot. but it was not stable enough,it logout often and some other problems, because the protocol base implements can not take about the details, i think the tencent company can Identify the robot behavior. and then, i thought may be i can build a chrome plugin instead of using protocol directly.:)

lucky, after that, i found wechaty, it's what i need exactly :). i rewrite the code very javascript, and the robot works well, it's stable ,It seldom exits the program itself.

thanks for wechaty!

Jas, 3/12/2016

> Author: @[JasLin](https://github.com/jaslin/), BotWave CTO, Wechaty Contributor

[jaslin-case]: /assets/2016/jaslin-case-study.webp
[jaslin-record]: /assets/2016/jaslin-use-case-record.webp
[jaslin-send]: /assets/2016/jaslin-use-case-send.webp
[jaslin-statistics]: /assets/2016/jaslin-use-case-statistics.webp
