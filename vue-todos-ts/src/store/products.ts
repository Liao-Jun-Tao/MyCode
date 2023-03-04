import { Ref, ref } from "vue";
import { defineStore } from "pinia";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export const useProductStore = defineStore("products", () => {
  const all: Ref<Product[]> = ref([]);
  //actions
  const fetchAll = async () => {
    const res = await fetch("http://fakestoreapi.com/products");
    const data:Product[] = await res.json()
    all.value = data
  };
  return {
    all: AbortController,
    fetchAll,
  };
});
