---
title: 'Puppet Provider: WeChat'
sidebar_label: WeChat
---

[![Wechaty Puppet WeChat](https://img.shields.io/badge/Puppet-WeChat-blueviolet)](wechat)

![Wechaty Puppet WeChat](https://raw.githubusercontent.com/wechaty/wechaty-puppet-wechat/HEAD/docs/images/wechaty-puppet-wechat.png)

[![NPM Version](https://badge.fury.io/js/wechaty-puppet-wechat.svg)](https://badge.fury.io/js/wechaty-puppet-wechat)
[![npm (tag)](https://img.shields.io/npm/v/wechaty-puppet-wechat/next.svg)](https://www.npmjs.com/package/wechaty-puppet-wechat?activeTab=versions)

- Repo: <https://github.com/wechaty/wechaty-puppet-wechat>
- Support & Feedback: <https://github.com/wechaty/wechaty-puppet-wechat/issues>
- [Go Wecahty and WeChat Web Protocol, @dchaofei, Apr 16, 2021](https://wechaty.js.org/2021/04/16/go-wechaty-use-web/)

## Features

This is a full-featured Wechaty Puppet.

## Known Issues

WeChat Account that registered after 2017 might not be able to login Web Wechat, so it can not use wechaty-puppet-wechat with Wechaty. Please make sure your WeChat Account can be able to login by visiting [Web WeChat](https://web.wechat.com)

1. Web API can not create room and invite members to room since 2018.
1. The ID of contacts and rooms will change across sessions. [#1644](https://github.com/wechaty/wechaty/issues/1644)

## Fixed Issues

1. ~~Can not login with error message: 当前登录环境异常。为了你的帐号安全，暂时不能登录web微信。[#603](https://github.com/wechaty/wechaty/issues/603)~~
    - ~~New account login issue [#872](https://github.com/wechaty/wechaty/issues/872)~~
    - ~~[RUMOR]: wechat will close web api for wechat [#990](https://github.com/wechaty/wechaty/issues/990)~~
    - Fixed by: Can we support UOS with puppeteer [#127](https://github.com/wechaty/wechaty-puppet-wechat/issues/127)

If you want to break the above limitations, then you need consider to use a Wechaty Puppet other than Web. Learn them from [Wechaty Puppet Providers](puppet-providers/overview.mdx).

## Usage

<!-- MDX import -->
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

<Tabs
  groupId="operating-systems"
  defaultValue="linux"
  values={[
    { label: 'Linux',   value: 'linux', },
    { label: 'macOS',   value: 'mac', },
    { label: 'Windows', value: 'windows', },
  ]
}>

<TabItem value="linux">

```sh
npm install wechaty-puppet-wechat
export WECHATY_PUPPET=wechaty-puppet-wechat
npm start
```

</TabItem>
<TabItem value="mac">

```sh
npm install wechaty-puppet-wechat
export WECHATY_PUPPET=wechaty-puppet-wechat
npm start
```

</TabItem>
<TabItem value="windows">

```sh
npm install wechaty-puppet-wechat
set WECHATY_PUPPET=wechaty-puppet-wechat
npm start
```

</TabItem>
</Tabs>

## Blogs

- [教你用python-wecahty和web协议开发机器人, @wj-Mcat, Apr 17, 2021](https://wechaty.js.org/2021/04/17/python-wechaty-use-web/)
- [教你用go-wecahty和web协议开发机器人, @dchaofei, Apr 16, 2021](https://wechaty.js.org/2021/04/16/go-wechaty-use-web/)

## History

- [重磅：使用UOS微信桌面版协议登录，wechaty免费版web协议重放荣光, @gengchen528, Apr 13, 2021](https://wechaty.js.org/2021/04/13/wechaty-uos-web/)
- [Wechaty New Version 0.16(BETA, with super power) Released, @huan, Jun 21, 2018](https://wechaty.js.org/2018/06/21/wechaty-new-release-version-0.16/)

## Maintainers

- [@huan](https://wechaty.js.org/contributors/huan)
