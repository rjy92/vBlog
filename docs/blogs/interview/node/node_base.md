---
title: Node基础面试题
date: 2022-09-04
cover: https://raw.githubusercontent.com/rjy92/blogImg/main/blog/firstBLog.webp
tags:
 - 面试 node
categories:
 -  前端面试
---

::: tip 摘要
总结：前端node 基础面试题<br>
[饿了么出品node面试题](https://github.com/ElemeFE/node-interview)
<br>
:::

<!-- more -->
## 1 你了解 Node. js吗？
- Node. js是一个基于 Chrome v8引擎的服务器端 JavaScript运行环境；
- Node. js是一个事件驱动、非阻塞式I/O的模型，轻量而又高效；
- Node. js的包管理器npm是全球最大的开源库生态系统。

## 2.主要特性(优缺点)
### 优点
- 单线程，单线程的好处，减少了内存开销（操作系统完全不再有线程创建、销毁的时间开销）。
- 非阻塞I/O， 不会傻等I/O语句结束，而会执行后面的语句。
- 事件机制，事件环，不管是新用户的请求，还是老用户的I/O完成，都将以事件方式加入事件环，等待调度。
### 缺点
#### 单线程带来的弊端
**问题：**
- 无法利用多核CPU
- 错误会引起整个应用退出无法继续调用异步I/O
- 大量计算占用CPU导致无法继续调用异步I/O  

**解决方案：**
- 弊端一：
    - 一些管理工具比如pm2，forever 等都可以实现创建多进程解决多核 CPU 的利用率问题。
    - 在v0.8版本之前，实现多进程可以使用child_process
    - 在v0.8版本之后，可以使用cluster模块，通过主从模式，创建多个工作进程解决多核CPU的利用率问题。
- 弊端二:
    - Nnigx反向代理，负载均衡，开多个进程，绑定多个端口；
    - 一些管理工具比如pm2，forever 等都可以实现进程监控，错误自动重启等
    - 开多个进程监听同一个端口，使用Node提供的cluster模块；
    - 未出现cluster之前，也可以使用child_process,创建多子线程监听一个端口。
    - 这里说明下，有上面的这些解决方案，但是写node后端代码的时候，异常抛出try catch显得格外有必要。
- 弊端三:
    - 可以把大量的密集计算像上面一样拆分成多个子线程计算

## 3 应用场景
[15个Nodejs应用场景]https://www.jianshu.com/p/ca9e2c49eebf

- 第一大类：用户表单收集系统、后台管理系统、实时交互系统、考试系统、联网软件、高并发量的web应用程序；
- 第二大类：基于web、canvas等多人联网游戏；
- 第三大类：基于web的多人实时聊天客户端、聊天室、图文直播；
- 第四大类：单页面浏览器应用程序；
- 第五大类：操作数据库、为前端和移动端提供基于json的API；

## 4 了解下哪些公司再用，会增加我们的学习兴趣
雅虎：雅虎开放了Cooktail框架，将YUI3这个前端框架的能力借助Node延伸到了服务器端。
腾讯：将 Node 应用到长连接，以提供实时功能。
花瓣网，蘑菇街：通过socket.io实现实时通知。
阿里：主要利用的是并行I/O这个性能，实现高效的分布式，它们自己也出了很多Node框架
LinkedIn：移动网站也是使用的Node
网易：游戏领域对并发和实时要求很高，网易开源了Node的实时框架pomelo
很多教育公司在用Node搭建中台或者直接作为后端
## 5 Node 全局对象 AND全局变量
**全局对象：**
- global
**全局变量：**
- __filename 表示当前正在执行的脚本的文件名
- __dirname 示当前执行脚本所在的目录
- timer类函数  执行顺序和事件循环间的关系
- process  提供与当前进程互动的接口 
- require  实现模块的加载
- module 、 exports 处理模块导出
## 6 process有哪些常用方法
使用：**无须require直接使用**

[process](http://nodejs.cn/api/process.html)
获取进程信息cpu mem

- process.memoryUsage()
- process.cpuUsage()

运行环境：运行目录、node环境、cpu架构、用户环境、系统平台

- process.cwd()
- process.version
- process.versions
- process.arch
- process.env.NODE_ENV
- process.env.PATH
- process.env.USERPROFILE //USERPROFILE是window平台的，HOME是mac平台的
- process.platform

运行状态： 启动参数、PID、运行时间

- process.argv
- process.argv0
- process.pid
- process.uptime()

事件

```javascript
process.on('exit',(code)=>{
//只能执行同步的代码
	 console.log("exit"+code)
})
process.on('beforeExit',(code)=>{
 console.log("beforeExit"+code)
})
```

总结：beforeExit 内部可写异步代码，exit只可以写同步代码

输入输出流
- process.stdout
- process.stdin