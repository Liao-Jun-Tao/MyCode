<template>
      <div>

      </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue'
// ref 响应式声明, 类型的推导ref<number> 机器
// 静态类型约束
// const year :Ref<string | number | boolean> = ref(2022)
// 泛型约束
const year  = ref<string | number>(2022)

year.value = "2221"
</script>

<style scoped>

</style>