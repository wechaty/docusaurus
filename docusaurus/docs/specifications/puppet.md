---
title: Puppet
---

## Puppet

Here are some rules that a Wechaty Puppet should follow:

1. [ ] **Emit Self Messages**: when the bot says anything, the bot should receive a message said by itself. (and the `message.self()` will return true for this message)
1. [ ] **Perfect Logout**: `logout` method should clean all the user session data from the puppet service, and the status of the App on the phone should display correctly (not log in on any devices).
1. [ ] **State-less Session Management** (with MemoryCard support): the puppet service should save the user session data to the memory card, and can be restored from the memory card. (See: #16)
1. [ ] **MIME File Name Extension Convention**: FileBoxChunk.name must be able to convert to a MIME type and versa visa. The puppet needs to set the name with the right extension (.jpg, .pdf, etc) to the name of the file box. See: <https://github.com/wechaty/wechaty-puppet-hostie/discussions/115>,
1. [ ] To be added.

See: <https://github.com/wechaty/puppet-services/discussions/54>

## MemoryCard

When a Wechaty bots logged in, it will have a authorized secret data to store their logged-in session, for example, the device information (62 data for pad protocol), the cookie (if you are using the web protocol), and the user session secrets, etc.

The [memory card](https://github.com/huan/memory-card) is a module designed to store those data.

### Wechaty bot login with memory card module

1. wechaty start()
1. wechaty instanciates memory card (see [wechaty.ts:start()](https://github.com/wechaty/wechaty/blob/30c446b2b78c92166a1d613952e77d3e3fdbbe1f/src/wechaty.ts#L681))
1. wechaty set memory card to puppet (see [wechaty.ts:initPuppet()](https://github.com/wechaty/wechaty/blob/30c446b2b78c92166a1d613952e77d3e3fdbbe1f/src/wechaty.ts#L406))
    1. puppet start()
    1. puppet load session from memory card
    1. puppet logged in
        1. by loaded session, or
        1. by scan qr code
    1. puppet save the session secret data to memory card
1. memory card will be saved to file or network storage for future reuse

### Conclusion

By saving the user login session secret data to memory card, the Wechaty system can save the state to local, so that it can make the puppet service provider service stateless.

Current neither of the Donut, WXWork, Rock, PadLocal have not support this stateless feature, nor the Wechaty system are ready for it.

To be implemented for our ecosystem.

See: <https://github.com/wechaty/puppet-services/discussions/16>

## Event Order

I think I can contribute some analytics to this problem:

1. As the log & puppet testing shows: the `ready` event is after the `login` event
1. However, the Wechaty system needs to load the contact payload of the `userSelf` before it emits the `login` event because the login event of Wechaty needs to take a `userSelf` instance, and it needs to be `ready-ed`.

So there will be some delay before the Wechaty emit the `login` event after it received the `login` event from its puppet.

Please pay attention to this behavior and let me know if this issue was caused by it.

### Potential Solution

For a more robust Wechaty system, we can consider saving the `ready` event if the `login` event is not emitted in Wechaty.

And when we emit the `login` event in Wechaty, we can check if the puppet has already `ready-ed`, and if so, it can emit the `ready` event right after the `login` event.

See: <https://github.com/wechaty/puppet-services/issues/31>

## Event: `ready`

Need to fire `ready` event after the bot logined and all data has been synced.

> For example, after we re-installed the WeChat app on our phone, it has to load contacts/rooms from the server for a long time.

See: <https://github.com/wechaty/wechaty-puppet-service/issues/18>

## NPM Publication

- [ ] `wechaty-puppet` must not a dependency. It should be put in devDependencies and peerDependencies
- [ ] `wechaty` must not a dependency. It should be put in devDependencies and peerDependencies
- [ ] must exist `examples/ding-dong-bot.ts` to implement the ding/dong logic, use puppet api only.
