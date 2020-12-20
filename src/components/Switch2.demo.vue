<demo>Disable Exapmle</demo>

<template>
  <Switch v-model:value="bool" disabled />
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
    const bool = ref(false);
    return { bool };
    return {
      bool,
    };
  },
};
</script>
