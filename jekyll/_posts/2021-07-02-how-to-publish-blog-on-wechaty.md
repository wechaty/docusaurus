---
title: "零基础小白在Wechaty社区发表自己的第一篇博客"
author: juzibot
categories: article
tags:
  - blog
  - study
  - introduction
image: /assets/2021/07-how-to-publish-blog-on-wechaty/homepage.png
---

> 作者: [juzibot](https://github.com/juzibot/)，句子互动

## 背景

很开心过去10天里面接触了wechaty社区，两次使用GitHub向wechaty社区提交了博客（虽然提交了很多次才最终通过），但也因此对于书写博客时出现的问题比较了解，对许多问题记忆犹新。今天就和大家分享一下我自己的经验，零基础或有那么一丢丢基础的小白如何在wechaty社区发布自己的第一篇博客。

今天和大家分享一下两个内容：

- 在wechaty发布博客的准备工作

- 写完博客后的完善工作

## 在wechaty发布博客的准备工作

初学者在有了向wechaty发布博客的想法之后，很快会发现它在用一种「很技术的方式」而非传统的博客方式进行发布。
技术到什么程度呢？你需要先进行以下步骤：

- 注册GitHub
- 安装[vs code](https://code.visualstudio.com/download)
- 安装git
- 安装[GitHub Desktop](https://docs.github.com/cn/desktop/installing-and-configuring-github-desktop/installing-and-authenticating-to-github-desktop/installing-github-desktop)
- 这里我还要推荐一篇对我很有帮助的博客：[入门：小白如何在wechaty社区发布自己的第一篇博客](https://wechaty.js.org/2021/04/22/how-to-publish-blog-on-wechaty/)

说明：

1. 首先阅读博客[入门：小白如何在wechaty社区发布自己的第一篇博客](https://wechaty.js.org/2021/04/22/how-to-publish-blog-on-wechaty/)，一定要认真阅读，并且按照里面的步骤做，刚开始我就是落下了几步后面出现饿很多错误，修改起来很麻烦。
2. 用markdown书写博客：一个简单的编程语言，[基本语法](http://markdown.p2hp.com/basic-syntax/)，可以学习一下。
 check）
3. 还可以在GitHub Desktop里面建立不同的分支，方便后面把不同的博客上传到不同的分支里面。

## 写完博客后的完善工作

继续，以我自己的经验（可能因为是刚刚开始接触），修改错误和排版可能比写文章本身更耗费精力。

### 总共几步

1. **打开终端**

    写完博客之后在本地进行本地测试，在本地排查一下错误，首先打开终端,如图

    ![test](/assets/2021/07-how-to-publish-blog-on-wechaty/test.png)

2. **本地测试运行**

    切换到博客目录，通过 git checkout XXX 切换不同的分支（XXX：是你的分支名字），通过npm run test来运行。之后可能会出现这种情况：

    ![run](/assets/2021/07-how-to-publish-blog-on-wechaty/run.png)

3. **删除所有.DS_Store的文件**

    mac会出现讨厌的带有.DS_Store的文件，我们需要删除它。
    方法：写入 “rm -rf XXX” 的命令(XXX：要删除的文件)。例如，在我的分支里面运行npm run test之后出现了图中这样的情况，写着OK的不用看，写着not ok的可以按照他写的错误进行修改，第一次看到这么多密密麻麻的错误我很害怕，但是你读一读就知道都是最基础的英文，描述也比较清楚详细。

    ![result](/assets/2021/07-how-to-publish-blog-on-wechaty/result.png)

4. **上传到自己的分支**

    方法如图，按照顺序点击

    ![branch](/assets/2021/07-how-to-publish-blog-on-wechaty/branch.png)

    ![branch1](/assets/2021/07-how-to-publish-blog-on-wechaty/branch1.png)

<<<<<<< Updated upstream
    ![branch2](/assets/2021/07-how-to-publish-blog-on-wechaty/branch2.png)

    ![branch3](/assets/2021/07-how-to-publish-blog-on-wechaty/branch3.png)
=======
    ![branch2](/assets/2021/07-how-to-publish-blog-on-wechaty/branch1.png)

    ![branch3](/assets/2021/07-how-to-publish-blog-on-wechaty/branch1.png)
>>>>>>> Stashed changes

5. **签署CLA**

    很多开源社区，都会要求贡献者签署CLA，只有签署了CLA的贡献者提供的内容才能被接受。从开源社区角度看，如果没签署CLA，会有风险。

    ![cla](/assets/2021/07-how-to-publish-blog-on-wechaty/cla.png)

6. **等待审核**

    等待@wechaty的管理员审核，不久管理员就会邮件通知你结果

    ![check1](/assets/2021/07-how-to-publish-blog-on-wechaty/check1.png)

7. **修改**

    还是在这里查看

    ![check2](/assets/2021/07-how-to-publish-blog-on-wechaty/check2.png)

    这里，找到自己刚刚上传的，可能会出现这种情况（一般本地测试过之后，不会再出现这种情况了）

    ![check3](/assets/2021/07-how-to-publish-blog-on-wechaty/check3.png)

    还是按照他写的去修改就好

    ![check4](/assets/2021/07-how-to-publish-blog-on-wechaty/check4.png)

    在你认为一切都改好以后，可以再本地测试一下，再上传PR（pull request）。再等待管理员审核，一切成功之后，就可以看到自己写的博客发布在wechaty了。

8. 经过管理员审核

    以文章标题为备注信息提交。本文示例提交命令

    `git commit -m "入门：小白如何在wechaty社区发布自己的第一篇博客"`

9. 上传到云端，发布博客

    大功告成！

10. 本地预览

<<<<<<< Updated upstream
    当然我们发表了PR之后，我们就是contributor了，之后我们就可以在本地运行Jekyll来预览博客。
=======
    在本地运行Jekyll来预览博客。
>>>>>>> Stashed changes
    本地写好了代码以后提交到github上，运行: ssh -L 4000:127.0.0.1:4000 gangena@dev.chatie.io
    如果需要输入密码，输入本机密码就可以了。进入到服务器里面，输入：cd wechaty.js.org/jekyll
    切换到你的分支: git checkout XXXX
    拉代码: git pull
    运行： make serve
<<<<<<< Updated upstream
    当看到命令行中出现 Server address:<http://127.0.0.1:4000>的时候，在浏览器中输入地址<http://127.0.0.1:4000>即可
    ![preview](/assets/2021/07-how-to-publish-blog-on-wechaty/preview.png)
=======
    当看到命令行中出现 Server address: <http://127.0.0.1:4000> 的时候，在浏览器中输入地址 <http://127.0.0.1:4000> 即可
    ![preview](/assets/2021/07-how-to-publish-blog-on-wechaty/preview.png)

11. 签署CLA

    什么CLA？后边说，到自动检查的步骤会提示，首次签署时刘毅页面提示，超哥因为之前已经签署过了，暂时没办法操作截图，后边不上

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

### 测试（进阶内容，可以了解下）

为了确保一切（文件名、文件大小等）都正常，可以在“git push”之前运行以下命令检查它们。

```sh
npm install
npm test
```

### 预览

在本地运行Jekyll来预览博客。

——什么是Jekyll，自定百度

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
>>>>>>> Stashed changes
