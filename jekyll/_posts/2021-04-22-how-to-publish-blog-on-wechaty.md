---
title: "入门：小白如何在wechaty社区发布自己的第一篇博客（一）"
author: atorber
categories: article
tags:
  - blog
  - study
  - introduction
image: /assets/2021/04-how-to-publish-blog-on-wechaty/rare-book.webp
---

很高兴能执笔这篇博客，第一次使用github向wechaty社区提交博客时Q到了@huan（提交了十几次才最终通过），因此也被印象深刻了。今天和大家分享一下零基础或有那么一丢丢基础的小白如何从0到1的在wechaty发布博客（成为一个贡献者）。

作为系列博客的第一篇，今天首先和大家分享一下两个内容：

- 在wechaty发布博客的工作原理

- 来自官方的——How to post a blog

> 后续还有连载，请先读完这篇

## 在wechaty发布博客的工作原理

之所以用"工作原理"来形容，是因为初学者在有了向wechaty发布博客的想法之后，很快会发现它在用一种「很技术的方式」而非传统的博客方式进行发布。
技术到什么程度呢？你可能需要知道并了解以下几个工具：

- markdown
- git
- github
- jekyll（这个可以暂时没有）

说原理：

我们把整个wechaty的博客当成一本电子书，每个人都可以在这本书中书写自己的文章并发布。

1. 先复制一本到自己的书架（fork it）
2. 下载这本书到电脑上（git clone）
3. 按**规定的格式**要求添加自己的文章，并上传到自己的书架（git commit并git push）
4. 把书架上添加了自己内容的书发送给正本书的管理员审核（create pull requests）
5. 系统自动校验文章格式是否符合要求以及签署一个贡献协议（auto check）
6. 校验通过，等待管理员最终将内容更新到电子书的最新版本中

继续，我们结合官方的指导文档说一下注意事项

## 来自官方的——How to post a blog

来自官方的指导文档，对于有基础的同学直接移步参考原文[https://github.com/wechaty/wechaty.js.org](https://github.com/wechaty/wechaty.js.org)——无论如何即使是零基础也希望大家先去阅读一下原文

对于一个英语困难者，wechaty的文档无疑是一个灾难，so，让我们来百度翻译并注释一下：

### 总共13步，比大象装冰箱多了10步

1. **复刻（fork）wehaty代码**

    不知道什么是fork？总之很复杂，网上说的也不是很明白，简单点理解就是copy一份，到wechaty的github项目页面<https://github.com/wechaty/wechaty.js.org>，然后看图操作

    ![fork](/assets/2021/04-how-to-publish-blog-on-wechaty/04.webp)

2. **同步你的分支**

    不知道如何同步？后边说

3. **在本地（自己的电脑上）创建你的博客分支**

    使用git把github上的代码下载下来，看图操作复制地址，然后在你要存放文件的目录运行`git clone https://github.com/wechaty/wechaty.js.org.git`

    ![clone](/assets/2021/04-how-to-publish-blog-on-wechaty/05.webp)

4. **使用markdown书写你的博客**

    不知道什么是markdown？后边说

5. **添加你的博客文件到`jekyll/_post`文件夹**

    打开下载下来的代码，整个博客的书写仅需要在jekyll这个目录下操作，不要动也不要管其他目录，正文放在jekyll/_post`下，其他文件下边会说，一下以当前这篇博客为例讲解，个人认为学习此类知识最好的方式就是Copy and Modify（如同小学生写作为一样临摹，复制、粘贴、重命名、改内容，四部曲）。

    例如本文正文,是在`jekyll/_post`目录下创建名为`2021-04-22-how-to-publish-blog-on-wechaty.md`的文件并在里边写正文内容。

    ![根目录](/assets/2021/04-how-to-publish-blog-on-wechaty/01.webp)

    ![jekyll目录](/assets/2021/04-how-to-publish-blog-on-wechaty/02.webp)

    ![2021-04-22-how-to-publish-blog-on-wechaty.md](/assets/2021/04-how-to-publish-blog-on-wechaty/03.webp)

    正文内容书写规范：

    > 添加博客头

    所有的博客都必须有标题、作者、背景图片,写在正文打最开始:

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
    image: /assets/2021/04-how-to-publish-blog-on-wechaty/rare_book.webp
    ---

    > 作者: [atorber](https://github.com/atorber/)，不务正业的产品经理
    ```

    > 写作风格

    - 所有的文件名和url地址使用小写字母, 并且使用`-` 连接，不允许中文字符。例如本文正文文件名：`2021-04-22-how-to-publish-blog-on-wechaty.md`

    - 选择合适的图片可以使博客看起来更漂亮。例如本文背景图：

    ![rare-book.jpeg](/assets/2021/04-how-to-publish-blog-on-wechaty/rare-book.webp)

6. **添加文档中的插图到 `jekyll/assets` 文件夹，在文件夹下当前年份下建立一个以"月份+博客文件名"为名称的文件夹来存放相关图片**

    在发布之前插入图片和视频，需要将所有图片、视频文件保存在博客专属的文件夹中，文件夹的位置和命名方式 `/jekyll/assets/文章标标题/`。例如本文图片存放文件夹：`jekyll/assets/2021/04-how-to-publish-blog-on-wechaty`，本文背景图的完整路径`jekyll/assets/2021/04-how-to-publish-blog-on-wechaty/rare_book.webp`

7. **添加你的个人信息到`jekyll/_contributors/your_github_id.md`**

    新建一个文件your_github_id.md，把your_github_id换成你的github账号。例如本文个人信息文件`jekyll/_contributors/atorber.md`

    > 个人信息内容

    ```yaml
    ---
    name: atorber
    site: <https://github.com/atorber>
    bio: 一个不误正业的产品经理
    avatar: /assets/contributors/atorber/avatar.png
    email: tyutluyc@qq.com
    ---
    ```

    > 个人头像

    在`jekyll/assets/contributors`目录下新建一个your_github_id命名的文件夹，并把个人头像以avatar.png命名存放起来。
    本文个人头像完整路径`jekyll/assets/contributors/atorber/avatar.png`

8. 提交更改，使用博客标题作为备注信息

    以文章标题为备注信息提交。本文示例提交命令

    `git commit -m "入门：小白如何在wechaty社区发布自己的第一篇博客"`

9. 推送到分支

    推送分支到自己的github

    `git push origin master`

10. 创建一个新的Pull请求

    这一步在github界面操作（也可能可以直接推送到wechaty，超哥没有get到方法）

    ![pull request](/assets/2021/04-how-to-publish-blog-on-wechaty/06.webp)

11. 签署CLA

    什么CLA？后边说，到自动检查的步骤会提示，首次签署时留意页面提示，超哥因为之前已经签署过了，暂时没办法操作截图，后边补上

12. 等待传递GitHub操作CI，或者修复任何东西以确保CI变为绿色

    Wait for pass the GitHub Action CI, or fix whatever to make sure CI turns green，百度直译，超哥也没搞太清楚，后边说

13. 等待@wechaty的管理员审核

就这些!就这些？就这些...

### 贡献准则

需要特别注意的几个点：

#### 1. markdown格式规范化校验

  在文件命名正确、文件存放位置正确的情况下，大部分自动校验不通过的原因是正文markwown格式存在错误，原因是系统对格式进行了严格校验，尤其是对之前会使用markdown但对使用不规范的同学来说，需要认真学习一下了，可参考文档 <https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md>

#### 2. 只提交相关的文件

  请勿提交博客不相关的文件

#### 3. 添加视频或pdf

  示例：

  ```html
  {% include iframe.html src="https://www.youtube.com/watch?v=3eq8wJfCAWs" %}
  ```

  或者

  ```html
  {% include iframe.html src="/assets/2020/qijibot/final.pdf" %}
  ```

  更多： [将iframe添加到wechaty博客](https://wechaty.js.org/2020/08/24/add-video-to-wechaty-blog/)

### 测试（进阶内容，可以了解下，在本地npm完整的jekyll）

为了确保一切（文件名、文件大小等）都正常，可以在“git push”之前运行以下命令检查它们。

```sh
npm install
npm run test
```

### 预览

在本地运行Jekyll来预览博客。

——什么是Jekyll，自行百度

#### 0. 依赖

  按照官方指示在本地安装jekyll [jekyll quickstart](https://jekyllrb.com/docs/)

#### 1. 手动安装Jekyll

  在本地运行Jekyll进行博客预览(对于熟悉Ruby语言的同学更容易一些。）

  ```sh
  make install
  cd jekyll
  make serve
  ```

#### 2. 预览博客

  访问 <http://127.0.0.1:4000/blog/> 可以预览博客!

#### 3. 总结

  安装Jekyll的过程有些小复杂了，略过吧

## 最后

真正在写这篇博客时才发现，试图通过几篇博客教会0基础读者和0基础读者希望通过几篇博客成功发布自己的内容一样困难，无论如何，希望这些内容能给大家带来一些帮助。

TODO:

结合以上内容发布一个视频教程，或许是更好的选择，期待后续有时间或其他贡献者一起制作

## 常见问题

1. macOS下报错`jekyll/assets/.DS_Store does not match /\/[0-9\-a-z_]+\./!？`

    mac下烦人的`.DS_Store`文件，运行`sudo find / -name ".DS_Store" -depth -exec rm {} \;`，然后，等几分钟和碰运气...

更多问题后续会根据反馈继续补充

> 历史文章

- [Wechaty+微信小程序实现群内活动报名](https://wechaty.js.org/2021/03/17/node-wechaty-and-wechaty-puppet-padlocal/)
