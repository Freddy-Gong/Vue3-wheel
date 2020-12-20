<template>
  <div class="switch">
    <h1>Switch Exapmle</h1>
    <p>Switching Selector.</p>
    <h2>When to use</h2>
    <p>
      If you need to represent the switching between two states or on-off state.
    </p>
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
<style  lang='scss' >
.switch {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > h1 {
    margin-bottom: 16px;
  }
  > p {
    margin-bottom: 16px;
  }
}
</style>
