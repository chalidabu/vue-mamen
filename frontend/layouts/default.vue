<script setup lang="ts">
import { Header, Footer } from '~/components';
</script>

<template>
  <div class="flex flex-col justify-between min-h-dvh">
    <Header />
    <slot />
    <Footer />
</div>
</template>