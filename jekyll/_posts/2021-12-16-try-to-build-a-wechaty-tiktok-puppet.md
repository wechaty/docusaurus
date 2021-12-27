---
title: Design and implementation of wechaty puppet module based on Tiktok
author: yusihe88
categories: project
tags:
  - puppet-tiktok
  - tiktok
  - automotive
image: /assets/2021/12-try-to-build-a-wechaty-tiktok-puppet/wechaty-tiktok-puppet.webp

---
   
## Context

* author: Sihe Yu

* mentor：nan Wang

* For more detailed work progress and process, please refer to the following address：
[基于TIKTOK的 Wechaty puppet 模块设计与实现](https://github.com/juzibot/intern/issues/3)

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

1. implement dingdong based on tiktok development platform.
2. Encapsulate the logic flow into a puppet
3. Add our newly encapsulated puppet to wechaty

## Current progress

1. Achieve DingDong bot with TikTok Api
2. Encapsulate part of the logic into Puppet

## Proposal Video Presentation

{% include iframe.html src="https://youtu.be/1UJnoI4nsVQ" %}

## Proposal Slides

{% include iframe.html src="/assets/2021/12-try-to-build-a-wechaty-tiktok-puppet/mid-term-ppt.pdf" %}

## Plans

1. It is expected that the open platform of Douyin will give a reply within three days
Puppet's dingdong logic is expected to be implemented next week
2. Improve the code, call as many available interfaces as possible, familiar with puppet source code
3. Invoke puppet ding-dong logic using wechaty
