<template>
  <button
    class="gulu-switch"
    @click="toggle"
    :class="{ 'gulu-checked': value }"
  >
    <span></span>
  </button>
</template>

<script lang='ts'>
import { ref } from "vue";

export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return { toggle };
  },
};
</script>

<style lang="scss" >
$h: 22px;
$h2: $h - 4px;
.gulu-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: gray;
  border-radius: $h/2;
  position: relative;
  &:focus {
    outline: none;
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.gulu-checked {
    background: linear-gradient(
      180deg,
      rgba(209, 60, 70, 1) 0%,
      rgba(125, 68, 147, 1) 100%
    );
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
    &:active {
      > span {
        width: $h2 + 4px;
        margin-left: -4px;
      }
    }
  }
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2/2;
    transition: all 0.25s;
  }
}
</style>