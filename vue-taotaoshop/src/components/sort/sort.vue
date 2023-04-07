<template>
  <div class="page">
    <van-skeleton title :row="3" :loading="loading" />
    <div class="container">
      <div
        class="sort"
        v-for="sort in sortList"
        :v-key="sort.id"
        @click="gotoSort(sort.id)"
      >
        <img class="sort_img" :src="sort.imgSrc" alt="" />
        <p class="sort_title">{{ sort.title }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted,reactive } from "vue";
import { useHomeStore } from "@/store/home.js";
import { showLoadingToast, closeToast } from "vant";
import { useRouter } from "vue-router";
const router = useRouter();
const homeStore = useHomeStore();
const sortList = computed(() => homeStore.sortList);
const loading= computed(() => homeStore.loading);
const gotoSort = (id) => {
  router.push({
    path: `/home/sort/${id}`,
  });
};

onMounted(async () => {
  showLoadingToast({
    message: "加载中...",
    forbidClick: true,
  });

  await homeStore.getSortList();

  homeStore.loading = false;

  closeToast();

  

//   homeStore.loading = false;
});
</script>

<style lang="stylus" scoped>
@import "../../common/style/mixin.styl"
.page
    .container
        fj()
        .sort
            fj(center)
            align-items center
            flex-direction column
            .sort_img
                wh(1.333333rem,1.066667rem)
                margin 0 .266667rem
            .sort_title
                font-size .373333rem
</style>
