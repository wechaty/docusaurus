---
title: Wechaty Puppet Providers Trends
author: huan
categories: announcement
tags:
  - wechaty-puppet
  - news
  - featured
  - visualization
image: /assets/2021/03-wechaty-puppet-providers-trends/wechaty-puppet-providers-trends.webp
---

Do you want know which **Wechaty Puppet Provider** is most used by our Wechaty developers?

## Wechaty Puppet Provider (WPP)

Different IM systems need different Wechaty Puppets, and they have different names, and all implementing the Wechaty Puppet API; we call them the **Wechaty Puppet Provider**. For example, the WPP who is supporting WeChat is named [wechaty-puppet-wechat](https://github.com/wechaty/wechaty-puppet-wechat), supporting Whatsapp is named [wechaty-puppet-whatsapp](https://github.com/wechaty/wechaty-puppet-whatsapp), and supporting Lark is named [wechaty-puppet-lark](https://github.com/wechaty/wechaty-puppet-lark). And our community are also building the [Wechaty Puppet Service (Providers)](https://wechaty.js.org/2021/01/14/wechaty-puppet-service/) for any RPA protocol.

## The Trends

We are very interested in how many users choose which WPP. Luckily, an open-source project named [NPM Trends](https://github.com/johnmpotter/npm-trends) is an NPM package comparison app hosted at npmtrends.com written by John Potter.

So we can get to know how many users are using which WPP in the past:

[![Wechaty Puppet Providers Trends][trends_image]][trends_link]

## The Trends in March 2021

1. `wechaty-puppet-wechat`(renamed from `wechaty-puppet-puppeteer`) is the top 1 used WPP, which has around 300 downloads per day.
1. `wechaty-puppet-service` follows as second, which is our official Wechaty Puppet Service Provider, with around 200 downloads per day.
1. `wechaty-puppet-padlocal` is a new star from our community, which is the third most used WPP now. It provides the pad protocol to the community. Thank you very much [@padlocal](https://github.com/padlocal), for creating this WPP & WPS! It is around 180 downloads per day.

## Conclusion

If you are interested in the adaption of WPPs, you can visit the NPM Trends service to learn the [Wechaty Puppet Providers Trends][trends_link].

## Related Links

- [Puppet Specification](https://wechaty.js.org/docs/specs/puppet/)
- [A Check-list for Creating New Puppets for Wechaty #1167](https://github.com/wechaty/wechaty/issues/1167)
- [Wechaty Puppet API Docs](https://wechaty.github.io/wechaty-puppet/typedoc/classes/puppet.html)
- [Wechaty Puppet Compatibility](https://github.com/wechaty/wechaty-puppet/wiki/Compatibility)
- [Wechaty Puppet Development](https://github.com/wechaty/wechaty-puppet/wiki/Development)
- [Wechaty Puppet Directory](https://github.com/wechaty/wechaty-puppet/wiki/Directory)
- [Wechaty Puppet Links](https://github.com/wechaty/wechaty-puppet/wiki/Links)

[trends_image]: /assets/2021/03-wechaty-puppet-providers-trends/wechaty-puppet-providers-trends.webp
[trends_link]: https://www.npmtrends.com/wechaty-puppet-service-vs-wechaty-puppet-mock-vs-wechaty-puppet-puppeteer-vs-wechaty-puppet-wechat4u-vs-wechaty-puppet-padlocal-vs-wechaty-puppet-official-account-vs-wechaty-puppet-gitter-vs-wechaty-puppet-lark-vs-wechaty-puppet-whatsapp
