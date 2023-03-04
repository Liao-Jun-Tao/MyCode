import { createApp } from 'vue'
// js 使用import 引入了css 
// link  传统 
import 'element-plus/dist/index.css'
import App from './App.vue'
// 全局引入
// 性能问题
import {
  // 按需加载
  ElButton,
  ElCard
} from 'element-plus'

const app = createApp(App)
// ElButton 全局组件引入?
app 
  .use(ElButton) // 组件变成全局组件
  .use(ElCard)

app.mount('#app')
