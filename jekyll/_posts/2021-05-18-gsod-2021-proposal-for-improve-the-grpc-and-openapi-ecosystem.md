---
title: GSoD '21 proposal for Improve the gRPC and OpenAPI ecosystem
author: iamrajiv
categories: gsod
tags:
  - google
  - grpc
  - gsod
  - openapi
  - proposal
image: /assets/2021/05-gsod-2021-proposal-for-improve-the-grpc-and-openapi-ecosystem/gsod-2021.webp
---

## About me

I considered myself a Polymath. I believe in rigorous and intuitive learning. Spend the majority of the time exploring different types of algorithms and contributing to open source. My interest lies in the fields of Algorithms, Computational Science, and Distributed Computing.

I have completed GSoD '20 with gRPC-Gateway. My project was on Refactoring the Existing Docs Site of gRPC-Gateway.

My Google Season of Docs '20 project report: <https://github.com/iamrajiv/GSoD-2020/blob/master/GSoD_2020_Project_Report.md>.

## Project Proposal Video Presentation

{% include iframe.html src="https://youtu.be/bSnKbzZYDco" %}

## Introduction

This is the project proposal for **Improve the gRPC and OpenAPI ecosystem** on which I will be working as a part of Google Season of Docs 2021. I have proposed my timeline to complete this work during a span of **9 weeks**.

The user docs site is designed to assist end-users in using a product or service. The excellent user docs site is significant because it provides an avenue for users to learn how to use the software, its features, tips, tricks, and resolve common problems encountered when using the software. It also reduces support costs and is part of the corporate identity of the product. The excellent user docs site is a sign of the healthiness of the product, the developer team. Without a good user docs site, a user may not know how to do the above things effectively and efficiently. User docs site can play a pivotal role in ensuring a product's success because excellent communication is and will always be at the heart of any business or development. Fantastic documentation takes that communication and puts it in a manageable framework that everyone can access for success.

Wechaty has two subsystems for providing the gRPC support: one is [wechaty/wechaty-grpc](https://github.com/wechaty/grpc), the other is [wechaty/openapi](https://github.com/wechaty/openapi). The related docs page is mainly at [Polyglot/OpenAPI](http://wechaty.js.org/docs/polyglot/openapi/) as well as other pages that have some OpenAPI associated docs.

However, the Wechaty user documentation for gRPC and OpenAPI is currently outdated and incomplete. Therefore, there should be an improvement in both code and documentation.

## Project Goals

- Improving all OpenAPI related documentation of docs website <https://wechaty.js.org/docs/>, especially [Polyglot/OpenAPI](http://wechaty.js.org/docs/polyglot/openapi/):

  - Adding more details in the Getting Started section.
  - Adding more Blogs.
  - Updating the History section and fetching all contents of `CHANGELOG.md` file from OpenAPI repository using a script or redirecting to `CHANGELOG.md` file.
  - Adding learning resources section.

- Improving repository documentation for both [wechaty/wechaty-grpc](https://github.com/wechaty/grpc) and [wechaty/openapi](https://github.com/wechaty/openapi):

  - Adding `CHANGELOG.md` file.
  - Removing the `HISTORY` section from the gRPC README and moving to the `CHANGELOG.md` file.
  - Breaking the READMEs into sub-topic like Usage, Installation, Contributing, and Resources, etc.
  - Adding `CONTRIBUTING.md` file.
  - Adding Developer Certificate of Origin (DCO) GitHub action.
  - Adding a learning resources section about third parties library and frameworks like gRPC, gRPC-Gateway, and Protocol Buffers, etc.
  - Solving all issues with labels documentation like [grpc MessageType doesn't match that in ts-wechaty](https://github.com/wechaty/grpc/issues/65), etc.
  - Improving the code when necessary for improving the docs in the repository [wechaty/wechaty-grpc](https://github.com/wechaty/grpc) and [wechaty/openapi](https://github.com/wechaty/openapi).

- Miscellaneous:

  - Adding more FAQ entries.
  - Format all markdown files using Prettier.
  - Creating logos for gRPC and OpenAPI repository and refactoring other architecture diagrams if necessary.
  - Checking and fixing indentations, grammatical errors, typographical errors, and broken links across all the files, including previous and new documentations.

## Project Timeline

### Community Bonding (May 8 - May 17, 2021)

- Zoom meeting schedule agreed.
- Focus in the first two weeks before the start of the project will be on:
  - Working through existing documentation and note gaps areas.
  - Putting together a timeline for the approximately three months of the project, with weekly milestones.

### Week 1 (May 18 - May 24, 2021)

- Getting familiar with Wechaty projects.
- Going through all the existing contents and documentation based on gRPC and OpenAPI.
- Listing out things missing in gRPC and OpenAPI documentation and having a discussion with mentors.

### Week 2 (May 25 - May 31, 2021)

- Adding notes to the documentation guidelines in the process of learning and installing gRPC and OpenAPI.
- Adding more details in the Getting Started section.

### Week 3 (June 1 - June 7, 2021)

- Adding more Blogs.
- Updating the History section and fetching all contents of `CHANGELOG.md` file from OpenAPI repository using a script or redirecting to `CHANGELOG.md` file.
- Adding learning resources section.

### Week 4 (June 8 - June 14, 2021)

- Adding `CHANGELOG.md` file.
- Removing the `HISTORY` section from the gRPC README and moving to the `CHANGELOG.md` file.

### Week 5 (June 15 - June 21, 2021)

- Breaking the READMEs into sub-topic like Usage, Installation, Contributing, and Resources, etc.
- Adding `CONTRIBUTING.md` file.

### Week 6 (June 22 - June 28, 2021)

- Adding Developer Certificate of Origin (DCO) GitHub action.
- Adding a learning resources section about third parties library and frameworks like gRPC, gRPC-Gateway, and Protocol Buffers, etc.

### Week 7 (June 29 - July 4, 2021)

- Solving all issues with labels documentation like [grpc MessageType doesn't match that in ts-wechaty](https://github.com/wechaty/grpc/issues/65), etc.
- Improving the code when necessary for improving the docs in the repository [wechaty/wechaty-grpc](https://github.com/wechaty/grpc) and [wechaty/openapi](https://github.com/wechaty/openapi).

### Week 8 (July 5 - July 11, 2021)

- Adding more FAQ entries.
- Format all markdown files using Prettier.
- Creating logos for gRPC and OpenAPI repository and refactoring other architecture diagrams if necessary.
- Checking and fixing indentations, grammatical errors, typographical errors, and broken links across all the files, including previous and new documentations.

### Week 9 (July 12 - July 18, 2021)

- Finalizing the project deliverables and refactor the code, if any, based on the feedback.
- Making the project report.
- Finalizing and submitting the project report.

## References

- [Season of Docs Website](https://developers.google.com/season-of-docs)
- [wechaty/openapi](https://github.com/wechaty/openapi)
- [wechaty/wechaty-grpc](https://github.com/wechaty/grpc)

## Links

- [GSoD 2021 Project Proposal](https://github.com/iamrajiv/GSoD-2021/blob/master/GSoD_2021_Project_Proposal.md)
- [GSoD 2021 Project Proposal Presentation](https://gsod-2021-project-proposal-presentation.netlify.app)
- [GSoD 2021 Repository](https://github.com/iamrajiv/GSoD-2021)
