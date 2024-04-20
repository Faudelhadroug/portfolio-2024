<script setup lang="ts"></script>

<template>
  <main class="pt-[4rem] h-screen overflow-auto text-center bg-white text-dark-75">
    <section
      id="herosection"
      class="container-padding grid grid-cols-6 xl:grid-cols-12"
    >
      <h1 class="col-span-6 xl:col-span-12">
        Faudel Développeur Full-Stack
      </h1>
      <h2 class="col-span-6 xl:col-start-3 xl:col-span-8 pb-[1rem]">
        Je conçoit, design et code des solutions web
      </h2>
      <div class="col-span-6 xl:col-span-6 xl:col-start-4 pb-[2rem] space-y-[1rem]">
        <p>
          Hey, bienvenue sur mon portfolio, ma zone créatif où je
          partage:
          <span class="clickeable-dark">
            <a href="/projects">mes travaux</a>
          </span>
          <!-- , ainsi que
          <span class="cursor-not-allowed">
            <a href="/blog">du savoir </a>
          </span>et
          <span class="cursor-not-allowed">
            <a href="/arts">mes créations artistique </a>
          </span>. -->
        </p>
        <p>
          Spécialisation particulière dans les ecosystèmes
          <a class="font-bold" href="https://nuxt.com/" target="_blank">Nuxt</a>/<a class="font-bold" href="https://vuejs.org/" target="_blank">Vue</a>/<a class="font-bold" href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank">Javascript</a> (w/ <a class="font-bold" href="https://www.typescriptlang.org/" target="_blank">Typescript</a>).
          <br>
          <span class="clickeable-dark">
            <a href="/profil">
              Pour en savoir plus sur mes compétences et ma
              personnalité cliquer ici.
            </a>
          </span>
        </p>
        <div class="flex-center">
          <div class="flex-center flex-col space-y-[0.5rem]">
            <p>Ma lecture principale actuelle:</p>
            <a
              href="https://www.amazon.com/Algorithm-Design-Manual-Steven-Skiena/dp/1849967202"
              target="_blank"
            >
              <div class="flex-center flex-col space-y-[0.5rem]">
                <p class="font-bold">
                  Skiena, Steven S. - The algorithm Design
                  Manual.
                </p>
                <img
                  width="128px"
                  height="128px"
                  src="../assets/books/The_Algorithm_Design_Manual-cover.jpeg"
                  alt="Cover du livre 'Skiena, Steven S. - The algorithm Design Manual"
                >
              </div>
            </a>
            <a class="clickeable-dark" href="/profil#lectures">
              <p>
                Retrouvez toute mes autres lectures actuelle et
                finis.
              </p>
            </a>
          </div>
        </div>
        <div class="flex-center flex-col space-x-[1rem]">
          <p>Je suis aussi présent ici:</p>
          <ul class="flex space-x-[1rem]">
            <li>
              <a
                class="flex items-center space-x-[0.5rem] hover:text-primary-dark"
                href="https://www.github.com/faudelhadroug"
                target="_blank"
              >
                <p class="font-bold">Github</p>
                <img
                  width="32px"
                  height="32px"
                  src="../assets/logos/github.svg"
                  alt="Github logo cliquable pour une redirection sur mon profil"
                >
              </a>
            </li>
            <li>
              <a
                class="flex items-center space-x-[0.5rem] hover:text-primary-dark"
                href="https://www.linkedin.com/in/faudel-hadroug/"
                target="_blank"
              >
                <p class="font-bold">LinkedIn</p>
                <img
                  width="32px"
                  height="32px"
                  src="../assets/logos/In-Blue-128.png"
                  alt="LinkedIn logo cliquable pour une redirection sur mon profil"
                >
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>
