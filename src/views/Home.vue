<template>
  <div>
    <TopNav />
    <div class="banner">
      <h1>轱辘UI</h1>
      <h2>一个厉害的UI组件</h2>
      <p class="action">
        <a>Github</a>
        <router-link to="/Doc">开始</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import TopNav from "../components/TopNav.vue";
export default {
  components: { TopNav },
};
</script>

<style  lang='scss' scoped>
.banner {
  margin-top: 60px;
  > p {
    margin: 60px;
    > a {
      border: 1px solid gray;
      border-radius: 16px;
      padding: 8px 16px;
      margin: 8px 16px;
      &:hover {
        border: 1px solid black;
      }
    }
  }
}
</style>