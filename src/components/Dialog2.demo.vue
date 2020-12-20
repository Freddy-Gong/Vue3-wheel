<demo>
The other method to set Dialog in code
</demo>
<template>
  <div>
    <Button @click="showDialog">open dialog</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import { ref, h } from "vue";
import { openDialog } from "../lib/openDialog";
export default {
  components: {
    Button,
  },
  setup() {
    const showDialog = () => {
      openDialog({
        title: h("strong", {}, "Title"),
        content: "Hello!",
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
      });
    };
    return {
      showDialog,
    };
  },
};
</script>