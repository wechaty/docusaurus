---
title: "Wechaty 实时公交查询"
author: ershing
categories: project
tags:
  - padplus
  - travel
image: /assets/2020/when-bus-come/teaser.jpg
---

## 需求

我们很多时候需要到某个公交站，但是不知道公交什么时候来，导致等来很久才到，浪费来太多的时间，如果可以提前知道车什么时候来，就可以准时出门，不用在车站等这么久的时间，特别这么炎热的天气。当然，已经有很多小程序可以做到这个查询的工作，这里的仓库也是用来广州公交行讯通小程序的接口，或许你觉得多此一举，但是我觉得这个只是其中一个小功能集成在某个机器人的问答交互功能当中，后面扩展起来还是有很多可以做的工作。

## Wechaty 和 Puppet

[`Wechaty`](https://github.com/wechaty/wechaty) 提供了群组管理、收发消息等接口，能够方便地满足计划需求。

由于 `Wechaty` 本身只是一个控制器，因此其对微信功能的执行需要依赖于微信客户端协议与服务器进行通信。`puppet` 就是这些协议的具体承载者，现在有基于 Web / iPad / Mac 等协议的多种实现。经过测试，首先排除了 Web 协议：由于腾讯的限制，近年新注册的微信账号都无法使用网页协议，而老账号又实在过于珍贵；接着，就决定使用了`wechaty-puppet-padplus`。

## 架构

- 目标：问答式交互，输入公交站名，返回对应的将要来的车辆和时间信息
- 方案：
  1. 使用 `Node.js` 开发，使用`wechaty/wechaty-puppet-padplus`等功能库；
  2. 抓取广州公交行讯通小程序的接口；
  3. 跟进接口参数，用户输入车站名后，调用相关接口，返回整理后的数据。

## 实现

### 机器人登录扫码

```javascript

    bot.on('scan', (qrcode, status) => {
        if (status === ScanStatus.Waiting) {
            QrcodeTerminal.generate(qrcode, {
                small: true
            })
        }
    })

```

### 接收消息并交给处理

```javascript

    bot.on('message', async msg => {
        const contact = msg.from()
        const busStation = msg.text().trim()
        try {
            const res = await handler(busStation)
            botMsger(contact, res)
        } catch (eMsg) {
            botMsger(contact, eMsg)
        }
    })
    .start()

   function botMsger(contact, text) {
       contact.say(text)
   }

```

### 调用接口处理获取数据

```javascript

    const { retCode, retData } = await fetch('getBusStationId', { name: busStation, requesttime: Math.floor(+new Date() / 1000) })

    if (retCode !== 0) {
        return Promise.reject('服务器异常，请稍后重试')
    }
    const { bus: { station } } = retData
    if (!station.length) {
        return Promise.reject(`查询不到公交站：${busStation}`)
    }
    const busStationId = station[0].i

    let [busAbout, busTime] = await Promise.all([
        fetch('getBusAbout', { stationNameId: busStationId }),
        fetch('getBusTime', { stationNameId: busStationId }),
    ])

    if (busAbout.retCode !== 0 || busTime.retCode !== 0) {
        return Promise.reject('服务器异常，请稍后重试')
    }

    let idTime = {}
    busTime.retData.forEach(ele => {
        idTime[ele.i] = ele.time
    })

    let direcBus = {}
    busAbout.retData.l.forEach(ele => {
        const { dn, rn, rsi } = ele
        let terminal = dn.split('-').pop()
        let ter = direcBus[terminal]

        let itemTime = idTime[rsi]
        if (~itemTime) {
            let addItem = {
                busId: rsi,
                name: rn,
                time: itemTime
            }
            if (ter) {
                ter.push(addItem)
            } else {
                direcBus[terminal] = [addItem]
            }
        }
    })

```

### 处理数据返回

```javascript

    let resText = `公交车站：${busStation}\n`
    Object.keys(direcBus).forEach(direct => {
        let busLine = direcBus[direct]
        busLine.sort((pre, next) => pre.time - next.time)
        resText += `\n开往：${direct}\n`
        busLine.forEach(el => {
            resText += `${el.time}分钟后->${el.name}\n`
        })
    })

```

## 实际效果

输入`北京路`，返回如下：

公交车站：北京路

开往：昌岗路总站
5分钟后->10路

开往：汾水小区总站
2分钟后->183路

开往：芳村花园南门总站
9分钟后->1路

开往：黄沙总站
2分钟后->219路

开往：如意坊总站
3分钟后->3路

开往：恒宝广场总站
3分钟后->541路

开往：纸厂总站
3分钟后->544路

开往：泮塘总站
10分钟后->66路

## 致谢

感谢 `Wechaty` 开源项目及 `JuziBot` 公司提供的 token，为开发者带来极大便利！

> 作者: [ershing](https://github.com/ershing) Node.js developer
> Code: [Github](https://github.com/ershing/when-bus-come)
