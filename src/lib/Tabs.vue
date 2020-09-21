<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav">
      <div
        class="gulu-tabs-nav-item"
        v-for="(title,index) in titles"
        @click="select(title)"
        :key="index"
        :class="{selected:title===selected}"
      >{{title}}</div>
    </div>
    <div class="gulu-tabs-content">
      <component class="gulu-tabs-content-item" :is="current" :key="current" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
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
      select,
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