---
title: "使用wechaty提醒加密货币行情"
author: r-hou
categories: project
tags:
  - python
  - cryptocurrency
  - binance
  - devops
image: /assets/2021/03-wechaty-cryptocurrency-websocket/wechaty-btc.jpg
---

[![Powered by Wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-brightgreen.svg)](https://wechaty.js.org)

[![Wechaty-Cryptocurrency-Notification](/assets/2021/03-wechaty-cryptocurrency-websocket/wechaty-btc.jpg)](https://github.com/r-hou/wechaty-cryptocurrency-websocket)

<!-- more -->
从2020年3月份以来，加密货币市场随着疫情导致的全球大放水而飞速扩张，BTC的价格从低点\$3800涨到了最高\$60000， 十几倍的涨幅吸引了全球越来越多的个人和机构投资者参与到这个市场。 这个7x24小时的市场瞬息万变，上下几个点甚至几十个点的波动常常在十几分钟甚至几分钟之内就能完成，这么大的波动在给投资者带来丰厚回报的同时也伴随着巨大的风险。作为一名个人投资者，非常希望能够及时得到虚拟货币价格的变动情况而进行交易。

因此, 我非常希望建立一个自动化机器人，在行情波动巨大的时候及时发出提醒。目前，市面上有各种各样的接口提供了消息推送，比如钉钉，spark， IFTTT， telegram等等. 但是，每个人手机里各种各样的消息推送常常让人应接不暇。而微信，作为最广泛使用的聊天工具，鲜有人错过阅读微信消息。 所以，我打算通过微信机器人来进行消息推送。通过搜索，了解到目前市场的消息机器人有itchat， wxpy，wechaty等等。可是随着腾讯施加压力，基于web微信的itchat和wxpy无法使用。而wechaty支持多种协议，比web协议更加安全，于是决定采用wechaty基于ipad协议 ( padLocal ) 来搭建机器人。

让我们进入正题！

## 环境和依赖

python
aiohttp
asyncio
wechaty

## Wechaty Puppet Hostie部署：

因为原生的wechaty是基于JavaScript和TypeScript写的，所以需要通过docker搭建Wechaty Puppet Hostie 服务作为中转， 从而可以通过python调用。

- **部署前置准备:**
  
一个满足以下三点要求的服务器：

>Public IP
>Public Port
>Docker

- **部署Wechaty Puppet Hostie**

具体代码如下（本人服务器为 Ununtu 18.04）

```bash
#! /usr/bin/bash

export WECHATY_LOG="verbose"
export WECHATY_PUPPET="wechaty-puppet-padlocal"
export WECHATY_PUPPET_PADLOCAL_TOKEN="puppet_padlocal__TOKEN__"

export WECHATY_PUPPET_SERVER_PORT="9001"
export WECHATY_TOKEN=$(curl -s https://www.uuidgenerator.net/api/version4)
  --name wechaty_puppet_service_token_gateway \
  --rm \
  -e WECHATY_LOG \
  -e WECHATY_PUPPET \
  -e WECHATY_PUPPET_PADLOCAL_TOKEN \
  -e WECHATY_PUPPET_SERVER_PORT \
  -e WECHATY_TOKEN \
  -p "$WECHATY_PUPPET_SERVER_PORT:$WECHATY_PUPPET_SERVER_PORT" \
  wechaty/wechaty
```

代码中的WECHATY_PUPPET_PADLOCAL_TOKEN是需要向官方申请，可以得到的一个可以试用7天的token，后续通过社区的激励计划，还可以免费获得时效更长的token。[详情参见这里](https://wechaty.js.org/docs/contributor-program/)。

- **验证Wechaty Puppet Hostie**

访问 <https://api.chatie.io/v0/hosties/WECHATY_TOKEN> ，其中WECHATY_TOKEN是指你刚刚自行设定的Token，当返回结果为服务器的Public IP时则说明部署成功，为0.0.0.0时则说明部署失败~

## 项目思路

搭建完中转服务，现在我们需要集中注意力在需求和机器人的搭建上面。市场行情数据来源于国内三大交易所之一[币安](https://binance.com/)。为了获得更加及时的数据，我决定采用websocket来搭建我们的服务。关于机器人方面，我读了官方examples里面的代码发现机器人都是继承Wechaty基类来通过自定义回调函数来实现各种功能。利用事件驱动的回调函数这样是很被动的，而我想得到一个可直接调用的Wechaty对象，不通过start()函数进入事件循环监听, 而可以主动的发送信息。经过一天的阅读代码和自我摸索，终于实现了创建一个可以直接调用的机器人对象，稍后请参考详细代码，其中最重要的还是需要进入事件监听，然后在监听到成功登录的事件以后，中断监听，返回已经登录好的机器人对象， 从而实现直接调用。

首先我们建立Websocket基类, 并且建立HeartBeat类来定期执行某些任务，比如检查websocket连通性并断线重连等等。

```python
#websocketAPI.py

import logging
import asyncio
import aiohttp

class Websocket:
    """ websocket接口封装
    """

    def __init__(self, url, check_conn_interval=2, send_hb_interval=2):
        """ 初始化
        @param url 建立websocket的地址
        @param check_conn_interval 检查websocket连接时间间隔
        @param send_hb_interval 发送心跳时间间隔，如果是0就不发送心跳消息
        """
        self._url = url
        self._check_conn_interval = check_conn_interval
        self._send_hb_interval = send_hb_interval
        self.ws = None  # websocket连接对象

    def initialize(self):
        """ 初始化
        """
        # 注册服务 检查连接是否正常
        print("注册服务 检查连接是否正常")
        heartbeat.register(self._check_connection, self._check_conn_interval)
        # 注册服务 发送心跳
        print("注册服务 发送心跳")
        # 建立websocket连接
        print("建立websocket连接")
        asyncio.get_event_loop().create_task(self._connect())

    async def _connect(self):
        logger.info("url:", self._url, caller=self)
        # print("proxy:",proxy)
        session = aiohttp.ClientSession()
        try:
            self.ws = await session.ws_connect(self._url, timeout=10, autoping=True)
            # print(self.ws)
        except Exception as e:
            print("ERROR:{},{}".format(e.__class__, e))
            self.ws = await session.ws_connect(self._url, timeout=10, autoping=True)
            print(self.ws)
        except aiohttp.client_exceptions.ClientConnectorError:
            logger.error("connect to server error! url:", self._url, caller=self)
            return
        asyncio.get_event_loop().create_task(self.connected_callback())
        asyncio.get_event_loop().create_task(self.receive())

    async def _reconnect(self):
        """ 重新建立websocket连接
        """
        logger.warn("reconnecting websocket right now!", caller=self)
        await self._connect()

    async def connected_callback(self):
        """ 连接建立成功的回调函数
        * NOTE: 子类继承实现
        """
        pass

    async def receive(self):
        """ 接收消息
        """
        async for msg in self.ws:
            if msg.type == aiohttp.WSMsgType.TEXT:
                try:
                    data = json.loads(msg.data)
                except:
                    data = msg.data
                await asyncio.get_event_loop().create_task(self.process(data))
            elif msg.type == aiohttp.WSMsgType.BINARY:
                await asyncio.get_event_loop().create_task(self.process_binary(msg.data))
            elif msg.type == aiohttp.WSMsgType.CLOSED:
                logger.warn("receive event CLOSED:", msg, caller=self)
                await asyncio.get_event_loop().create_task(self._reconnect())
                return
            elif msg.type == aiohttp.WSMsgType.ERROR:
                logger.error("receive event ERROR:", msg, caller=self)
            else:
                logger.warn("unhandled msg:", msg, caller=self)

    async def process(self, msg):
        """ 处理websocket上接收到的消息 text 类型
        * NOTE: 子类继承实现
        """
        raise NotImplementedError

    async def process_binary(self, msg):
        """ 处理websocket上接收到的消息 binary类型
        * NOTE: 子类继承实现
        """
        raise NotImplementedError

    async def _check_connection(self, *args, **kwargs):
        """ 检查连接是否正常
        """
        # 检查websocket连接是否关闭，如果关闭，那么立即重连
        # print(self.ws)
        if not self.ws:
            logger.warn("websocket connection not connected yet!", caller=self)
            return
        if self.ws.closed:
            await asyncio.get_event_loop().create_task(self._reconnect())
            return

    async def _send_heartbeat_msg(self, *args, **kwargs):
        """ 发送心跳给服务器
        """
        if not self.ws:
            logger.warn("websocket connection not connected yet!", caller=self)
            return
        if self.heartbeat_msg:
            if isinstance(self.heartbeat_msg, dict):
                await self.ws.send_json(self.heartbeat_msg)
            elif isinstance(self.heartbeat_msg, str):
                await self.ws.send_str(self.heartbeat_msg)
            else:
                logger.error("send heartbeat msg failed! heartbeat msg:", self.heartbeat_msg, caller=self)
                return
            logger.debug("send ping message:", self.heartbeat_msg, caller=self)

class HeartBeat(object):
    """ 心跳
    """

    def __init__(self):
        self._count = 0  # 心跳次数
        self._interval = 1  # 服务心跳执行时间间隔(秒)
        self._print_interval = 0 # 心跳打印时间间隔(秒)，0为不打印
        self._tasks = {}  # 跟随心跳执行的回调任务列表，由 self.register 注册 {task_id: {...}}

    @property
    def count(self):
        return self._count

    def ticker(self):
        """ 启动心跳， 每秒执行一次
        """
        self._count += 1

        # 打印心跳次数
        if self._print_interval > 0:
            if self._count % self._print_interval == 0:
                logger.info("do server heartbeat, count:", self._count, caller=self)

        # 设置下一次心跳回调
        asyncio.get_event_loop().call_later(self._interval, self.ticker)

        # 执行任务回调
        for task_id, task in self._tasks.items():
            interval = task["interval"]
            if self._count % interval != 0:
                continue
            func = task["func"]
            args = task["args"]
            kwargs = task["kwargs"]
            kwargs["task_id"] = task_id
            kwargs["heart_beat_count"] = self._count
            asyncio.get_event_loop().create_task(func(*args, **kwargs))

    def register(self, func, interval=1, *args, **kwargs):
        """ 注册一个任务，在每次心跳的时候执行调用
        @param func 心跳的时候执行的函数
        @param interval 执行回调的时间间隔(秒)
        @return task_id 任务id
        """
        t = {
            "func": func,
            "interval": interval,
            "args": args,
            "kwargs": kwargs
        }
        task_id = "websocket_task"
        self._tasks[task_id] = t
        return task_id

    def unregister(self, task_id):
        """ 注销一个任务
        @param task_id 任务id
        """
        if task_id in self._tasks:
            self._tasks.pop(task_id)


heartbeat = HeartBeat()

```

接着通过币安提供的websocket API来拉取行情。 因此我们新建一个Binance的子类来继承Websocket类，并且在Binance中实现机器人。

```python
import asyncio
import json
from datetime import datetime
import os
import traceback
import aiohttp

from wechaty import Wechaty, Message, WechatyPlugin, Room,WechatyOptions
from wechaty_puppet_service import puppet
from wechaty_puppet import PuppetOptions, EventType, EventScanPayload, ScanStatus, EventLoginPayload
from wechaty_puppet.schemas.room import RoomQueryFilter
from wechaty_puppet.schemas.contact import ContactQueryFilter

from websocketAPI import heartbeat, Websocket
import logger



WECHATY_PUPPET_SERVICE_TOKEN = 'acfbbe16-5f80-4a61-a755-85c27c3f5511'
WECHATY_PUPPET = 'wechaty-puppet-service'

os.environ['WECHATY_PUPPET_SERVICE_TOKEN'] = WECHATY_PUPPET_SERVICE_TOKEN
os.environ['WECHATY_PUPPET'] = WECHATY_PUPPET



class Binance(Websocket):
    """ Binance 行情
    """
    def __init__(self, to_wechat_id):
        self._platform = "BINANCE"
        self._url = "wss://stream.binance.com:9443"
        self._symbols = ['BTC/USDT']  #可以在这里添加关心的交易对
        self._channels = ['kline'] #行情数据，提供kline，trade和orderbook三种行情
        self._c_to_s = {}  # {"channel": "symbol"}

        self.to_wechat_id = to_wechat_id  #被发送人的微信id，也可以是群id，不过需要更改 self.send_notification函数
        self.bot: Wechaty = None
        asyncio.get_event_loop().run_until_complete(self.init_wechat_bot())

        self._make_url()
        super(Binance, self).__init__(self._url)
        self.initialize()

        self.volatility_threshold = 0.0001  # 波动大于 0.01%的时候发出提醒
        self.kline_init = False
        self.last_timestamp = None  # 上一个event k线的timestamp
        self.current_timestamp = None  # 当前event k线的timestamp
        self.has_sent_notification = {} # 判断当前k线是否已经发送了通知

    async def init_wechat_bot(self):  # 在这个函数里面，我们初始化了可以直接调用的机器人对象
        puppet_options = PuppetOptions()
        puppet_options.token = WECHATY_PUPPET_SERVICE_TOKEN

        options = WechatyOptions()
        options.puppet = WECHATY_PUPPET
        options.puppet_options = puppet_options

        self.bot = Wechaty(options)
        await self.bot.init_puppet()
        await self.bot.init_puppet_event_bridge(self.bot.puppet)
        self.bot.puppet._init_puppet()
        async for response in self.bot.puppet.puppet_stub.event(): #初始化puppet以后，进入事件监听
            if response is not None:
                payload_data: dict = json.loads(response.payload)
                if response.type == int(EventType.EVENT_TYPE_SCAN): # 返回二维码事件
                    logger.debug('receive scan info <%s>', payload_data)
                    # create qr_code
                    payload = EventScanPayload(
                        status=ScanStatus(payload_data['status']),
                        qrcode=payload_data.get('qrcode', None),
                        data=payload_data.get('data', None)
                    )
                    print('scan payload_data', payload_data)
                    self.bot.puppet._event_stream.emit('scan', payload)

                elif response.type == int(EventType.EVENT_TYPE_LOGIN): # 登录事件，在登录以后
                    logger.debug('receive login info <%s>', payload_data)
                    print('login payload_data', payload_data)
                    event_login_payload = EventLoginPayload(
                        contact_id=payload_data['contactId'])
                    self.bot.puppet.login_user_id = payload_data.get('contactId', None)
                    self.bot.puppet._event_stream.emit('login', event_login_payload)
                    break

    async def send_message(self, message):
        contact = await self.bot.Contact.find(self.to_wechat_id)  # 发送到联系人
        if contact:
            await contact.say(message)
        # room = await self.bot.Room.find(self.to_wechat_id)  # 发送到群
        # if room:
        #     await room.say(message)

    def _make_url(self):
        """ 拼接请求url
        """
        cc = []
        for ch in self._channels:
            if ch == "kline":  # 订阅K线 1分钟
                for symbol in self._symbols:
                    c = self._symbol_to_channel(symbol, "kline_5m")
                    cc.append(c)
            elif ch == "orderbook":  # 订阅订单薄 深度为5
                for symbol in self._symbols:
                    c = self._symbol_to_channel(symbol, "depth20")
                    cc.append(c)
            elif ch == "trade":  # 订阅实时交易
                for symbol in self._symbols:
                    c = self._symbol_to_channel(symbol, "trade")
                    cc.append(c)
            else:
                logger.error("channel error! channel:", ch, caller=self)
        self._url += "/stream?streams=" + "/".join(cc)

    async def process(self, msg):
        """ 处理websocket上接收到的消息
        """
        print(msg)
        logger.debug("msg:", msg, caller=self)
        if not isinstance(msg, dict):
            return

        channel = msg.get("stream")
        if channel not in self._c_to_s:
            logger.warn("unkown channel, msg:", msg, caller=self)
            return

        symbol = self._c_to_s[channel]
        data = msg.get("data")
        e = data.get("e")  # 事件名称

        if e == "kline":  # K线
            kline = {
                "platform": self._platform,
                "symbol": symbol,
                "open": data.get("k").get("o"),  # 开盘价
                "high": data.get("k").get("h"),  # 最高价
                "low": data.get("k").get("l"),  # 最低价
                "close": data.get("k").get("c"),  # 收盘价
                "volume": data.get("k").get("q"),  # 交易量
                "timestamp": data.get("k").get("t"),  # 时间戳
                "kline_type": const.MARKET_TYPE_KLINE
            }
            # print("symbol:", symbol, "kline:", kline)
            logger.info("symbol:", symbol, "kline:", kline, caller=self)
        elif channel.endswith("depth20"):  # 订单薄
            bids = []
            asks = []
            for bid in data.get("bids"):
                bids.append(bid[:2])
            for ask in data.get("asks"):
                asks.append(ask[:2])
            orderbook = {
                "platform": BINANCE,
                "symbol": symbol,
                "asks": asks,
                "bids": bids,
                "timestamp": tools.get_cur_timestamp_ms()
            }
            logger.info("symbol:", symbol, "orderbook:", orderbook, caller=self)
            if not self.kline_init:
                self.last_timestamp = data.get("k").get("t")
                self.current_timestamp = data.get("k").get("t")
                self.has_sent_notification = {str(self.current_timestamp): False}
                self.kline_init = True

            if self.current_timestamp != self.last_timestamp:
                self.has_sent_notification = {str(self.current_timestamp): False}

            logger.info("symbol:", symbol, "kline:", kline, caller=self)
            high, low = float(data.get("k").get("h")), float(data.get("k").get("l"))
            volatility = (high-low) / high
            if volatility > self.volatility_threshold and not self.has_sent_notification[str(self.current_timestamp)]:
                await self.send_message("{} 5分钟内波幅达到{:.4f}%!".format(symbol, volatility*100))
                self.has_sent_notification[str(self.current_timestamp)] = True
            
        elif e == "trade":  # 实时成交信息
            trade = {
                "platform": self._platform,
                "symbol": symbol,
                "action":  ORDER_ACTION_SELL if data["m"] else ORDER_ACTION_BUY,
                "price": data.get("p"),
                "quantity": data.get("q"),
                "timestamp": data.get("T")
            }
            logger.info("symbol:", symbol, "trade:", trade, caller=self)
        else:
            logger.error("event error! msg:", msg, caller=self)

    def _symbol_to_channel(self, symbol, channel_type="ticker"):
        """ symbol转换到channel
        @param symbol symbol名字
        @param channel_type 频道类型 kline K线 / ticker 行情
        """
        channel = "{x}@{y}".format(x=symbol.replace("/", "").lower(), y=channel_type)
        self._c_to_s[channel] = symbol
        return channel


if __name__ == '__main__':
    binance_websocket = Binance(to_wechat_id='文件传输助手')
    loop = asyncio.get_event_loop()
    # loop.call_later(2, heartbeat.ticker)
    loop.run_forever()
```

至此我们的加密货币波动提醒机器人基本框架已经搭好，如果感兴趣的话，大家可以通过搭配k线事件，trade事件和orderbook事件形成新的信号提醒，也可以做各种量化交易提醒。

## 运行效果

![效果](/assets/2021/03-wechaty-cryptocurrency-websocket/result.jpg)

## 感谢

在最后我们要感谢所有为我们提供工具和服务的团队和个人。特别感谢开源项目[Wechaty](https://github.com/wechaty/wechaty)团队和免费提供服务的padLocal团队。

> 作者: [r-hou](https://github.com/r-hou)，学生，加密货币爱好者。
