---
title: "Wechaty New Release Version v0.30: Lots of New Features!"
author: huan
categories: announcement
tags:
  - release
  - news
image: /assets/2017/wechaty-sticker.jpg
---

Wechaty v0.30 Released! We have lots of new features added and bugs fixed!

## Change Log

## [v0.30](https://github.com/wechaty/wechaty/tree/v0.30) (2020-02-08)

[Full Changelog](https://github.com/wechaty/wechaty/compare/v0.28...v0.30)

**Implemented enhancements:**

- Support room.say`hi ${contact} ${num++}` [\#1899](https://github.com/wechaty/wechaty/issues/1899)
- Support new event named "message" on Room [\#1897](https://github.com/wechaty/wechaty/issues/1897)
- Support search new friends by phone number or user name. [\#1892](https://github.com/wechaty/wechaty/issues/1892)
- {Room,Contact}.qrcode\(\) should return QR Code Value instead of Image [\#1889](https://github.com/wechaty/wechaty/issues/1889)
- Implmented UrlLink.create\(url\) with Open Graph support [\#1887](https://github.com/wechaty/wechaty/issues/1887)
- 主动撤回消息 [\#1885](https://github.com/wechaty/wechaty/issues/1885)
- Implement Label in Wechaty [\#1856](https://github.com/wechaty/wechaty/issues/1856)
- Would like to have the timestamp on the room/friendship events [\#1829](https://github.com/wechaty/wechaty/issues/1829)
- Would like to have receiver, serialize and deserialize functions on RoomInvitation [\#1823](https://github.com/wechaty/wechaty/issues/1823)
- Wechaty v0.26 iosBird Testing, an iOS hook puppet implementation! [\#1775](https://github.com/wechaty/wechaty/issues/1775)
- Missing example code [\#1756](https://github.com/wechaty/wechaty/issues/1756)
- BREAKING CHANGE v0.25 Room.say\(text: string, mention: Contact\[\]\) deprecated [\#1730](https://github.com/wechaty/wechaty/issues/1730)
- New Puppet: Ioscat \(iPhone Wechat App Hook\) [\#1528](https://github.com/wechaty/wechaty/issues/1528)

**Fixed bugs:**

- bot.logonoff\(\)报错【static puppet not found for Wechaty】 [\#1878](https://github.com/wechaty/wechaty/issues/1878)
- JSDoc publishing problem: missed the Room class [\#1872](https://github.com/wechaty/wechaty/issues/1872)
- Wechaty can not get room info when the bot has been removed from one room. [\#1834](https://github.com/wechaty/wechaty/issues/1834)
- bot.Contact.find\(\) error message misleading [\#1812](https://github.com/wechaty/wechaty/issues/1812)
- 机器人会隔一段时间自动退出 [\#1810](https://github.com/wechaty/wechaty/issues/1810)

**Closed issues:**

- Use docker to run, QR code address prompt "unrecognized QR code" [\#1905](https://github.com/wechaty/wechaty/issues/1905)
- room.announce\(\)中当参数为空字符串时, 调用获取群公告而不是设置群公告为空 [\#1902](https://github.com/wechaty/wechaty/issues/1902)
- 启动官方学习项目报错 [\#1898](https://github.com/wechaty/wechaty/issues/1898)
- 延期通过好友 [\#1890](https://github.com/wechaty/wechaty/issues/1890)
- I want wechaty puppet padpro token to create a wechat bot [\#1882](https://github.com/wechaty/wechaty/issues/1882)
- msg.mentionSelf\(\)方法不对，始终返回false [\#1877](https://github.com/wechaty/wechaty/issues/1877)
- 需要取到Contactid或者微信号 [\#1873](https://github.com/wechaty/wechaty/issues/1873)
- Function message `toContact\(\)` should to be implemented. [\#1855](https://github.com/wechaty/wechaty/issues/1855)
- install error [\#1853](https://github.com/wechaty/wechaty/issues/1853)
- wechaty-puppet can not install in electron [\#1851](https://github.com/wechaty/wechaty/issues/1851)
- wechaty-puppet-macpro alpha test [\#1846](https://github.com/wechaty/wechaty/issues/1846)
- Action required: Greenkeeper could not be activated 🚨 [\#1781](https://github.com/wechaty/wechaty/issues/1781)
- 登陆二维码无法识别 [\#1753](https://github.com/wechaty/wechaty/issues/1753)
- 经常报以下warning [\#1634](https://github.com/wechaty/wechaty/issues/1634)
- Doesn't work with UK Android account/device [\#1556](https://github.com/wechaty/wechaty/issues/1556)

**Merged pull requests:**

- fix: wechaty-puppet-dll temporary unavailable [\#1908](https://github.com/wechaty/wechaty/pull/1908) ([kis87988](https://github.com/kis87988))
- docs: improve ding-dong-bot example [\#1904](https://github.com/wechaty/wechaty/pull/1904) ([rikakomoe](https://github.com/rikakomoe))
- Add reason for logout event [\#1900](https://github.com/wechaty/wechaty/pull/1900) ([su-chang](https://github.com/su-chang))
- Friend search [\#1895](https://github.com/wechaty/wechaty/pull/1895) ([su-chang](https://github.com/su-chang))
- Delay friendship [\#1891](https://github.com/wechaty/wechaty/pull/1891) ([SilentQianyi](https://github.com/SilentQianyi))
- Create url link [\#1888](https://github.com/wechaty/wechaty/pull/1888) ([huan](https://github.com/huan))
- Recall msg [\#1886](https://github.com/wechaty/wechaty/pull/1886) ([SilentQianyi](https://github.com/SilentQianyi))
- Change Mini Program payload in wechaty [\#1883](https://github.com/wechaty/wechaty/pull/1883) ([su-chang](https://github.com/su-chang))
- Update README.md [\#1876](https://github.com/wechaty/wechaty/pull/1876) ([lijiarui](https://github.com/lijiarui))
- add kaiyuanshe bot [\#1875](https://github.com/wechaty/wechaty/pull/1875) ([lijiarui](https://github.com/lijiarui))
- chore\(package\): update @types/node to version 12.12.3 [\#1870](https://github.com/wechaty/wechaty/pull/1870) ([huan](https://github.com/huan))
- Implement toContact\(\) method [\#1868](https://github.com/wechaty/wechaty/pull/1868) ([su-chang](https://github.com/su-chang))
- feat: change say\(\) method response type from void to Message [\#1866](https://github.com/wechaty/wechaty/pull/1866) ([su-chang](https://github.com/su-chang))
- Implement Label related methods [\#1864](https://github.com/wechaty/wechaty/pull/1864) ([su-chang](https://github.com/su-chang))
- Update contact.ts [\#1861](https://github.com/wechaty/wechaty/pull/1861) ([su-chang](https://github.com/su-chang))
- fix opencollective Sponsors style [\#1859](https://github.com/wechaty/wechaty/pull/1859) ([lijiarui](https://github.com/lijiarui))
- fix typo [\#1854](https://github.com/wechaty/wechaty/pull/1854) ([LanceZhu](https://github.com/LanceZhu))
- Update wechaty.ts [\#1833](https://github.com/wechaty/wechaty/pull/1833) ([su-chang](https://github.com/su-chang))
