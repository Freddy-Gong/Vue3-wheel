<demo>
Disabled API
</demo>
<template>
  <div>
    <p class="disable-content">
      We can disable some buttons to prevent unauthorized users from clicking.
    </p>
    <div class="disable-button">
      <Button disabled>disable button</Button>
      <Button theme="link" disabled>disable link</Button>
      <Button theme="text" disabled>disable text</Button>
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