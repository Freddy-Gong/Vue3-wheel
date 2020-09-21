<template>
  <div>
    <h1>示例1</h1>
    <Tabs v-model:selected="currentTitle">
      <Tab title="标题1">内容1</Tab>
      <Tab title="标题2222">内容2</Tab>
    </Tabs>
  </div>
</template>

<script>
import Tabs from "../../lib/Tabs.vue";
import Tab from "../../lib/Tab.vue";
import { ref } from "vue";
export default {
  components: { Tabs, Tab },
  setup() {
    const currentTitle = ref("标题1");
    return { currentTitle };
  },
};
</script>

<style lang="scss" scoped>
</style>