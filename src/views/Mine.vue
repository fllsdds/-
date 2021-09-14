<template>
  <div class="mine">
    <!-- 头部 -->
    <div class="head-m"></div>

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
          <p class="rmb">￥0</p>
          <p>今日预估</p>
        </div>
        <div class="w-2">
          <p class="rmb">￥0</p>
          <p>今日预估</p>
        </div>
        <div class="w-3">
          <p class="rmb">￥0</p>
          <p>今日预估</p>
        </div>
      </div>
    </div>

    <!-- 订单中心 -->
    <div class="order">
      <div class="name-o">
        订单中心
      </div>
      <div class="icon-o">
        <div><van-icon size="8vw" name="coupon-o" /> <p>电影票订单</p> </div>
        <div><van-icon size="8vw" name="description" /> <p>我的订单</p> </div>
        <div><van-icon size="8vw" name="user-circle-o" />  <p>粉丝订单</p> </div>
        <div><van-icon size="8vw" name="search" /> <p>订单找回</p> </div>
      </div>
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
export default {};
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
  height: 60vw;
  background-color: #e93e2b;
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
    color: #fff8db;
    font-size: 4vw;
    text-align: left;
    margin-left: 2vw;
  }
  .w-p1 {
    font-weight: 700;
    font-size: 5vw;
  }
  button {
    height: 8vw;
    width: 25vw;
    margin-left: 25vw;
    color: #a07c53;
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
    height: 20vw;
  }
  .rmb {
    color: #d81e06;
  }
}
.order {
  width: 94vw;
  margin-left: 3vw;
  margin-top: 3vw;
  height: 25vw;
  background-color: #fff;
  .name-o {
    height: 20%;
    text-align: left;
    padding: 2vw;
  }
  .icon-o {
    display: flex;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 25%;
      height: 20vw;
      p{
        font-size: 2vw;
      }
    }
  }
}
</style>
