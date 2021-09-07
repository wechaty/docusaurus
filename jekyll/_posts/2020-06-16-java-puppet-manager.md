---
title: 简单聊聊java版Puppet Manager的实现
author: redmaple1
tags: 
  - java
categories: article
image: /assets/2020/java-puppet-manager/java-wechaty-logo.png
---

我们来简单聊一聊java-wechaty中Puppet Manager的实现。  

## 前言

&ensp;&ensp;&ensp;&ensp;首先，这里借用java-wechaty的maintainer犀利豆的博客介绍一下wechaty是什么，以及java版本的前世今生。
> 犀利豆
[终于有一个Java可以用的微信机器人了](https://xilidou.com/2020/06/03/java-wechaty/)

## 背景

&ensp;&ensp;&ensp;&ensp;参与开发java-wechaty有一个多月的时间，在开发的过程中，不免要进行自测。在前期没有token调试不便的情况下，就想借助单测对所写代码进行验证，但是我发现想要进行单测也不是一件容易的事情。与以往 java web 开发不同，没有Spring封装好的带有上下文的test。于是，我借鉴ts版本wechaty的mock模块，实现了java-wechaty的mock puppet，专门用于测试wechaty上层代码逻辑。开心地实现完成mock puppet之后，又发现了新的问题。那就是现有java版本的wechaty在初始化puppet的时候，在代码中写死了hostie puppet，也就是图中的`GrpcPuppet`。  

![image](/assets/2020/java-puppet-manager/manager-backgroud.png)  

&ensp;&ensp;&ensp;&ensp;这样的话，我就无法初始化mock puppet了，所以我就思考能不能有一个manager来管理puppet的具体实现。有了这个想法，那么如何进行优雅的实现呢？接下来我们简单来聊聊。

## 实现思路

- `PuppetManager`来管理具体的puppet实现类
- 在wechaty中通过调用`PuppetManager`的实例化方法，初始化出需要的puppet实现
- 可使用反射机制处理puppet和具体实现类

&ensp;&ensp;&ensp;&ensp;使用上述思路的改造，wechaty初始化的流程就变成了下图的样子。  

![image](/assets/2020/java-puppet-manager/after-manage.png)  

&ensp;&ensp;&ensp;&ensp;可以看到，在wechaty的`initPuppet()`方法中，不再是直接初始化`GrpcPuppet`，而是使用了`PuppetManager`的`resolveInstance()`方法拿到了初始化过的puppet实现。  
&ensp;&ensp;&ensp;&ensp;那么`PuppetManager`具体是怎么实现的呢？其实很简单，直接看代码。  

```java
const val REFLECTION_BASE_PACKAGE = "io.github.wechaty"
class PuppetManager {

    companion object {
        private val log = LoggerFactory.getLogger(PuppetManager::class.java)

        @JvmStatic
        fun resolveInstance(wechatyOptions: WechatyOptions): Future<Puppet> {
            log.info("PuppetManager resolveInstance(${JsonUtils.write(wechatyOptions)})")

            val reflections = Reflections(ConfigurationBuilder().setUrls(ClasspathHelper.forPackage(REFLECTION_BASE_PACKAGE, Thread.currentThread().contextClassLoader)))

            val subTypes: Set<*> = reflections.getSubTypesOf(Puppet::class.java)
            if (subTypes.isEmpty()) {
                throw java.lang.RuntimeException("expect one puppet,but can not found any one.")
            }

            if (subTypes.size > 1) {
                throw RuntimeException("expect one puppet,but found ${subTypes.size}")
            }
            val clazz = subTypes.first() as Class<*>
            val declaredConstructor = clazz.getDeclaredConstructor(PuppetOptions::class.java)
            return CompletableFuture.completedFuture(declaredConstructor.newInstance(wechatyOptions.puppetOptions!!) as Puppet)
        }
    }


}
```  

&ensp;&ensp;&ensp;&ensp;首先定义了一个基础的包路径，在该路径下使用`reflections`库，扫描所有实现了Puppet的类。因为我们必须需要一个puppet具体实现类，所以当我们扫描不到任何puppet的实现时，会抛出异常，告知开发者期望有一个puppet实现类，但是在classpath下并没有找到。  

&ensp;&ensp;&ensp;&ensp;其次，当前我们只支持单次实例化一种puppet实现，所以当在路径下扫描到多于1个puppet实现类时，同样会抛出异常，提示开发者classpath中存在一个以上的puppet实现。  

&ensp;&ensp;&ensp;&ensp;上面两种情况均未抛出异常的，说明manager已经找到了需要实例化的puppet实现，接下来就使用java反射，直接实例化即可。  

&ensp;&ensp;&ensp;&ensp;以上就是manager实例化puppet的简单实现。  

## 展望

&ensp;&ensp;&ensp;&ensp;首次引入manager的版本中，我们把之前引入到wechaty sdk中的hostie puppet实现拿了出来，在sdk中仅引入puppet定义层。这样，使用者需要哪种puppet实现，自己引入即可，作为sdk就不再关心了。  
&ensp;&ensp;&ensp;&ensp;但是这样又增添了使用者的使用门坎，不如之前仅引入sdk包就能使用方便，所以在接下来的版本中，我们还是打算在sdk中使用hostie puppet作为puppet的默认实现，如果使用者有使用其他puppet实现类的诉求，需要手动在pom中exclude掉hostie puppet的默认实现，然后引入需要的puppet实现即可。  

&ensp;&ensp;&ensp;&ensp;后续可能会支持多个puppet，那么manager就需要适当的改造去适配多个puppet实现。这里有一个简单的设计思路，在puppet定义层，我们可以定义一个mapping()方法，该方法的意思是作为一个puppet，我需要如何的映射才能初始化。那么具体怎么映射就交给子类，也就是具体的puppet实现类自己去实现。在manager中，我们只需要使用puppet定义层的mapping()方法就可以实现对子类的映射处理，作为manager，并不用关心当前到底是谁在初始化。下图是大体的结构。  

![image](/assets/2020/java-puppet-manager/manage-mapping.png)  

&ensp;&ensp;&ensp;&ensp;有了`PuppetManager`，我们的java-wechaty实现得更加优雅了一些，而且实现了mock puppet，后续就可以通过单测提高代码的质量，提升稳定性，相信我们的java-wechaty会越来越完善。  
&ensp;&ensp;&ensp;&ensp;如果你对wechaty感兴趣，恰巧又是java developer，对java-wechaty有自己的想法或对目前的代码实现有任何好的建议，期待你的加入，为java-wechaty贡献代码~  

>redmaple1's blog
[简单聊聊Puppet Manager的实现](http://redmapleren.com/2020/06/16/%E7%AE%80%E5%8D%95%E8%81%8A%E8%81%8APuppet%20Manager%E7%9A%84%E5%AE%9E%E7%8E%B0/#more)
> 作者: [redmaple1](https://github.com/redmaple1/)
> Code: [Github](https://github.com/wechaty/java-wechaty)
