<template>
  <div>
    <TopNav />
    <div class="content">
      <aside v-if="asidVisibile">
        <h2>Guide</h2>
        <ul>
          <li>
            <router-link to="/Doc/Switch">Switch组件</router-link>
          </li>
          <li>
            <router-link to="/Doc/Button">Button组件</router-link>
          </li>
          <li>
            <router-link to="/Doc/xxxx">Dialog组件</router-link>
          </li>
          <li>
            <router-link to="/Doc/xxx">Tabs组件</router-link>
          </li>
        </ul>
      </aside>
      <main>主内容</main>
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
    position: absolute;
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
}
</style>

<style  scoped>
</style>