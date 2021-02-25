import Vue from 'vue'
import store from '@/store'
import util from '@/plugins/util';
import initWxUtil from '@/plugins/util/wxUtil';
import KboneUI from 'kbone-ui'
import 'kbone-ui/lib/weui/weui.css'
Vue.prototype.$Store = store;
Vue.prototype.$Util = util;
Vue.use(KboneUI)
export default function (router) {
   const WxUtil = initWxUtil(router);
   Vue.prototype.$WxUtil = WxUtil;
   Vue.prototype.$Route = router;
}