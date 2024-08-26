<template>
  <div class="container text-center py-8">
    <button
      class="bg-blue-500 text-white px-4 py-2"
      @click="openModal = !openModal"
    >
      Open Terma Modal
    </button>

    <ul class="grid grid-cols-2 items-center gap-16">
      <TeamMember v-for="m in boardMembers" :key="m.name" :m="m" />
    </ul>
  </div>
</template>

<script lang="ts" setup>
const { openModal } = useShared();

const boardMembers = [
  {
    name: "John Doe",
    role: "CEO",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://avatar.iran.liara.run/public",
  },
  {
    name: "Jane Doe",
    role: "CTO",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://avatar.iran.liara.run/public",
  },
  {
    name: "John Smith",
    role: "CFO",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://avatar.iran.liara.run/public",
  },
  {
    name: "Jane Smith",
    role: "COO",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://avatar.iran.liara.run/public",
  }
];
</script>

<style></style>
