<template>
  <div class="flex flex-col gap-6">
    <span class="text-2xl">Olá, me chamo</span>
    <h1 class="font-bold text-5xl text-customBlue">Kamily<br />dos Santos</h1>
    <h2 class="font-bold text-2xl text-customDarkBeige">Front-end Developer</h2>
    <SocialMedia />
  </div>
</template>

<script>
import SocialMedia from "./SocialMedia.vue";

export default {
  name: "PersonalPresentation",
  components: {
    SocialMedia,
  },
};
</script>

<style scoped lang="scss"></style>
