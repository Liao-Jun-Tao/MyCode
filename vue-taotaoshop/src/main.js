import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import {
  Tabbar,
  TabbarItem,
  Icon,
  Form,
  Field,
  CellGroup,
  Button,
  Swipe,
  SwipeItem,
  Skeleton,
  SkeletonTitle,
  SkeletonImage,
  SkeletonAvatar,
  SkeletonParagraph,
  Tab,
  Tabs,
  Divider,
  Sidebar,
  SidebarItem,
} from "vant";
import "vant/lib/index.css"; // 引入vant组件库
import "lib-flexible/flexible"; //移动端适配
import "./assets/main.css"; //样式重置
import router from "./router"; //启动路由
import "@/mock/index";

const app = createApp(App);

app
  .use(Sidebar)
  .use(SidebarItem)
  .use(Divider)
  .use(Tab)
  .use(Tabs)
  .use(Skeleton)
  .use(SkeletonTitle)
  .use(SkeletonImage)
  .use(SkeletonAvatar)
  .use(SkeletonParagraph)
  .use(Swipe)
  .use(SwipeItem)
  .use(Button)
  .use(Form)
  .use(Field)
  .use(CellGroup)
  .use(Icon)
  .use(Tabbar)
  .use(TabbarItem)
  .use(createPinia())
  .use(router)
  .mount("#app");
