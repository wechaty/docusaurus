---
title: "三步教你用Node做一个微信脱单神器，小白可上手"
author: leochen-g
categories: project
tags:
  - code
  - featured
  - entertainment
image: /assets/2019/everyday-header.webp
---

三步教你用Node做一个微信脱单神器，小白可上手！也可以用来哄女友，哄女(男\基)友我们程序猿(媛)是认真的

## 前言

不知道大家最近有没有被`python`版的《微信每日说》刷屏呢，他可是霸占了`github`的`python`热门快两周了。我们前端的小伙伴是不是也看着有点眼馋呢，因为毕竟是不那么熟悉的`python`语言，学起来和用起来肯定没有那么舒服。想想要是用我们熟悉的`js`语言做一个属于自己的哄女友神器是不是很开心呢！😆

哄女友我们前端开发人员也是很认真的，自动哄女友(基友)神器我们也可以做！

## 项目介绍

其实《微信每日说》小项目早在三月份都已经做好了，当时也发布了一篇文章[《用Node+wechaty写一个爬虫脚本每天定时给女(男)朋友发微信暖心话》](https://juejin.im/post/5c77c6bef265da2de6611cff)，有看过的朋友应该有印象的。由于上次分享的文章比较偏向于技术，被朋友说可能不太适合小白用户使用，在他的建议下呢，我又重新整理了一下现有代码，和制作了教学视频，方便任意人群的使用。

同时呢我也维护了两套项目，一个是本项目[《微信每日说》](https://github.com/gengchen528/wechatBot)适合入门人群，操作简单，配置方便，上手容易。另一个项目是[《微信个人秘书》](https://github.com/gengchen528/wechat-assistant)，功能较多，涵盖自动加群、自动加好友、自动回复、可设置定时提醒等功能。由于涉及到数据库的操作，所以主要面向有编程经验的群体，有兴趣的小伙伴可以参考[《使用koa2+wechaty打造个人微信小秘书》](https://juejin.im/post/5ca1dd846fb9a05e6c77b72f)。

本文介绍项目是用node和wechaty微信网页接口开发的一款小工具，可以定时给女朋友发每天的天气情况，天气提醒，每日一句。通过配置机器人api后还可以实现微信机器人自动陪女朋友聊天。

## 项目地址

github: [https://github.com/gengchen528/wechatBot](https://github.com/gengchen528/wechatBot)

看看前端的小伙伴能不能把这个项目送上热门呢 哈哈

## 效果预览

在三步走教学之前，先放上效果看一下

![image](/assets/2019/everyday-1.webp)

![image](/assets/2019/everyday-2.webp)

可以看到在指定的时间就会收到发送的消息，包括天气信息，天气提醒，还有你们在一起多少天了。当开启机器人后，女朋友就可以和小助手对话了，不过目前开源机器人的api都不是非常的智能，匹配的语义可能不是那么准确。所以有时候女朋友生气了，千万记得不要开启机器人，不然回答的不对是会被女朋友暴打的😨！

此项目前期使用的是图灵机器人，但是最近图灵机器人做了限制，没有认证的用户不允许调取API，认证的用户每天也只有100条，这就很鸡肋了，女朋友还没哄过瘾呢就被限制了，这是很可怕的（手动滑稽）！所以现在更换了一个天行机器人的api接口，这个接口没有太多限制，送的调用次数也足够用，在项目中已经开放给大家用了，不过还是建议大家自己申请一个账号比较好，因为这个机器人可以自定义名称之类的，也可以设置自己需要的回复内容。

## 视频教程

{% include iframe.html src="//www.bilibili.com/video/av56077628" %}

## 三步走教程

### 一、安装node

node官网：[https://nodejs.org/zh-cn/](https://nodejs.org/zh-cn/)

选择系统对应版本node下载安装，`win`建议`.msi`包安装，只需一直下一步即可，其他系统同理；
> windows下安装node步骤详细参考 [https://www.cnblogs.com/liuqiyun/p/8133904.html](https://www.cnblogs.com/liuqiyun/p/8133904.html)
> Mac下安装node详细步骤参考 [https://blog.csdn.net/qq_32407233/article/details/83758899](https://blog.csdn.net/qq_32407233/article/details/83758899)
> Linux下安装node详细步骤参考 [https://www.cnblogs.com/liuqi/p/6483317.html](https://www.cnblogs.com/liuqi/p/6483317.html)

![image](/assets/2019/everyday-3.webp)

安装完成后，按住`键盘的shift+鼠标右键`，选择在此处打开命令窗口。在命令行执行`node -v`出现版本号说明安装成功

![image](/assets/2019/everyday-4.webp)

### 二、下载代码并配置

代码地址：[https://github.com/gengchen528/wechatBot](https://github.com/gengchen528/wechatBot)

* 访问此地址，直接下载zip包到本地桌面，然后解压；

![image](/assets/2019/everyday-5.webp)

* 进到目录中，找到`config`目录下的`index.js`文件

![image](/assets/2019/everyday-6.webp)

![image](/assets/2019/everyday-7.webp)

* 选中`index.js`文件，右击选择打开方式，没有安装代码编辑器的可以用记事本打开。有代码编辑器的直接用代码编辑器打开,建议非开发人员可以下载一个`notepad++`，下载链接链接:[https://pan.baidu.com/s/1mWdEOaTQ1D6kihQveN1JHw](https://pan.baidu.com/s/1mWdEOaTQ1D6kihQveN1JHw)  密码:fn9g，开发人员就各自发挥吧，相信每个人都有自己用的比较舒服的编辑器我就不推荐了

![image](/assets/2019/everyday-8.webp)

* 配置文件中需要修改的地方，女朋友的微信备注姓名`NAME`必须要换一下，不然你发给我就不好了😂，微信昵称`NICKNAME`最好也写一下，你和女朋友的纪念日`MEMORIAL_DAY`就不用说了，也要改一下。
* 如果要发送天气信息，女朋友所在城市`CITY`肯定也是必须修改的，地区`LOCATION`不知道怎么拼写的话，我建议可以查一下墨迹的官网[https://tianqi.moji.com/weather/china/](https://tianqi.moji.com/weather/china/)

![image](/assets/2019/everyday-9.webp)

* 在墨迹天气找到对应地区的天气后，查看一下网页地址栏，绿色标记的拼音填入`CITY`，红色标记的拼音填入`LOCATION`

![image](/assets/2019/everyday-10.webp)

* 每天发送的时间`SENDDATE`，这里的规则可以参见`schedule`目录下的`index.js`文件。这里`0 06 8 * * *`代表的是每天的早上8点06分0秒，我们通常只需配置前三个就可以了。
* 如果需要开启机器人聊天的话，需要把`AUTOREPLY`设置为`true`，这里我放弃了图灵机器人，原因上面也说了，改用了天行机器人，但是不要抱太大希望，它并不是那么智能😂。目前由于我自己账号的api次数还比较多，就在项目代码中开放给大家使用了，这里就不放出来，下载代码后只要修改一下`AUTOREPLY`就可以自动回复了。

```js
// 配置文件
module.exports = {
    // 基础定时发送功能配置项（必填项）
    NAME: 'Leo_chen', //女朋友备注姓名
    NICKNAME: 'Leo_chen', //女朋友昵称
    MEMORIAL_DAY: '2015/04/18', //你和女朋友的纪念日
    CITY: 'shanghai', //女朋友所在城市
    LOCATION: "pudong-new-district", //女朋友所在区（可以访问墨迹天气网站后，查询区的英文拼写）
    SENDDATE: '0 06 8 * * *', //定时发送时间 每天8点0分0秒发送，规则见 /schedule/index.js
    ONE: 'http://wufazhuce.com/', ////ONE的web版网站
    MOJI_HOST: 'https://tianqi.moji.com/weather/china/', //中国墨迹天气url

    //高级功能配置项（非必填项）
    AUTOREPLY: true, //自动聊天功能 默认关闭
    AIBOTAPI: 'http://api.tianapi.com/txapi/robot/', //天行机器人API 注册地址https://www.tianapi.com/signup.html?source=474284281
    APIKEY: '天行机器人apikey', //天行机器人apikey
}
```

### 三、开始运行程序

配置完成好文件别忘记保存了，保存好就回到项目的主目录吧。这时候`win`系统的话就按住`键盘的shift+鼠标右键`，选择在此处打开命令窗口。

![image](/assets/2019/everyday-11.webp)

* 然后输入`npm install`。

![image](/assets/2019/everyday-12.webp)

* 等待安装完成后输入`npm run start`，这时会下载一个文件，因为比较大，所以要多等一下，等待出现二维码的时候就可以拿出手机微信扫一扫登录了。接下来就是一顿神对话了😆

![image](/assets/2019/everyday-13.webp)

![image](/assets/2019/everyday-14.webp)

* 如果执行`npm run start`遇到失败的话，先执行`npm install wechaty-puppet-puppeteer@^0.17.14  --no-save`然后再执行`npm run start`

## 常见问题处理

* 先检查node版本是否大于10
* 存在package-lock.json文件先删除
* 删除`node_modules`后重新执行`npm install`
* 也可添加小助手微信后，发送`'加群'`进入微信每日说技术交流群

1. 我的微信号无法登陆
    1. 从2017年6月下旬开始，使用基于web版微信接入方案存在大概率的被限制登陆的可能性。 主要表现为：无法登陆Web 微信，但不影响手机等其他平台。 验证是否被限制登陆： <https://wx.qq.com> 上扫码查看是否能登陆，不能登录的话，那你可能就无法用这个工具了。 更多内容详见：
    1. [Can not login with error message: 当前登录环境异常。为了你的帐号安全，暂时不能登录web微信。](https://github.com/wechaty/wechaty/issues/603)
    1. [[谣言] 微信将会关闭网页版本](https://github.com/wechaty/wechaty/issues/990)
    1. [新注册的微信号无法登陆](https://github.com/wechaty/wechaty/issues/872)
1. 执行npm run start时无法安装puppet-puppeteer&&Chromium
1. Centos7下部署出现以下问题
    ![image](/assets/2019/everyday-15.webp)
    问题原因:[https://segmentfault.com/a/1190000011382062](https://segmentfault.com/a/1190000011382062)
    解决方案:

    ```shell
    #依赖库
    yum install pango.x86_64 libXcomposite.x86_64 libXcursor.x86_64 libXdamage.x86_64 libXext.x86_64 libXi.x86_64 libXtst.x86_64 cups-libs.x86_64 libXScrnSaver.x86_64 libXrandr.x86_64 GConf2.x86_64 alsa-lib.x86_64 atk.x86_64 gtk3.x86_64 -y

    #字体
    yum install ipa-gothic-fonts xorg-x11-fonts-100dpi xorg-x11-fonts-75dpi xorg-x11-utils xorg-x11-fonts-cyrillic xorg-x11-fonts-Type1 xorg-x11-fonts-misc -y
    ```

1. windows下，下载puppeteer失败
    执行一下`npm install wechaty-puppet-puppeteer@^0.17.14 --no-save`

## 注意

本项目属于个人兴趣开发，开源出来是为了技术交流，请勿使用此项目做违反微信规定或者其他违法事情，请勿商用。建议使用小号进行测试，有被微信封禁网页端登录权限的风险（客户端不受影响），请确保自愿使用。因为个人使用不当导致网页端登录权限被封禁，均与作者无关，谢谢理解

## 最后

如果有微信号无法登录和有技术问题需要交流，可以加我的微信小助手后发送`加群`，会自动发送交流群的二维码，同时此小号有更多高级功能等待你的发现。（注：添加好友后会在20s内自动通过）

![image](/assets/2019/everyday-16.webp)

赶快亲自试一试吧，相信你会挖掘出更多好玩的功能

另外我的公众号已经接入微软小冰，关注后发语音会有小姐姐的声音陪你聊天，也可以和她文字聊天，有兴趣可以试试看，单身的欢迎来撩

![image](/assets/2019/everyday-17.webp)

> 作者: [Leo_chen](https://github.com/leochen-g/)，前端工程师，喜欢使用node做各种小项目，就职于大数据公司。本篇文章首发于掘金: [三步教你用Node做一个微信哄女友(基友)神器，小白可上手](https://juejin.im/post/5d09fa9f51882508bd2065f4)
