---
title: Design and implementation of wechaty puppet module based on Tiktok
author: yusihe88
Time: 27 / 09 / 2021 - 20 / 11 / 2021
categories: project
tags:
  - typescript
  - tiktok
  - automotive
image: /assets/2021/11-try-to-build-a-wechaty-tiktok-puppet/yusihe88-avatar.webp
---
   
## Context

We hope that our product can have more ability to access IM, Therefore, the first thing to bear the brunt is to enable wechaty to stably access more IM.

Tiktok is a popular short video software all over the world, but in addition to short video, it also has strong social attributes and provides social functions including single chat and group chat.
In order to enable wechaty users to send and receive messages using tiktok, it is necessary to develop the corresponding puppet access module.

## Goal

During the internship, we hope to achieve the following objectives:
The messaging function needs to implement the most basic dingdong BOT, that is, the robot will automatically reply to Dong after receiving Ding
Need to support contact list and group list
The code needs to be hosted on GitHub

## Bot Basic information

intelligent tiktok robot based on the platform of shaking table, providing an intelligent robot customer service system with sales, marketing and after-sale services. It helps the enterprise to get customers quickly, enhance user stickiness and improve transformation through intelligent dialogue, customer service system and data analysis. It covers education, retail, insurance and other industries.

* Application Name: chatbot

* Application type: Website application

* Application category: Social communication

## Project steps

1, implement dingdong based on tiktok development platform.
2. Encapsulate the logic flow into a puppet
3. Add our newly encapsulated puppet to wechaty

## Current progress

1. Achieve DingDong bot with TikTok Api

PS：For more detailed work progress and process, please refer to the following address：
[https://github.com/juzibot/intern/issues/]
(Learn more about how to embed file/url in the post by reading this []
[https://youtu.be/N-Yswi7BnG4]

## Plans

## * Recent plan

1. Read Puppet-Mock code and try to integrate DingDong into it.
2. (optional) base on that, implements room (group) control and message. (There is no room api in TikTok doc. I tried to consult the custom service but no result so far)

## * Long term plan

1. Encapsulate the logic flow into a puppet
2. Add our newly encapsulated puppet to wechaty
