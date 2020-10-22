<template>
  <div class="dialog">
    <h1>Dialog 示例</h1>
    <Demo :component="Dialog1Demo" />
    <Demo :component="Dialog2Demo" />
  </div>
</template>

<script lang="ts">
import Demo from "../../components/Demo.vue";
import Dialog1Demo from "../../components/Dialog1.demo.vue";
import Dialog2Demo from "../../components/Dialog2.demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Dialog1Demo,
      Dialog2Demo,
    };
  },
};
</script>
<style lang="scss">
.dialog {
  > h1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
