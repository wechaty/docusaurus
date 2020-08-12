---
title: Release Log
---

## v0.16 New Puppet System\(BETA\) with Padchat Implemented <a id="v-0-16-new-puppet-system-beta-with-padchat-implemented"></a>

​[v0.16.0](https://github.com/wechaty/wechaty/releases/tag/v0.16.0) release this on 2018-06-20, 290 commits to master since this release

This release is a BETA release which had been improved with lots of huge refactoring since v0.14.

With v0.16, we can use the branding new Puppet System to connect Wechaty API to any kinds of Puppets, for example:

1. Mocking - [PuppetMock](https://github.com/wechaty/wechaty/tree/ed72a78b61ccc352d9bd9f5a06054a218cdd1d0d/src/puppet-mock)​
2. Web API via HTTP - [PuppetWechat4U](https://github.com/wechaty/wechaty/tree/ed72a78b61ccc352d9bd9f5a06054a218cdd1d0d/src/puppet-wechat4u)​
3. Web API via Browser - [PuppetPuppeteer](https://github.com/wechaty/wechaty/tree/ed72a78b61ccc352d9bd9f5a06054a218cdd1d0d/src/puppet-puppeteer) \(our classic PuppetWeb\)
4. Maybe a Official Account Puppet? [\#1016](https://github.com/wechaty/wechaty/issues/1016)​

If you are using Wechaty in a production environment, It is recormmand to skip this version and wait to the next version of 0.18 because this version is still in **testing stage** and will be continue developing as v0.19.

However, if you want to try the new Puppet like the [PuppetPadchat](https://github.com/lijiarui/wechaty-puppet-padchat) which is powered by the Wechat Pad Protocol, you can upgrade to this version and get the following benifits from it:

1. Be able to login with the newly registered Wechat Account. \([\#872](https://github.com/wechaty/wechaty/issues/872)\)
2. Get wechat id for contacts. \([\#133](https://github.com/wechaty/wechaty/issues/133)\)
3. Get consistent room id for rooms across login session. \([\#90](https://github.com/wechaty/wechaty/issues/90)\)
4. ... To be discovered by you ...

Learn more about how to use the PuppetPadchat from [Wechaty v0.15 Alpha Testing: Win32/iPad/Android/iOS/API Puppets Support are coming! \#1296](https://github.com/wechaty/wechaty/issues/1296)​

### Blog <a id="blog"></a>

​[Wechaty New Version 0.16(BETA, with super power) Released](https://wechaty.github.io/2018/06/21/wechaty-new-release-version-0.16/)​
