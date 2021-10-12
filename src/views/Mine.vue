<template>
  <div class="mine">
    <!-- 头部 -->

    <div class="head-m">
      <div style="color:#fdefed;">个人中心</div>
      <div class="yonghu">
        <img src="../assets/img/temp.jpg" alt="" align="left">
        <div class="yonghuid">
          <div>用户名</div>
          <div>ID:1680302</div>
        </div>
      </div>

    </div>

    <!-- 提现部分 -->
    <div class="withdrawal">
      <div class="w-black">
        <div>
          <p class="w-p1">可提现 0.00</p>
          <p>分享给朋友可获得奖励</p>
        </div>
        <div>
          <button>立即提现</button>
        </div>
      </div>
      <div class="w-white">
        <div class="w-1">
          <p class="rmb">0元</p>
          <p class="f">今日预估</p>
        </div>
        <div class="w-2">
          <p class="rmb">0元</p>
          <p class="f">本月预估</p>
        </div>
        <div class="w-3">
          <p class="rmb">0元</p>
          <p class="f">上月预估</p>
        </div>
      </div>
    </div>

    <!-- 订单中心 -->
    <div class="order">
      <van-icon name="notes-o" size="10vw" style="margin-left:2vw" /> <pre> 我的订单</pre>

    </div>
    <!-- 底部导航栏 -->
    <van-tabbar route class="tabber-app" active-color="#f94a4a">
      <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="manager-o"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
* {
  box-sizing: border-box;
}
.mine {
  background-color: #f1f1f1;
  height: 100vh;
}
.head-m {
  width: 100%;
  height: 58vw;
  background-color: #e93e2b;
  border-radius: 0 0 3vw 3vw;
  padding: 4vw;
  .yonghu{
    margin-top: 12vw;
    display: flex;
    .yonghuid{
      display: flex;
      flex-direction: column;
      margin-top: 2vw;
      margin-left: 2vw;
      color: #ffffff;
      div{
        height: 6vw;
        text-align: left;
        font-size: 4vw;
      }
    }
    img{
    width: 16vw;
    height: 16vw;
    border-radius: 8vw;
  }
  }

}
.w-black {
  display: flex;
  align-items: center;
  width: 94vw;
  height: 15vw;
  margin-left: 3vw;
  margin-top: -18vw;
  border-top-left-radius: 2vw;
  border-top-right-radius: 2vw;
  background-color: #424242;
  p {
    margin-top: 1vw;
    color: #a7a7a7;
    font-size: 2vw;
    text-align: left;
    margin-left: 2vw;
  }
  .w-p1 {
    font-weight: 400;
    font-size: 4vw;
    color: #fff8db;
  }
  button {
    height: 7vw;
    width: 20vw;
    margin-left: 43vw;
    color: #a07c53;
    font-size: 3vw;
    border-radius: 4vw;
    border: 0;
    background-color: #feefc6;
  }
}
.w-white {
  display: flex;
  width: 94vw;
  margin-left: 3vw;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 33.333%;
    background-color: #fff;
    height: 15vw;
  }
  .rmb {
    font-size: 4vw;
    color: #d81e06;
  }
  .f{
    font-size: 2vw;
  }
}
.order {
  display: flex;
  align-items: center;
  width: 94vw;
  margin-left: 3vw;
  margin-top: 3vw;
  height: 20vw;
  background-color: #fff;
  font-size: 2vw;
  color: #b0b0b0;

}
</style>
