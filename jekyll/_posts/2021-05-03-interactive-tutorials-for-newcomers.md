---
title: "Soumi Bardhan: Interactive tutorials for newcomers"
author: soumi7
categories: gsod
tags:
  - python
  - google
  - gsod
  - 2021
  - docs
  - introduction
  - project
  - proposal
image: /assets/2021/05-interactive-tutorials-for-newcomers/gsod_s.png
---

## GSoD 2021 Project Proposal

### Project - Create easy to learn interactive tutorials for beginner users of Wechaty

I am Soumi Bardhan, a passionate python and deep learning dev.

#### Google Season of Docs 2020 - Technical writer - Sympy

* Sympy is a lightweight independent computer algebra system. Added and updated documentation, added missing style sections like Parameters and improved organization.
* My Season of Docs 2020 Report for the project Consistency Across docstrings : [Sympy Documentation](https://github.com/sympy/sympy/wiki/GSoD-2020-Report-Soumi-Bardhan:-Consistency-across-docstrings---SymPy-Documentation)
* Analysed metrics on the google search console before, during and after. Updated the modules with the most number of users first, then moved on to the less used modules.

#### Cppsecrets.com : Python Developer, technical writer

* Well written articles and tutorials on several python libraries.
* Implementation of SQLAlchemy ORM for creating Flask Applications
* Functions of OS Module in python and implementations, tutorials

#### Geeks for Geeks, Technical Content Writer

* Written articles based on OpenCV library functions and data structures and algorithms.
* [Link to profile](https://auth.geeksforgeeks.org/user/soumibardhan10/articles)

#### Data driven investor : Technical Writer

* Articles and tutorials on deep learning.
* Using several deep learning methods to create models.
* Create frontend and backend applications to host the models on cloud.
* Docker and AWS

#### Analytics Vidhya: Technical Writer

* Articles and tutorials on deep learning.
* Using several deep learning methods on creating deep learning and ML models.
* Create frontend and backend applications to host the models on cloud.
* Using pycaret to create several regression models and tuning.
* LSTMs for Stock Prediction

#### The Startup : Technical writer

* The Startup is the largest active medium publication. I write technical articles mostly in the NLP domain.
* Natural Language Processing
* Deep Learning
* BERT(Bidirectional Encoder Representations from Transformers)

#### Research Work

* My Research Work on Autism Spectrum Disorder Detection is also in progress. I am working at ITMR (Interactive Technologies & Multimedia Research) Lab, IIIT Allahabad remotely to simulate the results of my research work that is almost completed.

### Links to some of my medium articles

Named Entity Recognition — Simple Transformers — [Flask REST API](https://medium.com/@soumibardhan10/named-entity-recognition-simple-transformers-flask-rest-api-ec14a7a444cb)

Fixing Open Source Vulnerabilities in Azure Dev Ops- [WhiteSource Bolt](https://code.likeagirl.io/fixing-open-source-vulnerabilities-in-azure-dev-ops-whitesource-bolt-4a5e53cb9cfe)

Dockerizing and Hosting your Flask Web App(Rest API) on AWS [EC2](https://medium.com/datadriveninvestor/dockerizing-and-hosting-your-flask-web-app-rest-api-on-aws-ec2-9f9c189bf563)

Weather Based Stock Prediction with Pycaret - [Analytics Vidhya](https://medium.com/analytics-vidhya/weather-based-stock-prediction-with-pycaret-4d604cdeb68f)

Tkinter Application to Switch Between Different Page [Frames](https://www.geeksforgeeks.org/tkinter-application-to-switch-between-different-page-frames/)

I believe creating a consistent documentation of code is very important for any open source project for its growth.

## Abstract

### Current State of Wechaty Tutorials and previous work

Users come to Wechaty website and are seeking how to use Wechaty to build a chatbot application for solving their problems. Unfortunately, the learning curve is not friendly to Wechaty users, they struggle with setting up their development environment, can not get started with the simplest example source code, and find it hard to know what they can do with the Wechaty API. This problem leads Wechaty to lose lots of new users, increases the number of questions asked in the community, and lowers the user satisfaction.

The current version of the Wechaty tutorial is not properly planned. The tutorials on the website have to be approved.

### Proposed Work

Tutorials need to be useful for the beginner, easy to follow, meaningful and extremely robust, and kept up-to-date.

The Tutorial project will do the following :

* Allow the user to learn by doing
* Get the user started
* Make sure that the tutorial works all the time
* Ensure the user sees results immediately
* Make the tutorial repeatable
* Focus on concrete steps, not abstract concepts
* Provide the minimum necessary explanation
* Focus only on the steps the user needs to take
* Work with the contributor team to update the documentation on the Wechaty site.
* Make video tutorials available in English
* Each Module in the documentation needs image screenshots as well as gifs and video demonstrating the action. It's also important that they get access to both the code, screenshots, outputs and videos directly from the same page.
* To get beginners interested, it is important to define right in the beginning of tutorial what will be the end result. So that will be designed as well.

### Contributions

* 795 : [Added interactive code sandbox for contact bot](https://github.com/wechaty/wechaty.js.org/pull/795)
* 797 : [Added subsections to Examples section and reorginzation](https://github.com/wechaty/wechaty.js.org/pull/797)
* 756 : [Updates Google Cloud instructions and images for Getting Started  Tutorial](https://github.com/Wechaty/Wechaty.js.org/pull/756)
* 749 : [Enhance Getting started with Gitpod section of Getting Started Tutorials](https://github.com/wechaty/wechaty.js.org/pull/749)
* 774 : [Update getting started with Redux](https://github.com/wechaty/wechaty.js.org/pull/774)
* 745 : [Updates Usage with Heroku Page](https://github.com/Wechaty/Wechaty.js.org/pull/745)
* 776 : [Added Case studies in English](https://github.com/wechaty/wechaty.js.org/pull/776)

### Project Goals and Timeline

* Before May 1, continue making contributions to Wechaty.
* Become more familiar with the user documentation and current version of Wechaty.

#### Community bonding

* Set up a communication channel and time(due to timezone difference)
* Refine my goals and set expectations on both sides.
* Discussing the order in which the tutorial pages will be updated.
* Finalize the order of editing the tutorial sections.

#### Documentation Period

[Wechaty Website repository](https://github.com/Wechaty/Wechaty.js.org)

* As we already have a repository for the website, I will start with updating the existing pages first. I think it is important to add video walkthroughs and tutorials for beginners.

* For this, I will be collaborating with existing contributors and taking their inputs and feedback on the tutorials I create.

**Two important changes :**

* Define a specific structure for every tutorial page :

  * Aim
  * Prerequisites
  * Video Tutorial
  * Steps (with Screenshots)
  * Results
  * Try Out the Bot (interactive section)
  * Important links
  * References

* Cutting down on text and adding video tutorials and gifs to engage beginners.
* Add Interactive Sandboxes to all tutorials.
* Adding simple English text for pages available only in Chinese.
* Add a latest release section for blogs and information on the latest features.

### Week 1 : (1nd May - 8th May)

* Update cheat sheet and upload video tutorial on use cases.
* Cover common setbacks beginners face while contributing.
* Video tutorial for a first-time github contributor, for both code and documentation.

### Week 2 : (9th May - 15th May)

* Update docker.md and upload video tutorials.
* Demo of usage of Ding Dong Bot and Basic functions.

### Week 3 : (16th May - 22nd May)

* Video walkthrough of usage of advanced functions.
* Overview.md will be made more attractive and friendly, to excite new users. Will add gifs to the webpage.

### Week 4 : (23rd May - 29th May)

* Add Use cases of usage-with-heroku.md in details.
* Record demo videos and gifs of Friday Bot. Create interactive sandbox.

### Week 5 : (30th May - 5th June)

* Record demo videos and gifs of :
  * OSSBot
  * Mikt BO
* Create interactive sandbox.
* Organize and record videos and gifs for using-plugin-with-Wechaty.md. New users need to be able to see visuals.

### Week 6 : (6th June - 12th June)

* Add separate pages for commonly used plugins with Wechaty.
* Record videos for Running DingDong bot with GitPod with gifs.

### Week 7 : (13th June - 19th June)

* Record videos for running Dingdong bot with Google Cloud along with gifs for blog posts, which can act as teasers and shared in open source communities.

### Week 8 : (20th June - 26th June)

* Record video tutorial for getting started the hard way. Also, instead of mentioning the “hard way”, we can write “for experienced devs”. That is bound to make it sound easy. Also, adding a video tutorial will make it easy and resolve any issues they face along the way.

### Week 9 : (27th June - 3rd July)

* Get started with Videos in simple easy to understand English about the Money Bot. (Here will need a bit of help with translation from already existing tutorials, although i will be creating completely fresh videos. )
* Update the website as well to be multilingual(will add simple easy to read English)

### Week 10 : (4th July - 10th July)

* Update the Assistant Bot webpage and create video tutorials.  Create interactive sandbox.

### Week 11 : (11th July - 17th July)

* Update the Coaxer Bot webpage and create video tutorials.

### Week 12 : (18th July - 24th July)

* Update the getting started - overview.md with gifs and visuals with what can be achieved with Wechaty.
* Add videos for setting up a development environment for new Wechaty contributors for the Contributing section of the docs.
* Add a video keynote from Wechaty creators in simple english talking about why Wechaty was developed and its history.

### Week 13 and 14

* Adding content to the testing page collaborating with the mentors.
* Finalizing the work done and getting final reviews from the community.

The modules mentioned here can be changed after further discussion with mentors and community.

As suggested by mentors and community and by the search control stats, I will focus on updating those modules first which are more beginner friendly.

The rest of the work will be decided based on the work done and search console results.

### Measuring my project’s success

Success shall be measured by the following metrics :

* The tutorials page views increase by 50%
* The visit duration on tutorials increases by 50% (>2 minutes)
* The bounce rate of tutorials decreases by 30% (<50%)

## Why am I the right person for this project?

I believe myself to be the right person for this project because I have past experience in technical writing and I am well versed with git and github. I also find Wechaty very interesting.

I have experience in writing tutorials as well as open source. I have worked as a technical writer with SymPy in GSoD 2020. I would love to improve Wechaty’s tutorials and documentation structure. I have set up the development environment for [Wechaty](https://github.com/Wechaty/Wechaty.js.org) [1] . I am very comfortable in making contributions.

## Stipend

Based on work division.

If one technical writer is selected - $5000

If work is divided between two technical writers - $2500. In this case, I am open to collaborating with the other technical writer as well and working as a team.

## Personal Information

Soumi Bardhan

* [Github](https://github.com/Soumi7)
* [Linkedin](https://www.linkedin.com/in/soumi-bardhan-8539b3191/)
* [Blog](https://soumibardhan10.medium.com/)
* Location:  Kolkata, West Bengal, India
* Time Zone: (UTC + 05:30)
* Typical working hours: 10AM - 7 PM (UTC + 05:30)

## References

[1](https://github.com/Wechaty/Wechaty-getting-started)
[2](https://Wechaty.js.org/docs/contributing/)
[3](https://Wechaty.js.org/docs/contributing/documentation/)
