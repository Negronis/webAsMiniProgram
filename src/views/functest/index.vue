<template>
  <div> 
    <KButton type="primary" @click="back" >返回首页</KButton>
    <KButton type="primary" @click="login" >测试登录接口(all)</KButton>
    <KButton type="primary" @click="wxLogin" >测试登录接口(wechat)</KButton>
    <KButton type="primary" open-type="openSetting"  @opensetting="getSetting">用户授权设置</KButton>
    <KButton type="primary" open-type="getUserInfo"  @getuserinfo="getUserInfo">获取用户信息</KButton>
    <KButton type="primary" @click="back" >页面主要操作</KButton>
    <KButton type="primary" @click="back" >页面主要操作</KButton>
    <KButton type="primary" @click="back" >页面主要操作</KButton>
    <KButton type="primary" @click="back" >页面主要操作</KButton>
  </div>
</template>

<script>
import {login , wxLogin} from '@/plugins/api' 
export default {
  data(){
    return {}
  },
  methods: {  
     back(){
        this.$Util.rLink("/");
     },
     login(){
       this.$Store.commit("loading",{
         text:"正在登陆，请稍后",
         duration:2000
       })
       login().then(res=>{
          this.$Store.commit("success",{
            text:res.data.msg,
            duration:2000
          })
       })
     },
     wxLogin(){
       wxLogin().then(res=>{
         console.log(res);
       })
     },
      getUserInfo(e){
          console.log(e); 
          console.log(e['$_detail'])
          console.log(JSON.parse(e['$_detail']['rawData']));
      },
      getSetting(e){
          console.log(e);
      }
  },
  mounted(){
  }
   
};
</script>

<style>
</style>