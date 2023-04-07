<template>
    <div class="k-input">
        <input class="k-input__inner"/>
    </div>
</template>

<script setup>

</script>
    
<style lang="stylus" scoped>
.k-input
    font-size 14px
    display inline-block
    position relative 
    .k-input__inner
        background-color #fff
        border-radius 4px
        border 1px solid #dcbfe6
        box-sizing border-box
        color #606266
        display inline-block
        height 40px
        line-height 40px
        outline none
        padding 0 15px
        width 100%
        &::placeholder
            color #c2c3ca
        &:hover
            border 1px solid #c0c4cc
        &:focus
            border 1px solid #409eff
        
        

</style>