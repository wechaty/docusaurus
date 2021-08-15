---
title: "行情播报微信机器人"
author: exctech
categories: project
image: /assets/2020/market-wechat-robot/teaser.jpeg
tags:
  - market
  - oracle
  - python
  - finance
---

使用Wechaty开发的行情播报微信机器人，为微信群组用户提供实时行情信息播报服务。用户可以通过添加管理员微信，然后自动加入播报群组。
机器人将采用行情早晚报和事件播报的形式在群组中进行行情播报。

<!--more-->

## 播报内容

### 行情早晚报

截止北京时间早或晚8点：NQ小型纳指当月连续点数报11562.93，日内涨跌幅1.29%；YM小型道指当月连续点数报27857.0，日内涨跌幅1.10%；ES小型标普当月连续点数报3391.98，日内涨跌幅1.00%；COMEX黄金点数报1947.4，日内涨跌幅1.17%；NYMEX原油点数报42.25，日内涨跌幅0.09%；USDCNH美元离岸人民币点数报6.9213，日内涨跌幅0.02%；UDI美元指数点数报93.2，日内涨跌幅-0.19%；VIX恐慌指数点数报22.54，日内涨跌幅-7.47%；CME比特币期货CFD点数报11600.0，日内涨跌幅-0.92%。

现货撮合数据现报11455.98USDT。
截止午夜12点，现货撮合数据日内加权平均价格为11801.96USDT，日内收益为-133.37USDT，收益率为-1.12%。 日内高点为11882.79USDT，低点为11625.39USDT，振幅为257.40USDT，2.17%，相对历史水平为14.0434。 收益/振幅为-51.81%，属于日内（震荡）。 日内交易总量为127232.09BTC，相对历史水平为-。 其中买入量为59677.61BTC，卖出量为67554.48BTC，买卖量差为-7876.87BTC，买卖量比为0.4690。 目前现货平均真实振幅为423.15USDT，历史水平为56.1487。 波动率水平位1.05%，乖离率为-199.78%，cci为-67.44。

### 事件播报

BTC现报11421.60USDT，日内累计涨幅-302.41，达-2.58%，15分钟内现货成交量达3369.55BTC，其中买入量为1457.26BTC，卖出量为1912.29BTC，买卖量差为-455.03BTC，买卖量比为0.4325。

盘口单一价格挂单超过100BTC，平台：coinbase，价格：11500.00USDT，数量：124.82BTC

## 运行Wechaty Hostie服务

### 准备工作

准备一台服务器，具备以下条件：

1. 公开IP：可通过互联网访问；
2. 公开端口：可通过互联网访问；
3. Docker。

### 运行步骤

#### 1. 安装Wechaty的Docker镜像

```sh
docker pull wechaty/wechaty
```

#### 2. 设置`wechaty-puppet-service`

可使用自定义的随机字符串，为防止与其他用户冲突，建议采用UUIDv4，可用在线生成工具来生成，[网址](https://uuidonline.com/)。

```sh
export WECHATY_TOKEN=puppet_hostie_your_token
```

#### 3. 开启Wechaty Puppet服务

```sh
export WECHATY_HOSTIE_PORT=8888
export WECHATY_PUPPET=wechaty-puppet-padplus
export WECHATY_PUPPET_PADPLUS_TOKEN=puppet_padplus_token
export WECHATY_LOG=verbose

docker run \
  --rm \
  -ti \
  -e WECHATY_LOG="$WECHATY_LOG" \
  -e WECHATY_PUPPET="$WECHATY_PUPPET" \
  -e WECHATY_HOSTIE_PORT="$WECHATY_HOSTIE_PORT" \
  -e WECHATY_TOKEN="$WECHATY_TOKEN" \
  -e WECHATY_PUPPET_PADPLUS_TOKEN="$WECHATY_PUPPET_PADPLUS_TOKEN" \
  -p "$WECHATY_HOSTIE_PORT:$WECHATY_HOSTIE_PORT" \
  wechaty/wechaty
```

#### 4. 检查Wechaty Puppet服务是否正常开启

访问`https://api.chatie.io/v0/hosties/TOKEN`，其中`TOKEN`为前面设置的`WECHATY_TOKEN`。如果返回结果中包含前面设置的IP和端口，则服务正常开启。如果返回结果为：

```sh
{"ip":"0.0.0.0","port":0}
```

则服务没有正常开启，需要按照上面的步骤重新检查。

## 运行行情播报微信机器人

### 下载源码

从github代码库中克隆源代码

```sh
git clone https://github.com/exctech/market-wechat-robot.git
```

### 运行机器人

```sh
python market-robot.py
```

> Author: [@exctech](https://github.com/exctech)
> Code: [@exctech/](https://github.com/exctech/market-wechat-robot)
