<template>
  <div class="topnav">
    <div class="logo">
      <span @click="toggleMenu">LOGO</span>
    </div>
    <input type="text" />
    <div class="menu">
      <span>设置1</span>
      <span>设置2</span>
      <span>设置3</span>
      <span>设置4</span>
    </div>
  </div>
</template>

<script lang='ts'>
import { inject, Ref } from "vue";
export default {
  setup() {
    const asidVisibile = inject<Ref<boolean>>("asidVisibile");
    const toggleMenu = () => {
      console.log(1);
      asidVisibile.value = !asidVisibile.value;
      console.log(asidVisibile.value);
    };
    return { toggleMenu };
  },
};
</script>

<style lang="scss" scoped>
.topnav {
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;
  border-bottom: 1px solid gray;
  > .logo {
    margin: 4px 16px;
  }
  > input {
    margin-left: auto;
    margin-right: 16px;
    padding: 0 16px;
    width: 400px;
    border: 1px solid gray;
    border-radius: 15px;
    &:focus {
      outline: none;
    }
  }
  > .menu {
    > span {
      margin: 4px 16px;
      font-size: 16px;
    }
  }
}
</style>