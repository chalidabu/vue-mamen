<script setup lang="ts">
import { LogoMain, Navbar, SocialLinks } from "@/components";
import logo from "@/assets/img/logo.png";
</script>

<template>
  <footer class="bg-[#333]">
    <div class="container mx-auto flex gap-7 justify-between items-center py-8">
      <LogoMain :src="logo" alt="MAMEN.ID" class="invert" />

      <div class="flex flex-col gap-1">
        <h2>Explore</h2>
        <Navbar class="text-3xl font-bold" />
      </div>

      <div class="flex flex-col gap-1">
        <h2>Channels</h2>
        <div class="flex gap-3">
          <SocialLinks />
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
h2 {
  color: white;
  margin: 0;
  font-size: 0.875rem;
  font-weight: bold;
}
</style>
