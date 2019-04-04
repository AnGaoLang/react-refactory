import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Verification from '../verification';
import Footer from 'src/component/footer/footer.js';
import {get, post} from 'src/utils/fetch.js';
import img from 'src/assets/images/twothousand_kin/Verification/verifcation_top654.png';
import { changeOpenid } from 'src/redux/actions/actions.js';

class VerificationIndex extends Component {
  constructor (props) {
    super(props);
    this.text = React.createRef();
    this.state = {
      style: {position: 'absolute'},
      id: props.openId
    };
    console.log(this.state.id);
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
        that.props.history.push({pathname: '/WxFollow'});
      }else if (dataObj.test == 1) {
        that.props.history.push({pathname: '/RealTest'});
      }else if (dataObj.count == 1) {
        that.props.history.push({pathname: '/RealFirst'});
      } else {
        that.props.history.push({pathname: '/Real'});
      }        		
    }else{
      if (dataObj.verifyTimes < 3) {
        // that.props.history.push({pathname: '/VerificationMore', search: `?id=${that.state.id}`});
        that.props.history.push({pathname: '/VerificationFake'});
      } else {
        that.props.history.push({pathname: '/VerificationError'});
      }
    }
    // post('/Code/checkVerifyCode', {'id': that.state.id, 'code': textValue}).then((response) => {
    //     console.log(response)
    //     dataObj=JSON.parse(result);
    // })
  }

  componentDidMount () {
    get('/Home/init').then(res => {
      console.log(res.status)
      console.log(res.json())
      console.log(res.json().then(r => {
        console.log(r)
      }));
    })
  }
  
  render () {
    return (
      <Verification
        topBg={img}
        middle={(
          <div>
          <input placeholder={this.props.a}
              id='verificationTetx'
              maxLength='4'
              type='number'
              onBlur={this.iosReszie}
              ref={this.text}
            />
          </div>
          
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
  return {
    openId: state.openID
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeOpenId: (action) => dispatch(action)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VerificationIndex)
