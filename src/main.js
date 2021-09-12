import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/reset.css'

Vue.config.productionTip = false

import { Tabbar, TabbarItem, Search } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Search);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
