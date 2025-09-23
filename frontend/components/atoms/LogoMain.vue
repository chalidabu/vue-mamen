<script setup lang="ts">

defineProps<{
  src: string
  alt: string
}>()
</script>

<template>
  <div>
    <img 
      :src="src" 
      :alt="alt"
      class="h-[29px]"
    >
  </div>
</template>