import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' 
import KboneUI from 'kbone-ui'
import 'kbone-ui/lib/weui/weui.css'
import util from '@/plugins/util';
import WebUtil from '@/plugins/util/webUtil.js';
Vue.use(KboneUI)
Vue.config.productionTip = false 
Vue.prototype.$Store = store;
Vue.prototype.$Util = util;
Vue.prototype.$WebUtil = WebUtil;
Vue.prototype.$Route = router;
export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
