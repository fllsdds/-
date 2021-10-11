import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/reset.css'

Vue.config.productionTip = false

import { Tabbar, TabbarItem, Search,Grid, GridItem,Image as VanImage,Icon,GoodsAction, GoodsActionIcon, GoodsActionButton,NavBar,Card } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Search);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(VanImage);
Vue.use(Icon);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(NavBar);
Vue.use(Card);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
