<template>
  <component :is="iconName"></component>
</template>

<script>
import HtmlIcon from "./HtmlIcon.vue";
import CssIcon from "./CssIcon.vue";
import JavaScriptIcon from "./JavaScriptIcon.vue";
import VueJsIcon from "./VueJsIcon.vue";

export default {
  name: "DynamicIcon",
  props: {
    iconName: String,
  },
  components: {
    HtmlIcon,
    CssIcon,
    JavaScriptIcon,
    VueJsIcon,
  },
};
</script>

<style></style>
