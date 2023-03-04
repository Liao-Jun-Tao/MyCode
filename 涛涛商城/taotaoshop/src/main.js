import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import {
  Icon,
  Tabbar,
  TabbarItem,
  Search,
  Tab,
  Tabs,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  TreeSelect,
  Empty,
  Cell,
  CellGroup,
  Image as VanImage,
  Form, 
  Field, 
  ActionBar, 
  ActionBarIcon, 
  ActionBarButton
} from "vant";
import "vant/lib/index.css";
import "lib-flexible/flexible";
import { createPinia } from "pinia";
import '@/mock/index' 
import '@/assets/main.css'
const app = createApp(App);

app
  .use(ActionBarButton)
  .use(ActionBarIcon)
  .use(ActionBar)
  .use(Form)
  .use(Field)
  .use(VanImage)
  .use(createPinia())
  .use(Cell)
  .use(CellGroup)
  .use(Empty)
  .use(TreeSelect)
  .use(Grid)
  .use(GridItem)
  .use(Swipe)
  .use(SwipeItem)
  .use(Tab)
  .use(Tabs)
  .use(Search)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Icon)
  .use(router)
  .mount("#app");
