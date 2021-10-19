<template>
  <div class="Shopping">
    <!-- 顶部导航栏 -->
    <!-- 商品部分 -->
    <img src="../assets/img/ya.jpg" alt="" />
    <router-link to="/">
      <van-icon
        name="arrow-left"
        class="return-index"
        color="#fff"
        size="6vw"
      />
    </router-link>

    <div class="s-introduce">
      <div class="line1">
        <p class="p1">精选</p>
        <p class="p2">快乐鸭拍拍灯小夜灯2021新款</p>
      </div>
      <div class="line2">
        <div class="d1">120元</div>
        <div class="d2"><span>优惠后</span>70元</div>
      </div>
      <div class="line3">
        <img src="../assets/img/hongbao.png" alt="" />
        <div class="d1">50元</div>
        <div class="d2">点击</div>
      </div>
    </div>
    <div class="s-introduce2">
      <div class="shop">
        <div class="hui"></div>
        <div style="margin-left:2vw">
          <p style="font-weight:550">梵梦灯饰旗舰店</p>
          <p><van-icon name="location-o" size="4vw" />广东中山</p>
        </div>
      </div>
      <img src="../assets/img/kuaileya.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {}
};
</script>

<style lang="less" scoped>
img {
  position: relative;
  max-width: 100%;
}
.Shopping {
  height: 120vh;
  background-color: #f5f5f5;
  position: relative;
}
.return-index {
  position: absolute;
  top: 10vw;
  left: 0;
}
.s-introduce {
  width: 98vw;
  height: 48vw;
  margin-left: 1vw;
  background-color: #fff;
}
.s-introduce2 {
  width: 96vw;
  height: 80vw;
  margin-left: 2vw;
  margin-top: 4vw;
  background-color: #fff;
  .shop {
    display: flex;
    height: 16vw;
    width: 100%;
    padding: 3vw;
    .hui {
      background-color: #bcbabb;
      height: 10vw;
      width: 10vw;
      border-radius: 15%;
    }
    p {
      text-align: left;
    }
  }
  img {
    width: 100%;
  }
}
.line1 {
  display: flex;
  align-items: center;
  text-align: left;
  height: 12vw;
  width: 100%;
  .p1 {
    margin: 0;
    margin-left: 3vw;
    font-size: 1vw;
    padding: 0.5vw;
    background-color: #fde4e2;
    color: #e52b3c;
  }
  .p2 {
    margin: 0;
    font-size: 4vw;
    font-weight: 700;
    margin-left: 1vw;
  }
}
.line2 {
  display: flex;
  align-items: center;
  height: 8vw;
  .d1 {
    font-size: 5vw;
    color: #db3f24;
    line-height: 8vw;
    height: 8vw;
    margin-left: 3vw;
  }
  .d2 {
    text-align: center;
    width: 20vw;
    line-height: 8vw;
    height: 8vw;
    border-radius: 3vw;
    background-color: #df543d;
    color: #ffffff;
    font-size: 4vw;
    margin-left: 2vw;
    span {
      font-size: 2vw;
      margin-right: 1vw;
    }
  }
}
.line3 {
  position: relative;
  img {
    width: 93vw;
  }
  .d1 {
    position: absolute;
    color: #fbfffa;
    font-size: 6vw;
    font-weight: 550;
    top: 30%;
    left: 10%;
  }
  .d2 {
    position: absolute;
    right: 7.5%;
    top: 30%;
    width: 20vw;
    height: 10vw;
    background-color: blue;
    opacity: 0;
  }
}
</style>
