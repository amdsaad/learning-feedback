<template>
  <div class="fixed bottom-4 right-4 z-50">
    <ul class="flex flex-col gap-4">
      <SharedNotificationItem
        v-for="n in notifications"
        :key="n.id"
        :item-data="n"
        @clear-notification="notifications.splice(notifications.indexOf(n), 1)"
      />
    </ul>
  </div>
</template>

<script setup>
const { notifications } = useNotification();
</script>

<style></style>
