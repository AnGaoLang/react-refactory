export default global = {
  sitePath: '/huanghelou1916-h5',
  dataTablePageSize: 10,
  ajaxSuccess: 'SUCCESS',
  oss_out_url: 'https://lls-speaking.oss-cn-hangzhou.aliyuncs.com/', //阿里云OSS的外网访问链接
  imagePath: 'http://qr.hhl1916.com/huanghelou1916-images/' // 线上图片公共地址
}

// //防止返回后退键
// var XBack = {};
// (function(XBack) {
//     XBack.STATE = 'x - back';
//     XBack.element;
//     XBack.onPopState = function(event) {
//         event.state === XBack.STATE && XBack.fire();
//         XBack.record(XBack.STATE); //初始化事件时，push一下
//     };
//     XBack.record = function(state) {
//         history.pushState(state, null, location.href);
//     };
//     XBack.fire = function() {
//         var event = document.createEvent('Events');
//         event.initEvent(XBack.STATE, false, false);
//         XBack.element.dispatchEvent(event);
//     };
//     XBack.listen = function(listener) {
//         XBack.element.addEventListener(XBack.STATE, listener, false);
//     };
//     XBack.init = function() {
//         XBack.element = document.createElement('span');
//         window.addEventListener('popstate', XBack.onPopState);
//         XBack.record(XBack.STATE);
//     };
// })(XBack); // 引入这段js文件
// XBack.init();
// XBack.listen(function() {});

// //百度统计
// var _hmt = _hmt || [];
// (function() {
//   var hm = document.createElement("script");
//   hm.src = "https://hm.baidu.com/hm.js?433d133383b5415231238093d9749b9c";
//   var s = document.getElementsByTagName("script")[0]; 
//   s.parentNode.insertBefore(hm, s);
// })();
