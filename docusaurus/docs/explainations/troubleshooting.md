---
title: Troubleshooting
---

![Wechaty: Conversational RPA SDK for Chatbot Makers](/img/wechaty-logo.svg)

The Troubleshooting section discusses the most common problems that you will encounter while creating a chatbot using Wechaty, contributing to Wechaty codebase, contributing to Wechaty documentation, or developing Wechaty puppet and how to fix them.

## I cannot log in with my Wechat account

Wechat accounts registered after 2017 can't log in via Web API because this is a limitation. Click [this issue](https://github.com/wechaty/wechaty/issues/872) for more information.
However, Wechaty supports protocols other than Web API, such as Pad. Learn more about it [in this issue](https://github.com/wechaty/wechaty/issues/1296).

## Nothing happens when I dispatch an action when using Wechaty with Redux

Redux is a state management library you can use with Wechaty. It has the concept of [immutability](#placeholder-link). Sometimes, you can dispatch an action that correctly updates the state in the redux store but your view does not update. One of the reasons for that happening is because you are mutating the existing state instead of returning the new state. Therefore never mutate state when using Redux with Wechaty even if it is tempting to do so.

## Ding dong bot displays error after scanning QR code

When running the ding dong bot using [wechaty-getting-started repository](https://github.com/wechaty/wechaty-getting-started), on [Gitpod](#placeholder-link) or [Google cloud shell](#placeholder-link), the default Instant Messaging platform is [Wechat](#placeholder-link). Scanning QR codes for other Instant messaging platforms won't work unless you explicitly set the value of the`WECHATY_PUPPET` environment variable to the puppet service provider name as described in the [wechaty-getting-started README page](https://github.com/wechaty/wechaty-getting-started/issues).

## My problem has not been discussed here

If your problem is not covered here, you can chat with us on [Wechaty Gitter](https://gitter.im/wechaty/wechaty) or you may create an issue on [Wechaty issues](https://github.com/wechaty/wechaty/issues). Please update this page once you have found a solution. Someone else might face the same problem in the future.
