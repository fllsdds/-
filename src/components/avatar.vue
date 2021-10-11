<template>
  <div>
    <img :src="imgurl" alt="">
  </div>
</template>

<script>
export default {
  props: {
    imgurl: {
      type: String
    }
  }
}
</script>

<style lang="less" scoped>
  img{
    width: 18vw;
    height: 18vw;
    border-radius: 9vw;
  }
</style>
