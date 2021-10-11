<template>
  <div class="listshop">
    <!-- 顶部导航栏 -->
    <div class="head-index">
      <div class="search-index">
        <router-link to="/">
          <van-icon
            name="revoke"
            color="#ef4238"
            class="icon-index"
            size="4.5vw"
          />
        </router-link>

        <input type="text" placeholder="请输入商品名称或链接" />
        <router-link to="list">
          <button>搜索</button>
        </router-link>
      </div>
    </div>

    <div class="help-radius"></div>
    <!-- 商品卡片栏 -->
    <shoplist v-for="count in 10" :key="count"></shoplist>
  </div>
</template>

<script>
import shoplist from "@/components/shoplist";
export default {
  methods: {},
  components: { shoplist }
};
</script>

<style lang="less">
button {
  /*消除button的默认样式*/
  /*这种写法是对所有的button标签同时生效*/
  margin: 0px;
  padding: 0px;
  /*自定义边框*/
  border: 0px;
  /*消除默认点击蓝色边框效果*/
  outline: none;
}

input::-webkit-input-placeholder {
  color: #b6b6b6;
}
input::-moz-input-placeholder {
  color: #b6b6b6;
}
input::-ms-input-placeholder {
  color: #b6b6b6;
}

/*头部*/
.head-index {
  box-sizing: border-box;
  width: 100vw;
  height: 28vw;
  background-color: #ef4238;
  border-top: 1px solid transparent; /*阻止外边距合并*/
  .search-index {
    display: flex;
    align-items: center;
    width: 94vw;
    height: 8vw;
    margin-left: 3vw;
    margin-top: 14vw;
    background-color: #fff;
    border-radius: 8vw;
    .icon-index {
      margin-left: 2vw;
    }
    input {
      display: inline-block;
      flex-grow: 1;
      height: 6vw;
      border: none;
      font-size: 3.5vw;
      line-height: 3.5vw;
    }
    button {
      box-sizing: border-box;
      margin-left: 1vw;
      margin-right: 1vw;
      border: none;
      border-radius: 7vw;
      height: 7vw;
      width: 12vw;
      font-size: 2vw;
      color: #fff;
      background-color: #e53420;
    }
  }
}

.listshop {
  background-color: #f2f2f2;
}
</style>
