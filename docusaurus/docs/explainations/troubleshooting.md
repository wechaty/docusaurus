---
title: Troubleshooting
---

![Wechaty: Conversational RPA SDK for Chatbot Makers](/img/wechaty-logo.svg)

The Troubleshooting section discusses the most common problems that you will encounter while creating a chatbot using Wechaty, contributing to Wechaty codebase, contributing to Wechaty documentation, or developing Wechaty puppet and how to fix them.

## I cannot log in with my Wechat account

Wechat accounts registered after 2017 can't log in via Web API because this is a limitation. Click [this issue](https://github.com/wechaty/wechaty/issues/872) for more information.
However, Wechaty supports protocols other than Web API, such as Pad. Learn more about it [in this issue](https://github.com/wechaty/wechaty/issues/1296).

## Nothing happens when I dispatch an action when using Wechaty with Redux

Redux is a state management library you can use with Wechaty. It has the concept of [immutability](#placeholder-link). Sometimes, you can dispatch an action that correctly updates the state in the redux store but your view does not update. One of the reasons for that happening is because you are mutating the existing state instead of returning the new state. Therefore never mutate state when using Redux with Wechaty even if it is tempting to do so.

## Ding dong bot displays error after scanning QR code

When running the ding dong bot using [wechaty-getting-started repository](https://github.com/wechaty/wechaty-getting-started), on [Gitpod](#placeholder-link) or [Google cloud shell](#placeholder-link), the default Instant Messaging platform is [Wechat](#placeholder-link). Scanning QR codes for other Instant messaging platforms won't work unless you explicitly set the value of the`WECHATY_PUPPET` environment variable to the puppet service provider name as described in the [wechaty-getting-started README page](https://github.com/wechaty/wechaty-getting-started/issues).

## I am submitting a blog post for publication but the tests are failing

We have a set of [guidelines](https://github.com/wechaty/wechaty.js.org) that you must follow when writing a blog post for publication. If the tests are failing after creating a pull request, it is most likely because you missed something or did not follow the required writing style. We recommed that you read through the [How to post a blog post](https://github.com/wechaty/wechaty.js.org) section of the [wechaty.js.org repository README](https://github.com/wechaty/wechaty.js.org) one more time.

You can also reach out to us on the [Wechaty Gitter channel](https://gitter.im/wechaty/wechaty) if you fail to make the tests pass. We shall be happy to help.

## I am getting `Failed to exec pre-push hook script` error when I try to push my changes to GitHub

There is a [pre-push hook](https://github.com/Chatie/git-scripts#readme) that has been configured to run `npm run lint` and then `npm version patch` before `git push` for better code quality and version management. If it is your first time pushing the current branch to remote or you haven't set the current local branch to track the remote and you encounter the `Failed to exec pre-push hook script` error, try temporarily disabling the `pre-push` hook by prepending `NO_HOOK=1` to the `git push` command and then push with `-u`  or `--set-upstream` flag so that the local branch will start tracking the remote.

```sh
# for Linux & Mac
NO_HOOK=1 git push -u remote-repository branch-name

# for Windows
set NO_HOOK=1  git push -u remote-repository branch-name
```

If you used the above command and the local branch is tracking the remote, you can simply run `git push` without `NO_HOOK=1` in the subsequent push.

```sh
git push
```

You can also push with `--no-verify` flag instead of prepending `NO_HOOK=1`.

```sh
git push remote-repository branch-name --no-verify
```

## My problem has not been discussed here

If your problem is not covered here, you can chat with us on [Wechaty Gitter](https://gitter.im/wechaty/wechaty) or you may create an issue on [Wechaty issues](https://github.com/wechaty/wechaty/issues). Please update this page once you have found a solution. Someone else might face the same problem in the future.
