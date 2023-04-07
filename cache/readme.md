# 前端性能优化最重要--缓存

- 静态资源缓存
      304 Not Modified

- 第一次访问某网站
      200 返回资源 花费时间
      走缓存 

- node 的理解
      1. 任何返回 html模板
      硬盘里  fs 读出来 字符串
      fs.readFile 异步的, 不会阻塞node 的单线程 node 的eventloop
      同样硬件的能力下 多让用户访问 服务器价格便宜
      index.js 内存 -> fs(I/O) -> 硬盘 -> 回调函数 第一个参数是err(文件路径存在, 固态硬盘和机械硬盘的区别), 第二个参数是数据

      2. readFielSync 同步, 不太常用, 性能不好
      3. 流的概念
            二进制文件的处理思想
            fs.createReadSteam()
      
- 图片格式
      jpg png(透明)
      webp 同样的清晰度, 体积私有1/2 1/3

- 缓存
      1. 服务器端开启缓存
      - 返回资源的同时, Expires 过期时间 setHeader('Expires', 时间)
      -再次请求 前端缓存就挡道
      本地的时钟和缓存的 Exipres 时间比较 强制走缓存 或走后端
      - 本地的时钟不准确 Expires 不准确

      2.HTTp 1.1 更新 Cache-Control 相对相同
      maxAge 倒计时
