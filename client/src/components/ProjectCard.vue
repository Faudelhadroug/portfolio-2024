<script setup lang="ts">

</script>

<template>
  <div class="rounded outline h-full w-full outline-primary-dark p-[1rem] flex flex-col justify-between shadow-lg shadow-primary-dark">
    <div>
      <div class="flex flex-col pb-[1rem]">
        <p class="font-bold text-xl pb-[1rem]">
          <slot name="heading" />
        </p>
        <p class="pb-[1rem]"><slot name="description" /></p>
        <slot name="image"></slot>
      </div>
    </div>
    <ul class="flex flex-wrap justify-center">
      <slot name="tags" />
    </ul>
    <ul class="flex flex-wrap justify-center space-x-[1rem] md:space-x-[2rem] pt-[1rem]">
      <slot name="links" />
    </ul>
  </div>
</template>
