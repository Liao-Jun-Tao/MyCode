<template>
	<li
		@mouseenter="mouseHandler(true)"
		@mouseleave="mouseHandler(false)"
		:style="{ backgroundColor: bgColor, color: myColor }">
		<label>
			<input type="checkbox" v-model="isCompleted" />
			<span>{{ todo.title }}</span>
		</label>
		<button class="btn btn-danger" v-show="isShow" @click="delTodo">
			删除
		</button>
	</li>
</template>

<script setup lang="ts">
	import { ref, computed } from 'vue';
	import { Todo } from '@/types/Todo';
	const props = defineProps({
		todo: {
			type: Object as () => Todo,
			required: true
		},
		deleteTodo: {
			type: Function,
			required: true
		},
		index: {
			type: Number,
			required: true
		},
		updateTodo: {
			type: Function,
			required: true
		},
	});
	const bgColor = ref('white');
	const myColor = ref('black');
	const isShow = ref(false);
      const isCompleted = ref(true);
	const mouseHandler = (flag: boolean) => {
		if (flag) {
			myColor.value = 'green';
			bgColor.value = 'pink';
			isShow.value = true;
		} else {
			myColor.value = 'black';
			bgColor.value = 'white';
			isShow.value = false;
		}
	};
	const delTodo = () => {};
</script>

<style scoped></style>
