<template>
<div class="index">
  <div class="head-index">
    <van-search
  v-model="value"
  shape="round"
  background="#ef4238"
  placeholder="请输入搜索关键词"
/>
  </div>

  <div class="gift-index">
    <div class="meituan"></div>
    <div class="elemang"></div>
  </div>
</div>
  
</template>

<script>
export default {

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
     margin-top: 1vh;
     margin-left: 1vw;
     height: 13vh;
     width: 48vw;
     background-color: red;
     border-radius: 2vh;
   }
   .elemang{
     margin-top: 1vh;
     margin-left: 1vw;
     height: 13vh;
     width: 48vw;
     background-color: blue;
     border-radius: 2vh;
   }
 }

</style>