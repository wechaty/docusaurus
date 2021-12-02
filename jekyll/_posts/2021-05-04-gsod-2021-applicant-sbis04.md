---
title: "Google Season of Docs 2021 Applicant: Souvik Biswas"
author: sbis04
categories: gsod
tags:
  - google
  - gsod
  - 2021
  - docs
  - introduction
  - project
  - proposal
image: /assets/2021/05-gsod-2021-applicant-sbis04/wechaty_contributor_gsod_2021.webp
---

I am [Souvik Biswas](https://www.souvikbiswas.com/), currently pursuing a Bachelor of Technology degree (2018 - 2022) in Computer Science & Engineering from the Indian Institute of Information Technology Kalyani. Also, a freelance technical writer of Codemagic and LogRocket Blog, and a passionate mobile app developer.

I love open source contribution and even have a number of projects of my own which are available on **GitHub**, you can find them [here](https://github.com/sbis04). Maintainer of the Flutter package [video_trimmer](https://pub.dev/packages/video_trimmer). Have contributed to a number of organizations in the past, and had been a part of **Hacktoberfest** 2018, 2019 & 2020.

I have worked on over **70 technical articles** having **500K+ views** which are published on various platforms including [Medium](https://medium.com/@sbis1999), [Codemagic Blog](https://blog.codemagic.io/) and [LogRocket Blog](https://blog.logrocket.com/). Apart from that, I have also worked on **2 ebooks** which are published by Codemagic.

You can connect with me on [Twitter](https://twitter.com/sbis04) or [LinkedIn](https://www.linkedin.com/in/sbis04/).

**I am an applicant of GSoD 2021 for the Wechaty organization for improving their tutorial section of the documentation and make it more beginner friendly.**

## GSoD 2021 Project Proposal

**Open source organization:** Wechaty

**Project:** Create easy to learn tutorials for beginner users of Wechaty

* **Name:** Souvik Biswas
* **Email:** sbis1999@gmail.com
* [Website](https://www.souvikbiswas.com)
* [Github](https://github.com/sbis04)
* [Medium](https://medium.com/@sbis1999)
* [Linkedin](https://www.linkedin.com/in/sbis04)
* **Project length:** Standard length (3 months)

### Technical Writing Experience

#### Freelance Technical Writer - Codemagic Blog

Have written over 60+ articles and contributed to 2 ebooks published by Codemagic.

* Topics of the articles consists of Android, Flutter, React Native, DevOps, CI/CD
* Contributed to Flutter Libraries ebook and CI/CD for Mobile App Developers
* Have written a comprehensive Cheatsheet of Codemagic YAML

#### Freelance Technical Writer - LogRocket Blog

Started writing articles related to Flutter framework

* New concepts introduced by Flutter 2.0
* Integration of Flutter with various services
* Comprehensive code walkthrough

#### Technical Writer - Flutter Community

Published various articles, mostly consisting of code walkthroughs. The articles have received over **350K+ view**s on Medium.

* Each article has a supporting sample app open-sourced on GitHub
* Covered various important concepts in Flutter
* Testing in Flutter
* Code-signing and delivering apps to different platforms

#### Technical Writer - ProAndroidDev

Written articles on various UI and Navigation components used in Android.

* Building complex layouts
* Using Navigation component in Android
* Kotlin’s new features
* Code walkthrough

#### Technical Writer - Journal

Have written article on VR on web

* Building VR apps using React360
* Integrating React360 VR apps in Flutter
* Deploying to GitHub Pages

### Research Work

I am a part of a research group of our university, working on new **post-quantum encryption schemes** and **Blockchain**. We have submitted three research papers for publication which received a very positive feedback from the editors and would be published soon. We are currently working on a new consensus algorithm which would be compatible with IoT devices.

### Links to some of my most popular articles

I have worked on over **70 articles** published across various sites including Medium, Codemagic Blog, LogRocket Blog. Have contributed to **2 ebooks** published by Codemagic.

* [Flutter: Implementing Google Sign In](https://medium.com/flutter-community/flutter-implementing-google-sign-in-71888bca24ed)
* [Codemagic YAML cheat sheet](https://blog.codemagic.io/codemagic-yaml-cheatsheet/)
* [Ebook on CI/CD for Mobile Apps](https://codemagic.io/ci-cd-ebook/)
* [Flutter libraries ebook](https://codemagic.io/flutter-libraries-ebook/)
* [Designing complex UI using Android ConstraintLayout](https://proandroiddev.com/designing-complex-ui-using-android-constraintlayout-cb0606823da0)
* [My Journey building a Video Trimmer package for Flutter](https://medium.com/flutter-community/my-journey-building-a-video-trimmer-package-for-flutter-73cd82997a7f)
* [Flutter VR: Flutter + React 360 + GitHub Pages](https://medium.com/flutter-community/my-journey-building-a-video-trimmer-package-for-flutter-73cd82997a7f)
* [How to run React Native Detox tests on Codemagic](https://blog.codemagic.io/react-native-detox-tests-on-codemagic/)
* [Dart vs Kotlin: detailed comparison](https://blog.codemagic.io/dart-vs-kotlin/)
* [How to take advantage of Dynamic Workflows using Codemagic API](https://blog.codemagic.io/dynamic-workflows-with-codemagic-api/)
* [How to perform text recognition using Firebase ML Kit in Flutter](https://blog.codemagic.io/text-recognition-using-firebase-ml-kit-flutter/)
* [iOS Code Signing and Publishing with Codemagic .yaml file](https://blog.codemagic.io/distributing-native-ios-sdk-with-flutter-module-using-codemagic/)

These were some of the articles, you can find more [here](https://medium.com/@sbis1999). Apart from this, I have also done a significant amount of contribution to the [Codemagic Documentation](https://docs.codemagic.io/).

### Abstract

#### Current State of Wechaty Tutorials

* Users come to Wechaty website seeking how to use Wechaty to build a chatbot application for solving their problems. Unfortunately, the learning curve is not friendly to our users, they always struggle with setting up with their development environment, can not get started with the simplest example source code, and find it hard to know what they can do with our API. This problem leads to us losing lots of new users, increased number of questions asked in the community, and lowered user satisfaction.

* The current version of the Wechaty Tutorials is not properly structured.

* The tutorials on the website needs improvement, and should be beginner friendly.

### Proposed Work

Update the **Tutorials** to include a step-by-step guide (easy for beginners to follow) for achieving the final goal of building a bot.

The Tutorial project should:

* Allow the user to learn by doing
* Get the user started
* Make sure that the tutorial works all the time
* Ensure the user sees results immediately
* Make the tutorial repeatable
* Focus on concrete steps, not abstract concepts
* Provide the minimum necessary explanation
* Focus only on the steps the user needs to take
* Work with the contributor team to update the documentation on the Wechaty site.
* Add easy to follow video tutorials

Each of the documentation page should be structured in a particular format (so that users get familiarized with the format and would be much easier to follow). And, each of the tutorial pages for building a bot should contain an interactive **CodeSandbox** at the end (consisting of minimal code and TODO steps) where they can apply the knowledge that they gained by following the tutorial, and build a bot totally by themselves!

I have included a detailed **structure** (further down the article) of each documentation page that I propose to be followed for every bot building tutorial.

One more thing that I noticed in the Tutorials is the lack of a **defined goal** that the user should expect to achieve at the end of that step-by-step guide. So, there should be a clear description of the goal in the introduction of each tutorial.

### Contributions

Some contributions that I have done to the [Wechaty GitHub repo](https://github.com/wechaty/wechaty.js.org) are mentioned below:

* Update Getting started - Running locally instructions ([#763](https://github.com/wechaty/wechaty.js.org/pull/763))
* Update the vorpal demo screenshot ([#780](https://github.com/wechaty/wechaty.js.org/pull/780))
* Add instructions and interactive sandbox for Vorpal ([#779](https://github.com/wechaty/wechaty.js.org/pull/779))
* Update vorpal with wechaty doc ([#772](https://github.com/wechaty/wechaty.js.org/pull/772))
* Update Getting started - Running locally ([#757](https://github.com/wechaty/wechaty.js.org/pull/757))
* Improve Vorpal docs ([#791](https://github.com/wechaty/wechaty.js.org/pull/791))
* Update images to use normal Markdown format - Vorpal tutorial page ([#802](https://github.com/wechaty/wechaty.js.org/pull/802))

### Project Goals (Timeline)

### Before May 1

* Familiarize myself with the current version of the user documentation of Wechaty, and identify the parts that require improvements.

* Make contributions to the Wechaty repository adding some improvements.

### Community bonding

* Set up a communication channel and time (due to timezone difference).
* Refine my goals and set expectations on both sides.
* Discussing about the structure of each tutorial page in documentation.
* Finalize the order of editing the tutorial sections.
* Discuss about the best way to add the interactive CodeSandboxes

### Documentation Period

Wechaty repository [here](https://github.com/wechaty/wechaty.js.org)

As per the discussion with the community members, start working on a tutorial page - adding the improvements, properly structuring the pages, adding interactive CodeSandbox, adding video walkthrough (if necessary), adding relevant screenshots and defining a goal in the introduction of the tutorial (so that users have the idea of what they will achieve at the end of the tutorial).

A proposed structure of the tutorial documentation is as follows:

* **Introduction** (also include the goal of the tutorial)
* **Try out the bot** (CodeSandbox)
* **Requirements** (tools required to follow the tutorial)
* **Usage** (code snippet - for users who may be searching for how to use the bot in their project, and doesn’t want to go deep into the step-by-step tutorial)*
* **Video tutorial** (optional)*
* **Getting started** (Quick introduction to the required tools and how to setup their development environment to get started building the bot)
* **Building the bot** (step-by-step guide for building the bot, with a CodeSandbox at the end having minimal code and TODO steps where users can try building the bot by themselves directly on the documentation page without installing any tools on their local system)
* **Running the bot** (commands for running the bot locally)
* **Bot demonstration** (commands that they can use with the bot, and maybe a GIF showing the invocation of some of the commands on WeChat or WhatsApp)
* **Conclusion**
* **References**

> *Require some feedback from the community members

#### Week 1 : (1st May - 8th May)

* Start by adding missing content to one of the tutorials (maybe **Vorpal** first as I have already started contributing to that page)
* Try out the bot (**CodeSandbox** - already added: [#779](https://github.com/wechaty/wechaty.js.org/pull/779))
* Update the step-by-step guide to have more technical details on how to build the bot, adding brief explanation of each function used
* Add a **CodeSandbox** at the end with the TODO (as explained above)
* Structure the tutorial properly as per the proposed structure given above

#### Week 2 : (9th May - 15th May)

* Update the [Tutorials: Overview](https://wechaty.js.org/docs/tutorials/) page by adding information about what are the different types of tutorial available that then can go through (keep updating this as new tutorials are added to the docs)
* In the [Getting started overview](https://wechaty.js.org/docs/getting-started/) page add information about what are the different ways that can get started with Wechaty bots.
* Include the **CodeSandbox** of the Ding Dong bot to the [Quick start](https://wechaty.js.org/docs/getting-started/quick-start) page, so that users can try out the bot directly.
* Short videos may be included for running the Ding Dong bot using GitPod and Google Cloud Shell.
* Update the page with screenshots or GIF of the Ding Dong bot running on a device (WeChat / WhatsApp).

#### Week 3 : (16th May - 22nd May)

* Add getting started examples for [Polyglot Wechaty](https://wechaty.js.org/docs/polyglot/) (multi-language) as per the conversation [here](https://github.com/wechaty/wechaty.js.org/pull/763#discussion_r619794643).
* Update the page structure and include **CodeSandbox** for the bot (if necessary).
* Add screenshots / GIFs to this page.
* Device screenshots / GIF after running the bot.

#### Week 4 : (23rd May - 29th May)

* Check any improvements that can be made to the [Usage with Docker](https://wechaty.js.org/docs/tutorials/docker) page, and add any missing section (if required).
* Verify the examples run properly on Wechaty Docker.
* Make the page consistent and follow the proposed structure.
* Add screenshots / GIF of the running Docker instance (if required)

#### Week 5 : (30th May - 5th June)

* Add instructions to the [Usage with Heroku](https://wechaty.js.org/docs/tutorials/usage-with-heroku) page.
* Structure this page correctly.
* Add screenshots while updating the instructions.

#### Week 6 : (6th June - 12th June)

* The [Using Plugin with Wechaty](https://wechaty.js.org/docs/tutorials/using-plugin-with-wechaty) page can be divided into several sub-sections each consisting of a tutorial for one Wechaty Plugin Contrib Package.
* Adding information and step-by-step tutorial for each plugin.
* Include a **CodeSandbox** to try out the bot.
* Add screenshots and GIFs where necessary.

#### Week 7 : (13th June - 19th June)

* Continue with creating separate pages for each plugin.
* Make each page follow the proposed structure
* Adding information and step-by-step tutorial for each plugin.
* Include a **CodeSandbox** to try out the bot.
* Adding screenshots and GIFs where necessary.

#### Week 8 : (20th June - 26th June)

* Add proper introduction to the [Using Redux with Wechaty](https://wechaty.js.org/docs/tutorials/using-redux-with-wechaty) along with a defined goal for following this tutorial.
* Structure the page properly
* Include code explanation and interactive **CodeSandbox**.
* Add screenshots or GIFs (if necessary)

#### Week 9 : (27th June - 3rd July)

* Create tutorial pages for some of the bots mentioned on the [Showcases](https://wechaty.js.org/docs/showcases/) page (need feedback from the community members).
* Build tutorial for [OSSChat](https://wechaty.js.org/docs/showcases/osschat-bot) bot (if approved by community members).
* Add **CodeSandbox** and code explanation.
* Add screenshots or GIFs (if necessary)

#### Week 10 : (4th July - 10th July)

* Work on creating tutorials for using the [RuiBot](https://wechaty.js.org/docs/showcases/rui-bot) & [Friday BOT](https://wechaty.js.org/docs/showcases/friday-bot)
* Include step-by-step guide and **CodeSandbox**
* Add screenshots or GIFs (if necessary)

#### Week 11 : (11th July - 17th July)

* Start working on the [Cheat Sheet](https://wechaty.js.org/docs/tutorials/cheatsheet) which would consist of the following:
  * Brief description of a bot
  * Code snippet to use it
  * Tech description (in brief)
  * Example - CodeSandbox (maybe included)
  * Screenshots / GIFs

Creating the cheat sheet will take time (most probably two weeks).

#### Week 12 : (18th July - 24th July)

* Continue with the cheat sheet.
* Create short video tutorials for some of the most used bots (if necessary).
* Decide what are the things to be included to the [Examples](https://wechaty.js.org/docs/tutorials/examples) page.

#### Week 13 & 14

* Add **multi-language support** to the tutorials lacking it.
* Including content to some of the pages of **How-to Guides** by discussing with the community members
* Add content to the [Testing](https://wechaty.js.org/docs/contributing/testing) page
* Improve the structuring of the pages (if required - by discussing with the community members).
* Get final reviews from the community and finalize the work done.

This is an estimated project goal, changes might be done if suggested by mentors and community members.

### Measuring the project’s success

The project would be considered successful if after publication of the new documentation:

* The tutorials page views increase by 50%
* The visit duration on tutorials increases by 50% (>2 minutes)
* The bounce rate of tutorials decreases by 30% (<50%)

### Why am I the right person for this project?

I believe I am the right person for this project because I have previous experience of contributing to documentation and how to structure the modules properly so that it is easier for beginners to follow. I have also worked on a comprehensive [cheat sheet](https://blog.codemagic.io/codemagic-yaml-cheatsheet/) in the past, and I am comfortable with Git & GitHub to make the contributions.

I have already started contributing to the documentation of [Wechaty](https://github.com/wechaty/wechaty.js.org) and would love to work on it as a part of the **GSoD 2021**.

### Stipend

Based on work division.

If one technical writer is selected - $5000

If work is divided between two technical writers - $2500. In this case, I am open to collaborating with the other technical writer and working as a team.

### Personal Information

* **Name:** Souvik Biswas
* **Location:** Kolkata, West Bengal, India
* **Time Zone:** UTC +05:30
* **Typical working hours:** 7 AM - 2 PM (UTC +05:30)
