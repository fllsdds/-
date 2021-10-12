import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/reset.css'

import { Tabbar, TabbarItem, Search, Grid, GridItem, Image as VanImage, Icon, GoodsAction, GoodsActionIcon, GoodsActionButton, NavBar, Card, Dialog } from 'vant'

Vue.config.productionTip = false

Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Search)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(VanImage)
Vue.use(Icon)
Vue.use(GoodsAction)
Vue.use(GoodsActionButton)
Vue.use(GoodsActionIcon)
Vue.use(NavBar)
Vue.use(Card)
Vue.use(Dialog)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
