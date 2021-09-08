---
title: 基于wechaty的个人知识库机器人
author: wade0564
categories: project
tags:
  - wiki
  - productivity
image: /assets/2021/02-ziki-wechaty-helper/ziki_bot_input.png
avatar: /assets/contributors/wade0564/avatar.png
email: 991445760@qq.com
---

搭建个人知识库可以帮助将繁多和碎片化的知识进行分类收集，形成有条理的结构化知识体系，同时提供知识点的快速检索。

![ziki-wiki-tree-page](/assets/2021/02-ziki-wechaty-helper/ziki_glance.png)
*我的个人知识库（Ziki）某一页面*

我的知识库文章大部分来源于订阅的rss文章，经阅读后会收藏部分文章，再由后台将这些文章同步到知识库，并执行与知识树的匹配。但移动端其他app例如知乎、虎扑等的帖子，却还无法自动入库，还依赖去知识库页面内手动输入url的方式添加，操作路径太长。考虑到大多app都有一键分享到微信的功能，搭建一个微信机器人来解决最适合不过了。

## 核心功能

- 将感兴趣的文章分享给微信机器人，机器人接收后传给知识库接口处理，接口会将该文章入库和挂载到相关的知识点
- 发送关键字给微信机器人，机器人接收后查询知识库接口，返回与该关键字有关的文章列表

![article received](/assets/2021/02-ziki-wechaty-helper/ziki_bot_input.png)
*分享知乎文章给机器人，实现文章的自动入库*

![article query](/assets/2021/02-ziki-wechaty-helper/ziki_bot_query.png)
*向机器人查询知识点文章列表*

## 代码

## 仓库地址

[ziki-wechaty-helper](https://github.com/wade0564/ziki-wechaty-helper)

## 配置

### wechaty 配置

`config/wechaty.js`

```javascript
module.exports = {
  // puppet provider
  puppet: "wechaty-puppet-padlocal",
  // token for puppet service
  token: "puppet_padlocal_xxxxxx",
  // bot name
  name: "Ziki Helper",
  limitedUsers: ["wxid_xxxxx"],
}
```

### 知识库接口配置

`config/ziki.js`

```javascript
module.exports = {
  favorApi: "http://xxxxxx", // favor api
  queryApi: "http://xxxxxx", // query api
  username: "xx",
  password: "xx"
}
```

## 运行

```javascript
npm run start
```

> 作者:日拱一卒，持续学习，搭建知识体系，工作快乐，生活美好。
