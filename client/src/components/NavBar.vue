<script setup lang="ts">
import { ref } from 'vue'

const navigationTabs = [
  { text: 'Accueil', link: '/' },
  { text: 'Mon profil', link: '/profil' },
  { text: 'Projects', link: '/projects' },
  { text: 'Arts', link: '/arts' },
  { text: 'Blog', link: '/blog' },
  { text: 'Contact', link: '/contact' },
]
const openMenuMobile = ref(false)
</script>

<template>
  <nav>
    <div class="md:hidden">
      <ul v-if="!openMenuMobile" class="flex justify-between p-[8px]">
        <li>
          <a href="/">
            <img
              width="32px"
              height="32px"
              src="../assets/logos/logo.png"
              alt="Hamburger image to open the menu"
              @click="openMenuMobile = !openMenuMobile"
            >
          </a>
        </li>
        <li>
          <img
            width="32px"
            height="32px"
            src="../assets/icons/hamburgerMenu.svg"
            alt="Hamburger image to open the menu"
            @click="openMenuMobile = !openMenuMobile"
          >
        </li>
      </ul>
      <div v-else class="flex flex-row-reverse p-[8px]">
        <img
          width="32px"
          height="32px"
          src="../assets/icons/closeMenu.svg"
          alt="Cross for closing the menu"
          @click="openMenuMobile = !openMenuMobile"
        >
      </div>
      <ul
        v-if="openMenuMobile"
        class="flex flex-col items-center z-20 space-y-[32px] py-[32px]"
      >
        <li
          v-for="tab in navigationTabs"
          :key="tab.link"
          class="text-center"
          :class="$route.path === tab.link ? 'font-bold' : ''"
        >
          <a :href="tab.link">{{ tab.text }}</a>
        </li>
      </ul>
    </div>
    <div class="hidden md:block pb-[32px]">
      <ul class="flex p-[8px] items-center space-x-[32px]">
        <li>
          <a href="/">
            <img
              width="32px"
              height="32px"
              src="../assets/logos/logo.png"
              alt="Hamburger image to open the menu"
              @click="openMenuMobile = !openMenuMobile"
            >
          </a>
        </li>
        <li v-for="tab in navigationTabs" :key="tab.link" :class="$route.path === tab.link ? 'font-bold' : ''">
          <a :href="tab.link">{{ tab.text }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
