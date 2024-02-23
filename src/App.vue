<template>
  <div>
    <PersonalPresentation />
    <AboutMe />
    <MyProjects />
    <GlobalFooter />
  </div>
</template>

<script>
import AboutMe from "./components/AboutMe/AboutMe.vue";
import PersonalPresentation from "./components/PersonalPresentation/PersonalPresentation.vue";
import MyProjects from "./components/MyProjects/MyProjects.vue";
import GlobalFooter from "./components/Footer/GlobalFooter.vue";

export default {
  name: "App",
  components: {
    PersonalPresentation,
    AboutMe,
    MyProjects,
    GlobalFooter,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");

#app {
  font-family: "Poppins", sans-serif;
}
</style>
