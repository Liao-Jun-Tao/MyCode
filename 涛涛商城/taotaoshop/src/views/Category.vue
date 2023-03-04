<template>
  <div class="category">
    <van-search
      class="category_search"
      v-model="value"
      placeholder="输入商品名称"
      input-align="center"
      shape="round"
    />
    <div class="container">
      <div class="left">
        <template v-for="item in categoryList" :key="categoryId">
          <div class="category_title">{{ item.categoryName }}</div>
        </template>
      </div>
      <div class="right">
        <template v-for="(category, index) in categoryList" :v-key="categoryId">
          <div
            v-for="(products, index) in category.secondLevelCategory"
            v-key="index"
          >
            <img class="products_Img" :src="products.categoryImg" alt="" />
            <p class="products_title">{{ products.categoryName }}</p>
            <div></div>
            <template
              v-for="(a, index) in products.thirdLevelCategory"
              v-key="index"
            >
              <div class="a_con">
                <img class="a_Img" :src="a.products_Img" alt="" />
                <div class="a_title">
                  <p class="a_name">{{ a.productsName }}</p>
                  <p class="a_price">￥{{ a.price }}</p>
                </div>
              </div>
            </template>
            <div class="b_con">
              <template v-for="(b, index) in products.relativeProducts">
                <div class="b_box">
                  <img class="b_Img" :src="b.products_Img" alt="" />
                  <p>{{ b.name }}</p>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
  <Navbar></Navbar>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";
import { useCategoryStore } from "@/store/category.js";
import { onMounted, computed } from "vue";

const categoryStore = useCategoryStore();
const categoryList = computed(() => categoryStore.categoryList);

onMounted(async () => {
  await categoryStore.getCategoryList();
});
</script>

<style lang="stylus" scoped>
.category
  .container
    display flex
    .left
      .category_title
        width 2.106667rem /* 79/37.5 */
        height 1.226667rem /* 46/37.5 */
        text-align center
        line-height 1.226667rem
        color #666666
    .right
      width 72%
      .products_Img
        width 6.8rem /* 255/37.5 */
        height 2.026667rem /* 76/37.5 */
      .products_title
        font-size .426667rem /* 16/37.5 */
        font-weight 700
      .a_con
        display flex
        align-items center
        font-size .373333rem /* 14/37.5 */
        background-color #f5f5f5
        margin .266667rem .266667rem /* 10/37.5 */
      .a_Img
        width 1.866667rem /* 70/37.5 */
        height 1.866667rem /* 70/37.5 */
        margin 0 .133333rem /* 5/37.5 */ /* 10/37.5 */
      .b_con
        // width 2.32rem /* 87/37.5 */
        // height 2.133333rem /* 80/37.5 */
        display flex
        justify-content space-around
        flex-wrap wrap
      .b_box
        width 2.32rem /* 87/37.5 */
        height 2.133333rem /* 80/37.5 */
        text-align center
      .b_Img
        width 1.386667rem /* 52/37.5 */
        height 1.386667rem /* 52/37.5 */
</style>
