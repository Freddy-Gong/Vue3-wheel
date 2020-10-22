<template>
  <div>
    <TopNav :toggleMenuButtonVisible="true" />
    <div class="content">
      <aside v-if="asidVisibile">
        <h2>Doc</h2>
        <ul>
          <li>
            <router-link to="/doc/about" active-class="selected"
              >About</router-link
            >
          </li>
          <li>
            <router-link to="/doc/install" active-class="selected"
              >Install</router-link
            >
          </li>
          <li>
            <router-link to="/doc/get-started" active-class="selected"
              >Get Started</router-link
            >
          </li>
        </ul>
        <h2>Guide</h2>
        <ul>
          <li>
            <router-link to="/doc/switch" active-class="selected"
              >Switch</router-link
            >
          </li>
          <li>
            <router-link to="/doc/button" active-class="selected"
              >Button</router-link
            >
          </li>
          <li>
            <router-link to="/doc/dialog" active-class="selected"
              >Dialog</router-link
            >
          </li>
          <li>
            <router-link to="/doc/tabs" active-class="selected"
              >Tabs</router-link
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
  flex-grow: 1;
  > aside {
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    border-right: 1px solid rgb(171, 125, 208);
    padding-top: 100px;
    z-index: 0;
    > ul {
      > li {
        padding: 6px 0;
        > a {
          padding: 6px 24px;
          display: block;
          white-space: nowrap;
          color: black;
        }
        > .selected {
          color: white;
          background: rgba(171, 125, 208, 0.5);
        }
      }
    }
  }
  > main {
    position: fixed;
    top: 0;
    margin-top: 80px;
    left: 142px;
    width: 90%;
    height: 89vh;
    overflow: auto;
  }
  @media (max-width: 500px) {
    > aside {
      position: absolute;
      top: 0;
      left: 0;
      padding-top: 80px;
    }
    > main {
      margin-top: 0;
      position: static;
      top: 0;
      left: 0;
      width: 100%;
      padding: 0 8px;
    }
  }
}
</style>
