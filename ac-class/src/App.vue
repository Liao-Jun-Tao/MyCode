<template>
    <div>
        <div class="color" :class="{'active':state.headerScroll}"></div>
        <div style="height:3000px; width:100vw;"></div>
    </div>

    
</template>

<script setup>
import _ from 'lodash'
import {   reactive,nextTick } from  'vue'
const state = reactive({
    headerScroll:false
})

nextTick(()=>{
    const handleScroll = () =>{
    let scrollTop = window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop
        if(scrollTop > 500) {
            if (!state.headerScroll) {
                state.headerScroll = true
             }  // else {
            //     if(state.headerScroll) {
            //         state.headerScroll = false
            //     }
            // }
        }
       
    }
    
    window.addEventListener('scroll',_.throttle(handleScroll,500))
})




</script>
const 
<style >
*{
padding: 0;
margin: 0;
}
.color{
    width: 100vw;
    height: 40px;
    position :fixed;
    z-index: 9999;
    background-color: #000;
}
.active{
background-color:pink;
}
</style>