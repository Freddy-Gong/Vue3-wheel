<demo>Basic Exapmle</demo>

<template>
  <Switch v-model:value="bool" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Switch from "../lib/Switch.vue";
import { ref } from "vue";
export default {
  components: {
    Switch,
  },
  setup() {
    const bool = ref(true);
    return { bool };
    return {
      bool,
    };
  },
};
</script>
