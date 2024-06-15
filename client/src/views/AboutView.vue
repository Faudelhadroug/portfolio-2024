<script setup lang="ts">
import { computed } from 'vue'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Mon profil - Faudel Portfolio',
   meta: [
    {
      name: 'description',
      content: 'Retrouvez le profil développeur de Faudel Hadroug; histoire, compétences, personnalité, lectures...',
    },
  ],
})

const specialisations = ['Javascript', 'Nodejs', 'Vue 3 (composition API)', 'Nuxt', 'MongoDB', 'Web design UX/UI', 'Linux (ubuntu)']
const advanceds = ['HTML', 'CSS', 'TailwindCSS', 'Express.js', 'Mongoose', 'Pinia / Vuex', 'PHP', 'React.js', 'Git', 'Github', 'SEO', 'AGILE SCRUM & KANBAN', 'Midjourney', 'Trello']
const mids = ['Typescript', 'Vitest', 'Jest', 'Notion', 'Figma', 'Photoshop', 'Illustrator']
const learnings = ['Computer science']

const actualAge = computed(() => {
  const actualDate = new Date()
  const age = actualDate.getMonth() >= 11 && actualDate.getDate() >= 15 ? actualDate.getFullYear() - 1999 : actualDate.getFullYear() - 2000
  return age
})
</script>

<template>
  <main class="grid grid-cols-6 xl:grid-cols-12 bg-white">
    <aside class="hidden xl:flex justify-center items-center h-screen col-span-3">
      <div class="fixed">
        <div class="bg-primary-dark p-[2rem] m-auto rounded-md shadow-lg shadow-dark-65">
          <p class="font-bold pb-[2rem] text-white">
            Navigation rapide
          </p>
          <div class="">
            <ul class="space-y-[1rem]">
              <li><a class="clickeable" href="#histoire">Mon histoire</a></li>
              <li><a class="clickeable" href="#personnalite">Ma personnalité</a></li>
              <li><a class="clickeable" href="#competences">Mes compétences</a></li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
    <section class="col-span-6 xl:col-span-9  container-padding">
      <div class="py-[1rem]" id="histoire">
        <h2 class="pb-[1.5rem]">
          En savoir plus sur moi
        </h2>
        <div>
          <p>Mon nom est Faudel Hadroug. J'ai actuellement {{ actualAge }} ans. J'apprécie l'informatique et les jeux-vidéos, depuis mon plus jeune âge.</p>
          <p>
            Ma première expérience dans le développement web, date de 2017 avec Wordpress ainsi que l'apprentissage des bases du HTML/CSS. En 2019 je rejoins le Samsung Campus formation Epitech de 2 ans à Paris, où je finis diplômé en 2021, avec une première expérience professionnel remote en alternance pendant 1 an.
            <img class="py-[1rem] w-[1024px]" src="https://www.usine-digitale.fr/mediatheque/7/8/3/000359387_1200x800_c.jpg" width="512px" height="512px" alt="Photo Samsung Campus">
          </p>
          <p>Actuellement je suis un développeur full-stack spécialisé dans les framework Vue/Nuxt. Pour le back-end je maîtrise Node.js et PHP mais je me réoriente vers les languages Go et C++.</p>
        </div>
      </div>
      <div class="py-[1rem]">
        <h2 id="personnalite" class="pb-[1.5rem]">
          Ma personnalité
        </h2>
        <p>
          Compétiteur avec un esprit d'équipe, je suis de nature calme et j'apprécie énormément le dépassement de soi-même, l'évolution de dépasser nos limites et de celle qu'on nous impose.
          En dehors du développement informatique j'aime beaucoup le sport, la musique, la photo/vidéo et un tas d'autre chose.
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
              <ul class="flex flex-col flex-wrap xl:flex-row">
                <li v-for="(specialisation, index) in specialisations" :key="specialisation" class="pr-[0.5rem]">
                  {{ specialisation }}{{ index === specialisations.length - 1 ? '.' : ',' }}
                </li>
              </ul>
            </li>
            <li>
              <span class="font-bold">Maitrisée:</span>
              <ul class="flex flex-col flex-wrap xl:flex-row">
                <li v-for="(advanced, index) in advanceds" :key="advanced" class="pr-[0.5rem]">
                  {{ advanced }}{{ index === advanceds.length - 1 ? '.' : ',' }}
                </li>
              </ul>
            </li>
            <li>
              <span class="font-bold">Intermédiaire:</span>
              <ul class="flex flex-col flex-wrap xl:flex-row">
                <li v-for="(mid, index) in mids" :key="mid" class="pr-[0.5rem]">
                  {{ mid }}{{ index === mids.length - 1 ? '.' : ',' }}
                </li>
              </ul>
            </li>
            <li>
              <span class="font-bold">En apprentissage:</span>
              <ul class="flex flex-col flex-wrap xl:flex-row">
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
    </section>
  </main>
</template>
