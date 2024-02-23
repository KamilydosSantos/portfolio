<template>
  <div class="bg-customBeige rounded-3xl">
    <img class="rounded-t-3xl" :src="image" alt="" />
    <div class="flex flex-col gap-4 p-6">
      <h3 class="font-bold text-2xl">{{ name }}</h3>
      <p>
        {{ description }}
      </p>
      <ProjectStacks :stacks="stacks" />
      <div class="flex gap-4">
        <LinkButton class="flex justify-center" :url="deploy"
          ><DeployIcon
        /></LinkButton>
        <LinkButton class="flex justify-center" :url="github"
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
  props: {
    name: String,
    description: String,
    deploy: String,
    github: String,
    image: String,
    stacks: Array,
  },
};
</script>

<style></style>
