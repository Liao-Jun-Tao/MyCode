import { createApp } from 'vue';
import { createPinia } from 'pinia';
// Element-plus icon 分离
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import App from './App.vue';
import router from './router';
import 'element-plus/dist/index.css';
import './assets/css/icon.css';

const app = createApp(App);
app.use(createPinia());
app.use(router);

// 注册elementplus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
   // 挂载在全局
   app.component(key, component);
}
// // 自定义权限指令
// const permiss = usePermissStore()
// app.directive('permiss', {
//    mounted(el,binding) {
//       if(!permiss.key.includes(String(binding.value))){
//          el['hidden'] = true;
//       }
//    }
// })
app.mount('#app');