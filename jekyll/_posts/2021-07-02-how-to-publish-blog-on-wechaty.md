---
title: "零基础小白在Wechaty社区发表自己的第一篇博客"
author: juzibot
categories: article
tags:
  - blog
  - study
  - introduction
image: /assets/2021/07-how-to-publish-blog-on-wechaty/homepage.webp
---

<<<<<<< Updated upstream
> 作者: [juzibot](https://github.com/juzibot/)，句子互动

## 背景

很开心过去10天里面接触了wechaty社区，两次使用GitHub向wechaty社区提交了博客（虽然提交了很多次才最终通过），但也因此对于书写博客时出现的问题比较了解，对许多问题记忆犹新。今天就和大家分享一下我自己的经验，零基础或有那么一丢丢基础的小白如何在wechaty社区发布自己的第一篇博客。
=======
很开心过去10天里面接触了 Wechaty 社区，两次使用 GitHub 向 Wechaty 社区提交了博客（虽然提交了很多次才最终通过），但也因此对于书写博客时出现的问题比较了解，对许多问题记忆犹新。今天就和大家分享一下我自己的经验，零基础或有那么一丢丢基础的小白如何在 Wechaty 社区发布自己的第一篇博客。
>>>>>>> Stashed changes

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
3. 还可以在GitHub Desktop里面建立不同的分支，方便后面把不同的博客上传到不同的分支里面。

## 写完博客后的完善工作

继续，以我自己的经验（可能因为是刚刚开始接触），修改错误和排版可能比写文章本身更耗费精力。

### 总共几步

1. **打开终端**

    写完博客之后在本地进行本地测试，在本地排查一下错误，首先打开终端,如图

    ![test](/assets/2021/07-how-to-publish-blog-on-wechaty/test.webp)

2. **本地测试运行**

    切换到博客目录，通过 git checkout XXX 切换不同的分支（XXX：是你的分支名字），通过npm run test来运行。之后可能会出现这种情况：

    ![run](/assets/2021/07-how-to-publish-blog-on-wechaty/run.webp)

3. **删除所有.DS_Store的文件**

    mac会出现讨厌的带有.DS_Store的文件，我们需要删除它。
    方法：写入 “rm -rf XXX” 的命令(XXX：要删除的文件)。例如，在我的分支里面运行npm run test之后出现了图中这样的情况，写着OK的不用看，写着not ok的可以按照他写的错误进行修改，第一次看到这么多密密麻麻的错误我很害怕，但是你读一读就知道都是最基础的英文，描述也比较清楚详细。
    如果这个方法无效的话，可是尝试命令：sudo find / -name ".DS_Store" -depth -exec rm {} \;

    ![result](/assets/2021/07-how-to-publish-blog-on-wechaty/result.webp)

4. **上传到自己的分支**

    方法如图，按照顺序点击

    ![branch](/assets/2021/07-how-to-publish-blog-on-wechaty/branch.webp)

    ![branch1](/assets/2021/07-how-to-publish-blog-on-wechaty/branch1.webp)

    ![branch2](/assets/2021/07-how-to-publish-blog-on-wechaty/branch2.webp)

    ![branch3](/assets/2021/07-how-to-publish-blog-on-wechaty/branch3.webp)

5. **签署CLA**

    很多开源社区，都会要求贡献者签署CLA，只有签署了CLA的贡献者提供的内容才能被接受。从开源社区角度看，如果没签署CLA，会有风险。

    ![cla](/assets/2021/07-how-to-publish-blog-on-wechaty/cla.webp)

6. **等待审核**

    等待@wechaty的管理员审核，不久管理员就会邮件通知你结果

    ![check1](/assets/2021/07-how-to-publish-blog-on-wechaty/check1.webp)

7. **修改**

    还是在这里查看

    ![check2](/assets/2021/07-how-to-publish-blog-on-wechaty/check2.webp)

    这里，找到自己刚刚上传的，可能会出现这种情况（一般本地测试过之后，不会再出现这种情况了）

    ![check3](/assets/2021/07-how-to-publish-blog-on-wechaty/check3.webp)

    还是按照他写的去修改就好

    ![check4](/assets/2021/07-how-to-publish-blog-on-wechaty/check4.webp)

    在你认为一切都改好以后，可以再本地测试一下，再上传PR（pull request）。再等待管理员审核，一切成功之后，就可以看到自己写的博客发布在wechaty了。

8. 上传到云端，发布博客

    大功告成！

9. 本地预览

    当然我们发表了PR之后，我们就是contributor了，之后我们就可以在本地运行Jekyll来预览博客。
    本地写好了代码以后提交到github上，运行: ssh -L 4000:127.0.0.1:4000 gangena@dev.chatie.io
    如果需要输入密码，输入本机密码就可以了。进入到服务器里面，输入：cd wechaty.js.org/jekyll
    切换到你的分支: git checkout XXXX
    拉代码: git pull
    运行： make serve
    当看到命令行中出现 Server address:<http://127.0.0.1:4000>的时候，在浏览器中输入地址<http://127.0.0.1:4000>即可
    ![preview](/assets/2021/07-how-to-publish-blog-on-wechaty/preview.webp)

10. 等待CI都变绿

    也就是test&build,他能够能够帮你完成工作的功能，测试你的代码是否有问题；
    如果有错误，会出现红色的叉，并提示你哪里出错，只需要根据他的提示更改代码，再提交，重复上面的步骤，知道变成绿色对勾就好啦。
     ![ci](/assets/2021/07-how-to-publish-blog-on-wechaty/ci.webp)
