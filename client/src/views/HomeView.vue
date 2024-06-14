<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: 'Accueil - Faudel Portfolio',
   meta: [
    {
      name: 'description',
      content: 'Page d\'accueil du portfolio faudel.dev',
    },
  ],
})

</script>

<template>
  <main class="pt-[4rem] h-screen overflow-auto text-center md:text-left bg-white text-dark-75 w-full">
    <section
      id="herosection"
      class="pt-[8rem] px-[0.5rem] py-[4rem] md:px-[1rem] xl:px-[8rem] xl:pt-[8rem] 2xl:px-[20rem] 2xl:pt-[10rem]"
    >
    <div class="container hidden xl:block">
      <div class="circle-container" v-for="(item, index) in 100" :key="index">
        <div class="circle"></div>
      </div>
    </div>
    <div>
      <p class="text-[48px] md:text-[64px] tracking-tighter pb-[2rem] md:pb-[4rem] xl:pb-[6rem] xl:pt-[2rem]">Hey, bienvenue.</p>
      <h1 class="pb-[2rem] lg:whitespace-nowrap">
        Je suis Faudel, Développeur Full-Stack
      </h1>
        <div class="space-y-[0.5rem] ml-1">
          <p>
            Je conçois, design et code des solutions web. Spécialisation dans les ecosystème <a class="font-bold" href="https://vuejs.org/" target="_blank">Vue</a>/<a class="font-bold" href="https://nuxt.com/" target="_blank">Nuxt</a>/<a class="font-bold" href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank">Javascript</a> (avec <a class="font-bold" href="https://www.typescriptlang.org/" target="_blank">Typescript</a>).
          </p>
          <p>Je vis en France et suis diplomé d'Epitech Paris en tant qu'intégrateur et développeur web.</p>
          <p class="font-bold text-secondary-dark">Actuellement disponible pour un poste en CDI ou des missions Freelance.</p>
          <div class="flex justify-center md:justify-start items-center space-x-[2rem] pt-[1rem] pb-[1rem] xl:pb-[4rem]">
            <a href="/projets"><button class="btn-dark">Mes projets</button></a>
            <a href="/contact"><button class="text-primary-dark hover:text-secondary-dark font-bold">Me contacter &gt;</button></a>
          </div>
        </div>
    </div>
    
    </section>
  </main>
</template>

<style>
.holo{
  background-image: linear-gradient(
    to right,
    rgba(120, 184, 247, 0.4),
    rgba(255, 183, 197, 0.92),
    rgba(192, 252, 180, 0.88),
    rgba(188, 149, 214, 0.66)
  );
}
.holo2{
  background-image: linear-gradient(
    to right,
    rgba(230, 150, 80, 0.75),
    rgba(100, 200, 50, 0.95),
    rgba(220, 130, 240, 0.70),
    rgba(140, 210, 190, 0.85)
  );
}

.holo3{
  background-image: linear-gradient(
    to right,
    rgba(159, 10, 192, 0.7),
    rgba(200, 235, 43, 0.75),
    rgba(179, 229, 215, 0.85),
    rgba(140, 224, 97, 0.95)
  );
}

</style>
