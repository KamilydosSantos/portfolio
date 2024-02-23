<template>
  <div class="flex gap-1">
    <DynamicIcon
      class="h-6"
      v-for="stack in stacks"
      :key="stack.id"
      :iconName="stack.icon"
    />
  </div>
</template>

<script>
import DynamicIcon from "../icons/DynamicIcon.vue";

export default {
  name: "ProjectStacks",
  props: {
    stacks: Array,
  },
  components: {
    DynamicIcon,
  },
};
</script>

<style></style>
