<template>
    <div class="flex overflow-x-auto scrollbar-hidden ml-1">
      <!-- 在列表外部添加一个插槽，插槽的名字为 header，用于插入标题 -->
      <slot name="header"></slot>
      <ul class="flex whitespace-nowrap mt-1 px-1">
        <!-- 在列表项 li 中添加一个插槽，插槽的名字为 item，用于插入每个建议项的内容 -->
        <li
          class="bg-light-300 mx-0.5 px-1 leading-3 whitespace-nowrap rounded-4xl flex items-center justify-center"
          v-for="item in suggestion"
          :key="item.id"
        >
          <slot name="item" :suggestion="item"></slot>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { reactive, toRefs } from 'vue';
  
  const SuggestionList = {
    name: 'SuggestionList',
    props: {
      suggestions: {
        type: Array,
        required: true,
      },
    },
    setup(props) {
      const state = reactive({
        suggestion: props.suggestions,
      });
  
      return {
        ...toRefs(state),
      };
    },
  };
  
  
  </script>
  
  <style scoped>
  /* 隐藏左右拖动的导航条 */
  ::-webkit-scrollbar {
    display: none;
  }
  </style>

