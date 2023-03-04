<template>
  <div class="iconList">
    <div class="iconList-layout" v-for="item in iconList" :key="id">
      <img class="iconList-pic" :src="item.imgSrc" alt="" />
      <span class="iconList-title">{{ item.title }}</span>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { useHomeStore } from "@/store/home.js";
import { onMounted, computed } from "vue";

const homeStore = useHomeStore();
const iconList = computed(() => homeStore.iconList);

onMounted(async () => {
  await homeStore.getIconList();
});
</script>

<style lang="stylus" scoped>
.iconList
        display flex
        justify-content space-between
        .iconList-layout
                width 10.026667rem /* 376/37.5 */
                height 2.186667rem /* 82/37.5 */
                display flex
                flex-direction column
                justify-content center
                align-items center
                .iconList-pic
                        width 1.6rem /* 60/37.5 */
                        height 1.6rem /* 60/37.5 */
                .iconList-title
                        text-align center
                        width 1.6rem /* 60/37.5 */
                        height .453333rem /* 17/37.5 */
</style>
