<template>
  <component :is="iconName" />
</template>

<script>
export default {
  name: "DynamicIcon",
  props: {
    iconName: String
  },
  components: {
    HtmlIcon: () => import("./HtmlIcon.vue"),
    CssIcon: () => import("./CssIcon.vue"),
    JavaScriptIcon: () => import("./JavaScriptIcon.vue"),
    VueJsIcon: () => import("./VueJsIcon.vue"),
  }
}
</script>

<style>

</style>