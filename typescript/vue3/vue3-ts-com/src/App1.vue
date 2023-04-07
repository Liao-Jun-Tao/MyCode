import { watch } from 'vue';
<template>
      <div>

      </div>
</template> 
<script setup lang="ts">
// 运行时声明7  
// 对props 的静态类型约束
// const props = defineProps({
//       foo: {type:String, required: true},
//       bar: Number
// })
// 宏函数
interface Props {
      foo: string;
      bar?:number
}
const props = withDefaults(defineProps<Props>(),{
      foo: string
      bar?: string  
})
// composition api 常用
// ref
// reactive
// computed
// watch
// mounted
// props
</script>

<style scoped>

</style>