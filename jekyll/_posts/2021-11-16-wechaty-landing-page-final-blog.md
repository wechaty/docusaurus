---
title: 'Google Season of Docs 2021 Final Blog - Landing Page'
author: sajenjeshan1222
categories: gsod
tags:
  - google
  - gsod
  - 2021
  - reconstruct
  - landing
  - page
  - project
image: /assets/2021/05-gsod-2021-reconstruct-landing-page-team-proposal/gsod-reconstruct-lp.png
---

We have beenn a part of **Google Season of Docs 2021** for reconstruction of landing page with value propositions. It was an incredible trip with the Wechaty community through the GSoD 2021, and the landing page reconstruction has been completed and deployed, and you can visit the new landing page on the [Wechaty website](https://wechaty.js.org/).

## Synopsis

- Abstract
- Structure for the New Landing Page
- Project Goals
- Conclusion

## Abstract

Most of the new users come to wechaty website by landing on the landing [homepage](https://wechaty.js.org/). Unfortunately, the landing page is too simple and lacks enough information for new users, especially no value proposition. This problem leads to losing lots of new users, or making new users take more time to understand what wechaty can do and why we are the best.

Previously, the landing page used the default [Docusaurus](https://docusaurus.io/) template, which lacks adequate value propositions and CTAs. Wechaty's site has now been totally improved/reconstructed, including value propositions, CTAs, and many other features. This blog article describes our experience with the Wechaty community, as well as how we handled the problem and revamped the complete landing page.

Here's a quick rundown of our responsibilities:

- To reconstruct landing page with value propositions
- Identify all the benefits of wechaty offers
- Describe what makes these benefits valuable
- Identify our new users main problem
- Connect this value to our users problem
- Differentiate wechaty as the preferred provider of this value

You can view our complete project proposal [here](https://wechaty.js.org/2021/05/12/gsod-2021-reconstruct-landing-page-team-proposal/)

## Structure of the New Landing Page

We separated the landing page into eight pieces and created each area as a separate react component that we blended together. The sections are listed below:

**1)Hero Section:** In a single line, describe what wechaty is and include wechaty quotations.\
![Section1](/assets/2021/11-wechaty-landing-page-final-blog/hero-section.webp)\
**2)Features Section:** This section highlights all of the capabilities that Wechaty offers as well as the value propositions of Wechaty in a concise manner, and it also serves as a placeholder for the Wechaty introduction video. Once the video is complete, it will be added to this section.\
![Section2](/assets/2021/11-wechaty-landing-page-final-blog/features-section.webp)\
**3)Lets Get Started Section:** This section provides an overview of the documentation sections, and new users may use it to get started with Wechaty fast.\
![Section3](/assets/2021/11-wechaty-landing-page-final-blog/lets-get-started-section.webp)\
**4)Talks Section:** List of popular talks about the wechaty.\
![Section4](/assets/2021/11-wechaty-landing-page-final-blog/talks-section.webp)\
**5)Honors and Award Section:** Displays the awards and honors that was given to wechaty community.\
![Section5](/assets/2021/11-wechaty-landing-page-final-blog/honors-and-awards-section.webp)\
**6)Voice of Developers Section:** Contains what developers say about the wechaty, as well as quotations from them.\
![Section6](/assets/2021/11-wechaty-landing-page-final-blog/voice-of-developers.webp)\
**7)Sponsors Section:** This section contains a list of wecahty community sponsors.\
![Section7](/assets/2021/11-wechaty-landing-page-final-blog/sponsors-section.webp)\
**8)Footer Section:** It is footer of the landing page and contains the required important links.\
![Section8](/assets/2021/11-wechaty-landing-page-final-blog/footer-section.webp)

## Project Goals

We fulfilled all of the GSoD tasks outlined in our project proposal. During this GSoD session, we completed a total of **13 Pull Requests**, including 8 PRs for each section with associated CSS and pictures, 1 PR for the dark theme, and 4 PRs to correct some minor errors on the landing page.

We designed and constructed the complete new landing page, and we came up with the greatest value proposition, CTA's, and quotations for the wechaty. View our whole design file [here](https://www.figma.com/file/L5MS8HqF0g5hbHdkgqUH1o/wechaty-landing-page?node-id=0%3A1).

We also worked with the [ADVIDS](https://www.advids.co/) team to produce the Wechaty introduction video, and we ensured that both the new landing page and the introduction video would have the same theme, value propositions, and everything else in common in the final result.

You may view our contributions by clicking on the relevant links in this section.

All Pull Requests completed by us can be found in the links below:

- [Sajen's PRs](https://github.com/wechaty/wechaty.js.org/pulls?q=is%3Apr+author%3Asajenjeshan1222)
- [Arnab's PRs](https://github.com/wechaty/wechaty.js.org/pulls?q=is%3Apr+author%3Aencodearnab)

Below are the complete list of all the contributions that we have made during the Google Season of Docs 2021:

1)Hero Section of the new wechaty landing page (Section 1) [#1258](https://github.com/wechaty/wechaty.js.org/pull/1258)\
2)Features Section of the new wechaty landing page (Section 2) [#1262](https://github.com/wechaty/wechaty.js.org/pull/1262)\
3)Lets Get Started Section of the new Wechaty landing page (Section 3) [#1266](https://github.com/wechaty/wechaty.js.org/pull/1266)\
4)Talks Section of the new Wechaty landing page (Section 4) [#1267](https://github.com/wechaty/wechaty.js.org/pull/1267)\
5)Honors and Awards section of the new wechaty landing page (Section 5) [#1269](https://github.com/wechaty/wechaty.js.org/pull/1269)\
6)voice of developers section of the new wechaty landing page (Section 6) [#1271](https://github.com/wechaty/wechaty.js.org/pull/1271)\
7)Sponsors section of the new wecahty landing page (Section 7) [#1272](https://github.com/wechaty/wechaty.js.org/pull/1272)\
8)Footer section of the new wecahty landing page (Section 8) [#1292](https://github.com/wechaty/wechaty.js.org/pull/1292)\
9)Dark Theme Implementation in the new landing page [#1366](https://github.com/wechaty/wechaty.js.org/pull/1366)\
10)link colour according to the theme [#1365](https://github.com/wechaty/wechaty.js.org/pull/1365)\
11)Bugs and misalignments rectification [#1360](https://github.com/wechaty/wechaty.js.org/pull/1360)\
12)Several alignment issues resolved [#1358](https://github.com/wechaty/wechaty.js.org/pull/1358)\
13)Error sections fixed in the new landing page [#1357](https://github.com/wechaty/wechaty.js.org/pull/1357)

## Conclusion

The updated Wechaty landing page has a better design and includes value propositions, CTAs, and other features that capture new visitors' attention and result in a high conversion rate. With a quick glance at the redesigned landing page, users can quickly comprehend what wechaty is, what wecahty is capable of, and the features of wechaty.

Thank you to the mentors ([Huan](https://github.com/huan) & [Rui](https://github.com/lijiarui)) and volunteers ([Rohitesh](https://github.com/Rohitesh-Kumar-Jain) & [Simin](https://github.com/proudofsimin)) for their assistance during the documentation period and for making our GSoD 2021 season a success.
