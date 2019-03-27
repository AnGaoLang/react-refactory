import React, { Component } from 'react';
import Verification from '../verification';
import Footer from 'src/component/footer/footer.js';
import img from 'src/assets/images/twothousand_kin/Verification/verifcation_error654.png';
import { Context } from 'src/context';

function VerificationError(props) {
  // console.log(props)
  const goIndex = function() {
    props.history.push({pathname: '/', search: props.location.search});
  };
  return (
    <Verification
      topBg={img}
      middle={(
        <div className="whitepanel_error">
          <p>您输入的验证码有误</p>
          <p>请重新输入</p>
        </div>
      )}
      bottom={(
        <Footer
        top={(<a href="javascript:void(0);" onClick={() => {goIndex()}}>重新输入</a>)}
      />
      )}
    />
  )
}

function Consumer(props) {
  return (
    <Context.Consumer>
      {values => (<VerificationError {...props} value={values}/>)}
    </Context.Consumer>
  )
}

export default Consumer;

// export default verificationError;
