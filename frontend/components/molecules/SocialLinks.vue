<script setup lang="ts">
import { SocialButton } from "@/components";
import instagramIcon from "@/assets/img/logo-ig.png";
import twitterIcon from "@/assets/img/logo-x.png";
import spotifyIcon from "@/assets/img/logo-sp.png";
import youtubeIcon from "@/assets/img/logo-yt.png";

const socialMedia = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/mamen.ld?utm_source=ig_web_button_share_sheet&igsh=MW1sNjBlc2UxZTgxbw==",
    icon: instagramIcon,
    alt: "MAMEN.ID Instagram",
  },
  {
    name: "Twitter",
    url: "https://x.com/MAMENOFFICIAL",
    icon: twitterIcon,
    alt: "MAMEN.ID X",
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/show/3mZaixB9zIUiQwbe2Msqit?si=cc64470dabe2447a",
    icon: spotifyIcon,
    alt: "MAMEN.ID Spotify",
  },
  {
    name: "Youtube",
    url: "https://youtube.com/@mamenid?si=E3YBmDzbhCts7NOs",
    icon: youtubeIcon,
    alt: "MAMEN.ID Youtube",
  },
];
</script>

<template>
  <SocialButton
    v-for="item in socialMedia"
    :key="item.name"
    :name="item.name"
    :url="item.url"
    :icon="item.icon"
    :alt="item.alt"
  />
</template>
