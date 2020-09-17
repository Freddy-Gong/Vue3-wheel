<template>
  <div class="topnav">
    <span @click="toggleMenu" class="toggleAside"></span>
    <div class="logo">
      <span>LOGO</span>
    </div>
    <input type="text" />
    <div class="menu">
      <span>设置1</span>
      <span>设置2</span>
      <span>设置3</span>
      <span>设置4</span>
    </div>
    <span class="toggleAside2"></span>
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
  > .toggleAside {
    display: none;
    width: 24px;
    height: 24px;
    background: black;
    margin-left: 16px;
  }
  > .toggleAside2 {
    width: 24px;
    height: 24px;
    background: white;
    margin-left: 16px;
    display: none;
  }
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
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > input {
      display: none;
    }
    > .toggleAside {
      display: inline-block;
    }
    > .toggleAside2 {
      display: inline-block;
    }
  }
}
</style>