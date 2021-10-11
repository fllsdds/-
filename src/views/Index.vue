<template>
  <div class="index">
    <!-- 搜索部分 -->

    <div class="head-index">
      <div class="search-index">
        <van-icon
          name="search"
          color="#ef4238"
          class="icon-index"
          size="4.5vw"
        />
        <input type="text" placeholder="请输入商品名称或链接" />
        <router-link to="list">
          <button>搜索</button>
        </router-link>
      </div>
    </div>

    <div class="help-radius"></div>
    <!-- 卡片部分 -->
    <div class="shop">
      <router-link to="shopping" v-for="count in 10" :key="count">
        <shopcard :imgurl="imgurl" :introduce="introduce"></shopcard>
      </router-link>
    </div>

    <!-- 底部栏 -->
    <van-tabbar
      route
      class="tabber-app"
      active-color="#f94a4a"
      fixed="true"
      placeholder="true"
    >
      <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="manager-o"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
import shopcard from '@/components/shopcard'
export default {
  components: { shopcard },
  data () {
    return {
      value: '',
      imgurl: require('@/assets/img/刀.jpg'),
      introduce: '拜格BAYCO系列黑刃不锈钢测试测试测试测试测试测试测试测试测试'
    }
  },
  methods: {
    onSearch (val) {
      this.$router.push({ path: '/list' })
      this.value = ''
    },
    onCancel () {
      // this.$router.push({ path: "/mine" });
    }
  }
}
</script>

<style lang="less" scoped>
// 消除button默认样式
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

// 设置默认字体样式
input::-webkit-input-placeholder {
  color: #b6b6b6;
}
input::-moz-input-placeholder {
  color: #b6b6b6;
}
input::-ms-input-placeholder {
  color: #b6b6b6;
}

// 控制水平滚动条不出现
html {
  overflow-y: scroll;
}

:root {
  overflow-y: auto;
  overflow-x: hidden;
}

:root body {
  position: absolute;
}

body {
  width: 100vw;
  overflow: hidden;
}

.index {
  box-sizing: border-box;
  width: 100vw;
  background-color: #f5f5f5;
  clear: both;
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

.help-radius {
  border-top: 1px solid transparent;
  width: 100vw;
  height: 5vw;
  margin-top: -2.5vw;
  margin-bottom: -2vw;
  background-color: #f5f5f5;
  border-radius: 5vw;
}

.shop {
  display: grid;
  grid-template-columns: 45vw 45vw;
  grid-column-gap: 3vw;
  grid-row-gap: 4vw;
  width: 100vw;
  background-color: #f5f5f5;
  a {
    color: black;
  }
}
</style>
