import Vue from 'vue'
import App from '../../App.vue'
import store from '../../store'
import initPrototypes from '../prototypeConfig';
import initRouter from '../routes';
const router = initRouter("home");
initPrototypes(router);
export default function createApp() {
   const container = document.createElement('div')
   container.id = 'app'
   document.body.appendChild(container)
   Vue.config.productionTip = false
   return new Vue({
      el: '#app',
      router,
      store,
      render: h => h(App)
   })
}
