import { createRouter, createWebHashHistory } from "vue-router";
const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: "/", // 根路径  login
			// http 状态码 3XX 跳转 浏览器
			redirect: "/home", // 跳转
		},
		{
			path: "/home",
			name: "home",
			component: () => import("@/views/Home.vue"),
		},
		{
			path: "/login",
			name: "login",
			component: () => import("@/views/Login.vue"),
		},
        {
			path: "/category",
			name: "category",
			component: () => import("@/views/Category.vue"),
		},
        {
			path: "/user",
			name: "user",
			component: () => import("@/views/User.vue"),
		},
        {
			path: "/cart",
			name: "cart",
			component: () => import("@/views/Cart.vue"),
		},
		{
			path: "/search",
			name: "search",
			component: () => import("@/views/Search.vue"),
		},
		{
			path: "/detail",
			name: "detail",
			component: () => import("@/views/Detail.vue"),
		},
		
        
	],
});

export default router;
