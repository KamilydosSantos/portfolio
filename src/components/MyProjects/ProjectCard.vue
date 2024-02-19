<template>
  <div class="bg-customBeige rounded-3xl">
    <img class="rounded-t-3xl" src="../../assets/project.png" alt="" />
    <div class="p-6">
      <h3>Nome do Projeto</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor.
      </p>
      <ProjectStacks />
      <div class="flex gap-4">
        <LinkButton
          class="flex justify-center"
          url="https://github.com/KamilydosSantos/bikcraft"
          ><DeployIcon
        /></LinkButton>
        <LinkButton
          class="flex justify-center"
          url="https://github.com/KamilydosSantos/bikcraft"
          ><GitHubIcon
        /></LinkButton>
      </div>
    </div>
  </div>
</template>

<script>
import DeployIcon from "../icons/DeployIcon.vue";
import GitHubIcon from "../icons/GitHubIcon.vue";
import LinkButton from "../LinkButton.vue";
import ProjectStacks from "./ProjectStacks.vue";

export default {
  name: "ProjectCard",
  components: {
    ProjectStacks,
    DeployIcon,
    GitHubIcon,
    LinkButton,
  },
};
</script>

<style></style>
