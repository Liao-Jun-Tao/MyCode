
// Here is an example of a form in Vue.js
// 这是一个Vue.js表单的例子

<template>
  <form>
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="name">
    
    <label for="email">Email:</label>
    <input type="email" id="email" v-model="email">
    
    <label for="message">Message:</label>
    <textarea id="message" v-model="message"></textarea>
    
    <button type="submit" @click.prevent="submitForm">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    submitForm() {
      // Handle form submission here
      // 在这里处理表单提交
    }
  }
}
</script>