<script setup lang="ts">
import { useHead } from '@unhead/vue'
import ProjectCard from '../components/ProjectCard.vue'

useHead({
  title: 'Mes projets - Faudel Portfolio',
  meta: [
    {
      name: 'description',
      content: 'La liste complète de mes projets réalisée',
    },
  ],
})
</script>

<template>
  <main class="container-padding bg-white lg:h-screen overflow-auto">
    <h1 class="pb-[2rem] md:pb-[3rem] xl:pb-[4rem] pt-[3rem] text-center">
      Mes projets
    </h1>
    <div class="col-span-6 xl:col-span-12 xl:col-start-1 pb-[2rem]">
      <ul class="grid gap-y-[2rem] lg:gap-x-[1rem] xl:gap-x-[2rem] lg:grid-cols-2 xl:grid-cols-3">
        <li>
          <ProjectCard>
            <template #heading>
              Rick et Morty
            </template>
            <template #description>
              Afficher visuellement les informations des personnages de l'univers Rick et Morty grâce à une API publique. Avec les fonctionnalités suivante: bar de recherche, pagination, data visualisation.
            </template>
            <template #image>
              <a href="https://rickandmorty-2il.pages.dev/" target="_blank" class="flex space-x-[0.5rem]">
                <img class="rounded-lg w-full h-full object-contain" width="1213px" height="709px" src="../assets/projects/rickAndMorty.webp" alt="image de prévisualisation du project Rick et Morty">
              </a>
            </template>
            <template #tags>
              <li class="tags-language">
                Vue.js
              </li>
              <li class="tags">
                ECharts
              </li>
              <li class="tags">
                TailwindCSS
              </li>
            </template>
            <template #links>
              <li class="md:hover:scale-125 md:hover:duration-200">
                <a href="https://rickandmorty-2il.pages.dev/" target="_blank" class="flex space-x-[0.5rem]">
                  <p>Site internet</p>
                  <img
                    class="w-[32px] h-[32px]"
                    width="32px"
                    height="32px"
                    src="../assets/icons/www.svg"
                    alt="Internet logo cliquable pour une redirection vers un hébergement du projet"
                  >
                </a>
              </li>
              <li class="md:hover:scale-125 md:hover:duration-200">
                <a href="https://github.com/Faudelhadroug/RickAndMorty" target="_blank" class="flex space-x-[0.5rem]">
                  <p>Code source</p>
                  <img
                    class="w-[32px] h-[32px]"
                    width="32px"
                    height="32px"
                    src="../assets/logos/github.svg"
                    alt="Github logo cliquable pour une redirection vers le repository du projet"
                  >
                </a>
              </li>
            </template>
          </ProjectCard>
        </li>
        <li>
          <ProjectCard>
            <template #heading>
              Pathfinder visualizer
            </template>
            <template #description>
              Grille intéractive pour trouver le chemin plus court. Avec les fonctionnalités suivante: Choix de différents algorithmes, rajouter/supprimé des murs, déplacer le début et la fin.
            </template>
            <template #image>
              <a href="https://interactive-grid.pages.dev/" target="_blank" class="flex space-x-[0.5rem]">
                <img class="rounded-lg w-full h-full object-conver" width="1213px" height="640px" src="../assets/projects/pathfinder-visualizer.webp" alt="image de prévisualisation du project Rick et Morty">
              </a>
            </template>
            <template #tags>
              <li class="tags-language">
                Vue.js
              </li>
              <li class="tags">
                TailwindCSS
              </li>
              <li class="tags">
                Algorithmie
              </li>
              <li class="tags">
                Data Structure
              </li>
            </template>
            <template #links>
              <li class="md:hover:scale-125 md:hover:duration-200">
                <a href="https://interactive-grid.pages.dev/" target="_blank" class="flex space-x-[0.5rem]">
                  <p>Site internet</p>
                  <img
                    class="w-[32px] h-[32px]"
                    width="32px"
                    height="32px"
                    src="../assets/icons/www.svg"
                    alt="Internet logo cliquable pour une redirection vers un hébergement du projet"
                  >
                </a>
              </li>
              <li class="md:hover:scale-125 md:hover:duration-200">
                <a href="https://github.com/Faudelhadroug/Interactive-Grid" target="_blank" class="flex space-x-[0.5rem]">
                  <p>Code source</p>
                  <img
                    class="w-[32px] h-[32px]"
                    width="32px"
                    height="32px"
                    src="../assets/logos/github.svg"
                    alt="Github logo cliquable pour une redirection vers le repository du projet"
                  >
                </a>
              </li>
            </template>
          </ProjectCard>
        </li>
      </ul>
    </div>
  </main>
</template>
