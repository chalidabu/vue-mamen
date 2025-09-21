<script setup lang="ts">
import { ref, onMounted } from "vue";

const message = ref<string>("");

onMounted(async () => {
  const res = await fetch("http://localhost:5000/api/hello");
  const data: { message: string } = await res.json();
  message.value = data.message;
});
</script>

<template>
  <div class="p-6">
    <h1>Nuxt + Express + Typescript</h1>
    <p>{{ message }}</p>
  </div>
</template>