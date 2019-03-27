import React, { Component } from 'react';
import Verification from '../verification';
import Footer from 'src/component/footer/footer.js';
import img from 'src/assets/images/twothousand_kin/Verification/verifcation_fake654.png';

class VerificationFail extends Component {
  render () {
    return (
      <Verification
        topBg={img}
        middle={(
          <div className="whitepanel_more">
            <p>微信授权失败</p>
          </div>
        )}
        bottom={(
          <Footer/>
        )}
      />
    )
  }
}

export default VerificationFail;
