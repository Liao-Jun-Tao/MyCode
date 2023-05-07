<template>
  <!-- 插入背景图片 -->
<div class="w-screen h-18 bg-img">
  <!-- 搜索建议栏 -->
  <div class="flex overflow-x-auto scrollbar-hidden ml-1">
    <ul class="flex whitespace-nowrap mt-1 px-1 ">
      <li 
      class="bg-light-300  mx-0.5 px-1 leading-3 whitespace-nowrap rounded-4xl flex items-center justify-center"
      v-for="item in state.suggestion" :key="item.id">
       
        <span class="text-center text-current  font-semibold tracking-2px">{{ item.sug }}</span>
      </li>
    </ul>
  </div>

  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
const state = reactive({
  // 搜索建议数据
suggestion: [
  { id: 1, sug: "南昌" },
  { id: 2, sug: "南昌的景点" },
  { id: 3, sug: "澳门机票次卡320起" },
  { id: 4, sug: "江西南昌" },
  { id: 5, sug: "南昌美食" },
],
 
  
});
</script>

<style scoped>
.bg-img {
background-image: url("@/assets/images/1681741392.webp");
background-position: 0 0;
background-size: cover;
background-repeat: no-repeat;
}
/* 隐藏左右拖动的导航条 */
::-webkit-scrollbar {
display: none;
}
.xcenter{
  position: relative;
  left: 50%;
  transform: translateX(-50%);  
}
</style>

