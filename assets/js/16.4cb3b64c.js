(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{414:function(t,s,a){t.exports=a.p+"assets/img/ajax_01.34925eba.png"},428:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("摘要")]),t._v(" "),s("p",[t._v("在开发过程中使用的请求方式的区别\n"),s("br")])]),t._v(" "),s("h2",{attrs:{id:"_1-ajax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-ajax"}},[t._v("#")]),t._v(" 1 "),s("a",{attrs:{href:"https://www.w3school.com.cn/js/js_ajax_intro.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("AJAX"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Ajax即“AsynchronousJavascriptAndXML”（异步 JavaScript 和 XML），是指一种创建交互式网页应用的网页开发技术。它是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。通过在后台与服务器进行少量数据交换，Ajax 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。传统的网页（不使用 Ajax）如果需要更新内容，必须重载整个网页页面")]),t._v(" "),s("h3",{attrs:{id:"_1-1-如何工作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-如何工作"}},[t._v("#")]),t._v(" 1.1 如何工作")]),t._v(" "),s("p",[s("img",{attrs:{src:a(414),alt:"ajax_01.png"}})]),t._v(" "),s("h3",{attrs:{id:"_1-2-核心-xmlhttprequest-对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-核心-xmlhttprequest-对象"}},[t._v("#")]),t._v(" 1.2 核心-XMLHttpRequest 对象")]),t._v(" "),s("p",[t._v("所有现代浏览器均支持 XMLHttpRequest 对象（IE5 和 IE6 使用 ActiveXObject）")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajaxHttpRequestFunc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" xmlHttpRequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建XMLHttpRequest对象，即一个用于保存异步调用对象的变量")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ActiveXObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// IE浏览器的创建方式")]),t._v("\n        xmlHttpRequest "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ActiveXObject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Microsoft.XMLHTTP"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("XMLHttpRequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Netscape浏览器中的创建方式")]),t._v("\n        xmlHttpRequest "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    xmlHttpRequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onreadystatechange")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置响应http请求状态变化的事件")]),t._v("\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'请求过程'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" xmlHttpRequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readyState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xmlHttpRequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readyState "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断异步调用是否成功,若成功开始局部更新数据")]),t._v("\n            console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'状态码为'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" xmlHttpRequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xmlHttpRequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'异步调用返回的数据为：'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" xmlHttpRequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseText"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myDiv"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" xmlHttpRequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseText"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 局部刷新数据到页面")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果异步调用未成功,弹出警告框,并显示错误状态码")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error:HTTP状态码为:"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" xmlHttpRequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    xmlHttpRequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.runoob.com/try/ajax/ajax_info.txt"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建http请求，并指定请求得方法（get）、url（https://www.runoob.com/try/ajax/ajax_info.txt）以及验证信息")]),t._v("\n    xmlHttpRequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发送请求")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br")])]),s("h3",{attrs:{id:"_1-4-字段解释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-字段解释"}},[t._v("#")]),t._v(" 1.4 字段解释")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("方法")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("new XMLHttpRequest()")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("创建新的 XMLHttpRequest 对象")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("abort()")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("取消当前请求")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("getAllResponseHeaders()")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("返回头部信息")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("getResponseHeader()")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("返回特定的头部信息")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("open("),s("em",[t._v("method")]),t._v(", "),s("em",[t._v("url")]),t._v(", "),s("em",[t._v("async")]),t._v(", "),s("em",[t._v("user")]),t._v(", "),s("em",[t._v("psw")]),t._v(")")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("规定请求method：请求类型 GET 或 POSTurl：文件位置async：true（异步）或 false（同步）user：可选的用户名称psw：可选的密码")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("send()")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("将请求发送到服务器，用于 GET 请求")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("send("),s("em",[t._v("string")]),t._v(")")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("将请求发送到服务器，用于 POST 请求")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("setRequestHeader()")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("向要发送的报头添加标签/值对")])])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("onreadystatechange")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("定义了当 readyState 属性发生改变时所调用的函数。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("readyState")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("保存了 XMLHttpRequest 的状态。0: 请求未初始化1: 服务器连接已建立2: 请求已接收3: 正在处理请求4: 请求已完成且响应已就绪")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("status")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v('200: "OK"403: "Forbidden"404: "Page not found"如需完整列表，请访问 '),s("a",{attrs:{href:"https://www.w3school.com.cn/tags/html_ref_httpmessages.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("Http 消息参考手册"),s("OutboundLink")],1)])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("statusText")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v('返回状态文本（例如 "OK" 或 "Not Found"）')])])])]),t._v(" "),s("h3",{attrs:{id:"_1-5-优缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-优缺点"}},[t._v("#")]),t._v(" 1.5 优缺点")]),t._v(" "),s("p",[s("strong",[t._v("优点：")])]),t._v(" "),s("p",[t._v("1、最大的一点是页面无刷新，用户的体验非常好。")]),t._v(" "),s("p",[t._v("2、使用异步方式与服务器通信，具有更加迅速的响应能力。")]),t._v(" "),s("p",[t._v("3、可以把以前一些服务器负担的工作转嫁到客户端，利用客户端闲置的能力来处理，减轻服务器和带宽的负担，节约空间和宽带租用成本。并且减轻服务器的负担，ajax的原则是“按需取数据”，可以最大程度的减少冗余请求，和响应对服务器造成的负担。")]),t._v(" "),s("p",[t._v("4、基于标准化的并被广泛支持的技术，不需要下载插件或者小程序。")]),t._v(" "),s("p",[s("strong",[t._v("缺点：")])]),t._v(" "),s("p",[t._v("1、ajax不能使用Back和history功能，即对浏览器机制的破坏。")]),t._v(" "),s("p",[t._v("2、安全问题 AJAX暴露了与服务器交互的细节。")]),t._v(" "),s("p",[t._v("3、对搜索引擎的支持比较弱。")]),t._v(" "),s("p",[t._v("4、破坏了程序的异常机制。")]),t._v(" "),s("p",[t._v("5、不容易调试。")]),t._v(" "),s("h3",{attrs:{id:"_1-4-使用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-使用场景"}},[t._v("#")]),t._v(" 1.4 使用场景")]),t._v(" "),s("ol",[s("li",[t._v("表单驱动的交互")]),t._v(" "),s("li",[t._v("深层次的树的导航")]),t._v(" "),s("li",[t._v("快速的用户与用户间的交流响应")]),t._v(" "),s("li",[t._v("类似投票、yes/no等无关痛痒的场景")]),t._v(" "),s("li",[t._v("对数据进行过滤和操纵相关数据的场景")]),t._v(" "),s("li",[t._v("普通的文本输入提示和自动完成的场景")])]),t._v(" "),s("h3",{attrs:{id:"_1-5-不适用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-不适用场景"}},[t._v("#")]),t._v(" 1.5 不适用场景")]),t._v(" "),s("ol",[s("li",[t._v("部分简单的表单")]),t._v(" "),s("li",[t._v("搜索")]),t._v(" "),s("li",[t._v("基本的导航")]),t._v(" "),s("li",[t._v("替换大量的文本")]),t._v(" "),s("li",[t._v("对呈现的操纵")])]),t._v(" "),s("h2",{attrs:{id:"_2-fetch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-fetch"}},[t._v("#")]),t._v(" 2 Fetch")]),t._v(" "),s("h3",{attrs:{id:"_2-1-是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-是什么"}},[t._v("#")]),t._v(" 2.1 是什么？")]),t._v(" "),s("p",[s("strong",[t._v("fetch是window的一个方法")])]),t._v(" "),s("p",[t._v("Fetch是基于promise设计的。Fetch的代码结构比起ajax简单多。fetch不是ajax的进一步封装，而是原生js，没有使用XMLHttpRequest对象。")]),t._v(" "),s("h3",{attrs:{id:"_2-2-使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-使用"}},[t._v("#")]),t._v(" 2.2 使用")]),t._v(" "),s("p",[t._v("1、第一个参数是URL\n2、第二个参数可选参数 可以控制不同的init对象\n3、使用了js 中的promise对象")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"url"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("method")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"post"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("headers")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置请求的头部信息")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"Content-Type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/json"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//跨域时可能要加上")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//"Accept":"allication/json"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//将arr1对象序列化成json字符串")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("body")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//向服务端传入json数据")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  resp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("json")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("h3",{attrs:{id:"_2-3-优缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-优缺点"}},[t._v("#")]),t._v(" 2.3 优缺点")]),t._v(" "),s("p",[t._v("优点：")]),t._v(" "),s("ul",[s("li",[t._v("语法简洁，更加语义化")]),t._v(" "),s("li",[t._v("基于标准 Promise 实现，支持 async/await")]),t._v(" "),s("li",[t._v("更加底层，提供的API丰富（request, response）")]),t._v(" "),s("li",[t._v("脱离了XHR，是ES规范里新的实现方式")])]),t._v(" "),s("p",[t._v("fetch的缺点：")]),t._v(" "),s("ul",[s("li",[t._v("fetch只对网络请求报错，对400，500都当做成功的请求，服务器返回 400，500 错误码时并不会 reject，只有网络错误这些导致请求不能完成时，fetch 才会被 reject。")]),t._v(" "),s("li",[t._v("fetch默认不会带cookie，需要添加配置项： fetch(url, {credentials: 'include'})")]),t._v(" "),s("li",[t._v("fetch不支持abort，不支持超时控制，使用setTimeout及Promise.reject的实现的超时控制并不能阻止请求过程继续在后台运行，造成了流量的浪费")]),t._v(" "),s("li",[t._v("fetch没有办法原生监测请求的进度，而XHR可以")]),t._v(" "),s("li",[s("strong",[t._v("低版本浏览器和IE浏览器支持性不好")])])]),t._v(" "),s("h3",{attrs:{id:"_2-4-浏览器支持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-浏览器支持"}},[t._v("#")]),t._v(" 2.4 浏览器支持")]),t._v(" "),s("p",[t._v("Fetch 还不是 W3C 规范，因此原生支持率并不高。\n幸运的是，引入下面这些 polyfill 后可以完美支持 IE8+ ：")]),t._v(" "),s("ol",[s("li",[t._v("由于 IE8 是 ES3，需要引入 ES5 的 polyfill: es5-shim, es5-sham")]),t._v(" "),s("li",[t._v("引入 Promise 的 polyfill: es6-promise3.引入 fetch 探测库：fetch-detector")]),t._v(" "),s("li",[t._v("引入 fetch 的 polyfill: fetch-ie8")]),t._v(" "),s("li",[t._v("可选：如果你还使用了 jsonp，引入 fetch-jsonp")]),t._v(" "),s("li",[t._v("可选：开启 Babel 的 runtime 模式，使用 async/await")])]),t._v(" "),s("h2",{attrs:{id:"_3-axios"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-axios"}},[t._v("#")]),t._v(" 3"),s("a",{attrs:{href:"https://www.axios-http.cn/docs/intro",target:"_blank",rel:"noopener noreferrer"}},[t._v(" axios"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Axios 是一个基于 "),s("a",{attrs:{href:"https://javascript.info/promise-basics",target:"_blank",rel:"noopener noreferrer"}},[t._v("promise"),s("OutboundLink")],1),t._v(" 网络请求库，作用于"),s("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("node.js"),s("OutboundLink")],1),t._v(" 和浏览器中。 它是 "),s("a",{attrs:{href:"https://www.lullabot.com/articles/what-is-an-isomorphic-application",target:"_blank",rel:"noopener noreferrer"}},[t._v("isomorphic"),s("OutboundLink")],1),t._v(" 的(即同一套代码可以运行在"),s("strong",[t._v("浏览器和node.js")]),t._v("中)。在服务端它使用原生 node.js http 模块, 而在客户端 (浏览端) 则使用 XMLHttpRequests。")]),t._v(" "),s("ul",[s("li",[t._v("从浏览器创建 "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest",target:"_blank",rel:"noopener noreferrer"}},[t._v("XMLHttpRequest"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("从 node.js 创建 "),s("a",{attrs:{href:"http://nodejs.org/api/http.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http"),s("OutboundLink")],1),t._v(" 请求")]),t._v(" "),s("li",[t._v("支持 "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",target:"_blank",rel:"noopener noreferrer"}},[t._v("Promise"),s("OutboundLink")],1),t._v(" API")]),t._v(" "),s("li",[t._v("拦截请求和响应")]),t._v(" "),s("li",[t._v("转换请求和响应数据")]),t._v(" "),s("li",[t._v("取消请求")]),t._v(" "),s("li",[t._v("自动转换JSON数据")]),t._v(" "),s("li",[t._v("客户端支持防御"),s("a",{attrs:{href:"http://en.wikipedia.org/wiki/Cross-site_request_forgery",target:"_blank",rel:"noopener noreferrer"}},[t._v("XSRF"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);