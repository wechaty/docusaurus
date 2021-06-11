---
title: Wechaty Chatbot testing
---

![Wechaty: Conversational RPA SDK for Chatbot Makers](/img/wechaty-logo.svg)

Chatbot testing is an integral part of the [chatbot development lifecycle](#placeholder-link). Like any other software project, having a robust and well thought out tests for your chatbot will contribute immensely to the development and maintenance of your chatbot. This is mainly because among many other reasons, testing ensures your chatbot functions as required and makes it easy to maintain your codebase.

You can run both manual and automated tests. It is very easy to run manual tests if you are dealing with a project that is small in size and scope. With manual testing, you can login to your [IM](#placeholder-link) account and start chatting to test whether the chatbot works as intended. As the project increases in size, it is not feasible to rely on manual testing. You will be relying more on automated tests since they are more reliable than manual tests. Automated testing will not only make work easier but catch a number of bugs and edge cases which could be easily missed when running manual tests. With automated tests, your job will be to analyze and interprete the data generated.

## Wechaty chatbot testing tools

Wechaty is unopinionated about which tools you should use for writing automated tests. There are a number of testing frameworks you can choose from. Your choice of testing framework will mainly depend on your preference and technical background. As you come up with a testing strategy there are tools which we believe are worth checking out to guide you in designing a robust test for your chatbot. Some of these tools are:

- [Chatbottest](https://chatbottest.com/)

  This is an open source guide that helps chatbot makers identify issues in a chatbot's design. In this guide, chatbot-user interaction has been broken down into seven categories, namely:

  - Personality
  - Onboarding
  - Understanding
  - Answering
  - Navigation
  - Error management
  - Intelligence

  We believe the [Chattbottest](https://chatbottest.com/) guide provides an excellent background to Wechaty chatbot testing.

- [Botanalytics](https://botanalytics.co/)

  This is a coversational analytics tool focused mainly on engagement and retention measurement for chatbots. This tool helps you visualize how the chatbot interacts with your clients. As a result it provides insights on how well your chatbot is performing so that you learn how to improve it.

  For more about what you can do with this tool and the IM platforms supported, you can check the [Botanalytics website](https://botanalytics.co/).

- [Dimon](http://dimon.co/)

  This is a platform that helps chatbot makers to identify and fix issues in chabot conversations. It offers features such as decreased testing time and constant monitoring as a result providing real-time notification if something goes wrong. It also supports a number of IM platforms. We recommend you learn more about it on the [Dimon site](http://dimon.co/) to see if it suits your needs.

## Key considerations when testing Wechaty chatbots

Chatbots are conversational in nature. With Wechaty, you can build chatbots for the different [IM](#placeholder-link) platforms. The following are some of the key questions that we believe will guide you when doing both manual and automated testing of Wechaty chatbots. You will notice some questions can only be integrated in manual tests.

- Does the chatbot respond to meaningless phrases and statements which have not been covered?
- Does the chatbot accurately and adequately provide information about the products and services to influence client decision?
- Does the chatbot understand the clients' queries?
- Does the chatbot provide relevant and accurate responses to client questions?
- Are the phrases used in the conversation culturally sensitive?
- Does the chatbot provide prompt responses?
- Does the chatbot keep the user engaged?
- Does the chatbot violate the terms of service of the Instant Messaging platform on which it is running?

Chatbot testing is not an event but a process which runs through the entire chatbot development lifecycle. Unit testing conducted while coding is as important as the real-life feedback provided as the catbot interacts with clients in production. It is paramount to use the information obtained from feedback to improve the bot.
