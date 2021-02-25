let res = {
   "code": 1,
   "msg": "参数获取成功",
   "time": "1589965102",
   "data": {
      "sdk": {
         "appId": "wx57d16e8f1328d782",
         "timeStamp": "1589965102",
         "nonceStr": "5ec4f12eeb8c0",
         "package": "prepay_id=wx201658278898929e77e3cdd91579776100",
         "signType": "MD5",
         "paySign": "C018C383D61F6BAEE30EE6FA11E1ACE4"
      },
      "order_data": { "total_fee": 1, "out_trade_no": "1589965102", "body": "就诊卡充值" }
   }
}
let initBridge = () => {
   window.WeixinJSBridge.invoke(
      'getBrandWCPayRequest', {
      'appId': res.data.sdk.appId, // 公众号名称，由商户传入
      'timeStamp': res.data.sdk.timeStamp, // 时间戳，自1970年以来的秒数
      'nonceStr': res.data.sdk.nonceStr, // 随机串
      'package': res.data.sdk.package,
      'signType': res.data.sdk.signType, // 微信签名方式：
      'paySign': res.data.sdk.paySign // 微信签名
   }, function (res) {
      alert(JSON.stringify(res))
      if (res.err_msg === 'get_brand_wcpay_request:ok') {
         // 使用以上方式判断前端返回,微信团队郑重提示：
         // res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
      }
   }
   )
}
let addEventBridge = () => {
   if (typeof WeixinJSBridge == "undefined") {
      if (document.addEventListener) {
         document.addEventListener('WeixinJSBridgeReady', initBridge, false);
         console.log("abcd")
      } else if (document.attachEvent) {
         document.attachEvent('WeixinJSBridgeReady', initBridge);
         document.attachEvent('onWeixinJSBridgeReady', initBridge);
      }
   }
}
export default addEventBridge

