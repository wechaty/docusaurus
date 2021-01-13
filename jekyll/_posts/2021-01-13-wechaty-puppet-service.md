---
title: "Introducing Wechaty Puppet Service (Providers)"
published: false
author: huan
categories: announcement
tags:
  - puppet-service
  - news
image: /assets/2021/01-wechaty-puppet-service/5-puppets.jpg
---

## Wechaty Puppet Service

Wechaty is heavily dependeing on the RPA (Robotic Progress Automation) technology to convert the IM software to a software module.

When we published Wechaty on May 2016, we were using WebDriver/Puppeteer([wechaty-puppet-puppeteer](https://github.com/wechaty/wechaty-puppet-puppeteer)) to hook to the Web WeChat code, but later the [Web Protocol has been deprecated](https://github.com/wechaty/wechaty/issues/603) and we have to find other ways to get the job done.

Beyonds the Web Protocol, the community have tried many technologies in the past years, such as:

1. Pad Protocol
    1. [PadChat](https://www.npmjs.com/package/wechaty-puppet-padchat)
    1. [PadPro](https://www.npmjs.com/package/wechaty-puppet-padpro)
    1. [PadPlus](https://github.com/wechaty/wechaty-puppet-padplus)
1. App Hook: [IosBird](https://github.com/juzibot/wechaty-puppet-iosbird)
1. Mac Hook: [MacPro](https://github.com/juzibot/wechaty-puppet-macpro)
1. Windows Hook
    1. [Donut](https://github.com/juzibot/donut-tester)
    1. [WxWork](https://github.com/juzibot/wxwork-tester)

As you know, they are most relies on the RPA technic, which is hard to deploy.

It always not easy to setup an environment when it complicated
And one more thing, Wechaty Puppet Service Providers
