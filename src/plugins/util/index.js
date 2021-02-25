import store from '@/store';
import Vue from 'vue';
let pgType = store.getters.getPgType;
var UtilObj = new Proxy({}, { 
   get: function (target, key, receiver) {
      console.log(target, key, receiver)
      let UtilObject = {}
      if (pgType) {
         UtilObject = Vue.prototype.$WxUtil;
      } else {
         UtilObject = Vue.prototype.$WebUtil;
      }
      if (UtilObject[key]) {
         return UtilObject[key];
      } else {
         return () => {
            console.log("该端不存在这个方法" + target, key, receiver);
         }
      }
   }
})
export default UtilObj;