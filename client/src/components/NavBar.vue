<script setup lang="ts">
import { ref } from 'vue'

const navigationTabs = [
  { text: 'Accueil', link: '/' },
  { text: 'Mon profil', link: '/profil' },
  { text: 'Projets', link: '/projets' },
  { text: 'Contact', link: '/contact' },
]
const openMenuMobile = ref(false)
</script>

<template>
  <nav class="container-navbar bg-primary-dark w-full xl:h-[5rem] fixed top-0 z-50 shadow-md shadow-secondary-dark">
    <div class="xl:hidden">
      <ul v-if="!openMenuMobile" class="flex justify-between items-center p-[0.5rem]">
        <li class="w-[64px] h-[64px]">
          <a href="/">
            <img
              width="64px"
              height="64px"
              src="../assets/logos/logo-white-contrast.webp"
              alt="Logo Faudel portfolio"
              @click="openMenuMobile = !openMenuMobile"
            >
          </a>
        </li>
        <li class="w-[50px] h-[50px]">
          <img
            width="50px"
            height="50px"
            src="../assets/icons/hamburgerMenu.svg"
            alt="Hamburger image to open the menu"
            @click="openMenuMobile = !openMenuMobile"
          >
        </li>
      </ul>
      <div v-else class="flex flex-row-reverse p-[0.5rem]">
        <img
          width="32px"
          height="32px"
          src="../assets/icons/closeMenu.svg"
          alt="Cross for closing the menu"
          class="w-[32px] h-[32px]"
          @click="openMenuMobile = !openMenuMobile"
        >
      </div>
      <ul
        v-if="openMenuMobile"
        class="flex flex-col items-center z-20 space-y-[2rem] py-[2rem]"
      >
        <li
          v-for="tab in navigationTabs"
          :key="tab.link"
          class="text-center hover:text-secondary"
          :class="$route.path === tab.link ? 'font-bold' : ''"
        >
          <a :href="tab.link">{{ tab.text }}</a>
        </li>
        <li class="w-[64px] h-[64px]">
          <a href="/">
            <img
              width="64px"
              height="64px"
              src="../assets/logos/logo-white-contrast.webp"
              alt="Logo Faudel portfolio"
              @click="openMenuMobile = !openMenuMobile"
            >
          </a>
        </li>
      </ul>
    </div>
    <div class="hidden xl:block">
      <ul class="flex-center space-x-[2rem]">
        <li class="w-[64px] h-[64px]">
          <a href="/">
            <img
              width="64px"
              height="64px"
              src="../assets/logos/logo-white-contrast.webp"
              alt="Logo Faudel portfolio"
              @click="openMenuMobile = !openMenuMobile"
            >
          </a>
        </li>
        <li v-for="tab in navigationTabs" :key="tab.link" :class="$route.path === tab.link ? 'font-bold' : ''">
          <a :href="tab.link" class="hover:text-secondary">{{ tab.text }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
