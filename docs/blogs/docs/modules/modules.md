---
title: 模块化开发
date: 2022-08-29
cover: https://raw.githubusercontent.com/rjy92/blogImg/main/blog/esmodules.jpeg
tags:
 - modules
categories:
 -  技术笔记
---

::: tip 摘要
前端模块化发展史<br>
:::

<!-- more -->

# 模块化开发

了解相关代码可查看：[模块化相关代码](https://gitee.com/yingjiehanyan/module)



模块化开发时当前最重要的前端开发范式之一 模块化只是思想

# 1.模块化演变过程

## Stage1 文件划分方式

具体做法：将每个功能及相关的状态数据存放到单独的文件单中,

- 污染全局作用域
- 命名冲突问题
- 无法管理模块依赖
- 早起模块化完全依靠约定

## Stage2 命名空间方式



- 每个模块只暴露一个全局对象，所有模块都挂载到这个对象上
- 减少了命名冲突的可能
- 但是没有私有空间，模块成员可以在外部被访问或修改
- 模块之间的依赖关系没有得到解决

## Stage3 IIFE 立即执行函数



- 使用立即执行函数包裹代码，要输出的遍历挂载到一个全局对象上
- 变量拥有了私有空间，只有通过闭包修改和访问变量
- 参数作为依赖声明去使用，使得每个模块的依赖关系变得明显

# 2.模块化规范



模块加载不受代码的控制，通过require的方式，但引入和移除会有问题

## CommonJS规范



- nodejs中提出的规范
- 一个文件就是一个模块
  -每个模块都有单独的作用域
- 通过module.exports导出成员
- 通过require函数载入模块
- 问题：
  若在浏览器使用此规范，会有问题， CommonJS是以**同步模式**加载模块，
  nodejs启动时会加载模块，但浏览器端，每次页面加载都会有大量同步请求的接口，会是前端效率低下



## AMD(Asynchronous Module Definition)异步模块规范



- 模块加载器：Require.js



```javascript
// 定义一个模块
define('module1', ['jquery', './module2'], function ($, module2) {
  return {
    start: function () {
      $('body').animate({ margin: '200px' })
      module2()
    }
  }
})
```



```javascript
// 载入一个模块
require(['./module1'], function (module1) {
  module1.start()
})
```



- 目前绝大多数第三方库都支持AMD规范
- AMD使用起来相对复杂
- 模块JS文件请求频繁



## 淘宝推出的Sea.js + CMD(Common Module Definition)通用模块规范



```javascript
// CMD 规范 （类似 CommonJS 规范）
define(function (require, exports, module) {
  // 通过 require 引入依赖
  var $ = require('jquery')
  // 通过 exports 或者 module.exports 对外暴露成员
  module.exports = function () {
    console.log('module 2~')
    $('body').append('<p>module2</p>')
  }
})
```



# 3.模块化标准规范



- 在node.js中使用CommonJS
     CommonJS是node.js内置的模块化工具，只需要遵循CommonJS的标准即可，不需要引入别的依赖
- 在浏览器中使用ES Modules
    ES Modules是ECMAScript2015



# 4.ES Modules



通过给 script 添加 type = module 的属性，就可以以 ES Module 的标准执行其中的 JS 代码



- 自动采用严格模式，忽略’use strict’
- 每个ESM模块都是单独的私有作用域
- ESM是通过CORS去请求外部JS模块的
- ESM的script标签会延迟脚本执行



```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>ES Module - 模块的特性</title>
</head>
<body>
  <!-- 通过给 script 添加 type = module 的属性，就可以以 ES Module 的标准执行其中的 JS 代码了 -->
  <script type="module">
    console.log('this is es module')
  </script>

  <!-- 1. ESM 自动采用严格模式，忽略 'use strict' -->
  <script type="module">
    console.log(this)
  </script>

  <!-- 2. 每个 ES Module 都是运行在单独的私有作用域中 -->
  <script type="module">
    var foo = 100
    console.log(foo)
  </script>
  <script type="module">
    console.log(foo)
  </script>

  <!-- 3. ESM 是通过 CORS 的方式请求外部 JS 模块的 -->
  <!-- <script type="module" src="https://unpkg.com/jquery@3.4.1/dist/jquery.min.js"></script> -->

  <!-- 4. ESM 的 script 标签会延迟执行脚本 -->
  <script defer src="demo.js"></script>
  <p>需要显示的内容</p>
</body>
</html>
```



demo.js



```javascript
alert('hello')
```



## 1.ES Module的导入导出



- as 导出重命名
- as 导出 default  , 使用的时候必须使用 as 再进行重命名， 因为 default 是关键字
- export default 默认导出



```javascript
// ./modulejs
const foo = 'es modules'
export { foo }
```



```javascript
// ./app.js
import { foo } from './module.js'
console.log(foo) // => es modules
```

## 2.ES Module 导入导出的注意事项



- export  {  } 、import  不是导出一个**对象字面量**，  import 也不是对对象的解构。  仅仅是一个固定用法 `export { name, age }`
- export default {  } 这样导出的才是一个对象字面量 `export default { name, age }`
- 导出的是**引用地址**（即使它是个基本类型），而不是拷贝一个新的， 暴露出的引用关系是**只读**的（不能被修改）

## 3.ES Module 导入用法(import)



- from  后面必须完整路径名，不能省略 .js 扩展名（CommonJS 可以省略）



```javascript
import { name } from './module'  //错误
import { name } from './module.js' //正确
```



- from  也不可以用 目录名， 然后找到目录下 index.js 的文件



```javascript
import { lowercase } from './utils' //错误
import { lowercase } from './utils/index.js'//正确
```



- 相对路径的./不可省略()



```javascript
import { name } from 'module.js' //错误
import { name } from './module.js'//正确
import { name } from '/04-import/module.js'//正确,使用的是绝对路径
import { name } from 'http://localhost:3000/04-import/module.js'//正确，可引用cdn上的路径
```



- import {  } from  './module.js'  只是执行模块， 并不导出任何内容 

- - 简写  import  from './module.js'

- 提取全部成员 import *  as  xxx from './modules'
- import  只能出现在顶层作用域
- 动态导入(  import 函数 返回一个 promise )



```javascript
import('./module.js').then(function (module) {
  console.log(module)
})
```



- 提取默认成员和其它成员



```javascript
import { name, age, default as title } from './module.js'
//简写写法
import title, { name, age } from './module.js'
//title 可以随便定义，因为其是default的重命名
```



## 4.ES Module 导出导入成员



```javascript
export   {  name , foo }  from './module.js'
export { default: Button } from './module.js'
```



## 5.ES Module 浏览器环境Polyfill(兼容性问题)



- IE 和老的国产浏览器不支持
- script 标签 有个 nomodule 属性， 会让script脚本在不支持module的浏览器上执行



```javascript
  <script nomodule src="https://unpkg.com/promise-polyfill@8.1.3/dist/polyfill.min.js"></script>
  <script nomodule src="https://unpkg.com/browser-es-module-loader@0.4.1/dist/babel-browser-build.js"></script>
  <script nomodule src="https://unpkg.com/browser-es-module-loader@0.4.1/dist/browser-es-module-loader.js"></script>
```



注意：上述方案仅可以在开发阶段本地使用，切记不可在生产环境中使用

**原因：运行阶段动态生成脚本，效率低下**

## 6.ES Module in Node-支持情况



node version > 8.5 就可以在 node中 使用ES Module
使用方法：



```javascript
// 第一，将文件的扩展名由 .js 改为 .mjs；
// 第二，启动时需要额外添加 `--experimental-modules` 参数；即node --experimental-modules index.mjs

import { foo, bar } from './module.mjs'

console.log(foo, bar)

// 此时我们也可以通过 esm 加载内置模块了
import fs from 'fs'
fs.writeFileSync('./foo.txt', 'es module working')

// 也可以直接提取模块内的成员，内置模块兼容了 ESM 的提取成员方式
import { writeFileSync } from 'fs'
writeFileSync('./bar.txt', 'es module working')

// 对于第三方的 NPM 模块也可以通过 esm 加载
import _ from 'lodash'
_.camelCase('ES Module')

// 不支持，因为第三方模块都是导出默认成员
// import { camelCase } from 'lodash'
// console.log(camelCase('ES Module'))
```



## 7.ES Module in Node-与CommonJS交互



- ES Module 中可以导入 CommonJS 模块， 但是只能以导入默认成员的形式
- 不允许 CommonJS  导入 ES Module
- CommonJS  始终只会导出一个默认成员
- 注意 import 不是解构导出对象



## 8.ES Module in Node-与CommonJS的差异



- CommonJS 中 全局变量 

- - require 、module 、 exports  、**filename 、**  dirname

- ES Module  中 没有常用的5 个成员 

- - 可从path ,url 中提取
  - import.meta.url  === __filename = fileURLToPath(import.meta.url)
  - __dirname



## 9.ES Module in Node-新版本的进一步支持



- Node v12 之后的版本，可以通过 package.json 中添加 type 字段为 module，将默认模块系统修改为 ES Module，此时就不需要修改文件扩展名为 .mjs 了
- 如果需要在 type=module 的情况下继续使用 CommonJS，需要将文件扩展名修改为 .cjs



## 10.ES Module in Node-Babel兼容方案



- 安装 @babel/core @babel/node
  @babel/plugin-transform-modules-commonjs
- 新建 .bablerc 文件，配置如下
  .babelrc



```plain
{
  "plugins": [
    "@babel/plugin-transform-modules-commonjs"
  ]
}
```

# 总结：

CommonJS语法： 

- module.exports={},exports是前者的缩写，      
- require 

esModule语法：

- export 
- import

相关代码：[模块化相关代码](https://gitee.com/yingjiehanyan/module)
