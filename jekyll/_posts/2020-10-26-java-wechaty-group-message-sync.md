---
title: Wechaty bot in Java to sync group messages
author: charles-wu-chen
image: /assets/2020/java-group-message-sync-bot/wechaty-java.webp
categories: project
tags:
  - java
  - aws
  - productivity
---

In the previous blog, we have deployed [wechaty bot with node.js to aws](https://wechaty.js.org/2020/08/28/deploy-wechaty-in-aws/).  This blog is about to develop wechaty bot with Java and implement the function of sync messages in between different groups.

## Prerequisites

- wechaty token [Way to get a token](https://github.com/juzibot/Welcome/wiki/Support-Developers)
- Docker is installed in the server / local. This is required for Java wechaty project. [Docker Official Site](https://docs.docker.com/get-docker/)

## Setup `Token Gate Server`

1. Follow the official wechaty instruction [here](https://github.com/wechaty/wechaty/issues/1985)
2. Make sure your localhost and port `8788` is accessible from public. If you are connecting internet with home network router,  you will need to set up port forwarding for port `8788` to your machine. And if you are using `AWS EC2` as server, you need to config security group to allow inbound traffic to port `8788`
3. To test the Wechaty Token Gate Server is working, [Token Test Site](https://api.chatie.io/v0/hosties/your_padplus_token) shall return your public IP and port 8788

``` json
{
"host":"xxx.xxx.xxx.xxx",
"port":8788
}
```

## Start Java Application

[Java-wechaty](https://github.com/wechaty/java-wechaty) is a good place to start the hello world application.  The ding-dong bot example is in the example folder.

1. Checkout the code.

1. In the example folder, build the executable by
`mvn clean install`

1. Run the executable jar by
`java -jar target/wechaty-example-1.0.0-SNAPSHOT-jar-with-dependencies.jar`

### Common issues

#### Account was disabled / locked by Wechat
  
Solutions:

- It is a high risk to use a newly registered wechat account. Advice to use an account registerred more than half a year.
- Login account but DO NOTHING to a few days.  Then try again.
- Related Issues in github [issue 1](https://github.com/wechaty/wechaty/issues/2040#issuecomment-689347508)[issue 2](https://github.com/wechaty/wechaty-getting-started/issues/114)

#### The bot application server is not stable. Restart or logout by itself, usually in the late night

Solutions:

- Monitor the offline pattern(i.e. always offline around 4am).  Use cron job to stop and start application. As long as token hostie gateway docker server does not restart, scan is not required when restarting the application.
- Periodical send message from and to the bot in a random internal.

#### Cannot get the list of rooms after the token hostie gateway docker server restart

Solutions:

- Not a good solution yet. Sending a message in each group will register the group to wechaty bot again after server restarted.

## Group message sync feature in Java project: [Java wechaty bot](https://github.com/Charles-Wu-Chen/wechatbot)

### Check message if not from bot itself

``` java
                if (message.self()) { // skip message from self, also to avoid infinite loop
                    logger.info("message from self");
                    return;
                }
```

### Define the rooms to sync messages

``` java
MessageRoute route1 = new MessageRoute("测试区危险", "测试区不危险");
List<MessageRoute> routes = new ArrayList<>();
```

### Check if message if from the room defined in the routes, send message to the other room in the route

``` java
routes.stream()
                .filter(messageRoute -> messageRoute.getSourceName().equals(getTopicByRoom(room)))
                .forEach(messageRoute -> {
                    Room destRoom = getRoomByTopic(wechaty, messageRoute.getDestinationName());
                    destRoom.say(String.format("[%s in %s]:%n%s", from.name(), getTopicByRoom(room), text));
                });
```  
