- 数据接口怎么做?
- /api  表示接口地址
      http://api.vikingship.xyz/api/columns?currentPage=1&pageSize=3
      /api/columns?currentPage=1&pageSize=3 qs
      /api  后端工程师  接口的路径开始, 约定
      /columns 列表
   - 前后端分离
      前端 vue 3000
      后端 koa 8080
      跨域 cors JSONP 代理proxy
      A    C     B    后端接口已存在, 且在线上 

   # proxy 代理 解决跨域问题
      前提是前后端分离
      服务器端接口已上线  本地通过proxy解决跨域问题
      mockjs + online fastmock  按约定的接口文档
      分头开发前 在一起约定一个接口文档 哪些接口/api
      restful url params qs json 返回是什么
      等前端 后端 独立写完的时候, 联调 
      本地的axios baseUrl -> serverUrl
      [
         p6y7'o;
      ]
      vite.config.js  帮我们前端请求做代理
      nginx 高性能服务器, 负载均衡服务器  服务器集群的ip地址和忙闲算法  代理服务器 
      :3000   proxy   :8080  http 默认端口
      http://localhost   -> http://localhost:80   -> nginx
      http://localhos:3000

      /api/column  ->  http://localhost:3000  -> proxy一下   http://api.vikingship.xyz/api/columns?currentPage=1&pageSize=3  跨域