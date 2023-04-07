<template>
  <main class="main">
    <!-- <div class="location" > -->
      <!-- <van-icon class="location_icon" name="location" /> -->
      <img class="location" src="https://m.mi.com/static/img/icon-header-logo3.ddf2a1c313.png" @click="gotoLocation" />
    <!-- </div> -->
    <div class="search" @click="gotoSearch" >
      <van-icon class="search_ser search_icon" name="search" />
      <input class="search_input" type="text" placeholder="搜索" >
      <van-icon class="search_scan search_icon" name="scan" />
    </div>
      <van-icon class="contact" name="contact" @click="gotoLogin"/>
  </main>
</template>
<script setup>
import { useRouter } from "vue-router";
import router from "@/router";

const routes = useRouter();
const gotoLocation = () => {
  router.push({
    path: "/home",
  });
};
const gotoLogin = () => {
    router.push({
    path: "/login",
  });
}
const gotoSearch = ()=>{
    router.push({
    path: "/search",
})
}

</script>

<style lang="stylus" scoped>
@import "../../common/style/mixin.styl"
.main
    wh(100%,1.066667rem)
    display flex
    justify-content space-between
    align-items center
    // font-size .533333rem
    .location
        margin 0 10px
        // line-height .8rem
        // .location_dm
        wh(.533333rem,.533333rem)
    .search
        flex 1
        height .8rem
        display flex
        justify-content space-between
        align-items center
        border 1px solid #000
        border-radius .8rem
        .search_icon
            margin 0 .266667rem
        .search_input
            wh(4.8rem,.533333rem)
            border none
            font-size .373333rem
    .contact
        margin 0 .266667rem
</style>
