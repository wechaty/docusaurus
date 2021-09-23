---
title: Advice for new contributors
---

New contributor and not sure what to do? Want to help but just don't know how
to get started? This is the section for you.

This page contains more general advice on ways you can contribute to Wechaty,
and how to approach that.

If you are looking for a reference on the details of making code contributions,
see the [Writing code](coding.md) documentation.

## First steps

Start with these steps to discover Wechaty's development process.

- **Triage issues**

  If an [open issue](https://github.com/wechaty/wechaty/issues?q=is%3Aopen+is%3Aissue)
  reports a bug, try and reproduce it.
  If you can reproduce it and it seems valid,
  make a note that you confirmed the bug
  and accept the ticket. Make sure the ticket is filed under the correct
  component area. Consider writing a patch that adds a test for the bug's
  behavior, even if you don't fix the bug itself.

- **Look for issues that are accepted and review patches to build familiarity
  with the codebase and the process**

  Mark the appropriate flags if a patch needs docs or tests.
  Run the tests and make sure they pass.
  Where possible and relevant, try them out on your environment.
  Leave comments and feedback!

- **Keep old patches up to date**

  Oftentimes the codebase will change between a patch being submitted and the
  time it gets reviewed. Make sure it still applies cleanly and functions as
  expected. Updating a patch is both useful and important!

- **Write some documentation**

  Wechaty's documentation is great but it can always be improved. Did you find
  a typo? Do you think that something should be clarified? Go ahead and
  suggest a documentation patch! See also the guide on [writing documentation](documentation.md).

- **Sign the Contributor License Agreement**

  The code that you write belongs to you or your employer. If your
  contribution is more than one or two lines of code, you need to sign the
  [CLA](https://cla-assistant.io/wechaty/wechaty). See the
  [Contributor License Agreement](https://en.wikipedia.org/wiki/Contributor_License_Agreement)
  for a more thorough explanation.

## Guidelines

As a newcomer on a large project, it's easy to experience frustration. Here's
some advice to make your work on Wechaty more useful and rewarding.

- **Pick a subject area that you care about, that you are familiar with, or
  that you want to learn about**

  You don't already have to be an expert on the area you want to work on; you
  become an expert through your ongoing contributions to the code.

- **Analyze issues' context and history**

  Issue isn't an absolute; the context is just as important as the words.
  When reading Issue, you need to take into account who says things, and when
  they were said. Support for an idea two years ago doesn't necessarily mean
  that the idea will still have support. You also need to pay attention to who
  _hasn't_ spoken -- for example, if an experienced contributor hasn't been
  recently involved in a discussion, then a ticket may not have the support
  required to get into Wechaty.

- **Start small**

  It's easier to get feedback on a little issue than on a big one. See the
  [good first issue](https://github.com/search?q=org%3Awechaty+label%3A%22good+first+issue%22&type=issues).

- **If you're going to engage in a big task, make sure that your idea has
  support first**

  This means getting someone else to confirm that a bug is real before you fix
  the issue, and ensuring that there's consensus on a proposed feature before
  you go implementing it.

- **Be bold! Leave feedback!**

  Sometimes it can be scary to put your opinion out to the world and say "this
  ticket is correct" or "this patch needs work", but it's the only way the
  project moves forward. The contributions of the broad Wechaty community
  ultimately have a much greater impact than that of any one person. We can't
  do it without **you**!

- **Err on the side of caution when marking things Ready For Check-in**

  If you're really not certain if a ticket is ready, don't mark it as
  such. Leave a comment instead, letting others know your thoughts. If you're
  mostly certain, but not completely certain, you might also try asking on Gitter
  to see if someone else can confirm your suspicions.

- **Wait for feedback, and respond to feedback that you receive**

  Focus on one or two issues, see them through from start to finish, and
  repeat. The shotgun approach of taking on lots of issues and letting some
  fall by the wayside ends up doing more harm than good.

- **Be rigorous**

  When we say "must have docs and tests", we mean it. If a patch
  doesn't have docs and tests, there had better be a good reason. Arguments
  like "I couldn't find any existing tests of this feature" don't carry much
  weight--while it may be true, that means you have the extra-important job of
  writing the very first tests for that feature, not that you get a pass from
  writing tests altogether.

## FAQ

1. **This issue I care about has been ignored for days/weeks/months! What can
   I do to get it committed?**

   First off, it's not personal. Wechaty is entirely developed by volunteers
   (except the Wechaty fellow), and sometimes folks just don't have time. The
   best thing to do is to send a gentle reminder to the Wechaty maillist
   asking for review on the issue, or to bring it up in the
   [Gitter channel](https://gitter.im/wechaty/wechaty).

2. **I'm sure my issue is absolutely 100% perfect, can I mark it as RFC
   myself?**

   Short answer: No. It's always better to get another set of eyes on a
   ticket. If you're having trouble getting that second set of eyes, see
   question 1, above.

## Special Thanks

I have to credit Django doc authors, because this documentation page is inspired by, and mostly copy/pasted from [Django contributing docs](https://github.com/django/django/blob/main/docs/internals/contributing/new-contributors.txt)
