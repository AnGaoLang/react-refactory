import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { get, post } from 'src/utils/fetch';
import global from 'src/utils/global';
import Swiper from 'src/component/swiper/swiper';
import Footer from 'src/component/footer/footer';
import Score from 'src/component/score/score';
import './real.css';

import img1 from 'src/assets/images/twothousand_kin/banner1.png';
import img2 from 'src/assets/images/twothousand_kin/banner2.png';
import img3 from 'src/assets/images/twothousand_kin/banner3.jpg';
import img4 from 'src/assets/images/twothousand_kin/banner4.jpg';
import resultV from 'src/assets/images/common/result_v.png';

class Real extends Component {
  constructor() {
    super();
    this.state = {
      realPageH: '',
      styleObj: {
        position: 'static',
        marginTop: '.2733rem',
        fontSize: '9px'
      }
    };
    this.id = ''; // id
    // 在高度足够没有滚动条时，需要使用height: 100%;是盒子铺满页面，
    // 这种情况下，this.realPage的高度将被固定为视口高度，所有获取的高度不准，需要获取子节点的高度解决滚动条情况下的适配
    // this.realPage = React.createRef();
    this.boxPanel = React.createRef();
    this.list = [
      {
        imgUrl: img1
      },
      {
        imgUrl: img2
      },
      {
        imgUrl: img3
      },
      {
        imgUrl: img4
      }
    ];
  }

  componentDidMount() {
    let that = this;
    window.onload = () => {
      that.initialPage();
    };
    window.onresize = () => {
      that.initialPage();
    };
    this.getAdvertisement();
  }

  initialPage() {
    document.body.style.minHeight = this.boxPanel.current.offsetHeight + 'px';
  }

  getAdvertisement() {
    // get('/Common/getAdvertisement', {
    //   // 'scanId':'${id}',
    //   // 'tp': '${tp}',
    //   // 'latitude': latitude,
    //   // 'longitude': longitude
    // }).then((response) => {
    // })
  }

  // 传给子组件的ajax
  postScore(goal) {
    // post('/Product/saveCode', {
    //   'score': data,
    //   'id': this.id
    // }).then((data) => {
    //   if (data.result != 'SUCCESS') {
    //    alert(data.prompt);
    //   }
    // })
  }

  render() {
    return (
      <div
        className="Real_page"
        style={{ height: this.state.realPageH }}
        ref={this.realPage}
      >
        <div className="boxpanel clearfix" ref={this.boxPanel}>
          <div className="innerboxpanel">
            <Swiper>
              {this.list.map(item => {
                return (
                  <div className="swiper-slide" key={item.imgUrl.toString()}>
                    <img src={item.imgUrl} className="banner" />
                  </div>
                );
              })}
            </Swiper>
            <div className="btnpair clearfix">
              <div className="fl">
                <a>推文活动</a>
              </div>
              <div className="fr">
                <a>楼主地盘</a>
              </div>
            </div>
            <div className="cloud clearfix">
              <div className="text1">
                <span className="fl">首次扫码时间：2019-01-28 20:50:26</span>
                <span className="fr">扫码次数：1</span>
              </div>
              <div className="text2 clearfix">
                <div className="fl">
                  <div className="left-pic" style={{}} />
                </div>
                <div className="fr">
                  <ul>
                    {/* <li className='redtxt'>此二维码已被扫描1次,</li>
                    <li className='redtxt'>若产品为新开封,</li>
                    <li className='redtxt'>请鉴别真伪</li>
                    <li className='space'></li>
                    <li className='blacktxt'>dawdle</li>
                    <li className='blacktxt'>焦油量: <label>1mg</label></li>
                    <li className='blacktxt'>烟气一氧化碳量: <label>1mg</label></li>
                    <li className='blacktxt'>烟气烟碱量: <label>1mg</label></li> */}
                    <li className="result">
                      <span>
                        <br />
                        真品
                      </span>
                      <img src={resultV} height="183" width="43" />
                    </li>
                    <li className="blacktxt">dawdle</li>
                    <li className="blacktxt">
                      焦油量: <label>1mg</label>
                    </li>
                    <li className="blacktxt">
                      烟气一氧化碳量: <label>1mg</label>
                    </li>
                    <li className="blacktxt">
                      烟气烟碱量: <label>1mg</label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Score
              scoreAjax={goal => {
                this.postScore(goal);
              }}
            />
            <button
              className="cloudlink"
              id="btn"
              onClick={() => {
                this.props.history.push({ pathname: '/luckyDraw' });
              }}
            >
              <span>点击抽奖</span>
            </button>
            <Footer style={this.state.styleObj} />
          </div>
        </div>
      </div>
    );
  }
}

export default Real;
