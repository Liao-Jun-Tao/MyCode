import Home from '../pages/Home.vue' // 页面级别组件
// 当我们页面路由很多时，  升级一下配置方案
// 当首页加载时， 没有必要去引入并执行所有的页面的
// 路由的懒加载
// import About from '../pages/About.vue'
// import Other from '../pages/Other.vue'
import { 
  createWebHashHistory, // 前端路由的形式hash history api
  // createWebHistory
  createRouter // spa  路由实例
} from 'vue-router'

const routes = [
  // 扩展性很好
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // component: About
    component: () => import('../pages/About.vue')
  },
  {
    path: '/other',
    name: 'Other',
    // component: Other
    component: () => import('../pages/Other.vue')
  }
]

const router = createRouter({
  // 配置前端路由
  history: createWebHashHistory(),
  routes
})

export default router