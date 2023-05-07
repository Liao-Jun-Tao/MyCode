# 滴滴实习面试题

- 滴滴的难度如何?
  - 比较简单,
  - 比发展快, 薪资高的公司 容易
  - 扎实的前端基础
    20%的高质量 完整度 惊喜讲出来
- 投递策略

  1. 定向投
  2. 投多个

- css 的布局有哪些

  1. 流式布局 Flow
     默认布局方式 元素按照其在 HTML 中的顺序一行行地排列。默认情况下，元素的宽度是根据其内容自适应的，高度则是根据内容的多少来自适应的。
  2. 浮动布局
  3. 绝对定位布局
     解决层叠关系
  4. 弹性布局
  5. 栅格布局
  6. 多列布局

- es6 symbol bigint
  7 种
  新的数据结构 Map/Set WeakMap Weakset
  js 数据类型

  - 如何判断类型
  - symbol 的使用
    唯一的
    - 对象属性名的定义
      大型多人项目中 不会覆盖原有属性或者方法
    - 不重要的属性不出现在对象遍历
      object.getOwnproperdySymbols()
    - 类的私有属性或方法
      1. ES6 目标让 js 成为大型企业级开大语言, 需要提供 private 能力
         class extends
      2. 约定大于一切 \_method()
      3. 类的开发者和使用者的解耦
         类的复杂化, 开发者没有必要, 隐藏一些复杂的细节, 不能被调用者随便调用的, 公用方法 简单的 好用的,
         私有方法 难得, 有规矩的, 使用者没有必要去搞的
         Symbol() 使用者 不能可去 加大了用户犯错的难度
         obj.

- js 判断类型的方法

  - typeof
    null Array object 子类型
  - intanceof
    构造函数在对象的原型链上
  - Object.prototype.toString.call()
    子类型
    之外, 假如我们还要添加新的数据结构判断能力
  - isSet isMap

- 滴滴面试题 手写 promise
  1.  异步 node 异步无阻塞
  2.  同步 瞬间执行完 + cpu 轮询的概念
  3.  异步 耗时 eventloop js + 前端 / 后端
  4.  单线程保证了语言的简单易学, 无阻塞
      callback 执行的顺序得不到保障
      并行 回调地狱问题 顺序 代码的可读性提升
      Promise thenable 链 --> async await
- nginx
  - nginx 是一款高性能的 Web 服务器和反向代理服务器
    1. www.baidu.com
       www.baidu.com -> 80 http
       https:// -> 443
    ```
    server {
        listen 80;
        location / {
            proxy_pass http://localhost:3000
        }
    }
    ```
    2. 负载均衡 nginx 不负责的应用的 只负责调度
    ```
         upstream backend {
            server backend1.example.com;
            server   backend2.example.com
            server   backend3.example.com;
            server  backend4.example.com
            ...
     }
    ```
    3.  https 的配置
        用户 -> nginx -> restful
        加载 https SSL 证书和私匙

- 输入URL 到页面啊显示
- 神三元  http 浏览器
- 提词器: 网络 解析 渲染
  - 网络
    - 1. DNS 解析
      - 分布式的数据库 KV 缓存 IP地址
    - 2. TCP 链接
      - 3次挥手 SYN SYN/ACK ACK
     3. HTTP
         请求头   请求体
    - 4. 服务器资源处理, 响应用户内容
     渲染
      - 1. HTML  解析
         DOM 树
         同时CSS  JS 加载也发生
       2. CSS解析
        CSS 规划(CSS OM 树)与DOM 树绑定起来, 生成渲染树(Rending Tree)

        3. 布局和绘制
            每个元素在页面的确切位置和大小, 将渲染树和布局信息进行合并的到绘制树 painting tree

        - 强调优化策略

        1. 减少http请求树, 图片的懒加载, base64
        2. 压缩资源文件 webp nginx gzip 压缩
        3. 缓存 强 协商
        4. CDN 减少服务器的压力
        5.  骨架屏 

- get post 区别
    http请求的两张方法,用于向服务器提交数据和获取数据
    需要 安全性
    - GET请求通过URL 传递参数 , POST请求通过HTTP请求体传递
            GET 长度限制 POST 文件都可以 
    - GET请求在URL中直接可见, 不安全, 中间人    HTTPS
        POST请求 加密的 安全 
    - GET请求 可以被缓存的资源

- 浏览器缓存
        - 主要针对前端静态资源, 大大的减少了HTTP请求树, 提高了网站的性能(服务器的CPU,带宽, 内存)
        - 强缓存 
            设置响应头 请求头 
            HTTP 1.0    Expires
            HTTP 1.1       Cache-Control:max-age=xxx 
        - 协商缓存
            1.0 last-Modified(服)   if-modified-since (客)
            1.1 Etag    if-none-Match
            - etag  精确度更高, 文件hash计算
            - 缺点是 计算成本高 
