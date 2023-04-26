---
title: 'Puppet Service: WorkPro'
sidebar_label: WorkPro
---

[![Wechaty Puppet Service WorkPro](https://img.shields.io/badge/Service-WorkPro-blue)](workpro.md)

```wechaty-puppet-workpro``` is a **WeCom**(original WeChat Work) solution. Provided by [@RPAChat](https://github.com/RPAChat).

 Currently it supports the following features:

- Send / Receive Text, Image, Video, File, UrlLink, MiniProgram, **Location**, **Channel**, **Voice** messages
- Get Corporation and Individual contacts
- Get All kinds of rooms with room members
- Modify alias, phone, corporation and description on a contact
- Add / Remove members to / from room
- Modify room topic
- Room events (join, leave, topic)
- Tag events (add, delete, rename)
- Contact events (friendship, tag)
- **Moment Posting**

## How to buy

Please scan the following QRCode with wechat or wecom:

![QrCode](../../static/img/docs/references/puppet-services/workpro/workpro-doc-qrcode.webp)

## Frequently asked questions

- 14 UNAVAILABLE: No connection established

  This is often caused by TLS setting problem. You have to disable TLS to use WorkPro token. You can do this with code or environment variables.

  - Code: add ```tls: {disable: true}``` into puppetOptions.
  - Env: WECHATY_PUPPET_SERVICE_NO_TLS_INSECURE_CLIENT=true

- Cannot find token

  When you get your token, you'll also get the discovery service address of the token. (If not, please contact customer service.) If the address is not ```api.chatie.com```, then you have to set an environment variable to explicitly set it. You can do this by adding this to your environment variable list.

  - Env: WECHATY_PUPPET_SERVICE_AUTHORITY={DISCOVER_ADDRESS} (Address is usually token-service-discovery-test.juzibot.com)

## Known Issues

1. Room announce event will break current puppet-service(v1.19.8). Fixed in latest puppet-service version.. See: [Issue 216](https://github.com/wechaty/puppet-service/issues/216)

## Questions

[Submit an issue here.](https://github.com/wechaty/puppet-supports/issues/new?assignees=su-chang%2Chcfw007&labels=workpro&template=workpro_bug.md&title=%5BFEAT%5DWorkPro%3A)

## History

1. [🔥🔥🔥 Introducing new puppet-service: wechaty-puppet-workpro #2462](https://github.com/wechaty/wechaty/issues/2462)

## Contact

Please scan the following QRCode with wechat or wecom:

![QrCode](../../static/img/docs/references/puppet-services/workpro/workpro-doc-qrcode.webp)

## Blogs

- [Wechaty Puppet Service WorkPro Launch Announcement](https://wechaty.js.org/2022/12/23/introducing-workpro-puppet/)
- [Wechaty Puppet Service WorkPro Immigration Guide](https://wechaty.js.org/2023/01/18/workpro-immigration-guide/)

Check out more blogs with the `workpro` tag at <https://wechaty.js.org/tags.html#workpro>
