---
title: "入门：小白如何在wechaty社区发布自己的第一篇博客"
author: atorber
categories: article
tags:
  - blog
  - study
  - introduction
image: /assets/2021/04-how-to-publish-blog-on-wechaty/rare-book.jpeg
---

> 作者: [atorber](https://github.com/atorber/)，不务正业的产品经理

## 谁需要阅读这篇博客

很高兴受@huan邀请来主笔这篇博客，之所以被选中是因为在第一次使用github向wechaty社区提交博客时Q到了@huan——提交了十几次才最终通过。今天也很高兴能和大家分享零基础的小白如何从0到1的在wechaty发布博客（并成为一个贡献者）。

## 来自官方的——How to post a blog

首先先介绍一下来自官方的指导文档，对于有基础的同学直接移步参考原文[https://github.com/wechaty/wechaty.js.org](https://github.com/wechaty/wechaty.js.org)——无论如何即时是小白也希望大家先去阅读一下原文

对于一个英语困难者，wechaty的文档无疑是一个灾难，so，让我们来百度翻译一下：

### 总共13步，比大象装冰箱多了10步

1. 复刻（fork）wehaty代码（不知道什么是fork？总之很复杂，网上说的也不是很明白，简单点理解就是copy一份）
1. 同步你的分支（不知道如何同步？后边说）
1. 创建你的博客分支
1. 使用markdown书写你的博客（不知道什么是markdown？后边说）
1. 添加你的博客文件到`jekyll/_post`文件夹
1. 添加文档中的插图到 `jekyll/assets` 文件夹，在文件夹下当前年份下建立一个以"月份+博客文件名"为名称的文件夹来存放相关图片（示例："04-how-to-publish-blog-on-wechaty",则完整的图片存放路径`jekyll/assets/04-how-to-publish-blog-on-wechaty/image01.png` ）
1. 添加你的个人信息到`jekyll/_contributors/your_github_id.md`（新建一个文件your_github_id.md，把your_github_id换成你的github账号）
1. 提交更改，使用博客标题作为备注信息
1. 推送到分支
1. 创建一个新的Pull请求
1. 签署CLA（什么CLA？后边说）
1. 等待传递GitHub操作CI，或者修复任何东西以确保CI变为绿色（Wait for pass the GitHub Action CI, or fix whatever to make sure CI turns green，百度直译，超哥也没搞太清楚，后边说）
1. 等待@wechaty的管理员审核

就这些!就这些？就这些...

## 贡献准则

### 1. 添加博客头

所有的博客都必须有标题、作者、背景图片...

如下是一个示例:

```yaml
---
title: "入门：小白如何在wechaty社区发布自己的第一篇博客"
author: atorber
categories: article
tags:
  - blog
  - wechaty
  - study
  - introduction
image: /assets/2021/04-how-to-publish-blog-on-wechaty/rare_book.jpeg
---

> 作者: [atorber](https://github.com/atorber/)，不务正业的产品经理

<这一行开始是博客正文>
```

### 2. 写作风格

- 所有的文件名和url地址使用小写字母, 并且使用`-` 连接而不是空格，不允许中文字符。
例如：
正确格式`2017-10-06-wechat-pc-impactor`
错误格式`2017-10-06-WeChat PC Impactor`
- 选择合适的图片可以是博客看起来更漂亮
- 在发布之前插入图片和视频，需要将所有图片、视频文件保存在上述文件夹中 `/jekyll/assets/文章标标题/` directory.

### 4. 只提交相关的文件

请勿提交博客不相关的文件

### 5. 添加视频或pdf

示例：

```html
{% include iframe.html src="https://www.youtube.com/watch?v=3eq8wJfCAWs" %}
```

或者

```html
{% include iframe.html src="/assets/2020/qijibot/final.pdf" %}
```

更多： [将iframe添加到wechaty博客](https://wechaty.js.org/2020/08/24/add-video-to-wechaty-blog/)

## 测试

为了确保一切（文件名、文件大小等）都正常，可以在“git push”之前运行以下命令检查它们。

```sh
npm install
npm test
```

## 预览

在本地运行Jekyll来预览博客。

### 0. 依赖

按照官方指示在本地安装jekyll [jekyll quickstart](https://jekyllrb.com/docs/)

### 1. 手动安装Jekyll

在本地运行Jekyll进行博客预览(对于熟悉Ruby语言的同学更容易一些。）

```sh
make install
cd jekyll
make serve
```

### 2. 预览博客

访问 <http://127.0.0.1:4000/blog/> 可以预览博客!

## 常见问题

1. macOS下报错`jekyll/assets/.DS_Store does not match /\/[0-9\-a-z_]+\./!？`

mac下烦人的`.DS_Store`文件，运行`sudo find / -name ".DS_Store" -depth -exec rm {} \;`，然后，等几分钟和碰运气...

更多问题后续会根据反馈继续补充

> 历史文章

- [Wechaty+微信小程序实现群内活动报名](https://wechaty.js.org/2021/03/17/node-wechaty-and-wechaty-puppet-padlocal/)
