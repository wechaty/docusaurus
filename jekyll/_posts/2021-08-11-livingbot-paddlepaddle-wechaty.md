---
title: 『PaddlePaddle X Wechaty』有颜又有才的Living_Bot
author: thomas-yanxin
categories: project
tags:
  - paddlepaddle
  - paddlehub
  - utility
image: /assets/2021/08-livingbot-paddlepaddle-wechaty/wechaty.webp
---

## 『PaddlePaddle X Wechaty』有颜又有才的Living_Bot

[AIStudio地址（本项目全部相关文件放在此地址中可供下载）](https://aistudio.baidu.com/aistudio/projectdetail/2272396)

### wechaty介绍

![wechaty](/assets/2021/08-livingbot-paddlepaddle-wechaty/wechaty.webp)

**[Wechaty](https://github.com/wechaty/wechaty)** 是一款开源的微信SDK，它基于微信公开的API，对接口进行了一系列的封装，提供一系列简单的接口，然后开发者可以在其之上进行微信机器人的开发。在跟作者沟通试用以后，发现其中有着非常多的应用场景，比如：

- 如果你的好友众多，如何管理和维护好友分组；

- 如何快速有序地处理海量聊天信息，并区分重要性；

- 如何处理海量的聊天组，特别是微信可以任意建组，长期以后会出现非常多的聊天组；

- 能否可以自动智能地进行聊天回复；

- ……

### 项目介绍

本项目基于Wechaty开源微信SDK，以微信为深度学习落地应用平台，融合PaddleClas、PaddleGan、PaddleHub等多个飞桨开发工具，集成笔者前期开源的多个项目([【Mural_Gan】壁画不止在莫高窟可以看到](https://aistudio.baidu.com/aistudio/projectdetail/2231359)、[垃圾分类](https://aistudio.baidu.com/aistudio/projectdetail/1752787)以及**中医问答**),致力于打造微信个人专属生活小助手，不止让您的生活更便捷，也让您的生活更加丰富多彩！

目前本项目处于0-1阶段，后期将基于此持续添加：

- **“心理对话”** 功能：缓解存在心理障碍的人士的心理伤害程度、判断心理受伤等级并给出相对建议；

- **“法律问答”** 功能：为法律小白提供一个简易的法律问答系统，便于法律普及；

- **“抗灾物资及援助点汇总平台”** 功能：受河南洪灾启发，为各援灾物资集合点及救灾紧急点及联系方式打造信息汇总平台；

- **……**

### 具体实现

#### wechaty部署

详情可见[教你用AI Studio+wechaty+阿里云白嫖一个智能微信机器人](https://aistudio.baidu.com/aistudio/projectdetail/1836012?channelType=0&channel=0)

【**Step1**：搞定服务器，并完成docker下载及配置】

云服务器部分的详细过程，可参考上面给出的参考项目，本项目不做赘述，阿里云、百度云、腾讯云、华为云均有相关活动及福利，可供各位读者选择。  
搞定云服务器后，需要下载docker并进行相关配置，可执行如下代码，其中：WECHATY_TOKEN的具体内容需换成自己的token，具体的token获取方式可见[wechaty官网](https://wechaty.js.org/)。此外，参加AIStudio与Wechaty的比赛亦可获得（报名已结束）。

```python
apt update
apt install docker.io
docker pull wechaty/wechaty:latest
export WECHATY_LOG="verbose"
export WECHATY_PUPPET="wechaty-puppet-wechat"
export WECHATY_PUPPET_SERVER_PORT="8080"
export WECHATY_TOKEN="puppet_padlocal_xxxxxx" # 这里输入你自己的token
docker run -ti --name wechaty_puppet_service_token_gateway --rm -e WECHATY_LOG -e WECHATY_PUPPET -e WECHATY_TOKEN -e WECHATY_PUPPET_SERVER_PORT -p "$WECHATY_PUPPET_SERVER_PORT:$WECHATY_PUPPET_SERVER_PORT" wechaty/wechaty:latest
```

【**Step2**：检查是否运行成功】

当完成docker下载及相关配置后，需检查是否运行成功，可采用如下方法：

1. 输入网址: <https://api.chatie.io/v0/hosties/xxxxxx>(后面的xxxxxx就是你的token)；

2. 如果返回了服务器的ip地址以及端口号，如下图，即说明运行成功；

3. 如果返回的是{"ip":"0.0.0.0","port":0}，就说明没有运行成功。

![检查是否运行成功](/assets/2021/08-livingbot-paddlepaddle-wechaty/check.webp)

【**Step3**：登录附载微信】

运行成功后会输出很多东西，此时我们需要找到一个Online QR Code: 的地址点击进去： 
![Online QR Code](/assets/2021/08-livingbot-paddlepaddle-wechaty/QR.webp)
然后扫码登陆即可！

【**Step4_Way 1**：本地开发运行】

- 将本项目挂在的数据集下载到本地并解压;

- 更改ding-dong-bot.py内的**WECHATY_PUPPET_SERVICE_ENDPOINT** 和 **WECHATY_PUPPET_SERVICE_TOKEN**;

- 更改ding-dong-bot.py内的相关文件地址为实际具体地址;

- 运行ding-dong-bot.py.

【**Step4_Way 2**：AIStudio脚本运行】

具体的和【本地开发运行】差别不大，可参考[教你用AI Studio+wechaty+阿里云白嫖一个智能微信机器人](https://aistudio.baidu.com/aistudio/projectdetail/1836012?channelType=0&channel=0)

```python
!unzip -oq /home/aistudio/data/data103863/garbage.zip -d garbage
!unzip -oq /home/aistudio/data/data103863/Medicine-dialogue.zip -d Medicine-dialogue
!unzip -oq /home/aistudio/data/data103863/Mural_Gan.zip -d Mural_Gan
!mv data/data103863/ding-dong-bot.py /home/aistudio
```

### 后记

越来越觉得微信可以作为深度学习应用落地的平台，可凭借其巨大的日活和强劲的便捷度为深度学习应用带去流量加持，例如微信小程序。而现在有了wechaty的加持，使得我们可以以微信为应用平台，通过机器人来完成一些机械性的问答工作，也可以在闲暇时和智能机器人进行对话，他们的出现让生活变得更丰富多彩。

### 更多功能

这些都是根据【河南洪灾】过程中产生的灵感，总觉得还是要有点家国情怀和人文关怀的吧……

- **“心理对话”** 功能：缓解存在心理障碍的人士的心理伤害程度、判断心理受伤等级并给出相对建议;

- **“法律问答”** 功能：为法律小白提供一个简易的法律问答系统，便于法律普及;

- **“抗灾物资及援助点汇总平台”** 功能：受河南洪;

- **……**

如果您对此感兴趣，欢迎一起共建！！！

觉得不错的话给我一个Star哦🎉🎉🎉

### 参考资料

[python-wechaty](https://github.com/wechaty/python-wechaty)

[python-wechaty-getting-started](https://github.com/wechaty/python-wechaty-getting-started)

[教你用AI Studio+wechaty+阿里云白嫖一个智能微信机器人](https://aistudio.baidu.com/aistudio/projectdetail/1836012?channelType=0&channel=0)

[【Mural_Gan】壁画不止在莫高窟可以看到！](https://aistudio.baidu.com/aistudio/projectdetail/2231359)

[垃圾分类](https://aistudio.baidu.com/aistudio/projectdetail/1752787)
