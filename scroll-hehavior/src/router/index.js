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
    meta:{
        keepAlive: true
    },
    component:() => import('../views/List.vue')
}

]

const router = createRouter({
    history:createWebHistory(),
    routes,

    
})

export default router

