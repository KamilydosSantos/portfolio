<template>
  <div class="m-8">
    <PersonalPresentation />
  </div>
</template>

<script>
import PersonalPresentation from "./components/PersonalPresentation.vue";

export default {
  name: "App",
  components: {
    PersonalPresentation,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");

#app {
  font-family: "Poppins", sans-serif;
}
</style>
