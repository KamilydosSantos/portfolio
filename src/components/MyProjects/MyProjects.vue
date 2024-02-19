<template>
  <div class="p-8">
    <h2 class="text-3xl text-black font-bold py-8">Projetos</h2>
    <ProjectCard />
  </div>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";

export default {
  name: "MyProjects",
  components: {
    ProjectCard,
  },
};
</script>

<style></style>
