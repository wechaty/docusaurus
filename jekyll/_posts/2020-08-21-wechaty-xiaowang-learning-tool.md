---
title: 基于Wechaty的群学习内容推送工具
author: gileswong
image: /assets/2020/wechaty-xiaowang-learning-tool/teaser.jpg
categories: project
tags:
  - typescript
  - education
---

准备考研期间，希望在每天定时能获得天气推送，每日英语一题，早间新闻来丰富自己的学习；同时又不想要专门去点开某个App来看（这样不仅费心，还容易跑神）

## 功能

+ 定时采集英语的每日一题，推送到群里
+ 早晨问好，同时发送当天天气预报，每半天检查一次未来24小时内设定的经纬度处是否有降水。
+ 采集网站上的新闻早报，补充时政知识
+ 发送每日一句
+ 图灵机器人对话

（来源于第三方的数据仅供学习之用，请经常访问这些优质网站）

## 特点

+ 使用腾讯云云函数进行定时获取信息的操作，减少了服务器上的配置难度
+ 使用Node.js Express对Wechaty进行了封装，后续功能可以本地写好python或nodejs云函数后，直接部署在腾讯云上，不用调整服务器
+ 使用pm2进行wechaty运行状态的维持（后续可以考虑改为使用无服务器的环境，比如Leancloud、Heroku容器等，减少服务器的开支）

## 功能示例

![英语每日一题](/assets/2020/wechaty-xiaowang-learning-tool/img-4425.jpg)
![每日早报](/assets/2020/wechaty-xiaowang-learning-tool/img-4418.jpg)

## 项目结构

```bash
|-- wechaty-xiaowang
    |-- index.js  //主程序
    |-- package-lock.json
    |-- package.json
    |-- puppet-config.js  //pupet参数
    |-- serverchan.js  //通过方糖报告错误
    |-- tulingbot.js   //图灵机器人
    |-- cloudFunctions // 运行在腾讯云上的云函数爬虫
        |-- dailyEnglishTest  //英语每日一题
        |-- dailySentence   //英语每日一句
        |-- moringNews  //每日早报
        |-- rainDetection   //降雨提醒
        |-- weatherTip  //早晨问好，及天气预报
```

## 架构说明

+ 服务器端
    Express + Wechaty 开放一个HTTP接口用于访问，传入HTTP接口的内容会被发送到预先指定的群内
+ 云函数端
    定时获取信息，并通过HTTP调用发送给Wechaty机器人

## 使用

### wechaty的部署

+ 填写代码中的配置，如**Token**，**服务器地址、端口**等
+ 上传至服务器
+ 在其目录下，获取所有用到的NPM包

  ```bash
    npm i
  ```

+ 使用`node index.js`命令，启动wechaty，并扫码登录
+ （可选）调试好之后，可选择使用pm2等工具维持wechaty的运行
+ （可选）使用Nginx的反向代理功能来实现HTTPS，增强安全性
+ （可选）使用cloudflare的防火墙规则或者Nginx，来将访问权限限制到特定的范围，增强安全性

### 云函数的部署

+ 打开 [https://console.cloud.tencent.com/scf/index](https://console.cloud.tencent.com/scf/index) 注册并新建云函数
+ 新建时选择空白函数即可,然后选择目前要增加的函数的环境，之后点击下一步
  + Python 3.6
  + Node.js 16.16
+ 在`提交方法`处，选择`上传文件夹`
+ 选择当前增加的函数的文件夹，上传即可
+ 新建完成后，返回云函数主页面，点击`函数服务`- `触发管理`
+ 弹出的创建触发器的页面内，选择自定义触发，填入Cron表达式
  + Cron表达式用法见：[https://cloud.tencent.com/document/product/583/9708#cron-.E8.A1.A8.E8.BE.BE.E5.BC.8F](https://cloud.tencent.com/document/product/583/9708#cron-.E8.A1.A8.E8.BE.BE.E5.BC.8F)
+ 完成

对于`每日新闻`的代码，其运行于Coding的定时构建计划内，详见：[https://help.coding.net/docs/devops/ci/trigger.html](https://help.coding.net/docs/devops/ci/trigger.html)

## 致谢

+ JUZI Bot提供的Token，使这个小项目具有可行性
+ Wechaty (非常优秀的项目)
+ 腾讯云（提供了几乎免费的云函数）
+ Coding（提供了免费使用的构建计划的主机）
