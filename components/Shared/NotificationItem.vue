<template>
  <li
  @click="emit('clear-notification')"
    class="px-6 py-2 rounded-lg shadow-lg"
    :class="{
      'bg-green-500 text-white': i.type === 'success',
      'bg-red-500 text-white': i.type === 'error',
    }"
  >
    {{ i.msg }}
  </li>
</template>

<script setup>
const props = defineProps({
  itemData: Object,
});
const emit = defineEmits(["clear-notification"]);

const i = computed(() => props.itemData);

onMounted(() => {
  setTimeout(() => {
    emit("clear-notification");
  }, 5000);
});


</script>

<style></style>
