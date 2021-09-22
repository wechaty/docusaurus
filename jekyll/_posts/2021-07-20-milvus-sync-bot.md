---
title: "Wechaty 实现 Milvus 社区群消息同步"
author: shiyu22
categories: article
tags:
-  blog
-  milvus
-  syncbot
image: /assets/2021/07-milvus-sync-bot/background.webp
---
> 作者: [shiyu22](https://github.com/shiyu22)， 程序媛
## Wechaty 实现 Milvus 社区群消息同步

## 背景

首先介绍下开发背景，[Milvus](https://milvus.io/) 是一个开源的特征向量数据库，本着开源互助的精神，社区一直致力于帮助用户解疑答惑。企业微信聊天群是社区的交流地之一，基于群聊自动扩群功能下，每个群聊的人数上限是 200 人，所以 Milvus 开源一年半以来，累计了十个用户交流群。用户分散在多个群会发生一些交流或管理方面的问题：
- 旧群交流少：十个交流群中之前的群中交流不多，因为该踩的坑都踩完了，老用户提问的频率不高。
- 多个群问相似的技术问题：不同的用户在不同的群里问类似的问题，社区人员需要多次重复回答。
- 社区重复发布新闻等消息：当产品发布新版本时，社区会发布新闻，这时需要在十个群里手动转发。
- 技术交流覆盖不广泛：当一个群里交流技术难题，其他群的小伙伴无法参与或查看。
基于以上的这些问题，社区考虑做一个企业微信群间消息同步的机器人，开发群内的消息同步功能，方便群里用户的沟通与交流。
## 效果展示

针对前面提到的问题，社区计划实现一个可以同步群消息的机器人，之前了解到 [Wechaty](https://github.com/wechaty/wechaty) 可以实现这个功能，并且 Wechaty 的社区也部署了同步群消息的机器人。Wechaty 是一个开源的的对话机器人 SDK，它是一个使用 Typescript 构建的Node.js 应用。支持多种微信接入方案，包括网页，ipad，ios，windows， android 等。
基于 Wechaty 部署的机器人可以同步十个群的消息，效果展示如下面的截图，机器人负责转发其他群的消息，保证每个群可以同步，用户交流群的人就可以跨群交流了。接下来将介绍如何用 Wechaty 部署消息同步的机器人。
![效果展示](/assets/2021/07-milvus-sync-bot/syncbot1.webp)
## Wechaty 的具体实现

- 获取 Milvus 用户交流群的列表
为了同步多个群的消息，首先获取需要同步消息的群列表，这时主要通过群名来判断，如判断群的前缀是否为 ” Milvus 用户交流群“，此时 Wechaty 会返回一个 Room 列表。
```python
async def on_login(self, contact: Contact):
    self.ROOM_LIST = ['Milvus用户交流群']
    roomlist = await self.Room.find_all()
    self.community_list = []
    for r in roomlist:
        name = await r.topic()
        # the group name like 'Milvus用户交流群101'
        if name[:-3] in self.ROOM_LIST:
            self.community_list.append(r)
```
- 收到消息时转发到指定群
接下来就判断接受到的消息是否来自 Room 列表，如果是的话就将其转发到剩余的的几个 Room。
```python
async def on_message(self, msg: Message):
    room = msg.room()
    if room:
        contact = msg.talker().name
        text = msg.text()
        group = await room.topic()
    
        # cheeck if the msg is from ROOM_LIST
        if group[:-3] in self.ROOM_LIST:
            # send the msg to other rooms and make sure not duplicated.
            for community in self.community_list:
                if room is community:
                    continue
                community.say(text)
```
- 多种类型的信息转发
需要注意的是，群里会接收到多种类型的消息，如“文本”，“图片”，“公众号文章”和“小程序”等，那么可以在 Wechaty 中判断信息类型并发出消息。
```python
msg_type = msg.type()
if msg_type==MessageType.MESSAGE_TYPE_IMAGE:
    image: Image = msg.to_image()
    hd_file_box: FileBox = await image.hd()
    await hd_file_box.to_file(file_path='./hd-image.jpg', overwrite=True)
    image_filebox = FileBox.from_file('./hd-image.jpg')
    await community.say(image_filebox)
elif msg_type==MessageType.MESSAGE_TYPE_URL:
    content = await msg.to_url_link()
    await community.say(content)
elif msg_type == MessageType.MESSAGE_TYPE_MINI_PROGRAM:
    mini_program = await msg.to_mini_program()
     if mini_program:
        await community.say(mini_program)
else:
    if text:
        send_text = '[{}@{}]:  {}'.format(contact, group[-3:], text)
        await community.say(send_text)
```
## 总结

最后，十分感谢 Wechaty 开源的 Python SDK 以及开源激励计划，可以十分方便的使用 Token 进行开发。而 Milvus 特征向量数据库同为开源项目，计划在下一版本中利用 Milvus 智能判断广告消息，预防非技术交流人员在群里发布广告等消息，期待下一版本的更新！
