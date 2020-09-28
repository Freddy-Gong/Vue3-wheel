<template>
  <div>
    <div class="topnavAndBanner">
      <TopNav />
      <div class="logoAndBanner">
        <div class="banner">
          <h1>Fusion UI</h1>
          <h2>A cool UI component</h2>
          <p class="action">
            <a class="Github">Github</a>
            <router-link to="/doc">Get Started</router-link>
          </p>
        </div>
        <svg class="big">
          <use xlink:href="#i-big_Whee" />
        </svg>
        <svg class="small">
          <use xlink:href="#i-small_Wheel" />
        </svg>
      </div>
    </div>
    <div class="features">
      <svg class="logo">
        <use xlink:href="#i-ziyuan-copy" />
      </svg>
      <span>Fusion</span>
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
.topnavAndBanner {
  background: linear-gradient(
    145deg,
    rgba(77, 45, 156, 1) 0%,
    rgba(191, 43, 133, 1) 100%
  );
  display: flex;
  flex-direction: column;
  > .logoAndBanner {
    display: flex;
  }
}
.banner {
  padding-left: 8%;
  padding-right: 200px;
  color: white;
  margin-top: 60px;
  padding-bottom: 100px;
  > p {
    margin: 60px;
    > a {
      border-radius: 32px;
      padding: 16px 32px;
      margin: 8px 16px;
      background: rgb(153, 75, 185);
      color: white;
      box-shadow: 0 5px 0 fade-out(black, 0.95);
      &:hover {
        text-decoration: none;
      }
    }
    .Github {
      background: transparent;
      border: 1px solid rgb(171, 125, 208);
      color: rgb(171, 125, 208);
    }
  }
}
.small {
  height: 200px;

  fill: rgba(77, 45, 156, 1);
  width: 200px;
  animation: small infinite linear 4s;
}
.big {
  fill: rgba(122, 44, 147, 1);

  margin-right: -80px;
  animation: small infinite linear 6s reverse;
}
@keyframes small {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.features {
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: transparent;
  > span {
    background: linear-gradient(
      180deg,
      rgba(209, 60, 70, 1) 0%,
      rgba(125, 68, 147, 1) 100%
    );
    -webkit-background-clip: text;

    background-clip: text;
  }
  > svg {
    width: 64px;
    height: 64px;
    fill: rgba(162, 64, 112, 1);
  }
}
</style>