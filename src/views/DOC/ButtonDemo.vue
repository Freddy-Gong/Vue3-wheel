<template>
  <div class="button">
    <h1>Button Exapmle</h1>
    <h2>Design Principal</h2>
    <ul>
      <li>Guide users to achieve the desired actions.</li>
      <li>Prevent user to make mistakes.</li>
    </ul>
    <Demo :component="Button1Demo" />
    <h2>Other API</h2>
    <Demo :component="Button2Demo" />
    <Demo :component="Button3Demo" />
    <Demo :component="Button4Demo" />
    <Demo :component="Button5Demo" />
  </div>
</template>

<script lang="ts">
import Demo from "../../components/Demo.vue";
import Button1Demo from "../../components/Button1.demo.vue";
import Button2Demo from "../../components/Button2.demo.vue";
import Button3Demo from "../../components/Button3.demo.vue";
import Button4Demo from "../../components/Button4.demo.vue";
import Button5Demo from "../../components/Button5.demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo,
    };
  },
};
</script>
<style lang="scss">
.button {
  > h1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 16px;
  }
  > h2 {
    display: flex;
  }
  > ul {
    > li {
      display: flex;
      margin: 16px 0;
    }
  }
}
</style>