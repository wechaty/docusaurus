---
title: "wechaty 基于 nodejs 原生 http 包的服务"
author: xiaowx2010
categories: article
tags:
  - wechaty
  - http-server
image: /assets/2022/01-wechaty-with-node-server/img.webp
---

很开心加入了 Wechaty 社区，也在我的日常工作中提供了很多帮助。根据日常的工作需要，我自己加入了一些自己需要的功能。

今天和大家分享一个内容：

- 使用 nodejs 原生的 http 包来接收 http 请求

## 使用背景

我们单位在日常工作中需要将审批流中审批的详情发在微信的工作群中，并通知到相关的人员。此类需求在钉钉或者是企业微信都很容易做到。但是历史原因，我们还都是用微信来进行处理。也就产生了这个需求。因为我们用的是 wechaty docker 实现，所以就采用了 nodejs 原生的 http 模块进行开发。

## 实现

index.js

```javascript
  import {
    WechatyBuilder,
    ScanStatus,
    log,
  } from 'wechaty'
  
  import qrTerm from 'qrcode-terminal'
  import * as querystring from 'querystring';
  import * as http from 'http';
  import * as enc from './encrypt.js';
  /**
   *
   * 1. Declare your Bot!
   *
   */
  
  const options = {
    name : 'ding-dong-bot',
  
    /**
     * You can specify different puppet for different IM protocols.
     * Learn more from https://wechaty.js.org/docs/puppet-providers/
     */
    // puppet: 'wechaty-puppet-whatsapp'
  
    /**
     * You can use wechaty puppet provider 'wechaty-puppet-service'
     *   which can connect to Wechaty Puppet Services
     *   for using more powerful protocol.
     * Learn more about services (and TOKEN)from https://wechaty.js.org/docs/puppet-services/
     */
    // puppet: 'wechaty-puppet-service'
    // puppetOptions: {
    //   token: 'xxx',
    // }
  }
  
  const bot = WechatyBuilder.build(options)
  
  
  const hostname = '0.0.0.0';
  const port = 8081;
  /**
   *
   * 2. Register event handlers for Bot
   *
   */
  bot
  .on('logout', onLogout)
  .on('login',  onLogin)
  .on('scan',   onScan)
  .on('error',  onError)
  .on('message', onMessage)
  
  bot.start()
  .catch(async e => {
    log.error('Bot start() fail:', e)
    await bot.stop()
    process.exit(-1)
  })
   // 中间常规的方法忽略......
  //下面就是启动http server
  http.createServer(function (request, response) {
    var post = '';
  
    if(request.method==="POST"){
      // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
      request.on('data', function(chunk){
        post += chunk;
      });
  
      // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
      request.on('end', function(){
        const ps = querystring.parse(post);
        response.writeHead(200, {"Content-Type": "application/json"});
        //检查合规后发送消息
        if(check(ps)) {
            //这里是向指定微信群中发消息
          sendMsgToRoom(ps['room'], toMsg(ps)).then(r => {
            log.info("发送成功.", ps['title'])
          })
          const json = JSON.stringify({
            status: 1,
            info: "success"
          });
          response.end(json);
        }
        else {
          const json = JSON.stringify({
            status: 0,
            info: "验证不通过"
          });
          response.end(json);
        }
      });
      // bot.do_something
    }else {
      // 发送响应数据 "Hello World"
      response.writeHead(200, {'Content-Type': 'text/plain'});
      response.end('Hello World\n');
    }
  }).listen(port, hostname, () => {
    log.info(`Server running at http://${hostname}:${port}/`);
  });
```

启动 docker 的时候，监听指定端口，我这里使用的是 8081，当然也可以通过-e，传入 docker 中供后面使用

```shell

  docker run -ti -d --name wechaty_http_service --rm -p "8081:8081" -e WECHATY_PUPPET_PADLOCAL_TOKEN="your puppet token" --mount type=bind,source="$(pwd)",target=/bot wechaty/wechaty:latest index.js

```

http server 会随着 wechaty 启动，一起启动。大家可以在消息体中加入自己需要的各种信息，然后通过向该 server 发送各种请求发送消息。

## 常见问题

1、为什么服务启动了，但是发送请求一直不成功？
>请查看服务器该端口是否连通，是否被防火墙禁止访问

2、服务器不允许在 url 后加端口访问怎么办？
>可以使用 nginx,apache 等进行转发。我这边用的是 nginx,简单配置如下：

```bash

  location /wechaty/ {
    proxy_set_header X-Real-IP $remote_addr;
    proxy_pass http://127.0.0.1:8081;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }

```

更多问题后续会根据反馈继续补充

## 联系方式

- Email：xiaowx2000@qq.com

> Author:[@xiaowx2010](https://github.com/xiaowx2010)
