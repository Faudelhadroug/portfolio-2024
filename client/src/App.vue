<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <NavBar class="text-white" />
  <RouterView class="text-dark-75" />
</template>
