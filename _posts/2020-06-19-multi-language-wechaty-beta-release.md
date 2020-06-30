---
title: "Announcement: Multi Language Wechaty Beta Released!"
author: huan
categories: announcement
tags:
  - release
header:
  teaser: /assets/2020/multi-language-wechaty-beta-released/multi-language-teaser.png
---

> Author: [Huan LI](https://github.com/huan), Author of Wechaty

![Wechaty](/assets/2020/multi-language-wechaty-beta-released/multi-language.png)

Multi-language Wechaty Beta Released! We have Python, Go, Java, and Scala released on June 19, 2020!

<!--more-->

## Agenda

[![Multi-language Wechaty Beta Released Agenda](/assets/2020/multi-language-wechaty-beta-released/agenda-2.png)](https://docs.google.com/document/d/1fVCk8qRYc4RKGMf2UY5HOe07hEhPUOpGC34v88GEFJg/edit#heading=h.ym05s3ebes31)

| Time | Topic | Speaker |
| :--- | :---  | :---    |
| 19:00 - 19:05 | Introduction & Warm up | 李佳芮,  @rui |
| 19:05 - 19:20 | Multi-language Wechaty Roadmap | 李佳芮,  @rui |
| 19:20 - 19:35 | Introduction for python Wechaty | 吴京京, @wj-Mcat |
| 19:35 - 19:50 | 漫谈Java Wechaty | 刁政欣, @diaozxin007 |
| 19:50 - 20:00 | puppet manager 的实现 | 任筱雅, @redmaple1 |
| | Tea Break | |
| 20:00 - 20:15 | 聊一下go Wechaty | 丁超飞, @dchaofei |
| 20:15 - 20:30 | Scala with Wechaty | 蔡君, @jcai |
| 20:30 - 20:45 | Wonderful Wechaty DevOps Tool set | 高原, @windmemory |
| 20:45 - 21:00 | How to getting started with Multi-language Wechaty | 李卓桓, @huan |
| | Q/A & Free Talk | |

## 1 Multi-language Wechaty Roadmap

![Wechaty Community Org](/assets/2020/multi-language-wechaty-beta-released/community-org.png)

The Apache Way

"If it didn't happen on list, it didn't happen." - Craig, Chairman of Apache Software Foundation.

如果在 Meeting Notes 中没有记录，那么团队成员之间就无法同步信息。


Reference List:

官方内容
孵化场的地址： http://incubator.apache.org/。
生命周期： http://incubator.apache.org/cookbook/

佳芮推荐：
- Apache 介绍 http://www.apache.org/foundation/
- 什么是 Apache Way，Apache Way 是指 Apache 管理和运营项目的方法 http://apache.org/theapacheway/
- 什么是 Incubator PMC http://incubator.apache.org/whoweare.html#the_incubator_project_management_commitee_pmc
- 什么是 Infrastructure Team https://selfserve.apache.org/
- [视频]ASF 是如何运营的以及他的价值： https://www.youtube.com/wa tch?v=TQwrH0PlpZg
- [视频] 如何通过 Apache 孵化器：https://www.youtube.com/watch?v=I0-lp1t9ee0
- [ppt] 如何申请入孵 Apache 孵化器：http://training.apache.org/topics/ApacheWay/NavigatingASFIncubator/index.html
- [视频] 如何高效管理开源项目： https://www.youtube.com/watch?v=hpAv54KIgK8
- [视频] 如何从Apache 孵化器顺利毕业成为顶级项目： https://www.youtube.com/watch?v=yWurOHvm5WM
- [视频] 通往 Apache 之路重要的一环 https://www.youtube.com/watch?v=SCDv2hUgOjU
- [视频] 在 Apache 孵化器的日子： https://www.youtube.com/watch?v=KopPbWS87fw
- Apache 从入孵到毕业的指南：http://incubator.apache.org/cookbook/#graduation_discussion

![Rui Wechaty Roadmap - Rui (李佳芮)](/assets/2020/multi-language-wechaty-beta-released/rui-talk-1.jpg)

![Rui Wechaty Roadmap - Rui (李佳芮)](/assets/2020/multi-language-wechaty-beta-released/rui-talk-2.jpg)

## Python Wechaty

[![Python Wechaty](/assets/2020/multi-language-wechaty-beta-released/python-wechaty.png)](https://github.com/wechaty/python-wechaty)

[![Wechaty in Python](https://img.shields.io/badge/Wechaty-Python-blue)](https://github.com/wechaty/python-wechaty)
[![PyPI Version](https://img.shields.io/pypi/v/wechaty?color=blue)](https://pypi.org/project/wechaty/)
[![Downloads](https://pepy.tech/badge/wechaty)](https://pepy.tech/project/wechaty)
[![Python 3.7](https://img.shields.io/badge/python-3.7+-blue.svg)](https://www.python.org/downloads/release/python-370/)

[![Python Wechaty Getting Started](https://img.shields.io/badge/Python%20Wechaty-Getting%20Started-blue)](https://github.com/wechaty/python-wechaty-getting-started)

Committers:

- Jingjing WU (吴京京) <https://github.com/wj-Mcat>
- Chunhong HUANG (黄纯洪) <https://github.com/huangaszaq>

Contributors:

[![contributor](https://sourcerer.io/fame/huan/wechaty/python-wechaty/images/0)](https://sourcerer.io/fame/huan/wechaty/python-wechaty/links/0)
[![contributor](https://sourcerer.io/fame/huan/wechaty/python-wechaty/images/1)](https://sourcerer.io/fame/huan/wechaty/python-wechaty/links/1)
[![contributor](https://sourcerer.io/fame/huan/wechaty/python-wechaty/images/2)](https://sourcerer.io/fame/huan/wechaty/python-wechaty/links/2)
[![contributor](https://sourcerer.io/fame/huan/wechaty/python-wechaty/images/3)](https://sourcerer.io/fame/huan/wechaty/python-wechaty/links/3)
[![contributor](https://sourcerer.io/fame/huan/wechaty/python-wechaty/images/4)](https://sourcerer.io/fame/huan/wechaty/python-wechaty/links/4)
[![contributor](https://sourcerer.io/fame/huan/wechaty/python-wechaty/images/5)](https://sourcerer.io/fame/huan/wechaty/python-wechaty/links/5)
[![contributor](https://sourcerer.io/fame/huan/wechaty/python-wechaty/images/6)](https://sourcerer.io/fame/huan/wechaty/python-wechaty/links/6)
[![contributor](https://sourcerer.io/fame/huan/wechaty/python-wechaty/images/7)](https://sourcerer.io/fame/huan/wechaty/python-wechaty/links/7)

### 2 Introduction for python Wechaty，吴京京 ([@wj-Mcat](https://github.com/wj-Mcat))

https://docs.google.com/presentation/d/1cGBzq3eIRklBB_C5a58NTdjPZFz6inSuYlpLy42HCdk/edit?usp=sharing

![Python Wechaty - Jingjing WU (吴京京)](/assets/2020/multi-language-wechaty-beta-released/jing-talk-1.jpg)

![Scala Wechaty - Jun CAI (蔡君)](/assets/2020/multi-language-wechaty-beta-released/jing-talk-can-do.jpg)

![Scala Wechaty - Jun CAI (蔡君)](/assets/2020/multi-language-wechaty-beta-released/jing-talk-developers.jpg)

![Scala Wechaty - Jun CAI (蔡君)](/assets/2020/multi-language-wechaty-beta-released/jing-talk-ding-dong-bot.jpg)

## Java Wechaty

[![Java Wechaty](/assets/2020/multi-language-wechaty-beta-released/java-wechaty.png)](https://github.com/wechaty/java-wechaty)

[![Wechaty in Kotlin](https://img.shields.io/badge/Wechaty-Kotlin-orange)](https://github.com/wechaty/java-wechaty)
[![Java Version](https://img.shields.io/maven-central/v/io.github.wechaty/wechaty?label=Maven)](https://mvnrepository.com/artifact/io.github.wechaty/wechaty)
[![Kotlin](https://img.shields.io/badge/%3C%2F%3E-Kotlin-orange.svg)](https://kotlinlang.org)

[![Java Wechaty Getting Started](https://img.shields.io/badge/Java%20Wechaty-Getting%20Started-orange)](https://github.com/wechaty/java-wechaty-getting-started)

Committers:

- Zhengxin DIAO (刁政欣) <https://github.com/diaozxin007>
- Xiaoya REN (任筱雅) <https://github.com/diaozxin007>

Contributors:

[![contributor](https://sourcerer.io/fame/huan/wechaty/java-wechaty/images/0)](https://sourcerer.io/fame/huan/wechaty/java-wechaty/links/0)
[![contributor](https://sourcerer.io/fame/huan/wechaty/java-wechaty/images/1)](https://sourcerer.io/fame/huan/wechaty/java-wechaty/links/1)
[![contributor](https://sourcerer.io/fame/huan/wechaty/java-wechaty/images/2)](https://sourcerer.io/fame/huan/wechaty/java-wechaty/links/2)
[![contributor](https://sourcerer.io/fame/huan/wechaty/java-wechaty/images/3)](https://sourcerer.io/fame/huan/wechaty/java-wechaty/links/3)
[![contributor](https://sourcerer.io/fame/huan/wechaty/java-wechaty/images/4)](https://sourcerer.io/fame/huan/wechaty/java-wechaty/links/4)
[![contributor](https://sourcerer.io/fame/huan/wechaty/java-wechaty/images/5)](https://sourcerer.io/fame/huan/wechaty/java-wechaty/links/5)
[![contributor](https://sourcerer.io/fame/huan/wechaty/java-wechaty/images/6)](https://sourcerer.io/fame/huan/wechaty/java-wechaty/links/6)
[![contributor](https://sourcerer.io/fame/huan/wechaty/java-wechaty/images/7)](https://sourcerer.io/fame/huan/wechaty/java-wechaty/links/7)

### 3 漫谈Java Wechaty，刁政欣 ([@diaozxin007](https://github.com/diaozxin007))

![Java Wechaty - Zhengxin DIAO (刁政欣)](/assets/2020/multi-language-wechaty-beta-released/xin-talk-1.jpg)

![Java Wechaty - Zhengxin DIAO (刁政欣)](/assets/2020/multi-language-wechaty-beta-released/xin-talk-2.jpg)

![Java Wechaty - Zhengxin DIAO (刁政欣)](/assets/2020/multi-language-wechaty-beta-released/xin-talk-3.jpg)

![Java Wechaty - Zhengxin DIAO (刁政欣)](/assets/2020/multi-language-wechaty-beta-released/xin-talk-4.jpg)

![Java Wechaty - Zhengxin DIAO (刁政欣)](/assets/2020/multi-language-wechaty-beta-released/xin-talk-5.jpg)

![Java Wechaty - Zhengxin DIAO (刁政欣)](/assets/2020/multi-language-wechaty-beta-released/xin-talk-6.jpg)

![Java Wechaty - Zhengxin DIAO (刁政欣)](/assets/2020/multi-language-wechaty-beta-released/xin-talk-7.jpg)

![Java Wechaty - Zhengxin DIAO (刁政欣)](/assets/2020/multi-language-wechaty-beta-released/xin-talk-8.jpg)

#### Happy Birthday

![Java Wechaty - Zhengxin DIAO (刁政欣)](/assets/2020/multi-language-wechaty-beta-released/xilidou-happy-birthday.jpg)

![Java Wechaty - Zhengxin DIAO (刁政欣)](/assets/2020/multi-language-wechaty-beta-released/xilidou-happy-birthday-gallary.jpg)

### 4 puppet manager 的实现，任筱雅, ([@redmaple1](https://github.com/redmaple1))

![Java Wechaty - Xiaoya REN (任筱雅)](/assets/2020/multi-language-wechaty-beta-released/xiaoya-talk-1.jpg)

![Java Wechaty - Xiaoya REN (任筱雅)](/assets/2020/multi-language-wechaty-beta-released/xiaoya-talk-2.jpg)

![Java Wechaty - Xiaoya REN (任筱雅)](/assets/2020/multi-language-wechaty-beta-released/xiaoya-talk-3.jpg)

![Java Wechaty - Xiaoya REN (任筱雅)](/assets/2020/multi-language-wechaty-beta-released/xiaoya-talk-4.jpg)

![Java Wechaty - Xiaoya REN (任筱雅)](/assets/2020/multi-language-wechaty-beta-released/xiaoya-talk-5.jpg)

## Go Wechaty

[![Go Wechaty](/assets/2020/multi-language-wechaty-beta-released/go-wechaty.png)](https://github.com/wechaty/go-wechaty)

![Go Version](https://img.shields.io/github/go-mod/go-version/wechaty/go-wechaty)
[![Go](https://github.com/wechaty/go-wechaty/workflows/Go/badge.svg)](https://github.com/wechaty/go-wechaty/actions?query=workflow%3AGo)
[![Wechaty in Go](https://img.shields.io/badge/Wechaty-Go-7de)](https://github.com/wechaty/go-wechaty)

[![Go Wechaty Getting Started](https://img.shields.io/badge/Go%20Wechaty-Getting%20Started-7de)](https://github.com/wechaty/go-wechaty-getting-started)

Committers:

- Xiaoyu DING (丁小雨) <https://github.com/dingdayu>
- Chaofei DING (丁超飞) <https://github.com/dchaofei>
- Bojie LI (李博杰) <https://github.com/SilkageNet>

Contributors:

[![contributor](https://sourcerer.io/fame/huan/wechaty/go-wechaty/images/0)](https://sourcerer.io/fame/huan/wechaty/go-wechaty/links/0)
[![contributor](https://sourcerer.io/fame/huan/wechaty/go-wechaty/images/1)](https://sourcerer.io/fame/huan/wechaty/go-wechaty/links/1)
[![contributor](https://sourcerer.io/fame/huan/wechaty/go-wechaty/images/2)](https://sourcerer.io/fame/huan/wechaty/go-wechaty/links/2)
[![contributor](https://sourcerer.io/fame/huan/wechaty/go-wechaty/images/3)](https://sourcerer.io/fame/huan/wechaty/go-wechaty/links/3)
[![contributor](https://sourcerer.io/fame/huan/wechaty/go-wechaty/images/4)](https://sourcerer.io/fame/huan/wechaty/go-wechaty/links/4)
[![contributor](https://sourcerer.io/fame/huan/wechaty/go-wechaty/images/5)](https://sourcerer.io/fame/huan/wechaty/go-wechaty/links/5)
[![contributor](https://sourcerer.io/fame/huan/wechaty/go-wechaty/images/6)](https://sourcerer.io/fame/huan/wechaty/go-wechaty/links/6)
[![contributor](https://sourcerer.io/fame/huan/wechaty/go-wechaty/images/7)](https://sourcerer.io/fame/huan/wechaty/go-wechaty/links/7)

### 5 聊一下go Wechaty，丁超飞, ([@dchaofei](https://github.com/dchaofei))

![Go Wechaty - Chaofei DING (丁超飞)](/assets/2020/multi-language-wechaty-beta-released/chaofei-talk-1.jpg)

![Go Wechaty - Chaofei DING (丁超飞)](/assets/2020/multi-language-wechaty-beta-released/chaofei-talk-2.jpg)

![Go Wechaty - Chaofei DING (丁超飞)](/assets/2020/multi-language-wechaty-beta-released/chaofei-talk-3.jpg)

![Go Wechaty - Chaofei DING (丁超飞)](/assets/2020/multi-language-wechaty-beta-released/chaofei-talk-4.jpg)

![Go Wechaty - Chaofei DING (丁超飞)](/assets/2020/multi-language-wechaty-beta-released/chaofei-talk-5.jpg)

![Go Wechaty - Chaofei DING (丁超飞)](/assets/2020/multi-language-wechaty-beta-released/chaofei-talk-6.jpg)

## Scala Wechaty

[![Scala Wechaty](/assets/2020/multi-language-wechaty-beta-released/scala-wechaty.png)](https://github.com/wechaty/scala-wechaty)

[![Wechaty in Scala](https://img.shields.io/badge/Wechaty-Scala-890)](https://github.com/wechaty/scala-wechaty)
[![Scala 2.13](https://img.shields.io/badge/scala-2.13+-890.svg)](https://www.scala-lang.org/)

[![Scala Wechaty Getting Started](https://img.shields.io/badge/Scala%20Wechaty-Getting%20Started-890)](https://github.com/wechaty/scala-wechaty-getting-started)

Committers:

- Jun CAI (蔡君) <https://github.com/jcai>

Contributors:

[![contributor](https://sourcerer.io/fame/huan/wechaty/scala-wechaty/images/0)](https://sourcerer.io/fame/huan/wechaty/scala-wechaty/links/0)
[![contributor](https://sourcerer.io/fame/huan/wechaty/scala-wechaty/images/1)](https://sourcerer.io/fame/huan/wechaty/scala-wechaty/links/1)
[![contributor](https://sourcerer.io/fame/huan/wechaty/scala-wechaty/images/2)](https://sourcerer.io/fame/huan/wechaty/scala-wechaty/links/2)
[![contributor](https://sourcerer.io/fame/huan/wechaty/scala-wechaty/images/3)](https://sourcerer.io/fame/huan/wechaty/scala-wechaty/links/3)
[![contributor](https://sourcerer.io/fame/huan/wechaty/scala-wechaty/images/4)](https://sourcerer.io/fame/huan/wechaty/scala-wechaty/links/4)
[![contributor](https://sourcerer.io/fame/huan/wechaty/scala-wechaty/images/5)](https://sourcerer.io/fame/huan/wechaty/scala-wechaty/links/5)
[![contributor](https://sourcerer.io/fame/huan/wechaty/scala-wechaty/images/6)](https://sourcerer.io/fame/huan/wechaty/scala-wechaty/links/6)
[![contributor](https://sourcerer.io/fame/huan/wechaty/scala-wechaty/images/7)](https://sourcerer.io/fame/huan/wechaty/scala-wechaty/links/7)

### 6 Scala with Wechaty，蔡君, ([@jcai](https://github.com/jcai))

https://github.com/jcai/wechaty-meetup

[Scala Wechaty - Jun CAI (蔡君) Slides](/assets/2020/multi-language-wechaty-beta-released/jcai-talk-slides.pdf)


![Scala Wechaty - Jun CAI (蔡君)](/assets/2020/multi-language-wechaty-beta-released/jcai-talk-1.jpg)

![Scala Wechaty - Jun CAI (蔡君)](/assets/2020/multi-language-wechaty-beta-released/jcai-talk-2.jpg)

![Scala Wechaty - Jun CAI (蔡君)](/assets/2020/multi-language-wechaty-beta-released/jcai-talk-3.jpg)

![Scala Wechaty - Jun CAI (蔡君)](/assets/2020/multi-language-wechaty-beta-released/jcai-talk-4.jpg)

## 7 Wonderful Wechaty DevOps Toolset，高原, ([@windmemory](https://github.com/windmemory))

![DevOps Wechaty - Yuan GAO (高原)](/assets/2020/multi-language-wechaty-beta-released/yuan-talk-1.jpg)

![DevOps Wechaty - Yuan GAO (高原)](/assets/2020/multi-language-wechaty-beta-released/yuan-talk-2.jpg)

![DevOps Wechaty - Yuan GAO (高原)](/assets/2020/multi-language-wechaty-beta-released/yuan-talk-3.jpg)

![DevOps Wechaty - Yuan GAO (高原)](/assets/2020/multi-language-wechaty-beta-released/yuan-talk-4.jpg)

![DevOps Wechaty - Yuan GAO (高原)](/assets/2020/multi-language-wechaty-beta-released/yuan-talk-5.jpg)

![DevOps Wechaty - Yuan GAO (高原)](/assets/2020/multi-language-wechaty-beta-released/yuan-talk-6.jpg)

![DevOps Wechaty - Yuan GAO (高原)](/assets/2020/multi-language-wechaty-beta-released/yuan-talk-7.jpg)

![DevOps Wechaty - Yuan GAO (高原)](/assets/2020/multi-language-wechaty-beta-released/yuan-talk-8.jpg)

![DevOps Wechaty - Yuan GAO (高原)](/assets/2020/multi-language-wechaty-beta-released/yuan-talk-9.jpg)

![DevOps Wechaty - Yuan GAO (高原)](/assets/2020/multi-language-wechaty-beta-released/yuan-talk-10.jpg)

![DevOps Wechaty - Yuan GAO (高原)](/assets/2020/multi-language-wechaty-beta-released/yuan-talk-11.jpg)

![DevOps Wechaty - Yuan GAO (高原)](/assets/2020/multi-language-wechaty-beta-released/yuan-talk-12.jpg)

![DevOps Wechaty - Yuan GAO (高原)](/assets/2020/multi-language-wechaty-beta-released/yuan-talk-13.jpg)

## 8 How to getting started with Multi-language Wechaty，李卓桓, ([@huan](https://github.com/huan))


![Go Wechaty - Huan (李卓桓)](/assets/2020/multi-language-wechaty-beta-released/huan-talk-1.jpg)

![Go Wechaty - Huan (李卓桓)](/assets/2020/multi-language-wechaty-beta-released/huan-talk-2.jpg)

```ascii
  +--------------------------+ +--------------------------+
  |                                                       |
  |                        Wechaty                        |
  |          TypeScript, Python, GO, Java, Kotlin         |
  |                                                       |
  |         (To Be Added: Swift, Php, dotNet, ... )       |
  |                                                       |
  +--------------------------+ +--------------------------+

  +-------------------------------------------------------+
  |                 Wechaty Puppet Hostie                 |
  |                                                       |
  |                (wechaty-puppet-hostie)                |
  +-------------------------------------------------------+

+---------------------  @chatie/grpc  ----------------------+

  +-------------------------------------------------------+
  |                Wechaty Puppet Abstract                |
  |                                                       |
  |                   (wechaty-puppet)                    |
  +-------------------------------------------------------+
```

[Wechaty is All You Need: Python, Go, and Java Translation Project #1927](https://github.com/wechaty/wechaty/issues/1927)

[How to create your own Wechaty Hostie Token with the Web Protocol #1986](https://github.com/wechaty/wechaty/issues/1986)

[Using your Puppet PadPlus token with Python, Java, and Go Wechaty #1985](https://github.com/wechaty/wechaty/issues/1985)

Topic:   Kickoff meeting for
    Multi-language Wechaty
Date: Friday, Apr 17, 2020
Time: 8 - 10 pm, 2 Hours
Meeting Point:
  https://zoom.us/j/6505033788
  Meeting Notes on Google Docs





BETA Release: Multi-language Wechaty
Wechaty in Python, Java, Go, and Scala(new!)
Jun 19, 2020

## Group Photo

![Grup Photo](/assets/2020/multi-language-wechaty-beta-released/group-photo.jpg)


To review our first multiple language Wechaty meeting, please see: [Kickoff meeting for Multi-language Wechaty]() at April 17, 2020:

| Time | Topic | Speaker |
| :--- | :---  | :---    |
| 8:00 - 8:15 | Introduction & Warm up | 李卓桓，@huan |
| 8:15 - 8:30 | Just 0.1% of the Python Wechaty | 吴京京，@wj-Mcat |
| 8:30 - 8:45 | Go Wechaty 开发分享 | 丁超飞 @dchaofei |
| 8:45 - 9:00 | 从 Go 的角度理解 Wechaty | 丁小雨，@dingdayu |
| 9:00 - 9:15 | 从 Java 开发者的角度谈 Wechaty | 刁政欣，@diaozxin007 |
| 9:15 - 9:30 | Golang里的EventEmitter | 李博杰，@SilkageNet |
| 9:30 - 9:45 | Discussion: Prize for DingDongBot | 李卓桓，@huan |
| 9:45 - 10:00 | Q/A & Free Talk | |

[![Multi-language Wechaty Kickoff Meeting](/assets/2020/multi-language-wechaty-beta-released/agenda-1.png)](https://docs.google.com/document/d/1fVCk8qRYc4RKGMf2UY5HOe07hEhPUOpGC34v88GEFJg/edit#heading=h.s1pqhlt89eea)
