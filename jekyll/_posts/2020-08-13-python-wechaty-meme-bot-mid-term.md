---
title: "基于Python-wechaty建立一个斗图机器人 POC 成果展示"
author: godkillerxiao
image: /assets/2020/meme-bot/08-13-wechaty-meme-bot-mid-term.webp
categories: project
tags:
  - python
  - summer-of-wechaty
  - summer-2020
  - tensorflow
  - machine-learning
  - entertainment
---

## 暑期2020 基于Python-wechaty建立一个斗图机器人 POC 成果展示

“开源软件供应链点亮计划-暑期2020”（以下简称 暑期2020）是由中科院软件所与 openEuler 社区共同举办的一项面向高校学生的暑期活动。
旨在鼓励在校学生积极参与开源软件的开发维护，促进国内优秀开源软件社区的蓬勃发展。
根据项目的难易程度和完成情况，参与者还可获取“开源软件供应链点亮计划-暑期2020”活动奖金和奖杯。
官网：[https://isrc.iscas.ac.cn/summer2020](https://isrc.iscas.ac.cn/summer2020) 官方新闻：[http://www.iscas.ac.cn/xshd2016/xshy2016/202004/t20200426_5563484.html](http://www.iscas.ac.cn/xshd2016/xshy2016/202004/t20200426_5563484.html)
本项目 基于Python-wechaty建立一个斗图机器人 系 暑期2020 支持的开源项目。

## [基于Python-wechaty建立一个斗图机器人]信息

- 导师：黄纯洪

- 学生：肖子霖

- 项目名称：基于Python-wechaty建立一个斗图机器人

- 方案描述：利用OCR、NLP等技术，提取出用户发送的表情包内容，并回复数据库中已有与之相关的表情；具体技术方案泳道图见下：

  ![mid-term](/assets/2020/meme-bot/08-13-wechaty-meme-bot-mid-term.webp)

  更多细节可参见[项目README](https://github.com/MrZilinXiao/python-wechaty-meme-bot/blob/master/README.md).

- 时间规划（摘自项目申请书）：

  - Week1：仔细阅读python-wechaty项目源码，掌握项目大体框架和可用API；
  - Week2：收集表情包数据，选择合适的网络模型。
  - Week3~Week4：训练模型，调试参数；
  - Week5：开发核心模块，编写单元测试；
  - Week6：开发、配置表情包插件后端；
  - Week7~Week8：模块联调，编写测试样例，上线测试。

## 项目进度

- 已完成工作：

  - 利用peewee搭建数据库ORM框架；
  - 表情包爬取（BaseSpider）、收集框架
  - 引入、调试OCR模块
  - 调试Inception特征提取模型
  - 复现[*Deep Cosine Metric Learning for Person Re-identification*](https://ieeexplore.ieee.org/document/8354191/)一文中有关Metric Learning部分，编写好相关训练、验证、测试模块
  - 表情包导入模块
  - 前端回复模块
  - 后端回复逻辑
  - 前端、后端、Wechaty联调，效果见Demo Live视频中演示
  - 部署文档编写

  项目申请书`时间规划`所提及任务中除训练模型外的任务基本完成；

- 遇到的问题及解决方案：

  - python-wechaty文档尚未完成，遇到疑惑时需要翻阅issue列表或者深入源码查看；
  - 网络上没有关于将Metric Learning方法应用到表情包分类的先例，不确定Cosine Metric Learning能在表情包特征提取上起到较好效果，不过我认为勇于尝试是十分必要的！

- 后续工作安排：

  - 对比传统图像分类模型Inception、Metric Learning模型CosineMetricNet的特征提取效果，为用户提供多种选择。
  - 思考出性能优秀的cosine distance比较方法，为从数据库海量表情中提取出相似的表情提供便利。

## 中期PPT演示 & Demo Live 视频链接

PPT演示：

Bilibili: [https://www.bilibili.com/video/BV1kZ4y1M7F6/](https://www.bilibili.com/video/BV1kZ4y1M7F6/)

Youtube:

{% include iframe.html src="https://www.youtube.com/embed/JjH5mJ-lRgk" %}

Demo Live视频：

Bilibili: [https://www.bilibili.com/video/BV17f4y197ut/](https://www.bilibili.com/video/BV17f4y197ut/)

Youtube:

{% include iframe.html src="https://www.youtube.com/embed/sjmlpu0TNj4" %}

## Reference

### Open-Source Reference

- [chineseocr_lite](https://github.com/ouyanghuiyu/chineseocr_lite/tree/master): Powerful Chinese OCR module with accurate results and fast inference speed.
- [HaNLP](https://github.com/hankcs/HanLP): Multilingual NLP library for researchers and companies, built on TensorFlow 2.0.

### Academic Citation

```bash
# in backend/cosine_metric_net.py
[1]N. Wojke and A. Bewley, “Deep Cosine Metric Learning for Person Re-identification,” in 2018 IEEE Winter Conference on Applications of Computer Vision (WACV), Lake Tahoe, NV, Mar. 2018, pp. 748–756, doi: 10.1109/WACV.2018.00087.
```

## 联系我们

- 项目链接：[@python-wechaty-meme-bot](https://github.com/MrZilinXiao/python-wechaty-meme-bot/)
- 联系方式：me#mrxiao.net  (# -> @)

## 导师评审

- 评审内容：*中期报告*
- 提交人：*肖子霖*

### 评审结果

- 项目完成度：*《基于Python-Wechaty建立一个斗图机器人》整个项目按照原定方案在实施。在项目实施过程中，以表情包的识别与回复为主线进行推进。项目从前期到中期考核，学生完成了对表情包的爬取、分类以及标注，对表情包的OCR识别，对识别结果的关键字提取，完成情况较好。*
- 学生参与度：*本项目的难点在于对表情包的识别以及回怼表情包，前期对表情包的爬取、分类和标注以及后期训练怼人模型的工作量均比较大。学生在此过程中也是克服困难，积极参与，认真完成项目相关工作。*
- 代码贡献量：*本项目的代码量实际上在于对表情包的处理代码以及模型的训练，也就是代码量实际上都在项目提及的后端平台上，即代码量较好。*
- 综合评价及建议：*总体来说项目完成情况不错，按照既定的规划稳定实施，项目功能模块也在逐步的完成。存在的问题如下：1、项目目前还未涉及到与“怼”相关的功能开发，后期有待完善；2、代码整体风格不是很好，所以看起来比较乱，希望后期能够改善；3、代码关键性地方缺少注释，有待改进。*
- 最终评审结果：通过
