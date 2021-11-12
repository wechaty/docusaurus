---
title: "Google Season of Docs 2021 Team Report - Introduction and Explanation"
author: nibble0101
categories: gsod
tags:
  - google
  - gsod
  - 2021
  - docs
  - introduction
  - explanations
  - project
  - report
image: /assets/2021/11-gsod-2021-improve-introduction-and-explanation-project-joint-report/introduction-and-explanation.webp
---

This is the joint project report for **Improve the Introduction and Explanations** secondary project under Google Season of Docs 2021.

## Technical writers

### [Mukosa Joseph Mawa](https://ug.linkedin.com/in/joseph-mawa)

I am a self-taught web developer and technical writer with a passion for open source software. I have published a number of beginner friendly technical articles on [dev.to](https://dev.to/nibble) and [freeCodeCamp](https://www.freecodecamp.org/news/author/joseph/). Before transitioning into tech, I was a high school teacher. One of my core responsibilities as a teacher was simplifying and sequencing text written in complex technical language for learners to easily understand. I have also been a frequent contributor to a couple of open source software. Notable ones are [ocaml.org](https://github.com/ocaml/ocaml.org) and [disease.sh](https://github.com/disease-sh/API).

### [Chris Estepa](https://ph.linkedin.com/in/chrisestepa)

Currently, I am a full-time technical writer supporting users how to use their applications by creating how-tos, video tutorials, training materials, FAQs, and requirement analysis documents, among others.

I love technical writing because it being a combination of communication and technology allows me to write and provide support to users, especially newbies. I know the pain and frustration of not getting the information that the users need and now, I am here to help users through my writing. Through GSOD and Wechaty, I will be able to engage more users to have a wonderful experience with their Wechaty chatbots.

## Proposal Video Presentation

{% include iframe.html src="https://youtu.be/A1FlVWGWshw" %}

## Final Report Video Presentation

Improve the Introduction and Explanation sections

## Project title

Improve the Introduction and Explanations sections of wechaty.js.org.

## Project overview

Our project, Improve the [Introduction](https://wechaty.js.org/docs/) and [Explanation](https://wechaty.js.org/docs/explanations/) sections, focused on improving the Introduction and Explanation sections of the Wechaty documentation. We followed the Divio Documentation System, which comprised of four (4) sections namely Tutorials, How-to Guides, Explanation, and Reference. We wrote the content for the Introduction and Explanation sections.

For more information, you may refer to our [project proposal](./2021-05-13-gsod-2021-improve-introduction-and-explanation-project-joint-proposal.md).

### Project scope

The scope of this project was limited to improving the Introduction and Explanation sections of the wechaty.js.org website.

### Analysis of the Introduction and Explanations sections of wechaty.js.org

We did an analysis of the documentation prior to the project start and came up with following purposes for the Introduction and Explanation sections.

#### Purpose of Introduction section of wechaty.js.org

- Help technical and non-technical people understand what Wechaty is.
- Help potential individual and institutional users of Wechaty understand some of the business challenges/problems they can solve by using Wechaty.
- Help total beginners understand how to start using or learning Wechaty.
- Helps the user understand why and what sets Wechaty apart from other chatbot SDKs.

#### Purpose of explanation section of wechaty.js.org

- Describe other concrete pieces of information which have not been covered in other areas of the documentation in an easy manner understood by all types of users.
- Deepen and enrich users’ knowledge of Wechaty by providing alternative/contrary viewpoints and approaches than what has been presented in other sections of the documentation.

### Project approach

#### Introduction section

We were guided by the following questions when writing the introduction section.

##### What is Wechaty?

- Brief introduction to Wechaty
- The People/Companies behind Wechaty
- Releases made since creation of Wechaty
- Original motivation for creating Wechaty
- The long term Vision and Mission of Wechaty

##### What can you do with Wechaty?

- What problems can businesses/individuals solve with Wechaty?
- What business problems have been solved by using Wechaty?
- How has Wechaty solved the problems of people/businesses?

##### Who is using Wechaty?

- Which companies/individuals are using Wechaty?
- Are there testimonials from users of Wechaty on the value it has delivered to their businesses?

#### Explanations section

The Explanation section was primarily for broadening the documentation’s coverage of the different topics. We planned to add the following content to the Explanation section in the project proposal.

- Overview
- Lifecycle
- Architecture
- Alternatives
- Testing
- DevOps CI/CD
- Software Development Kit (SDK)
- Troubleshooting

## Merged pull requests

### Main pull requests

| Week | Section      | Sub-section                         | PR                                                        |
| ---- | ------------ | ----------------------------------- | --------------------------------------------------------- |
| 1    | Introduction | Overview of Wechaty documentation   | [870](https://github.com/wechaty/wechaty.js.org/pull/870) |
| 1    | Introduction | What is Wechaty                     | [871](https://github.com/wechaty/wechaty.js.org/pull/871) |
| 1    | Introduction | What can you do with Wechaty        | [873](https://github.com/wechaty/wechaty.js.org/pull/873) |
| 2    | Introduction | Who are the users of Wechaty        | [900](https://github.com/wechaty/wechaty.js.org/pull/900) |
| 2    | Introduction | Getting started with Wechaty        | [899](https://github.com/wechaty/wechaty.js.org/pull/899) |
| 2    | Introduction | Main concepts in Wechaty            | [904](https://github.com/wechaty/wechaty.js.org/pull/904) |
| 3    | Explanation  | Overview of the Explanation section | [915](https://github.com/wechaty/wechaty.js.org/pull/915) |
| 4    | Explanation  | Software Development Kit            | [930](https://github.com/wechaty/wechaty.js.org/pull/930) |
| 4    | Explanation  | Wechaty chatbot testing             | [936](https://github.com/wechaty/wechaty.js.org/pull/936) |
| 5    | Explanation  | Wechaty DevOps Toolset              | [949](https://github.com/wechaty/wechaty.js.org/pull/949) |
| 5    | Explanation  | Troubleshooting in Wechaty          | [950](https://github.com/wechaty/wechaty.js.org/pull/950) |
| 6    | Explanation  | Wechaty chatbots architecture       | [977](https://github.com/wechaty/wechaty.js.org/pull/977) |

### Additional pull requests

| Section      | Sub-section             | PR                                                          |
| ------------ | ----------------------- | ----------------------------------------------------------- |
| Introduction | Showcases:Index         | [1362](https://github.com/wechaty/wechaty.js.org/pull/1362) |
| Introduction | Contributing to Wechaty | [1344](https://github.com/wechaty/wechaty.js.org/pull/1344) |
| Explanation  | Glossary                | [1314](https://github.com/wechaty/wechaty.js.org/pull/1314) |
| Explanation  | SDK and CUI             | [1312](https://github.com/wechaty/wechaty.js.org/pull/1312) |
| Explanation  | FAQ                     | [1321](https://github.com/wechaty/wechaty.js.org/pull/1321) |

## Evaluation

As mentioned in the introduction, our overall goal was to improve the Introduction and Explanation sections of the Wechaty documentation. As per our proposal, we achieved nearly everything we had set out to do. The Introduction and Explanation sections are orders of magnitude much better than they were before the GSoD 2021.

We reorganized and simplified the Introduction and explanation sections to be followed and understood by even absolute beginners to Wechaty. Overall, it was an exciting project to work on and there was a lot to learn.

We estimated the project to take approximately six weeks. Unfortunately, it took us more than three months. This was mainly due to delays in the final stages of the code review process. We did not reorganize the Introduction and Explanation sections as we had planned.

We believe sub-sections such as Showcases, Case study, Community and Contributing to Wechaty which are currently in the Introduction section make the documentation unnecessarily bloated and therefore, should be relocated. They contain useful information and should be somewhere within the [wechaty.org](https://wechaty.js.org) site but not in the documentation.

## Lessons learned

- We learned a lot about the DIVIO documentation system and the Google developer documentation style guide.
- We learned how to work and collaborate in a remote, distributed and largely multicultural team.
- We also gained invaluable skills of contributing to open source projects.

## Acknowledgement

We would like to thank the project mentors, Huan Li and Jiarui Li for the invaluable and constructive feedback throughout the GSoD period.

We also like to thank the volunteers, Rohitesh Jain and Simin Liao, for timely reviewing all the pull requests and for providing constructive feedback. Your contributions have been invaluable.

We would also love to extend our sincere gratitude to the all the members of the other teams. It was nice having your company for the entire GSoD period.

Finally this wouldn't have been possible without the support of Google. Thank you so much for sponsoring this project.
