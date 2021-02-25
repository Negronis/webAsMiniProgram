import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Test from '@/views/functest/index';
Vue.use(Router)
export default function (type) {
   let routeArray = [];
   if (type === 'home') {
      routeArray = [
         {
            path: '/',
            name: 'home',
            component: Home,
         },
         {
            path: '/about/',
            name: 'about',
            component: About,
         },
         {
            path: "/test/",
            name: "test",
            component: Test
         }
      ]
   }
   if (type === 'test') {
      routeArray = [
         {
            path:"/",
            name:"test",
            component:Test
         },
         {
            path: "/test/",
            name: "test",
            component: Test
         }
      ]
   }
   return new Router({
      mode: "history",
      routes: routeArray
   });
}