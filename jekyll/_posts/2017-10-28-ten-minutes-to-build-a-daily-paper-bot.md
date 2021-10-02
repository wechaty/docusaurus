---
title: "Ten minutes to build a daily paper bot"
author: leinue
categories: project
tags:
  - code
  - media
image: /assets/2017/leinue-bot.webp
---

I built a bot to deliver the daily paper about machine learning and fintech to the users.Considering the development of lowest cost, I chose wechaty. It's so awesome that it only took me **10 mintues** to make the bot work.

![chatbot][1]

Before the bot work, I had really done a lot of work to crawl data and filter data, I won't talk about the data here, just about the Wechaty!

## Screenshot

![screenshot][2]

## My development steps with wechaty

 1. **Watch the [tutorial video][3]**.It took me **4 mintues**.
 2. **Copy the code in the video**.It took me **30 seconds** to create a file and paste the code in.
 3. **Use the [docker][4]**.I used the docker to run the bot, which protected me from the troubles of dependency problems.It's so easy that just took me **10 seconds** to know how to start.
 4. **Run the docker**.Actually, one line code is enough to run the docker.But downloading the image of wechaty wasted some time, which cost **4 minutes**.
 5. **Code the bot**.I had prepared the API of the daily paper, so what I need to do is just wrote some codes to get the data from the API, which cost **1 mintues**.(Using **axios** and **async** function also saved a lot of time).
 6. **Test and Debug**.It worked correctly, which cost **20 seconds**.

## More

I also added some functions such as automatic reply to the bot, which made our users more active in the group.

## Some advices

 1. Just use the docker, which is so easy and can save a lot of time.
 2. Read the documents to know how powerful wechaty is.

Finally, I like wechaty, thanks to all the contributors of wechaty!

  [1]: /assets/2017/leinue-bot.webp
  [2]: /assets/2017/leinue-screenshot.webp
  [3]: https://wechaty.github.io/guide/2017/01/01/getting-started-wechaty.html
  [4]: https://github.com/wechaty/wechaty/wiki/Docker
