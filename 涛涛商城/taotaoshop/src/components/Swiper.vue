<template>
  <div class="swiper">
    <van-swipe  :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in swiperList" v-key="id">
        <img :src="item.imgSrc" alt="" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup>
import axios from "axios";
import { useHomeStore } from "@/store/home.js";
import { onMounted, computed } from "vue";
import Swiper from '@/components/Swiper.vue';

const homeStore = useHomeStore();
const swiperList = computed(() => homeStore.swiperList);

onMounted(async () => {
  await homeStore.getSwiperList();
});
</script>

<style lang="stylus" scoped>
.swiper
  width 100%
  height 100%
van-swipe
  width 100%
  height 5.013333rem
van-swipe-item
  width 100%
  height 5.013333rem
img
  width 100%
  height 5.013333rem


</style>
