<script>
import NavBar from './components/NavBar.vue';

export default {
  data() {
    return {
      loading: true
    }
  },
  components: {
    'nav-bar': NavBar
  },
  // 生命周期
  mounted() {
    console.log('挂载了');
  }
}
</script>

<template>
 <div class="container mb-5">
  <nav-bar></nav-bar>
  <div style="max-width: 90%;width: 500px;margin: auto;">
    <b v-if="loading">Loading</b>
  </div>
 </div>
</template>

<style scoped>

</style>
