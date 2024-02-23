<template>
  <div class="flex justify-center gap-2 align-center">
    <div class="bg-customBeige p-2 rounded-xl self-center">
      <CssIcon />
    </div>
    <div class="bg-customBeige p-2 rounded-xl self-center"><HtmlIcon /></div>
    <div class="bg-customBeige p-2 rounded-xl self-center">
      <JavaScriptIcon />
    </div>
    <div class="bg-customBeige p-2 rounded-xl self-center"><VueJsIcon /></div>
    <div class="bg-customBeige p-2 rounded-xl self-center"><GitIcon /></div>
  </div>
</template>

<script>
import CssIcon from "../icons/CssIcon.vue";
import GitIcon from "../icons/GitIcon.vue";
import HtmlIcon from "../icons/HtmlIcon.vue";
import JavaScriptIcon from "../icons/JavaScriptIcon.vue";
import VueJsIcon from "../icons/VueJsIcon.vue";

export default {
  name: "HardSkills",
  components: {
    CssIcon,
    GitIcon,
    HtmlIcon,
    JavaScriptIcon,
    VueJsIcon,
  },
};
</script>

<style></style>
