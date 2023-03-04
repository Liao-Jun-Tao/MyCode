<template>
  <!-- 搜索框 -->
  <Search></Search>
  <!-- 导航栏  Navbar.vue-->
  <Nav-bar></Nav-bar>
  <!-- 轮播图 Swiper.vue -->
  <Swiper></Swiper>
  <!-- 分类菜单栏 Subnav.vue -->
  <Subnav></Subnav>
  <!-- 分割线 Line.vue -->
  <Line></Line>
  <!-- 展品区 Show.vue -->
  <!-- <Show></Show> -->
   <!-- 分割线 Line.vue -->
   <Line></Line>
  <!-- 商品 Product.vue -->
  <Product></Product>
</template>

<script setup>
import Search from "@/components/Search.vue";
import NavBar from "@/components/Navbar.vue";
import Swiper from "@/components/Swiper.vue";
import Subnav from "@/components/Subnav.vue";
import Product from "@/components/Product.vue";
import Line from "@/components/Line.vue";
// import Show from "@/components/Show.vue";

</script>

<style lang="stylus" scoped>


</style>
