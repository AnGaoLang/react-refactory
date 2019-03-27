import React, { Component } from 'react';
import Footer from 'src/component/footer/footer.js';
import './luckydraw.css';

class LuckyDraw extends Component {
  componentDidMount() {
    this.getPop(1, 1);

    this.giftlist = [
      {path: sitePath+"/imgs/twothousand/LuckyDraw/loubi2.png", text: "楼币",title:"恭喜你获得楼币",url:"http://wx.hhl1916.com/opc/ms/mall/index?openid=${openid}"},
      {path: sitePath+"/imgs/twothousand/LuckyDraw/fuka2.png", text: "福袋",title:"恭喜你获得虚拟礼品",url:"http://wx.hhl1916.com/opc/ms/order/queryOrderListPortal?back=gome&openid=${openid}"},
      {path: sitePath+"/imgs/twothousand/LuckyDraw/lihe2.png", text: "实物礼品" ,title:"恭喜你获得实物礼品",url:"http://wx.hhl1916.com/opc/ms/order/queryOrderListPortal?back=gome&openid=${openid}"},
      {path: sitePath+"/imgs/twothousand/LuckyDraw/hongbao2.png", text: "微信红包" ,title:"恭喜你获得微信红包",url:"http://wx.hhl1916.com/opc/ms/customer/toNewReg?openid=${openid}"},
      {path: sitePath+"/imgs/twothousand/LuckyDraw/loulou2.png", text: "谢谢惠顾",title:"谢谢惠顾",url:""},
      {path: sitePath+"/imgs/twothousand/LuckyDraw/xuni2.png",text: "虚拟礼品",tip: "虚拟礼品",title:"虚拟礼品",url:"http://wx.hhl1916.com/opc/ms/virtualOrder/queryVirtualOrderList?customerId=${customerId}&status=1&openid=${openid}"},
    ];
    this.actives = [];
    this.supreme = -1;
    this.lotterytime =0;
    this.giftInfo=[];
  }

  showAD() {
    layer.open({
      type: 1,
      skin: 'ad_popup',
      title: false,
      content:
        '<div class="ad_contain">' +
        '<a href="http://wx.hhl1916.com/opc/ms/wxForeign/r?fsr=dailyQuesActivity2"></a>' +
        '<span class="ad_count">' +
        '<span id="count_num" class="count_num">4 S</span>' +
        '</span>' +
        '</div>',
      btn: false,
      time: 4000,
      closeBtn: 0,
      shadeClose: false,
      shade: [0.1, '#fff'],
      area: ['95%', '7rem']
    });
    let timmer;
    let countNum = 4;
    timmer = setInterval(function() {
      countNum--;
      document.getElementById('count_num').innerHTML = countNum + ' S';
      countNum == 0 ? clearInterval(timmer) : '';
    }, 1000);
  }

  getPop(type, giftindex) {
    let that = this;
    switch (type) {
      case 7:
        layer.open({
          skin: 'popbg-3',
          title: false,
          content:
            '<div class="layermain layerflex">' +
            '       <p class="layermsg" ></p>' +
            '       <div class="layermsg-pic" >' +
            '         <p class="layermsg2">奖品已抽完,</p>' +
            '         <p class="layermsg2" >谢谢参与!</p>' +
            '       </div>' +
            '     </div>',
          closeBtn: 1,
          btn: false,
          shadeClose: true,
          area: ['95%', '11.713rem'],
          success: function() {
            that.showAD();
          }
        });
        break;
      case 6:
        layer.open({
          skin: 'popbg-3',
          title: false,
          content:
            '<div class="layermain layerflex">' +
            '       <p class="layermsg" ></p>' +
            '       <div class="layermsg-pic" >' +
            '         <p class="layermsg2">此烟为调制品,</p>' +
            '         <p class="layermsg2" >谢谢参与!</p>' +
            '       </div>' +
            '     </div>',
          closeBtn: 1,
          btn: false,
          shadeClose: true,
          area: ['95%', '11.713rem'],
          success: function() {
            that.showAD();
          }
        });
        document.addEventListener(
          'touchmove',
          function(e) {
            // e.preventDefault();
            console.log(e);
          },
          false
        );
        break;
      case 5:
        layer.open({
          skin: 'popbg-4',
          title: false,
          content:
            '<div class="layermain layerflex">' +
            '<div class="layerinside">' +
            '       <p class="layermsg" >抽奖次数已达上限！</p>' +
            '       <div class="layermsg-pic" >' +
            '         <p class="layermsg2" style="font-size: 14px;padding-top: .2rem;">请至1916沙龙公众号</p>' +
            '         <p class="layermsg2" style="font-size: 14px;">查看您的历史中奖信息</p>' +
            '       </div>' +
            '     </div>' +
            '</div>',
          closeBtn: 1,
          btn: false,
          shadeClose: true,
          area: ['95%', '11.713rem'],
          success: function() {
            that.showAD();
          }
        });
        break;
      case 4:
        layer.open({
          skin: 'popbg-1',
          title: false,
          content:
            '<div class="layermain" >' +
            '            <p class="layertitle" >' +
            giftInfo.title +
            '</p>' +
            '            <div class="layerimg"><img src="' +
            giftInfo.path +
            '" /></div>' + //1002替换
            '            <p class="layermsg3 mt3dian86" >' +
            giftInfo.tip +
            ' </p>' +
            '            <p class="layermsg4 mtdian46" >' +
            (giftlist[giftindex].url.length > 0
              ? '<a href="' + giftlist[giftindex].url + '" >点击查看</a>'
              : '') +
            ' </p>' +
            '     </div>',
          closeBtn: 1,
          btn: false,
          shadeClose: true,
          area: ['95%', '11.713rem'],
          success: function() {
            that.showAD();
          }
        });
        break;
      case 3:
        layer.open({
          skin: 'popbg-1',
          title: false,
          content:
            '         <div class="layermain-input">\n' +
            '                <p class="layertitle">请输入手机号</p>\n' +
            '                <div class="phone clearfix">\n' +
            '                    <div class="fl phoneIcon"><img src="' +
            sitePath +
            '/imgs/twothousand/LuckyDraw/mobile.png" /></div>\n' +
            '                    <input type="number" class="input" id="txtMobile" placeholder="请输入手机号">\n' +
            '                </div>\n' +
            '                <div class="phone password clearfix">\n' +
            '                    <div class="fl phoneIcon"><img src="' +
            sitePath +
            '/imgs/twothousand/LuckyDraw/password.png"/></div>\n' +
            '                    <input type="number" class="input" id="txtCode" placeholder="请输入验证码">\n' +
            '                    <span class="getCode fr" id="btnGet">获取验证码</span>\n' +
            '                </div>\n' +
            '                <div class="confirm"  ><a href="javascript:void(0);" onclick="goVerify()" id="btnGo" >确&nbsp&nbsp&nbsp&nbsp认</a></div>\n' +
            '                <p class="phonemsg" >手机号仅限本次活动领奖使用，将严格保密，请安心填写。</p>\n' +
            '             </div>',
          closeBtn: 1,
          btn: false,
          shadeClose: false,
          area: ['95%', '11.713rem'],
          success: function() {
            that.showAD();
          }
        });
        break;
      case 2:
        layer.open({
          skin: 'popbg-2',
          title: false,
          content:
            '<div class="layermain" >' +
            '       <p class="layermsg2" >您已成功领取诚信奖励，<br>重复操作无效。<br>更多福利活动，等你参与！</p>' +
            '       <p class="layermsg4 mtdian46" ><a href="https://mp.weixin.qq.com/mp/homepage?biz=MzIwNzE0MDUyMw%3D%3D&hid=2&sn=65a537709d90d71f01b6364c3c93ba07&scene=18">更多活动></a></p>' +
            '     </div>',
          closeBtn: 1,
          btn: false,
          shadeClose: true,
          area: ['95.5%', '7.5666rem'],
          end: function() {
            //关闭弹出层
            /* window.opener=null;
                window.open('','_self');
                window.close(); */
            layer.close();
          },
          success: function() {
            that.showAD();
          }
        });
        break;
      case 1:
        layer.open({
          skin: 'popbg-2',
          title: false,
          content:
            '<div class="layermain">' +
            '       <p class="layermsg2">此烟为试制品， <br>没有扫码验真的福利噢， <br> 但还有其他福利活动，等您参与呢！ </p>' +
            '       <p class="layermsg4 mtdian46" ><a href="https://mp.weixin.qq.com/mp/homepage?biz=MzIwNzE0MDUyMw%3D%3D&hid=2&sn=65a537709d90d71f01b6364c3c93ba07&scene=18" >点击查看></a> </p>' +
            '     </div>',
          closeBtn: 1,
          btn: false,
          shadeClose: true,
          area: ['95.5%', '7.5666rem'],
          end: function() {
            //关闭弹出层
            /*
                window.opener=null;
                window.open('','_self');
                window.close();
                */
            layer.close();
          },
          success: function() {
            that.showAD();
          }
        });
        break;
    }
  }

  render() {
    return (
      <div className="LuckyDraw">
        <div className="whitepanel">
          <div className="introduce">
            <div id="eventName">&nbsp;</div>
            <div>点击抽奖，大奖等你来领哦！</div>
          </div>
          <div id="randomize">
            <div className="container">
              <div className="row">
                {/* <div className="col-sm-4 fl">
                  <div id="machine1" className="randomizeMachine">
                    <i className="loubi"></i>
                                    <i className="fuka"></i>
                                    <i className="lihe"></i>
                                    <i className="hongbao"></i>
                                    <i className="loulou"></i>
                                    <i className="xuni"></i>
                  </div>
                  <div id="machine1Result" className="col-xs-4 machineResult"></div>
                </div>
                <div className="col-sm-4 fl">
                  <div id="machine2" className="randomizeMachine">
                    <i className="loubi"></i>
                                    <i className="fuka"></i>
                                    <i className="lihe"></i>
                                    <i className="hongbao"></i>
                                    <i className="loulou"></i>
                                    <i className="xuni"></i>								
                  </div>
                  <div id="machine2Result" className="col-xs-4 machineResult"></div>
                </div>
                <div className="col-sm-4 fl"> */}
                {/* <div id="machine3" className="randomizeMachine">
                    <i className="loubi"></i>
                                    <i className="fuka"></i>
                                    <i className="lihe"></i>
                                    <i className="hongbao"></i>
                                    <i className="loulou"></i>
                                    <i className="xuni"></i>								
                  </div>	
                  <div id="machine3Result" className="col-xs-4 machineResult" ></div>
                </div> */}
                <a id="randomizeButton" href="javascript:void(0);" />
              </div>
            </div>
          </div>
          <div className="smoke">
            <Footer
              style={{ position: 'fixed', bottom: 0, marginBottom: '0px' }}
              bottom={<p className="footer_border" />}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LuckyDraw;
