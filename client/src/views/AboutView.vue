<script setup>
import { computed } from 'vue'

const specialisations = ['Javascript', 'Nodejs', 'Vue 3 (composition API)', 'Nuxt', 'MongoDB', 'Web design UX/UI', 'Linux (ubuntu)']
const advanceds = ['HTML', 'CSS', 'TailwindCSS', 'Express.js', 'Mongoose', 'Pinia / Vuex', 'Git', 'Github', 'SEO', 'AGILE SCRUM & KANBAN', 'Midjourney', 'Trello']
const mids = ['Typescript', 'Vitest', 'Jest', 'Notion', 'Figma', 'Photoshop', 'Illustrator']
const learnings = ['Computer science']

const actualAge = computed(() => {
  const actualDate = new Date()
  const age = actualDate.getMonth >= 11 && actualDate.getDate() >= 15 ? actualDate.getFullYear() - 1999 : actualDate.getFullYear() - 2000
  return age
})
</script>

<template>
  <aside class="hidden md:flex fixed px-[2rem] z-10 bg-white h-screen">
    <div class="bg-primary-dark p-[2rem] m-auto rounded-md shadow-lg shadow-dark-65">
      <p class="font-bold pb-[2rem] text-white">
        Navigation rapide
      </p>
      <div class="">
        <ul class="space-y-[1rem]">
          <li><a class="clickeable" href="#histoire">Mon histoire</a></li>
          <li><a class="clickeable" href="#personnalite">Ma personnalité</a></li>
          <li><a class="clickeable" href="#competences">Mes compétences</a></li>
          <li><a class="clickeable" href="#lectures">Mes lectures</a></li>
        </ul>
      </div>
    </div>
  </aside>
  <main class="md:pl-[18rem] container-padding bg-white">
    <section>
      <div class="py-[1rem]">
        <h2 id="histoire" class="pb-[1rem]">
          Mon histoire
        </h2>
        <div>
          <p>Mon nom est Faudel Hadroug. J'ai actuellement {{ actualAge }} ans et je suis un développeur full-stack spécialisé dans les framework Vue/Nuxt. J'apprécie l'informatique et les jeux-vidéos depuis mon plus jeune âge.</p>
          <br>
          <p>
            Ma première expérience dans le développement web date de 2017 avec Wordpress et l'apprentissage des bases du HTML/CSS. En 2019 je rejoins le Samsung Campus formation Epitech de 2 ans à Paris où je finis diplômé en 2021 avec une première expérience professionnel remote en alternance pendant 1 an.
            <img class="py-[1rem]" src="https://www.usine-digitale.fr/mediatheque/7/8/3/000359387_1200x800_c.jpg" width="512px" height="512px" alt="Photo Samsung Campus">
            <br>
            En 2022 je mets le développement informatique de côté pour apprendre en auto-didact de nouvelles compétences (cryptomonnaie, finance, trading, marketing) avec une veille technologique sur mes framework favoris et en codant quelques projets qui resteront dans l'ombre.
          </p>
          <br>
          <p>
            Fin 2023 je décide de me remettre à fond dans le développement informatique. Nous voilà désormais en 2024 avec mon objectif de trouver une entreprise dans laquelle évoluer et produire du code de qualité facilement lisible, améliorer mes compétences personnelle (soft-skills) et techniques. Tout en apprenant en auto-didact l'informatique (computer science) sur mon temps libre.
          </p>
        </div>
      </div>
      <div class="py-[1rem]">
        <h2 id="personnalite" class="pb-[1rem]">
          Ma personnalité
        </h2>
        <p>
          Compétiteur avec un esprit d'équipe et de nature calme, je suis un anarchiste du développement personnel et du dépassement de soi-même. L'évolution de dépasser nos limites et de celle qu'on nous impose.
          En dehors du développement informatique j'aime beaucoup le sport, la musique, la photo/vidéo ainsi qu'apprendre.
        </p>
      </div>
      <div class="py-[1rem]">
        <h2 id="competences" class="pb-[1rem]">
          Mes compétences
        </h2>
        <div class="pt-[1rem]">
          <ol class="space-y-[1rem]">
            <li>
              <span class="font-bold">Specialisation:</span>
              <ul class="flex flex-col flex-wrap md:flex-row">
                <li v-for="(specialisation, index) in specialisations" :key="specialisation" class="pr-[0.5rem]">
                  {{ specialisation }}{{ index === specialisations.length - 1 ? '.' : ',' }}
                </li>
              </ul>
            </li>
            <li>
              <span class="font-bold">Maitrisée:</span>
              <ul class="flex flex-col flex-wrap md:flex-row">
                <li v-for="(advanced, index) in advanceds" :key="advanced" class="pr-[0.5rem]">
                  {{ advanced }}{{ index === advanceds.length - 1 ? '.' : ',' }}
                </li>
              </ul>
            </li>
            <li>
              <span class="font-bold">Intermédiaire:</span>
              <ul class="flex flex-col flex-wrap md:flex-row">
                <li v-for="(mid, index) in mids" :key="mid" class="pr-[0.5rem]">
                  {{ mid }}{{ index === mids.length - 1 ? '.' : ',' }}
                </li>
              </ul>
            </li>
            <li>
              <span class="font-bold">En apprentissage:</span>
              <ul class="flex flex-col flex-wrap md:flex-row">
                <li v-for="(learning, index) in learnings" :key="learning" class="pr-[0.5rem]">
                  {{ learning }}{{ index === learnings.length - 1 ? '.' : ',' }}
                </li>
              </ul>
            </li>
            <li>
              <span class="font-bold">Langue:</span>
              <ul class="flex flex-col flex-wrap ">
                <li>Français: langue maternelle</li>
                <li>Anglais: B1/B2</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      <div class="py-[1rem]">
        <h2 id="lectures" class="pb-[1rem]">
          Mes lectures
        </h2>
        <div class="pt-[1rem]">
          <h3 class="pb-[1rem]">
            Actuellement en train de lire:
          </h3>
          <a
            href="https://www.amazon.com/Algorithm-Design-Manual-Steven-Skiena/dp/1849967202"
            target="_blank"
          >
            <div class="flex-center md:justify-start space-y-[0.5rem]">
              <img
                width="256px"
                height="256px"
                src="../assets/books/The_Algorithm_Design_Manual-cover.jpeg"
                alt="Cover du livre 'Skiena, Steven S. - The algorithm Design Manual"
              >
            </div>
          </a>
        </div>
      </div>
    </section>
  </main>
</template>
