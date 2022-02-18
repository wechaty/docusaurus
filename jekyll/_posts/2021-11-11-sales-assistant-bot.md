---
title: 基于Wechaty的销售助理机器人--项目规划
author: kevintung
categories: project
tags: productivity
image: /assets/2021/11-sales-assistant-bot/sales-meme.webp
---

销售在跟客户沟通的过程中，会出现回复客户不及时，以及回复时存在错别字和病句的现象。所以HR部门要利用机器人记录这种情况，用于计算销售人员的绩效。

<center class="half">
  <img src="/assets/2021/11-sales-assistant-bot/01.webp" style="zoom: 21%;" />
  <img src="/assets/2021/11-sales-assistant-bot/02.webp" alt="sales-Wechat" style="zoom:21%;" />
</center>

## 影片链接

{% include iframe.html src="https://youtu.be/OHKxFKlIaIU" %}

### 报告

{% include iframe.html src="/assets/2021/11-sales-assistant-bot/sales-assistant-mid-term.pdf" %}

## 项目目标

1. 透过自动对销售群聊分析、可视化与提醒，优化销售与客户的互动

## 关键指标

1. 销售平均回复时长（具体数值待定）
2. 销售回复数量（具体数值待定）

## 项目输出

1. 每天【22点】在飞书群推送今日排行榜，呈现【每小时】**句子方**回覆**客户方**的**平均时长**与**消息数**
2. 销售每超过【1小时】未回覆，弹出警告（【】内是变量）

## 项目过程

1. 实时记录群内聊天记录
2. 分析销售响应时间
3. 将结果呈现在排行榜
4. 测试、迭代、优化

## 项目知识

1. 对于每个群，群成员包含**句子方**与**客户方**，其中句子方有一个**代表销售**
2. 销售与客户是1对多关系

## 未来扩展

1. 扩展更多的判定逻辑
2. 对不同数据加权
3. 保存截图

## 项目计划

1. 11/1-11/11 过程1
2. 11/11-11/12：过程2
3. 11/15-11/16：过程3
4. 11/18-11/20: 过程4、写报告

## 项目进展

| 时间  | 重点工作                                                 | 关键进展                               |
| ----- | -------------------------------------------------------- | -------------------------------------- |
| 11/1  | 開月會議；學習wechaty；跑通getting started項目           | 成功部署dingdong bot到服務器           |
| 11/2  | 將wechaty dingdong bot 連接到 opensearch；初學opensearch | 並成功在服務器上連接數據庫             |
| 11/5  | 將數據實時儲存在數據庫；學習opensearch基礎               | 成功建立數據庫表項，成功將數據實時儲存 |
| 11/10 | 修復bug了解opensearch細節；了解 dashboard 设计实现计划   | 在dashboard提取出信息 完成伪代码       |
