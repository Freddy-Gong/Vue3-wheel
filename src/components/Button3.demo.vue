<demo>
Level API
</demo>
<template>
  <div class="level-button">
    <p>
      We can change the leve of button, link and text to remind the user of the
      importance of the action.
    </p>
    <h3>Button</h3>

    <div>
      <Button level="main">Main</Button>
      <Button>Normal</Button>
      <Button level="danger">Danger</Button>
    </div>
    <h3>Link</h3>
    <div>
      <Button theme="link" level="main">Main</Button>
      <Button theme="link">Normal</Button>
      <Button theme="link" level="danger">Danger</Button>
    </div>
    <h3>Text</h3>
    <div>
      <Button theme="text" level="main">Main</Button>
      <Button theme="text">Normal</Button>
      <Button theme="text" level="danger">Danger</Button>
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
.level-button {
  > div {
    display: flex;
    margin: 8px 0;
  }
  > h3 {
    display: flex;
  }
  > p {
    margin: 16px 0;
  }
}
</style>