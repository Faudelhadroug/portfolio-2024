<script setup lang="ts">
import ContactForm from '@/components/ContactForm.vue'
</script>

<template>
  <main class="grid grid-cols-6 xl:grid-cols-12 gap-y-[2rem] xl:gap-y-0 xl:gap-x-[1rem] container-padding bg-dark text-white xl:h-screen overflow-auto">
    <div class="col-span-6 xl:col-span-4">
      <p class="font-bold text-2xl pb-[1rem]">
        Me contacter
      </p>
      <p>
        Vous pouvez me contacter avec mon email suivante: hadroug.faudel@gmail.com ou via le formulaire. Les informations que vous envoyez seront utiliser seulement afin de vous recontacter.
      </p>
    </div>
    <div class="col-span-6 xl:col-span-8 outline outline-1 outline-primary-dark p-[2rem] h-fit">
      <ContactForm />
    </div>
  </main>
</template>
