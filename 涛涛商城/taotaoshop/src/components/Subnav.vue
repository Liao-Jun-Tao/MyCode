<template>
  <div class="subnav">
    <van-swipe class="subnav_swiper" :autoplay="3000">
      <van-swipe-item class="subnav_swiper__item">
        <div class="subnav_content">
          <template v-for="item in cridList" :v-key="id">
            <div class="subnav_box">
              <img class="subnav_box_img" :src="item.imgSrc" alt="" />
              <p>{{ item.title }}</p>
            </div>
          </template>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup>
import axios from "axios";
import { useHomeStore } from "@/store/home.js";
import { onMounted, computed } from "vue";

const homeStore = useHomeStore();
const cridList = computed(() => homeStore.cridList);

onMounted(async () => {
  await homeStore.getCridList();
});
</script>

<style lang="stylus" scoped>
.Subnav
  width 100%
.subnav_swiper
  width 100%
  height 4.8rem
  line-hight 5.333333rem
  .subnav_swiper__item
    margin 0 auto
    width 100%
    height 4.8rem
    .subnav_content
      display flex
      flex-wrap wrap
      justify-content space-around
      width 100%
      height 4rem
      .subnav_box
        display flex
        flex-direction column
        align-items center
        .subnav_box_img
          margin 0 .32rem
          width 1.333333rem
          height 1.333333rem
</style>
