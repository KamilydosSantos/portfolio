<template>
  <div class="relative">
    <div class="p-8 z-10">
      <HardSkills />
      <h2 class="text-2xl text-white font-bold py-12">Sobre mim</h2>
      <div class="flex">
        <div class="w-60"></div>
        <div class="flex flex-col gap-6">
          <p class="text-white text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </p>
          <p class="text-white text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </p>
          <p class="text-white text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </p>
        </div>
      </div>
    </div>
    <div
      class="absolute bg-customBlack w-full bottom-0 left-0"
      style="height: 90%; z-index: -1"
    ></div>
  </div>
</template>

<script>
import HardSkills from "./HardSkills.vue";

export default {
  name: "AboutMe",
  components: {
    HardSkills,
  },
};
</script>

<style></style>
