<template>
  <div>
    <div class="topnavAndBanner">
      <TopNav />
      <div class="banner">
        <h1>轱辘UI</h1>
        <h2>一个厉害的UI组件</h2>
        <p class="action">
          <a>Github</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#i-Vue" />
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#i-typescript" />
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#i-light" />
      </svg>
    </div>
  </div>
</template>

<script lang='ts'>
import TopNav from "../components/TopNav.vue";
export default {
  components: { TopNav },
};
</script>

<style  lang='scss' scoped>
$green: #02bcb0;
$color: #007974;
.topnavAndBanner {
  background: linear-gradient(
    145deg,
    rgb(227, 255, 253, 1) 0%,
    rgba(183, 233, 230, 1) 100%
  );
  clip-path: ellipse(80% 60% at 50% 40%);
}
.banner {
  color: $color;
  margin-top: 60px;
  > p {
    margin: 60px;
    > a {
      border-radius: 4px;
      padding: 8px 16px;
      margin: 8px 16px;
      background: $green;
      color: white;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
.features {
  > svg {
    width: 64px;
    height: 64px;
  }
}
</style>