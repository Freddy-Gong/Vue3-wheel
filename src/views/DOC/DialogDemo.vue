<template>
  <div>
    <div>Dialog示例</div>
    <h1>示例1</h1>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="visible" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
      <template v-slot:content>
        <div>h1</div>
        <div>h2</div>
      </template>
      <template v-slot:title>
        <strong>标题</strong>
      </template>
    </Dialog>
    <h1>示例2</h1>
    <Button @click="showDialog">show</Button>
  </div>
</template>

<script lang='ts'>
import Dialog from "../../lib/Dialog.vue";
import Button from "../../lib/Button.vue";
import { ref } from "vue";
import { openDialog } from "../../lib/openDialog";

export default {
  components: { Dialog, Button },
  setup() {
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };
    const f1 = () => {
      console.log(1);
    };
    const f2 = () => {
      console.log(2);
    };
    const showDialog = () => {
      openDialog({ title: "标题", content: "你好" });
    };
    return { visible, toggle, f1, f2, showDialog };
  },
};
</script>

<style lang="scss" scoped>
</style>