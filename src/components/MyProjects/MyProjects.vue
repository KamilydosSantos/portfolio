<template>
  <div class="p-8">
    <h2 class="text-3xl text-black font-bold py-8">Projetos</h2>
    <div class="flex flex-col gap-8">
      <div v-for="(project, index) in projects" :key="index">
        <ProjectCard
          :name="project.name"
          :image="project.image"
          :description="project.description"
          :deploy="project.deploy"
          :github="project.github"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";
import axios from "axios";

export default {
  name: "MyProjects",
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    getProjects() {
      axios
        .get("http://localhost:3000/projects")
        .then((response) => {
          this.projects = response.data;
          console.log(this.projects);
        })
        .catch((error) => {
          console.log("Erro", error);
        });
    },
  },
  mounted() {
    this.getProjects();
  },
};
</script>

<style></style>
