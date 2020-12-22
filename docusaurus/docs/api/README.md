---
slug: /api/
title: Wechaty API Reference
sidebar_label: 'API Index'
---

<!-- Curious Beginner: API reference - Details all elements in an API. -->
<!-- Active User: API Guide - Contains far greater detail (including edge cases) than a tutorial or Codelab. -->

The Wechaty API surface is tiny. Wechaty defines a set of easy to use classes for you.

This section documents the complete Wechaty API.

## Top-level Exports

Every class described below is a top-level export.

### Wechaty Class

- [Class Wechaty](./wechaty)

### User Classes

- [Class Message](./message)
- [Class Contact](./contact)
  - [Class ContactSelf](./contact-self)
- [Class Room](./room)
  - [Class RoomInvitation](./room-invitation)
- [Class Friendship](./friendship)

## Importing

You can import any of them like this:

### ES6/TypeScript

```js
import { Wechaty } from 'wechaty'
```

### ES5 (CommonJS)

```js
var Wechaty = require('wechaty').Wechaty
```
