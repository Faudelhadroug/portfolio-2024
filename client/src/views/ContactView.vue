<script setup lang="ts">
import ContactForm from '@/components/ContactForm.vue'
</script>

<template>
  <main class="container-padding bg-dark text-white">
    <p class="font-bold">
      Me contacter
    </p>
    <p class="pb-[1rem]">
      Vous pouvez me contacter avec mon email suivante: hadroug.faudel@gmail.com ou via le formulaire ci-dessous. Les informations que vous envoyez seront utiliser seulement afin de vous recontacter.
    </p>
    <div class="outline outline-1 p-[2rem]">
      <ContactForm />
    </div>
  </main>
</template>
