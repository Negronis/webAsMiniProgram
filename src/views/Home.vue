<template>
  <div class="home"> 
    <KView class="page home js_show">
        <KButtonArea>
          <KButton @click="toFuncTest" type="primary" >功能测试</KButton>
          <KButton @click="toAbout" type="primary" >跳到about</KButton> 
        </KButtonArea>  
    </KView> 
  </div>
</template>
<script>  
import store from '../store';
export default{
  name: "Home", 
  methods:{ 
    clickBtn(){ 
      this.$Store.commit("loading",{
        text:"你好",
        duration:2000
      })
    },
    toFuncTest(){
      // this.$Util.pageLink('/test')  
       this.$Util.link("/test");
      //  console.log( this.$Util.link);
    },
    toAbout(){
      // this.$Util.link("/about")
      // this.$Route.push("/about")
    }
  },
  computed:{
    getPgType(){
      return store.getters.getPgType
    }
  },
  created() { 
  },
}
</script>
