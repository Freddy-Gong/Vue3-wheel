<template>
  <div class="topnav">
    <span
      @click="toggleMenu"
      v-if="toggleMenuButtonVisible"
      class="toggleAside"
    >
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#i-fenye" />
      </svg>
    </span>
    <router-link to="/" class="logo">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#i-ziyuan" />
      </svg>
      <span>Fusion</span>
    </router-link>
    <div class="menu">
      <span>Home</span>
      <span>About</span>
      <span>Features & Documentation</span>
      <span>Downloads</span>
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
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0px;
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
    color: white;
    font-size: 32px;
    margin-left: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    > svg {
      width: 2em;
      height: 2em;
      margin-right: 8px;
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
    color: rgb(171, 125, 208);
    margin-right: 80px;
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