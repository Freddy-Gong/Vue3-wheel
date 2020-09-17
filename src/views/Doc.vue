<template>
  <div>
    <TopNav />
    <div class="content">
      <aside>
        <ul>
          <li>
            <router-link>Switch组件</router-link>
          </li>
          <li>
            <router-link>Button组件</router-link>
          </li>
          <li>
            <router-link>xxxx组件</router-link>
          </li>
          <li>
            <router-link>xxx组件</router-link>
          </li>
        </ul>
      </aside>
      <main>主内容</main>
    </div>
  </div>
</template>

<script>
import TopNav from "../components/TopNav.vue";
export default {
  components: { TopNav },
};
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  > aside {
    border: 1px solid red;
  }
}
</style>

<style  scoped>
</style>