---
title: '构建脸盲聊天机器人--Wechaty Blinder'
author: lijiarui
categories: project
tags:
  - code
  - talk
  - machine-learning
  - tensorflow
  - featured
  - utility
  - social
image: /assets/2018/wechaty-blinder-1.webp
---

这是我在[2017 北京 谷歌开发者节](http://www.itdks.com/eventlist/detail/1627) TensorFlow 分会场的分享，本次活动是由谷歌（中国）、谷歌北京开发者社区主办，北京邮电大学协办的2017谷歌开发者节北京站在北京邮电大学圆满举办。我主要介绍了如何使用开源项目Wechaty-Blinder快速搭建一个微信脸盲机器人，迅速帮助你识别照片里的人。

![wechaty](/assets/2018/wechaty-blinder-1.webp)

## Who am I

![wechaty](/assets/2018/wechaty-blinder-2.webp)

在分享这个开源项目之前，我先介绍一个我的先天性缺陷：

1. 近视+散光，但是每年带眼镜的次数是个位数。
2. 先天性记不住人样貌。
3. 每天还要见好多人，微信有大几千好友。

通常情况下我会和一个人在微信上聊的火热，然后在一次活动见面又聊的很开心，然后过了几个月再次见面的时候，我们双方热情打招呼后心里默默嘀咕这个人是谁。。。。
为了不让大家觉得我是一个高冷の女子，在我经常活动的地方，只要有人往我这看,我就热情的打招呼，也许对方也在默默嘀咕这是哪个神经病。。。。
对，我有脸盲。
而今天介绍的脸盲机器人，用人工智能，专门帮助我认识各种人的。

## Content

![wechaty](/assets/2018/wechaty-blinder-3.webp)

我会从5个角度来做这场分享，首先简单的介绍下TensorFlow, 然后介绍下Google 的Facenet，再来介绍下我们的3个开源项目：Wechaty, Node-Facenet, Wechaty-Blinder, 最后会给大家做现场的代码演示。
之所以介绍wechaty-blinder 的项目要介绍wechaty 和node-facenet，是因为wechaty-blinder 是基于wechaty 和 node-facenet 这两个开源项目的。

## Google TensorFlow

![wechaty](/assets/2018/wechaty-blinder-4.webp)

脸盲机器人wechaty的底层用到了TensorFlow, 今天要介绍的wechaty-blinder 是一个基于TensorFlow 和google 的论文 Facenet 实现的node.js 开源项目，可以帮助解决人脸认证、识别和聚类等问题。

## Google Facenet

![wechaty](/assets/2018/wechaty-blinder-5.webp)

Facenet 来源于Google 的论文[FaceNet: A Unified Embedding for Face Recognition and Clustering](https://arxiv.org/abs/1503.03832)，是一个用来给人脸做分类的神经网络。
与其他的深度学习方法在人脸上的应用不同，FaceNet并没有用传统的softmax的方式去进行分类学习，然后抽取其中某一层作为特征，而是直接进行端对端学习一个从图像到欧式空间的编码方法，然后基于这个编码再做人脸识别、人脸验证和人脸聚类等，欧式集合距离可以直接来代表脸的相似度。
FaceNet算法有2个特点：

1. 去掉了最后的softmax，而是用元组计算距离的方式来进行模型的训练。使用这种方式学到的图像表示非常紧致，使用128位足矣。
2. 元组的选择非常重要，选的好可以很快的收敛。

## Open Source Chatie

![wechaty](/assets/2018/wechaty-blinder-6.webp)

Wechaty 是一个开源的针对个人号的微信机器人框架，仅仅使用6行JavaScript代码就可以实现一个简单的机器人，同时支持Linux，Windows，Darwin(OSX/Mac) 和 Docker。
博客地址是 [https://wechaty.github.io](https://wechaty.github.io)

![wechaty](/assets/2018/wechaty-blinder-7.webp)

最简单的6行代码代码在这里，也可以去我的项目[wechaty-getting-started](https://github.com/lijiarui/wechaty-getting-started.git)下快速入门wechaty。wechaty 最终运行页面就是右手边的样子。

![wechaty](/assets/2018/wechaty-blinder-8.webp)

Github, Docker, npm 相关地址在这里，wechaty有非常完善的devOps，一旦代码提交，就会自动进行自动化测试，当测试通过后，会自动打包更新docker 和npm， 所以也欢迎各位开发者来pull request。

![wechaty](/assets/2018/wechaty-blinder-9.webp)

Wechaty 现在有非常完善的开发者社区，开发者覆盖了全球，包括中国、美国、澳洲、英国等。这是一部分的contributor的列表，同时chatie 下面也有几个分值项目来支持微信机器人。

![wechaty](/assets/2018/wechaty-blinder-10.webp)

[Node-FaceNet](https://npmjs.com/package/facenet) 是一个基于TensorFlow和facenet ，解决人脸认证、识别和聚类问题的开源项目。它是一个用node封装的python的Facenet库，主要实现了下面三个主要功能：

1. 把不同的脸放在一个欧几里得空间中，不同脸之间的距离代表着脸的相似度。
2. 很好的优化了识别脸的性能，一张脸只要128维向量即可表示。
3. 在LFW 数据集上可以达到99.63% 的准确率，在YouTube 数据集上可以达到95.21% 的准确率。

## Open Source Node-FaceNet

![wechaty](/assets/2018/wechaty-blinder-11.webp)

这个开源项目核心是2个类和3个方法，更多的细节可以参考我写的[文档](http://www.zixia.net/node-facenet)。
两个主要的类是：

1. Face, 毫无疑问代表一张脸
2. Facenet, 代表的是一坨脸。。。

三个主要的方法是:

1. aling()， 从一张图中找出包含的所有的脸，通过先找到脸的坐标，然后生成一个Face 实例数组。换句话中，传一张图片给align，他会突出一个脸的array.
2. embedding()， 将脸转换成一个128维向量
3. distance()，计算两个脸的距离

![wechaty](/assets/2018/wechaty-blinder-12.webp)

这是一个简单的例子，我们来读左边的代码。先新建一个Facenet 的实例，然后传入照片，看打印出来的face的结果。右边是打印的结果。通过这个我们可以看出来，align 函数在图片上找出这张脸的坐标以后，生成一个Face实例，把所有的实例放在一个数组里面。 这个坐标包括两种，一种是能够框出这个脸的框框，另外一个是脸上关键性的5个特征点。看log感受一下：

* bounding box: 用来框出脸的框框，用两个关键点表示：一个是左上角的点，一个是右上角的点。
* landmarks:代表脸上关键性的5个特征点，左眼、有眼、鼻子、左边的嘴、右边的嘴
* embedding: 代表脸的128维向量, Facenet 论文中的embedding 代表一个脸部特征矩阵，是一个128维向量。

![wechaty](/assets/2018/wechaty-blinder-13.webp)

这是另外一个例子，把脸和脸之间的距离可视化。
我们可以看到这个绿色的框框就是上面我说的align出来的能够框出脸的框框，1.45，1.47, 0.66 三个数字分别代表了两个脸的相似程度，可以看出，数字约小，脸约像。如果两个脸是属于一个人的，他们的距离通常是0.75。当然这只是一个经验性数字，还要具体情况具体分析。

## Open Source Wechaty-Blinder

![wechaty](/assets/2018/wechaty-blinder-14.webp)

终于讲到了今天的主角，脸盲机器人的开源项目[wechaty-blinder](https://github.com/huan/wechaty-blinder), 其实当你了解了上面两个项目以后，wechaty-blinder 就非常好理解了。

这个项目是可以记住你所有的微信好友的脸。

一旦机器人帮你记住了这张脸，你随时随地都可以为这张脸命名。他有下面3个功能：

1. 记住群里所有好友的脸
2. 记住通讯录里所有好友的脸
3. 记住你发的每张照片中的脸

当然，他就可以帮助你认出你发的照片、群、和好友中哪些是同一个人啦。

![wechaty](/assets/2018/wechaty-blinder-15.webp)

这是使用wechaty-blinder 的效果图，看到当我发甄子丹和刘德华的脸的时候，他会自动吐出库里面和这个相似的所有的脸，并可以随时给他们改名字。简单的说就是两点：

1. 识别出脸
2. 给脸起名字

![wechaty](/assets/2018/wechaty-blinder-16.webp)
大家可以体验一下，这个是我预先为这个活动创建好的wechaty-dev-facenet 微信群，群里面有机器人，扫码进去就可以体验这个功能了。

这个机器人已经用Docker 封装好了，运行下面的命令，就可以启动这个机器人了，`WECHATY_TOKEN=TOKEN` 是可以你随便起名字的。

```shell
docker run -d --restart=always --volume=/workdir:/workdir -e WECHATY_TOKEN=TOKEN zixia/wechaty-blinder
```

如果你想随时在网页上控制这个机器人怎么办呢？很简单，跟着我做下面这五步：

1. 打开 <https://wechaty.github.io/angular/> ，然后点击 Click to run
2. 在输入框填入你的 WECHATY_TOKEN ，然后点击 Set Token
3. 等待显示登录二维码，然后用手机摄像头（微信内长按不可以）扫描登录
4. 建立一个新群，建群后不要做任何操作，先把群名修改为任意包含 facenet 的字符串
5. 在群里面发图片，附体在你身上的机器人就会施法了。

## 最后，感谢Google 办了这么一场有趣的活动

![wechaty](/assets/2018/wechaty-blinder-17.jpeg)

本次活动邀请到了来自海内外数十位资深工程师，除了 Google的研发专家团队，还邀请到了JetBrains团队，这也是 JetBrains 团队在中国大陆首次针对Kotlin的官方分享。另外，该活动还邀请到了国内诸多一线研发团队，滴滴、Strikingly、百度、集智社区，桔子互动等公司，带来他们近期的一线研发经验。

DevFest 是 Google 每年秋季在全球GDG（谷歌开发者社区）推行的，针对 Google 技术开发者、爱好者所举办的技术交流活动。其主要目的在于同步 Google 相关各种先进技术，并进行推广与应用，促进本地社区成员的交流。DevFest活动除设置有吸引力的主题分享，还有互动参与环节和来自 Google 的正版周边礼物，对于 Google 技术开发者、爱好者都是不可错过的体验机会。
