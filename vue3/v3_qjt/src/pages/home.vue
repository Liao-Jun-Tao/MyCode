<template>
  <div>home
    <el-button>默认按钮</el-button>
    <div @click="add">
      {{ count }}
    </div>
    
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
// 数据在store中,  如何去拿到?
let store = useStore()  // 仓库
// console.log(store.state.count);
let count = computed(() => store.state.count)
function add() {
  store.commit('add')
}

</script>
<style>

</style>