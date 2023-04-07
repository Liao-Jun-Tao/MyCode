import { defineStore } from "pinia";
import { getSwiperList,getSortList,getProductList } from "@/service/home.js";

export const useHomeStore = defineStore("home", {
  state: () => {
    return {
      swiperList: [],
      sortList:[],
      productList:[],
      loading: true,
    };
  },
  actions: {
    async getSwiperList() {
      const { result } = await getSwiperList();
    //   console.log(result);
      this.swiperList = result;
    },

    async getSortList() {
        const { result } = await getSortList();
        // console.log(result);
        this.sortList = result;
      },

      async getProductList() {
        const { result } = await getProductList();
        console.log(result);
        this.productList = result;
      },


  },
});
