<template>
    <div class="page">
        <header>header</header>
        <main></main>
        <footer>
            <Navbar></Navbar>
        </footer>
    </div>
</template>

<script setup>
import Navbar from '@/components/nav-bar/nav-bar.vue'



</script>

<style lang="stylus" scoped>
.page
    display flex
    flex-direction column
    main
        flex 1
</style>