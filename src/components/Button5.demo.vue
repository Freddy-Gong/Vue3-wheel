<demo>
Loading API
</demo>
<template>
  <div>
    <p class="loading-content">
      When click button to get some data or response, we should alter the user
      that this action is ongoing and will take some time.
    </p>
    <div class="loading_button">
      <Button loading>loading</Button>
      <Button>loaded</Button>
    </div>
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
}
.loading-content {
  margin: 16px 0;
}
</style>