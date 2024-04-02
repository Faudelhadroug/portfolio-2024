<script setup lang="ts">

</script>

<template>
  <div class="rounded outline h-full w-full outline-primary-dark p-[1rem] flex flex-col justify-between">
    <div class="h-[20rem]">
      <div class="flex flex-col">
        <p class="font-bold text-xl">
          <slot name="heading" />
        </p>
        <p><slot name="description" /></p>
      </div>
    </div>
    <ul class="flex flex-wrap space-x-[1rem]">
      <slot name="languages" />
    </ul>
    <ul class="flex flex-wrap space-x-[1rem] pt-[1rem]">
      <slot name="links" />
    </ul>
  </div>
</template>
