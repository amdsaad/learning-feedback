<template>
  <p class="text-red-500 text-sm">
    {{ text }}
  </p>
</template>

<script lang="ts" setup>
const props = defineProps<{
  text: string
}>()
const text = computed(() => props.text)
</script>

<style>

</style>
