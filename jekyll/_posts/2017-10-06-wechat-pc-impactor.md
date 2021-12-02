---
title: 关于对微信PC版Hook的一点研究分享
author: h4dex
categories: hacking
tags:
  - code
  - hook
  - news
image: /assets/2017/h4dex-inject.webp
---

![Wechat Windows Impactor](/assets/2017/h4dex-inject.webp)

因为易语言代码有的朋友们可能看起来怪怪的 如果没有接触过它，并不是那么通俗易懂。所以改成了cpp代码供审阅.  由于书写仓促 错误的部分希望大家指正，小弟在此多谢！

感谢 易语言精易论坛坛友(xdssoft,恨不能遗忘,gh0st少主)分享的开源代码参考！

> 准备工作：  

```text
PEid、Ollydbg、IDA pro、CheatEngine、DLL自动注入工具、微信电脑版2.4.1.37/79
```

## 关于对微信PC版Hook的一点研究分享

### HOOK 注入类  hookinject.h

> 这里的例子是用Version.dll

因为version.dll优于WeChatWin.dll先加载

version.dll是Windows NT系统以上版本检测应用程序接口相关文件。这里就用这个用途不是很必要的DLL模拟注入。

首先需要载入真正的 Version.dll

```cpp
///
/// TODO:安装我们伪造的 Version.Dll
///

class hookInject {

    public:

    const DLL_PROCESS_DETACH = 0    //进程卸载 系统查看当前映射到进程空间中的所有DLL文件映像
    const DLL_PROCESS_ATTACH = 1    //进程映射 系统查看当前映射到进程空间中的所有DLL文件映像
    const DLL_THREAD_ATTACH = 2     //线程映射
    const DLL_THREAD_DETACH = 3     //线程卸载
    const DLL_PROCESS_VERIFIER = 4  //进程更改 系统查看当前映射到进程空间中的所有DLL文件映像
    const WM_COPYDATA =0x4A         //

    int lib = 0;
    int GetFileVersionInfoA;
    int GetFileVersionInfoByHandle;
    int GetFileVersionInfoExW;
    int GetFileVersionInfoSizeA;
    int GetFileVersionInfoSizeExW;
    int GetFileVersionInfoSizeW;
    int GetFileVersionInfoW;
    int VerFindFileA;
    int VerFindFileW;
    int VerInstallFileA;
    int VerInstallFileW;
    int VerLanguageNameA;
    int VerLanguageNameW;
    int VerQueryValueA;
    int VerQueryValueW;

    BOOL inst_VersionLib(){

    lib = LoadLibraryA ("C:\windows\system32\Version.dll");

    if(lib == 0){
        //载入不成功则返回0 则返回注入失败！
        return FALSE;
    }

        GetFileVersionInfoA = GetProcAddress(lib,"GeFileVersionInfoA");
        if(GetFileVersionInfoA = 0){
            ::FreeLibrary(lib)
            return FALSE;
        }

        //*
        其他的函数也一样需要写..检测真正Version动态库
        调用时 每个函数所在内存的地址.  否则可能会造成 crash !!
        FARPROC GetProcAddress(
            HMODULE hModule, // DLL模块句柄
            LPCSTR lpProcName // 函数名
        );

        *//

        VerQueryValueW = GetProcAddress (lib,"VerQueryValueW");
        if(VerQueryValueW = 0){
            ::FreeLibrary (lib)
            return FALSE;
        }

        return TRUE;     //如果所有
    }

    // 接下来呢是伪造所有的函数调用

    int GetFileVersionInfoA(int i,int j,int k,int q){
        return Jmp(GetFileVersionInfoA,i,j,k,q);
    }

    /// ... 其他 同理

    int Jmp(int addr ,int i = NULL,int j = NULL, int k = NULL,int q = NULL,int w = NULL,int e = NULL,int r = NULL,int t = NULL,int y = NULL,int u = NULL,int o = NULL,int a = NULL,int s = NULL,int d = NULL){
        return _Jmp(addr,i,j,k,q,w,e,r,t,y,u,i,o,a,s,d);
    }

    int _Jmp(*p ,int i,int j, int k,int q,int w,int e,int r,int t,int y,int u,int o,int a,int s,int d){
        __asm{
            LEAVE;              //清空堆栈
            POP EAX;            //把EAX重新压入栈
            XCHG [ESP],EAX;     //数据交换
            JMP EAX;            //再跳到eax寄存器
        }
        return 0;
    }

}

```

### 应用注入类          Impactor.h

```cpp
class Impactor{
    public:

    static int baseAddr = 0; //初始化 0 就是木有！

    void GetBaseAddress(){

        HANDLE hSnapShot;
        int last;
        string m_Module;
        stringstream ss;
        MODULEENTRY32 buffer; //struct

        while(baseAddr = 0){
            hSnapShot = ::CreateToolhelp32Snapshot(8,GetCurrentProcessId());              //创建系统快照
            buffer.dwSize = 0x224; // 初始化buffer大小  548
            //buffer.dwSize = sizeof(buffer); 检测大小

            last = ::Module32First(hSnapShot,&buffer);

            while(last !=0){

                // m_last = boost::lexical_cast<string>(buffer.szModule) //ANSI -> string
                ss<<buffer.szModule;
                ss>>m_Module;

                if(m_Module =="WeChatWin.dll"){
                    baseAddr = buffer.modBaseAddr
                    break;
                }
                last = ::Module32Next(hSnapShot,buffer);
            }
            CloseHandle(hSnapShot);
            sleep(50);

        }
    }

    ///
    ///  获取收发类型和内容 相当于 WxSync
    ///
    ///param  之所以用整形 因为 他们都是指针形式~
    ///
    ///
    void GetSyncType (int msg,int wxid,int type){

        /*
        string str;
        int len=str.size();
        const char *pstr = str.c_str();
        for (int i=0;i<len;i++){
            (short)*pstr++;
        }
        */

        //const unsigned char *buf;

        /* 这里有错误~~~看原版吧
        取出传址内存指针 3000字节 长度的的字符数组(串)
        传递给全局变量 SyncType
        */

    }

}

```

### 自己信息获取        GetProfile.h

```cpp

class GetProfile{
    CALLBACK wxAlias;
    CALLBACK wxNickName;
    CALLBACK wxId;

    void GetProfile(){

        //callback方式 取 下列
        //看易语言版本的代码吧

        //三个指针地址分别为
        //0x169fc9
        //0x2db500
        //0x2db695

        /*
        ;//取微信号和昵称的 CALL
        PUSHAD
        CALL 00000006
        POPAD

        ;//取WXID的CALL
        PUSHAD
        PUSH DWORD PTR [ESP+20]
        CALL 0000000A
        POPAD
        */
    }

    void GetNickName(){
        __asm{
            MOV [EBP-4],ECX
        }
        //取 100字节大小数据地址 就是微信号 需要转换 Unicode
    }

    void GetWxAlias(){
        __asm{
            MOV [EBP-4],EAX;
        }
        //取 100字节大小数据地址 就是微信号
        //手机号 也可以同时取出. 预留30个字节的内存空间

        ReadProcessMemory(-1,baseAddr+0xE2EE20,手机号,30,0);
    }

    void GetWxId(int wxid){
        //根据WXID指针传递取 100字节大小数据地址 就是wxid
    }

}
```

### 好友读取 (列表)类   GetContact.h

```cpp
class GetContact{
    void GetContactList(){

        //方法和上面类似
        //0x30c820   WXID
        //0x30c839   微信号
        //0x30c8a2   备注
        //0x30c8b8   昵称

        /*
        ;CALL
        PUSHAD
        CALL 00000006
        POPAD
        */

    }

    //获取微信号
    void GetAlias(){
        /*
        MOV [EBP-4],EAX
        */
    }

    //获取头像
    void GetAvatar(){
        /*
        MOV [EBP-4],EAX
        */

    }

    //获取昵称
    void GetNickName(){
        /*
        MOV [EBP-4],EAX
        */
    }

    //获取备注
    void GetRemarkName(){
        /*
        MOV [EBP-4],EAX
        */
    }

    //获取WXID
    void GetWxid(){
        /*
        MOV [EBP-4],EAX
        */
        //需要1000字节地址大小
        //遍历
    }

}
```

### 注入执行类  WechatWatchDog.cpp

```cpp
#include "stdafx.h"  
#include <cstdio>
#include <iostream>  
#include <string>
#include <vector>  
#include <Windows.h>
#include "impactor.h"
#include "hookinject.h"
#include "GetProfile.h"
#include "GetContact.h"

using namespace std;
int _tmain(int argc, _TCHAR* argv[]){
    hookInject::inst_VersionLib();
}

void hook_install(){

    CALLBACK Hook_Get_Type_CallBack;
    CALLBACK Sync_CallBack;         //User Msg
    CALLBACK Collect_CallBack;      //Image

    Impactor::GetBaseAddress();
    GetProfile::GetProfile();
    GetContact::GetContactList();

    //根据基址增加偏移0x237A78
    //(微信基址+偏移,修改内存数据的方式,执行方法指针,偏移)
    Hook_Get_Type_CallBack.Install(baseAddr + 0x237A78 ,&_asmGetTypeCall,&Impactor::GetSyncType, *GetSyncType,0x11);

    /*
    PUSHAD
    PUSH EAX
    PUSH DWORD PTR [ESP+548]
    PUSH DWORD PTR [ESP+4AC]
    CALL 00000015
    POPAD
    */

    //根据基址增加偏移0x1412D7
    Sync_CallBack.Install(baseAddr + 0x1412D7,&_asmGetSyncCall, *GetSync,0x7);

    /*
    PUSHAD
    PUSH EAX
    MOV EAX,[EDI+4C]
    PUSH EAX
    CALL 0000000B
    POPAD
    */

    void _asmGetTypeCall(){
        __asm{
            PUSHAD
            PUSH EAX
            PUSH DWORD PTR [ESP+548]
            PUSH DWORD PTR [ESP+4AC]
            CALL 00000015
            POPAD
        }
    }

    void _asmGetSyncCall(){
        __asm{
            PUSHAD
            PUSH EAX
            MOV EAX,[EDI+4C]
            PUSH EAX
            CALL 0000000B
            POPAD

        }

    }

    void SendCollectImg(*SendCollectImg){

        //监听收藏的图片发送
        //也可以把机器图片放入内存再根据地址发送~

        //释放CALL

    }

    void SendUserAndMsg(int Msg,int User){
        //相当于 SYNC 消息监听！

        /*死循环判断  10000字节地址是否有内容，转换Ansi
        判断内容报头 是否为 列表数组成员 ，如果带有 @chatroom就是 群组

        输出打印    或者通过socket方式传递给外部程序~~
        */
    }

}
```

### DLLMain.cpp

```text
略
```

### 后记

里面有一套源码的DLL动态自动注入 非常不错~

附件：
微信PC Hook易语言源码 （共3套）
附带 etcp.dll  源码  VS2013 编译通过

```text
CALLBACK 类 因为在原代码中没有公开，是调用其他人开发的 ecom (相当于可集成的 Com组件/Lib)

所以这里我也不太清楚这个如何实现..

因本人能力有限，欢迎大家共同研究参与补充 ~

谢谢！

```

下载：[Download Src](/assets/2017/wechat-windows-impactor-src.zip)

完整下载地址：附带微信`2.4.5.73`安装包 没有微信`2.4.1.79`

链接：[download full package](http://pan.baidu.com/s/1hsEeDoC)   密码：wttk

感谢@huan 的邀请。

> h4dex  2017年10月6日
