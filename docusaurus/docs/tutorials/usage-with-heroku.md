---
title: 'Usage with Heroku'
---

## HEROKU WECHATY GETTING STARTED

[![Powered by Wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-blue.svg)](https://github.com/wechaty/wechaty)
[![Build Status](https://travis-ci.com/wechaty/heroku-wechaty-getting-started.svg?branch=master)](https://travis-ci.com/wechaty/heroku-wechaty-getting-started)
[![Greenkeeper badge](https://badges.greenkeeper.io/wechaty/heroku-wechaty-getting-started.svg)](https://greenkeeper.io/)

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

[Deploy to Heroku for Wechaty Starter Project Repository](https://github.com/wechaty/heroku-wechaty-getting-started)

## About `Deploy to Heroku` Button

[Creating a 'Deploy to Heroku' Button](https://devcenter.heroku.com/articles/heroku-button)

> The ‘Deploy to Heroku’ button enables users to deploy apps to Heroku without leaving the web browser, and with little or no configuration. The button is ideal for customers, open-source project maintainers or add-on providers who wish to provide their customers with a quick and easy way to deploy and configure a Heroku app.

## FEATURES

1. Deploy to Heroku without leaving the Web Browser. See `Deploy to Heroku` Button above
1. Restore Wechat Bot Session across Restart by enable MemoryCard with AWS S3. See `src/get-memory.ts`
1. Hot Module Reload Enabled for convenience when developing. See `src/handlers/on-*.ts`
1. Send Online/Offline Notification Message to BotSelf when the Program Start/Stop. See `src/finis.ts`
1. Simpel Web Server that can be used to Scan QR Code, or any other operations integrated with Wechaty. See `src/start-web.ts`

## LIMITATIONS

1. [If an app has a web dyno, and that web dyno receives no traffic in a 30 minute period, the web dyno will sleep](https://devcenter.heroku.com/articles/free-dyno-hours#dyno-sleeping)
1. [Dynos are restarted (cycled) at least once per day to help maintain the health of applications running on Heroku](https://devcenter.heroku.com/articles/dynos#restarting)

## SEE ALSO

- [Creating a 'Deploy to Heroku' Button](https://devcenter.heroku.com/articles/heroku-button)
- [Introducing Heroku Button](https://blog.heroku.com/heroku-button)
- <https://github.com/heroku/button-sample>
- [Heroku App.Json Manifest and Button Maker](https://www.expeditedssl.com/heroku-button-maker)
- [Why does SIGTERM handling not work correctly in NodeJS with NPM?](https://help.heroku.com/ROG3H81R/why-does-sigterm-handling-not-work-correctly-in-nodejs-with-npm)

## Use Cases

1. [Friday BOT](https://github.com/wechaty/friday) - <https://bot-friday.herokuapp.com/>
1. [OSSBot](https://github.com/kaiyuanshe/OSS-bot) - <https://oss-bot-dev.herokuapp.com/>
1. [Mike BO](https://github.com/huan/mike-bo) - <http://mike-bo.herokuapp.com/>
1. [QiJi BOT](https://github.com/juzibot/qijibot) - <https://qiji-bot.herokuapp.com/>
1. [Bot Ops](https://github.com/juzibot/botops) - <https://bot-ops.herokuapp.com/>
1. [Rui Assistant BOT](https://github.com/juzibot/rui-bot)
1. [Juzi.BOT](https://github.com/juzibot/juzi-bot)

## HISTORY

### v0.4 (Feb 3, 2020)

Wechaty 0.56

### v0.0.1 (Aug 9, 2018)

Init version for deploy to HeroKu

## AUTHOR

[Huan LI (李卓桓)](http://linkedin.com/in/zixia) \<zixia@zixia.net\>

[![Profile of Huan LI (李卓桓) on StackOverflow](https://stackexchange.com/users/flair/265499.png)](https://stackexchange.com/users/265499)

## COPYRIGHT & LICENSE

- Code & Docs © 2018 Huan LI \<zixia@zixia.net\>
- Code released under the Apache-2.0 License
- Docs released under Creative Commons
