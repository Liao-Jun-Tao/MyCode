<template>
  <div class="flex overflow-x-auto scrollbar-hidden ml-1">
      <ul class="flex whitespace-nowrap mt-1 px-1 ">
        <li 
        class="bg-light-300  mx-0.5 px-1 leading-3 whitespace-nowrap rounded-4xl flex items-center justify-center"
        v-for="item in state.suggestion" :key="item.id">
          <span class="text-center text-current  font-semibold tracking-2px">{{ item.sug }}</span>
        </li>
      </ul>
  </div>
</template>

<script setup lang="ts">
import { reactive,onMounted } from 'vue'
const state = reactive({
    suggestion:[{id:1,sug:'南昌的景点'},
         {id:2,sug:'南昌美食'},
         {id:3,sug:'南昌住宿'},
         {id:4,sug:'南昌旅游攻略'},
         {id:5,sug:'南昌交通指南'},]
})
</script>

<style scoped>
/* 隐藏左右拖动的导航条 */
::-webkit-scrollbar {
  display: none;
}
</style>