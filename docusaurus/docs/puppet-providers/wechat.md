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

WeChat Accounts that are registered after 2017 might not be able to login Web Wechat, so it can not use wechaty-puppet-wechat with Wechaty. Please make sure your WeChat Account is eligible to login by visiting [Web WeChat](https://web.wechat.com)

Few points to be kept in mind :

1. [Can not login with UOS patch any more, Jan 1, 2022](https://github.com/wechaty/puppet-wechat/issues/192)
1. Web API can not create room and invite members to room since 2018.
1. The ID of contacts and rooms will change across sessions. [#1644](https://github.com/wechaty/wechaty/issues/1644)

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

- [Tutorial on python-wechaty usage and web protocol to develop robots, @wj-Mcat, Apr 17, 2021](https://wechaty.js.org/2021/04/17/python-wechaty-use-web/)
- [Tutorial on go-wecahty usage and web protocol to develop robots, @dchaofei, Apr 16, 2021](https://wechaty.js.org/2021/04/16/go-wechaty-use-web/)

## History

- [Use UOS WeChat desktop version protocol to log in, wechaty free version web protocol , @gengchen528, Apr 13, 2021](https://wechaty.js.org/2021/04/13/wechaty-uos-web/)
- [Wechaty New Version 0.16(BETA, with super power) Released, @huan, Jun 21, 2018](https://wechaty.js.org/2018/06/21/wechaty-new-release-version-0.16/)

## Maintainers

- [@huan](https://wechaty.js.org/contributors/huan)
