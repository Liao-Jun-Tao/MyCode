/*
 * @Author: jutao622 1823152337@qq.com
 * @Date: 2023-03-05 14:08:18
 * @LastEditors: jutao622 1823152337@qq.com
 * @LastEditTime: 2023-03-05 15:57:31
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import router  from './router'
import { createPinia } from 'pinia'
import '@/assets/css/index.styl'
import '@/theme/red.styl'
import '@/theme/black.styl'



const app = createApp(App)

app
    .use(createPinia())
    .use(router)
    .mount('#app')
