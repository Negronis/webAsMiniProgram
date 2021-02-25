// import store from '../store';
// let pgType = store.getters.getPgType;
 
export default [
   {
      path: '/',
      name: 'Home',
      component: () => import("@/views/Home.vue")
   },
   {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue')
   },
   {
      path:"/test",
      name:"test",
      component:()=>import("@/views/functest/index.vue")
   }
]