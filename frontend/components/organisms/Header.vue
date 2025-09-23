<script setup lang="ts">
import { LogoMain, Navbar } from "@/components";
import logo from "@/assets/img/logo.png";
</script>

<template>
  <header class="h-[64px] bg-[#1a1a1a]">
    <div class="container mx-auto flex items-center gap-7 h-full">
      <LogoMain :src="logo" alt="MAMEN.ID" class="invert" />
      <Navbar class="font-semibold" />
    </div>
  </header>
</template>
