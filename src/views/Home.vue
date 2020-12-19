<template>
  <div>
    <div class="topnavAndBanner">
      <TopNav />
      <div class="logoAndBanner">
        <div class="banner">
          <h1>Fusion UI</h1>
          <h2>A cool UI component</h2>
          <p class="action">
            <a class="Github" href="https://github.com/Freddy-Gong/Vue3-wheel"
              >Github</a
            >
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
      <div class="triangle"></div>
    </div>
    <div class="features">
      <svg class="logo">
        <use xlink:href="#i-ziyuan-copy" />
      </svg>
    </div>
    <h1 class="font">A cool UI component</h1>
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
.triangle {
  width: 0;
  height: 0;
  border-bottom: 100px solid white;
  border-left: 100vw solid transparent;
}
.banner {
  padding-left: 8%;
  padding-right: 200px;
  color: white;
  margin-top: 60px;
  padding-bottom: 100px;
  > h1 {
    display: inline;
  }
  > p {
    text-align: center;
    margin: 60px;
    > a {
      white-space: nowrap;
      border-radius: 32px;
      padding: 16px 32px;
      margin: 8px 16px;
      background: rgb(153, 75, 185);
      color: white;
      box-shadow: 0 5px 0 fade-out(black, 0.95);
    }
    .Github {
      background: transparent;
      border: 1px solid rgb(171, 125, 208);
      color: rgb(171, 125, 208);
    }
  }
}
.font {
  display: inline;
}
.small {
  height: 200px;
  fill: rgba(77, 45, 156, 1);
  width: 200px;
  animation: small infinite linear 4s;
}
.big {
  fill: rgba(179, 44, 147, 1);
  margin-right: -80px;
  animation: small infinite linear 6s reverse;
}

@media (max-width: 500px) {
  .small {
    display: none;
  }
  .big {
    display: none;
  }
  .banner {
    padding: 0;
    width: 100vw;
    > p {
      margin: 24px 0;
    }
  }
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
  > svg {
    width: 64px;
    height: 64px;
    fill: rgba(162, 64, 112, 1);
  }
}
.font {
  font-size: 32px;
  color: rgb(58, 56, 80);
}
</style>