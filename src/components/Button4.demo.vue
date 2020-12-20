<demo>
Disabled API
</demo>
<template>
  <Button disabled>disable button</Button>
  <Button theme="link" disabled>disable link</Button>
  <Button theme="text" disabled>disable text</Button>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>