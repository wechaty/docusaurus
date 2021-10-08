---
title: "Wechaty New Release Version v0.18: SLOC from 27,630 to 7,817"
author: huan
categories: announcement
tags:
  - release
  - news
  - featured
image: /assets/2018/huan-reduce-weight.webp
---

![reduce weight](/assets/2018/huan-reduce-weight.webp)

> Picture Credit: [Thumber.com](https://www.tumblr.com/search/the%20fastest%20way%20to%20lose%20weight)

All about Wechaty v0.18 is to: Reduce Weight!

With v0.17, we have 27,630 source line of code with 377 unit tests(you can check it out at [here](https://github.com/wechaty/wechaty/blob/01bfdf96c8023f44fa2ad2762f8f12fee875e42e/tests/README.md) if you are interested).

Start from v0.18, we have 7,817 lines of code left(v0.17 is 353% of this!), with 10+ related npm modules.

Let's back to May 2016, when the first version of Wechaty was published, it only contains thousands of lines of the code, and at the end of the year 2016, we have about 10,000 lines of the code. (you can read our [blog](https://wechaty.github.io/welcome-to-wechaty/) at this time)

As the time passed by in 2017 & 2018, we added more features to Wechaty, like send attachment files, support WeChat protocol other than web like ipad, which means we write more and more codes in Wechaty repository... at last we get almost 30,000 lines of the code, and to be precise: 27,630. (with 377 unit tests, you can check it out at [here](https://github.com/wechaty/wechaty/blob/01bfdf96c8023f44fa2ad2762f8f12fee875e42e/tests/README.md) if you are interested)

Is that fat? 30,000 lines of the code, is not too much, but it is not a small number too. After we finished abstracting the puppet base class after v0.16, it seems we have very good reason to begin reducing weight:

1. Abstract Puppet Class need to be imported by every puppet implementations, and it should to be a solo npm module, with good version management.
1. Every Puppet Implentation Class is better to be a solo npm module, becasue we can only install the required source code that we needed.

So at this version (v0.18), we have the follow npm modules that splited out from Wechaty:

## WECHATY PUPPET LIST

### 1. For Puppet User

| Stage   | Name      | Wechaty Puppet | Backend | Version |
| :---    | :---      | :---           | :---    | :---    |
| Release  | puppeteer | [PuppetPuppeteer](https://github.com/wechaty/wechaty-puppet-puppeteer) | Web API via Browser Hooking | ![PuppetPuppeteer](https://badge.fury.io/js/wechaty-puppet-puppeteer.svg) |
| Beta    | padchat   | [PuppetPadchat](https://github.com/lijiarui/wechaty-puppet-padchat) | iPad Protocol | ![PuppetPadchat](https://badge.fury.io/js/wechaty-puppet-padchat.svg) |
| Alpha   | wechat4u  | [PuppetWechat4u](https://github.com/wechaty/wechaty-puppet-wechat4u) | Web API via HTTP | ![PuppetWechat4u](https://badge.fury.io/js/wechaty-puppet-wechat4u.svg) |
| Alpha   | ioscat    | [PuppetIoscat](https://github.com/linyimin-bupt/wechaty-puppet-ioscat) (WIP) | iPhone App Hooking | ![PuppetIoscat](https://badge.fury.io/js/wechaty-puppet-ioscat.svg) |
| Alpha   | service    | [PuppetService](https://github.com/wechaty/wechaty-puppet-service) | Chatie Cloud | ![PuppetService](https://badge.fury.io/js/wechaty-puppet-service.svg) |
| TBW | Android | | Android Hook | 0.0.0 |
| TBW | Win32   | | Win32 Hook   | 0.0.0 |

### 2. For Puppet Builder

| Stage   | Name      | Wechaty Puppet | Backend | Version |
| :---    | :---      | :---           | :---    | :---    |
| Release | N/A       | [Puppet](https://github.com/wechaty/wechaty-puppet) | Abstract Base Class | ![Puppet](https://badge.fury.io/js/wechaty-puppet.svg) |
| Release | mock      | [PuppetMock](https://github.com/wechaty/wechaty-puppet-mock) | Mocking | ![PuppetMock](https://badge.fury.io/js/wechaty-puppet-mock.svg) |

If we count the other npm modules that split out from Wechaty before, we can also list them as the following:

1. [@chatie/angular](https://www.npmjs.com/package/@chatie/angular): Wechaty Component NgModule for Angular
1. [@chatie/graphql](https://www.npmjs.com/package/@chatie/graphql): GraphQL Schema, Providers and APIs for Chatie
1. [@chatie/grpc](https://www.npmjs.com/package/@chatie/grpc): gRPC for Chatie
1. [auth-angular](https://www.npmjs.com/package/auth-angular): An Angular NgModule That Provide Auth0/Authing RxJS-ified Service with Lock UI
1. [botbuilder-wechaty-connector](https://www.npmjs.com/package/botbuilder-wechaty-connector): Microsoft Bot Framework v3 Connector for Wechat PERSONAL Account
1. [Brolog](https://www.npmjs.com/package/brolog): Brolog is Logger for Angular in Browser like Npmlog.
1. [cloneClass](https://www.npmjs.com/package/clone-class): Clone an ES6 Class as Another Class Name for Isolating Class Static Properties.
1. [finis](https://www.npmjs.com/package/finis): Node.js program finisher - run your last callback with `exit code` and `signal name` as arguments
1. [FileBox](https://www.npmjs.com/package/file-box): Pack a File into Box for easy move/transfer between servers no matter of where it is.(local, remote url, or cloud storage)
1. [FlashStore](https://www.npmjs.com/package/flash-store): FlashStore is a Key-Value persistent, storage with easy to use ES6 Map-like API(both Async and Sync support), powered by LevelDB and TypeScript.
1. [hotImport](https://www.npmjs.com/package/hot-import): Hot Module Replacement(HMR) for Node.js
1. [Listag](https://www.npmjs.com/package/listag): List Manager for Array Operations & Query by Tag
1. [MemoryCard](https://www.npmjs.com/package/memory-card): Memory Card is an Easy to Use Key/Value Store Implements ES6 Map with Async API, with Swagger & Serialization Support.
1. [RxQueue](https://www.npmjs.com/package/rx-queue): Easy to Use RxJS Queue for Throttle/Debounce/Delay/DelayExecute
1. [StateSwitch](https://www.npmjs.com/package/state-switch): State Switch is a Monitor/Guard for Managing Your Async Operations.
1. [Watchdog](https://www.npmjs.com/package/watchdog): An Timer used to Detect and Recover from Malfunctions

Hmm... lots of them aha? So how can we keep all of them in one repository and manage them easily? It must be a nightmare!

So at last, as we published the v0.18, we only left 3,853 source lines of the code in Wechaty repository(7,817 physical lines). We can see a timeline from the history:

### Source Lines of Code for Wechaty

| Date | SLOC | Factor(%) |
| :--- | :--- | ---: |
| 2016.5 | 3,000 | 38% |
| 2017.1 | 10,000 | 128% |
| 2018.1 | 20,000 | 256% |
| 2018.6 | 27,630 | 353% |
| 2018.7 | 7,817 | 100% |

From 27,630 to 7,817, we are 72% off than before, cheers!

## Change Log

### [v0.18.0](https://github.com/wechaty/wechaty/tree/v0.18.0) (2018-07-11)

[Full Changelog](https://github.com/wechaty/wechaty/compare/v0.16.0...v0.18.0)

**Implemented enhancements:**

- PuppetPadchat Upgrade TODO Lists [\#1442](https://github.com/wechaty/wechaty/issues/1442)
- Dynamic install puppet implementations instead of pre-install [\#1437](https://github.com/wechaty/wechaty/issues/1437)
- Split PuppetWechat4u as a NPM module [\#1419](https://github.com/wechaty/wechaty/issues/1419)
- PuppetPadchat: The contact.star\(\) doesn't work [\#1413](https://github.com/wechaty/wechaty/issues/1413)
- Promote PuppetPuppeteer to SOLO NPM Module wechaty-puppet-puppeteer [\#1371](https://github.com/wechaty/wechaty/issues/1371)
- Promote Puppet to SOLO NPM Module wechaty-puppet [\#1370](https://github.com/wechaty/wechaty/issues/1370)
- New Puppet: PuppetMock for Testing & Starter [\#1177](https://github.com/wechaty/wechaty/issues/1177)

**Fixed bugs:**

- Cannot detect the the environment WECHATY\_PUPPET v0.17.118  [\#1456](https://github.com/wechaty/wechaty/issues/1456)
- PuppetPadchat Server logout and login cycle average 3-5mins [\#1446](https://github.com/wechaty/wechaty/issues/1446)
- WARN PuppetPuppeteer initWatchdogForPuppet\(\) dog.on\(reset\) last food:inited, timeout:120000 [\#1439](https://github.com/wechaty/wechaty/issues/1439)
- ts-node 7.0 breaking change: Skip `files` by default [\#1383](https://github.com/wechaty/wechaty/issues/1383)
- Can not find room after add member to the room [\#1380](https://github.com/wechaty/wechaty/issues/1380)
- PuppetPadchat: `friend` value of `ContactPayload` is undefined [\#1359](https://github.com/wechaty/wechaty/issues/1359)
- WXGetContact cannot get user\_name [\#1358](https://github.com/wechaty/wechaty/issues/1358)
- leveldown::Database::Close: Program terminated with signal SIGSEGV, Segmentation fault. [\#1355](https://github.com/wechaty/wechaty/issues/1355)

**Closed issues:**

- QR Code problem under screen/xterm [\#1455](https://github.com/wechaty/wechaty/issues/1455)
- How to get the room title in v0.17 wechaty? [\#1454](https://github.com/wechaty/wechaty/issues/1454)
- should not download chromium by default [\#1451](https://github.com/wechaty/wechaty/issues/1451)
- PuppetPadChat:Send media file. [\#1436](https://github.com/wechaty/wechaty/issues/1436)
- PuppetPadchat:My wechat accou can not login. [\#1416](https://github.com/wechaty/wechaty/issues/1416)
- It reports errors when the room delete one member. [\#1415](https://github.com/wechaty/wechaty/issues/1415)
- `cannot get user\_name from raw payload: {} \[object Promise\]` Error [\#1399](https://github.com/wechaty/wechaty/issues/1399)
- Where can I see the complete API documentation of puppet-padchat, such as createRoom and Moment [\#1391](https://github.com/wechaty/wechaty/issues/1391)
- still restart [\#1378](https://github.com/wechaty/wechaty/issues/1378)
- WARN PuppetPuppeteer [\#1376](https://github.com/wechaty/wechaty/issues/1376)
- m.say\(\) repeat many many times [\#1216](https://github.com/wechaty/wechaty/issues/1216)
- room.say mention is not work [\#1185](https://github.com/wechaty/wechaty/issues/1185)
- 获取所有群 [\#1020](https://github.com/wechaty/wechaty/issues/1020)
- Any way to keep login for days? [\#988](https://github.com/wechaty/wechaty/issues/988)

**Merged pull requests:**

- update version of puppet-padchat [\#1457](https://github.com/wechaty/wechaty/pull/1457) ([windmemory](https://github.com/windmemory))
- catch error when get undifined user\_name in room [\#1408](https://github.com/wechaty/wechaty/pull/1408) ([lijiarui](https://github.com/lijiarui))
- add a more suitable time to sync Contact and Room [\#1407](https://github.com/wechaty/wechaty/pull/1407) ([lijiarui](https://github.com/lijiarui))
- mock self bot when WXGetContact\(\) return null user\_name [\#1405](https://github.com/wechaty/wechaty/pull/1405) ([lijiarui](https://github.com/lijiarui))
- sync contact and room per hour [\#1402](https://github.com/wechaty/wechaty/pull/1402) ([lijiarui](https://github.com/lijiarui))
- add `friend` in ContactPayload [\#1401](https://github.com/wechaty/wechaty/pull/1401) ([lijiarui](https://github.com/lijiarui))
- fix Contact.findaAll\(\) cannot get contact when user\_name return undifined [\#1389](https://github.com/wechaty/wechaty/pull/1389) ([lijiarui](https://github.com/lijiarui))
- fix bug that after a room add, the room id get removed from cache [\#1384](https://github.com/wechaty/wechaty/pull/1384) ([windmemory](https://github.com/windmemory))
