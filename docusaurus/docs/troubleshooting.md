---
title: Troubleshooting Index
sidebar_label: Troubleshooting
---

This is a place to share common problems and solutions to them.
The examples use TypeScript, but you should still find them useful if you use something else.

## Table of Contents

- **Token**
  - [Concepts](#concepts)
  - [Motivations](#motivations)
  - [Alternatives](#alternatives)
- **Puppet**

## Nothing happens when I dispatch an action

Sometimes, you are trying to dispatch an action, but your view does not update. Why does this happen? There may be several reasons for this.

Never mutate reducer arguments
It is tempting to modify the state or action passed to you by Redux. Don't do this!

Redux assumes that you

## Something else doesn't work

Ask around on the **wechaty/wechaty** [Gitter.im](http://gitter.im/wechaty/wechaty) Gitter.im room,
or [create an issue](https://github.com/wechaty/wechaty/issues).
If you figure it out, [edit this document](https://github.com/wechaty/wechaty.js.org/edit/master/docs/troubleshooting.md)
as a courtesy to the next person having the same problem.
