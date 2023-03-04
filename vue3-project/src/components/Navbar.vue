<template>
    <div class="navbar">
        <ul class="nav-list">
            <router-link class="nav-list-item" to="home">
                <i class="icon-home iconfont"></i>
                <div>首页</div>
            </router-link>
            <router-link class="nav-list-item"  to="category">
                <i class="icon-category iconfont"></i>
                <div>分类</div>
            </router-link>
            <router-link class="nav-list-item" to="cart">
              <i class="icon-cart iconfont"></i>
                <div>购物车</div>
            </router-link>
            <router-link class="nav-list-item" to="user">
                <i class="icon-my iconfont"></i>
                <div>我的</div>
            </router-link>
        </ul>
    </div>
  </template>
<script setup>

</script>

<style  scoped>
@import '@/assets/style/Navbar.css'
</style>