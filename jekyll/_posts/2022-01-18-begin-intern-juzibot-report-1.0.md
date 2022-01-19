---
title: "2022寒假-王天睿-JuziBot项目开发-期初报告-智能的对话机器人"
author: tianrking
categories: article
tags:
  - juzibot
image: /assets/2022/01-begin-intern-juzibot-report-1.0/rcyx.webp

---

## 2022寒假-王天睿-JuziBot项目开发-期初报告-智能的对话机器人

## 项目概述

### 项目参与人

- 导师：段清华
- 学生：王天睿
- 模块列表
  - [x] 环境搭建与基本功能测试
  - [ ] 理解juzibot结构，进行开发文档撰写
  - [ ] 进行相应的开发与设计
  - [ ] 整理代码
  - [ ] 使用文档编写
  - [ ] 自由发挥完善项目
- 计划安排：
  - 环境搭建与基本功能测试
    - 01.13 - 01.16
    - 学习wechaty基本用法，运行dingdongbot
    - 服务器上运行juzibot，进行测试
    - 学习nodejs，并进行简单的语句回复修改尝试
  - 理解juzibot结构，进行开发文档撰写
    - 01.17 - 01.19
    - 浏览对应模块 理解相互调用关系
    - 明确开发任务
  - 进行相应的开发与设计
    - 01.20 - 02.04
    - 备忘录
    - Todo List
    - 搜索指令
  - 整理代码
    - 02.05 - 02.10
    - 完成 npm 发包、持续集成等问题
    - 整理代码，修改不优雅的代码
  - 配置文件设计
    - 02.11 - 02.15
    - 设置配置文件
  - 自由发挥
    - 02.15 - 02.28
    - 完善代码，视情况增加新功能
- 项目链接：[https://github.com/tianrking/xiaojuzi](https://github.com/tianrking/xiaojuzi)

- 联系方式：Telegram @qozob |  Email: me@w0x7ce.eu

> Author: [@tianrking](https://github.com/tianrking)
> Code: [@tianrking/juzibot](https://github.com/tianrking/xiaojuzi)

## 项目详述

### 项目目标

  Juzibot让与客户的互动变得更加智能

### 主要功能

#### 备忘录

1. 直接输入的文本、转发的文本
   - 输入文本如果包含标签符号，则识别标签

2. 语音输入、图片、视频、链接存储等多媒体信息
   - 在多媒体信息后，如果输入标签符号，则识别标签

3. 输入文本中包含标签符号

#### TODO列表（有提醒）

1. 输入形式
   - 橘子今天七点要干饭
   - 小橘子我七点要干饭
   - 小桔今天7点要干饭
   - 今天七点要干饭

2. 具体说明：
   - 根据用户输入的todo建立todo list
   - 如果发现时间，进行定时提醒（用户可自定义，比如今天七点要干饭，小橘子就会在七点提示用户）
   - 用户可以在小程序/web标记完成todo（在聊天框标记很麻烦，预测使用频率低，可以测试吗？）

#### 搜索指令

1. 输入形式：
    - 起始符号搜索+关键词
    - 起始符号搜+关键词
    - 起始符号找+关键词

2. 内容
     - #搜索小狗
     - /搜索小狗
     - /小桔搜索小狗
     - 橘子搜小狗

3. 具体说明：
     - 搜索关键词（标签）返回相关文件、信息列表
     - 列表后每一条都有【打开】按钮（链接），点击按钮打开详细界面（web/小程序）

#### 其他指令

1. 所有其他指令以：
    - 起始符号指令名
    - 例如：
      1. #指令名
      2. /指令名
      3. 小橘指令名
      4. 小橘子指令名
      5. 橘子指令名
      6. 桔子指令名
      7. 小桔子指令名
    - 指令：
      1. 打开web/小程序管理界面
      2. 群文件
      3. 我的文件

### 项目过程

1. 实现智能聊天交互
2. 实现上述备忘录、todoList、搜索指令等功能
3. 更加智能常用的回话场景语意解析
4. 融入自己的idea并实现
5. 测试、迭代、优化

### 项目计划

1. 01/13-01/13 : 成功运行dingdong bot
2. 01/14-01/19 : 成功运行juzibot 初步了解juzibot 模块 并学习nodejs 进行简单修改与测试
3. 01/20-01/25 : 深入了解juzibot对应模块功能并着手开发
4. 01/26-02/05 : 尽可能实现部分功能

### 项目进展

| 时间  | 重点工作                                                 | 关键进展                               |
| ----- | -------------------------------------------------------- | -------------------------------------- |
| 01/13  | 学习 wechaty；跑通getting started 项目           | 成功部署dingdong bot到服務器           |
| 01/14  | 使用juzibot 并初步学习nodejs | 成功在服务器上跑通并可以实现交互            |
| 01/17  |  继续学习nodejs 简单修改juzibot自动回复代码     | 对Juzibot 有了大体的认识  可以实现简单的对应条件回复对应的语句 |
| 01/18 | 第一次使用jektll 完整的尝试一次提交pr   | 谷歌了报错问题，并在段清华老师和同事的帮助下，解决了问题完成提交      |

### 模块介绍：

#### 文本标签功能
  
#### 文本语义标签识别
  
#### 多媒体-语音

#### 多媒体-图片

#### 多媒体-视频

#### 链接

### Juzibot 环境配置及其相关模块资料整理

### 问题

```shell
mac@localhost JuziBot % npm i
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR! 
npm ERR! Whilea resolving: juzibot@0.0.17
npm ERR! Found: eslint@8.1.0
npm ERR! node_modules/eslint
npm ERR!   dev eslint@"^8.1.0" from the root project
npm ERR! 
npm ERR! Could not resolve dependency:
npm ERR! peer eslint@"^3 || ^4 || ^5 || ^6 || ^7" from eslint-plugin-react@7.26.1
npm ERR! node_modules/eslint-plugin-react
npm ERR!   eslint-plugin-react@"^7.26.1" from the root project
npm ERR! 
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force, or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR! 
npm ERR! See /Users/mac/.npm/eresolve-report.txt for a full report.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/mac/.npm/_logs/2022-01-14T02_32_50_610Z-debug.log
```

### 解决方式

```shell
sudo npm i -g yarn
yarn
```

```shell
私有npm仓库配置
部分项目使用用github 私有仓库发布的npm包需要配置
Github Generate  new token  https://github.com/settings/tokens/new
user - setting - Developer settings - Personal access tokens - Generate new token
Select scopes: 
select repo, write:packages, read:packages 
write to ~/.npmrc 
//npm.pkg.github.com/:_authToken=TOKEN
```

### 记录

在 Node 生态系统中，依赖通常安装在项目的 node_modules 文件夹中。然而，这个文件的结构和实际依赖树可能有所区别，因为重复的依赖可以合并到一起。npm 客户端把依赖安装到 node_modules 目录的过程具有不确定性。这意味着当依赖的安装顺序不同时，node_modules 目录的结构可能会发生变化。

yarn.lock 存储着你的每个包的确切依赖版本，能确保从本地开发到生产环境，所有机器上都有精确相同的依赖版本

## 网络问题

registry（可选）
配置国内网络registry.
npm config set registry <https://registry.nlark.com>
配置完安装速度质的飞跃
配置国外网络registry.
当项目lock file包含国内地址时安装命令使用. 例如在github workflow
npm install --registry=<https://registry.npmjs.com>

## cron

cron node版本的crontab   待读

## doc-to-text

doc-to-text docx转换为文本  已读

### 记录

#### mammoth

mammoth.js 可以把 word .docx 文档转换成HTML、文本格式、Markdown格式。
通过 mammoth.js 把 word 转换为HTML的功能，也能实现在浏览器中直接在线预览 .docx 文档。
mammoth.js 在浏览器环境、Node.js都可以使用。
可以在浏览器开发工具中查看 mammoth.js 解析 Word docx 文件的耗时、性能的详细信息

开源地址 <https://github.com/mwilliamson/mammoth.js>

#### API

mammoth.convertToHtml(input, options） ：把源文档转换为 HTML 文档
mammoth.convertToMarkdown(input, options) ：把源文档转换为 Markdown 文档。
mammoth.extractRawText(input) ：提取文档的原始文本。这将忽略文档中的所有格式。每个段落后跟两个换行符。

#### fs模块

打开文件
fs.open(path, flags[, mode], callback)

写入文件
fs.writeFile(file, data[, options], callback)

读取文件
fs.read(fd, buffer, offset, length, position, callback)

关闭文件
fs.close(fd, callback)

删除文件
fs.unlink(path, callback)

创建目录
fs.mkdir(path[, options], callback)

读取目录
fs.readdir(path, callback)

删除目录
fs.rmdir(path, callback)

## file-manage

file-manage 文件管理  待读

## image-caption

image-caption 图片转换为句子（本地REST）已读
调用 api实现  请求 图片转文字服务

```shell
docker run -d --restart=always --name=image-caption -p 10970:8000 qhduan/image-caption:0.2
```

无权限 未读

## minio

minio 对象存储 已读

### 记录

The MinIO JavaScript Client SDK provides simple APIs to access any Amazon S3 compatible object storage server.

地址 <https://github.com/minio/minio-js>

## obj-detection

obj-detection 图片中对象识别（本地REST）已读

Fetch 是一個 HTML5 的 API，並非 ECMAScript 標準。Node.js 並沒有提供Fetch API，可以安裝 node-fetch 套件，來達使用它。

请求本地api 获取response识别结果

```shell
docker run -d --restart=always --name=obj-detection -p 12920:8000 qhduan/obj-dectection:0.1
```

无权限 未读

## kw-extraction

关键词提取  已读

此段 readme 上没有

```shell
docker run -d --restart=always --name=kw-extraction -p 12930:8000 qhduan/kw-extraction:0.1
```

无权限 未读

## ocr

ocr 图片中文字识别（本地REST） 已读

请求本地api

```shell
docker run -d --restart=always --name=paddle-ocr -p 12910:8000 qhduan/pdocr-api:0.1
```

无权限 未读

## pdf-to-text

pdf-to-text pdf 文字提取
需要确保poppler安装

否则出现类似错误

```shell
node:events:368
      throw er; // Unhandled 'error' event
      ^

Error: spawn pdftotext ENOENT
    at Process.ChildProcess._handle.onexit (node:internal/child_process:282:19)
    at onErrorNT (node:internal/child_process:477:16)
    at processTicksAndRejections (node:internal/process/task_queues:83:21)
Emitted 'error' event on ChildProcess instance at:
    at Process.ChildProcess._handle.onexit (node:internal/child_process:288:12)
    at onErrorNT (node:internal/child_process:477:16)
    at processTicksAndRejections (node:internal/process/task_queues:83:21) {
  errno: -2,
  code: 'ENOENT',
  syscall: 'spawn pdftotext',
  path: 'pdftotext',
  spawnargs: [
    '-layout',
    '-enc',
    'UTF-8',
    '/private/var/folders/tf/lh_s_3sx0pnd7py2svkrny700000gn/T/ad6a8f63-4199-4751-a2c9-a72ea9575378.pdf',
    '-'
  ]
}
```

```shell
brew install poppler
```

## screenshot

screenshot 网页截图（本地REST）  已读

```shell
docker run -d --restart=always --name chrome -p 10940:3000 browserless/chrome
```

## search

search 搜索文本/文件 已读

## text-recognizers

```shell
https://github.com/Microsoft/Recognizers-Text
```

## text-to-text txt文本

```shell
https://github.com/runk/node-chardet
```

## text-to-vector 文本到向量（本地REST）

fetch   请求本地api 文本向量  可以尝试一下word2vec

```shell
docker run -d --restart=always --name=onnx-cpm-sts -p 10950:8000 qhduan/onnx-cpm-sts:0.1
```

## todo 待办事项

## url-to-file URL保存到PDF

cheerio
类似 CSS Selector 的一种选择器

```shell
CSS Selector  https://github.com/cheeriojs/cheerio/wiki/Chinese-README
```
