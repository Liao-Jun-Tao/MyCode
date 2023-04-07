import {createRouter,createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
// import List from '../views/List.vue'
const routes = [
{
    page:'/',
    name:'home',
    component:Home
},
{
    path:'/list',
    name:'list',
    component:() => import('../views/List.vue')
}

]

const router = createRouter({
    history:createWebHistory(),
    routes,
    // 自动设置相应页面的滚动条
    scrollBehavior(to, from){
        if(to.name==='list'){
            // 分页面对待 
            return {
                top: parseInt(localStorage.getItem('scroll'))
            }
        }
    }
})

export default router

