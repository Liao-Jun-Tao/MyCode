import { defineStore } from "pinia";

import { getSwiperList } from "@/service/home.js";
import { getCridList } from "@/service/home.js";
import { getProductList } from "@/service/home.js";

export const useHomeStore = defineStore("swiper", {
  state: () => {
    return {
      swiperList: [],
      cridList: [],
      productList: [],
    };
  },
  actions: {
    async getSwiperList() {
      const { result } = await getSwiperList();
      console.log(result);
      this.swiperList = result;
    },
    async getCridList() {
      const { result } = await getCridList();
      console.log(result);
      this.cridList = result;
    },
    async getProductList() {
      const { result } = await getProductList();
      console.log(result);
      this.productList = result;
    },
  },
});
