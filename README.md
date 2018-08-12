# mini-instance
手撸框架基本功能     
Small function, Great effect

目的是对热门框架技术进行探究，理解其核心功能原理，并尝试做一个小demo。

### x-model
web 前端浏览器的双向数据绑定架构，即最小 MVVM 模型参考例子。     
(browser)

### tpl-render
模板引擎关键功能的精简版，即最小 Template Engine 参考例子。     
(browser)

### httpssl-blend
支持同个端口同时接受 http 与 https 请求的例子(非转发模式)，并且支持动态 ssl 证书加载，功能改造一下可用于 https加密协议 的中间人攻击。     
正常情况下用于建设网络边界网关、代理转发、https 解密分析等。     
(node)

### jsonp-fetch
探究关于 jsonp 的基本原理并做个小 demo，其实本质是通过 <script> 标签加载远程代码。我们经常用这个方法加载 jQuery。     
加载js文件的功能，被利用来做跨域请求，确实取巧，目前这个方式跨域已不再流行。     
(browser, node)

### hot-server
服务端 hotfix 的一次实践，通过拦截 nodejs 模块加载机制，实现部分代码替换而无需重启整个进程。热替换相对于 supervisor、nodemon 有其优势的地方，比如直接替换业务逻辑模块而无需进行复杂的初始化过程(数据库连接)。     
(node)

### x-compose
函数迭代器 middleware framework ，通过 middleware stack 存储每个函数，并使用递归的方式迭代运行，同时函数内可使用 next(); 进行下一步操作。     
更主要的是该模式支持"普通函数"与"异步函数"组成堆栈，即该项目是 koa、express 核心功能的小 demo。     
(node)
