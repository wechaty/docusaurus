---
title: Applying the documentation system to Wechaty docs
author: huan
categories: 
  - announcement
  - gsod
tags:
  - gsod
  - google
  - gsod-2021
  - docs
  - news
  - documentation
image: /assets/2021/03-google-season-of-docs-documentation-system/doc-sys-overview.webp
---

This year, Wechaty organization is applying the [Google Season of Docs](https://developers.google.com/season-of-docs) program because we want to improve our documentation for the community.

When I'm reading [Google Season of Docs - Project Ideas](https://developers.google.com/season-of-docs/docs/project-ideas), I found this great talk: [What nobody tells you about documentation, Daniele Procida, 2017, PyCon AU](https://2017.pycon-au.org/schedule/presentation/15/), which techs me **[The Grand Unified Theory of Documentation](https://documentation.divio.com/)**:

> There is a secret that needs to be understood
  in order to write good software documentation:
  there isn’t one thing called documentation, there are four.
>
> They are: tutorials, how-to guides, technical references, and explanations.
  They represent four different purposes or functions and
  require four different approaches to their creation.
  Understanding the implications of this will
  help improve most documentation - often immensely.

## What nobody tells you about documentation

In the Daniele's 30 minutes talk video, I decided to follow his principle to refactor our Wechaty Documentation website.

{% include iframe.html src="https://youtu.be/t4vKPhjcMZg" %}

> [What nobody tells you about documentation, Daniele Procida, 2017, PyCon AU](https://2017.pycon-au.org/schedule/presentation/15/)

In the above video, Daniele "_using real-life examples I'll draw out the key functions of documentation, and how they map onto different ways of writing it. Putting this into practice is simple when armed with some basic guidelines. The benefits are huge, and available with a minimum of effort._" ([link](https://2017.pycon-au.org/schedule/presentation/15/))

The most important concept is the following diagram:

![The Documentation System](/assets/2021/03-google-season-of-docs-documentation-system/doc-sys-overview.webp)

> Credit: [Documentation System](https://documentation.divio.com/)

By following the above concepts, I re-structured our docs site by a better understanding of what Wechaty documentation should be like, and also great help me to write a better GSoD proposal for submitting to Google.

## The Good Docs Project

[The Good Docs Project](https://thegooddocsproject.dev) is also a great project with huge helps.

The goal of the Good Docs Project is to improve open source software documentation by providing high quality templates and writing instructions to the open source community and beyond.

The following diagram illustrated the lifecycle of the documentation:

![The Good Docs Project](/assets/2021/03-google-season-of-docs-documentation-system/doctypes.webp)

> Each document type serves a different purpose and has differing requirements
  &mdash; [The Good Docs Project](https://thegooddocsproject.dev)

## Updated docs site

[![DIVIO documentation system](https://img.shields.io/badge/DIVIO-Documentation%20System-blue)](https://documentation.divio.com/)

Please read our branding new docs site at <http://wechaty.js.org/docs/> which following the concepts of documentation system!

## Related Issues

- Follow the Documentation System from Daniele Procida [#704](https://github.com/wechaty/wechaty.js.org/issues/704)
- Google Season of Docs Application [#72](https://github.com/wechaty/summer-of-wechaty/issues/72)
