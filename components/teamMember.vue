<template>
  <li class="max-w-xl tect-center cursor-pointer" @click="handleTeamModal">
    <img src="https://avatar.iran.liara.run/public" alt="" class="w-40 mx-auto mb-4" />
    <h1>{{ m.name }}</h1>
  </li>
</template>

<script lang="ts" setup>
const props = defineProps(["m"]);
const m = computed(() => props.m);

const {openTeamModal,activeMember} = useShared();

const handleTeamModal = () => {
  activeMember.value = m.value;
  openTeamModal.value = !openTeamModal.value;
};

</script>

<style></style>
