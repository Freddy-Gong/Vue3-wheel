<template>
  <div class="topnav">
    <div class="logo">
      <span>LOGO</span>
    </div>
    <input type="text" />
    <div class="menu">
      <span>设置1</span>
      <span>设置2</span>
      <span>设置3</span>
      <span>设置4</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.topnav {
  display: flex;
  justify-content: space-between;
  > .logo {
    margin: 4px 16px;
  }
  > input {
    margin-left: auto;
    margin-right: 16px;
    padding: 0 16px;
    width: 400px;
    border: 1px solid gray;
    border-radius: 15px;
    &:focus {
      outline: none;
    }
  }
  > .menu {
    border: 1px solid royalblue;
    > span {
      margin: 4px 16px;
      font-size: 16px;
    }
  }
}
</style>