# typescript 业务点
- 登录业务
   v-model username password
   interface LoginInfo {
      username: string;
      password: string;
   }

   const param = reactive<LoginInfo>({
      username: 'admin',
      password: '123123'
   })
   el-input v-model='param.username'
   import type { FormInstance, FormRule } from 'element-plus'
   const rules : FormRules = {

   }
   const login = ref<FormInstance>()
   formEl : FormINstance | undefined

   interface ObjectList {
      [key: string]: string[]
   }

- 权限深入定制方案
   - 登录 localStorage.getItem('ms_username')
      排除页面本身 死循环
   - 角色 设置权限数组
      - permissStore
         key   设置当前
         defaultList  admin user
      - 权限数组 to.permiss 是否在里面
   - 路由守卫
      - document.title
      - 登录拦截
      - 角色拦截