<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue'
import { useHead } from '@unhead/vue'

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
  <main class="grid grid-cols-6 xl:grid-cols-12 container-padding bg-white lg:h-screen overflow-auto">
    <h1 class="pb-[2rem] xl:pb-[4rem] col-span-6 xl:col-span-12 text-center">
      Mes projets
    </h1>
    <div class="col-span-6 xl:col-span-12 xl:col-start-1">
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
              <img class="rounded-lg w-full h-full object-contain" src="../assets/projects/rickAndMorty.png" alt="image de prévisualisation du project Rick et Morty" />
            </template>
            <template #tags>
              <li class="tags">Vue.js</li>
              <li class="tags">ECharts</li>
              <li class="tags">TailwindCSS</li>
            </template>
            <template #links>
              <li class="hover:scale-125 hover:duration-200">
                <a href="https://rickandmorty-2il.pages.dev/" target="_blank">
                  <img
                    width="32px"
                    height="32px"
                    src="../assets/icons/www.svg"
                    alt="Internet logo cliquable pour une redirection vers un hébergement du projet"
                  >
                </a>
              </li>
              <li class="hover:scale-125 hover:duration-200">
                <a href="https://github.com/Faudelhadroug/RickAndMorty" target="_blank">
                  <img
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
              Interactive Grid
            </template>
            <template #description>
              Grille intéractive pour trouver le chemin plus court, possibilité de mettre des murs, de déplacer le début et la fin. Projet toujours en cours de dévelopement (Animation css, nombre d'algo disponible, ajouts de jeu sur la grille...)
            </template>
            <template #image>
              <img class="rounded-lg w-full h-full object-conver" src="../assets/projects/pathfinder-visualizer.png" alt="image de prévisualisation du project Rick et Morty" />
            </template>
            <template #tags>
              <li class="tags">Vue.js</li>
              <li class="tags">Vitest</li>
              <li class="tags">TailwindCSS</li>
              <li class="tags">Algorithmie</li>
              <li class="tags">Data Structure</li>
            </template>
            <template #links>
              <li class="hover:scale-125 hover:duration-200">
                <a href="https://interactive-grid.pages.dev/" target="_blank">
                  <img
                    width="32px"
                    height="32px"
                    src="../assets/icons/www.svg"
                    alt="Internet logo cliquable pour une redirection vers un hébergement du projet"
                  >
                </a>
              </li>
              <li class="hover:scale-125 hover:duration-200">
                <a href="https://github.com/Faudelhadroug/Interactive-Grid" target="_blank">
                  <img
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
