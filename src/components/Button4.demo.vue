<demo>
Disabled API
</demo>
<template>
  <div>
    <p class="disable-content">
      We can disable some buttons to prevent unauthorized users from clicking.
    </p>
    <div class="disable-button">
      <Button disabled>button</Button>
      <Button theme="link" disabled>link</Button>
      <Button theme="text" disabled>text</Button>
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
.disable-content {
  display: block;
  margin: 16px 0;
}
.disable-button {
  display: flex;
}
</style>