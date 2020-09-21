<template>
  <div>
    <h1>示例1</h1>
    <Tabs>
      <Tab title="标题1">内容1</Tab>
      <Tab title="标题2">内容2</Tab>
    </Tabs>
  </div>
</template>

<script>
import Tabs from "../../lib/Tabs.vue";
import Tab from "../../lib/Tab.vue";
export default {
  components: { Tabs, Tab },
};
</script>

<style lang="scss" scoped>
</style>