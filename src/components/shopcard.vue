<template>
  <div class="shopcard">
    <img :src="this.imgurl" alt="" />
    <div class="description-c">
      <div class="p1">
        {{ introduce }}
      </div>
      <div class="underline">
        <div style="text-align:left;color:#e86149;font-size:4vw;line-height:4vw;font-weight:600">9.9元</div>
        <div style="text-align:left;color:#bbbabb;margin-left:-9vw;font-size:2vw;line-height:5.5vw;text-decoration:line-through">12.9元</div>
        <div style="display:flex" class="ticket">
          <div class="d1">劵</div>
          <div class="d2">28元</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgurl: {
      type: String,
      default: require('@/assets/img/temp.jpg')
    },
    introduce: {
      type: String,
      default: '商品名称'
    }
  }
}
</script>

<style lang="less" scoped>
.shopcard {
  box-sizing: border-box;
  height: 66vw;
  width: 45vw;
  margin-left: 3vw;
  font-size: 0px;
  border-radius: 3vw;
  img {
    margin: 0;
    height: 45vw;
    width: 100%;
    border-radius: 3vw 3vw 0 0;
  }
  .description-c {
    font-size: 2vw;
    margin: 0;
    box-sizing: border-box;
    background-color: #fff;
    width: 100%;
    height: 20vw;
    overflow: hidden;
    border-radius: 0 0 3vw 3vw;
    .p1 {
      width: 40vw;
      margin-left: 2.5vw;
      margin-top: 2vw;
      height: 8vw;
      line-height: 4vw;
      font-size: 3.1vw;
      font-weight: 530;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      text-align: left;
    }
    .underline {
      display: flex;
      justify-content: space-between;
      margin-top: 3vw;
      margin-left: 2.5vw;
      width: 40vw;
      .ticket{
        .d1{
          box-sizing: border-box;
          width: 5vw;
          height: 4vw;
          line-height: 4vw;
          border: 1px solid red;
          border-right: 1px dashed red;
          border-radius: 20%;
          text-align: center;
          color: #eb7865;
        }
        .d2{
          box-sizing: border-box;
          font-size: 2vw;
          padding-left: 0.5vw;
          padding-right: 0.5vw;
          width: auto;
          height: 4vw;
          line-height: 4vw;
          border: 1px solid red;
          border-left: 0;
          border-radius: 20%;
          text-align: center;
          color: #eb7865;
        }
      }
    }
  }
}
</style>
