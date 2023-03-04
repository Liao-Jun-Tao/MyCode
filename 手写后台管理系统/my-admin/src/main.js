import { createApp } from 'vue'
import App from './App.vue'
import  router  from './router'
import  { 
        ElCol,
        ElIcon,
        ElMenu,
        ElRow, 
        ElSubMenu,
        ElMenuItemGroup,
        ElMenuItem,
        ElContainer,
        ElAside,
        ElRadioButton,
        ElRadioGroup,
        ElForm,
        ElFormItem,
        ElInput,
        ElOption,
        ElSelect,
        
        ElTimePicker,
        ElButton
} from 'element-plus'

import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app 
    .use(router)
    .use(ElRow)
    .use(ElCol)
    .use(ElMenu)
    .use(ElSubMenu)
    .use(ElIcon)
    .use(ElMenuItemGroup)
    .use(ElMenuItem)
    .use(ElContainer)
    .use(ElAside)
    .use(ElRadioButton)
    .use(ElRadioGroup)
    .use(ElForm)
    .use(ElFormItem)
    .use(ElInput)
    .use(ElOption)
    .use(ElSelect)
    .use(ElButton)
    .use(ElTimePicker)
app.mount('#app')
