<template>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      :size="formSize"
      status-icon
    >
      <el-form-item label="账号" prop="username">
        <el-input v-model="ruleForm.username" />
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <el-input v-model="ruleForm.pwd" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="">
         登录
        </el-button>
      </el-form-item>
    </el-form>
  </template>
  
  <script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import type { FormInstance, FormRules } from 'element-plus'
  
  const formSize = ref('default')
  const ruleFormRef = ref()
  const ruleForm = reactive({
    username: '',
    pwd:'', 
  })
  
  const rules = reactive({
    username: [
      { required: true, message: '请输入账号', trigger: 'blur' },
      { min: 3, max: 11, message: '请输入3到11个字符', trigger: 'blur' },
    ],
    pwd: [
      { required: true, message: '请正确输入密码', trigger: 'blur' },
      { min: 3, max: 11, message: '请输入3到11个字符', trigger: 'blur' },
    ],
    
    
  })
  
  const submitForm = () => {
    // 验证表单是否填写正确
    // axios  接口 
    ruleFormRef.value.validate(async (valid) => {
        // console.log(valid)
        if (valid) {
            console.log(ruleForm);
            const { data } = await login({
                userName: ruleForm.username || '',
                passwordMd5: md5(state.formData.password)
            })
            console.log(data);
            //服务器端签发的令牌环
            setLocal('token',data);
            // router.push({
            //     path:'/'
            // })
        }
    })
}
  
  

  </script>