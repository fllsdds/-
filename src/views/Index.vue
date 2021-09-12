<template>
<div class="index">
  <!-- 搜索部分 -->
  <div class="head-index">
    <van-search
  v-model="value"
  shape="round"
  background="#ef4238"
  placeholder="请输入搜索关键词"
/>
  </div>

  <!-- 红包部分 -->
  <div class="gift-index">
    <div class="elemang">
      <img src="../assets/img/饿了么.png" alt="">
      <div style="margin-left:2vw;display:block;">
        <p style="font-size:4vw;color:white">饿了么外卖红包</p>
        <p style="font-size:5vw;font-weight:700;margin-left:-2vw;color:white"> 最高领<em style="color:#f8cb4a">66</em>元 </p>
      </div>      
    </div>
    <div class="meituan">
      <img src="../assets/img/美团.jpg" alt="">
      <div style="margin-left:2vw;display:block;">
        <p style="font-size:4vw;margin-left:-1.5vw">美团外卖红包</p>
        <p style="font-size:5vw;font-weight:700"> 最高领<em style="color:red">56</em>元 </p>
      </div>      
    </div>
  </div>

  <!-- 卡片部分 -->
  <shopcard></shopcard>
</div>
  
</template>

<script>
import shopcard from '@/components/shopcard'
export default {
  components:{shopcard}
}
</script>

<style lang="less" scoped>
  
  .index {
    width: 100vw;
    height: 100vh;
    background-color: #f5f5f5;
  }
 .head-index {
   width: 100vw;
   height: 20vh;
   background-color: #ef4238;
 }
 .gift-index{
   display: flex;
   height: 15vh;
   width: 100vw;
   .meituan{
     display: flex;
     align-items: center;
     margin-top: 1vh;
     margin-left: 2vw;
     height: 23vw;
     width: 48vw;
     background-color: #f8cb4a;
     border-radius: 2vh;
     img{
       margin-left: 2vw;
       width: 16vw;
       height: 16vw;
       border-radius: 8vw;
     }
   }
   .elemang{
     display: flex;
     align-items: center;
     margin-top: 1vh;
     margin-left: 1vw;
     height: 23vw;
     width: 48vw;
     background-color: #06a9ff;
     border-radius: 2vh;
      img{
       margin-left: 2vw;
       width: 16vw;
       height: 16vw;
       border-radius: 8vw;
     }
   }
 }

</style>