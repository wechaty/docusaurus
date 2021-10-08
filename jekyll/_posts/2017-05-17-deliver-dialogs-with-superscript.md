---
title: "Deliver dialogs with SuperScript"
author: hailiang-wang
categories: tutorial
tags:
  - code
  - news
---

> Hailiang WANG is Lead of Rockq Community and also a software developer. He used to work in IBM China Innovation Center and IBM China Development Lab. Since last year, he has focused on deep learning technologies, NLP, chatbot and conversational UIs.

现在时间是7点半，8点下班回家，在这半个小时，让我们来聊聊SuperScript 和 Wechaty 结合带来的巨大前景。

![Blue and Red pill](/assets/2017/samurais-the-matrix.webp)

Wechaty就像是连到母体的管道，当我们还在思考着是吃红药片还是蓝药片的时候，pia，[zixia](https://github.com/huan)就把Wechaty给做出来。然后呢？！

对话，对话，对话。

## SuperScript

SuperScript是一个开源的对话引擎。使用SuperScript定义的语法，书写脚本文件，然后使用编译工具，生成对话元数据。

![ss](/assets/2017/samrais-ss-1.webp)

### 脚本

* 简单

```text
+ 你好
- 你好
```

用户说"你好"，bot回复"你好"

* 变形

```text
+ 你(在|毕业于)哪个学校
- {keep} 北京信息科技大学

+ 清河小营 [校区]
- {keep} 我也在附近
```

"你在哪个学校"，"你毕业于哪个学校"，都会得到回复："北京信息科技大学"

"清河小营"，"清河小营校区"，都会得到回复: "北京信息科技大学"

* 插件

```text
+ 聊天是一门艺术
- {keep} ^checkMessageFeatures() 编程是一项工艺

+ <nouns>是中国首屈一指的学府
- {keep} ^checkMessageFeatures() 北京邮电大学也是
```

*checkMessageFeatures* 是一个插件，在SuperScript里，插件就是一个被注入了对话上下文环境的JavaScript函数。利用函数，我们可以实现任何业务逻辑。

* 关键词提取

```text
// Generic wildcards
+ 他在旧金山创立的对冲基金 (*) 依靠 (*) 算法来处理所有的交易
- {keep} <cap1>是一家公司<cap2>

// Exact length wildcards
+ 家里 *2 坏了
// 此处匹配两个字
- {keep} <cap1>坏了很多次了

// Min-max wildcards
+ 今天是 *(5-8)
// 此处匹配5-8个字
- {keep} 祝大家玩的开心

+ [今天] (*) 天气(怎么样|如何|好么)
- {keep} ^getWeather(<cap1>)
```

所以，在回复中，\<capN\> 对应着 开场白里的 *。

注意上面的 *^getWeather*，这里是插件。[*getWeather*](https://github.com/Samurais/ss-spa/blob/develop/plugins/index.plugin.js#L24)可以实现天气查询功能。

更多[介绍](http://www.leiphone.com/news/201704/JvBW78wfyvcfB4xW.html)。

## SuperScript and Wechaty

![ss](/assets/2017/samurias-hifive.webp)

```sh
git clone git@github.com:Samurais/ss-wechaty.git && cd ss-wechaty
scripts/start-docker-compose.sh
```

### Take a close look

```sh
git@github.com:Samurais/ss-spa.git && cd ss-spa
npm install
cp config/environment/development.sample.js config/environment/development.js # 修改配置文件
npm run dev:start
```

在ss-spa中，参考 **chat/zh_CN.ss**，书写新的脚本，依然放在 **chat**目录下，ss-spa会热加载。

测试对话

```sh
open http://localhost:3001
```

以任何用户名登入，并开始对话。

同时支持使用 docker-compose 快速开始。

```sh
cd ss-spa
scripts/build-docker-image.sh
scripts/start-docker-spa.sh
```

### Deliver dialog with Wechaty

现在，回到**ss-wechaty**。

> 如果之前有启动，先停止并删除容器。

```sh
scripts/start-docker-compose.sh
```

## 后记

现在是8:03分了，bye. 下期再见！

[Click here to get the repo](https://github.com/samurais/ss-wechaty)

Author: [@hain](http://blog.chatbot.io/webcv/), Lead of [Rockq Community](https://github.com/rockq-org/node-party), [Wechaty Contributor](https://github.com/orgs/Chatie/teams/contributor)
