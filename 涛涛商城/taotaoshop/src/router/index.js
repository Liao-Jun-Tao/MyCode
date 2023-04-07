
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
			component: () => import("@/views/Home/Index.vue"),
		},
		{
			path: "/login",
			name: "login",
			component: () => import("@/views/Login/Index.vue"),
		},
        {
			path: "/category",
			name: "category",
			component: () => import("@/views/Category/Index.vue"),
		},
        {
			path: "/user",
			name: "user",
			component: () => import("@/views/User/Index.vue"),
		},
        {
			path: "/cart",
			name: "cart",
			component: () => import("@/views/Cart/Index.vue"),
		},
		{
			path: "/search",
			name: "search",
			component: () => import("@/views/Search/Index.vue"),
		},
        
	],
});

export default router;
