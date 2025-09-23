<script setup lang="ts">

defineProps<{
  name: string
  url: string
  icon: string
  alt: string
}>()
</script>

<template>
  <a :href="url" target="_blank" class="w-10 p-3 bg-[#4c4c4c] rounded-full block"><img :src="icon" :alt="alt"></a>
</template>