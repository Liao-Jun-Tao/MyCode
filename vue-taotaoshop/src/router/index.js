import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home/home.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/category",
      name: "category",
      component: () => import("@/views/Category/category.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("@/views/Cart/cart.vue"),
    },
    {
      path: "/user",
      name: "user",
      component: () => import("@/views/User/user.vue"),
    },
    {
      path: "/location",
      name: "location",
      component: () => import("@/views/Location/location.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login/login.vue"),
    },
    {
      path: "/search",
      name: "search",
      component: () => import("@/views/Search/search.vue"),
    },
  ],
});

export default router;
