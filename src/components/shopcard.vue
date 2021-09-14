<template>
  <div class="shopcard">
    <img src="../assets/img/temp.jpg" alt="">
    <div class="description-c" style="padding:1vw">
        <p class="p1" style="font-size:3vw">酷睿i7 10700八核独显LOL吃鸡游戏台式电脑主机i5组装机LOL全套5555555555555</p>
        <p style="text-align:left;color:red">$1000</p>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    imgurl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile06.16sucai.com%2F2016%2F0829%2F2548b457374a7d4420df853067ea5320.jpg&refer=http%3A%2F%2Ffile06.16sucai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634040496&t=4c2d4734d13e6891110c96cc5a740ab8"
  }
}
</script>

<style lang="less" scoped>
  .shopcard{
    width: 45vw;
    margin-left: 3vw;
    img{
      margin: 0;
      height: 35vw;
    width: 100%;
    }
    .description-c{
      box-sizing: border-box;
      background-color:#fff;
      width: 100%vw;
      height: 15vw;
      .p1{
        overflow:hidden;
        text-overflow:ellipsis;
        display:-webkit-box;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2;
      }
    }
    
  }
</style>