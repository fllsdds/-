<template>
  <div class="shoplist">
    <div class="listcard">
      <img src="@/assets/img/dao.jpg" alt="" />
      <div class="introduce">
        <div class="title">拜格BAYCO系列黑刃系列</div>
        <div class="shop">拜格京东自营旗舰店</div>
        <div class="tag"> <span style="color:#fff;background-color:#fe0f10;padding:1px;border-radius:1vw">自营</span>  <span style="color:#fff;background-color:#fe0f10;padding:1px;border-radius:1vw">首领礼金</span>···<span style="color:#fd4a1b;background-color:#fdd760;padding:1px;border-radius:1vw">10元</span>  </div>
        <div class="price">9.9元 <span>29元</span> </div>
      </div>
      <button>领用</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.listcard {
  display: flex;
  align-items: center;
  height: 25vw;
  width: 92vw;
  margin-left: 4vw;
  background-color: #ffffff;
  border-radius: 5vw;
  margin-top: 3vw;
  img {
    width: 25vw;
    height: 25vw;
    border-radius: 4vw 0vw 0vw 4vw;
  }
  .introduce {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    box-sizing: border-box;
    height: 25vw;
    border-right: 0.7vw dashed #f8f8f8;
    padding: 3vw;
    .title {
      width: 80%;
      font-size: 3vw;
      font-weight: 550;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      text-align: left;
    }
    .shop {
      width: 80%;
      font-size: 2vw;
      text-align: left;
    }
    .tag{
      width: 80%;
      font-size: 2vw;
      text-align: left;
    }
    .price{
      margin-top: 2vw;
      width: 80%;
      font-weight: 550;
      font-size: 5vw;
      text-align: left;
      color: #fd1b1b;
      span{
        font-size: 2vw;
        text-decoration: line-through;
        color: #aaa8a9;
      }
    }
  }
  button {
    box-sizing: border-box;
    margin-left: 2vw;
    margin-right: 2vw;
    border: none;
    border-radius: 7vw;
    height: 7vw;
    width: 15vw;
    font-size: 2vw;
    color: #fff;
    background-color: #e53420;
  }
}
</style>
