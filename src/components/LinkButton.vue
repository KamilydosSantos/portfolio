<template>
  <a
    class="block bg-customBlack rounded-xl p-4 w-full"
    :href="url"
    target="_blank"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "LinkButton",
  props: {
    url: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
