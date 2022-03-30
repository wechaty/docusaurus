---
title: "Google Season Of Docs (GSoD) Guide"
author: lijiarui
categories:
  - announcement
  - gsod
tags:
  - event
  - google
  - gsod
  - gsod-2021
  - docs
  - guide
  - news
image: /assets/2021/07-google-season-of-docs-guide/guide.webp
---

[Google Season of Docs](https://developers.google.com/season-of-docs) is an annual program organized by Google.

Here is the related blog:

- [Google Season of Docs ❤️ Wechaty](https://wechaty.js.org/2021/04/30/google-season-of-docs/), Written By [Huan](https://wechaty.js.org/contributors/huan/)
- [Hello Wechaty GSoD’21 Technical Writers!](https://wechaty.js.org/2021/05/08/gsod-2021-selected-technical-writers/), Written By [Huan](https://wechaty.js.org/contributors/huan/)
- [GSoD'21 First Month Evaluation](https://wechaty.js.org/2021/06/22/gsod-2021-first-month-evaluation/), Written By [Rohitesh Kumar Jain](https://wechaty.js.org/contributors/rohitesh-kumar-jain)

We have some guide for GSoD like what we did in [OSPP - a Chinese clone of Google's summer of code](https://wechaty.js.org/2021/06/24/summer-wechaty-guide/). All of the tech writers involved in the project are required to complete their weekly work and phased work :

- Weekly work
  - Every workday commit
  - [Wechaty GSoD'21 Weekly Follow-Ups](https://docs.google.com/spreadsheets/d/1QglSl5JuZuVom84Or8yGhHb3_YbRMDBPgccxoMmnBa0/edit#gid=978979489)
  - Weekly Zoom Meeting
- Phased work
  - Proposal blog
  - Mid-term blog
  - Final blog

## Weekly Work

A volunteer will organize the weekly meeting and write meeting notes & publish blog posts with zoom meeting recording videos on YouTube embedded.

Here is the guideline for video-recording/downloading/uploading

- Download the recording which has a shared screen along with the gallery view
- Crop the video at the beginning and the end of the meeting, the video should start to form the beginning of the meeting
- Add a beautiful thumbnail to the video
- Highlight the most important agenda of the video by adding timestamps like [kick-off meeting recording](https://www.youtube.com/watch?v=hTkM_XPpFfU)

> Refer from: [Google Season of Docs 2021 Team Proposal - Volunteering](https://wechaty.js.org/2021/05/12/gsod-2021-volunteering-proposal/)

### PR Reviewing & Approving Workflow

#### For writers

Writers who are in the same team are **REQUIRED** to review each other’s PR, and give “Request changes” or “Approve”
Writers are encouraged to give “Request changes”, “Approve”, or “Comment” to any PRs. (please contribute to the whole team by doing it!)

#### For volunteers

Volunteers are **REQUIRED** to review all PRs created by writers and give “Request changes” or “Approve”

#### Mentors are in charge of reviewing the PR after

- Volunteers create an issue list about the high priority PR
- PR passed all the CI tests (CLA & unit testings)
- PR gets approved by all the project team members (if applicable, 0-1 approval)
- PR gets approved by all volunteers (2 approvals)

## Phased Work

The three blogs at the beginning, middle and the end should be committed to **[wechaty.js.org](https://github.com/wechaty/wechaty.js.org) Repo**. Before submitting the report, you can read the [Wechaty community specifications](https://wechaty.js.org/2021/06/23/the-wechaty-way/) and know wechaty better:

1. Introduction of Wechaty
1. Community communication channels
1. Meeting specifications
1. Blog publishing specifications
1. Issue release specification
1. PR release specification

It is important to note that the blog publishing specifications describe in detail how to submit a blog, how to embed a video in the blog, etc., which will be used in the mid-term and final reports. The specific requirements for the three reports are as follows.

### Proposal Blog

All of the tech writers have already finished this part. Here is some specification, if you have time, you can modify the previous blog to make it more beautiful.

#### 1. Personal Profile

Create your contributor profile (if you are a first-time contributor). You can commit to [wechaty.js.org](https://github.com/wechaty/wechaty.js.org) Repo's `jekyll/_contributors` directory.

You can refer to the following developer introduction content writing page:

- [Rohitesh Kumar Jain](https://wechaty.js.org/contributors/rohitesh-kumar-jain/), Volunteers Team.
- [sajen sarvajith](http://wechaty.js.org/contributors/sajenjeshan1222/), Landing Page Team.
- [Soumi Bardhan](http://wechaty.js.org/contributors/soumi7/), References Team.
- [Souvik Biswas](http://wechaty.js.org/contributors/sbis04/), Tutorial Team.

#### 2. Proposal report

- Title: `GSoD 2021-Proposal-your_title`
- File name: `2021-XX-XX-gsod-plan-XX`
- Category: `gsod`
- Tag(at least include): `google`,`gsod-2021`,`gsod`,`docs`,`plan`
- Content at lease includes as follows:
  - Team Member
  - Proposal Video Presentation
  - Proposal Introduction
  - Roles and Responsibilities
  - Team Goal/Deliverables
  - Proposal Timeline

- [Google Season of Docs 2021 Team Proposal - Volunteering](https://wechaty.js.org/2021/05/12/gsod-2021-volunteering-proposal/)
- [Google Season of Docs 2021 Team Proposal - Tutorials](https://wechaty.js.org/2021/05/11/gsod-2021-team-proposal-tutorials/)

### Mid-term Blog

There will be a GSoD Mid-term Demo Day, volunteers can organize this Mid-term Demo Day on a regular weekly zoom meeting.

Each writer in the same team should submit a mid-term blog together with the YouTube Midterm demo day video and a summary of the mid-term work. The video needs to be uploaded to youtube, and contact Huan to add it to the playlist of wechaty.

Report template as follows:

- Title: `GSoD 2021-Mid-Term-your_title`
- File name: `2021-XX-XX-gsod-mid-term-XX`
- Category: `gsod`
- Tag(at least include): `google`,`gsod-2021`,`gsod`,`docs`,`mid-term`
- Content at lease includes as follows:
  - Proposal
    - Team Member
    - Description/Abstract
    - Timeline
  - Proposal Mid-term Video Presentation
  - Progress
    - Work Done
    - Problems encountered and solutions
    - Follow-up work arrangement

### Final Blog

Each writer in the same team should submit a final blog together with the YouTube final video and a summary of the whole work. The video needs to be uploaded to youtube, and contact Huan to add it to the playlist of wechaty.

The final Blog is to be written after most of PRs get merged, volunteers will announce the time to write a final blog when it is ready.

Report template as follows:

- Title: `GSoD 2021-Final-your_title`
- File name: `2021-XX-XX-gsod-final-XX`
- Category: `gsod`
- Tag(at least include): `google`,`gsod-2021`,`gsod`,`docs`,`final`
- Content at lease includes as follows:
  - Proposal
    - Team Member
    - Description/Abstract
    - Timeline
  - Outcome
    - Links to the added documentation
    - Proposal Final Video Presentation
    - Problems encountered and solutions
  - Voluteer Assessment

## Submit Expense

As [GSoD Payment Intro](https://developers.google.com/season-of-docs/docs/org-payments) showed:

- Organizations will receive 40% of the grant after hiring a technical writer. Organizations will receive invitations to submit their first expense starting June 10, 2021.
- Organizations will receive the remaining 60% of the grant after successful completion of the Season of Docs program. Organizations will receive invitations to submit their final expense starting December 14, 2021.

So for all of the tech writers in Wechaty:

- Get the first 40% of the base stipend after submitting the mid-term blog and reviewed by volunteers and mentors.
- Get the remaining stipends after they submitting the final-term blog and reviewed by volunteers and mentors.

Tech writers can submit expenses on [Wechaty-GSod-Opencollective](https://opencollective.com/google-season-of-docs/expenses/new), see more at [Opencollective docs about expenses and getting paid](https://docs.opencollective.com/help/expenses-and-getting-paid/expenses)

## Performance

To Be Added in the future.

## After GSod

After the GSoD’21, tech writers should publish a blog post talking about the whole project of GSoD’21 Wechaty from your perspective
