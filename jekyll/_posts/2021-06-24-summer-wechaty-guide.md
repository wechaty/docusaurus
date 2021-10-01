---
title: "开源之夏 2021 指导手册"
author: lijiarui
categories:
  - announcement
  - ospp
tags:
  - event
  - 2021
  - summer-2021
  - summer-of-wechaty
  - guide
  - ospp
  - ospp-2021
  - news
image: /assets/2021/06-summer-wechaty-guide/teaser.webp
---

开源软件供应链点亮计划-暑期 2021 的见面会在 [ninetailskim](https://wechaty.js.org/contributors/ninetailskim/)的主持下圆满完成，关于开源软件供应链点亮计划的详细内容，详见 [Wechaty Summer of Code 2021 Kickoff Meeting](https://wechaty.js.org/2021/06/24/wechaty-soc-kick-off-meeting/)

## 开源软件供应链点亮计划组委会活动里程碑

![agenda](/assets/2021/06-summer-wechaty-guide/agenda.webp)

注：所有通过结项考核的同学都会收到对应项目的全额奖金，项目是否评为优秀不影响奖金的发放。

### 组委会官方指南

- 学生参与的日程，详见 [学生指南](https://summer.iscas.ac.cn/help/student/)
- 社区导师参与的日程，详见 [导师指南](https://summer.iscas.ac.cn/help/mentor/)
- 社区参与的日程，详见 [社区指南](https://summer.iscas.ac.cn/help/community/)

## Wechaty 社区工作

Wechaty 社区秉持开源开放的的原则，所有会议记录、在线会议、阶段性报告等视频、文档资料都会对社区完全开放。对自己的视频、文档资料介意开放的同学，请谨慎考虑加入。

参与项目的同学和导师需要分别完成 **日常工作** 和 **阶段性工作**：

- 日常工作
  - 学生每周在 issue 下回复进度报告
  - 导师每周在 issue 下根据学生的进度报告进行评分
- 阶段性工作
  - 2021.7.15 期初报告
  - 2021.8.28 期中 Demo Day
  - 2021.8.30 期中报告
  - 2021.9.30 期末报告

以下是具体的要求、模板以及过往学生的内容参考

### 日常工作

日常工作以 OSPP 2020 的优秀学生突出贡献奖获得者[江姗姗](https://wechaty.js.org/contributors/univerone/)的周报告和导师总结为例，详见[编写一个“每日一句”插件](https://github.com/wechaty/summer-of-wechaty/issues/10)

#### 报告模板

```markdown
# [项目名称] 进度报告

日期：XXXX-XX-XX

## 本周完成的成果
1. XX 
1. XX

## 本周遇到的困难和需要配合的地方
1. XX

## 下周的开发计划和预计成果
1. XX

## 其他需要说明和同步的事项
1. XX
```

#### 导师评分模板

```markdown
# [项目名称] 导师评分

日期：XXXX-XX-XX

## 本周进度报告的评分
- [ ] 1: Deliverable not acceptable
- [ ] 2: Deliverable is below expectations
- [ ] 3: Deliverable is OK
- [ ] 4: Deliverable is above expectations
- [ ] 5: Deliverable is perfect

## 其他需要说明和同步的事项
XXX
```

### 阶段性工作

期初、期中和期末三篇报告要**以博客的方式提交到[ [wechaty.js.org](https://github.com/wechaty/wechaty.js.org) Repo** ]中，在提交报告之前，可以先阅读 [Wechaty 社区规范](https://wechaty.js.org/2021/06/23/the-wechaty-way/), 至少了解下面内容：

1. Wechaty 的介绍
1. 社区沟通渠道
1. 会议规范
1. 博客发布规范
1. Issue 发布规范
1. PR 发布规范

尤其要注意的是在博客发布规范中详细的介绍了如何提交博客、如何在博客中嵌入视频等，在期中、期末报告中会用到。具体三篇报告的要求如下。

#### 期初报告

##### 1. 个人介绍

请将自己的介绍以 markdown 的方式提交到 [wechaty.js.org](https://github.com/wechaty/wechaty.js.org) Repo 的 `jekyll/_contributors` 目录下。

可以参考以下的开发者介绍内容编写页：

- [吴京京, wj-mcat, Creator of python-wechaty](https://raw.githubusercontent.com/wechaty/wechaty.js.org/master/jekyll/_contributors/wj-mcat.md)
- [江姗姗, univerone, OSPP 2020的优秀学生突出贡献奖获得者](https://raw.githubusercontent.com/wechaty/wechaty.js.org/master/jekyll/_contributors/univerone.md)

##### 2. 期初报告

- 标题： `OSPP 2021-期初报告-你的标题`
- 文件名： `2021-XX-XX-ospp-plan-XX`
- 报告 category 为：`project`, `ospp`
- 报告 tag 至少包括：`summer-of-wechaty`,`summer-2021`,`ospp`,`ospp-2021`,`plan`
- 报告内容至少包括：
  - 项目名称
  - 合作者介绍
  - 导师
  - 项目介绍
  - 项目计划

##### 3. OSPP 2020 学生期初报告参考：

- [暑期2020 为 go-wechaty 设计实现插件体系 计划书](https://wechaty.js.org/2020/07/19/go-wechaty-plugin-dev-plan/)
- [基于python-wechaty的群聊助手机器人](https://wechaty.js.org/2020/07/18/python-wechaty-groupchat-assistant-bot/)
- [基于开放 API 封装 Wechaty 接口下的飞书聊天机器人：期初](https://wechaty.js.org/2020/07/29/wechaty-puppet-lark-plan-blog/)
- [基于Python-wechaty建立一个斗图机器人](https://wechaty.js.org/2020/07/18/python-wechaty-meme-bot/)
- [暑期2020 编写一个“每日一句”插件 计划书](https://wechaty.js.org/2020/07/18/wechaty-words-per-day-plugin-plan/)
- [暑期2020[基于 RPA 封装 Wechaty 接口下的快手聊天机器人]计划书](https://wechaty.js.org/2020/07/28/wechaty-rpa-kuaishou-plan/)
- [基于RPA封装的Wechaty接口下的抖音聊天机器人](https://wechaty.js.org/2020/07/28/wechaty-puppet-douyin/)
- [暑期2020 基于开放 API 封装 Wechaty 接口下的企业微信聊天机器人 计划书](https://wechaty.js.org/2020/08/19/puppet-work-plan/)
- [暑期2020 Go-wechaty Github Action optimization 计划书](https://wechaty.js.org/2020/07/30/go-wechaty-gh-optimization-poc/)
- [Wechaty Java 移植组件开发](https://wechaty.js.org/2020/07/27/java-wechaty-transplant/)
- [基于开放 API 封装 Wechaty 接口下的钉钉聊天机器人 具体计划](https://wechaty.js.org/2020/07/19/wechaty-puppet-dingtalk/)

#### 期中报告

期中报告提交之前会有一个 OSPP 的 Mid-term Demo Day， 导师和学生会在线上进行期中汇报。提交的期中报告包括 Mid-term Demo Day 的视频和期中报告内容总结。[点击这里查看暑期2020中期路演日（Mid-Term Demo Day）会议实况](https://wechaty.js.org/2020/08/22/summer-2020-wechaty-soc-midterm-demo-day/)

##### 学生开发者

###### 1. 期中 Demo Day 视频

每位开发者需要进行中期的展示，视频将添加至博客、提交到组委会中，并剪辑成完成的路演日视频，向全社区展示，吸引更多的开发者参与到对应的项目中：

- 提交3-5分钟的、有真人出镜（视频会议软件录制）的、基于PPT的展示。
- 提交不限时长的、有真人出镜（视频会议软件录制）的 Live Code。

学生要在8月26日之前将视频链接回复在对应项目的 Github Issue 下面进行提交，视频由同学们直接上传到Youtube / B站中，并直接将视频的链接和将视频以iframe方式附在各个博客中：

- 视频需要上传到 youtube 中，并联系 [Huan](https://wechaty.js.org/contributors/huan/) 添加到 wechaty 的 playlist 中。
- 考虑到国内用户，可以上传到 bilibili 或者腾讯视频中

可以参考去年优秀学生突出贡献奖获得者[江姗姗](https://wechaty.js.org/contributors/univerone/)的视频：

- [期中汇报视频](https://www.bilibili.com/video/BV1vT4y157x5/)
- [Live Coding 视频](https://www.bilibili.com/video/BV1ih411d75h)

###### 2. 期中报告

在8月30日前，以Pull Requests形式在[wechaty.js.org Repo](https://github.com/wechaty/wechaty.js.org)中提交博客。

- 标题： `OSPP 2021-期中报告-你的标题`
- 文件名： `2021-XX-XX-ospp-mid-term-XX`
- 报告 category 为：`project`, `ospp`
- 报告 tag 至少包括：`summer-of-wechaty`,`summer-2021`,`ospp`,`ospp-2021`,`mid-term`，`ospp`
- 报告内容至少包括：
  - 项目信息
    - 项目名称
    - 方案描述
    - 时间规划
  - 项目进度
    - 已完成工作
    - 遇到的问题及解决方案
    - 后续工作安排
  - 项目成果
    - 期中汇报的视频，可以参考 [使用jekyll include在wechaty博客中快速插入视频](https://wechaty.js.org/2020/08/24/add-video-to-wechaty-blog/)
    - Live Coding/Demo 视频

可以完整复制本文对应的Markdown作为博客内容模板，但也可添加更多的补充信息。

```markdown
“[开源软件供应链点亮计划-暑期2021](https://summer.iscas.ac.cn)”（以下简称 暑期2021）是由中科院软件所与 openEuler 社区共同举办的一项面向高校学生的暑期活动。旨在鼓励在校学生积极参与开源软件的开发维护，促进国内优秀开源软件社区的蓬勃发展。活动联合各大开源社区，针对重要开源软件的开发与维护提供项目，并向全球高校学生开放报名。 学生可自主选择感兴趣的项目进行申请，并在中选后获得该软件资深维护者（社区导师）亲自指导的机会。 根据项目的难易程度和完成情况，参与者还可获取“开源软件供应链点亮计划-暑期2021”活动奖金和奖杯。

本项目 [项目名称] 系 暑期2021 支持的开源项目。

## [项目名称]信息

- 导师：[导师名称]  
- 学生：[学生名称]  
- 项目介绍：[Github Issue 链接，如 https://github.com/wechaty/summer/issues/74]  

- 项目名称：  
- 方案描述：  
- 时间规划：  

## 项目进度

- 已完成工作：  
  *根据原定方案和时间规划，描述当前已有的工作成果*  
- 遇到的问题及解决方案：   
  *可以侧重描述总结与心得*  
- 后续工作安排：  
  *描述是否需要调整工作计划等*  

## 项目成果

项目仓库: <https://github.com/XX/XX>  

### live coding视频:
{% raw %} 
{% include iframe.html src="视频链接" %}
{% endraw %}
### PPT展示视频:
{% raw %}
{% include iframe.html src="视频链接" %}
{% endraw %}
### 项目PPT:
{% raw %}
{% include iframe.html src="pdf链接" %}
{% endraw %}
## 联系我们

- 项目链接：[Github Issue 链接，如 https://github.com/wechaty/summer/issues/74]  
- 联系方式：
```

###### 3. OSPP 2020 学生期中报告参考：

- [基于开放 API 封装 Wechaty 接口下的飞书聊天机器人：期中](https://wechaty.js.org/2020/08/19/wechaty-puppet-lark-mid-term-blog/)
- [暑期2020 编写一个“每日一句”插件 POC 成果展示](https://wechaty.js.org/2020/08/15/wechaty-words-per-day-plugin-mid-term/)
- [暑期2020 基于python-wechaty的群聊助手机器人 POC 成果展示](https://wechaty.js.org/2020/08/14/python-wechaty-groupchat-assistant-bot-poc/)
- [暑期2020 基于 RPA 封装 Wechaty 接口下的快手聊天机器人 中期报告](https://wechaty.js.org/2020/08/20/wechaty-puppet-kuaishou-mid-term/)
- [Wechaty Java 移植组件开发](https://wechaty.js.org/2020/08/17/java-wechaty-transplant-midpoc/)

##### 社区导师

###### 1. “暑期2021”组委会评审报告

08月16日 - 08月22日期间，将评审报告在组委会的 Gitlab 上的 Issue 中提交，并配合组委会进行中期审核。

###### 2. Wechaty 社区中期博客评审

在8月30日前以Pull Requests形式在wechaty.github.io的学生对应博客下，补充评审结果的相关信息。

可以完整复制本文对应的Markdown作为博客内容模板，但也可添加更多的补充信息。

```markdown
## 评审对象

- 评审内容：*中期报告|结项报告*
- 提交人：*学生姓名*

## 评审结果

- 项目完成度：*评价学生是否按照原定方案实施项目，以及完成情况如何*
- 学生参与度：*评价学生在项目实施过程中是否积极参与*
- 代码贡献量：*评价学生在该项目中，为开源项目贡献的代码量*
- 综合评价及建议：*总结性评价，并给出改进建议*
- 最终评审结果：“通过” 或者 “不通过” （“不通过” 意为着项目终止，且学生将无法获得相应的奖金）
```

#### 期末报告

##### 1. 期末视频

- 视频需要上传到 youtube 中，并联系 [Huan](https://wechaty.js.org/contributors/huan/) 添加到 wechaty 的 playlist 中。
- 考虑到国内用户，可以上传到 bilibili 或者腾讯视频中

可以参考去年飞书项目参与学生，今年飞书项目导师[范蕊](https://wechaty.js.org/contributors/roxanne718/)的视频：

- [SOC-基于开放 API 封装 Wechaty 接口下的飞书聊天机器人-结项汇报](https://www.youtube.com/watch?v=eutz5EMlJCI)
- [SOC-基于开放 API 封装 Wechaty 接口下的飞书聊天机器人-Demo演示](https://www.youtube.com/watch?v=_y5DktHdL9U)

##### 2. 期末报告

- 标题： `OSPP 2021-结项报告-你的标题`
- 文件名： `2021-XX-XX-ospp-final-XX`
- 报告 category 为：`project`, `ospp`
- 报告 tag 至少包括：`summer-of-wechaty`,`summer-2021`,`ospp`,`ospp-2021`,`final`
- 报告内容至少包括：
  - 项目信息
    - 项目名称
    - 方案描述
    - 时间规划
  - 项目总结
    - 项目成果
    - 期末汇报视频
    - 期末汇报 PPT
    - 遇到的问题及解决方案
  - 导师审核
    - 评审对象
    - 评审结果

##### 3. OSPP 2020 学生期中报告参考：

- [暑期2020 为 go-wechaty 设计实现插件体系 结项报告](https://wechaty.js.org/2020/09/27/go-wechaty-plugin/)
- [暑期2020 基于python-wechaty的群聊助手机器人 结项成果展示](https://wechaty.js.org/2020/09/26/chassist-bot-final/)
- [基于开放 API 封装 Wechaty 接口下的飞书聊天机器人：期末](https://wechaty.js.org/2020/09/30/wechaty-puppet-lark-final-blog/)
- [基于Python-wechaty建立一个斗图机器人 POC 结项博客](https://wechaty.js.org/2020/09/27/python-wechaty-meme-bot-final/)
- [暑期2020 编写一个“每日一句”插件 结项报告](https://wechaty.js.org/2020/09/26/wechaty-words-per-day-plugin-final/)
- [基于RPA封装的Wechaty接口下的抖音聊天机器人结项报告](https://wechaty.js.org/2020/10/13/wechaty-puppet-douyin-final-term/)
- [暑期2020 基于开放 API 封装 Wechaty 接口下的企业微信聊天机器人 终结成果展示](https://wechaty.js.org/2020/09/28/puppet-work-final/)

## OSPP 2020 更多内容介绍

- [Wechaty Summer of Code 2020 Kickoff Meeting](https://wechaty.js.org/2020/07/20/wechaty-soc-kick-off-meeting/)
- [Middle Term Demo Day](https://docs.google.com/document/d/1fVCk8qRYc4RKGMf2UY5HOe07hEhPUOpGC34v88GEFJg/edit#heading=h.5ztnno5qivcb)
- 结项
  - [OSPP 项目总结： 今年夏天，Wechaty 社区与 9 位开源后浪的故事](https://wechaty.js.org/2020/12/31/summer-2020-student-developers/)
  - [开源软件供应链点亮计划暑期 2020 公布结果：基于 Wechaty 开发的项目斩获突出贡献奖和最具潜力两大奖项！](https://wechaty.js.org/2020/11/14/summer-2020-wechaty/)
  - [获奖学生： 一次愉快的南京开源峰会之旅](https://wechaty.js.org/2021/02/17/summer-wechaty-nanjing-summit-journey/)
- [OSPP 2020 项目介绍、期初、期中、期末报告汇总表](https://docs.google.com/spreadsheets/d/1XcDoIczyIclqXP1p90Sz7S0n4Q22xjFzJmjPFlU2g1E/edit#gid=1646451274)

## 优秀项目评选

2020年，经过3个月的努力，最终151位同学通过了结项审核，同学们的结项报告及日常研发工作得到了社区及组委会的一致认可。从项目角度（项目完成质量、代码的可读性、文档的完整度使得项目具有可延续性）、社区角度（学生对社区的贡献度、完成项目对社区的重要性等）、学生角度（学生参与活动的进步程度和快速学习能力）、开源角度（学生展现出未来持续贡献开源的潜力和意愿）等多方面综合评审后，得出了[暑期2020的最终奖项](https://isrc.iscas.ac.cn/summer2020/#/announcement)

- Wechaty 社区的 @univerone (江姗姗) 同学荣获暑期2020的优秀学生突出贡献奖！
- Wechaty 社区的 @kxz18 (孔详哲) 同学荣获暑期2020的优秀学生最具潜力奖！

今年，Wechaty 还会为特别优秀的同学和项目提供如下奖项：

- Wechaty 优秀项目奖
- 结项之后，优质项目将会被 merge 到 Wechaty 官方 org 下。

期待在2021年的夏天，你也能在3个月后，顺利通过结项审核，并赢得 OSPP 颁发的优秀奖励！
