import Vue from 'vue'
import App from './App.vue'
// import VueRouter from "Router";
import router from "./Router/route";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(ElementUI)
Vue.use(MintUI);
Vue.config.productionTip = false
// Vue.use(router)
new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
