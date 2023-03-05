/*
 * @Author: jutao622 1823152337@qq.com
 * @Date: 2023-03-05 14:16:29
 * @LastEditors: jutao622 1823152337@qq.com
 * @LastEditTime: 2023-03-05 16:09:30
 * @Description:
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
// ts 类型检查
// <> 泛指约束  泛指内部的类型
// RouteRecordRaw
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
    redirect:'/recommend',
    children:[
        {
            path:'/recommend',
            name:'recommend',
            component:()=>import('@/views/recommend/Index.vue'),
            meta:{
                isCover:true,
            }
        }
    ]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router