---
title: Testing
---

Chatbot testing is an integral part of the [chatbot development lifecycle](lifecycle.md). Like any other software project, having a robust and well thought out tests for your chatbot will contribute immensely to the development and maintenance of your chatbot. This is mainly because among many other reasons, testing ensures that your chatbot functions as required and makes it easy to maintain your codebase.

You can run both manual and automated tests. It is very easy to run manual tests if you are dealing with a project that is small in size and scope. With manual testing, you can log in to your IM account and start chatting to test whether the chatbot works as intended. As the project increases in size, it is not feasible to rely on manual testing. You will be relying more on automated tests since they are more reliable than manual tests. Automated testing will not only make work easier but catch a number of bugs and edge cases which could be easily missed when running manual tests. With automated tests, your job will be to analyze and interpret the generated data.

## Wechaty chatbot testing tools

Wechaty is unopinionated about which tools you should use for writing automated tests. Your choice of testing framework will mainly depend on your preference and technical background. However, we do have the [wechaty-puppet-mock](https://www.npmjs.com/package/wechaty-puppet-mock) testing framework and the more specific [wechaty-mocker](https://github.com/wechaty/wechaty-mocker) to help you do better unit testing of your chatbots. The latter generates mock wechat account for testing purpose.

The basic usage of `wechaty-puppet-mock` for testing your chatbot is illustrated in the code below.

```js
/**
 * Import dependencies
 */
import { Wechaty } from "wechaty";
import { PuppetMock, mock } from "wechaty-puppet-mock";

test("Testing your chatbot", async () => {
  /**
   * Setup Wechaty Mock System
   */
  const mocker = new mock.Mocker();
  const puppet = new PuppetMock({ mocker });
  const bot = WechatyBuilder.build({ puppet });

  /**
   * Start Wechaty Environment
   */
  await bot.start();

  mocker.scan("https://github.com/wechaty", 1);

  const user = mocker.createContact();
  mocker.login(user);

  const contact = mocker.createContact();
  const room = mocker.createRoom();

  /**
   * Message Processing
   */
  user.say("Hello").to(contact);
  contact.say("World").to(user);
});
```

You can read the [unit tests](https://github.com/wechaty/wechaty-vorpal-contrib/blob/master/src/contrib/math_master/math_master.spec.ts) for math_master bot for a full example illustrating the use of `wechaty-puppet-mock` package for conversational testing of your chatbot.

Similarly there is an [example](https://github.com/wechaty/wechaty-mocker/blob/master/examples/math-master.ts) on how to use `wechaty-mocker` for testing the math_master bot.

## Other chatbot testing tools

As you come up with a testing strategy, there are third party tools which we believe are also worth checking out to guide you in designing a robust test for your chatbot. Some of these tools are:

- **[Chatbottest](https://chatbottest.com/)**

  This is an open source guide that helps chatbot makers identify issues in a chatbot's design. In this guide, chatbot-user interaction has been broken down into seven categories, namely:

  - Personality
  - Onboarding
  - Understanding
  - Answering
  - Navigation
  - Error management
  - Intelligence

  We believe that the [Chattbottest](https://chatbottest.com/) guide provides an excellent background to Wechaty chatbot testing.

- **[Botanalytics](https://botanalytics.co/)**

  This is a conversational analytics tool focused mainly on engagement and retention measurement for chatbots. This tool helps you visualize how the chatbot interacts with your clients. As a result it provides insights on how well your chatbot is performing so that you learn how to improve it.

  For more information on what you can do with this tool and the supported IM platforms, you can check the [Botanalytics website](https://botanalytics.co/).

- **[Dimon](http://dimon.co/)**

  This is a platform that helps chatbot makers to identify and fix issues in chatbot conversations. It offers features such as decreased testing time and constant monitoring as a result providing real-time notification if something goes wrong. It also supports a number of IM platforms. We recommend that you learn more about it on the [Dimon site](http://dimon.co/) to see if it suits your needs.

## Key considerations when testing chatbots

Chatbots are conversational in nature. With Wechaty, you can build chatbots for the different IM platforms. The following are some of the key questions that we believe will guide you when doing both manual and automated testing of chatbots. You will notice some questions can only be integrated in manual tests.

- Does the chatbot respond to meaningless phrases and statements which have not been covered?
- Does the chatbot accurately and adequately provide information about the products and services to influence client decision?
- Does the chatbot understand the clients' queries?
- Does the chatbot provide relevant and accurate responses to clients' questions?
- Are the phrases used in the conversation culturally sensitive?
- Does the chatbot provide prompt responses?
- Does the chatbot keep the user engaged?
- Does the chatbot violate the terms of service of the Instant Messaging platform on which it is running?

Chatbot testing is not an event but a process which runs through the entire chatbot development lifecycle. Unit testing conducted while coding is as important as the real-life feedback provided as the chatbot interacts with clients in production. It is paramount to use the information obtained from feedback to improve the bot.
