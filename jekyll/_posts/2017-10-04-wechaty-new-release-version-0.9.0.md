---
title: Wechaty New Version 0.9.0 Released
author: huan
categories: announcement
tags:
  - release
  - news
image: /assets/2017/huan-wechaty-new-version-0.9.0.webp
---

![wechaty-release-0.9.0][wechaty-release-0.9.0]

The Wechaty has been updated to version 0.9.0 today. This release contains a number of bug fixes, security updates and feature enhancements.

If you find new issues, please let us know by visiting our Github issue page and filing a bug.

Huan LI  
Creator of Wechaty

## Change Log

### [v0.9.0](https://github.com/wechaty/wechaty/tree/v0.9.0) (2017-10-04)

[Full Changelog](https://github.com/wechaty/wechaty/compare/v0.8.2...v0.9.0)

#### BREAKING CHANGES

- \[Announcement\] Drop support for phantomjs [\#763](https://github.com/wechaty/wechaty/issues/763)

#### NEW FEATURES

- Support hot-reload for Wechaty events listeners [\#820](https://github.com/wechaty/wechaty/issues/820)
- Add Transpond Message [\#726](https://github.com/wechaty/wechaty/issues/726)
- \[Feature request\] @mention support? [\#153](https://github.com/wechaty/wechaty/issues/153)
- Support Message Type of Image/Video  [\#4](https://github.com/wechaty/wechaty/issues/4)
- \[new feature\] add function message.mention\(\) [\#216](https://github.com/wechaty/wechaty/issues/216)
- \[feature request\] fire `room-join` when someone joins from a QR Code [\#155](https://github.com/wechaty/wechaty/issues/155)
- \#4 send image/video [\#337](https://github.com/wechaty/wechaty/pull/337) ([mukaiu](https://github.com/mukaiu))
- \#3 support send gif [\#438](https://github.com/wechaty/wechaty/pull/438) ([mukaiu](https://github.com/mukaiu))
- add room.say\(MediaMessage\) [\#420](https://github.com/wechaty/wechaty/pull/420) ([mukaiu](https://github.com/mukaiu))
- add room-leave event [\#370](https://github.com/wechaty/wechaty/pull/370) ([lijiarui](https://github.com/lijiarui))
- Add mention [\#362](https://github.com/wechaty/wechaty/pull/362) ([lijiarui](https://github.com/lijiarui))
- added hot load bots [\#310](https://github.com/wechaty/wechaty/pull/310) ([Gcaufy](https://github.com/Gcaufy))

#### BUG FIXES

- \[bug\] Support for send 25Mb+ size files [\#766](https://github.com/wechaty/wechaty/issues/766)
- Cannot send pdf file using MediaMessage [\#710](https://github.com/wechaty/wechaty/issues/710)
- \[enhancement\] Add pdf, docx etc support to MediaMessage\(now only picture is supported\) [\#538](https://github.com/wechaty/wechaty/issues/538)
- Send\(upload\) an image twice will cause error. [\#422](https://github.com/wechaty/wechaty/issues/422)
- Cannot send image after restart [\#777](https://github.com/wechaty/wechaty/issues/777)
- Room.alias\(\) should return null if we have not set the alias in the room  [\#283](https://github.com/wechaty/wechaty/issues/283)
- Fix chrome driver path problem in Windows [\#416](https://github.com/wechaty/wechaty/pull/416) ([xjchengo](https://github.com/xjchengo))
- fix upload media url error [\#415](https://github.com/wechaty/wechaty/pull/415) ([mukaiu](https://github.com/mukaiu))
- Add missing %s content for leaver not found error [\#388](https://github.com/wechaty/wechaty/pull/388) ([xinbenlv](https://github.com/xinbenlv))
- fix jsdoc flush issue \#378 and minor fix on the doc examples [\#380](https://github.com/wechaty/wechaty/pull/380) ([ax4](https://github.com/ax4))
- fix\_function\_room.member\_\#173 [\#211](https://github.com/wechaty/wechaty/pull/211) ([lijiarui](https://github.com/lijiarui))
- \[bug\]Cannot read property 'getUserName' of undefined [\#772](https://github.com/wechaty/wechaty/issues/772)
- Cannot send pdf file using MediaMessage [\#710](https://github.com/wechaty/wechaty/issues/710)
- Click Web Wechat `Switch Account` Automatically to get qrcode immediately when bot logout [\#636](https://github.com/wechaty/wechaty/issues/636)
- Concat.avatar\(\)  faild ,when hostname changed from <https://wx.qq.com> to <https://wx2.qq.com> [\#418](https://github.com/wechaty/wechaty/issues/418)
- it seems RECALLED: 10002 message dose't trigger on\\('message'\\) event [\#8](https://github.com/wechaty/wechaty/issues/8)

#### ENHANCEMENTS

- \[jsdoc\] additional optimizations [\#774](https://github.com/wechaty/wechaty/issues/774)
- chrome-headless support [\#739](https://github.com/wechaty/wechaty/issues/739)
- Click Web Wechat `Switch Account` Automatically to get qrcode immediately when bot logout [\#636](https://github.com/wechaty/wechaty/issues/636)
- use babel-node to run javascript\(.js\) file inside docker [\#507](https://github.com/wechaty/wechaty/issues/507)
- \[Docker\] add a `onbuild` image to Wechaty [\#147](https://github.com/wechaty/wechaty/issues/147)
- add `room-bot-leave` event [\#250](https://github.com/wechaty/wechaty/issues/250)
- Limit video file size [\#421](https://github.com/wechaty/wechaty/pull/421) ([mukaiu](https://github.com/mukaiu))
- support brand checking of contact  [\#404](https://github.com/wechaty/wechaty/pull/404) ([JasLin](https://github.com/JasLin))
- Limit the size of the sending file [\#376](https://github.com/wechaty/wechaty/pull/376) ([mukaiu](https://github.com/mukaiu))
- room.memberAll\(\) & change room.member\(\) query to 3 types [\#364](https://github.com/wechaty/wechaty/pull/364) ([lijiarui](https://github.com/lijiarui))
- Printout entire error trace when unhandledRejection was caught [\#361](https://github.com/wechaty/wechaty/pull/361) ([xinbenlv](https://github.com/xinbenlv))
- load all memberList [\#275](https://github.com/wechaty/wechaty/pull/275) ([lijiarui](https://github.com/lijiarui))
- add-sys-message-in-friendrequest [\#266](https://github.com/wechaty/wechaty/pull/266) ([lijiarui](https://github.com/lijiarui))
- enhance \#155 fire `room-join` when someone joins from a QR Code [\#162](https://github.com/wechaty/wechaty/pull/162) ([lijiarui](https://github.com/lijiarui))

#### MISC

- Use Sentry.io to report exceptions [\#580](https://github.com/wechaty/wechaty/issues/580)
- \[todo\] Change to use native Dom Websocket instead of socket.io library [\#502](https://github.com/wechaty/wechaty/issues/502)
- License Change: from ISC to Apache-2.0 [\#474](https://github.com/wechaty/wechaty/issues/474)
- requesting a new QR code cost more than 2 minutes [\#434](https://github.com/wechaty/wechaty/issues/434)
- \[doc\] To Embed Document in Wechaty Code for Generating Automaticly [\#73](https://github.com/wechaty/wechaty/issues/73)
- Promote StateMonitor to a solo NPM module: StateSwitch [\#466](https://github.com/wechaty/wechaty/issues/466)
- Lazy to create a stream [\#470](https://github.com/wechaty/wechaty/pull/470) ([mukaiu](https://github.com/mukaiu))
- add magic code for room.say\(\)  when `@bot` happen [\#440](https://github.com/wechaty/wechaty/pull/440) ([lijiarui](https://github.com/lijiarui))
- first item of memberList as owner is confusion [\#358](https://github.com/wechaty/wechaty/pull/358) ([JasLin](https://github.com/JasLin))
- Add JsDoc for Class Contact [\#321](https://github.com/wechaty/wechaty/pull/321) ([lijiarui](https://github.com/lijiarui))
- Add print nodejs version [\#280](https://github.com/wechaty/wechaty/pull/280) ([xinbenlv](https://github.com/xinbenlv))
- \#291 change `throw error` to `return null` [\#292](https://github.com/wechaty/wechaty/pull/292) ([lijiarui](https://github.com/lijiarui))
- roomJoinFailed [\#249](https://github.com/wechaty/wechaty/pull/249) ([lijiarui](https://github.com/lijiarui))
- add warn log when function Room&Contact.find\(\) return more than one value [\#239](https://github.com/wechaty/wechaty/pull/239) ([lijiarui](https://github.com/lijiarui))
- rename the nick/remark/display for contact/room \#217 [\#234](https://github.com/wechaty/wechaty/pull/234) ([lijiarui](https://github.com/lijiarui))
- friendrequest [\#199](https://github.com/wechaty/wechaty/pull/199) ([lijiarui](https://github.com/lijiarui))
- \#181 fix [\#182](https://github.com/wechaty/wechaty/pull/182) ([lijiarui](https://github.com/lijiarui))

#### CONTRIBUTORS

The following contributiveness since v0.7.0 had been contributed.

Thank you all contributors, Wechaty could not release version 0.9 without your help!

1. @[lijiarui](https://github.com/lijiarui): [\#816](https://github.com/wechaty/wechaty/pull/816),[\#812](https://github.com/wechaty/wechaty/pull/812),[\#805](https://github.com/wechaty/wechaty/pull/805),[\#798](https://github.com/wechaty/wechaty/pull/798),[\#757](https://github.com/wechaty/wechaty/pull/757),[\#729](https://github.com/wechaty/wechaty/pull/729),[\#725](https://github.com/wechaty/wechaty/pull/725),[\#651](https://github.com/wechaty/wechaty/pull/651),[\#627](https://github.com/wechaty/wechaty/pull/627),[\#619](https://github.com/wechaty/wechaty/pull/619),[\#604](https://github.com/wechaty/wechaty/pull/604),[\#515](https://github.com/wechaty/wechaty/pull/515),[\#490](https://github.com/wechaty/wechaty/pull/490),[\#440](https://github.com/wechaty/wechaty/pull/440),[\#370](https://github.com/wechaty/wechaty/pull/370),[\#364](https://github.com/wechaty/wechaty/pull/364),[\#362](https://github.com/wechaty/wechaty/pull/362),[\#328](https://github.com/wechaty/wechaty/pull/328),[\#324](https://github.com/wechaty/wechaty/pull/324),[\#323](https://github.com/wechaty/wechaty/pull/323),[\#321](https://github.com/wechaty/wechaty/pull/321),[\#318](https://github.com/wechaty/wechaty/pull/318),[\#303](https://github.com/wechaty/wechaty/pull/303),[\#292](https://github.com/wechaty/wechaty/pull/292),[\#275](https://github.com/wechaty/wechaty/pull/275),[\#266](https://github.com/wechaty/wechaty/pull/266),[\#264](https://github.com/wechaty/wechaty/pull/264),[\#249](https://github.com/wechaty/wechaty/pull/249),[\#239](https://github.com/wechaty/wechaty/pull/239),[\#234](https://github.com/wechaty/wechaty/pull/234),[\#211](https://github.com/wechaty/wechaty/pull/211),[\#199](https://github.com/wechaty/wechaty/pull/199),[\#182](https://github.com/wechaty/wechaty/pull/182),[\#162](https://github.com/wechaty/wechaty/pull/162)
1. @[zixia](https://github.com/huan): [\#841](https://github.com/wechaty/wechaty/pull/841),[\#831](https://github.com/wechaty/wechaty/pull/831),[\#810](https://github.com/wechaty/wechaty/pull/810),[\#644](https://github.com/wechaty/wechaty/pull/644),[\#643](https://github.com/wechaty/wechaty/pull/643),[\#608](https://github.com/wechaty/wechaty/pull/608),[\#569](https://github.com/wechaty/wechaty/pull/569),[\#560](https://github.com/wechaty/wechaty/pull/560),[\#542](https://github.com/wechaty/wechaty/pull/542),[\#496](https://github.com/wechaty/wechaty/pull/496),[\#495](https://github.com/wechaty/wechaty/pull/495),[\#469](https://github.com/wechaty/wechaty/pull/469),[\#462](https://github.com/wechaty/wechaty/pull/462),[\#455](https://github.com/wechaty/wechaty/pull/455),[\#449](https://github.com/wechaty/wechaty/pull/449),[\#396](https://github.com/wechaty/wechaty/pull/396),[\#351](https://github.com/wechaty/wechaty/pull/351),[\#317](https://github.com/wechaty/wechaty/pull/317),[\#316](https://github.com/wechaty/wechaty/pull/316),[\#315](https://github.com/wechaty/wechaty/pull/315),[\#314](https://github.com/wechaty/wechaty/pull/314),[\#313](https://github.com/wechaty/wechaty/pull/313),[\#312](https://github.com/wechaty/wechaty/pull/312),[\#311](https://github.com/wechaty/wechaty/pull/311)
1. @[mukaiu](https://github.com/mukaiu): [\#337](https://github.com/wechaty/wechaty/pull/337),[\#470](https://github.com/wechaty/wechaty/pull/470),[\#438](https://github.com/wechaty/wechaty/pull/438),[\#421](https://github.com/wechaty/wechaty/pull/421),[\#420](https://github.com/wechaty/wechaty/pull/420),[\#415](https://github.com/wechaty/wechaty/pull/415),[\#376](https://github.com/wechaty/wechaty/pull/376)
1. @[binsee](https://github.com/binsee): [\#844](https://github.com/wechaty/wechaty/pull/844),[\#811](https://github.com/wechaty/wechaty/pull/811),[\#771](https://github.com/wechaty/wechaty/pull/771),[\#744](https://github.com/wechaty/wechaty/pull/744),[\#727](https://github.com/wechaty/wechaty/pull/727),[\#714](https://github.com/wechaty/wechaty/pull/714)
1. @[xinbenlv](https://github.com/xinbenlv): [\#388](https://github.com/wechaty/wechaty/pull/388),[\#361](https://github.com/wechaty/wechaty/pull/361),[\#280](https://github.com/wechaty/wechaty/pull/280)
1. @[hczhcz](https://github.com/hczhcz): [\#684](https://github.com/wechaty/wechaty/pull/684),[\#640](https://github.com/wechaty/wechaty/pull/640)
1. @[JasLin](https://github.com/JasLin): [\#404](https://github.com/wechaty/wechaty/pull/404),[\#358](https://github.com/wechaty/wechaty/pull/358)
1. @[FlyingBlazer](https://github.com/FlyingBlazer): [\#531](https://github.com/wechaty/wechaty/pull/531)
1. @[zhenyong](https://github.com/zhenyong): [\#770](https://github.com/wechaty/wechaty/pull/770)
1. @[lpmi-13](https://github.com/lpmi-13): [\#681](https://github.com/wechaty/wechaty/pull/681)
1. @[xjchengo](https://github.com/xjchengo): [\#416](https://github.com/wechaty/wechaty/pull/416)
1. @[TingYinHelen](https://github.com/TingYinHelen): [\#605](https://github.com/wechaty/wechaty/pull/605)
1. @[imerse](https://github.com/imerse): [\#578](https://github.com/wechaty/wechaty/pull/578)
1. @[ax4](https://github.com/ax4): [\#380](https://github.com/wechaty/wechaty/pull/380)
1. @[Gcaufy](https://github.com/Gcaufy): [\#310](https://github.com/wechaty/wechaty/pull/310)

[wechaty-release-0.9.0]: /assets/2017/huan-wechaty-new-version-0.9.0.webp
