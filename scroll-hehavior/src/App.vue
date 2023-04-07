
<template>
    <div>
        <header class="home-header wrap"
        :class="{'active':state.headerScroll}"
        >
            <div class="item item-logo"></div>
            <div class="item item-main"></div>
            <div class="item"></div>
            <div class="item"></div>
        </header>
        <div class="box" style="height: 3000px;"></div>
    </div>
</template>

<script setup>
import {reactive, nextTick} from 'vue '
import _ from 'lodash'
const state = reactive({
    headerScroll:false
})

nextTick(()=>{
    const handleScroll = () =>{
    let scrollTop = window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop

        if(scrollTop > 100) {
            if (!state.headerScroll) {
                state.headerScroll = true
            } else {
                if(state.headerScroll) {
                    state.headerScroll = false
                }
            }
        }
    }
    window.addEventListener('scroll',_.throttle(handleScroll,100))
})
</script>

<style lang="stylus"> 
*{
    margin:0;
    padding: 0;
}

.home-header
    position fixed
    left 0
    top 0
    width 100%
    height 1.333333rem
    display flex 
    justify-content space-around
    align-items center
    line-height 1.333333rem
    padding 0 15px
    box-sizing border-box
    font-size .4rem
    color #fff
    z-index 9999
    transition background-color .5s
    &.active
        background-color pink
        .item_logo
            transition all .3
            width 0
    .item
        width 1.066667rem
        height 1.066667rem
        margin 0 .266667rem
        background-color green
        &.item_main
            flex 1
            background-color blue

</style>