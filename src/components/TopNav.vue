<template>
  <div class="topnav">
    <span @click="toggleMenu" v-if="toggleMenuButtonVisible" class="toggleAside">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#i-fenye" />
      </svg>
    </span>
    <router-link to="/" class="logo">
      <img src="../assets/logo.jpg" />
    </router-link>
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
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
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
$color: #007974;
.topnav {
  color: $color;
  flex-wrap: nowrap;
  background: white;
  background: linear-gradient(
    145deg,
    rgb(227, 255, 253, 1) 0%,
    rgba(183, 233, 230, 1) 100%
  );
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0px;
  border-bottom: 1px solid gray;
  position: relative;
  z-index: 10;
  > .toggleAside {
    display: none;
    width: 24px;
    height: 24px;
    margin-left: 16px;
    > svg {
      width: 24px;
      height: 24px;
    }
  }
  > .toggleAside2 {
    width: 24px;
    height: 24px;
    margin-left: 16px;
    display: none;
  }
  > .logo {
    margin-left: 16px;
    > img {
      width: 4em;
      height: 4em;
    }
  }
  > input {
    margin-left: auto;
    margin-right: 16px;
    padding: 0 16px;
    width: 400px;
    height: 3em;
    border: 1px solid gray;
    border-radius: 15px;
    &:focus {
      outline: none;
    }
  }
  > .menu {
    display: flex;
    justify-content: center;
    align-items: center;
    > span {
      display: inline-block;
      margin: 4px 16px;
      font-size: 16px;
    }
  }
  @media (max-width: 800px) {
    > input {
      display: none;
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