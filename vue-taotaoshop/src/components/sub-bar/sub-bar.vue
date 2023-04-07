<template>
  <div class="subBar">
    <van-tabs  swipeable >
      <van-tab title="推荐"  >
        <Swiper/>
        <sort/>
        <van-divider />
        <goods/>
      </van-tab>
      <van-tab title="智能" >
123
      </van-tab>
      <van-tab title="电视"  >
123
      </van-tab>
      <van-tab title="家电"  >
        123
      </van-tab>
      <van-tab title="笔记本" >
123
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
import goods from "@/components/goods/goods.vue"
import Swiper from "@/components/swipe/Swiper.vue"
import sort from "@/components/sort/sort.vue"
import { useHomeStore } from "@/store/home.js";
// import { computed ,ref} from "vue";
// import { useRouter } from "vue-router";
// const router = useRouter();
const homeStore = useHomeStore();


</script>

<style lang="scss" scoped></style>
