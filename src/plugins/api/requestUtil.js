import kboneAPI from 'kbone-api';
let TEST_CONSOLE = (fn, ...args) => {
   if (process.env.NODE_ENV !== 'production') {
      return fn.apply(null, args);
   }
}
let RequestHandler = (args, data) => {
   TEST_CONSOLE(console.time, "请求时间");
   TEST_CONSOLE(console.log, `%c○请求地址：  ${args[0]}  \n○参数为：${args[1] && JSON.stringify(args[1])}`, " border:1px solid;padding:5px;margin:1px;color:#19be6b;font-size:1em")
   data.then((res) => {
      TEST_CONSOLE(console.log, `%c ○请求结果为：` + JSON.stringify(res), "color:#2d8cf0;border:1px solid;padding:5px;margin:1px;");
      TEST_CONSOLE(console.timeEnd, "请求时间");
   }).catch((err) => {
      TEST_CONSOLE(console.timeEnd, "请求时间");
      TEST_CONSOLE(console.error, "请求失败" + JSON.stringify(err));
   })
}

let requestAjax = (url, data, methods) => {
   return new Promise((resolve, reject) => {
      let requestSetting = {
         url: url || "",
         data: data || {},
         methods: methods || "GET",
         success(res) {
            resolve(res);
         },
         fail(err) {
            reject(err);
         }
      };
      if (methods === "GET") {
         delete requestSetting['data']
      }
      kboneAPI.request(requestSetting)
   })
}
let requestProxy = new Proxy(requestAjax, {
   apply(target, thisArg, argumentsList) { 
      let res = target.apply(null, argumentsList)
      RequestHandler(argumentsList, res);
      return res;
   }
})
export default process.env.NODE_ENV === 'production' ? requestAjax : requestProxy
// export default requestProxy