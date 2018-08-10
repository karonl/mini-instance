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
通过同个端口接受 http 与 https 请求的例子(非转发)，同时使用动态ssl证书加载。     
可用于建设网络边界网关、代理转发、请求拦截分析等。     
(node)

### jsonp-fetch
探究 jQuery 关于 jsonp 的基本原理并做个小 demo，其实本质是 script 标签加载远程代码。     
加载js文件的功能，被利用来做跨域技术，确实取巧，虽然用这个方式跨域已不再流行。     
(browser, node)
