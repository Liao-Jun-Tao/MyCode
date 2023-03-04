<template>
  <div class="layout">
    <div class="user-header">
      <img class="background" src="https://i.328888.xyz/2023/02/24/7ON5N.png" alt="" />
      <div class="container">
        <img class="user" src="https://i.328888.xyz/2023/02/24/7O3iV.png" alt="" />
         <span class="login">请登录</span>
        <router-link to="login">
         <img class="icon" src="https://i.328888.xyz/2023/02/25/7azka.png" alt="" />
        </router-link>
      </div> 
      <van-cell title="我的订单" is-link to="index" />
      <div class="piece">
         <div class="userList" v-for="item in userList" :v-key="id" >
            <img class="imgSrc" :src="item.imgSrc" alt="">
            <div class="title" >{{ item.title }}</div>
         </div>
      </div>
    </div>
    <van-cell title="我的资产" is-link to="index" icon="points" />
    <van-cell title="优惠卷" is-link to="index" icon="coupon-o"/>
    <van-cell title="我的收藏" is-link to="index" icon="star-o"/>
    <van-cell title="地址管理" is-link to="index" icon="location-o" />
    <van-cell title="资质证件" is-link to="index" icon="award-o" />
    <van-cell title="协议规则" is-link to="index" icon="orders-o"/>
    <van-cell title="帮助与反馈" is-link to="index" icon="description"/>
  </div>
  <Nav-bar></Nav-bar>
</template>

<script setup>
import NavBar from "@/components/Navbar.vue";
import axios from "axios";
import { useUserStore } from '@/store/user.js'
import { onMounted, computed } from "vue";

const userStore = useUserStore()
const userList = computed(() => userStore.userList)

onMounted(async () => {
  await userStore.getUserList()
});
</script>

<style lang="stylus" scoped>
.user-header
   .background
      position absolute
      width 100%
      height 2.666667rem /* 100/37.5 */
   .container
      width 100%
      height 100px
      display flex
      justify-self space-between
      align-items center
      .user
         width 1.6rem /* 60/37.5 */
         height 1.6rem /* 60/37.5 */
         margin-left .666667rem /* 25/37.5 */
      .login
         flex 1
         color #fff
         font-size .373333rem /* 14/37.5 */
         padding 0  .533333rem 0
      .icon
         margin 0 .533333rem 
         width .48rem /* 18/37.5 */
         height .48rem /* 18/37.5 */
   .piece
      display flex
      justify-content space-around
      .userList
         width 2.4rem /* 90/37.5 */
         height 1.866667rem /* 70/37.5 */
         display flex
         flex-direction column
         justify-content center
         align-items center
         .imgSrc
            
            width 1.066667rem /* 40/37.5 */
            height 1.066667rem /* 40/37.5 */
         .title
            text-align center
            width 1.066667rem /* 40/37.5 */
            height .453333rem /* 17/37.5 */
</style>
