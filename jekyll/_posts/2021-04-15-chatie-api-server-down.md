---
title: "Server Incident Report: Chatie API Down"
author: huan
categories: article
tags:
  - chatie
  - down
  - heroku
  - cloudflare
image: /assets/2021/04-chatie-api-server-down/
---

The [Wechaty Puppet Service](https://wechaty.js.org/docs/puppet-services) is supported by the <https://www.chatie.io> service, which is open-sourced at [here](https://github.com/chatie/server), has been running for 5+ years on a [Heroku](https://www.heroku.com) free Dyno with [Cloudflare](https://www.cloudflare.com) CDN, and everything works like a charm.

The Wechaty Puppet Service Server will register theirselves to <https://api.chatie.io> with their [Wechaty Puppet Token](https://wechaty.js.org/docs/specs/token), and the Wechaty Puppet Service Client will use this token for service discovery.

For example, the following is a node.js Wechaty started with a token:

```sh
export WECHATY_PUPPET_SERVICE_TOKEN=__token__
npm start
```

In the past 6 months, our online [Hostie](https://wechaty.js.org/docs/specs/hostie) has increased fast, from 1,000, then 2,000, and now it's 3,000+ concurrency with a peek number around 3,500.

On April 15, 2021, we have a huge server incident due to the Heroku and Cloudflare free servcies:

1. Heroku limited our Dyno for no more than 1,000 concurrency WebSockets, which raised [H11 - Backlog too deep](https://devcenter.heroku.com/articles/error-codes#h11-backlog-too-deep) errors.
1. Cloudflare false report DDoS attatck and block all our visitors when we have 3,000+ WebSocket connections trying to connect to us when server rebooted.

## Heroku Error H11

- [Does Heroku still limit Websocket connections?](https://elixirforum.com/t/does-heroku-still-limit-websocket-connections/20029)

## Cloudflare HTTP DDoS (false alarm)

TBW
