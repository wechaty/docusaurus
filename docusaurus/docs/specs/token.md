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

## Tools

Here's some useful tools to deal with your token.

### Online UUID Generator

import { CopyToClipboard } from 'react-copy-to-clipboard'
import { v4 } from 'uuid'

export const UUIDv4 = () => {
  const data = {
    token: v4(),
  }
  const update = () => {
    alert(`Has copied ${data.token} to your clipboard.`)
    data.token = v4()
  }
  return (
    <div>
      <CopyToClipboard text={data.token}
        onCopy={ update }>
        <button>Copy { data.token } to clipboard</button>
      </CopyToClipboard>
    </div>
  )
}

1. Copy from below:
    <UUIDv4 />
2. Visit UUID Generator:
    <https://www.uuidgenerator.net/version4>

### Wechaty Puppet Service Token Validator

<!-- TODO: huan(202104) -->

## Blogs

1. [Introducing Wechaty Puppet Service (Providers), @huan, Jan 14, 2021](https://wechaty.js.org/2021/01/14/wechaty-puppet-service/)
