<template>
  <div id="app">
    <router-view />
    <van-tabbar route class="tabber-app" active-color="#f94a4a">
      <van-tabbar-item replace to="/" icon="home-o" >首页</van-tabbar-item>
      <van-tabbar-item replace to="/search" icon="manager-o" >我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

</style>
