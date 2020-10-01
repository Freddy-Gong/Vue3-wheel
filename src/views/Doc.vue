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
  height: 630px;
  > aside {
    background: white;
    border-right: 1px solid rgb(171, 125, 208);
    padding-top: 20px;
    > ul {
      > li {
        padding: 12px 24px;
        > a {
          white-space: nowrap;
          color: black;
        }
        > .selected {
          color: rgb(171, 125, 208);
          background: rgba(171, 125, 208, 0.5);
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
