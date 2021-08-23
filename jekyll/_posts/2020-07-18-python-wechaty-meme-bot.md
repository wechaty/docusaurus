---
title: "基于Python-wechaty建立一个斗图机器人"
author: godkillerxiao
image: /assets/2020/meme-bot/07-19-wechaty-meme-bot.png
categories: project
tags:
  - python
  - summer-of-wechaty
  - summer-2020
  - pytorch
  - machine-learning
  - entertainment
---

“开源软件供应链点亮计划-暑期2020”（以下简称 暑期2020）是由中科院软件所与 openEuler 社区共同举办的一项面向高校学生的暑期活动。

旨在鼓励在校学生积极参与开源软件的开发维护，促进国内优秀开源软件社区的蓬勃发展。

根据项目的难易程度和完成情况，参与者还可获取“开源软件供应链点亮计划-暑期2020”活动奖金和奖杯。

官网：<https://isrc.iscas.ac.cn/summer2020> 官方新闻：<http://www.iscas.ac.cn/xshd2016/xshy2016/202004/t20200426_5563484.html>

本项目 [基于Python-wechaty建立一个斗图机器人] 系 暑期2020 支持的开源项目。

## [基于Python-wechaty建立一个斗图机器人]具体计划

- 导师：黄纯洪
- 学生：肖子霖
- 模块列表
- 项目初步规划图（可能有调整）
    ![plan](/assets/2020/meme-bot/07-19-wechaty-meme-bot.png)
  - [x] 数据库管理
  - [ ] 针对静态表情包的特征提取模块调试与开发
  - [ ] 适配K-means算法
  - [ ] 回复表情包的策略及开发
  - [x] OCR模块包装
- 计划安排：
  - 数据库管理
    - 已完成
    - 为表情包的标题、关键字、特征等信息提供数据库支持，使用了peewee作为ORM框架；
  - 针对静态表情包的特征提取模块调试与开发
    - 预期完成时间：2020年07月25日
    - 使用Pytorch编写特征提取模块，为了测试特征提取效果需要比较InceptionV3、MobileNet等多个经典网络；
    - 备注：由于表情包难以用传统图片分类思路进行训练，这个过程只能使用在ImageNet等公开数据集上的模型（移除全连接层后）；
  - 适配K-means算法
    - 预期完成时间：2020年08月01日
    - 将scipy中的kmeans算法适配进项目，以用于聚类未做标记的表情包数据集；
    - 备注：无
  - 回复表情包的策略及开发
    - 预期完成时间：2020年08月03日
    - 将`初步规划图`中的回复策略适配python-wechaty体系，包括前后端体系；
    - 备注：参考ding-dong-bot逻辑编写；
  - OCR模块包装
    - 已完成
    - 包装chineseocrlite，支持竖排文字，识别准确率尚可；
    - 备注：无

以上所有模块开发完成后，我均会利用unittests模块编写单元测试；

- 项目链接：[@Fighting-Meme-python-wechaty](https://github.com/MrZilinXiao/Fighting-Meme-python-wechaty)
- 联系方式：me#mrxiao.net  (# -> @)

> Author: [@MrZilinXiao](https://github.com/MrZilinXiao) Always dedicated to learn something brand new.
> Code: [@Fighting-Meme-python-wechaty](https://github.com/MrZilinXiao/Fighting-Meme-python-wechaty)
