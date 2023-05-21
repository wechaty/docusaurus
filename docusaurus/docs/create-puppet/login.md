---
title: Login
sidebar_label: 'Login'
---

# Login Mixin

Unlike other mixins, login mixin contains no abstract methods. Instead it contains many useful properties and methods you can use when writing a puppet. You don't have to implement any methods in this section, it's just an introduction about how things are done and how can you access to important properties in your puppet development process.

## Properties

### currentUserId

```ts
get currentUserId (): string
```

Get the id of the bot. If the bot is logged in (no id), an error will be thrown.

### isLoggedIn

```ts
get isLoggedIn (): boolean
```

Get whether the bot is logged in or not.

### authQrCode

```ts
get authQrCode (): undefined | string
```

Get the latest qrcode for logging in, will be cleared after login.

## Methods

### login

```ts
login (userId: string): void
```

Should be called by the puppet when logging in. This method will emit a ```login``` event, set ```currentUserId``` property so you should not do so in puppet implementation.

### login

```ts
async logout (reason = 'logout()'): Promise<void>
```

Should be called by the puppet when logging out. This method will emit a ```logout``` event, clear ```currentUserId``` property so you should not do so in puppet implementation.
