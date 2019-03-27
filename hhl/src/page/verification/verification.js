import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Footer from 'src/component/footer/footer.js';
import ajax from 'src/utils/fetch.js';
import './verification.css';

class verification extends Component {
  // constructor () {
  //   super();
  //   this.text = React.createRef();
  //   this.state = {
  //     style: {position: 'absolute'},
  //     id: '46501d72-a42a-438c-908b-83bad134354c'
  //   };

  //   this.iosReszie = this.iosReszie.bind(this);
  // }

  // 根据视口比例重置页面最小高度
  resizeWindow () {
    let windowInnerHeight = window.innerHeight; //获取当前浏览器窗口高度
    let windowInnerWidth = window.innerWidth; // 获取浏览器窗口宽度
    let ratio = windowInnerWidth / windowInnerHeight; // 视口宽高比
    if (ratio > 0.636) {
      // 当比例大于0.636时，重置页面最小高度
      document.body.style.minHeight = windowInnerWidth / 0.636 + 'px';
    }
  }

  // ios下键盘调用取消后，页面还原
  // iosReszie () {
  //   setTimeout(function () {
  //     let scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0;
  //     window.scrollTo(0, Math.max(scrollHeight - 1, 0));
  //   }, 100);
  // }

  // 页面渲染完成后
  componentDidMount () {
    let that = this;
    this.resizeWindow()
    window.onresize = function () {
      that.resizeWindow()
    };
  }

  componentWillUnnount () {
    window.onresize = null;
  }

  // checkCode () {
  //   let that = this;
  //   let reg=/^[0-9]{4}$/;
  //   let textValue = this.text.current.value;
  //   if(textValue == ''){
  //     alert('请输入验证码');
  //     return false;
  //   }
  //   if(!reg.test(textValue)){
  //     alert('验证码为4位数字');
  //     return false;
  //   }
  //   ajax('/Code/checkVerifyCode', {'id': that.state.id, 'code': textValue})
  //     .then((response) => {
  //       console.log(response)
  //       const history = createHashHistory();
  //       console.log(history);
  //       history.push('/login');
  //       // dataObj=JSON.parse(result);
  //       // if(dataObj.result=='SUCCESS'){
  //       //   if(!dataObj.follow){
  //       //     location=sitePath+'/User/WxFollow?id=' + that.state.id;
  //       //   }else if(dataObj.test==1){
  //       //     location=sitePath+'/Product/RealTest?id=' + that.state.id;
  //       //   }else if(dataObj.count==1){
  //       //     location=sitePath+'/Product/RealFirst?id=' + that.state.id;
  //       //   }else{
  //       //     location=sitePath+'/Product/Real?id=' + that.state.id;    			
  //       //   }        		
  //       // }else{
  //       //   if(dataObj.verifyTimes<3){
  //       //     location='VerificationMore?id=' + that.state.id;
  //       //   }else{
  //       //     location='VerificationError?id=' + that.state.id;        			
  //       //   }
  //       // }
  //     })
  // }

  render () {
    return (
      <div className="container">
        <div className="container_bg">
          <div className='whitepanel_top' style={{'backgroundImage': `url(${this.props.topBg})`}}>
            {this.props.middle}
            {/* <input placeholder='请输入验证码'
              id='verificationTetx'
              maxLength='4'
              type='number'
              onBlur={this.iosReszie}
              ref={this.text}/> */}
          </div>
          <div className='whitepanel_bottom'></div>
        </div>
        {this.props.bottom}
        {/* <Footer
          style={this.state.style}
          top={(<a href="javascript:void(0);" id="vericationBtn" onClick={() => {this.checkCode()}}>提&nbsp;&nbsp;交</a>)}
        /> */}
      </div>
    )
  }
}

export default verification;
