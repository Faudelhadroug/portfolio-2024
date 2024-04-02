<script setup lang="ts">
import ContactForm from '@/components/ContactForm.vue'
</script>

<template>
  <main class="container-padding container-stretch bg-dark text-white h-screen overflow-auto">
    <p class="font-bold text-2xl pb-[1rem]">
      Me contacter
    </p>
    <p class="pb-[2rem]">
      Vous pouvez me contacter avec mon email suivante: hadroug.faudel@gmail.com ou via le formulaire ci-dessous. Les informations que vous envoyez seront utiliser seulement afin de vous recontacter.
    </p>
    <div class="outline outline-1 outline-primary-dark p-[2rem]">
      <ContactForm />
    </div>
  </main>
</template>
