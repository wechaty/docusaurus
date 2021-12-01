---
title: "Cps demo of wechat bot with wechaty"
author: shuangjie
categories: project
tags:
  - cps
  - ecommerce
image: /assets/2020/cps-bot/qrcode.webp
---

tips: if you try to use wechaty web version, you will be know it can't work, so this post show you how to use ipad version to make bot work, if you never use wechaty any version, this post also pass the web version, because it's pointless

## What is it

cps-bot is a wechat bot that using wechaty to solve a lot of transfer and push work in the cps.

## Clear demand

Before development, we need to clarify the requirements, that is, what do I need a robot to do
cps-bot just need to automatically pass friend verification, send and receive messages
so let's take a look at [wechaty](https://github.com/wechaty/wechaty) document

1. Automatically pass friend verification
    When someone adds a robot, pass or directly pass after judging the keyword of the verification message. After verification, automatically reply and introduce the robot function
1. Reply to product link (JD)
    For example, reply <https://item.m.jd.com/product/100008348572.html?wxa_abtest=o&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL&ad_od=share&utm_user=plusmember>

## before start

First of all, the wechaty-puppet-padplus version used here will be very slow to install for the first time, because the installation package contains puppeter, I have also tried it successfully two or three times, and the QR code will appear after success
If the scan code returns null (bug), close and run again

## Quick Start

### Create a new project

``` bash
mkdir bot & cd ./bot
npm init -y
```

Then we install the dependency packages needed by the project

``` bash
npm install --save wechaty
npm install --save wechaty-puppet-padplus
npm install --save qrcode-terminal
```

The preparatory work is done

### Start to code

Write code according to needs，My file structure directory is like this:

- src
  - config.js
  - index.js
  - onFriendship.js // Friends add monitoring callback
  - onMessage.js // Message listening callback
  - onScan.js // monitor the callback when scanning the QR code

#### config.js

put our configuration params

```javascript
module.exports = {
  // puppet_padplus Token
  token: "puppet_padplus_f387a9c321f178ce",
  // bot name
  name: "Zeng",
}
```

#### index.js

```javascript
/**
 * wechaty-puppet-padplus index
 */

import { Wechaty }  from 'wechaty'
import { PuppetPadplus }  from 'wechaty-puppet-padplus'
import config  from './config'

import onScan  from './onScan' // monitor the callback when scanning the QR code
import onMessage  from './onMessage' // Message listening callback
import onFriendShip  from './onFriendShip' // Friends add monitoring callback

// init
const bot = new Wechaty({
  puppet: new PuppetPadplus({
    token: config.token
  }),
  name: config.name
})

bot
  .on("scan", onScan)
  .on("message", onMessage(bot))
  .on("friendship", onFriendShip)
  .start()

```

#### onFriendship.js

Friends add monitoring callback

```javascript
/**
 * Friends add monitoring callback
 */

import { Friendship }  from 'wechaty'
import config  from './config'
// Friends add verification message to automatically agree to keywords
const addFriendKeyword = "cps" //if need more , use array

// Friends add monitoring callback
module.exports = async function onFriendShip(friendship) {
  let logMsg
  try {
    logMsg = "add friend" + friendship.contact().name()
    console.log(logMsg)
    switch (friendship.type()) {
      /**
       * step 1 New friend request
       * to use 'request.hello()'' to get verification message
       * Accept this request via 'request.accept ()'
       */
      case Friendship.Type.Receive:
        if (addFriendKeyword == friendship.hello()) {
          logMsg = `Pass verification automatically`
          await friendship.accept()
        } else {
          logMsg = "Not automatically passed because the verification message is: " + friendship.hello()
        }
        break

      /**
       * step 2 confirm
       */
      case Friendship.Type.Confirm:
        logMsg = "friend ship confirmed with " + friendship.contact().name()
        break
    }
    console.log(logMsg)
  } catch (e) {
    logMsg = e.message
  }
}
```

#### onMessage.js

```javascript
/**
 * Message listening callback
 */
import { Message }  from 'wechaty'
// node-request
import request  from 'request'
import urlencode  from 'urlencode'
import config  from './config'
// bot name
const name = config.name

// Message listening callback
module.exports = bot => {
  return async function onMessage(msg) {
    // Judging that the message came from yourself, do not care, return
    if (msg.self()) return

    console.log("=============================")
    console.log(`msg : ${msg}`)
    console.log(
      `from: ${msg.from() ? msg.from().name() : null}: ${
        msg.from() ? msg.from().id : null
      }`
    )
    console.log(`to: ${msg.to()}`)
    console.log(`text: ${msg.text()}`)
    console.log("=============================")

    // Determine if this message type is text
    if (msg.type() == Message.Type.Text) {

      // request your api
      let res = await requestApi(msg.text())
      // return content
      await msg.say(res)

    } else {
      console.log("The message is not text!")
    }
  }
}

/**
 * Request an interface and return the message to the user
 * @param {String} info sent content
 * @return {Promise} Corresponding content
 */
function requestApi(info) {
  return new Promise((resolve, reject) => {
    let url = `https://cps.linkces.com/jd/universal`

    request.post(url, {form:{content:info}},(error, response, body) => {

      let res = JSON.parse(body)
      if (!error && res.code == 0) {
        let send = res.data.result
        console.log('res', res)
        resolve(send)
      } else {
        resolve("Server is busy")
      }

    })

  }).then().catch( function(e){
    //do some thing
  })
}

```

#### onScan.js

```javascript
/**
 * monitor the callback when scanning the QR code
 */
import Qrterminal  from 'qrcode-terminal'

module.exports = function onScan(qrcode, status) {
  Qrterminal.generate(qrcode, { small: true })
}

```

### try run

set up your startup script in 'package.json'

```javascript
{
  ...

  "scripts": {
    "start": "node ./src/index.js"
  },

  ...
}

```

then run

``` bash
npm run start
```

done

---

The above code may be updated in the future, the latest code is located at:

<https://github.com/shuangjie/cps-bot>

> 作者: [shuangjie](https://github.com/shuangjie), a noob developer
> Code: [Github](https://github.com/shuangjie/cps-bot)
