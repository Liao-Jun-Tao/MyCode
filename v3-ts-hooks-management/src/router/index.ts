// 该文件定义了路由相关的配置信息
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/home.vue';
import { usePermissStore } from '../store/permiss';
// 定义路由信息
const routes: RouteRecordRaw[] = [
   {
      path: '/',
      redirect: '/dashboard',
   },
   {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
         {
            path: '/dashboard',
            name: 'dashboard',
            meta: {
               title: '系统首页',
               permiss: '1',
            },
            component: () => import(/* webpackChunkName: "dashboard" */ '../views/dashboard.vue'),
         },
         {
            path: '/table',
            name: 'basetable',
            meta: {
               title: '表格',
               permiss: '2',
            },
            component: () => import(/* webpackChunkName: "dashboard" */ '../views/table.vue'),
         },
      ]
   },
   {
      path: '/login',
      name: 'Login',
      meta: {
          title: '登录',
      },
      component: () => import(/* webpackChunkName: "login" */ '../views/login.vue'),
  },
]

// 创建路由实例
const router = createRouter({
   history: createWebHashHistory(),
   routes,
});
// 权限如何做, 后提细致的权限, 登录 | 角色
router.beforeEach((to, from, next) => {
   // 页面标题
   document.title = `${to.meta.title || 'bilibili后台管理系统'} `
   const role = localStorage.getItem('ms_username') // admin 管理员 user 普通
   const permiss = usePermissStore() //权限
   console.log(permiss);
   if (!role && to.path !== '/login') {//未登录
      next('/login')
   }else if(to.meta.permiss && !permiss.key.includes(to.meta.permiss)){
      next('/403')
   } else {
      next();
   }
})
// 导出路由实例
export default router

