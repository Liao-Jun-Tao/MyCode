const Koa = require('koa');
const Router = require('koa-router');
const {koaBody} = require('koa-body');

const app = new Koa();
const router = new Router();

// 使用koa-bodyparser中间件解析请求体
app.use(koaBody());
// 使用koa-session中间件来设置和获取session


// 在路由中使用ctx.session获取session信息
// 定义登录接口
router.post('/login', async (ctx) => {
  const requestBody = ctx.request.body;
  if (requestBody) {
    const {username, password} = requestBody;
    // 在这里进行登录验证
    // 如果验证通过，设置session
    if (username === 'admin' && password === '123456') {
      // 添加判断，如果session不存在则创建一个空对象
      if (!ctx.session) {
        ctx.session = {};
      }
      ctx.session.username = username;
      ctx.body = '登录成功';
    } else {
      ctx.body = '用户名或密码错误';
    }
  } else {
    ctx.body = '请求体为空';
  }

  return 
});

// 将路由注册到应用
app.use(router.routes());

// 启动应用
app.listen(3001, () => {
  console.log('Server is running at http://localhost:3001');
});


