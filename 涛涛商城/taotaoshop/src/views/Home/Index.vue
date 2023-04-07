<template>
  <div class="page">
    <header>
        <Navbar></Navbar>
    </header>
    <main></main>
    <footer></footer>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.Vue";
</script>

<style lang="stylus" scoped>
.page
    display flex
    flex-direction column
    main
        flex 1
</style>
