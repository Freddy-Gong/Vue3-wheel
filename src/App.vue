<template>
  <router-view />
</template>

<script lang='ts'>
import { provide, ref } from "vue";
import { router } from "./router";
export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;
    const asidVisibile = ref(width <= 500 ? false : true);
    provide("asidVisibile", asidVisibile);
    router.afterEach(() => {
      if (width <= 500) {
        asidVisibile.value = false;
      }
    });
  },
};
</script>
