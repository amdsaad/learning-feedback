<template>
  <header class="py-4">
    <nav class="container mx-auto flex justify-between items-center">
      <NuxtLink to="/">
        LOGO
      </NuxtLink>
      <ul
        class="flex items-center gap-4"
      >
        <li
          v-for="link in links"
          :key="link.id"
        >
          <NuxtLink :to="link.href">
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts" setup>
const links = ref([
  {
    id: 1,
    name: 'Dashboard',
    href: '/dashboard',
  },
  {
    id: 2,
    name: 'Projects',
    href: '/projects',
  },
  {
    id: 3,
    name: 'Settings',
    href: '/settings',
  },
])
</script>

<style></style>
