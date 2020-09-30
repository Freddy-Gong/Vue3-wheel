<template>
  <div>
    <TopNav :toggleMenuButtonVisible="true" />
    <div class="content">
      <aside v-if="asidVisibile">
        <h2>Doc</h2>
        <ol>
          <li>
            <router-link to="/doc/about">About</router-link>
          </li>
          <li>
            <router-link to="/doc/install">Install</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">Get Started</router-link>
          </li>
        </ol>
        <h2>Guide</h2>
        <ul>
          <li>
            <router-link to="/doc/switch" active-class="selected"
              >Switch组件</router-link
            >
          </li>
          <li>
            <router-link to="/doc/button" active-class="selected"
              >Button组件</router-link
            >
          </li>
          <li>
            <router-link to="/doc/dialog" active-class="selected"
              >Dialog组件</router-link
            >
          </li>
          <li>
            <router-link to="/doc/tabs" active-class="selected"
              >Tabs组件</router-link
            >
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
  height: 630px;
  > aside {
    background: white;
    border-right: 1px solid rgb(171, 125, 208);
    padding-top: 20px;
    > ul {
      > li {
        margin: 24px;
        > a {
          color: black;
        }
        > .selected {
          color: rgb(171, 125, 208);
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
      padding-top: 80px;
    }
  }
}
</style>

<style  scoped>
</style>