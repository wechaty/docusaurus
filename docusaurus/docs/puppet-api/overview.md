---
title: Puppet API
sidebar_label: 'Overview'
---

## Intro

Puppet is the deep lying layer that communicates with the IM. As its name indicates, Wechaty controls the puppet and wrap it into connivent apis.

The package, ```wechaty-puppet``` defines the puppet class together with corresponding type definitions, abstract methods and more. A puppet that implements (not all methods are required) the puppet class can be loaded with Wechaty.

Popular puppets includes ```wechaty-puppet-wechat4u```, ```wechaty-puppet-workpro```, ```wechaty-puppet-whatsapp``` and more. Some puppets can be installed and run locally while others may requires a token and have to run with ```wechaty-puppet-service```. In this section, you'll learn the basic concepts of puppet and how to make your own puppet.

## Mixins

Puppet methods are categorized and defined in mixins. Mixins defines both abstract and implemented methods. This document will go through most mixins and introduce how you should implement the abstract methods in later section.

It is perfectly normal that some methods are not implemented or even cannot be implemented (due to not supported). You can throw an error in that case.

```ts
import { Puppet, throwUnsupportedError } from 'wechaty-puppet'

export class PuppetXXX extends Puppet {
  messageSendUrl() {
    throwUnsupportedError()
  }
}
```
