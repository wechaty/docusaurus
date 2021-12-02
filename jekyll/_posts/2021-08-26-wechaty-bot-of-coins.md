---
title: "基于python-Wechaty的微信群虚拟币报价机器人"
author: atom-zh
categories:
  - project
image: /assets/2021/08-wechaty-bot-of-coins/demo.webp
tags:
  - finance
  - wechaty-bot
  - python
  - coins
---

本项目基于[python-wechaty](https://github.com/wechaty/python-wechaty)库，通过几行代码就能实现微信机器人的基础功能。  
项目地址:[coins_market_push](https://github.com/atom-zh/coins_market_push)

## 实现功能

群聊中加密货币的报价

- 检索群聊中的加密货币币种关键词
- 币种匹配成功，从网络获取加密货币行情，目前支持三种平台
- 在群聊中发送加密货币行情信息，并@发送者

## 效果展示

![效果展示](/assets/2021/08-wechaty-bot-of-coins/demo.webp)

## 使用步骤

### 1、项目配置

```python
class Notice:
    EVENT_NAME = 'notice_python'
    TOKEN = '{your IFTTT TOKEN}'
    KEY = '{your notice key}'

class Zengr:
    APP_CODE = '{your app code}}'

class PATH: # fxh币种列表
    PATH_JSON = path_root + '/coin_list.json'

class WECHAT: # wechaty token的配置
    TOKEN = '{your wechaty token}'

class CoinGK: # CoinGeCko的币种列表
    PATH_JSON = path_root + '/conin_list_cgk.json'
```

- Notice: 通过IFTTT发送通知到手机(仅测试了iphone)，这里可以配置IFTTT的token
- Zengr：加密货币行情提供商，新用户有免费次数，目前收集的币种不多，不推荐
- CoinGK：提供免费API可以获取行情，但免费版功能受限，能满足基本要求  

_本项目默认使用非小号网站数据，不需要token，注意使用时要自律_
_目前我们使用的wechaty token是官方的免费版，仅7天试用期。如果要使用长期版本的话，您可以成为wechaty的贡献者，或者花钱购买。_
_毕竟钱能解决的事情，都不算事情。_
_还有一种方式，就是使用UOS的web协议登陆，参考[使用免费Web协议](https://python-wechaty.readthedocs.io/zh_CN/latest/introduction/use-web-protocol/)_

### 2、主要代码

> talk is cheep, show you the code

wechety.py

```python
async def on_message(msg: Message):
    text: str = msg.text()
    room: Optional[Room] = msg.room()
    if text.startswith('@Robot'):
        rev_str = text.replace(' ', '')
        symbol = rev_str.split(' ')[-1]
    else:
        symbol = text
    talker = msg.talker()
    if get_conin_seq(symbol) > 0:
        await room.say(get_price(symbol), mention_ids=[talker.contact_id])
```

这里是消息处理入口，get_price(symbol): symbol为币种，get_price()函数返回币种行情。get_conin_seq函数用于检查是否支持symbol币种。

```python
def get_price(symbol):
    symbol = symbol.upper()
    idx = get_conin_seq(symbol)
    result = get_coin(idx)
    ret =   '\n' \
            '【名称】 ' + result['data'][0]['fullname'] + '-' + result['data'][0]['name'] + '\n' \
            '【USD价格】 ' +'$' + str(result['data'][0]['current_price_usd']) + '\n' \
            '【CNY价格】 ' +'¥' + str(result['data'][0]['current_price']) + '\n' \
            '【全球市值】 ' + '$' + str('%.2f' % (result['data'][0]['marketcap']/100000000)) + '亿\n' \
            '【24H涨幅】 ' + str(result['data'][0]['change_percent']) + '%\n' \
            '【24H换手】 ' + str(result['data'][0]['turnoverrate']) + '%\n\n' \
            + str(time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()) ) + '\n' \
            '数据来源：非小号'
    return ret
```

这里是get_price的具体实现，目前支持非小号前500个币种。

### 3、运行

```bash
python wechat/wechaty.py
```

扫码登录后，其他用户在添加了机器人的群中直接发送币种（symbol），例如（btc、eth等），稍后机器人便会发送此币种行情到微信群中，并@发送者查收。

## 注意

要注意一下，对于个人账户来说，币价查询访问不要太频繁，容易被服务器检测。

> 作者: [刘小龙](https://github.com/atom-zh)，默默无闻的嵌入式工程师
