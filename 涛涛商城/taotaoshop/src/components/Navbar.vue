<template>
  <van-tabbar v-model="active" active-color="#ee0a24" route>
  <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
  <van-tabbar-item icon="label-o" to="/category">分类</van-tabbar-item>
  <van-tabbar-item icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
  <van-tabbar-item icon="contact" to="/user">我的</van-tabbar-item>
</van-tabbar>
</template>

<script setup>
</script>

<style  scoped>

</style>