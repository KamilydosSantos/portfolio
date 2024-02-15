<template>
  <div class="flex gap-4">
    <LinkButton
      class="flex justify-center"
      url="https://www.linkedin.com/in/kamilydossantos/"
    >
      <LinkedInIcon />
    </LinkButton>
    <LinkButton
      class="flex justify-center"
      url="https://github.com/KamilydosSantos"
    >
      <GitHubIcon />
    </LinkButton>
  </div>
</template>

<script>
import LinkButton from "./LinkButton.vue";
import LinkedInIcon from "./icons/LinkedInIcon.vue";
import GitHubIcon from "./icons/GitHubIcon.vue";

export default {
  name: "SocialMedia",
  components: {
    LinkButton,
    LinkedInIcon,
    GitHubIcon,
  },
};
</script>

<style></style>
