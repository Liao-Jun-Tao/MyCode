# json with padding
- 跨域
    1. 服务器端脚本
    2. api.baidu.com/say,后端接口域名
    3. www.baidu.com 前端域名
    4. url http(s)://domain.com:8888/path?a=1#b
    5. 只要协议、域名、端口不一样，都是跨域
    6. 不只是跨domain域名，cross origin=domain+端口+协议
    7. 安全需要双方维护
    8. 前端不信任后端返回的资源
    9. 后端NO Access 
 - 跨域属于常态
   - 前后端分离是主流8888 3000
   - 公司之间的协作
     - api.baidu.com
     - ai.baidu.com
     - taobao.com cainiao.com
 - 浏览器会自动进行CORS通信
   - 实现CORS通信的关键是实现了跨域
   - 服务器设置Access-Conterol-Allow-Originn * 后端
   - 白名单
 - 同源策略及其限制内容
   - 同源策略是一种约定，是浏览器最核心也是最基本的安全功能
   - 浏览器很容易收到XSS、CSRF攻击
   - js里不能执行非同源的代码

  - COOKIE localStorage ORigin 沙箱隔离
  - DOM节点
  - AJAX请求 js内容(有跨域限制) CORS 
  - 

 - script标签link、img等默认是可以跨域，