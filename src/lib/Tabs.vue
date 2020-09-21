<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav" ref="container">
      <div
        class="gulu-tabs-nav-item"
        v-for="(title,index) in titles"
        :ref="el=> {if(el) navItems[index]=el}"
        @click="select(title)"
        :key="index"
        :class="{selected:title===selected}"
      >{{title}}</div>
      <div ref="indicator" class="gulu-tabs-nav-indicator"></div>
    </div>

    <div class="gulu-tabs-content">
      <component class="gulu-tabs-content-item" :is="current" :key="current" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, onUpdated, ref, watchEffect } from "vue";
import Tab from "./Tab.vue";
export default {
  props: {
    selected: String,
  },
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs 子标签必须是 Tab");
      }
    });
    const navItems = ref<HTMLDivElement[]>([]);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    onMounted(() => {
      const divs = navItems.value;
      const result = divs.find((div) => div.classList.contains("selected"));
      const { width, left: left1 } = result.getBoundingClientRect();
      indicator.value.style.width = width + "px";
      const { left: left2 } = container.value.getBoundingClientRect();
      const left = left1 - left2;
      indicator.value.style.left = left + "px";
    });
    onUpdated(() => {
      const divs = navItems.value;
      const result = divs.find((div) => div.classList.contains("selected"));
      const { width, left: left1 } = result.getBoundingClientRect();
      indicator.value.style.width = width + "px";
      const { left: left2 } = container.value.getBoundingClientRect();
      const left = left1 - left2;
      indicator.value.style.left = left + "px";
    });

    const current = computed(() => {
      return defaults.find((tag) => {
        return tag.props.title === props.selected;
      });
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    const select = (title) => {
      context.emit("update:selected", title);
    };
    return {
      defaults,
      titles,
      current,
      container,
      select,
      indicator,
      navItems,
    };
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>