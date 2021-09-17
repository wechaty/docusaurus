---
title: Write documentation
---

We place a high importance on consistency and readability of documentation.
We aim to improve it as often as possible.

Documentation changes generally come in two forms:

- General improvements: typo corrections, error fixes and better
  explanations through clearer writing and more examples.

- New features: documentation of features that have been added to the
  framework since the last release.

This section explains how writers can craft their documentation changes
in the most useful and least error-prone ways.

## Getting the raw documentation

Though Wechaty's documentation is intended to be read as HTML at
<https://wechaty.js.org/docs/>, we edit it as a collection of markdown files for
maximum flexibility. These files live in the top-level ``docusaurus/docs/``
directory at Wechaty Website repository at <https://github.com/wechaty/wechaty.js.org>.

If you'd like to start contributing to our docs, get the latest version of
Wechaty website from the [website repository](https://github.com/wechaty/wechaty.js.org).

## Getting started with Docusaurus

Wechaty's documentation uses the [Docusaurus](https://docusaurus.io/) documentation system v2.
The basic idea is that powered by markdown with JSX supported(MDX), built using React documentation.

- <https://docusaurus.io/>
- <https://mdxjs.com/>

To build the documentation locally, install NPM dependencies:

```sh
npm install
```

Then build the website:

```sh
npm run docusaurus:start
```

To get started contributing, you'll want to read the :ref:`reStructuredText
reference <sphinx:rst-index>`.

Your locally-built documentation will be themed differently than the
documentation at [Docusaurus docs introduction](https://docusaurus.io/docs/docs-introduction).
This is OK! If your changes look good on your local machine, they'll look good
on the website.

## How the documentation is organized

The documentation is organized into several categories:

- [Tutorials](tutorials/overview.md) take the reader by the hand through a series
  of steps to create something.

  The important thing in a tutorial is to help the reader achieve something
  useful, preferably as early as possible, in order to give them confidence.

  Explain the nature of the problem we're solving, so that the reader
  understands what we're trying to achieve. Don't feel that you need to begin
  with explanations of how things work - what matters is what the reader does,
  not what you explain. It can be helpful to refer back to what you've done and
  explain afterwards.

- [explanations](explanations/overview.mdx) aim to explain a concept or subject at a
  fairly high level.

  Link to reference material rather than repeat it. Use examples and don't be
  reluctant to explain things that seem very basic to you - it might be the
  explanation someone else needs.

  Providing background context helps a newcomer connect the topic to things
  that they already know.

- [References](references/overview.mdx) contain technical reference for APIs.
  They describe the functioning of Wechaty's internal machinery and instruct in
  its use.

  Keep reference material tightly focused on the subject. Assume that the
  reader already understands the basic concepts involved but needs to know or
  be reminded of how Wechaty does it.

  Reference guides aren't the place for general explanation. If you find
  yourself explaining basic concepts, you may want to move that material to a
  topic guide.

- [How-to Guides](howto/overview.mdx) are recipes that take the reader through
  steps in key subjects.

  What matters most in a how-to guide is what a user wants to achieve.
  A how-to should always be result-oriented rather than focused on internal
  details of how Wechaty implements whatever is being discussed.

  These guides are more advanced than tutorials and assume some knowledge about
  how Wechaty works. Assume that the reader has followed the tutorials and don't
  hesitate to refer the reader back to the appropriate tutorial rather than
  repeat the same material.

## Writing style

When using pronouns in reference to a hypothetical person, such as "a user with
a session cookie", gender neutral pronouns (they/their/them) should be used.
Instead of:

- he or she... use they.
- him or her... use them.
- his or her... use their.
- his or hers... use theirs.
- himself or herself... use themselves.

Try to avoid using words that minimize the difficulty involved in a task or
operation, such as "easily", "simply", "just", "merely", "straightforward", and
so on. People's experience may not match your expectations, and they may become
frustrated when they do not find a step as "straightforward" or "simple" as it
is implied to be.

## Commonly used terms

Here are some style guidelines on commonly used terms throughout the
documentation:

- **Wechaty** &mdash; when referring to the framework, capitalize Wechaty.

- **email** &mdash; no hyphen.

- **TypeScript/JavaScript** &mdash; when referring to the language, capitalize TypeScript/JavaScript.

- **realize**, **customize**, **initialize**, etc. &mdash; use the American
  "ize" suffix, not "ise."

- **subclass** &mdash; it's a single word without a hyphen, both as a verb
  ("subclass that model") and as a noun ("create a subclass").

- **Web**, **World Wide Web**, **the Web** &mdash; note Web is always
  capitalized when referring to the World Wide Web.

- **website** &mdash; use one word, without capitalization.

## Wechaty-specific terminology

- **Puppet** &mdash; it's capitalized.

- **Puppet Provider** &mdash; it's capitalized.

- **Puppet Service** &mdash; it's capitalized.

- **TOKEN** &mdash; it's all capitalized.

## Guidelines for Markdown files

These guidelines regulate the format of our MD (Markdown) and MDX (Markdown + JSX)
documentation:

- In section titles, capitalize only initial words and proper nouns.

- Wrap the documentation at 80 characters wide, unless a code example
  is significantly less readable when split over two lines, or for another
  good reason.

- The main thing to keep in mind as you write and edit docs is that the
  more semantic markup you can add the better. So:

  ```md
  Add `django.contrib.auth` to your `INSTALLED_APPS`...
  ```

- Use these heading styles::

  ```md
  # One

  ## Two

  ### Three

  #### Four
    
  ##### Five
  ```

## Special Thanks

I have to credit Django doc authors, because this documentation page is inspired by, and mostly copy/pasted from [Django contributing docs](https://github.com/django/django/blob/main/docs/internals/contributing/writing-documentation.txt)
