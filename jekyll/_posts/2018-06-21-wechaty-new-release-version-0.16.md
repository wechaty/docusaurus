---
title: Wechaty New Version 0.16(BETA, with super power) Released
author: huan
categories: announcement
tags:
  - release
  - news
image: /assets/2018/huan-wechaty-new-version-0.16.webp
---

![wechaty-release-0.16][wechaty-release-0.16]

The Wechaty has been updated to version 0.16(BETA) today. This release is a BETA release which had been improved with lots of huge refactoring since v0.14.

With v0.16, we can use the branding new Puppet System to connect Wechaty API to any kinds of Puppets, for example:

1. Mocking - [PuppetMock](https://github.com/wechaty/wechaty/tree/ed72a78b61ccc352d9bd9f5a06054a218cdd1d0d/src/puppet-mock)
1. Web API via HTTP - [PuppetWechat4U](https://github.com/wechaty/wechaty/tree/ed72a78b61ccc352d9bd9f5a06054a218cdd1d0d/src/puppet-wechat4u)
1. Web API via Browser - [PuppetPuppeteer](https://github.com/wechaty/wechaty/tree/ed72a78b61ccc352d9bd9f5a06054a218cdd1d0d/src/puppet-puppeteer) (our classic PuppetWeb)
1. Maybe a Official Account Puppet? [#1016](https://github.com/wechaty/wechaty/issues/1016)

If you are using Wechaty in a production environment, It is recormmand to skip this version and wait to the next version of 0.18 because this version is still in **testing stage** and will be continue developing as v0.19.

However, if you want to try the new Puppet like the [PuppetPadchat](https://github.com/lijiarui/wechaty-puppet-padchat) which is powered by the Wechat Pad Protocol, you can upgrade to this version and get the following benifits from it:

1. Be able to login with the newly registered Wechat Account. ([#872](https://github.com/wechaty/wechaty/issues/872))
1. Get wechat id for contacts. ([#133](https://github.com/wechaty/wechaty/issues/133))
1. Get consistent room id for rooms across login session.  ([#90](https://github.com/wechaty/wechaty/issues/90))
1. ... To be discovered by you ...

Learn more about how to use the PuppetPadchat from [Wechaty v0.15 Alpha Testing: Win32/iPad/Android/iOS/API Puppets Support are comming! #1296](https://github.com/wechaty/wechaty/issues/1296)

Please file a new issues if you meet any bug or have any feature suggestions, and PR is always welcome(with an issue created first).

Huan LI

[![Wechaty with new color in blue](https://wechaty.github.io/wechaty/images/wechaty-logo-green-en.png)](https://github.com/wechaty/wechaty)

## CHANGE LOG

> BREAKING NEWS: Wechaty logo color was changed from green to blue!

There will be a **migration guide from v0.14 to v0.16** will be published on our blog later.

### 1. BREAKING CHANGES

#### 1.1 Class Removal

- BREAKING CHANGE: v0.16 will remove `MediaMessage` class [\#1164](https://github.com/wechaty/wechaty/issues/1164)
- BREAKING CHANGES v0.16: FriendRequest class will be replaced with Friendship [\#1312](https://github.com/wechaty/wechaty/issues/1312)
- BREAKING CHANGE v0.16  Contact, FriendRequest, Message, and Room classes will not be able to instantiate directly [\#1364](https://github.com/wechaty/wechaty/issues/1364)

#### 1.2. Sync to Async

- BREAKING CHANGE: v0.16 `Room.topic()` change from Sycn to Async [\#1295](https://github.com/wechaty/wechaty/issues/1295)
- BREAKING CHANGE: v0.16 `Room.alias(contact)` change from Sycn to Async [\#1293](https://github.com/wechaty/wechaty/issues/1293)
- BREAKING CHANGE: v0.16 `Room.memberList()` change from Sycn to Async [\#1290](https://github.com/wechaty/wechaty/issues/1290)
- BREAKING CHANGE: v0.16 `Room.has(contact)` change from Sycn to Async [\#1289](https://github.com/wechaty/wechaty/issues/1289)
- BREAKING CHANGE: v0.16 `Message.mention()` change from `sync` to `async` [\#1259](https://github.com/wechaty/wechaty/issues/1259)
- BREAKING CHANGES: v0.16 `Room.member()` from `sync` to `async` [\#1258](https://github.com/wechaty/wechaty/issues/1258)

#### 1.3. Argument / Return Value

- BREAKING CHANGE v0.16  room.add return Promise\<void\> instead of return Promise\<boolean\> [\#1362](https://github.com/wechaty/wechaty/issues/1362)
- BREAKING CHANGE: v0.16 `scan` event args will be different! [\#1262](https://github.com/wechaty/wechaty/issues/1262)
- BREAKING CHANGE: first arg of `room-leave` event licener changed from `Contact` to `Contact[]` [\#723](https://github.com/wechaty/wechaty/issues/723)
- BREAKING CHANGE: v0.16 on('friend`) arguments changed! [\#1196](https://github.com/wechaty/wechaty/issues/1196)

#### 1.4. Deprecated

- BREAKING CHANGE v0.16 Wechaty.self() eprecated, use Wechaty.userSelf()  instead [\#1369](https://github.com/wechaty/wechaty/issues/1369)
- BREAKING CHANGE v0.16 Contact.personal() and Contact.official()  deprecated, use Contact.type() instead [\#1366](https://github.com/wechaty/wechaty/issues/1366)
- BREAKING CHANGE: v0.16 will replace `Message.content()` with `Message.text()` [\#1163](https://github.com/wechaty/wechaty/issues/1163)

### 2. New Features

- feat: Add `for await (const contact of room) {}` support by ES6 iterators override [\#1198](https://github.com/wechaty/wechaty/issues/1198)
- \[todo\] allow Wechaty to be multi-instance [\#518](https://github.com/wechaty/wechaty/issues/518)
- \[New Puppet\] Plan to support `WECHATY_HEAD=WECHAT4U` [\#69](https://github.com/wechaty/wechaty/issues/69)
- TravisCI Conditional Deployment [\#1211](https://github.com/wechaty/wechaty/issues/1211)
- Puppet padchat [\#1245](https://github.com/wechaty/wechaty/pull/1245) ([lijiarui](https://github.com/lijiarui))
- Multi-Instance Support [\#1159](https://github.com/wechaty/wechaty/pull/1159) ([zixia](https://github.com/huan))

### 3. Bug Fixes

- Update the peerDependencies of `rx-queue`: rxjs@6 from rxjs@5 [\#1205](https://github.com/wechaty/wechaty/issues/1205)
- How to avoid the memory leak [\#981](https://github.com/wechaty/wechaty/issues/981)
- Should throw Exception when there have API Error. [\#683](https://github.com/wechaty/wechaty/issues/683)

### 4. Enhancements

- Prevent the Floating Promise in the Async/Await Code [\#1346](https://github.com/wechaty/wechaty/issues/1346)
- Upgrade Docker Base Image from Ubuntu 17.10 to 18.04 [\#1239](https://github.com/wechaty/wechaty/issues/1239)
- Continious Deploy to NPM with @next tag when the MINOR version number is odd(in developing branch) [\#1158](https://github.com/wechaty/wechaty/issues/1158)
- Should throw Exception when there have API Error. [\#683](https://github.com/wechaty/wechaty/issues/683)
- Decouple: Make `Contact`, `Room`, `Message`, and `FriendRequest` class Abstract. [\#1160](https://github.com/wechaty/wechaty/pull/1160) ([zixia](https://github.com/huan))
- Update to node 10 in .travis.yml [\#1231](https://github.com/wechaty/wechaty/pull/1231) ([zixia](https://github.com/huan))

Learn more between version at:

- [Full Changelog](https://github.com/wechaty/wechaty/blob/main/CHANGELOG.md)
- [Source Code of Wechaty v0.16](https://github.com/wechaty/wechaty/tree/v0.16.0) (2018-06-21)
- [Commits Between v0.14 and v0.16](https://github.com/wechaty/wechaty/compare/v0.14.0...v0.16.0)

## CONTRIBUTORS

Thank you all contributors, Wechaty could not release version 0.16 without your help!

1. @[lijiarui](https://github.com/lijiarui): [\#1375](https://github.com/wechaty/wechaty/pull/1375) [\#1374](https://github.com/wechaty/wechaty/pull/1374) [\#1373](https://github.com/wechaty/wechaty/pull/1373) [\#1352](https://github.com/wechaty/wechaty/pull/1352) [\#1351](https://github.com/wechaty/wechaty/pull/1351) [\#1348](https://github.com/wechaty/wechaty/pull/1348) [\#1347](https://github.com/wechaty/wechaty/pull/1347) [\#1344](https://github.com/wechaty/wechaty/pull/1344) [\#1341](https://github.com/wechaty/wechaty/pull/1341) [\#1338](https://github.com/wechaty/wechaty/pull/1338) [\#1333](https://github.com/wechaty/wechaty/pull/1333) [\#1331](https://github.com/wechaty/wechaty/pull/1331) [\#1325](https://github.com/wechaty/wechaty/pull/1325) [\#1318](https://github.com/wechaty/wechaty/pull/1318) [\#1313](https://github.com/wechaty/wechaty/pull/1313) [\#1308](https://github.com/wechaty/wechaty/pull/1308) [\#1283](https://github.com/wechaty/wechaty/pull/1283) [\#1282](https://github.com/wechaty/wechaty/pull/1282) [\#1271](https://github.com/wechaty/wechaty/pull/1271) [\#1256](https://github.com/wechaty/wechaty/pull/1256) [\#1246](https://github.com/wechaty/wechaty/pull/1246) [\#1245](https://github.com/wechaty/wechaty/pull/1245) [\#1116](https://github.com/wechaty/wechaty/pull/1116) [\#1086](https://github.com/wechaty/wechaty/pull/1086) [\#816](https://github.com/wechaty/wechaty/pull/816) [\#812](https://github.com/wechaty/wechaty/pull/812) [\#805](https://github.com/wechaty/wechaty/pull/805) [\#798](https://github.com/wechaty/wechaty/pull/798) [\#757](https://github.com/wechaty/wechaty/pull/757) [\#729](https://github.com/wechaty/wechaty/pull/729) [\#725](https://github.com/wechaty/wechaty/pull/725) [\#651](https://github.com/wechaty/wechaty/pull/651) [\#627](https://github.com/wechaty/wechaty/pull/627) [\#619](https://github.com/wechaty/wechaty/pull/619) [\#604](https://github.com/wechaty/wechaty/pull/604) [\#515](https://github.com/wechaty/wechaty/pull/515) [\#490](https://github.com/wechaty/wechaty/pull/490) [\#440](https://github.com/wechaty/wechaty/pull/440) [\#370](https://github.com/wechaty/wechaty/pull/370) [\#364](https://github.com/wechaty/wechaty/pull/364) [\#362](https://github.com/wechaty/wechaty/pull/362) [\#328](https://github.com/wechaty/wechaty/pull/328) [\#324](https://github.com/wechaty/wechaty/pull/324) [\#323](https://github.com/wechaty/wechaty/pull/323) [\#321](https://github.com/wechaty/wechaty/pull/321) [\#318](https://github.com/wechaty/wechaty/pull/318) [\#303](https://github.com/wechaty/wechaty/pull/303) [\#292](https://github.com/wechaty/wechaty/pull/292) [\#275](https://github.com/wechaty/wechaty/pull/275) [\#266](https://github.com/wechaty/wechaty/pull/266) [\#264](https://github.com/wechaty/wechaty/pull/264) [\#249](https://github.com/wechaty/wechaty/pull/249) [\#239](https://github.com/wechaty/wechaty/pull/239) [\#234](https://github.com/wechaty/wechaty/pull/234) [\#211](https://github.com/wechaty/wechaty/pull/211) [\#199](https://github.com/wechaty/wechaty/pull/199) [\#182](https://github.com/wechaty/wechaty/pull/182) [\#162](https://github.com/wechaty/wechaty/pull/162) [\#139](https://github.com/wechaty/wechaty/pull/139) [\#112](https://github.com/wechaty/wechaty/pull/112) [\#110](https://github.com/wechaty/wechaty/pull/110) [\#93](https://github.com/wechaty/wechaty/pull/93) [\#92](https://github.com/wechaty/wechaty/pull/92) [\#91](https://github.com/wechaty/wechaty/pull/91) [\#87](https://github.com/wechaty/wechaty/pull/87) [\#38](https://github.com/wechaty/wechaty/pull/38)
1. @[zixia](https://github.com/huan): [\#1160](https://github.com/wechaty/wechaty/pull/1160) [\#1274](https://github.com/wechaty/wechaty/pull/1274) [\#1273](https://github.com/wechaty/wechaty/pull/1273) [\#1260](https://github.com/wechaty/wechaty/pull/1260) [\#1232](https://github.com/wechaty/wechaty/pull/1232) [\#1231](https://github.com/wechaty/wechaty/pull/1231) [\#1190](https://github.com/wechaty/wechaty/pull/1190) [\#1159](https://github.com/wechaty/wechaty/pull/1159) [\#1143](https://github.com/wechaty/wechaty/pull/1143) [\#1131](https://github.com/wechaty/wechaty/pull/1131) [\#1083](https://github.com/wechaty/wechaty/pull/1083) [\#1075](https://github.com/wechaty/wechaty/pull/1075) [\#1074](https://github.com/wechaty/wechaty/pull/1074) [\#1073](https://github.com/wechaty/wechaty/pull/1073) [\#1072](https://github.com/wechaty/wechaty/pull/1072) [\#1071](https://github.com/wechaty/wechaty/pull/1071) [\#860](https://github.com/wechaty/wechaty/pull/860) [\#854](https://github.com/wechaty/wechaty/pull/854) [\#841](https://github.com/wechaty/wechaty/pull/841) [\#831](https://github.com/wechaty/wechaty/pull/831) [\#810](https://github.com/wechaty/wechaty/pull/810) [\#644](https://github.com/wechaty/wechaty/pull/644) [\#643](https://github.com/wechaty/wechaty/pull/643) [\#608](https://github.com/wechaty/wechaty/pull/608) [\#569](https://github.com/wechaty/wechaty/pull/569) [\#560](https://github.com/wechaty/wechaty/pull/560) [\#542](https://github.com/wechaty/wechaty/pull/542) [\#496](https://github.com/wechaty/wechaty/pull/496) [\#495](https://github.com/wechaty/wechaty/pull/495) [\#469](https://github.com/wechaty/wechaty/pull/469) [\#462](https://github.com/wechaty/wechaty/pull/462) [\#455](https://github.com/wechaty/wechaty/pull/455) [\#449](https://github.com/wechaty/wechaty/pull/449) [\#396](https://github.com/wechaty/wechaty/pull/396) [\#351](https://github.com/wechaty/wechaty/pull/351) [\#317](https://github.com/wechaty/wechaty/pull/317) [\#316](https://github.com/wechaty/wechaty/pull/316) [\#315](https://github.com/wechaty/wechaty/pull/315) [\#314](https://github.com/wechaty/wechaty/pull/314) [\#313](https://github.com/wechaty/wechaty/pull/313) [\#312](https://github.com/wechaty/wechaty/pull/312) [\#311](https://github.com/wechaty/wechaty/pull/311) [\#168](https://github.com/wechaty/wechaty/pull/168) [\#158](https://github.com/wechaty/wechaty/pull/158) [\#149](https://github.com/wechaty/wechaty/pull/149) [\#146](https://github.com/wechaty/wechaty/pull/146) [\#143](https://github.com/wechaty/wechaty/pull/143) [\#142](https://github.com/wechaty/wechaty/pull/142) [\#141](https://github.com/wechaty/wechaty/pull/141) [\#25](https://github.com/wechaty/wechaty/pull/25)
1. @[mukaiu](https://github.com/mukaiu): [\#1089](https://github.com/wechaty/wechaty/pull/1089) [\#962](https://github.com/wechaty/wechaty/pull/962) [\#337](https://github.com/wechaty/wechaty/pull/337) [\#470](https://github.com/wechaty/wechaty/pull/470) [\#438](https://github.com/wechaty/wechaty/pull/438) [\#421](https://github.com/wechaty/wechaty/pull/421) [\#420](https://github.com/wechaty/wechaty/pull/420) [\#415](https://github.com/wechaty/wechaty/pull/415) [\#376](https://github.com/wechaty/wechaty/pull/376)
1. @[binsee](https://github.com/binsee): [\#844](https://github.com/wechaty/wechaty/pull/844) [\#811](https://github.com/wechaty/wechaty/pull/811) [\#771](https://github.com/wechaty/wechaty/pull/771) [\#744](https://github.com/wechaty/wechaty/pull/744) [\#727](https://github.com/wechaty/wechaty/pull/727) [\#714](https://github.com/wechaty/wechaty/pull/714)
1. @[JasLin](https://github.com/JasLin): [\#404](https://github.com/wechaty/wechaty/pull/404) [\#358](https://github.com/wechaty/wechaty/pull/358) [\#105](https://github.com/wechaty/wechaty/pull/105) [\#100](https://github.com/wechaty/wechaty/pull/100) [\#78](https://github.com/wechaty/wechaty/pull/78) [\#76](https://github.com/wechaty/wechaty/pull/76)
1. @[xinbenlv](https://github.com/xinbenlv): [\#1017](https://github.com/wechaty/wechaty/pull/1017) [\#935](https://github.com/wechaty/wechaty/pull/935) [\#388](https://github.com/wechaty/wechaty/pull/388) [\#361](https://github.com/wechaty/wechaty/pull/361) [\#280](https://github.com/wechaty/wechaty/pull/280)
1. @[suntong](https://github.com/suntong): [\#1129](https://github.com/wechaty/wechaty/pull/1129) [\#1123](https://github.com/wechaty/wechaty/pull/1123)
1. @[hczhcz](https://github.com/hczhcz): [\#684](https://github.com/wechaty/wechaty/pull/684) [\#640](https://github.com/wechaty/wechaty/pull/640)
1. @[zhenyong](https://github.com/zhenyong): [\#770](https://github.com/wechaty/wechaty/pull/770)
1. @[IdiosApps](https://github.com/IdiosApps): [\#1087](https://github.com/wechaty/wechaty/pull/1087)
1. @[hiwanz](https://github.com/hiwanz): [\#1036](https://github.com/wechaty/wechaty/pull/1036)
1. @[TingYinHelen](https://github.com/TingYinHelen): [\#605](https://github.com/wechaty/wechaty/pull/605)
1. @[imerse](https://github.com/imerse): [\#578](https://github.com/wechaty/wechaty/pull/578)
1. @[FlyingBlazer](https://github.com/FlyingBlazer): [\#531](https://github.com/wechaty/wechaty/pull/531)
1. @[xjchengo](https://github.com/xjchengo): [\#416](https://github.com/wechaty/wechaty/pull/416)
1. @[htoooth](https://github.com/htoooth): [\#1014](https://github.com/wechaty/wechaty/pull/1014)
1. @[ax4](https://github.com/ax4): [\#380](https://github.com/wechaty/wechaty/pull/380)
1. @[Gcaufy](https://github.com/Gcaufy): [\#310](https://github.com/wechaty/wechaty/pull/310)
1. @[cherry-geqi](https://github.com/cherry-geqi): [\#97](https://github.com/wechaty/wechaty/pull/97)
1. @[lpmi-13](https://github.com/lpmi-13): [\#681](https://github.com/wechaty/wechaty/pull/681)

[wechaty-release-0.16]: /assets/2018/huan-wechaty-new-version-0.16.webp
