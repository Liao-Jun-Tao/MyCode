import { defineStore } from "pinia";

import { getIconList } from '@/service/home.js'

export const useHomeStore = defineStore('icon',{
    state: ()=>{
        return {
            iconList:[]
        }
    },
    actions: {
        async getIconList() {
            const { result } = await getIconList();
            console.log(result);
            this.iconList = result
        },
    }
        
    
})