<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue'
</script>

<template>
  <main class="container-padding container-stretch bg-white h-screen overflow-auto">
    <h1 class="pb-[2rem]">
      Mes projets
    </h1>
    <div>
      <ul class="grid gap-y-[2rem] md:gap-x-[2rem] lg:grid-cols-2 xl:grid-cols-3">
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
