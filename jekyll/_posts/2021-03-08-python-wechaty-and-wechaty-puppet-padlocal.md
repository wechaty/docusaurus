---
title: "Python-wechaty & wechaty-puppet-padlocal的初探"
author: iivveess
categories: article
tags:
  - cloud
  - python
  - padlocal
  - puppet-service
image: /assets/2021/03-python-wechaty-and-wechaty-puppet-padlocal/python-wechaty-logo9.webp
---

## Python-wechaty & wechaty-puppet-padlocal 的初探

本文为本地运行 python-wechaty + 云上虚拟机运行 wechaty-puppet-padlocal 的简易教学

## 注意事项

1. wechaty-puppet-padlocal~~目前只能用**国内公网 IP**~~ Fixed at 2021-03-16
2. ~~**新注册**的 wechat 小号会无法登入~~ Fixed at 2021-03-10
3. Update cmd in step1 docker run

## Test Date

- March 01, 2021
- March 16, 2021

## 环境

1. 本地的手机(iPad or 手机都可以)
2. PC(本文用 Mac)
3. 阿里云上的虚拟机 for puppet

## 架构

![Arch]

1. 在虚拟机上运行 wechaty-puppet
2. 验证 API 有无注册成功
3. 运行本地 python-wechaty-getting-started
4. 扫码登入

## Step 1 wechaty-puppet-padlocal

你会需要一个国内的公网 IP+Token(请向[管理员注册](https://wechaty.js.org/docs/puppet-services/#1-free-token-short-term))来让 wechaty-puppet 生效
虚拟机部分,试用 or 免费方案你可以选用阿里云 or 华为云的 or~~GCP~~
很可惜 google 没有在国内的 IP，~~不然你还可以顺便玩一下 gcp 的 k8s~~
建议你还是使用国内资源
![cloud]

注册个 ubuntu20.04 即可,注意安全组要**放行 port 8788**  
在 ubuntu cmdline 里运行以下指令

```shell
apt update
apt install docker.io
docker pull wechaty/wechaty
export WECHATY_PUPPET_PADLOCAL_TOKEN=puppet_padlocal_xxxxxxxxxxxxxxxxxx
export WECHATY_PUPPET_SERVER_PORT=8788
export WECHATY_PUPPET=wechaty-puppet-padlocal
export WECHATY_LOG=verbose
docker run \
  --rm \
  -ti \
  -e WECHATY_LOG \
  -e WECHATY_PUPPET \
  -e WECHATY_PUPPET_PADLOCAL_TOKEN \
  -e WECHATY_PUPPET_SERVER_PORT \
  -e WECHATY_TOKEN="$WECHATY_PUPPET_PADLOCAL_TOKEN" \
  -p "$WECHATY_PUPPET_SERVER_PORT:$WECHATY_PUPPET_SERVER_PORT" \
  wechaty/wechaty
```

可以下指令检查一下是否正常运行，如图

```shell
netstat -ntlp
docker container ls
```

![testing]

你可以 telnet 虚拟机 IP:8788 简易 debug 一下通不通  
(Optional)你可以運行將 docker run 改為 docker-compose，虛擬機當機後可以自動長起來

## Step 2 验证 hostie token

访问
[https://api.chatie.io/v0/hosties/puppet_padlocal_xxxxxxxx](https://api.chatie.io/v0/hosties/puppet_padlocal_xxxxxxxx)  
去检验你的 token 是否成功注册,如果不行请回到 step1 去检查。  
Good:  
`{"ip":"47.119.129.29","port":8788}`

No Good:  
`{"ip":"0.0.0.0","port":0}`

## Step 3 本地运行 python

python-wechaty-getting-started 你需要 Python3.7+  
运行以下 cmd

```shell
git clone https://github.com/wechaty/python-wechaty-getting-started
cd python-wechaty-getting-started
pip3 install -r requirements.txt
export WECHATY_PUPPET=wechaty-puppet-service
export WECHATY_PUPPET_SERVICE_TOKEN=your_token_at_here
python3 examples/ding-dong-bot.py
```

坐等 QR code 出现扫码就好  
![qrcode]

## Step 4 微信扫码

~~目前用**新注册帐号会失败**~~ Fixed  
扫完后就登入了

最后再请朋友或是发给自己 ding(不要有空格跟全小写)
就会自动回 dong 啦！  
后续有非常多资源跟应用在[官网](https://wechaty.js.org/blog/)上，
大家有空就翻翻看。
Happy hacking!

[arch]: /assets/2021/03-python-wechaty-and-wechaty-puppet-padlocal/arch.webp
[cloud]: /assets/2021/03-python-wechaty-and-wechaty-puppet-padlocal/cloud-virtual-machine.webp
[qrcode]: /assets/2021/03-python-wechaty-and-wechaty-puppet-padlocal/qrcode.webp
[testing]: /assets/2021/03-python-wechaty-and-wechaty-puppet-padlocal/testing.webp
