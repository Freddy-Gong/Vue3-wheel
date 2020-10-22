<template>
  <article class="markdown-body" v-html="content"></article>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    content: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang='scss' scoped>
article {
  > h1 {
    border: 1px solid red;
  }
}
</style>