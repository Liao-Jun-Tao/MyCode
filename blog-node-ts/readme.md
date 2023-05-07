- ts -> js才能运行
  - ts -> tsc
  - ts-watch 热更新  
  - tsconfig.json exclude target  
  - @types/express 类型声明文件
- 新的架构 
- dotenv 解决安全问题
  - 敏感信息放在.env中
  - dotenv.config()
    - node 操作系统
  - process.env 截出来
  - .gitignore .env文件不上传
  - 私密共享
- 介绍一下http状态码 相应的场景
  - 1xx
  - 2xx
  - 3xx
  - 4xx
  - 5xx
- 错误处理中间件
  - 应用中最后的中间是错误处理中间件
  - 错误无处不在，js是单线程，发生错误会崩
  - 带宽和服务器的性能 硬件
  - 有四个参数
    - error是第一个
    - next(new ERROR("")) 只有错误处理中间件才能处理
- node企业级开发范式
  - 中间件开发模式
    - npm 通用中间件
      cors json bodyParser 。。。
    - 路由中间件/错误处理中间件。。。
    - 进入到业务处理也用中间件模块化处理
      Router -> 参数校验 -> 功能1  ... -> 功能n 数据库操作 -> 返回
  - HTTP状态码标准
  - 架构
    每个路由模块中
      - xxx.router.ts
      - xxx.middleware.ts
      - xxx.controller.ts
      - xxx.service.ts
      - xxx.model.ts
      - xxx.test.ts 测试驱动开发jest
将每个路由模块分成这些文件可以使代码更好地组织和维护。以下是每个文件的作用：
xxx.router.ts：该文件定义了路由，指定HTTP请求的路径和通过哪些中间件来处理请求。在该文件中，您可以使用Express.js或Koa.js等Web框架提供的API来设置路由。
xxx.middleware.ts：该文件包含了一系列中间件函数。中间件函数用于对请求进行预处理，例如身份验证、数据验证、日志记录等操作。在路由处理请求之前，中间件函数将被按顺序执行，从而实现请求的流程控制。
xxx.controller.ts：该文件包含了一系列控制器函数。控制器函数用于处理特定路由的请求，并根据请求返回相应的结果。在控制器函数中，您通常会使用服务层（service）或模型层（model）来获取数据或执行其他业务逻辑。
xxx.service.ts：该文件包含了一系列服务函数。服务函数用于封装业务逻辑，对外提供业务功能接口。在控制器函数中，您通常会使用服务层来获取数据或执行其他业务逻辑。
xxx.model.ts：该文件包含了与数据库交互的模型。模型定义了数据库表结构和各种操作，如查询、插入、更新和删除等。在服务层中，您通常会使用模型层来操作数据库。
xxx.test.ts：该文件包含了单元测试用例，使用Jest等测试框架编写。在测试驱动开发中，您可以先编写测试用例，然后再编写代码来实现这些用例。
通过将每个路由模块分成这些文件，您可以使代码更具可读性、可维护性和可扩展性，并且可以更轻松地进行测试驱动开发。



npm i mysql2 dotenv cors express @types/express bcryptjs

- TDD 表达
    1. blog 项目
    2. 登录鉴权模块
    3. 测试驱动开发, 敏捷开发方式
    4. 举出一个个的测试用例, 并编码通过,
        全一点 , 全力通过测试用例
    5. 眼镜专业, 自动跑测试的项目 企业级开发的标配, 运维思想
        每次上线前跑一遍所以测试用例
    