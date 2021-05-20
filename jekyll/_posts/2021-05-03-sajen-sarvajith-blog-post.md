---
title: "Sajen Sarvajith K: Blog Post for interactive tutorial (Google Season of Docs 2021 Proposal)"
author: sajenjeshan1222
categories: gsod
tags:
  - interactive
  - tutorial
  - google
  - gsod21
  - docs
  - project
  - proposal
image: /assets/2021/05-sajen-sarvajith-blog-post/profile-pic.jpeg
---

## Biographical Information

I am a sophomore undergraduate student majoring in Computer Science from India. I have acted as a resource person on topics like ML, DL and orientation on online course awareness in colleges and universities. I have also organised and taken a few webinars regarding machine learning during COVID-19 pandemic.

I am passionate about making interactive tutorials, documentation and deep learning. I have worked on projects regarding R-CNN, LSTM and deep learning in my university. I am familiar working with JS/typescript and popular frameworks like angular, react, node.js, django and flask, I will also do UI development and documentation and I have writing experience by working in paper publications.

I am good with popular machine learning libraries like TensorFlow, PyTorch, keras, SciKit Learn, pandas, numpy, matplotlib. I have cracked the qualifier round of google code jam 2020, completed the Google Code-in competition in 2017 and completed hacktoberfest 2020 which are regarding open source.

I have worked on two paper publications regarding anomaly detection and quantum machine learning algorithms. I am going to publish in Elsevier and ICLR journals respectively due to this pandemic. I am unable to go to my university AI lab to complete my final tests so my publications have been paused for now.

### I have applied to GSoD 21 in wechaty org regarding making an interactive tutorial to make users to understand and learn wechaty in a interactive way

#### GSod Project Proposal

##### Contact Information

**Name:** sajen sarvajith k

**Email:** [sajenjeshan1222@gmail.com](mailto:sajenjeshan1222@gmail.com)

**GitHub:** [sajenjeshan1222](https://github.com/sajenjeshan1222)

**Time Zone:** UTC + 5:30

#### Motivation

My passion in deep learning, Natural Language Processing and documentation and my interest to work for an internationally reputed open source organisation made me apply for this Wechaty project.

Ideally this project will allow me the opportunity to utilize my experience gained as an Wechaty GSoD intern. I believe that there is no better place to continue my coding and documentation skills through this platform.

I consider it a vibrant experience to get the opportunity to meet mentors from all over the world and learn about new technologies. I am a very diligent and highly motivated student, and I am certain to push through with dedication. I have always worked to accomplish my goals and gain more knowledge and insight into quantum neural networks, deep learning and documentation. I will be able to contribute to this community in the best way I can.

##### Project Title

&quot;Create easy to learn tutorials for beginner users of wehcaty&quot;

##### Synopsis

1. Abstract
2. Task
3. Expected Results
4. Implementation/Approach
5. Conclusion
6. Additional Idea

**Abstract:**

Users come to Wehcaty website seeking how to use wechaty to build a chatbot application for solving their problems. Unfortunately, the learning curve is not friendly to our users, they always struggle with setting up their development environment, can not get started with simplest example source code, and find it hard to know what they can do with the wechaty API. This problem leads to losing users for wechaty.

This project aims to improve the tutorials for wechaty in a way that the new wechaty users can run example source code in the browser and learn how to use wechaty in an interactive way.

**Task:**

- To make an interactive tutorial which allow users to learn by doing
- Get the user started
- Make sure the tutorial works all the time
- Ensure the users sees results immediately
- Make the tutorial repeatable
- This tutorial is going to focus on concrete steps, not abstract concepts
- Provide the minimum necessary explanation
- Focus only on the steps needs to be taken
- Work with the contributor team to update the documentation on the wechaty site

**Expected Results:**

- An interactive wechaty tutorial by using which the new users can understand easily by doing it live
- This easy and interactive tutorial helps the new users to get started in wechaty
- The tutorial will be tested several time and it will be stable once it is deployed
- When a user interacts by clicking run a code in the new tutorial the results will be shown up immediately without any delay
- This tutorial is easy to use, interactive and provides necessary explanation to the users to understand quickly and efficiently

**Implementation/Approach:**

Below explanation regarding the significant steps for this interactive and easy to use tutorial

#### Overview Section

- The beginner tutorial has different sections, the first section is overview and in that section new users can find an interactive way of description about the wechaty in general. This is achieved by using JS elements and the webpage intracts to user clicks and other actions rather than a static tutorial or a video tutorial, by this users will understand about the wechaty easily
- When a user reaches the end of the overview page there will be 2 options for the users, like the webpage will ask the new users that they have understood the above definition or not and the user must have to click it
- Once the user click anything from the options (understood or not) then 2 operations will take place the first one is the user answers will be saved in a &quot;log&quot; file which we can later use it as an review/survey taken for this tutorial by implementing this, the additional work to take a separate survey from the users about the tutorial is reduced and users can provide their reviews on the spot just by clicking which makes users an easy way to give feedback.
- The second operation is that when the user click they understood then it will move on to next section, When a user click don&#39;t understand the above overview of the wechaty given in the tutorial then by using JS the web page will refresh with an alternative text which will be more simplified version which explains about the wechaty, then there will be a GIF/videos running in the webpage which helps the user to visualise how the wechaty is working and implemented in different messaging platform like wechat, whatsapp etc. user can choose the messaging platform and they can visualise with a small GIF which demonstrate how the wechaty is working so because of this approach users can understand easily and there will also be an text which explains about the wechaty.

#### Quick Start Guide Section

- This section is a quick start guide section where the new users can get in touch with the wechaty code live directly from the wechaty tutorial page.
- In this section there will be a step by step code with editor(terminal) available as well as a simple and clear explanation of what the code does in a beginner friendly way, users can change the code and explore with it by seeing the outputs of the code live from wechaty website without any delay.
- This method of tutorials is called learn by doing tutorials which can help beginners to get started with wechaty and understand wechaty easily and quickly. In this tutorial users can interact, understand and use wechaty from the website itself which will help the beginners to grasp how to implement wechaty in real world cases so easily
- The getting started code for beginners will be available in the new tutorial of wechaty website. The code will be in a sequence where the beginners can find the explanation for the code from how to install wechaty and start wechaty to make it run. All this can be done directly from the website of wechaty without any delay or hassles so that the new users can understand more easily than ever !
- The users can also edit the code right from the web page and the can run the code without any issues by doing this users can learn more about wechaty
- Then when a user understands the basics of wechaty and if the user needs to see the wechaty live in action then this can be done too! Directly from our website.
- Once the user finishes going through our interactive tutorial then when a user starts the wechaty with the command that is done in our local machine to start wechaty, this can be done in the website itself now the user can start and run the wechaty from our website without any delay or any issues. When a user start the wechaty and run wechaty in browser then a UI will pop in website where users can interact with the chatbot that they started in the wechaty website and also an output like in terminal will be shown.
- This UI is a demo to show the beginner users to see how the chatbot works in real time when implemented in any supported messaging platform so by this user can be able to understand and use wechaty without any hiccups.
- The main thing is that all these things are done client side without any delay or slow and users can see the results immediately as soon as they run the code in the interactive tutorial page. There is no backend required for this approach and this interactive page just works perfectly fine like fluid and the user cannot notice any lag in the outputs or in the performance of the wechaty and web page.
- All this is achieved through an JS emulation which works without any issues so by this wechaty and the interactive tutorial works flawlessly in the webpage like they run in real time. By using async functions, js workers and other frameworks an interactive experience is provided to the wechaty users.
- The user have also options to change the code and run wechaty simultaneously
- User can edit the code and rerun the cell for a different output this will work exactly like how terminal works but it works directly from our website with a modern look and extremely improved UI of the page so by this user can understand in a efficient way and the wechaty will also run accordingly with the new updates as user gives so they can interact and see how it works.
- All these beginner tutorials have the basic code to get started with wechaty as well as explanation which explains and makes users to understand the wechaty in an easy and interactive way.

**Note:-**  **All the upcoming tutorials regarding overview, quick start, running locally, Money Bot, Assistant Bot, Coaxer Bot, using plugin, using redox and others will be made into an interactive way of learning tutorial in a step by step manner. These can be run directly in the website and users can edit the code and learn about the wechaty directly by doing it in our wechaty website. This approach that I have said above will help wechaty to run in the website itself. All these will be implemented as explained in the Quick Start Guide Section. I think this method will be more effective than a static website with a video tutorial because by this interactive learning tutorial users get the experience by doing it.**

**Conclusion:**

- This project will help the beginner/new users of wechaty to learn about wechaty in a interactive way and helps for better understanding without any hassles
- This interactive tutorial will helps users to run code directly from the wechaty website without any additional requirements needed
- These tutorials will have a step by step instruction as well as good and clear explanation
- There will also be an UI to see the wechaty live in action and the user can test the wechaty directly from the browser

**Additional Idea:**

- I am also interested in making this interactive beginner tutorial in different languages like chinese, english, Hindi, french etc.
- This makes our users learn about the wechaty in their preferred language so that beginner users will be more comfortable when going through this tutorial.
- Once I finish implementing this interactive tutorial then I will make a documentation for the code of this tutorial so that new developers can understand the code of this interactive tutorial and if they have any ideas to improve it they can improve it by going through the code documentation.

#### Benefits to community

- This project benefits the wechaty and open source community by improving the tutorials for wechaty in a way that the new/beginner wechaty users can run example source code in the browser and learn how to use wechaty in an interactive way.
- This interactive tutorial increases the pageviews and the duration of the tutorials will also be increased then the bounce rate of the tutorials will be decreased enormously.
- The new tutorial will create a more personalized experience for the wechaty users

  - This new tutorial establishes an interaction between users and the content. This interaction allows wechaty users to have a more personalized experience beyond just a static tutorial
  - Not only does interactivity provide a better user experience, these interactions can also be measured. Using the data collected, we can see where/when/how users are clicking, and make adjustments to give them a more personalized experience. We can direct users to exactly what they are looking for and create more relevant tutorials for further visitors.
- This tutorial increases user engagement. This website tutorial allows users to interact and automate each visitor&#39;s experience.
- This website creates positive experience for our users
- It increases conversions

  - This is done when we allow our visitors to do something and get a unique response back in regards to what was triggered.
  - This tutorial attracts more visitors and to be more engaged with the website. As they become more engaged, their trust and interest grows.
- It invokes engagement and action. The thing that makes a website interactive is the ability for the user to actively engage with the content and various elements. This tutorial will break past one-way form of communication to start a two-way conversation with the user.
- This tutorial can be extremely beneficial to both users and the wechaty community by providing individual and robust platforms for beginner tutorials.

#### Deliverables

#### Project Timeline

**Week 1 (May 18 - May 24):**

- Before the project timeline begins I will set up my development environment so that I will start the project as soon as possible this helps me to provide a professional tutorial
- In this will I will complete the work of making the overview interactive tutorial for the first section of wechaty which explains about the wechaty in general
- Create the log file for getting the user review in the webpage as mentioned in the
implementation

**Week 2 (May 25 - May 31):**

- This week I will work on implementing the subsection of the overview which consist GIF and easy to understand way I have explained above like how wechaty will work and look like when implemented in a messaging platform.
- I will finish implementing the JS emulator for our website which emulates the work of an bash/terminal
- How the emulator and this interactive website will look and how the users can edit the code live in the webpage and run wechaty in the browser itself all these is clearly explained above
- By this week our emulator will be ready so that we can implement this in our wechaty website to make real time interactive tutorials which users can understand easily

**Week 3 (June 1 - June 7):**

- Making step by step interactive tutorial for quick start guide
- Implementing the live code editor for this guide with code as well as explanation
- By this users can run the code from the wechaty website and understand it

**Week 4 (June 8 - June 14):**

- In this week i will make this interactive tutorial for running locally
- This guide helps users to understand and get through the process of how to run the wechaty locally and users can find the code and run the code with the help of this tutorial directly from the website with output and good explanation if the user don&#39;t prefer to download in their local machine

**Week 5 first month evaluation (June 15 - June 21):**

- I will submit all the code and documentation for evaluation that is finished in the previous weeks
- Then to make step by step tutorial for the money bot and how to use it with proper code and explanation with examples
- This allow users to run the example code and the code given in step by step tutorial for this bot

**Week 6 (June 22 - June 28):**

- Implement the UI for the bot to run directly in the browser once the user finishes the guide to code and understand this bot
- This allow users to see the bot in action from our website without any delay
- Start the work to make the interactive tutorial for the assistant bot

**Week 7 (June 29 - July 5):**

- Finishing the tutorial for assistant bot
- This allow users to run the bot directly from our website
- It have short code and proper explanation about what the code does and the users can run the code live and check the outputs or even they can built and change the bot as they wish from our website
- Implementation of UI for the bot to intact with the users so users can see how exactly the wechaty works

**Week 8 (July 6 - July 12):**

- Implementing the UI and the step by step interactive tutorial for coaxer bot
- This will also run directly on our website and users can learn about this bot by doing it
- Explanation of the code and making the code to run, able to edit and a proper explanation will be provided

**Week 9 second month evaluation (July 13 - July 19):**

- This week I will submit the work that had been completed in the previous week
- I will interact with the respective mentors and work accordingly to produce a good and rich tutorial for wechaty users
- Start the interactive tutorial work for usage with docker

**Week 10 (July 20 - July 26):**

- Finishing the work of usage with docker tutorial
- Users can use this to learn and it gives step by step guide
- By this users will get hands on experience
- Starting the work for usage with heroku tutorial

**Week 11 (July 27 - Aug 2):**

- Implementing the interactive tutorial and finishing up the work of heroku
- To start working for implementation on using plugin with wechaty
- To make this tutorial interactive by allowing users to make changes in the code and to run the code and understand by it
- Making detailed and good explanation on this

**Week 12 (Aug 3 - Aug 9):**

- Implementation of tutorial on using vorpal with wechaty
- Code samples and making it interactive so that the users can learn and understand by doing it rather than just by seeing
- A step by step explanation for the vorpal with wechaty

**Week 13 third month evaluation (Aug 10 - Aug 16):**

- Making step by step guide with interactive tutorial on using redux with wechaty
- Doing some examples on wechaty so that user can feel free to explore this examples and they can run it live in our website and see the how it works in different use cases
- The third month evaluation will submitted on Aug 16 without fail by giving the previous week works and their outputs

**Week 14 (Aug 17 - Aug 23):**

- Wechaty how to guide overview will be added in an interactive way so that users can have a better understanding of about wechaty
- Also to add use cases of wechaty in different areas with live code and examples to make and allow users to run and see the use cases of wechaty in live from the website
- Starting work for making interactive tutorial on installing wechaty

**Week 15 (Aug 24 - Aug 30):**

- Doing/making the guides and step by step process for installing wechaty
- Implementation with code sample as well as explanation on how to install wechaty so the users can learn by doing

**Week 16 (Aug 31 - Sep 6):**

- Starting work for creating a bot tutorial in an interactive way
- This tutorial will have sample code inorder to make users to understand how to make the bot
- Implementing the work to run the code from our web page without any delay
- Making explanation for the bot codes which makes users to understand quickly

**Week 17 (Sep 7 - Sep 13):**

- Making and implementing the interactive tutorial for listening events for wechaty and a detailed explanation with code examples and options to run will be provided to the user for better understanding
- Start working for dealing with messages tutorial

**Week 18 fourth month evaluation (Sep 14 - Sep 20):**

- Submission of the work done in recent week with the code, tutorials and documentation
- Finishing the tutorial and implementation on dealing with messages
- Implementation on the interactive and user friendly tutorial on managing contacts, making rooms, managing friends, precessing files and writing tests all these tutorials will have a good and interactive explanation on making users to understand and use wechaty so easily directly from our website

**Week 20 (Sep 21 - Sep 27):**

- Now all the intuitive tutorials/guides with code sample and explanation is finished, In this week i am going to implement the different language support for our interactive tutorials so that users across the world can understand in their native language and use it efficiently
- Documentation work will start for this interactive tutorial, code will be done in &quot;.md&quot; file so that in further if anyone want to improve this tutorials then they can go through this documentation and they can concentrate on improving the tutorials

**Week 21 (Sep 28 - Oct 4):**

- Documentation work will be finished and check for good quality
- I will use this week to go through all the code, tutorials, examples and explanation build from the starting till the end and if there is any issues they will be fixed
- The quality of the code, tutorials and documentation will be check continuously and improved

**Week 22 (Oct 5 - Oct 14):**

- I will ask for community suggestions and discuss with the mentors for any improvement and to improve the quality
- If there is any changes must be done according to user preferences that will be done accordingly
- Completing any remaining work and submission for final evaluation

**Week 23 fifth and final evaluation (Oct 15 - Oct 22):**

- Submitting all the final works that is done from starting till now with good quality content and rich tutorials

I have already explained this interactive tutorial in the [popsoal](https://docs.google.com/document/d/1szNLbHT8k6ty7xYE9aRvFW2QGrOeTKea5lfcUHLyPic/edit?usp=sharing) I submitted. The interactive tutorial will have a step-by-step code block (code editor which and run code and provide output in wechaty website) with step-by-step instructions/explanation for each code so that users can run the code and learn from it even users can change the code directly from the website then re-run it. Finally the users can run the actually wechaty bots in the website itself then the bot can respond and interact with the user this is done to show the users how the wechaty bot will work if it&#39;s deployed in any messaging platform from this users will get a idea how the bot is working and users will learn to use wechaty easily than ever!. This is done through JS emulation that is explained in detail in the project proposal without any back-end needed for this approach and everything is done in the front-end.

**Second approach:**

Since we have development [server](https://github.com/wechaty/PMC/issues/13) for wechaty community. By using this we can run all the code and this interactive tutorial can take advantage of this server. In this second approach the interactive tutorial will be done in the back-end and rendered in the front-end without any delay. The back-end scripts will be written in golang or rust so that it can be more fast to give users a real time experience.

**Final Conclusion:**

So let&#39;s discuss both of the approaches and select which approach is good for making this interactive tutorial.
