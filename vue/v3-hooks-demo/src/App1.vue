<template>
	<div>x: {{ x }} y: {{ y }}</div>
</template>

<script setup lang="ts">
import useMouse from './hooks/mouse'
const {x,y} = useMouse()
</script>

<style scoped></style>
