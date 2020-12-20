<demo>
Loading API
</demo>
<template>
  <div class="loading_button">
    <Button loading>loading</Button>
    <Button>loaded</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>
<style lang="scss">
.loading_button {
  display: flex;
  justify-content: center;
}
</style>