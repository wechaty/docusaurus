---
title: "java-wechaty auto get news"
author: harrisonqi
categories: tutorial
tags:
  - java
image: /assets/2020/harrisonqi/2020-12-28-auto-push-news-banner.webp
---

In daily life, most people always want to know latest news. This tutorial will record how to automatically get the current latest news.

## Project structure

### Technology selection

`kotlin` + `java-wechaty` + `Spring boot`
IDE: IntelliJ IDEA

### Core Modules

1. Wechaty(WeChat push)
2. Timing task
3. Information acquisition

## Start

### Init project

Visit [Spring initializr](https://start.spring.io/) and generate:

![Spring initializr](/assets/2020/harrisonqi/2020-12-28-auto-push-news-01.webp)

Download & unzip, open with IDEA:

![open with IDEA](/assets/2020/harrisonqi/2020-12-28-auto-push-news-02.webp)

Add dependency(newest version) and update:

```xml
<dependency>
    <groupId>io.github.wechaty</groupId>
    <artifactId>wechaty</artifactId>
    <version>0.1.5-SNAPSHOT</version>
</dependency>
```

![dependency](/assets/2020/harrisonqi/2020-12-28-auto-push-news-03.webp)

### Add wechaty scan plugin

Create `WechatyPlugins.kt` file in `com.example.demo`:

```kotlin
package com.bugcatt.wxbot.wechaty.plugins

import io.github.wechaty.MessageListener
import io.github.wechaty.ScanListener
import io.github.wechaty.Wechaty
import io.github.wechaty.WechatyPlugin
import io.github.wechaty.schemas.MessageType
import io.github.wechaty.schemas.ScanStatus
import io.github.wechaty.user.Message
import io.github.wechaty.utils.QrcodeUtils

typealias DingDongOptions = DingDongOptionsObject

class DingDongOptionsObject {
    var at = true
    var dm = true
    var room = true
}

fun isMatchOptions(options: DingDongOptionsObject? = null, message: Message): Boolean {
    val localOptions: DingDongOptionsObject = options ?: DingDongOptionsObject()

    if (localOptions.room && message.room() != null) {
        return true
    }

    if (localOptions.at && message.room() != null && message.mentionSelf()) {
        return true
    }

    if (localOptions.dm && message.room() == null) {
        return true
    }

    return false
}

class WechatyPlugins {

    companion object {
        @JvmStatic
        fun DingDongPlugin(options: DingDongOptions?): WechatyPlugin {
            return fun(wechaty: Wechaty) {
                wechaty.onMessage(object : MessageListener {
                    override fun handler(message: Message) {
                        if (message.type() != MessageType.Text) {
                            return
                        }

                        val room = message.room()

                        val text = if (room == null) {
                            message.mentionText()
                        } else {
                            message.text()
                        }

                        if (!isMatchOptions(options, message)) {
                            return
                        }

                        if (!"#ding".equals(text)) {
                            return
                        }

                        if (room == null) {
                            message.say("dong", message.from()!!)
                        } else {
                            room.say("dong")
                        }
                        return

                    }
                })
            }
        }

        @JvmStatic
        fun ScanPlugin(): WechatyPlugin {
            return fun(wechaty) {
                wechaty.onScan(object : ScanListener {
                    override fun handler(qrcode: String?, statusScanStatus: ScanStatus, data: String?) {
                        println(QrcodeUtils.getQr(qrcode!!))
                    }
                })

            }
        }
    }

}
```

Screenshot:

![dependency](/assets/2020/harrisonqi/2020-12-28-auto-push-news-04.webp)

### Autowire wechaty

Change DemoApplication.kt to:

```kotlin
package com.example.demo

import io.github.wechaty.Wechaty
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean

@SpringBootApplication
class DemoApplication{

    @Bean
    fun wechaty():Wechaty{
        val wechatyToken = "your wechaty token"
        val bot = Wechaty.instance(wechatyToken)
        bot.use(WechatyPlugins.ScanPlugin())
        bot.start(false)
        return bot
    }

}

fun main(args: Array<String>) {
    runApplication<DemoApplication>(*args)
}
```

![dependency](/assets/2020/harrisonqi/2020-12-28-auto-push-news-05.webp)

Then run the application, you'll see log of wechaty.

### Create schedule

#### Enable scheduling

First we need enable schedule:
Add a `@EnableScheduling` to application:

![EnableScheduling](/assets/2020/harrisonqi/2020-12-28-auto-push-news-08.webp)

We need schedule of spring boot, so we create `MySchedule.kt`:

![MySchedule](/assets/2020/harrisonqi/2020-12-28-auto-push-news-06.webp)

#### Inject wechaty

We wanna use functions of wechaty. Because the injection has been completed above, we only need to directly introduce here:

![Inject wechaty](/assets/2020/harrisonqi/2020-12-28-auto-push-news-07.webp)

#### Create a schedule task

Let's create a schedule for test. Print time every 5 second. Replace your `MySchedule.kt`:

```kotlin
package com.example.demo

import io.github.wechaty.Wechaty
import org.springframework.scheduling.annotation.Scheduled
import org.springframework.stereotype.Component
import java.time.LocalDateTime

@Component
class MySchedule(private val wechaty: Wechaty) {
    @Scheduled(fixedDelay = 5000)
    fun autoSuggest() {
        println("time: ${LocalDateTime.now()}")
    }
}
```

Run application, you can see time print on your console:

![Inject wechaty](/assets/2020/harrisonqi/2020-12-28-auto-push-news-09.webp)

Next, we only need to focus on how to push and content.

### Free news api

#### RestTemplate

Because we need `RestTemplate` to send http request, so we add a dependency into `pom.xml`:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```

![RestTemplate](/assets/2020/harrisonqi/2020-12-28-auto-push-news-10.webp)

Don't forget to reimport.

#### News Api

There's a free news [Api](https://www.juhe.cn/docs/api/id/235). Let's use it.

First, we create a data class to receive json data. Create `ToutiaoResponse.kt`:

```kotlin
package com.example.demo

import com.fasterxml.jackson.annotation.JsonProperty

data class ToutiaoResponse(
        @JsonProperty("reason")
        val reason: String? = null,
        @JsonProperty("result")
        val result: Result? = null
) {

    data class Result(
            @JsonProperty("data")
            val `data`: List<Data>? = null,
            @JsonProperty("stat")
            val stat: String? = null
    )

    data class Data(
            @JsonProperty("author_name")
            val authorName: String? = null,
            @JsonProperty("category")
            val category: String? = null,
            @JsonProperty("date")
            val date: String? = null,
            @JsonProperty("thumbnail_pic_s")
            val thumbnailPicS: String? = null,
            @JsonProperty("thumbnail_pic_s02")
            val thumbnailPicS02: String? = null,
            @JsonProperty("thumbnail_pic_s03")
            val thumbnailPicS03: String? = null,
            @JsonProperty("title")
            val title: String? = null,
            @JsonProperty("uniquekey")
            val uniquekey: String? = null,
            @JsonProperty("url")
            val url: String? = null
    )
}
```

Then create `NewsUtil.kt`:

```kotlin
package com.example.demo

import org.springframework.web.client.RestTemplate
import org.springframework.web.client.getForObject

class NewsUtil {

    fun getNews(): ToutiaoResponse {
        val type = "top"
        val appKey = ""
        val url = "http://v.juhe.cn/toutiao/index?type=$type&key=$appKey"

        val restTemplate = RestTemplate()
        return restTemplate.getForObject(url, ToutiaoResponse::javaClass)
    }
}
```

Finally, we just use this function in our schedule:

```kotlin
package com.example.demo

import io.github.wechaty.Wechaty
import org.springframework.scheduling.annotation.Scheduled
import org.springframework.stereotype.Component

@Component
class MySchedule(private val wechaty: Wechaty) {

    @Scheduled(fixedDelay = 600000)
    fun autoSuggest() {
        val newsResponse = NewsUtil().getNews()
        val newsList = newsResponse.result?.data?:return

        for (i in 0..2) {
            wechaty.say("Latest news: ${newsList[i].title}" +
                    "\n${newsList[i].url}")
        }
    }
}
```

Ok, here's the very simple news auto push plugin. You can use your imagination to create more useful plugins!

You can find code [here](https://github.com/harrison-pioneer/wechaty_auto_news)
