---
title: "Rae-oa系统微信群辅助机器人(rae-wechaty)"
author: northseacoder
categories: project
tags:
  - puppet-provider
  - productivity
image: /assets/2020/rae-oa-wechaty/schecdule.png
---

之前公司web组组长有个微信机器人每周催我们交周报,私信发过去会自动更新到公司内部wiki上,一度惊为天人,后来看到公共号以及掘金上突然有好多人推荐wechaty,据说是6行代码完成一个微信聊天机器人,正好老婆那边想要个能辅助她工作的系统,就是这么巧~

## 致谢

感谢[wechaty](https://github.com/wechaty/wechaty)团队提供微信机器人SDK  
感谢[句子互动](https://www.juzibot.com/)提供的iPad协议版token  
感谢[gengchen528](https://github.com/gengchen528/wechat-assistant),[isnl](https://github.com/isnl/wechat-robot-ipad),[shfshanyue](https://github.com/shfshanyue/wechat-bot)大佬们的开源代码
<!--more-->

## 定位

rae-wechaty是Rae-oa系统在微信上的辅助机器人,提供一切我老婆需要的功能.....

## 如何获取免费 Token

官方文档中提供了免费 token 的获取方式。
[https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty](https://github.com/juzibot/Welcome/wiki/Everything-about-Wechaty)

细节如下：
> 为了参与开源激励计划，需要开发者填写表单，联系Juzi BOT（微信号：juzibot）或等待其主动联系均可。
直接填写： Wechaty 开源激励计划2.0申请表 。
>
> 在收到开源激励计划申请表和 Github 项目信息后，Juzi BOT（微信号：juzibot）将依照开源激励计划申请表中的联系方式主动联系。
在确认开发者愿意将最终成品代码开源同时在Wechaty社区内撰写一篇博客后，将为开发者发放一个有效期 15 天的 Token 。
开源激励计划的 Token 为 padplus 协议，目前主要支持 node.js 的开发，如果想要使用 Java / Python / Go 进行开发，可以申请 Donut Token，其针对多语言进行了优化，但需要进行付费购买。
>
> 在提供有效期 15 天的 Token 后，我们期待开发者将 MVP （最小可行化产品）代码在 Github 中开源，并储存在一个 public repo 中。

## 功能

[x] 自动识别@机器人的文本并作出相应回应,排除机器人本身  
[x] 每日一句英文+翻译  
[x] 关键字"生日"=>查询公司本月生日员工  
[x] 关键字"日报"=>返回公司日报模板  
[] 每日新闻  
[] 中英文词典  
[] 每日请假登记  
[] 员工信息修改  
[] 获取员工基本信息  
[] 自动邀请加群,群发  
[] 获取所有以支持的关键字  

如图:  
![1](/assets/2020/rae-oa-wechaty/birth.png)
![2](/assets/2020/rae-oa-wechaty/daily.png)

## 依赖

- wechaty：wechaty核心库
- wechaty-puppet-padplus：wechaty iPad协议
- qrcode-terminal: 终端输出二维码
- @nsea/tools:自己封装的axios及数组处理工具
- rae-oa系统:基于阿里云+docker+vue+egg+mongoDB搭的前端-服务-数据库项目

## 运行

克隆项目

```shell
git clone git@github.com:NorthSeacoder/rae-wechaty.git
cd rae-wechaty
```

要在src/common/constant/config下新建index.ts文件,并导出一下内容

```js
export default {
  TOKEN: '',//wechaty-key
    APIKEY:'',//天行 apikey 用于每日一句英文
    nscBaseUrl:''//阿里云上部署的接口baseurl
};
```

运行

```shell
npm install

npm start
扫码登录
```

or

```shell
npm npm run docker:start//昨晚好像改挂了....等有空了修改一下
```

还加了个清理docker none images 的命令

```shell
npm run docker:clean
```

## 目录结构

![目录](/assets/2020/rae-oa-wechaty/catalogue.png)

- `bin`文件夹存放存放docker的运行脚本
- `src`
  - `common` 存放公共配置及resource数据请求
  - `event` 机器人所有message交互处理
  - `message` 具体的处理逻辑函数
  - `schedule` 定时任务
- `index.ts` 程序入口

> Author: [NorthSeacoder](https://github.com/NorthSeacoder)
> Code: [rae-wechaty](https://github.com/NorthSeacoder/rae-wechaty)
