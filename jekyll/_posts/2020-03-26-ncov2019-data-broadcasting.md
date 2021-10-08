---
title: "nCoV2019疫情播报"  
author: zjacai
categories: project
tags:
  - typescript
  - bupt
  - healthcare
---

之前用pywx尝试玩过wxbot，我这种完全属于自嗨，但后来众所周知，web版被限制了，在github上瞎逛发现了wechaty这么个神奇玩意儿，真的太棒了。疫情播报的代码1月就已经在使用了，只可惜是py写的，这次借wechaty，改写成nodejs，也算是一次新语言的挑战。

## 环境 ##

看了一下wechaty的文档，推荐通过docker运行。但docker不熟悉啊，用惯了Windows，于是折腾部署win下环境，可惜没整出来，npm的时候出现大量错误，大概意思是需要安装有VS2013及以上的IDE才能编译，本机只有VS2010，算了暂时不折腾了，最终选择了推荐的docker环境，尴尬。

centos安装docker还是挺简单的，一条命令即可：yum install -y docker

### 启动docker服务(并设置开机自启) ###

    systemctl start docker.service
    systemctl enable docker.service

### 查看docker服务状态 ###

    systemctl status docker

### 拉取镜像 ###

    docker pull registry.docker-cn.com/zixia/wechaty

若失败，执行这句试试，网络不好则多试几次：

    docker pull zixia/wechaty

## 运行例子 ##

创建一个文件夹如：nCoV2019，copy一个package.json过来或使用npm init创建，创建代码文件如mybot.js或其它名称，自己开心就好。官方6行代码是不行的，因为调用的是网页版wx，我的帐号不行，又尴尬。

项目地址: [github](https://github.com/zjacai/nCoV2019)

下载完后，cmd进入项目目录，执行：npm install

### 启动程序 ###

    docker run -ti --rm --volume="$(pwd)":/bot zixia/wechaty mybot.js

扫码登录，手机确认，登录成功后会显示 “登录成功”昵称，此bot只接受几个命令，如ding/ping/bing/code/疫情,自动消息回复pong，更多功能有待自行扩展。里面加了名片发送、链接等功能，但未使用，需要自行调试。

## 写在最后 ##

很简单的一个例子，也没多少代码量，适合初学者，大佬轻喷。对于写代码，我就是一只弱鸡，python略懂，nodejs更是现学现卖。若代码执行有问题，欢迎沟通交流。

有wechaty这个神器，其实可以做很多有趣好玩的事情，如自己关注的股票信息推送等。

> Author: [@zjacai](https://github.com/zjacai) enjoying ML&Wechaty at BUPT  
代码: [nCoV2019](https://github.com/zjacai/nCoV2019)
