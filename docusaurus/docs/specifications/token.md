---
title: Wechaty Puppet Service Token
sidebar_label: Token
---

Wechaty Puppet Service Token (TOKEN), is ... (tbw)

## Format / Convensions

1. `puppet_wxwork_id`
1. `UUIDv4`

## Service Discovery

In-service / Out-service check:

```sh
curl https://api.chatie.io/v0/hosties/__TOKEN__
```

1. `HTTP/200`: In-service
1. `HTTP/404`: Out-service

## Online UUID Generator

<https://www.uuidgenerator.net/version4>
