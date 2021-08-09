---
title: "Wechaty restful api"
author: luyomo
categories: project
tags:
  - nodejs
  - code
  - restful
  - ecosystem
image: /assets/2021/01-wechaty-api-1/luyomo.png
---

This article will explain why I started to use wechaty, made the restful api wrapping the bot and what I would do as the next step.

## 1. Why I started to use wechaty

wechat individual bot has been decommissioned since 2019. The wechat web reject the login using QRCode. To continue to use the bot, I tried a lot of ways and finally find the alternative — wechaty(The solution wechat enterprise provided )
[https://wechaty.js.org/docs/api/message](wechaty doc)

## 2. How to use wechaty for bot

There are only three steps to make one simplest bot.

### 2.1 Install enterprise wechat in the smart phone

### 2.2 Apply one 15-days trial token from wechaty

Please refer to this page to get the token [https://github.com/wechaty/wechaty](wechaty)

### 2.3 Write the test code as below

Now you can send first message through bot to one account or group.
Please refer to the repository [https://github.com/luyomo/wechaty-api](wechaty api)

## 3. Prepare restful api for wechaty robot

Because I am not so familiar with the nodejs and want to use other languages to implement all kinds of services, I decided to make one API service to wrap the robot.
I chose the Koa2 as the api module to publish bot and implemented the below APIs.

### 3.1 Publish mode

#### 3.1.1 send chat to human

curl -X POST -H ‘Content-Type: application/json’ [Context: "http://127.0.0.1:3000/contact/contactName"] — data ‘{“data”:”Hello world. I am bot”}’

#### 3.1.2 send chat to room

curl -X POST -H ‘Content-Type: application/json’ [Context: "http://127.0.0.1:3000/room/roomName"] — data ‘{“data”:”Hello world. I am bot”}’

#### 3.1.3 send chat to group(map the chinese to english group name)

curl -X POST -H ‘Content-Type: application/json’ [Context: "http://127.0.0.1:3000/group/groupName"] — data ‘{“data”:”Hello world. I am bot”}’

The reason I added this group because the curl does not support the Chinese language. So use the maps to resolve it.

### 3.2 interactive mode

Last is to make bot to reply: Now only prepare the ping to show whether the bot service is active or not.

## 4 First service — Temperature forecast

Extract the temperature info from api.openweathermap.org and send to my wechat regularly. This only saved my time to browse the web every morning.

## 5. Next to do

### 5.1 Redirect the line message to wechat

This is my wife’s request. She always missed important messages from line since she use wechat mostly. She wants the bot to help her.

### 5.2 Use gmail api to send message if the email meets some conditions.(From or Subject)
