<template>
  <div
    class="p-4 mb-4 text-sm rounded-md"
    role="alert"
    :class="{
      'bg-green-100 text-green-900': type === 'success',
      'bg-red-100 text-red-900': type === 'error',
    }"
  >
    {{ msg }}
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  msg: string
  type: 'success' | 'error'
}>()
const msg = computed(() => props.msg)
const type = computed(() => props.type)
</script>

<style></style>
