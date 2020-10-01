<template>
  <div>
    <h1>Switch 组件示例</h1>
    <Demo :component="Switch1Demo" />
    <Demo :component="Switch2Demo" />
  </div>
</template>

<script lang='ts'>
import Demo from "../../components/Demo.vue";
import Switch1Demo from "../../components/Switch1.demo.vue";
import Switch2Demo from "../../components/Switch2.demo.vue";
import "prismjs";
import "prismjs/themes/prism-okaidia.css";
const Prism = (window as any).Prism;

export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Switch1Demo,
      Switch2Demo,
      Prism,
    };
  },
};
</script>
