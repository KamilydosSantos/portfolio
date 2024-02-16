<template>
  <div>
    <PersonalPresentation />
    <AboutMe />
  </div>
</template>

<script>
import AboutMe from "./components/AboutMe/AboutMe.vue";
import PersonalPresentation from "./components/PersonalPresentation/PersonalPresentation.vue";

export default {
  name: "App",
  components: {
    PersonalPresentation,
    AboutMe,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");

#app {
  font-family: "Poppins", sans-serif;
}
</style>
