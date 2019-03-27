import React, { Component } from 'react';
import Verification from '../verification';
import Footer from 'src/component/footer/footer.js';
import { post } from 'src/utils/fetch.js';
import img from 'src/assets/images/twothousand_kin/Verification/verifcation_fake654.png';

class VerificationFake extends Component {
  goIndex () {
    console.log(this.props);
    this.props.history.push({pathname: '/', search: this.props.location.search});
  }

  componentDidMount () {
    post('/Common/JsSign', {
        // "url" : location.href.split('#')[0]
      }).then((responde) => {
        // wx.config({ 
        //   debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。   
        //   appId: data.appId, // 必填，公众号的唯一标识
        //   timestamp: data.timestamp, // 必填，生成签名的时间戳
        //   nonceStr: data.nonceStr, // 必填，生成签名的随机串
        //   signature: data.signature,// 必填，签名，见附录1
        //   jsApiList: [
        //     'scanQRCode',// 微信扫一扫接口
        //   ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2 
        // }); 
        // wx.error(function(res) {
        //   alert("出错了：" + res.errMsg);//这个地方的好处就是wx.config配置错误，会弹出窗口哪里错误，然后根据微信文档查询即可。
        // });

        // wx.ready(function() {
        //   wx.checkJsApi({
        //     jsApiList : ['scanQRCode'],
        //     success : function(res) {}
        //   });
        // });

        // //点击按钮扫描二维码
        // console.log(this.btn.current);
        // $(".whitepanellink").click(function(){
        //   wx.scanQRCode({
        //     needResult : 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        //     scanType : [ "qrCode"], // 可以指定扫二维码还是一维码，默认二者都有
        //     success : function(res) {
        //       let result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
        //       //window.location.href = result;//因为我这边是扫描后有个链接，然后跳转到该页面
        //     },
        //     error : function(){
        //       console.log('123');
        //     }
        //   });
        // });

    })
  }
  
  render () {
    return (
      <Verification
        topBg={img}
        middle={(
          <div className="whitepanel_more">
            <p>此二维码查询有误</p>
          </div>
        )}
        bottom={(
          <Footer
          top={(<a href="javascript:void(0);" ref={this.btn} onClick={() => {this.goIndex()}}>重新扫码</a>)}
        />
        )}
      />
    )
  }
}

export default VerificationFake;
