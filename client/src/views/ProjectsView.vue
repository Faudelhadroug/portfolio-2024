<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue'
</script>

<template>
  <main class="grid grid-cols-6 xl:grid-cols-12 container-padding bg-white xl:h-screen overflow-auto">
    <h1 class="pb-[2rem] col-span-6 xl:col-span-12 text-center">
      Mes projets
    </h1>
    <div class="col-span-6 xl:col-span-12 xl:col-start-1">
      <ul class="grid gap-y-[2rem] xl:gap-x-[2rem] lg:grid-cols-2 xl:grid-cols-3">
        <li>
          <ProjectCard>
            <template #heading>
              Portfolio
            </template>
            <template #description>
              Ma vitrine en ligne pour afficher mes compétences techniques et ma créativité, Ce projet à été conçu avec une attention particulière sur l'experience utilisateur (UX).
            </template>
            <template #languages>
              <li>Vue.js</li>
              <li>TailwindCSS</li>
            </template>
            <template #links>
              <li>
                <img
                  width="32px"
                  height="32px"
                  src="../assets/icons/www.svg"
                  alt="Github logo cliquable pour une redirection vers le projet"
                >
              </li>
              <li>
                <a href="https://github.com/Faudelhadroug/portfolio-2024" target="_blank">
                  <img
                    width="32px"
                    height="32px"
                    src="../assets/logos/github.svg"
                    alt="Github logo cliquable pour une redirection vers le projet"
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
