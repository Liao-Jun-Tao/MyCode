<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex' // hooks 函数式编程
import GlobalHeader from './components/GlobalHeader.vue'
import { GlobalDataProps } from './types' 
import { getColumn } from './api/column'
// 1. pinia hooks 更好 defineStore 
// 2. vuex 对ts 支持不如pinia 
//ref reactive 私有状态
// computed  store.state
const store = useStore<GlobalDataProps>()
const currentUser = computed(() => store.state.user)
getColumn()
    .then(data => {
        console.log(data)
    })
</script>

<template>
    <div class="container-fluid px-0 flex-shrink-0">
        <global-header :user="currentUser"/>
    </div>
    <router-view/>
</template>

<style>

</style>
