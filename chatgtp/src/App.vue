<template>
	<div id="app">
		<div class="wrapper" ref="wrapper">
			<div class="content" ref="content">
				<div v-for="item in items" :key="item.id" class="item">
					{{ item.name }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll';
	import { onMounted, onUnmounted, ref } from 'vue';

	export default {
		setup() {
			const wrapper = ref(null);
			const content = ref(null);

			const items = [
				{ id: 1, name: 'Apple' },
				{ id: 2, name: 'Banana' },
				{ id: 3, name: 'Orange' },
				{ id: 4, name: 'Pear' },
				{ id: 5, name: 'Pineapple' },
				{ id: 6, name: 'Grape' },
				{ id: 7, name: 'Watermelon' },
				{ id: 8, name: 'Cherry' },
				{ id: 9, name: 'Mango' }
			];

			onMounted(() => {
				const bs = new BScroll(wrapper.value, {
					scrollX: true,
					scrollY: false
				});
			});

			onUnmounted(() => {
				bs.destroy();
			});

			return { wrapper, content, items };
		}
	};
</script>

<style scoped></style>
