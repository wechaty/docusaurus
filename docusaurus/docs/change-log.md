---
title: Change Log
---

> BREAKING NEWS: Wechaty logo color was changed from green to blue!

There will be a **migration guide from v0.14 to v0.16** will be published on our blog later.

## 1. BREAKING CHANGES <a id="1-breaking-changes"></a>

### 1.1 Class Removal <a id="1-1-class-removal"></a>

* BREAKING CHANGE: v0.16 will remove `MediaMessage` class [\#1164](https://github.com/wechaty/wechaty/issues/1164)​
* BREAKING CHANGES v0.16: FriendRequest class will be replaced with Friendship [\#1312](https://github.com/wechaty/wechaty/issues/1312)​
* BREAKING CHANGE v0.16 Contact, FriendRequest, Message, and Room classes will not be able to instantiate directly [\#1364](https://github.com/wechaty/wechaty/issues/1364)​

### 1.2. Sync to Async <a id="1-2-sync-to-async"></a>

* BREAKING CHANGE: v0.16 `Room.topic()` change from Sycn to Async [\#1295](https://github.com/wechaty/wechaty/issues/1295)​
* BREAKING CHANGE: v0.16 `Room.alias(contact)` change from Sycn to Async [\#1293](https://github.com/wechaty/wechaty/issues/1293)​
* BREAKING CHANGE: v0.16 `Room.memberList()` change from Sycn to Async [\#1290](https://github.com/wechaty/wechaty/issues/1290)​
* BREAKING CHANGE: v0.16 `Room.has(contact)` change from Sycn to Async [\#1289](https://github.com/wechaty/wechaty/issues/1289)​
* BREAKING CHANGE: v0.16 `Message.mention()` change from `sync` to `async` [\#1259](https://github.com/wechaty/wechaty/issues/1259)​
* BREAKING CHANGES: v0.16 `Room.member()` from `sync` to `async` [\#1258](https://github.com/wechaty/wechaty/issues/1258)​

### 1.3. Argument / Return Value <a id="1-3-argument-return-value"></a>

* BREAKING CHANGE v0.16 room.add return Promise instead of return Promise [\#1362](https://github.com/wechaty/wechaty/issues/1362)​
* BREAKING CHANGE: v0.16 `scan` event args will be different! [\#1262](https://github.com/wechaty/wechaty/issues/1262)​
* BREAKING CHANGE: first arg of `room-leave` event licener changed from `Contact` to `Contact[]` [\#723](https://github.com/wechaty/wechaty/issues/723)​
* BREAKING CHANGE: v0.16 on\('friend\`\) arguments changed! [\#1196](https://github.com/wechaty/wechaty/issues/1196)​

### 1.4. Deprecated <a id="1-4-deprecated"></a>

* BREAKING CHANGE v0.16 Wechaty.self\(\) eprecated, use Wechaty.userSelf\(\) instead [\#1369](https://github.com/wechaty/wechaty/issues/1369)​
* BREAKING CHANGE v0.16 Contact.personal\(\) and Contact.official\(\) deprecated, use Contact.type\(\) instead [\#1366](https://github.com/wechaty/wechaty/issues/1366)​
* BREAKING CHANGE: v0.16 will replace `Message.content()` with `Message.text()` [\#1163](https://github.com/wechaty/wechaty/issues/1163)​

## 2. New Features <a id="2-new-features"></a>

* feat: Add `for await (const contact of room) {}` support by ES6 iterators override [\#1198](https://github.com/wechaty/wechaty/issues/1198)​
* \[todo\] allow Wechaty to be multi-instance [\#518](https://github.com/wechaty/wechaty/issues/518)​
* \[New Puppet\] Plan to support `WECHATY_HEAD=WECHAT4U` [\#69](https://github.com/wechaty/wechaty/issues/69)​
* TravisCI Conditional Deployment [\#1211](https://github.com/wechaty/wechaty/issues/1211)​
* Puppet padchat [\#1245](https://github.com/wechaty/wechaty/pull/1245) \([lijiarui](https://github.com/lijiarui)\)
* Multi-Instance Support [\#1159](https://github.com/wechaty/wechaty/pull/1159) \([zixia](https://github.com/zixia)\)

## 3. Bug Fixes <a id="3-bug-fixes"></a>

* Update the peerDependencies of `rx-queue`: rxjs@6 from rxjs@5 [\#1205](https://github.com/wechaty/wechaty/issues/1205)​
* How to avoid the memory leak [\#981](https://github.com/wechaty/wechaty/issues/981)​
* Should throw Exception when there have API Error. [\#683](https://github.com/wechaty/wechaty/issues/683)​

## 4. Enhancements <a id="4-enhancements"></a>

* Prevent the Floating Promise in the Async/Await Code [\#1346](https://github.com/wechaty/wechaty/issues/1346)​
* Upgrade Docker Base Image from Ubuntu 17.10 to 18.04 [\#1239](https://github.com/wechaty/wechaty/issues/1239)​
* Continious Deploy to NPM with @next tag when the MINOR version number is odd\(in developing branch\) [\#1158](https://github.com/wechaty/wechaty/issues/1158)​
* Should throw Exception when there have API Error. [\#683](https://github.com/wechaty/wechaty/issues/683)​
* Decouple: Make `Contact`, `Room`, `Message`, and `FriendRequest` class Abstract. [\#1160](https://github.com/wechaty/wechaty/pull/1160) \([zixia](https://github.com/zixia)\)
* Update to node 10 in .travis.yml [\#1231](https://github.com/wechaty/wechaty/pull/1231) \([zixia](https://github.com/zixia)\)

Learn more between version at:

* ​[Full Changelog](https://github.com/wechaty/wechaty/blob/master/CHANGELOG.md)​
* ​[Source Code of Wechaty v0.16](https://github.com/wechaty/wechaty/tree/v0.16.0) \(2018-06-21\)
* ​[Commits Between v0.14 and v0.16](https://github.com/wechaty/wechaty/compare/v0.14.0...v0.16.0)​

### v0.14 - Minor Bug Fixes <a id="v-0-14-minor-bug-fixes"></a>

​[v0.14.0](https://github.com/wechaty/wechaty/releases/tag/v0.14.0) release this on 2018-04-15, 1161 commits to master since this release

### v0.12 - All About Refactoring <a id="v-0-12-all-about-refactoring"></a>

​[v0.12.0](https://github.com/wechaty/wechaty/releases/tag/v0.12.0) release this on 2017-10-31, 1475 commits to master since this release

### v0.9 - Huge Improvements with lots of Bug Fixes and Feature Enhancements <a id="v-0-9-huge-improvements-with-lots-of-bug-fixes-and-feature-enhancements"></a>

​[v0.9.0](https://github.com/wechaty/wechaty/releases/tag/v0.9.0) release this on 2017-10-04, 1722 commits to master since this release

### v0.7 - A Brand New Version for Production <a id="v-0-7-a-brand-new-version-for-production"></a>

​[v0.7.0](https://github.com/wechaty/wechaty/releases/tag/v0.7.0) release this on 2016-12-29, 3041 commits to master since this release

### v0.6 - DevOps CI/CD with Docker&NPM <a id="v-0-6-devops-ci-cd-with-docker-and-npm"></a>

​[v0.6.0](https://github.com/wechaty/wechaty/releases/tag/v0.6.0) release this on 2016-11-11, 3359 commits to master since this release

### v0.5.22 - Enhanced Media Message & Docker <a id="v-0-5-22-enhanced-media-message-and-docker"></a>

​[v0.5.22](https://github.com/wechaty/wechaty/releases/tag/v0.5.22) release this on 2016-11-10, 3378 commits to master since this release

### v0.5.9 - 1st Recommend Version for Docker Image & NPM Module <a id="v-0-5-9-1st-recommend-version-for-docker-image-and-npm-module"></a>

​[v0.5.9](https://github.com/wechaty/wechaty/releases/tag/v0.5.9) release this on 2016-11-07, 3431 commits to master since this release

### v0.5.1 - The first TypeScript version with fully dockerized runtime support <a id="v-0-5-1-the-first-typescript-version-with-fully-dockerized-runtime-support"></a>

​[v0.5.1](https://github.com/wechaty/wechaty/releases/tag/v0.5.1) release this on 2016-11-03, 3573 commits to master since this release

### v0.4.0 - Supported Room Operate & Friend Request, with Cloud Manager Backend. <a id="v-0-4-0-supported-room-operate-and-friend-request-with-cloud-manager-backend"></a>

​[v0.4.0](https://github.com/wechaty/wechaty/releases/tag/v0.4.0) release this on 2016-10-10, 3848 commits to master since this release

### v0.2.0 - Cloudify Wechaty: Start manage your bot on [https://chatie.io](https://chatie.io/)​ <a id="v-0-2-0-cloudify-wechaty-start-manage-your-bot-on-https-chatie-io"></a>

​[v0.2.0](https://github.com/wechaty/wechaty/releases/tag/v0.2.0) release this on 2016-06-29, 4315 commits to master since this release

### v0.1.1 - Save/Restore Wechat Session <a id="v-0-1-1-save-restore-wechat-session"></a>

​[v0.1.1](https://github.com/wechaty/wechaty/releases/tag/v0.1.1) release this on 2016-06-10, 4450 commits to master since this release

### v0.1.1 - Perfect worked base on chrome <a id="v-0-1-1-perfect-worked-base-on-chrome"></a>

​[v0.0.6](https://github.com/wechaty/wechaty/releases/tag/v0.0.6) release this on 2016-05-16, 4541 commits to master since this release

### v0.0.5 - Wechaty baby born! <a id="v-0-0-5-wechaty-baby-born"></a>

​[v0.0.5](https://github.com/wechaty/wechaty/releases/tag/v0.0.5) release this on 2016-05-11, 4580 commits to master since this release

See more in [releases](https://github.com/wechaty/wechaty/releases)​

## CHANGELOG <a id="changelog"></a>

### v0.16.0 2018-06-21 <a id="v-0-16-0-2018-06-21"></a>

​[v0.16.0](https://github.com/wechaty/wechaty/tree/v0.16.0) \(2018-06-21\)[Full Changelog](https://github.com/wechaty/wechaty/compare/v0.14.0...v0.16.0)​

**Implemented enhancements:**

* Unable to start multiple instances with padchat puppet [\#1367](https://github.com/wechaty/wechaty/issues/1367)​
* Prevent the Floating Promise in the Async/Await Code [\#1346](https://github.com/wechaty/wechaty/issues/1346)​
* BREAKING CHANGES v0.16: FriendRequest class will be replaced with Friendship [\#1312](https://github.com/wechaty/wechaty/issues/1312)​
* feat: PuppetPadchat can set avatar for userself support. [\#1298](https://github.com/wechaty/wechaty/issues/1298)​
* BREAKING CHANGE: v0.16 `Room.topic\(\)` change from Sycn to Async [\#1295](https://github.com/wechaty/wechaty/issues/1295)​
* BREAKING CHANGE: v0.16 `Room.alias\(contact\)` change from Sycn to Async [\#1293](https://github.com/wechaty/wechaty/issues/1293)​
* BREAKING CHANGE: v0.16 `Room.memberList\(\)` change from Sycn to Async [\#1290](https://github.com/wechaty/wechaty/issues/1290)​
* BREAKING CHANGE: v0.16 `Room.has\(contact\)` change from Sycn to Async [\#1289](https://github.com/wechaty/wechaty/issues/1289)​
* BREAKING CHANGE: v0.16 `scan` event args will be different! [\#1262](https://github.com/wechaty/wechaty/issues/1262)​
* BREAKING CHANGE: v0.16 `Message.mention\(\)` change from `sync` to `async` [\#1259](https://github.com/wechaty/wechaty/issues/1259)​
* BREAKING CHANGES: v0.16 `Room.member\(\)` from `sync` to `async` [\#1258](https://github.com/wechaty/wechaty/issues/1258)​
* Promote `Profile` class to a solo NPM module: `MemoryCard` [\#1257](https://github.com/wechaty/wechaty/issues/1257)​
* rewrite roomFindAll\(\) [\#1255](https://github.com/wechaty/wechaty/issues/1255)​
* function friendRequestAccept [\#1254](https://github.com/wechaty/wechaty/issues/1254)​
* read messageRawPayload by id [\#1253](https://github.com/wechaty/wechaty/issues/1253)​
* function friendRequestSend [\#1252](https://github.com/wechaty/wechaty/issues/1252)​
* rewrite contactFindAll\(\) [\#1251](https://github.com/wechaty/wechaty/issues/1251)​
* Upgrade Docker Base Image from Ubuntu 17.10 to 18.04 [\#1239](https://github.com/wechaty/wechaty/issues/1239)​
* NPM Switch: `promise-retry` to replace `retry-promise` [\#1235](https://github.com/wechaty/wechaty/issues/1235)​
* Add unit test to puppet accessory [\#1219](https://github.com/wechaty/wechaty/issues/1219)​
* Use browser implementation of Node.js' stream library [\#1201](https://github.com/wechaty/wechaty/issues/1201)​
* feat: Add `for await \(const contact of room\) {}` support by ES6 iterators override [\#1198](https://github.com/wechaty/wechaty/issues/1198)​
* BREAKING CHANGE: v0.16 on\('friend\`\) arguments changed! [\#1196](https://github.com/wechaty/wechaty/issues/1196)​
* TypeScript Strict Mode: set `noImplicitAny` to `true` [\#1180](https://github.com/wechaty/wechaty/issues/1180)​
* Generic for Return Child Class Type in Abstract Class Implementation [\#1178](https://github.com/wechaty/wechaty/issues/1178)​
* BREAKING CHANGE: v0.16 Message.ext\(\) return '.ext' instead of 'ext' before [\#1168](https://github.com/wechaty/wechaty/issues/1168)​
* Encapsulated `Contact`, `Messag`, `FriendRequest`, and `Room` into `PuppetWeb` [\#1166](https://github.com/wechaty/wechaty/issues/1166)​
* BREAKING CHANGE: v0.16 will remove `MediaMessage` class [\#1164](https://github.com/wechaty/wechaty/issues/1164)​
* BREAKING CHANGE: v0.16 will replace `Message.content\(\)` with `Message.text\(\)` [\#1163](https://github.com/wechaty/wechaty/issues/1163)​
* Continious Deploy to NPM with @next tag when the MINOR version number is odd\(in developing branch\) [\#1158](https://github.com/wechaty/wechaty/issues/1158)​
* BREAKING CHANGE: first arg of `room-leave` event licener changed from `Contact` to `Contact\[\]` [\#723](https://github.com/wechaty/wechaty/issues/723)​
* Should throw Exception when there have API Error. [\#683](https://github.com/wechaty/wechaty/issues/683)​
* delay time for all function\(method\) that calls Tencent API [\#596](https://github.com/wechaty/wechaty/issues/596)​
* \[todo\] allow Wechaty to be multi-instance [\#518](https://github.com/wechaty/wechaty/issues/518)​
* \[New Puppet\] Plan to support `WECHATY\_HEAD=WECHAT4U` [\#69](https://github.com/wechaty/wechaty/issues/69)​
* Decouple: Make `Contact`, `Room`, `Message`, and `FriendRequest` class Abstract. [\#1160](https://github.com/wechaty/wechaty/pull/1160) \([zixia](https://github.com/zixia)\)

**Fixed bugs:**

* When bot quit the room, bot still thought it in the room. [\#1345](https://github.com/wechaty/wechaty/issues/1345)​
* When the bot remove one out of the group, room data didn't refresh [\#1343](https://github.com/wechaty/wechaty/issues/1343)​
* Room Event cannot work as expect after create a new room [\#1342](https://github.com/wechaty/wechaty/issues/1342)​
* cannot refresh room data when execute the code again [\#1339](https://github.com/wechaty/wechaty/issues/1339)​
* can't run demo [\#1337](https://github.com/wechaty/wechaty/issues/1337)​
* room-leave error [\#1334](https://github.com/wechaty/wechaty/issues/1334)​
* room-join event, when run `room.say`, it actually run `contact.say` [\#1330](https://github.com/wechaty/wechaty/issues/1330)​
* room-leave event cannot get leaver member [\#1329](https://github.com/wechaty/wechaty/issues/1329)​
* should refresh room data when there is a room event [\#1328](https://github.com/wechaty/wechaty/issues/1328)​
* \[room topic event\] throw error: no changerId found [\#1326](https://github.com/wechaty/wechaty/issues/1326)​
* room-join cannot get member [\#1324](https://github.com/wechaty/wechaty/issues/1324)​
* `contact.avatar\(\)` cannot work as expect [\#1321](https://github.com/wechaty/wechaty/issues/1321)​
* run contact-bot throw error [\#1319](https://github.com/wechaty/wechaty/issues/1319)​
* Padchat: WXAutoLogin result is faild, but I still receive message [\#1316](https://github.com/wechaty/wechaty/issues/1316)​
* Fix the `+` in data for PuppetPadchat [\#1302](https://github.com/wechaty/wechaty/issues/1302)​
* get fromId not right for room invitation sys message [\#1297](https://github.com/wechaty/wechaty/issues/1297)​
* Error: The command "echo $TRAVIS\_OS\_NAME" exited with 1. [\#1236](https://github.com/wechaty/wechaty/issues/1236)​
* TravisCI Conditional Deployment [\#1211](https://github.com/wechaty/wechaty/issues/1211)​
* Update the peerDependencies of `rx-queue`: rxjs@6 from rxjs@5 [\#1205](https://github.com/wechaty/wechaty/issues/1205)​
* Cannot send image message on v0.15.21 [\#1175](https://github.com/wechaty/wechaty/issues/1175)​
* cannot refresh room topic or contact name [\#1157](https://github.com/wechaty/wechaty/issues/1157)​
* How to avoid the memory leak [\#981](https://github.com/wechaty/wechaty/issues/981)​
* Puppeteer Navigation Timeout Exceeded: 30000ms exceeded [\#870](https://github.com/wechaty/wechaty/issues/870)​
* SyntaxError: Unexpected end of JSON input [\#846](https://github.com/wechaty/wechaty/issues/846)​
* function `Message.mention\(\)` should recognize both magic code and blank [\#813](https://github.com/wechaty/wechaty/issues/813)​
* BREAKING CHANGE: first arg of `room-leave` event licener changed from `Contact` to `Contact\\[\\]` [\#723](https://github.com/wechaty/wechaty/issues/723)​
* Should throw Exception when there have API Error. [\#683](https://github.com/wechaty/wechaty/issues/683)​

**Closed issues:**

* BREAKING CHANGE v0.16 Wechaty.self\(\) eprecated, use Wechaty.userSelf\(\) instead [\#1369](https://github.com/wechaty/wechaty/issues/1369)​
* BREAKING CHANGE v0.16 Contact.personal\(\) and Contact.official\(\) deprecated, use Contact.type\(\) instead [\#1366](https://github.com/wechaty/wechaty/issues/1366)​
* no encodedText error in `padchat-decode.ts` [\#1365](https://github.com/wechaty/wechaty/issues/1365)​
* BREAKING CHANGE v0.16 Contact, FriendRequest, Message, and Room classes will not be able to instantiate directly [\#1364](https://github.com/wechaty/wechaty/issues/1364)​
* BREAKING CHANGE v0.16 room.add return Promise instead of return Promise [\#1362](https://github.com/wechaty/wechaty/issues/1362)​
* `media-file-bot` cannot save xlsx file [\#1349](https://github.com/wechaty/wechaty/issues/1349)​
* room-leave-error [\#1335](https://github.com/wechaty/wechaty/issues/1335)​
* room-leave event throw error, cannot get leaver contact [\#1323](https://github.com/wechaty/wechaty/issues/1323)​
* `friendship` cannot accept friend request automatically [\#1322](https://github.com/wechaty/wechaty/issues/1322)​
* PadchatRpc WXCheckQRCode result: {"message":"WS请求错误","status":-19} [\#1315](https://github.com/wechaty/wechaty/issues/1315)​
* m.forward 是 undefined ？ [\#1272](https://github.com/wechaty/wechaty/issues/1272)​
* Navigation Timeout Exceeded: 30000ms exceeded [\#1248](https://github.com/wechaty/wechaty/issues/1248)​
* profile.set can only set 'cookies' instead of other keys [\#1240](https://github.com/wechaty/wechaty/issues/1240)​
* Create a websocket ipad demo [\#1228](https://github.com/wechaty/wechaty/issues/1228)​
* Proper wechaty and its dependency installation [\#1225](https://github.com/wechaty/wechaty/issues/1225)​
* can't run the typescript examples [\#1221](https://github.com/wechaty/wechaty/issues/1221)​
* Scan QR Code not shown on terminal, wechaty@0.14.4 [\#1220](https://github.com/wechaty/wechaty/issues/1220)​
* 请问怎么添加微信群中的人当做自己的好友呢 有例子可以参考吗 [\#1207](https://github.com/wechaty/wechaty/issues/1207)​
* room-bot.ts error [\#1199](https://github.com/wechaty/wechaty/issues/1199)​
* TypeScript 2.9 with trailing comma after rest parameters. [\#1188](https://github.com/wechaty/wechaty/issues/1188)​
* code example 'media-file-bot' not working [\#1183](https://github.com/wechaty/wechaty/issues/1183)​
* QrCode `scan` event not refresh on v0.15.21 \#1175 [\#1176](https://github.com/wechaty/wechaty/issues/1176)​
* Version 10 of node.js has been released [\#1170](https://github.com/wechaty/wechaty/issues/1170)​
* 自动加好友，加好友成功后，向对方发信息报错 [\#1165](https://github.com/wechaty/wechaty/issues/1165)​
* Use `injection-js` for Wechaty v1.0 provide the resolvers of the Wechaty Puppet [\#1146](https://github.com/wechaty/wechaty/issues/1146)​
* findAll ,WARN Room parse\(\) on a empty rawObj [\#1141](https://github.com/wechaty/wechaty/issues/1141)​
* Rename all `find\(\)` method to `search\(\)` [\#1132](https://github.com/wechaty/wechaty/issues/1132)​
* ERR PuppetWebBridge init\(\) exception: Error: connect ECONNREFUSED 127.0.0.1:35493 [\#1113](https://github.com/wechaty/wechaty/issues/1113)​
* Feature request: sending file with a stream \(creating media message with a stream\) [\#1092](https://github.com/wechaty/wechaty/issues/1092)​
* node\_modules/\_wechaty@0.13.36@wechaty/dist/src/config.d.ts\(1,24\): error TS2307: Cannot find module 'raven'. [\#1035](https://github.com/wechaty/wechaty/issues/1035)​

**Merged pull requests:**

* add await for promise [\#1375](https://github.com/wechaty/wechaty/pull/1375) \([lijiarui](https://github.com/lijiarui)\)
* Fix room.add\(\) failed when room member more than 40 [\#1374](https://github.com/wechaty/wechaty/pull/1374) \([lijiarui](https://github.com/lijiarui)\)
* call randam server for stable [\#1373](https://github.com/wechaty/wechaty/pull/1373) \([lijiarui](https://github.com/lijiarui)\)
* check room valid by id [\#1352](https://github.com/wechaty/wechaty/pull/1352) \([lijiarui](https://github.com/lijiarui)\)
* fixed cannot find room by topic after bot create room [\#1351](https://github.com/wechaty/wechaty/pull/1351) \([lijiarui](https://github.com/lijiarui)\)
* fix warnings when run `npm run lint` [\#1348](https://github.com/wechaty/wechaty/pull/1348) \([lijiarui](https://github.com/lijiarui)\)
* test `room.quit\(\)` in room-bot [\#1347](https://github.com/wechaty/wechaty/pull/1347) \([lijiarui](https://github.com/lijiarui)\)
* add log as \#1342 [\#1344](https://github.com/wechaty/wechaty/pull/1344) \([lijiarui](https://github.com/lijiarui)\)
* Bug compatible WXCreateChatRoom [\#1341](https://github.com/wechaty/wechaty/pull/1341) \([lijiarui](https://github.com/lijiarui)\)
* add room-bot test code [\#1338](https://github.com/wechaty/wechaty/pull/1338) \([lijiarui](https://github.com/lijiarui)\)
* save room join sys message to cache [\#1333](https://github.com/wechaty/wechaty/pull/1333) \([lijiarui](https://github.com/lijiarui)\)
* add function in self-testing-bot.ts [\#1331](https://github.com/wechaty/wechaty/pull/1331) \([lijiarui](https://github.com/lijiarui)\)
* Room bot example [\#1325](https://github.com/wechaty/wechaty/pull/1325) \([lijiarui](https://github.com/lijiarui)\)
* add room join event unit test [\#1318](https://github.com/wechaty/wechaty/pull/1318) \([lijiarui](https://github.com/lijiarui)\)
* add function friendRequestSend [\#1313](https://github.com/wechaty/wechaty/pull/1313) \([lijiarui](https://github.com/lijiarui)\)
* add room event [\#1308](https://github.com/wechaty/wechaty/pull/1308) \([lijiarui](https://github.com/lijiarui)\)
* add raw dirty rpc function [\#1283](https://github.com/wechaty/wechaty/pull/1283) \([lijiarui](https://github.com/lijiarui)\)
* Puppet 0602 [\#1282](https://github.com/wechaty/wechaty/pull/1282) \([lijiarui](https://github.com/lijiarui)\)
* chore\(package\): update @types/node to version 10.3.0 [\#1274](https://github.com/wechaty/wechaty/pull/1274) \([zixia](https://github.com/zixia)\)
* fix\(package\): update memory-card to version 0.2.0 [\#1273](https://github.com/wechaty/wechaty/pull/1273) \([zixia](https://github.com/zixia)\)
* Puppet 0602 [\#1271](https://github.com/wechaty/wechaty/pull/1271) \([lijiarui](https://github.com/lijiarui)\)
* chore\(package\): update rx-queue to version 0.4.19 [\#1260](https://github.com/wechaty/wechaty/pull/1260) \([zixia](https://github.com/zixia)\)
* New puppet padchat [\#1256](https://github.com/wechaty/wechaty/pull/1256) \([lijiarui](https://github.com/lijiarui)\)
* add more functions [\#1246](https://github.com/wechaty/wechaty/pull/1246) \([lijiarui](https://github.com/lijiarui)\)
* Puppet padchat [\#1245](https://github.com/wechaty/wechaty/pull/1245) \([lijiarui](https://github.com/lijiarui)\)
* chore\(package\): update ts-node to version 6.0.5 [\#1232](https://github.com/wechaty/wechaty/pull/1232) \([zixia](https://github.com/zixia)\)
* Update to node 10 in .travis.yml [\#1231](https://github.com/wechaty/wechaty/pull/1231) \([zixia](https://github.com/zixia)\)
* fix\(package\): update rx-queue to version 0.4.4 [\#1190](https://github.com/wechaty/wechaty/pull/1190) \([zixia](https://github.com/zixia)\)
* Multi-Instance Support [\#1159](https://github.com/wechaty/wechaty/pull/1159) \([zixia](https://github.com/zixia)\)

### v0.14.0 2018-04-15 <a id="v-0-14-0-2018-04-15"></a>

​[v0.14.0](https://github.com/wechaty/wechaty/tree/v0.14.0) \(2018-04-15\)[Full Changelog](https://github.com/wechaty/wechaty/compare/v0.12.0...v0.14.0)​

### v0.12.0 2017-10-30 <a id="v-0-12-0-2017-10-30"></a>

​[v0.12.0](https://github.com/wechaty/wechaty/tree/v0.12.0) \(2017-10-30\)[Full Changelog](https://github.com/wechaty/wechaty/compare/v0.9.0...v0.12.0)​

### v0.9.0 2017-10-04 <a id="v-0-9-0-2017-10-04"></a>

​[v0.9.0](https://github.com/wechaty/wechaty/tree/v0.9.0) \(2017-10-04\)[Full Changelog](https://github.com/wechaty/wechaty/compare/v0.8.2...v0.9.0)​

### v0.8.2 2017-05-03 <a id="v-0-8-2-2017-05-03"></a>

​[v0.8.2](https://github.com/wechaty/wechaty/tree/v0.8.2) \(2017-05-03\)[Full Changelog](https://github.com/wechaty/wechaty/compare/v0.7.0...v0.8.2)​

### v0.7.0 2016-12-29 <a id="v-0-7-0-2016-12-29"></a>

​[v0.7.0](https://github.com/wechaty/wechaty/tree/v0.7.0) \(2016-12-29\)[Full Changelog](https://github.com/wechaty/wechaty/compare/v0.6.32...v0.7.0)​

### v0.6.32 2016-11-28 <a id="v-0-6-32-2016-11-28"></a>

​[v0.6.32](https://github.com/wechaty/wechaty/tree/v0.6.32) \(2016-11-28\)[Full Changelog](https://github.com/wechaty/wechaty/compare/v0.6.21...v0.6.32)​

### v0.6.21 2016-11-14 <a id="v-0-6-21-2016-11-14"></a>

​[v0.6.21](https://github.com/wechaty/wechaty/tree/v0.6.21) \(2016-11-14\)[Full Changelog](https://github.com/wechaty/wechaty/compare/v0.5.21...v0.6.21)​

### v0.5.21 2016-11-09 <a id="v-0-5-21-2016-11-09"></a>

​[v0.5.21](https://github.com/wechaty/wechaty/tree/v0.5.21) \(2016-11-09\)[Full Changelog](https://github.com/wechaty/wechaty/compare/v0.5.1...v0.5.21)​

### v0.5.1 2016-11-03 <a id="v-0-5-1-2016-11-03"></a>

​[v0.5.1](https://github.com/wechaty/wechaty/tree/v0.5.1) \(2016-11-03\)[Full Changelog](https://github.com/wechaty/wechaty/compare/v0.4.0...v0.5.21)​

### v0.4.0 2016-10-08 <a id="v-0-4-0-2016-10-08"></a>

​[v0.4.0](https://github.com/wechaty/wechaty/tree/v0.4.0) \(2016-10-08\)[Full Changelog](https://github.com/wechaty/wechaty/compare/v0.3.12...v0.4.0)​

### v0.3.12 2016-08-25 <a id="v-0-3-12-2016-08-25"></a>

​[v0.3.12](https://github.com/wechaty/wechaty/tree/v0.3.12) \(2016-08-25\)[Full Changelog](https://github.com/wechaty/wechaty/compare/v0.1.0...v0.3.12)​

### v0.1.0 2016-06-09 <a id="v-0-1-0-2016-06-09"></a>

​[v0.1.0](https://github.com/wechaty/wechaty/tree/v0.1.0) \(2016-06-09\)[Full Changelog](https://github.com/wechaty/wechaty/compare/v0.0.5...v0.1.0)​

See more in [CHANGELOG](https://github.com/wechaty/wechaty/blob/master/CHANGELOG.md)​
