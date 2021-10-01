---
title: "Wechaty-Mail: An email tool build on Wechaty"
author: wnbupt
categories: project
tags:
  - code
  - utility
image: /assets/2017/wechaty-email.webp
---

As soon as I learn how to use 6 lines of JavaScript to achieve a simple chatbot based on [Wechaty](https://github.com/wechaty/wechaty), I was deeply attracted and decide to develop an easy-to-use email tool based on it. [Wechaty-Mail](https://github.com/wnbupt/wechaty_email) is an application based on Wechaty which can help you get notifications in WeChat when you receive new emails.

![wechaty_email](/assets/2017/wechaty-email.webp)

## Screenshot of the Application

For example, my binding email address is 346786495@qq.com

![wechaty-email](/assets/2017/wechaty-email-demo.webp)

## How to use Wechaty-Mail?

* Support email types: Gmail/Outlook/Netease mails(163/126)/QQ mail/Sina mail.
* authorize the mailbox and turn on the IMAP service in mail settings.
* Configure your own email address and password in the source code and enjoy it.
* Ding-dong! you’ve just got an email notification from WeChat FileHelper!

Find more details in my github repository [Wechaty-Email](https://github.com/wnbupt/wechaty_email)

## Appendix: Packages We Used

* [Wechaty](https://github.com/wechaty/wechaty): A great and easy-to–use WeChat middleware.
* [Imap](https://github.com/mscdex/node-imap): An IMAP client module for node.js.
* [Mailparser](https://github.com/nodemailer/mailparser): An advanced email parser for Node.js.
