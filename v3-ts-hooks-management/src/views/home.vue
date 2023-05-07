<template>
   <div>
      <v-header />
      <v-sidebar />
      <div class="content-box">  
         <div class="content" >
            <router-view />
         </div>
      </div>
   </div>
</template>

<script lang="ts" setup>
import vHeader from '../components/header.vue';
import vSidebar from '../components/sidebar.vue';
</script>

<style lang="scss" scoped>

</style>