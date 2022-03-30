---
title: "微信App通信协议案例学习参考指南"
author: h4dex
categories: hacking
tags:
  - hook
  - featured
image: /assets/2018/h4dex-wechatprotocol.webp
---

在1月初无意看到某微信爱好者学习交流群里发现讨论一个名为 **MicroChat** （基于Mars）利用微信AndroidAPP客户端通讯协议代码！！， 震惊之余，已对作者膜拜。心情激动之下下载了下来，参考了一些文章对原始版本进行了部分修正和应用测试。 后测试增加了一些功能实现以及对扩展模拟任意设备方式登入验证，和特定功能处理的思路。本人能力有限，技术很菜很水，但是秉着对技术向往以及分享我的坑给更多的学习者科普了解，故整理编辑了一篇文章带领大家先一睹为快。并且对MicroChat基础功能做了一些扩展思路，如果有错误的地方，欢迎批评指正 ！

![Wechat Protocol](/assets/2018/h4dex-wechatprotocol.webp)

## 准备工作

> 开发环境：

```text
开发工具: Visual Studio 2015 及以上版本(marsWin32SDK 需要vc140以上)
抓包和分析工具： Wireshark / Fiddler / Charles、TCPDump
编译配套： Boost 、 ATL
```

> 附加目录

```text
如果本机缺少引用目录请手动附加
```

> 其他提醒

```text
编译顺序为： Mars相关依赖 / SQLite3 -> MicrochatSDK(基于Mars Win32 Example) -> MicroChat(用户层)
```

## 微信是如何通信的呢？

> 端口

经过使用扫描器对微信常用域名的扫描发现远程端口有： 80  443  8080  5222 5223  5228 等

> 域名

```text
dns.weixin.qq.com
support.weixin.qq.com    80/8080
short.weixin.qq.com        443/8080 (sz)
long.weixin.qq.com          80/443 (sz)
wx.qlogo.cn                    80
timg.cn  等
```

> 基本执行过程概况

1. 程序启动后，优先尝试DNS解析特定域名（上述域名，会返回所有节点）;

```text
dns查询
dns.weixin.qq.com
返回一组IP地址long.weixin.qq.com
返回一组IP地址，本次通信中，微信使用了最后一个IP作为TCP长连接的连接地址。
http://dns.weixin.qq.com/cgi-bin/micromsg-bin/newgetdns?uin=0&clientversion=620888113&scene=0&net=1
用于请求服务器获得最优IP路径。服务器通过结算返回一个xml定义了域名:IP对应列表。
仔细阅读，可看到微信已经开始了国际化的步伐：香港、加拿大、韩国等。
具体文本，请参考：https://gist.github.com/yongboy/9341884
获取到long.weixin.qq.com最优IP，然后建立到101.227.131.105的TCP长连接
```

1. 如果DNS查询不可用，程序转为使用hardcode的ip链接服务；
1. 如果dns可用，返回的ip为根据ISP智能解析的结果，程序使用返回的ip链接服务;
1. 程序在注册、验证、解封、小程序等内置内容请求、阶段会使用https链接，加密协议为腾讯的mmtls;
1. 客户端使用tcp 80/8080连接远端服务器。80/8080两个端口同时或任何单独一个，均可提供服务;
1. 80端口为短链接，8080为长链接， 程序会优先使用8080端口;

```text
请求确认连接后获取数据。
提交请求中包含 账号 密码 登录方式(可以模拟任何设备~) 设备信息 网络信息 网络设备信息 地理位置 等~

POST http://short.weixin.qq.com/cgi-bin/micromsg-bin/getprofile HTTP/1.1  (application/octet-stream)
返回一个名为“micromsgresp.dat”的附件，个人信息

POST http://short.weixin.qq.com/cgi-bin/micromsg-bin/whatsnews HTTP/1.1  (application/octet-stream)
仍然返回一个名为“micromsgresp.dat”的附件
大概是微信新版本介绍和验证之类的、资讯、订阅更新等...

POST http://short.weixin.qq.com/cgi-bin/micromsg-bin/downloadpackage HTTP/1.1  (application/octet-stream)
输出为micromsgresp.dat文件
然后还会再有一个 micromsgresp.dat创建，大概可能是未读消息和联系人列表吧
(测试大概总共会有1~3次)

GET http://support.weixin.qq.com/cgi-bin/mmsupport-bin/reportdevice?channel=34&deviceid=A952001f7a840c2a&clientversion=620888113&platform=0&lang=zh_CN&installtype=0 HTTP/1.1
客户端自身信息和设备信息校验反馈
POST http://short.weixin.qq.com/cgi-bin/micromsg-bin/reportstrategy HTTP/1.1  (application/octet-stream)
返回分块数据
GET http://wx.qlogo.cn/mmhead/Q3auHgzwzM7NR4TYFcoNjbxZpfO9aiaE7RU5lXGUw13SMicL6iacWIf2A/96
图片等一些静态资源都会被分配到wx.qlogo.cn域名下，会根据加载或手动访问情况异步多线程下载缓存在本地目录。

```

1. 当连续2次心跳发送失败时，客户端会弹出提示“当前网络状况不好，是否提交反馈数据”，确认后客户端试图通过web提交反馈数据;

```text
心跳频率约为5分钟

登陆之后，会建立一个long.weixin.qq.com的HTTP长连接，端口号为8080

具体查看长连接初始数据通信，没有发现任何包含"HTTP"字样的数据，以为是微信自定义的TCP/HTTP通信格式。据分析，用于可能用于获取数据、心跳交换消息等用途吧。

初始消息传输
个人资料、离线未阅读消息部分等通过 POST HTTP短连接单独获取。如上..

二进制简单分析
抽取微信某次HTTP协议方式通信数据，16进制表示，每两个靠近的数字为一个byte字节。
```

> 协议文本分析

微信协议报文可能如下：

一个消息包 = 消息头 + 消息体
消息头固定16字节长度，消息包长度定义在消息头前4个字节中。

单纯摘取第0000行为例，共16个字节的头部:

```text
00 00 00 10 00 10 00 01 00 00 00 06 00 00 00 0f
```

16进制表示，每两个紧挨着数字代表一个byte字节。

微信消息包格式：

1. 前4字节表示数据包长度，可变 值为16时，意味着一个仅仅包含头部的完整的数据包（可能表示着预先定义好的业务意义），后面可能还有会别的消息包
2. 2个字节表示头部长度，固定值，0x10 = 16
3. 2个字节表示谢意版本，固定值，0x01 = 1
4. 4个字节操作码说明数字，可变
5. 序列号，可变
6. 头部后面紧跟着消息体，非明文，加密形式
7. 一个消息包，最小16 byte字节

```text
如果对报文不是很了解可以学习参考一下其他底层通信协议 比如.. ModbusTCP
```

通过数据多次采样分析：

0000 - 0040为单独的数据包
0050行为下一个数据包的头部，前四个字节值为0xca = 202，表示包含了从0050-0110共202个字节数据
一次数据发送，可能包含若干子数据包
换行符\n，16进制表示为0x0a，在00f0行，包含了两个换行符号
一个数据体换行符号用于更细粒度的业务数据分割 是否蒙对，需要问问做微信协议的同学
所有被标记为HTTP协议通信所发送数据都包含换行符号
动手试试猜想，模拟微信TCP长连接
开始很不解为什么会出现如此怪异的HTTP双通道长连接请求，难道基于TCP通信，然后做了一些手脚？很常规的TCP长连接，传输数据时(不是所有数据传输)，被wireshark误认为HTTP长连接。这个需要做一个实验证实一下自己想法，设想如下：

写一个Ping-Pong客户端、服务器端程序，然后使用Wireshark看一下结果，是否符合判断。

> 测试服务端代码

<https://gist.githubusercontent.com/yongboy/9341037/raw/pong_server.c>

```c
/**
 * nieyong@youku.com
 * how to compile it:
 * gcc pong_server.c -o pong_server /usr/local/lib/libev.a -lm
 */
#include <arpa/inet.h>
#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <fcntl.h>
#include <errno.h>
#include <err.h>
#include <unistd.h>

#include "../include/ev.h"

static int server_port = 8080;

struct ev_loop *loop;
typedef struct {
    int fd;
    ev_io ev_read;
} client_t;

ev_io ev_accept;

static void free_res(struct ev_loop *loop, ev_io *ws);

int setnonblock(int fd) {
    int flags = fcntl(fd, F_GETFL);
    if (flags < 0)
        return flags;

    flags |= O_NONBLOCK;
    if (fcntl(fd, F_SETFL, flags) < 0)
        return -1;

    return 0;
}

static void read_cb(struct ev_loop *loop, ev_io *w, int revents) {
    client_t *client = w->data;
    int r = 0;
    char rbuff[1024];
    if (revents & EV_READ) {
        r = read(client->fd, &rbuff, 1024);
    }

    if (EV_ERROR & revents) {
        fprintf(stderr, "error event in read\n");
        free_res(loop, w);
        return ;
    }

    if (r < 0) {
        fprintf(stderr, "read error\n");
        ev_io_stop(EV_A_ w);
        free_res(loop, w);
        return;
    }

    if (r == 0) {
        fprintf(stderr, "client disconnected.\n");
        ev_io_stop(EV_A_ w);
        free_res(loop, w);
        return;
    }

    send(client->fd, rbuff, r, 0);
}

static void accept_cb(struct ev_loop *loop, ev_io *w, int revents) {
    struct sockaddr_in client_addr;
    socklen_t client_len = sizeof(client_addr);
    int client_fd = accept(w->fd, (struct sockaddr *) &client_addr, &client_len);
    if (client_fd == -1) {
        fprintf(stderr, "the client_fd is  NULL !\n");
        return;
    }

    client_t *client = malloc(sizeof(client_t));
    client->fd = client_fd;
    if (setnonblock(client->fd) < 0)
        err(1, "failed to set client socket to non-blocking");

    client->ev_read.data = client;

    ev_io_init(&client->ev_read, read_cb, client->fd, EV_READ);
    ev_io_start(loop, &client->ev_read);
}

int main(int argc, char const *argv[]) {
    int ch;
    while ((ch = getopt(argc, argv, "p:")) != -1) {
        switch (ch) {
        case 'p':
            server_port = atoi(optarg);
            break;
        }
    }

    loop = ev_default_loop(0);
    struct sockaddr_in listen_addr;
    int reuseaddr_on = 1;
    int listen_fd = socket(AF_INET, SOCK_STREAM, 0);
    if (listen_fd < 0)
        err(1, "listen failed");
    if (setsockopt(listen_fd, SOL_SOCKET, SO_REUSEADDR, &reuseaddr_on, sizeof(reuseaddr_on)) == -1)
        err(1, "setsockopt failed");

    memset(&listen_addr, 0, sizeof(listen_addr));
    listen_addr.sin_family = AF_INET;
    listen_addr.sin_addr.s_addr = INADDR_ANY;
    listen_addr.sin_port = htons(server_port);

    if (bind(listen_fd, (struct sockaddr *) &listen_addr, sizeof(listen_addr)) < 0)
        err(1, "bind failed");
    if (listen(listen_fd, 5) < 0)
        err(1, "listen failed");
    if (setnonblock(listen_fd) < 0)
        err(1, "failed to set server socket to non-blocking");

    ev_io_init(&ev_accept, accept_cb, listen_fd, EV_READ);
    ev_io_start(loop, &ev_accept);
    ev_loop(loop, 0);

    return 0;
}

static void free_res(struct ev_loop *loop, ev_io *w) {
    client_t *client = w->data;
    if (client == NULL) {
        fprintf(stderr, "the client is NULL !!!!!!");
        return;
    }

    ev_io_stop(loop, &client->ev_read);
    close(client->fd);
    free(client);
}
```

客户端<https://gist.githubusercontent.com/yongboy/9319660/raw/PingClient.java>

```java
/**
 * Ping Client
 * @author nieyong
 */
package com.learn;

import io.netty.bootstrap.Bootstrap;
import io.netty.buffer.ByteBuf;
import io.netty.buffer.PooledByteBufAllocator;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInboundHandlerAdapter;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelOption;
import io.netty.channel.EventLoopGroup;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioSocketChannel;

import java.util.concurrent.TimeUnit;

class PingClientHandler extends ChannelInboundHandlerAdapter {
  private final ByteBuf firstMessage;

  public PingClientHandler() {
    firstMessage = PooledByteBufAllocator.DEFAULT.buffer(22);

    // weixin 16 byte's header
    firstMessage.writeByte(0);
    firstMessage.writeByte(0);
    firstMessage.writeByte(0);
    firstMessage.writeByte(16);

    firstMessage.writeByte(0);
    firstMessage.writeByte(16);

    firstMessage.writeByte(0);
    firstMessage.writeByte(1);

    firstMessage.writeByte(0);
    firstMessage.writeByte(0);
    firstMessage.writeByte(0);
    firstMessage.writeByte(6);

    firstMessage.writeByte(0);
    firstMessage.writeByte(0);
    firstMessage.writeByte(0);
    firstMessage.writeByte(1);

    // just for /n
    firstMessage.writeByte('\n'); // 1 byte

    // footer 16 byte
    String welcome = "hello"; // 5 byte
    firstMessage.writeBytes(welcome.getBytes());
  }

  @Override
  public void channelActive(ChannelHandlerContext ctx) {
    ctx.writeAndFlush(firstMessage);
  }

  @Override
  public void channelRead(final ChannelHandlerContext ctx, final Object msg)
      throws Exception {
    ctx.executor().schedule(new Runnable() {
      @Override
      public void run() {
        ctx.channel().writeAndFlush(msg);
      }
    }, 1, TimeUnit.SECONDS);
  }

  @Override
  public void channelReadComplete(ChannelHandlerContext ctx) throws Exception {
    ctx.flush();
  }

  @Override
  public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) {
    System.err.println("Unexpected exception from downstream :"
        + cause.getMessage());
    ctx.close();
  }
}

public class PingClient {

  private final String host;
  private final int port;

  public PingClient(String host, int port) {
    this.host = host;
    this.port = port;
  }

  public void run() throws Exception {
    EventLoopGroup group = new NioEventLoopGroup();
    try {
      Bootstrap b = new Bootstrap();
      b.group(group).channel(NioSocketChannel.class)
          .option(ChannelOption.TCP_NODELAY, true)
          .handler(new ChannelInitializer<SocketChannel>() {
            @Override
            public void initChannel(SocketChannel ch)
                throws Exception {
              ch.pipeline().addLast(new PingClientHandler());
            }
          });

      ChannelFuture f = b.connect(host, port).sync();

      f.channel().closeFuture().sync();
    } finally {
      // Shut down the event loop to terminate all threads.
      group.shutdownGracefully();
    }
  }

  public static void main(String[] args) throws Exception {
    String host = "127.0.0.1";
    int port = 8080;

    if (args.length == 3) {
      host = args[0];
      port = Integer.parseInt(args[1]);
    }

    new PingClient(host, port).run();
  }
}
```

> 结论

若使用原始TCP进行双向通信，则需要满足以下条件，可以被类似于Wireshark协议拦截器误认为是HTTP长连接：

使用80/8080端口（81/3128/8000经测试无效） 也许8080一般被作为WEB代理服务端口，微信才会享用这个红利吧。
输出的内容中，一定要包含换行字符"\n"
因此，可以定性为微信使用了基于8080端口TCP长连接，一旦数据包中含有换行"\n"符号，就会被Wireshark误认为HTTP协议。可能微信是无心为之吧。

> SyncRecv 新消息获取

1. TCP长连接接收到服务器通知有新消息需要获取(消息，朋友圈，附近人，好友请求，瓶子，通知，摇一摇等)
2. APP发起一个HTTP POST请求获取新状态消息，会带上当前SyncKey 地址为：<http://short.weixin.qq.com/cgi-bin/micromsg-bin/reportstrategy> HTTP/1.1，看不到明文(这是一个数据块，也可能是多个数据块)
3. APP获取到新的消息，会再次发起一次HTTP POST请求，告诉服务器已确认收到，同时获取最新SyncKey 地址为：<http://short.weixin.qq.com/cgi-bin/micromsg-bin/kvreport>，看不到明文
4. 接受一个消息，TCP长连接至少交互两次，客户端发起两次HTTP POST请求 具体每次交互内容是什么，有些模糊
5. 服务器需要支持：状态消息获取标记，状态消息确认收取标记。只有被确认收到，此状态消息才算是被正确消费掉
6. 多个不同设备同一账号同时使用微信，同一个状态消息会会被同时分发到多个设备上（如：模拟PC版 或IPAD MAC WINPHONE在线时）
7. 特殊接收操作，红包功能、小程序、转账、表情、VOIP

> 发送类(发消息,上传，发朋友圈，查看附近人,加好友等其他请求)

1. 发送消息走已经建立的TCP长连接通道，发送消息到服务器，然后接受确认信息等，产生一次交互。
2. 小伙伴接收到信息阅读也都会收到服务器端通知，产生一次交互等。
3. 可以确定，微信发送消息走TCP长连接方式，因为不对自身状态数据产生影响，应该不交换SyncKey。
4. 在低速网络下，大概会看到消息发送中的提示，属于消息重发机制
5. 网络不好有时客户端会出现发送失败的红色感叹号
6. 已发送到服务器但未收到确认的消息，客户端显示红色感叹号，再次重发，服务器作为重复消息处理，反馈确认
7. 上传图片/视频，会根据图片大小，分割成若干部分（大概1.5K被划分为一部分），同一时间点，客户端会发起若干次POST请求，各自上传成功之后，服务器大概会合并成一个完整图片，返回一个缩略图，显示在APP聊天窗口内。APP作为常规的文字消息发送到服务器端
8. 上传音频，则单独走TCP通道，一个两秒的录制音频，客户端录制完毕，分为两块传输，一块最大1.5K左右，服务端响应一条数据通知确认收到。共三次数据传输。音频和纯文字信息一致，都是走TCP长连接，客户端发送，服务器端确认。
9. 发朋友圈和发消息同理，自行抓请求地址测试。
10. 加好友会根据双方关联状态加密 自身 + 好友或关联关系 的 wxid/uin/chatroom -> v1， 非已有关联关系型模型的好友服务器会增加返回二次验证v2验证回调信息。通过结果会从验证中解密为 添加好友方式 / 关联的群 。。 旧版本和PC/MAC版则无二次验证。目前已修复。
11. 获取附近人、摇一摇、漂流瓶、雷达加好友的信息，通过长连接SYNC中返回数据解析 (仅作为学习研究，严禁用于黑产！)
12. 小程序和内置浏览器就不过多介绍了。COOKIE操作和微信返回的SEESION验证权限和提交一些数据。
13. 加群，拉群，访问网页参数 A8KEY 中包含地址。
14. 特殊操作，抢红包(接收后红包信息，网络分配取随机金额后短连接请求)、转账、发送扩展表情、VOIP请求等
15. 获取设置绑定信息，账户余额等操作属于扩展HTTPS请求
16. 其他特殊请求微信运动等，获取传感器开放数据后手动请求上传或定时。
17. 收付款功能还没研究
18. 微信 CommandSchedule自定义协议 weixin://  手动根据功能解析 profile获取和展示、View跳转等。可手动解析实现模拟手机端.

> 协议小结

1. 发布的消息对应一个ID（只要单个方向唯一即可，服务器端可能会根ID判断重复接收），消息重传机制确保有限次的重试，重试失败给予用户提示，发送成功会反馈确认，客户端只有收到确认信息才知道发送成功。发送消息可能不会产生新SyncKey。
1. 基于版本号（SynKey）的状态消息同步机制，增量、有序传输需求水到渠成。长连接通知/短连接获取、确认等，交互方式简单，确保了消息可靠谱、准确无误到达。
1. 客户端/服务器端都会存储消息ID处理记录，避免被重复消费客户端获取最新消息，但未确认，服务器端不会认为该消息被消费掉。下次客户端会重新获取，会查询当前消息是否被处理过。根据一些现象猜测。
1. 总体上看，微信协议跨平台（TCP或HTTP都可呈现，处理方式可统一），通过“握手”同步，很可靠，无论哪一个平台都可以支持的很好
1. 微信协议最小成本为16字节，大部分时间若干个消息包和在一起，批量传输。微信协议说不上最简洁，也不是最节省流量，但是非常成功的。
1. 若服务器检测到一些不确定因素，可能会导致微启用安全套接层SSL协议进行常规的TCP长连接传输。短连接都没有发生变化

## MicroChat使用指南

> 请求地址

```cpp
#define CGI_NEWSYNC "/cgi-bin/micromsg-bin/newsync" //同步服务端最新消息
#define CGI_MANUALAUTH "/cgi-bin/micromsg-bin/manualauth" //登录
#define CGI_NEWSENDMSG "/cgi-bin/micromsg-bin/newsendmsg" //发送文字消息
#define CGI_NEWINIT "/cgi-bin/micromsg-bin/newinit" //首次登录,初始化数据库
#define CGI_GETPROFILE "/cgi-bin/micromsg-bin/getprofile" //获取个人信息
#define CGI_SEARCHCONTACT "/cgi-bin/micromsg-bin/searchcontact" //搜索新朋友
#define CGI_GETCONTACT "/cgi-bin/micromsg-bin/getcontact" //查找新朋友
#define CGI_VERIFYUSER "/cgi-bin/micromsg-bin/verifyuser" //添加好友
#define CGI_BIND "/cgi-bin/micromsg-bin/bindopmobileforreg" //首次登录短信授权
```

其他功能 自行添加请求地址，如 FindNearBy 附近人等~

```cpp
/测试请手动修改登录设备信息
//登录设备硬件信息
#define DEVICE_INFO_GUID          "A31d2152a33d83e7"   //GUID
#define DEVICE_INFO_CLIENT_SEQID      "A31cc712ad2d83e6_1512965043210"  //GUID_LOCATION地址
#define DEVICE_INFO_CLIENT_SEQID_SIGN    "e89b238e77cf988ebd09eb65f5378e99"  //MD5
#define DEVICE_INFO_IMEI          "865167123366678"   //手机IMEI
#define DEVICE_INFO_ANDROID_ID        "eabe1f220561a49f"          //设备ID
#define DEVICE_INFO_ANDROID_VER        "android-26"                //安卓版本
#define DEVICE_INFO_MANUFACTURER      CStringA2Utf8("iPhone")     //设备名称 随便填
#define DEVICE_INFO_MODELNAME          CStringA2Utf8("X")              //型号名称 随便填
#define DEVICE_INFO_MOBILE_WIFI_MAC_ADDRESS  "01:67:33:56:78:11"                 //WIFI MAC地址
#define DEVICE_INFO_AP_BSSID        "41:25:99:22:3f:14"         //手机信号基站  MAC地址
#define DEVICE_INFO_LANGUAGE        "zh_CN"                     //语言

//下面2个是设备 com.tencent.mm 包信息 及 设备信息（使用上面宏）
#define DEVICE_INFO_SOFTINFO        "<softtype><lctmoc>0</lctmoc><level>1</level><k1>ARMv7 processor rev 1 (v7l) </k1><k2></k2><k3>5.1.1</k3><k4>%s</k4><k5>460007337766541</k5><k6>89860012221746527381</k6><k7>%s</k7><k8>unknown</k8><k9>%s</k9><k10>2</k10><k11>placeholder</k11><k12>0001</k12><k13>0000000000000001</k13><k14>%s</k14><k15></k15><k16>neon vfp swp half thumb fastmult edsp vfpv3 idiva idivt</k16><k18>%s</k18><k21>\"wireless\"</k21><k22></k22><k24>%s</k24><k26>0</k26><k30>\"wireless\"</k30><k33>com.tencent.mm</k33><k34>Android-x86/android_x86/x86:5.1.1/LMY48Z/denglibo08021647:userdebug/test-keys</k34><k35>vivo v3</k35><k36>unknown</k36><k37>%s</k37><k38>x86</k38><k39>android_x86</k39><k40>%s</k40><k41>1</k41><k42>%s</k42><k43>null</k43><k44>0</k44><k45></k45><k46></k46><k47>wifi</k47><k48>%s</k48><k49>/data/data/com.tencent.mm/</k49><k52>0</k52><k53>0</k53><k57>1080</k57><k58></k58><k59>0</k59></softtype>"
#define DEVICE_INFO_DEVICEINFO        "<deviceinfo><MANUFACTURER name=\"%s\"><MODEL name=\%s\"><VERSION_RELEASE name=\"5.1.1\"><VERSION_INCREMENTAL name=\"eng.denglibo.20171224.164708\"><DISPLAY name=\"android_x86-userdebug 5.1.1 LMY48Z eng.denglibo.20171224.164708 test-keys\"></DISPLAY></VERSION_INCREMENTAL></VERSION_RELEASE></MODEL></MANUFACTURER></deviceinfo>"
```

> 验证

LOGIN_RSA_VER  //秘钥版本

LOGIN_RSA_VER158_KEY_E  //秘钥加密

LOGIN_RSA_VER158_KEY_N  //混淆后??

SYNC验证  SYNCKEY //收消息验证KEY

> Profile

```cpp
#pragma once
#include <string>
#include "db/db.h"

class CAuthInfo
{
public:
  CAuthInfo()
  {
    InitializeCriticalSection(&m_cs_syncKey);
  }

  string  m_UserName; //昵称
  string  m_WxId;  //wxid 或 老微信号
  DWORD   m_uin = 0;   //uin 唯一标识
  string  m_Alias;     //微信号
  string  m_Session;  //SessionKey
  DWORD   m_ClientVersion;   //客户端版本
  string  m_guid_15;    //guid 15位
  string  m_guid;       //guid
  string  m_androidVer;  //安卓版本
  string  m_launguage;   //lang
  string  m_cookie;      //置入浏览器的Cookie

  string GetSyncKey();
  void SetSyncKey(string strSyncKey);

  static CAuthInfo *GetInstance();

  //获取短信验证码凭据
  string m_mobilecode_authticket;
  //接受短信号码(当前默认使用登录账号)
  string m_mobileNum;

private:
  static CAuthInfo * m_Instance;

  CRITICAL_SECTION   m_cs_syncKey;
};

#define pAuthInfo (CAuthInfo::GetInstance())
```

> 扩展多设备在线

1. 二维码扫码登录 （获取扫码方式从Android版无法获取,需要从IPAD版抓包）
2. 抓包不同设备登录请求，自定义登录请求参数即可模拟.
3. 仅仅是登录验证。SYNC部分未实现，部分平台略有不同。。。

> UI实现

代码中使用了Duilib界面，因为微信消息功能复杂DUILIB都在一个Notify中数据处理会比较麻烦，建议大家可以考虑QT / MFC / WebUI 实现View层。或者使用winform 或 WPF实现会更加简单。

> 借助开源库完善其他功能

1. FFmpeg  视频音频文件转码与播放
2. Avcodec 音频文件转码与播放
3. CEF3    提供模拟微信内置浏览器访问功能(小程序不支持)
4. 截图工具
5. proxy
6. SQLite3

## 附录

Microsoft Exchange Active Sync协议，简称EAS，分为folderrsync(同步文件夹目录，即邮箱内有哪几个文件夹)和sync（每个文件夹内有哪些文档）两部分。

某网友总结的协议一次回话大致示范：

```c
Client:   synckey=0 //第一次key为0
Server:  newsynckey=1235434    //第一次返回新key
Client:   synckey=1235434   //使用新key查询
Server:  newsynckey=1647645,data=*****//第一次查询，得到新key和数据
Client:   synckey=1647645
Server:  newsynckey=5637535,data=null //第二次查询，无新消息
Client:   synckey=5637535
Server: newsynckey=8654542, data=****//第三次查询，增量同步
上页中的相邻请求都是隔固定时间的，如两分钟
客户端每次使用旧key标记自己的状态，服务端每次将新key和增量数据一起返回。
key是递增的，但不要求连续
请求的某个参数决定服务器是否立即返回
```

## 传送门

原版Github传送门(已修复DNS错误301问题)：
> <https://github.com/InfiniteTsukuyomi/MicroChat/>

Python版
> <https://github.com/InfiniteTsukuyomi/MicroChat/tree/master/test>

## 感谢

特别鸣谢 CSDN博客、博客园的微信协议分析文章作者，是你们的文章参考带领我参考学习和验证。给了很大启发和帮助。

代码由 @InfiniteTsukuyomi 公开发布代码。

感谢腾讯WXG的开源精神奉献，给了大量的开源参考和文章讲解。

参考链接：

<http://www.blogjava.net/yongboy/archive/2014/03/05/410636.html>

## 严重声明

> 请勿外传用于任何商业用途，违者后果自负！
> Blog: <https://www.icefox.org>
