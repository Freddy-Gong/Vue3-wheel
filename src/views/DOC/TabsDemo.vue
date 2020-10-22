<template>
  <h1 class="tab">Tabs 示例</h1>
  <Demo :component="Tabs1Demo" />
</template>

<script lang="ts">
import Demo from "../../components/Demo.vue";
import Tabs1Demo from "../../components/Tabs1.demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Tabs1Demo,
    };
  },
};
</script>
<style lang="scss" scope>
h1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
p {
  text-align: left;
}
pre {
  text-align: left;
}
</style>