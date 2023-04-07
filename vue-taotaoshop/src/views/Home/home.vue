<template>
    <div class="page">
        <header>
            <headerView />
        </header>
        <main>
            <SubBar /> 
        </main>
        <footer>
            <Navbar />
        </footer>
    </div>
</template>

<script setup>
import Navbar from '@/components/nav-bar/nav-bar.vue'
import headerView from '@/components/header/headerView.vue'
import SubBar from '@/components/sub-bar/sub-bar.vue'
</script>

<style lang="stylus" scoped>

.page
    width 100vw
    height calc(100vh - 1.333333rem)
    display flex
    flex-direction column
    main
        flex 1
        overflow-y scroll
       
        
</style>