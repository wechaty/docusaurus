---
title: "基于wechaty的英语学习群助手"
author: alienfist
categories: project
tags:
  - padplus
  - project
  - sqlite3
  - education
image: /assets/2020/wechaty-english-learning-assistant/header.webp
---

针对英语学习社群，为提高群的活跃度，通过关键词触发，实现英文每日一句、中英文互译、励志话语推送，彩虹屁功能。

## 功能

- 每日一句，从互联网搜集整理中英文名人名言，励志名言，鸡汤共6137条数据
- 励志话语&彩虹屁，从互联网搜集整理共2783条数据
- 中英文互译，采用百度翻译api实现
- tts文本转语音（开发中，因padplus不支持语音）
- ![功能截图](/assets/2020/wechaty-english-learning-assistant/pic01.webp)
- ![功能截图](/assets/2020/wechaty-english-learning-assistant/pic02.webp)
- ![功能截图](/assets/2020/wechaty-english-learning-assistant/pic03.webp)
- ![功能截图](/assets/2020/wechaty-english-learning-assistant/pic04.webp)

## 配置

- 因调用百度翻译api，需要前往百度翻译开放平台申请 <https://api.fanyi.baidu.com/>
- 申请完成后在config.js中修改配置
- 在config.js中，对触发关键词修改

```js
const config = {
  "baidu_appid": '8888888888888888',                 //百度翻译api的appid
  "baidu_secretKey": 'aaaaaaaaaaaaaaaaaaa',          //百度翻译api的key
  "room_list": ["群名称1", "群名称2"],                 //需要支持的群名称列表（记得把机器人拉入该群）

  "db_file": 'data.db',                              //sqlite3数据库文件路径
  "baidu_salt": 666,                                 //百度翻译salt，这个值随便设置
  "keyword_baidu": ["??","？？"],                     // 激发百度翻译功能的句首关键词,仅支持两个字符
  "keyword_caihong": "夸我",                          // 彩虹屁关键词设定
  "keyword_lizhi": "加油",                            // 中文励志关键词设定
  "keyword_sentence": "每日一句",                      // 英文名言关键词设定
  // 加群欢迎语设定
  "welcome": "欢迎加入本群\n\
  本群具备以下功能:\n\
  1.文本翻译,请发送“??内容”\n\
  2.每日英语,请发送“每日一句”\n\
  3.鼓励自己,请发送“加油”\n\
  4.想听夸赞,请发送“夸我”\n\
  请不要在群内发广告，谢谢"
}
```

## 依赖

- wechaty：wechaty核心库
- wechaty-puppet-padplus：wechaty iPad协议
- sqlite3：数据库

## 运行

克隆项目

```shell
git clone git@github.com:alienfist/wechaty-english-learning-assistant.git

cd wechaty-english-learning-assistant
```

安装依赖

```shell
npm install
```

设置环境变量

```shell
export WECHATY_PUPPET=wechaty-puppet-padplus
export WECHATY_PUPPET_PADPLUS_TOKEN='your wechaty token'
```

启动项目

```shell
node index.js
```

或者使用pm2进程管理项目

```shell
npm install -g pm2
pm2 start index.js
```

## 致谢

🙏感谢[wechaty](https://github.com/wechaty/wechaty)团队提供微信机器人SDK  
🙏感谢[句子互动](https://www.juzibot.com/)提供的iPad协议版token

> Author: [alienfist](https://github.com/alienfist)
> Code: [wechaty-english-learning-assistant](https://github.com/alienfist/wechaty-english-learning-assistant)
