<template>
      <div>

      </div>
</template>

<script setup lang="ts">
// const emit = defineEmits(['change',7
const emit = defineEmits<{
      (e: 'change'): void
      (e: 'u pdate',value: string):void
}>()
emit('change',12)
</script>

<style scoped>

</style>