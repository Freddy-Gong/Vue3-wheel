<template>
  <div>
    <TopNav />
    <div class="content">
      <aside v-if="asidVisibile">
        <h2>Guide</h2>
        <ul>
          <li>
            <router-link to="/doc/switch">Switch组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs组件</router-link>
          </li>
        </ul>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang='ts'>
import { inject, Ref } from "vue";
import TopNav from "../components/TopNav.vue";
export default {
  components: { TopNav },
  setup() {
    const asidVisibile = inject<Ref<boolean>>("asidVisibile");

    return { asidVisibile };
  },
};
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  > aside {
    background: white;
    border-right: 1px solid gray;
    > ul {
      > li {
        margin: 8px;
        > a {
          color: gray;
          &:focus {
            color: black;
          }
        }
      }
    }
  }
  > main {
    padding: 4px 16px;
  }
  @media (max-width: 500px) {
    > aside {
      position: absolute;
      top: 0;
      left: 0;
      padding-top: 60px;
    }
  }
}
</style>

<style  scoped>
</style>