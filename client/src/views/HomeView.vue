<script setup lang="ts"></script>

<template>
  <main>
    <section
      id="herosection"
      class="container-padding container-stretch text-center bg-white h-full"
    >
      <h1 class="flex-center">
        Faudel Développeur Full-Stack
      </h1>
      <h2 class="flex-center pb-[1rem]">
        Je conçoit, design et code des solutions web
      </h2>
      <div class="pb-[2rem] space-y-[1rem]">
        <p>
          Hey, bienvenue sur mon portfolio, ma zone créatif où je
          partage:
          <br>
          <span class="clickeable-dark">
            <a href="/blog">du savoir</a>
          </span>,
          <span class="clickeable-dark">
            <a href="/arts">mes créations artistique</a>
          </span>, ainsi que
          <span class="clickeable-dark">
            <a href="/projects">mes travaux</a>
          </span>.
        </p>
        <p>
          Spécialisation particulière dans les ecosystèmes
          <a class="font-bold" href="https://nuxt.com/" target="_blank">Nuxt</a>/<a class="font-bold" href="https://vuejs.org/" target="_blank">Vue</a>/<a class="font-bold" href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank">Javascript</a>(w/ Typescript).
          <span class="clickeable-dark">
            <a href="/profile">
              Pour en savoir plus sur mes compétences et ma
              personnalité cliquez ici.
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
            <a class="clickeable-dark" href="/profil/lectures">
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
                class="flex items-center space-x-[0.5rem]"
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
                class="flex items-center space-x-[0.5rem]"
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
