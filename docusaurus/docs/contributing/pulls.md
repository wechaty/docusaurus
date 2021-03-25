---
title: Create pull requests
---

This section is addressed to the committers and to anyone interested in knowing
how code gets committed into Wechaty. If you're a community member who wants to
contribute code to Wechaty, look at [working with git](git.md) instead.

## Handling pull requests

Since Wechaty is hosted on GitHub, patches are provided in the form of pull
requests.

When committing a pull request, make sure each individual commit matches the
commit guidelines described below. Contributors are expected to provide the
best pull requests possible. In practice however, committers - who will likely
be more familiar with the commit guidelines - may decide to bring a commit up
to standard themselves.

If you find yourself checking out pull requests locally more often, this git
alias will be helpful:

```sh
[alias]
    pr = !sh -c \"git fetch upstream pull/${1}/head:pr/${1} && git checkout pr/${1}\"
```

Add it to your ``~/.gitconfig``, and set ``upstream`` to be ``wechaty/wechaty``.
Then you can run ``git pr ####`` to checkout the corresponding pull request.

At this point, you can work on the code. Use ``git rebase -i`` and ``git
commit --amend`` to make sure the commits have the expected level of quality.
Once you're ready:

```sh
# Pull in the latest changes from main.
git checkout main
git pull upstream main
# Rebase the pull request on main.
git checkout pr/####
git rebase main
git checkout main
# Merge the work as "fast-forward" to main to avoid a merge commit.
# (in practice, you can omit "--ff-only" since you just rebased)
git merge --ff-only pr/XXXX
# If you're not sure if you did things correctly, check that only the
# changes you expect will be pushed to upstream.
git push --dry-run upstream main
# Push!
git push upstream main
# Delete the pull request branch.
git branch -d pr/xxxx
```

Force push to the branch after rebasing on main but before merging and pushing
to upstream. This allows the commit hashes on main and the branch to match
which automatically closes the pull request.

If a pull request doesn't need to be merged as multiple commits, you can use
GitHub's "Squash and merge" button on the website. Edit the commit message as
needed and remove
the pull request number that's automatically appended to the message's first
line.

When rewriting the commit history of a pull request, the goal is to make
Wechaty's commit history as usable as possible:

- If a patch contains back-and-forth commits, then rewrite those into one.
  For example, if a commit adds some code and a second commit fixes stylistic
  issues introduced in the first commit, those commits should be squashed
  before merging.

- Separate changes to different commits by logical grouping: if you do a
  stylistic cleanup at the same time as you do other changes to a file,
  separating the changes into two different commits will make reviewing
  history easier.

- Beware of merges of upstream branches in the pull requests.

- Tests should pass and docs should build after each commit. Neither the
  tests nor the docs should emit warnings.

- Trivial and small patches usually are best done in one commit. Medium to
  large work may be split into multiple commits if it makes sense.

Practicality beats purity, so it is up to each committer to decide how much
history mangling to do for a pull request. The main points are engaging the
community, getting work done, and having a usable commit history.

## Committing guidelines

In addition, please follow the following guidelines when committing code to
Wechaty's Git repository:

- Never change the published history of ``wechaty/wechaty`` branches by force
  pushing. If you absolutely must (for security reasons for example), first
  discuss the situation with the team.

- For any medium-to-big changes, where "medium-to-big" is according to
  your judgment, please bring things up on the _wechaty_
  mailing list before making the change.

  If you bring something up on _wechaty_ mailist and nobody responds,
  please don't take that to mean your idea is great and should be
  implemented immediately because nobody contested it. Everyone doesn't always
  have a lot of time to read mailing list discussions immediately, so you may
  have to wait a couple of days before getting a response.

- Write detailed commit messages in the past tense, not present tense.

  - Good: "Fixed Unicode bug in RSS API."
  - Bad: "Fixes Unicode bug in RSS API."
  - Bad: "Fixing Unicode bug in RSS API."

  The commit message should be in lines of 72 chars maximum. There should be
  a subject line, separated by a blank line and then paragraphs of 72 char
  lines. The limits are soft. For the subject line, shorter is better. In the
  body of the commit message more detail is better than less:

  ```text
  Fixed #18307 -- Added git workflow guidelines.

  Refactored the Wechaty's documentation to remove mentions of SVN
  specific tasks. Added guidelines of how to use Git, GitHub, and
  how to use pull request together with Trac instead.
  ```

  Credit the contributors in the commit message: "Thanks A for the report and B
  for review." Use git's [Co-Authored-By][Co-Authored-By] as appropriate.

  [Co-Authored-By]: https://help.github.com/articles/creating-a-commit-with-multiple-authors/

- For commits to a branch, prefix the commit message with the branch name.
  For example: "[1.4.x] Fixed #xxxxx -- Added support for mind reading."

- Limit commits to the most granular change that makes sense. This means,
  use frequent small commits rather than infrequent large commits. For
  example, if implementing feature X requires a small change to library Y,
  first commit the change to library Y, then commit feature X in a separate
  commit. This goes a _long_ way- in helping everyone follow your changes.

- Separate bug fixes from feature changes. Bugfixes may need to be backported
  to the stable branch, according to **to-be-added**.

- If your commit closes an issue in the Wechaty [issues](https://github.com/wechaty/wechaty/issues),
  begin your commit message with the text "Fixed #xxxxx", where "xxxxx" is the
  number of the issue your commit fixes. Example: "Fixed #123 -- Added
  whizbang feature.". Any commit message in that format will automatically
  close the referenced issue and post a comment
  to it with the full commit message.

## Reverting commits

Nobody's perfect; mistakes will be committed.

But try very hard to ensure that mistakes don't happen. Just because we have a
reversion policy doesn't relax your responsibility to aim for the highest
quality possible. Really: double-check your work, or have it checked by
another committer, **before** you commit it in the first place!

When a mistaken commit is discovered, please follow these guidelines:

- If possible, have the original author revert their own commit.

- Don't revert another author's changes without permission from the
  original author.

- Use git revert -- this will make a reverse commit, but the original
  commit will still be part of the commit history.

- If the original author can't be reached (within a reasonable amount
  of time -- a day or so) and the problem is severe -- crashing bug,
  major test failures, etc. -- then ask for objections on the
  _wechaty_ mailing list then revert if there are none.

- If the problem is small (a feature commit after feature freeze,
  say), wait it out.

- If there's a disagreement between the committer and the
  reverter-to-be then try to work it out on the _wechaty_
  mailing list. If an agreement can't be reached then it should
  be put to a vote.

- If the commit introduced a confirmed, disclosed security
  vulnerability then the commit may be reverted immediately without
  permission from anyone.

- The release branch maintainer may back out commits to the release
  branch without permission if the commit breaks the release branch.

- If you mistakenly push a topic branch to ``wechaty/wechaty``, delete it.
  For instance, if you did: ``git push upstream feature_antigravity``,
  do a reverse push: ``git push upstream :feature_antigravity``.

## Special Thanks

I have to credit Django doc authors, because this documentation page is inspired by, and mostly copy/pasted from [Django contributing docs](https://github.com/django/django/blob/main/docs/internals/contributing/committing-code.txt)
