// import {
//   createRouter,
//   // hash 兼容性好 但是与后端格式不一致
//   createWebHashHistory
// } from 'vue-router'

import {
  createRouter,
  createWebHashHistory
} from '../grouter/index.js'

import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
  {
      path: '/',
      name: 'Home',
      component: Home
  },
  {
      path: '/about',
      name: 'About',
      component: About
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router