<template>
  <div>
   <KToptips :value="getShowPop" :type="getType" :duration="getPoptipDuration">
      {{getPoptipContent}}
   </KToptips>
  </div>
</template>
<script>
import store from "../../../store";
export default {
  computed: {
    getPgType() {
      return store.getters.getPgType ;
    },
    getType(){
       return store.getters.getPoptipType || "info"
    },
    getShowPop(){ 
      let val = store.getters.getShowPoptip; 
      return val
    },
    getPoptipContent(){
       return store.getters.getPoptipContent || "请输入消息"
    },
    getPoptipDuration(){
       return store.getters.getPoptipDuration
    }
  },
  data(){
     return {
        infoShow:true
     }
  },
  created() {},
};
</script>
