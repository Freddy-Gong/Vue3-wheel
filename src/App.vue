<template>
  <router-view />
</template>

<script lang='ts'>
import { provide, ref } from "vue";
export default {
  name: "App",
  setup() {
    const asidVisibile = ref(false);
    provide("asidVisibile", asidVisibile);
  },
};
</script>
