---
title: "基于wechaty开发的医疗小助手"
author: smartnikocj
categories: article
tags:
  - assistant
  - wechat
  - medicine
  - improve-efficiency
image: /assets/2022/02-wechaty-medical-bot/title-image.webp
---

## 1. 前言

随着移动互联网即时通讯工具的发展和普及，人与人之间的交流越来越依赖通讯工具，比如`Wechat`成为各种工作场景的重要沟通工具。医疗作为特殊行业，医生与医生、医生与护士以及医生与患者等之间的沟通对疾病诊断、治疗、随访等尤其重要。作为专科医生，多数患者都因某种常见疾病就诊，很多时候沟通内容都是重复的，如何通过机器或程序帮助我们完成重复内容的沟通，从而提高工作效率呢？此外，医疗知识多而繁杂，如何通过机器或程序帮助我们更好记忆呢？

## 2. 住院总医师与临床工作简介

笔者为某医院外科医生，爱好编程，大学期间自学python，用于数据自动化处理、病历资料自动化收集、科研统计与作图等，极大提高了笔者的工作效率以及数据的准确性。目前担任**住院总医师**（简称`住院总`），相信大家都听过`996`工作制度，而住院总工作为期1-2年，每天24小时均在病区，以便随call随到，有些医院可能有1周休息1天。住院总的工作强度，绝对是有过之而无不及。住院总是住院医师培养的高级阶段，是住院医师向主治医师成长过程中必要的阶段。一般住院总负责科室所有事情，包括但不仅限于科室排班，负责进修医生、轮科医师、实习医师的临床轮转安排、出科考试；转达医院的各种文件、指令；各科室普通和急诊会诊，特别是急诊会诊，随call随到；负责病房抢救工作等。另外，外科住院总需参加手术，可能在手术时就错过了重要事情的提醒。其次，进修及轮科医生是定期轮转，每次更换新学员都需重复提醒、指导和教学。那么，这个过程中就会涉及到很多重复、重要的消息提醒、文件转达、临床工作注意事项提示等，如何减轻住院总的工作压力、协助记忆、提高工作效率呢？

于是基于`wechaty`开发了一个**医疗小助手**，由于笔者编程能力有限，此文只做简单介绍，具体代码参考[wechaty官网](https://github.com/wechaty/wechaty)。

## 3. 医疗小助手目前已实现的功能

### 3.1 个性化提醒，用于提醒轮科医生临床工作注意事项

入院诊断、临床路径录入
![new-admission-dignosis](/assets/2022/02-wechaty-medical-bot/new-admission-dignosis.webp)

新入院注意事项
![new-admission](/assets/2022/02-wechaty-medical-bot/new-admission.webp)

病程书写注意事项
![soap](/assets/2022/02-wechaty-medical-bot/soap.webp)

早查房应关注的项目和内容
![pre-wardround](/assets/2022/02-wechaty-medical-bot/pre-wardround.webp)
![recall](/assets/2022/02-wechaty-medical-bot/recall.webp)

换药和操作后医疗垃圾分类
![debridement](/assets/2022/02-wechaty-medical-bot/debridement.webp)

出院注意事项以及术后复查
![discharge](/assets/2022/02-wechaty-medical-bot/discharge.webp)

病案提交
![file-submit](/assets/2022/02-wechaty-medical-bot/file-submit.webp)

周末交接班
![weekend](/assets/2022/02-wechaty-medical-bot/weekend.webp)
![exchange](/assets/2022/02-wechaty-medical-bot/exchange.webp)

### 3.2 专业知识查询

术后补液原则
![fluid](/assets/2022/02-wechaty-medical-bot/fluid.webp)

常见镇痛药物
![analgesia](/assets/2022/02-wechaty-medical-bot/analgesia.webp)

抢救药物
![life-saving](/assets/2022/02-wechaty-medical-bot/life-saving.webp)

### 3.3 其他

![light](/assets/2022/02-wechaty-medical-bot/light.webp)

![post-blood-check](/assets/2022/02-wechaty-medical-bot/post-blood-check.webp)

![tue-note](/assets/2022/02-wechaty-medical-bot/tue-note.webp)

## 4. 效果

虽然医疗小助手目前仅有部分功能，但很大程度缓解了本人住院总工作负担，定期提醒和推送提高了各位医生的自觉性。目前病案规定天数内提交率100%，换药车以及换药室医疗垃圾均按规定分类丢弃等。

## 5. 待开发功能与展望

限于个人临床工作忙以及编程能力有限，目前医疗小助手功能较少，但自己制定了一些目标，以后开发更多的功能，若有机会后续再跟大家分享，也欢迎大家提宝贵意见(`smartnikocj@gmail.com`)。

`待开发功能`：

- 轮科医生排班与考勤
- 通讯录（每月轮转医生不同，定期更新通讯录，随时查询，方便沟通）
- 病案书写注意事项（定期推送病案书写知识点）
- 专业知识定期推送（形成知识网络，定期推送，随时查询，让进修及轮科医生学习更多本专业知识）
- 常用药物使用注意事项（如定期推送本科常用药物配伍禁忌）
- 抢救流程及药物（定期推送，反复学习，当遇到抢救时胸有成竹）
- 医患沟通（回答患者常见提问等）
- 等等

## 6. 致谢

感谢[wechaty](https://wechaty.js.org/)社区开发者们的辛勤付出，感谢[Huan](https://github.com/huan)的宝贵建议。希望本项目可以持续发展下去。

