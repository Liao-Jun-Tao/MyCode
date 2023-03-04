import { createApp } from "vue";
import App from "./App.vue";
import { Search,
         Swipe, 
         SwipeItem,
         Icon,
         Cell, 
         CellGroup
} from "vant"
import "vant/lib/index.css";
import "lib-flexible/flexible";
import "./assets/style/main.css";
import router from "./router";
import '@/mock/index' //模拟数据
import {createPinia}from 'pinia'

const app = createApp(App);

app 
    .use(CellGroup)
    .use(Cell)
    .use(createPinia())
    .use(Icon)
    .use(Swipe)
    .use(SwipeItem)
    .use(Search)
    .use(router)
    .mount("#app")
