import { defineStore } from "pinia";

import { getUserList } from '@/service/user.js'

export const useUserStore = defineStore('icon',{
    state: ()=>{
        return {
            userList:[]
        }
    },
    actions: {
        async getUserList() {
            const { result } = await getUserList();
            console.log(result);
            this.userList = result
        },
    }
        
    
})