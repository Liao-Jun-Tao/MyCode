# MVC
- KOA框架
  - 极简的node开发框架
    - content=res+req
    - 中间件
# 后端思维
  - MVVM -> MVC
  - Model 数据层 View视图层 职责分离 MV不能直接通信 Controll层 逻辑计算 参数校验 用户session
  - 路由 后端路由 用户从哪条路哪个method进来，交给controll
  - view html有完整的html + DOM(原生js jQuery)
  - 3000端口 后端安全的一部分
- 洋葱模型
  - koa(洋葱模型)提供服务和架构的本质  node服务器编程的简单
  - 123456
  - 每个函数交给app.user 调用都是中间件 middleware
  - 每个middleware中都能拿到ctx next等参数
  - 按照顺序执行 从上到下
  - 设计当遇到ctx.response.body提前退出
    - 不同的用户 不同的任务 不同的中间件需求 
    - 数组 数据库连接中间件 要在路由中间件前后
    - 如果到了最后一个中间件 仍然没有结束沿着洋葱模型回溯执行
- koa路由
  1. app.js单点入口 模块化 
  2. routers 目录 定义路由  使用restful-api设计
  3. 路由是作为中间件 启用 
    ctx.request 请求行 http 版本号 url method
    多个路由组件
    如果url method 和当前洋葱模型 执行顺序里的路由中间件匹配 进入控制器函数执行
    不匹配 洋葱模型  next         
- koa view 层
  1. 传统的MVC 
     1. 经典的后端架构和设计模式
     2. router -> controller(数据准备,逻辑) -> views(html)
  2. ctx.render()
     1. ctx代表上下文环境＝req + res
     2. 可省略response
     3. ctx.render = ctx.response.render
  3. view是目录和view层
     1. 配置一下
  4. 使用ejs模板引擎
     1. {{}} -> <%= %> for 模板编译后 完整的输出给浏览器 
     2. 前后端分离 只有一个挂载点 vue component 动态
     3. MVVM对于大公司团队协作更适合，前后端分离应用打开更快，体验好，不会白
     4. 前后端分离的缺点 SEO(搜索引擎优化)极差 只有一个#root 解析不了js和ajax数据
     5. 对于过大的项目，数据绑定会导致内存开销大，影响性能
     6. 对于app则无所谓，体验为先
     7. 掘金 csdn 搜狐 非常在乎SEO 
     8. 服务器端渲染的VUE Nuxt
  5. koa-views views 中间件挂载在app上
     1. 配置view所在
        1. ctx.render指定模板引擎的名字
     2. 指定模板引擎 ejs pug
        1. <%= %>
     3. 洋葱模型 views中间件 功能准备型中间件 放置在路由中间件前面      +
     4. ctx.render
        1. 模板在服务器编译 返回所有的html 对SEO友好
        2. 爬虫也是通过发送请求来建立内容分析      
  6. PC端入口在百度 移动端在应用市场 MVVM
- meta viewport
  - SEO要注意 head里meta通常用来丰富页面信息和属性
    description keywords
    viewport用于适配PC端不需要
    移动端 init-scale=1.0 width=device-width user-scaleable=no
    乔布斯开创了移动时代，PC更多，user-scaleable两个手指缩放页面
    1024px pc->750 手机 很小 缩放有时候会误操作 
    www.taobao.com -> m.taobao.com 301跳转
    PC 一套 nuxt Mobile SPA
- 静态资源koa处理
  - css js image  video audio
    - 不归动态路由管 服务器集群中
    - 前端写的绝大部分都是静态资源 webpack vite 打包 dist/
      未来会单独放在cdn(内容分发网络)服务器 前端缓存性能优化
  - 单独处理静态资源路由 
  - http://localhost:3000/index.css
    - 静态服务器static + 缓存功能 cache koa-static-cache 
    - / 动态服务器路由 首页
    - / 静态服务器 中间件放在路由前面
      - / -> 配置的 /public 
    - 时间内，客服端不需要再请求 http优化的重要机制
    - 最近cdn服务器上 第一次200 Not Modified 304
    - maxAge一定会去服务器请求再更新 
- 登录的用户体验
  - keyup事件 enter提交 手机的Enter 虚拟键盘
  - 做好校验 前后端均做 为了数据安全
  - 密码重复 在前端(用户体验，及时提醒) 后端(js可以被禁用，后端不信任前端的任何东西)也要做 后端对数据安全负第一责任
- html5的文件对象
  - 提供了File对象
    - 文件在上传到服务器之前，就可以访问到本地的文件 类型 大小 等
  - 提供了fileReader对象 
    - 异步从硬盘读取内容到内存中，以url base64 blob 形式
    - 提前看到图片上传
    - 文件比较大的时候 用户可能要等好久才可以上传 如果没有交互体现正在上传 用户焦虑
- bodyParser中间件
  - post请求 GET请求
    - GET查询参数在请求行就已经到位
    - POST请求体 (请求头信息有length) 分段传输 路由中间件之前要加请求体收集中间件 bodyParser中间件
  - bodyParser await 收集 == length next()
- node 做后端与其他语言不同的地方 异步解决->性能好 no blocking 不会阻塞
  一台服务器 上限是在线五千人 并发nginx/tomcat server
  php/java/python 同步的 blocking 在sql请求的(I/O)耗时任务 占据线程
  node 异步的 有eventloop 在sql请求中(I/O)耗时任务中进入eventloop
  nginx/tomcat 线程就会被释放 不会阻塞 no blocking
  省掉很多服务器 支持高并发
  java c++ 多线程
  node 单线程 和法师一样脆 服务器会崩 无法响应 所有用户都不响应 try catch
  pm2 进程管理工具

  - 文件上传
    1. 上传到服务端
      哪个文件夹  static-catch  静态服务器,  
      缓存    /public/images 
    2. 可以访问的
        静态服务器
    3. fs 模块 写入

  - mysql 业务处理方式
    1. MVC  的model 层
      lib/mysql.js  简版
      在控制器中调用
    2. 数据库驱动  mysql2 翻译
        驱动mysql  为程序工作 I/O
        createPool
        getConnection  连接数据
        release  断开数据库
    3. 封装了通用的query


- 登录功能的细节
  GET /signin  表单
  验证表单
  ajax 提交表单 POST /signin {}
  body