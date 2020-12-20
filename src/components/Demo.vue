<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <Button @click="codeVisible = !codeVisible" v-if="codeVisible"
        >Hide code</Button
      >
      <Button @click="codeVisible = !codeVisible" v-else>Check code</Button>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre class="language-html" v-html="html" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import "prismjs";
import "prismjs/themes/prism-okaidia.css";
import Button from "../lib/Button.vue";
const Prism = (window as any).Prism;

export default defineComponent({
  props: {
    component: Object,
  },
  components: {
    Button,
  },
  setup(props) {
    const codeVisible = ref(false);
    const html = computed(() => {
      return Prism.highlight(
        props.component.__sourceCode,
        Prism.languages.html,
        "html"
      );
    });
    return { Prism, html, codeVisible };
  },
});
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  width: 90%;
  > div {
    display: flex;
  }
  > h2 {
    width: 100%;
    display: flex;
    align-items: flex-start;
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      width: 100%;
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>