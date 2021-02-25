import kboneAPI from 'kbone-api';
import requestAjax from './requestUtil';
const url = process.env.NODE_ENV === 'production' ? "http://192.168.2.12:3000/api" : "http://192.168.2.12:3000/api"
let login = () => { 
   return requestAjax(url+"/user/login",{},"GET")
}
let wxLogin = ()=>{
   return kboneAPI.login();
}
export {
   login,wxLogin
}