<template>
    <div class="like">猜你喜欢</div>
  <div class="goods">
    <div class="box" v-for="item in productList" :key="item.id">
      <img :src="item.Img" />
      <p class="title">{{ item.title }}</p>
      <p class="price">￥{{ item.price }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useHomeStore } from "@/store/home.js";
import { showLoadingToast, closeToast } from "vant";
// import getProductList from '@/service/home.js';
import goods from "@/components/goods/goods.vue";
const homeStore = useHomeStore();
const productList = computed(() => homeStore.productList);
onMounted(async () => {
  showLoadingToast({
    message: "加载中...",
    forbidClick: true,
  });
  await homeStore.getProductList();
  closeToast();
});
</script>

<style lang="stylus" scoped>
.like
    font-size 20px
    font-weight 700
    margin-bottom .266667rem
.goods
    width 96%
    margin 0 auto
    columns: 2;
    column-gap: 10px;
    .box
        // box-shadow 0 0 .266667rem #808080
        border-radius .106667rem
        margin-bottom .266667rem
        
        img
            width 100%
            height 100%
        .title
            font-size 16px
            
        .price
            font-size 14px
            
        
</style>
