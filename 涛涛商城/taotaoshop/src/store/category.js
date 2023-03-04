import { defineStore } from "pinia";
import { getCategoryList } from "@/service/category.js";

export const useCategoryStore = defineStore("category",{
  state: () => {
    return {
      categoryList: [],
    };
  },
  actions: {
    async getCategoryList() {
      const { result } = await getCategoryList();
      console.log(result);
      this.categoryList = result;
    },
  },
});
