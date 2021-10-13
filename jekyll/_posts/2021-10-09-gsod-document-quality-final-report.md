---
title: "Google Season of Docs 2021 Volunteer Report: Document Quality"
author: proudofsimin
categories: gsod
tags:
  - google
  - gsod
  - 2021
  - docs
  - volunteer
  - project
image: /assets/10-gsod-document-quality-final-report/background.webp
---

It's a great honor to be part of Wechaty family in Google Season of Docs 2021. This report demonstrates the improvement of document quality.

### Abstract

After solid four months in Google Season of Docs in Wechaty, we 13 technical writers had successfully created more than 130 pieces of new content, one demonstration video, one advertising video, and a brand-new landing page for Wechaty. Being a volunteer/ technical writer lead in charge of the quality of documents written by other 11 technical writers in the project, the journey was precious and wonderful. I also grew a lot when reviewing over 150 pull requests on Github, ranging from new topics to documentation structure updates. Working with such a large team is never easy, especially when most other tech writers are developers who didn't have official technical writing training before.

### Improvement

Before we started the GSoD project, the existing documentation of Wechaty had some issues. The committee updated documents like blog posts. Whenever the committee came up with some ideas or per user requests, they created user guides for specific topics. The information was scattering and wasn’t well-organized. Basically, in the beginning, there were only some documents about the installation or basic implementation of the software that were rather explicit. For the rest, instead of documents, they were more like technical notes that weren’t formatted logically.

#### Structure

For the reasons above, we set the Wechaty documentation structure as the table below, which [Divio.com](https://documentation.divio.com/introduction/) proposed. The team paired up in groups based on the following divisions, and I worked as a final reviewer.

![chart](/assets/10-gsod-document-quality-final-report/chart.webp)

After we had finalized the structure, it was time to determine the content inside. I analyzed the overlaps and topics inside each section in [Documentation structure](https://wechaty.js.org/2021/05/30/simin-documentation-structure/). In the article, I had each team propose their frameworks first and then compare theirs with other groups’. As there were going to be four sections for the same software Wechaty, one of my jobs was to collect all the documents together and ensure no missing topics or overlaps. The first approach I took was to identify the classifications again. Rather than adding as much content as possible, each subject should focus on the goal they would like to achieve. We should provide a clear boundary of each section for user-friendliness and document maintenance in the future. Later in the meeting, I had the teams talk about their respective proposals and discuss the distribution with similar topics in other groups.

#### Tutorials

Tutorials are usually the first documents that users encounter when they start Wechaty. At this moment, the users had no prior knowledge of the software and might not be experienced in the SDK world either. The purpose of the tutorials is to teach our audience how to use Wechaty from scratch. According to the reasons above, the tutorials are organized in terms of levels of difficulty. The audience is initially introduced to the elementary use cases and then moved on to advanced examples. Examples are shown in [Starter bot](https://wechaty.js.org/docs/examples/basic/starter-bot). It is the very beginning bot with no actual functions. As the user learned more methods about Wechaty, they could create complex bots like [Tuling 123 bot](https://wechaty.js.org/docs/examples/professional/tuling123-bot).

#### How-to guides

For documents like tutorials and how-to guides, these instruction-based documents should explicitly guide how to reach the results. These include step-by-step guides, preparation, and reference links to provide related information or lead users to the correct page if they run into some troubles.

Here is an example of how I modified the structure of the content in how-to guides. Originally it was formatted as topic, introduction, and then listed down two functions. See the following picture.

![manage_contact](/assets/10-gsod-document-quality-final-report/manage_contact.webp)

The original one was ok for API reference documents but wasn’t suitable for how-to guides as it provided no instructions but information only. The updated version published as [Manage contact](https://wechaty.js.org/docs/howto/contact) is more user-friendly if they ask a specific question, “how to manage contact?”

#### Reference

Let’s take a look at the reference section. A reference section is designed to include technical descriptions only and is information-oriented. Typical reference procedures include tables or bulleted lists, which present a large quantity of data in an organized way. An example of my modification could refer to [Added Wechaty token section](https://github.com/wechaty/wechaty.js.org/pull/919) (my account as `proudofsimin`). The format was reconstructed to prevent giving instructions, and we should list down all the information. Some minor syntax errors or writing tone should also be considered, such as the sentence structures were supposed to be coherent in the article, and the active voice was more favorable than passive.

#### Explanation

When it comes to the introduction and explanation section, the section is unique in content as it contains information about the background knowledge of the software. Despite it being a technical article, some marketing purposes should be included to promote to a more significant number of people. In the example [Who is using Wechaty?](https://github.com/wechaty/wechaty.js.org/pull/900), the sub-section of the introduction section, the target audience isn’t those already using Wechaty, but those still considering applying Wechaty to their work. As the screenshot is shown in the pull request, the original version implied that most users are Chinese companies. Though there was nothing wrong with this statement, when it comes to users outside China, it doesn’t look so attractive to them as the article described the software as a local application rather than recognized around the world. In the [revised version](https://wechaty.js.org/docs/who-is-using-wechaty), the word “Chinese” is eliminated and focused on the part that those companies are multinational with customers around the globe.
