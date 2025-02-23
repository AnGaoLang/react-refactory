(function flexible(window, document) {
  let docEl = document.documentElement;
  let dpr = window.devicePixelRatio || 1;

  // adjust body font size
  function setBodyFontSize() {
    if (document.body) {
      document.body.style.fontSize = 12 * dpr + 'px';
    } else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize);
    }
  }
  setBodyFontSize();

  // set 1rem = viewWidth / 10
  function setRemUnit() {
    let rem = docEl.clientWidth / 10;
    docEl.style.fontSize = rem + 'px';
  }

  setRemUnit();

  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit);
  window.addEventListener('pageshow', function(e) {
    if (e.persisted) {
      setRemUnit();
    }
  });

  // detect 0.5px supports
  if (dpr >= 2) {
    let fakeBody = document.createElement('body');
    let testElement = document.createElement('div');
    testElement.style.border = '.5px solid transparent';
    fakeBody.appendChild(testElement);
    docEl.appendChild(fakeBody);
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines');
    }
    docEl.removeChild(fakeBody);
  }

  // 禁止网页字体被放大
  // function handleFontSize() {
  //   // 设置网页字体为默认大小
  //   WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize': 0 });
  //   // 重写设置网页字体大小的事件
  //   WeixinJSBridge.on('menu:setfont', function () {
  //     WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize': 0 });
  //   });
  // }
  // if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
  //   handleFontSize();
  // } else {
  //   if (document.addEventListener) {
  //     document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
  //   } else if (document.attachEvent) {
  //     document.attachEvent("WeixinJSBridgeReady", handleFontSize);
  //     document.attachEvent("onWeixinJSBridgeReady", handleFontSize);
  //   }
  // }
})(window, document);
