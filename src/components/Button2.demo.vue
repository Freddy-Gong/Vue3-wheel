<demo>
Size API
</demo>
<template>
  <div class="buttons">
    <p>
      We can change the size of button, link and text to adapt various content
    </p>
    <h3>Button</h3>

    <div>
      <Button size="big">big!big!</Button>
      <Button>normal.</Button>
      <Button size="small">small.small</Button>
    </div>
    <h3>Link</h3>

    <div>
      <Button theme="link" size="big">big!big!</Button>
      <Button theme="link">normal.</Button>
      <Button size="small" theme="link">small.small</Button>
    </div>
    <h3>Text</h3>

    <div>
      <Button size="big" theme="text">big!big!</Button>
      <Button theme="text">normal.</Button>
      <Button size="small" theme="text">small.small</Button>
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
.buttons {
  > h3 {
    display: flex;
    margin: 8px 0;
  }
  > div {
    display: flex;
    margin: 8px 0;
    align-items: center;
  }
  > p {
    margin: 16px 0;
  }
}
</style>