---
title: Bot Development
sidebar_label: 'Hello World'
---

# Hello World

In this section, we'll create a simple puppet with a hypothetical IM. To make the example, this IM does not requires scanning qrcode to login, instead you get the right token you can login.

Suppose there is an IM called OO. It provides the following APIs:

- Get self info with token
- Get contact list with token
- Get Contact Info with id
- Send Text with token

(Kinda like WXKF.)

First of all, we need to install dependencies by

```bash
npm install wechaty-puppet
npm install axios
```

Puppet code:

```ts
import { Puppet } from 'wechaty-puppet'
import axios from 'axios'

export class PuppetOO extends Puppet {
  
  private readonly token: string

  private selfInfo: any

  constructor(options) {
    this.token = options.token
  }

  async onStart(): Promise<void> {
    const selfInfo = (await axios.get(`https://oo.com/info?token=${this.token}`)).data

    this.selfInfo = data

    this.login(this.selfInfo.id)
  }

  contactRawPayloadParser(payload: any) {
    return payload
  }

  async contactRawPayload(id) {
    const contactInfo = await axios.get(`https://oo.com/contactInfo?id=${id}`).data

    return contactInfo
  }

  async contactList() {
    const contactList = await axios.get(`https://oo.com/contactList?token=${this.token}`).data

    return contactList
  }

  async messageSendText(conversationId: string, text: string) {
    await axios.post(`https://oo.com/messageSendText?token=${this.token}`, {
      conversationId,
      text
    })
  }
}
```

This puppet can login with the token, get contact info, and send text messages. Despite there are still many methods to be implemented, this is a mini puppet that will work with wechaty.
