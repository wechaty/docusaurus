---
title: "Wechaty New Release Version v0.30: Lots of New Features!"
author: huan
categories: announcement
tags:
  - release
header:
  teaser: /assets/2017/wechaty-sticker.jpg
---

> Author: [Huan LI](https://github.com/huan), A Homebody ...

![Wechaty](/assets/2017/wechaty-sticker.jpg)

Wechaty v0.30 Released! We have lots of new features added and bugs fixed!

<!--more-->

## Change Log

### [v0.18.0](https://github.com/chatie/wechaty/tree/v0.18.0) (2018-07-11)

[Full Changelog](https://github.com/chatie/wechaty/compare/v0.16.0...v0.18.0)

**Implemented enhancements:**

- PuppetPadchat Upgrade TODO Lists [\#1442](https://github.com/Chatie/wechaty/issues/1442)
- Dynamic install puppet implementations instead of pre-install [\#1437](https://github.com/Chatie/wechaty/issues/1437)
- Split PuppetWechat4u as a NPM module [\#1419](https://github.com/Chatie/wechaty/issues/1419)
- PuppetPadchat: The contact.star\(\) doesn't work [\#1413](https://github.com/Chatie/wechaty/issues/1413)
- Promote PuppetPuppeteer to SOLO NPM Module wechaty-puppet-puppeteer [\#1371](https://github.com/Chatie/wechaty/issues/1371)
- Promote Puppet to SOLO NPM Module wechaty-puppet [\#1370](https://github.com/Chatie/wechaty/issues/1370)
- New Puppet: PuppetMock for Testing & Starter [\#1177](https://github.com/Chatie/wechaty/issues/1177)

**Fixed bugs:**

- Cannot detect the the environment WECHATY\_PUPPET v0.17.118  [\#1456](https://github.com/Chatie/wechaty/issues/1456)
- PuppetPadchat Server logout and login cycle average 3-5mins [\#1446](https://github.com/Chatie/wechaty/issues/1446)
- WARN PuppetPuppeteer initWatchdogForPuppet\(\) dog.on\(reset\) last food:inited, timeout:120000 [\#1439](https://github.com/Chatie/wechaty/issues/1439)
- ts-node 7.0 breaking change: Skip `files` by default [\#1383](https://github.com/Chatie/wechaty/issues/1383)
- Can not find room after add member to the room [\#1380](https://github.com/Chatie/wechaty/issues/1380)
- PuppetPadchat: `friend` value of `ContactPayload` is undefined [\#1359](https://github.com/Chatie/wechaty/issues/1359)
- WXGetContact cannot get user\_name [\#1358](https://github.com/Chatie/wechaty/issues/1358)
- leveldown::Database::Close: Program terminated with signal SIGSEGV, Segmentation fault. [\#1355](https://github.com/Chatie/wechaty/issues/1355)

**Closed issues:**

- QR Code problem under screen/xterm [\#1455](https://github.com/Chatie/wechaty/issues/1455)
- How to get the room title in v0.17 wechaty? [\#1454](https://github.com/Chatie/wechaty/issues/1454)
- should not download chromium by default [\#1451](https://github.com/Chatie/wechaty/issues/1451)
- PuppetPadChat:Send media file. [\#1436](https://github.com/Chatie/wechaty/issues/1436)
- PuppetPadchat:My wechat accou can not login. [\#1416](https://github.com/Chatie/wechaty/issues/1416)
- It reports errors when the room delete one member. [\#1415](https://github.com/Chatie/wechaty/issues/1415)
- `cannot get user\_name from raw payload: {} \[object Promise\]` Error [\#1399](https://github.com/Chatie/wechaty/issues/1399)
- Where can I see the complete API documentation of puppet-padchat, such as createRoom and Moment [\#1391](https://github.com/Chatie/wechaty/issues/1391)
- still restart [\#1378](https://github.com/Chatie/wechaty/issues/1378)
- WARN PuppetPuppeteer [\#1376](https://github.com/Chatie/wechaty/issues/1376)
- m.say\(\) repeat many many times [\#1216](https://github.com/Chatie/wechaty/issues/1216)
- room.say mention is not work [\#1185](https://github.com/Chatie/wechaty/issues/1185)
- 获取所有群 [\#1020](https://github.com/Chatie/wechaty/issues/1020)
- Any way to keep login for days? [\#988](https://github.com/Chatie/wechaty/issues/988)

**Merged pull requests:**

- update version of puppet-padchat [\#1457](https://github.com/Chatie/wechaty/pull/1457) ([windmemory](https://github.com/windmemory))
- catch error when get undifined user\_name in room [\#1408](https://github.com/Chatie/wechaty/pull/1408) ([lijiarui](https://github.com/lijiarui))
- add a more suitable time to sync Contact and Room [\#1407](https://github.com/Chatie/wechaty/pull/1407) ([lijiarui](https://github.com/lijiarui))
- mock self bot when WXGetContact\(\) return null user\_name [\#1405](https://github.com/Chatie/wechaty/pull/1405) ([lijiarui](https://github.com/lijiarui))
- sync contact and room per hour [\#1402](https://github.com/Chatie/wechaty/pull/1402) ([lijiarui](https://github.com/lijiarui))
- add `friend` in ContactPayload [\#1401](https://github.com/Chatie/wechaty/pull/1401) ([lijiarui](https://github.com/lijiarui))
- fix Contact.findaAll\(\) cannot get contact when user\_name return undifined [\#1389](https://github.com/Chatie/wechaty/pull/1389) ([lijiarui](https://github.com/lijiarui))
- fix bug that after a room add, the room id get removed from cache [\#1384](https://github.com/Chatie/wechaty/pull/1384) ([windmemory](https://github.com/windmemory))
