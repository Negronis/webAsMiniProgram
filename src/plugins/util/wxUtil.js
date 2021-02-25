export default function (router = {}) {
   let WxUtilObject = {
      link: (path) => {
         router.push(path);
      },
      back() {
         router.back(-1);
      },
      rLink(path) {
         router.replace(path);
      },
      pageBack() {
         let page = getCurrentPages();
         if (page.length > 1) {
            wx.navigateBack();
         } else {
            console.warn("没有上一个页面栈");
         }
      },
      pageLink(path) {
         wx.navigateTo({
            url: "/pages" + path + "/index"
         })
      },
   }
   new Proxy(WxUtilObject, {
      get(...args) {
         console.log(args)
      }
   })
   return WxUtilObject
}