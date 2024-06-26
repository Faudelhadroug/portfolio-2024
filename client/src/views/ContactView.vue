<script setup lang="ts">
import { useHead } from '@unhead/vue'
import ContactForm from '@/components/ContactForm.vue'

useHead({
  title: 'Me contacter - Faudel Portfolio',
  meta: [
    {
      name: 'description',
      content: 'Contacter Faudel Hadroug web développeur full stack spécialisée dans l\'ecosystem Vue',
    },
  ],
})
</script>

<template>
  <main class="mt-[1rem] md:mt-[4rem] container-padding bg-white text-dark lg:h-screen overflow-auto">
    <div class="pb-[2rem] ">
      <h1 class="font-bold text-2xl pb-[1rem] xl:pb-[2rem] text-center md:text-left">
        Me contacter
      </h1>
      <p>
        Vous pouvez me contacter avec mon email suivante: hadroug.faudel@gmail.com ou via le formulaire. Les informations que vous envoyez seront utiliser seulement afin de vous recontacter.
      </p>
    </div>
    <div class="outline outline-1 outline-primary-dark p-[2rem] h-fit shadow-lg shadow-primary">
      <ContactForm />
    </div>
  </main>
</template>
