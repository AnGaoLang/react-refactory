import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Verification from '../verification';
import Footer from 'src/component/footer/footer.js';
import {get, post} from 'src/utils/fetch.js';
import img from 'src/assets/images/twothousand_kin/Verification/verifcation_top654.png';

class VerificationIndex extends Component {
  constructor (props) {
    super(props);
    console.log(this.props);
    this.text = React.createRef();
    this.state = {
      style: {position: 'absolute'},
      id: '46501d72-a42a-438c-908b-83bad134354c'
    };

    this.iosReszie = this.iosReszie.bind(this);
  }

  // ios下键盘调用取消后，页面还原
  iosReszie () {
    setTimeout(function () {
      let scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0;
      window.scrollTo(0, Math.max(scrollHeight - 1, 0));
    }, 100);
  }
  
  checkCode () {
    let that = this;
    let reg=/^[0-9]{4}$/;
    let textValue = this.text.current.value;
    if(textValue == ''){
      alert('请输入验证码');
      return false;
    }
    if(!reg.test(textValue)){
      alert('验证码为4位数字');
      return false;
    }
    let dataObj = {
      result: 'SUCCESS',
      follow: true,
      test: 0,
      count: 0
      // result: '1',
      // verifyTimes: 0
    }
    if (dataObj.result=='SUCCESS') {
      if (!dataObj.follow) {
        that.props.history.push({pathname: '/WxFollow', search: `?id=${that.state.id}`});
      }else if (dataObj.test == 1) {
        that.props.history.push({pathname: '/RealTest', search: `?id=${that.state.id}`});
      }else if (dataObj.count == 1) {
        that.props.history.push({pathname: '/RealFirst', search: `?id=${that.state.id}`});
      } else {
        that.props.history.push({pathname: '/Real', search: `?id=${that.state.id}`});
      }        		
    }else{
      if (dataObj.verifyTimes < 3) {
        // that.props.history.push({pathname: '/VerificationMore', search: `?id=${that.state.id}`});
        that.props.history.push({pathname: '/VerificationFake', search: `?id=${that.state.id}`});
      } else {
        that.props.history.push({pathname: '/VerificationError', search: `?id=${that.state.id}`});
      }
    }
    // post('/Code/checkVerifyCode', {'id': that.state.id, 'code': textValue}).then((response) => {
    //     console.log(response)
    //     // dataObj=JSON.parse(result);
    // })
  }

  componentDidMount () {
    get('/Home/init', {
      openid: 'oqxQpvx-4dHtqq-N5c-XV8sEFxlk'
    })
  }
  
  render () {
    return (
      <Verification
        topBg={img}
        middle={(
          <input placeholder='请输入验证码'
              id='verificationTetx'
              maxLength='4'
              type='number'
              onBlur={this.iosReszie}
              ref={this.text}
            />
        )}
        bottom={(
          <Footer
          style={this.state.style}
          top={(<a href="javascript:void(0);" id="vericationBtn" onClick={() => {this.checkCode()}}>提&nbsp;&nbsp;交</a>)}
          />
        )}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  console.log(ownProps);
  return {a: 1}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(dispatch);
  console.log(ownProps);
  return {
    b: (dispatch) => dispatch(action)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VerificationIndex)
