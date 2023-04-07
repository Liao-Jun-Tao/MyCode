<script setup>
import HorzenScrollMenu from "./components/HorizeScrollMenu.vue"
import BackTop from "./components/Backtop.vue"
import { ref,onMounted } from 'vue';


const showHeight = ref(0)
onMounted(()=>{
showHeight.value = window.innerHeight
})
</script>

<template>
 <HorzenScrollMenu />
 <back-top :showHeight="showHeight">
  回到顶部
 </back-top>
</template>

<style lang= "stylus">
*
    margin 0
    padding 0
</style>
