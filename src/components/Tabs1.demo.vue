<demo>
常规使用
</demo>
<template>
  <Tabs v-model:selected="x">
    <Tab title="Tabs1">content1</Tab>
    <Tab title="Tabs2">content2</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
import { ref } from "vue";
export default {
  components: {
    Tabs,
    Tab,
  },
  setup() {
    const x = ref("Tabs1");
    return {
      x,
    };
  },
};
</script>