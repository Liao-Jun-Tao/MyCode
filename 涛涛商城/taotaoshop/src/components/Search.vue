<template>
    <div class="header">
        <img src="https://i.328888.xyz/2023/02/27/eZDYV.png" alt="" class="logo">
        <router-link to="/search">
            <van-search class="search" v-model="value" placeholder="请输入搜索关键词" disabled  background="#F5FFFA"/>
        </router-link>
        <router-link to="/user">
            <van-icon class="login" name="contact" size="20px"  />
        </router-link>
    </div>
</template>

<script setup>

</script>

<style lang="stylus" scoped>
.header
    display flex
    justify-content center
    align-items center
    background-color 	#F5FFFA
    .logo
        width .8rem 
        height .8rem 
        margin 0 .4rem 
    .search
        flex:1
    .login
        margin 0 .4rem 
</style>