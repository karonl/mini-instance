# mini-instance
手撸框架基本功能     
Small function, Great effect

目的是对热门框架技术进行探究，理解其核心功能原理，并尝试做一个小demo。

### x-model
双向数据绑定架构，即最小 MVVM 模型参考例子。     
(browser)

### tpl-render
模板引擎关键功能的精简版，即最小 Template Engine 参考例子。     
(browser)

### httpssl-blend
支持同个端口同时接受 http 与 https 请求的例子(非转发模式)，并且支持动态 ssl 证书加载，功能改造一下可用于中间人攻击。     
正常情况下用于建设网络边界网关、代理转发、https 解密分析等。     
(node)

### jsonp-fetch
探究 jQuery 关于 jsonp 的基本原理并做个小 demo，其实本质是 script 标签加载远程代码。     
加载js文件的功能，被利用来做跨域技术，确实取巧，虽然用这个方式跨域已不再流行。     
(browser, node)

### hot-server
该 demo 是对 hotfix 的一次实践，通过拦截 nodejs 模块加载机制，实现部分代码替换而无需重启整个进程。热替换相对于 supervisor、nodemon 有其优势的地方，可直接替换业务逻辑模块而无需进行复杂的初始化过程(如数据库连接)。
