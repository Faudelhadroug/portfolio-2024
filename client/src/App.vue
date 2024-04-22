<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Faudel Portfolio',
   meta: [
    {
      name: 'description',
      content: 'Portfolio web développeur Faudel Hadroug',
    },
  ],
})
</script>

<template>
  <NavBar class="text-white" />
  <Transition
    enter-active-class="duration-300 ease-out"
    enter-from-class="transform opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="transform opacity-0"
  >
    <RouterView />
  </Transition>
</template>
