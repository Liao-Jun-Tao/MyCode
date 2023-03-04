<template>
  <div class="page">
    <main class="wrapper">
      <div class="col">
        <div class="content" :key="id" v-for="item in productList">
          <div>
            <img :src="item.Img" alt="" />
          </div>
          <div>
            <p>{{ item.intro }}</p>
          </div>
          <div>
            <p>￥{{ item.price }}</p>
          </div>
        </div>
      </div>

      <div class="col column">
        <div class="content" :key="id" v-for="item in productList">
          <div>
            <img :src="item.Img" alt="" />
          </div>
          <div class="intro">
            <p >{{ item.intro }}</p>
          </div>
          <div class="price">
            <p >￥{{ item.price }}</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import axios from "axios";
import { useHomeStore } from "@/store/home.js";
import { onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import Product from "@/components/Product.vue";

const homeStore = useHomeStore();
const productList = computed(() => homeStore.productList);

onMounted(async () => {
  await homeStore.getProductList();
});
</script>

<style lang="stylus" scoped>
.page {
    display: flex;
    flex-direction: column;
    height: 100vh;
}


main {
    flex: 1;
    padding: 0 .26666rem;
    display: flex;
    justify-content: space-between;
    // overflow-y: scroll;
}

.col {
    height: 100%;
    width: 48%;

}
img{
    width: 100%;
}
.column{
    margin-top .533333rem
}
.content{
    margin-bottom .266667rem
    border 1px solid #DDDDDD
    border-radius .106667rem
    text-align center
    font-size .426667rem
    font-weight 700
    color black
}

</style>
