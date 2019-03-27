import * as React from 'react';
import './footer.css';

class Footer extends React.Component {
  render () {
    return (
      <div className="footer" style={this.props.style}>
          {this.props.top}
          {/* <a href="javascript:void(0);" id="vericationBtn" onclick="checkCode()">提&nbsp;&nbsp;交</a> */}
          <p>本平台含有烟草内容 18岁以下谢绝关注</p>
          <p>服务支持：武汉黄鹤楼漫天游文化传播有限公司</p>
          {this.props.bottom}
      </div>
    )
  }
}

export default Footer;
