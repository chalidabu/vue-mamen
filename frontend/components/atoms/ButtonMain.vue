<script setup lang="ts">
defineProps<{
  label: string
  variant?: 'primary' | 'secondary'
}>()
</script>

<template>
  <button
  :class="[
    'px-4 py-2 rounded-xl font-semibold transition-colors duration-200 cursor-pointer',
    variant === 'primary'
    ? 'bg-blue-600 text-white hover:bg-blue-700'
    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
  ]"
  type="button">
  {{ label }}
  </button>
</template>