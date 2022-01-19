---
title: "2022寒假-王天睿-JuziBot项目开发-期初报告-智能信息助理"
author: tianrking
categories: article
tags:
  - juzibot
image: /assets/2022/01-begin-intern-juzibot-report-1.0/cover.webp

---

## 2022寒假-王天睿-JuziBot项目开发-期初报告-智能信息助理

### 项目参与人

- 导师：段清华
- 学生：王天睿

### 项目目标

  Juzibot 智能的信息助理 ，“小橘子”让您的生活更加高效 ！

### 主要功能

1. 备忘录(已有)
    - 直接输入的文本、转发的文本
    - 语音输入、图片、视频、链接存储等多媒体信息
    - 输入文本中包含标签符号

2. TODO列表(已有）
3. 搜索指令(部分)  
4. 其他指令(待完善)
   - 例如
      1. 打开web/小程序管理界面
      2. 群文件
      3. 我的文件

### 项目计划

1. 01/13-01/17 : 成功运行dingdong bot，运行juzibot 初步了解juzibot 模块 并学习nodejs
2. 01/18-01/25 : 开始根据现有功能书写测试用例，同时深入了解juzibot对应模块功能
3. 01/26-02/11 : 现有功能的完善与测试用例的持续编写
4. 02/12- : 集成测试与其他功能开发

### 项目进展

| 时间  | 重点工作                                                 | 关键进展                               |
| ----- | -------------------------------------------------------- | -------------------------------------- |
| 01/13  | 学习 wechaty；跑通getting started 项目           | 成功部署dingdong bot到服務器           |
| 01/14  | 使用juzibot 并初步学习nodejs | 成功在服务器上跑通并可以实现交互            |
| 01/17  |  继续学习nodejs 简单修改juzibot自动回复代码     | 对Juzibot 有了大体的认识  简单修改代码实现关键词回复对应的语句 |
| 01/18 | 第一次使用jektll 完整的尝试一次提交pr   | 谷歌了报错问题，并在段清华老师和同事的帮助下，解决了问题完成提交      |

### 模块测试列表

- [x] docx转换为文本
- [ ] 文件管理
- [ ] 图片转换为句子（本地REST）
- [ ] 对象存储
- [ ] 图片中对象识别（本地REST）
- [ ] PDF转换文本
- [ ] 网页截图（本地REST）
- [ ] 搜索文本/文件
- [ ] txt文本
- [ ] 文本到向量（本地REST）
- [ ] 待办事项
- [ ] URL保存到PDF

### 项目链接

- 项目链接：[https://github.com/tianrking/xiaojuzi](https://github.com/tianrking/xiaojuzi)

- 联系方式：Telegram: @qozob |  Email: me@w0x7ce.eu

> Author: [@tianrking](https://github.com/tianrking)
> Code: [@tianrking/juzibot](https://github.com/tianrking/xiaojuzi)

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
