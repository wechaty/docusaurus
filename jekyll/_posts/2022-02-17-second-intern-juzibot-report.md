---
title: "2022寒假-王天睿-JuziBot项目开发-期中报告-智能信息助理"
author: tianrking
categories: article
tags:
  - juzibot
image: /assets/2022/02-second-intern-juzibot-report/cover.webp

---

## 期中报告

### 项目参与人

- 导师：段清华
- 学生：王天睿

### 项目计划

1. 01/13-01/17 : 成功运行dingdong bot，运行juzibot 初步了解juzibot 模块 并学习nodejs
2. 01/18-01/25 : 开始根据现有功能书写测试用例，同时深入了解juzibot对应模块功能
3. 01/26-02/11 : 现有功能的完善与测试用例的持续编写
4. 02/12-02/22 : 抓取的微信问答信息，并完成数据清洗
5. 02/23-02/27 : 开发句子秒回对应问答机器人,完成微信问答的api接入句子秒回

### 项目进度

- 测试模块编写
  - 文字向量服务 ✅
  - 语音转文字服务 ✅
  - 标签功能测试 ✅
  - 意图测试  ✅
  - 删除测试  ✅
  - 文件测试  ✅
  - 文件删除测试  ✅
  - 关键字测试 ✅
  - 我的文件测试 ✅
  - 重启测试 ✅

- 小橘子🍊接口编写
  - 利用 SentenceTransformers 编写 句子->向量 API 替换 CPM ✅
  - 测试框架 并完成编写 语音->文字 服务 API ✅
  - 编写上述 API 测试代码并完成 docker 封装 ✅

- 数据爬取
  - 微信广告帮助中心 ✅
  - 腾讯广告帮助中心 ✅
  - 企业微信帮助中心 ✅

#### 相关链接

- [自动语音识别](https://github.com/deepdialog/easy_asr)
- [句子转向量](https://github.com/deepdialog/easy_sts)
- [微信广告数据](https://github.com/tianrking/dont_ban_me/tree/master/app/1%E5%BE%AE%E4%BF%A1%E5%B9%BF%E5%91%8A%E5%B8%AE%E5%8A%A9%E4%B8%AD%E5%BF%83/awesome_version)
- [腾讯广告数据](https://github.com/tianrking/dont_ban_me/tree/master/app/2%E8%85%BE%E8%AE%AF%E5%B9%BF%E5%91%8A%E5%B8%AE%E5%8A%A9%E4%B8%AD%E5%BF%83)
- [企业微信数据](https://github.com/tianrking/dont_ban_me/tree/master/app/3%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E5%B8%AE%E5%8A%A9%E4%B8%AD%E5%BF%83/awesome_way)

### 遇到的问题及解决方案

#### 使用不熟悉的nodejs语言完成任务

- 遇到问题首先去积极的查阅资料，再进行多种尝试，然后询问老师，同时在解决问题后记录问题， 在此过程中学会并实现了相关编写，也提高了规范代码的意识，感谢老师的耐心帮助。

#### xiaojuzi 与 fastapi 交互

- 怎样将 wechaty 接收到的 文字/图片/语音 与 fastapi 进行交互 ， 确保它的传输高效，可以恢复。我去尝试构建请求，又没有较好的接受工具用以确定是否发送了理想的数据。所以我不得不先从 fastapi 端编写开始, 通过多次尝试编写如下

    python3

    ```python
    class Item_audio(BaseModel):
        lol: Optional[str] = None
        audio_name: Optional[str] = None
        audio_data: Optional[str] = None
    
    @app.post("/api/audio/")
    async def create_item(item: Item_audio):
   
    gg=item.audio_data.replace("data:audio/silk;base64,","")
    audio_data = base64.b64decode(str(gg))
    
    ```

    nodejs

    ```js
    const audioFileBox = await msg.toFileBox()
        const audio_dir = audioFileBox.name
        await audioFileBox.toFile(audioFileBox.name, true)
        const body = {
            audio_name: audioFileBox.name,
            audio_data: "data:audio/silk;base64," + fs.readFileSync(audio_dir, 'base64')
        };
        const response = await fetch(url + '/api/audio/', {
            body: JSON.stringify(body),
            method: 'post',
            headers: { 'Content-Type': 'application/json' }
        });
    ```

#### 编写一个"透明"的Dockerfile 的小技巧

- 编写 sts和asr api时候因为程序运行初次需要下载模型, 难以做到开箱即用，使用 COPY命令在dockerhub上显示一个不明文件移入 不够透明 容易给其他人使用造成困惑， 最后利用shell内的方式来实现

    ```bash
    RUN (echo "py code“） | python3 
    ```

#### 编写爬虫的过程

- 在编写xiaojuzi的语音转文字模块时候，学会了 nodejs 下 fetch的使用， 也对 post/get 请求有了一定认识， 编写爬虫的时候 因为界面是由javascript渲染得到的无法之间request网址，也就无法完成解析。
  
- 起初我想用webscrapy插件抓取  但是效率很低 也不方便在没有GUI的vps上操作 还需要人点击显然不是理想的解决方案

- 查阅资料后我决定选用 selenium 框架来渲染网页 然后使用 beautifulsoup lxml 进行爬取和解析 虽然可以通过 "--headless" 方式 在vps上 运行 但是为了确保 selenium 可以完整加载完一个界面 我需要每次都加上进五秒等待时间 这样就会导致爬取时间过长 而且本身我并不知道需要具体的抓取那些url

    selenium 配置

    ```python
    from selenium import webdriver
    from selenium.webdriver.chrome.options import Options

    options = Options()
    options.headless = True
    options.add_argument("--window-size=1920x1080")
    # options.add_argument("window-size=1920x3000");
    options.add_argument("--disable-notifications")

    options.add_argument('--headless')
    options.add_argument('--disable-gpu')#谷歌文档提到需要加上这个属性避免使用gpu产生bug
    
    options.add_argument('disable-infobars')#隐藏"Chrome正在受到自动软件的控制"
    options.add_argument('lang=zh_CN.UTF-8')      # 设置中文
    options.add_argument('window-size=1920x3000') # 指定浏览器分辨率
    options.add_argument('--hide-scrollbars')     # 隐藏滚动条, 应对一些特殊页面

    driver = webdriver.Chrome("/Users/mac/Desktop/chromedriver", options=options)
    ```

    抓取 并 初步提取数据

    ```python
    driver.get(url)
    time.sleep(8)
    print(driver.title)
    soup = BeautifulSoup(driver.page_source, 'lxml')
    if len(soup.find_all(attrs={'class': 'guide__title'})):            
        f.write(str(soup.find_all(attrs={'class': 'guide__title'})))
        f.write(",")
        f.write(url)
        f.write('\n')
    f.close()
    ```

    过程中可能会出现问题,这时候就可以打印 selenium 抓取时候的网页截图

    ```python
    driver.get_screenshot_as_file('1.png')
    ```

    不稳定 ， 而且低效
  
- 爬虫的目的是抓取数据 既然难以渲染得到渲染界面 不如直接从数据请求分析的角度来寻找解决思路 ， 于是就决定尝试抓包寻找解决方案. 首先通过 抓包的到 post 到数据 构造 curl请求 测试是否可以的到正确的响应。

    ```bash

    curl 'https://open.work.weixin.qq.com/help2/getQusList?lang=zh_CN&ajax=1&f=json&random=310321' \
        -H 'authority: open.work.weixin.qq.com' \
        -H 'sec-ch-ua: " Not A;Brand";v="99", "Chromium";v="98", "Microsoft Edge";v="98"' \
        -H 'accept: application/json, text/plain, */*' \
        -H 'content-type: application/json' \
        -H 'sec-ch-ua-mobile: ?0' \
        -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.82 Safari/537.36 Edg/98.0.1108.51' \
        -H 'sec-ch-ua-platform: "macOS"' \
        -H 'origin: https://open.work.weixin.qq.com' \
        -H 'sec-fetch-site: same-origin' \
        -H 'sec-fetch-mode: cors' \
        -H 'sec-fetch-dest: empty' \
        -H 'referer: https://open.work.weixin.qq.com/help2/pc/15405?person_id=1' \
        -H 'accept-language: zh-TW,zh-CN;q=0.9,zh;q=0.8,en;q=0.7,en-GB;q=0.6,en-US;q=0.5,zh-HK;q=0.4' \
        -H 'cookie: pgv_pvid=3686684000; pac_uid=0_3cbd911c9ce83; pgv_info=ssid=s2798911544; pgv_pvi=4654092288; pgv_si=s6420471808; wwrtx.ref=direct; wwrtx.c_gdpr=0; wwrtx.refid=413075501944711; __utma=114362329.896737070.1644833346.1644833346.1644833346.1; __utmc=114362329; __utmz=114362329.1644833346.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); Hm_lvt_f2ba645ba13636ba52b0234381f51cbc=1644833347; Hm_lpvt_f2ba645ba13636ba52b0234381f51cbc=1644833970; uin=o0508195902; skey=@sEUq3VJWl; RK=hA9xBYtEcN; ptcz=f4917937db9babf5c19203049471a3e4d45ea1fe7b770ef9ea93e47e33c0c0f5; wwrtx.i18n_lan=cht' \
        --data-raw '{"person_id":1,"doc_id":15405}' \
        --compressed
    ```

    这是比较杂乱复杂的，我尝试给它简化 删去对于获取数据而言不必要的部分，的到下面的方法

    ```bash
    #https://open.work.weixin.qq.com/help2/getQusList?lang=zh_CN&ajax=1&f=json&random=569866 这个是浏览器访问的网址 下面是实际的请求
    curl 'https://open.work.weixin.qq.com/help2/getQusList?lang=zh_CN&ajax=1&f=json&random=310321' \
    -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.82 Safari/537.36 Edg/98.0.1108.51' \
    -H 'referer: https://open.work.weixin.qq.com/help2/pc/15405?person_id=1' \
    --data-raw '{"person_id":1,"doc_id":15405}' 
    ```

    为了确保可靠性， curl复制粘贴非常方便， 在另一台vps上也进行了测试，的确可以的到正确的数据返回，下面就是把它转换成 requests 的请求 融入到代码里。

    ```bash
    headers = {
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.82 Safari/537.36 Edg/98.0.1108.51',
    'referer': 'https://open.work.weixin.qq.com/help2/pc/15405?person_id=1',
    }

    params = (
        ('lang', 'zh_CN'),
        ('ajax', '1'),
        ('f', 'json'),
        ('random', '310321'),
    )

    data = '{"person_id":1,"doc_id":15405}'
    ```

    此时就可以很清晰的看到请求的结构，大概率可以猜到 要么这个 random 是个假的 random 实际上是做文件索引的， 要么它是个真的random 做防止爬虫检测用，而我们要的对应文档存储就为 doc_id 。 通过脚本测试一下，很快就确定了 doc_id 对应的真的是doc 而random也是真的随机 😂😂😂😂😂 于是 我们可以在最简的基础上再反加回之前的参数 作用是伪装的更真实 防止被ban 得到下边最终构造代码

    ```python
    import requests
    headers = {
        'authority': 'open.work.weixin.qq.com',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Microsoft Edge";v="98"',
        'accept': 'application/json, text/plain, */*',
        'content-type': 'application/json',
        'sec-ch-ua-mobile': '?0',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.82 Safari/537.36 Edg/98.0.1108.51',
        'sec-ch-ua-platform': '"macOS"',
        'origin': 'https://open.work.weixin.qq.com',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://open.work.weixin.qq.com/help2/pc/15405?person_id=1',
        'accept-language': 'zh-TW,zh-CN;q=0.9,zh;q=0.8,en;q=0.7,en-GB;q=0.6,en-US;q=0.5,zh-HK;q=0.4',
        'cookie': 'pgv_pvid=3686684000; pac_uid=0_3cbd911c9ce83; pgv_info=ssid=s2798911544; pgv_pvi=4654092288; pgv_si=s6420471808; wwrtx.ref=direct; wwrtx.c_gdpr=0; wwrtx.refid=413075501944711; __utma=114362329.896737070.1644833346.1644833346.1644833346.1; __utmc=114362329; __utmz=114362329.1644833346.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); Hm_lvt_f2ba645ba13636ba52b0234381f51cbc=1644833347; Hm_lpvt_f2ba645ba13636ba52b0234381f51cbc=1644833970; uin=o0508195902; skey=@sEUq3VJWl; RK=hA9xBYtEcN; ptcz=f4917937db9babf5c19203049471a3e4d45ea1fe7b770ef9ea93e47e33c0c0f5; wwrtx.i18n_lan=cht',
    }

    params = (
        ('lang', 'zh_CN'),
        ('ajax', '1'),
        ('f', 'json'),
        ('random', '22340'),
    )

    for num in range(begin,end):
        ## num 编号为主文档对应序号
        data = '{"person_id":1,"doc_id":%s}' % str(num)

        res = requests.post('https://open.work.weixin.qq.com/help2/getQusList', headers=headers, params=params, data=data)

    ```

    这样就可以很方便的遍历了，但是 我们不知道到底哪些URL才有我们想要的信息，于是就需要进行暴力遍历， 这时候 python 的异常处理模块变得非常适用 ，我们可以判断 是否返回值正常 若异常直接请求下一个即可， 然后将正确的数据利用pandas直接整理成csv

    ```python
        try:
            Q = res['data']['helpdocument']['qusList'][0]['title']
            A_md = res['data']['helpdocument']['qusList'][0]['content_md']
            df = pd.DataFrame(data=[
                    [Q,A_md]],
                    columns = ['Q','A'],
                    )
            df.to_csv('data_all_in_one/QA_7k.csv', mode='a', header=False)
            
        except:
            continue
    ```

    此时 基本的部分已经完成， 但是逐个遍历速度还是太慢 于是融入了多线程

    ```python
    def request_api(T_name,begin,end):
        xxx
    try:
        begin = 13000
        # 15000-16000 1k  # 16000-17000 2k # 17000-18000 3k # 18000-19000 4k
        # 19000-20000 5k # 14000-15000 6k $ 13000-14000 7k
        end = 14000
        sum = end - begin
        step = 4
        time = int(sum / step)

        ## 这里可以循环 但是没必要 
        _thread.start_new_thread(request_api, ("Thread-1", 0+begin , begin+time) )
        _thread.start_new_thread(request_api, ("Thread-2", begin + time , begin + time*2) )
        _thread.start_new_thread(request_api, ("Thread-3", begin + time*2 , begin + time*3) ) 
        _thread.start_new_thread(request_api, ("Thread-4", begin + time*3,  begin + time*4) )
    except:
        print ("Error: 无法启动线程")
    ```

    此时一个多线程的爬虫就实现了 ， 相比 selenium 方法 速度快了数十倍 ，数据干净的多， 而且代码非常简洁 使用时候修改 begin end 就可以啦。 长时间爬取容易被封，所以就没有给它做成全自动的。 爬去完数据 最好检测一下 csv。

    分段爬取并整理成csv后 可以简单的用pandas再次清洗并合并的到最总数据

    另外两个网站爬去的思路也是类似的，不同的是数据初步清洗的过程不一样，有趣的是，微信广告帮助中心 请求后直接下载包含所有信息的json 在浏览器里面访问时候转圈 显示出来后点击抓包 是无法抓取的 因为根本就没有 请求数据的请求 只有统计点击的请求 所有的数据都在加载时候下载完啦 所以只需要

    ```bash
    url = 'https://ad.weixin.qq.com/openapi/acms_files/get?filename=data'
    rec = requests.get(url)
    f = open('data_all.txt','w')
    f.write(rec.text)
    f.close()
    ```

    再用 json 提取 和 pandas 清洗就ok了

### 视频展示

{% include iframe.html src="https://youtu.be/FR00ixIftOk" %}

### 答辩报告

{% include iframe.html src="/assets/2022/02-second-intern-juzibot-report/juzibot_report_2_w0x7ce_compressed.pdf" %}

### 项目链接

- 项目链接：[https://github.com/deepdialog/xiaojuzi](https://github.com/deepdialog/xiaojuzi)

- 联系方式：Telegram: @qozob |  Email: me@w0x7ce.eu

> Author: [@tianrking](https://github.com/tianrking)
> Code: [@tianrking/juzibot](https://github.com/tianrking/xiaojuzi)
