import React, {Component} from 'react';
import { post } from 'src/utils/fetch';
import './score.css';

class Score extends Component {
  constructor (props) {
    super(props);
    this.star = ['nohigh', 'nohigh', 'nohigh', 'nohigh', 'nohigh'];
    this.state = {
      star: JSON.parse(JSON.stringify(this.star)),
      score: '0'
    }

    this.starClick = this.starClick.bind(this);
  }

  componentDidMount () {
    // $('.star span').on('click', function () {
    //     var index = $(this).index() + 1;
    //     $(this).prevAll().find('.high').css('z-index', 1)
    //     $(this).find('.high').css('z-index', 1)
    //     starRating = index * 2;

    //     $.ajax({
    //         async: false,
    //         type: 'post',
    //         traditional: true,
    //         url: sitePath + '/Product/saveCode',
    //         dataType: 'json',
    //         data: {
    //             'score': index,
    //             'id': '${id}'
    //         },
    //         success: function (data) {
    //             dataObj = data;
    //             if (dataObj.result != ajaxSuccess) {
    //                 alert(dataObj.prompt);
    //             }
    //         }
    //     });

    // })
  }

  starClick (e) {
    let currentSpan = e.target;
    // 若点击的是星星
    if (currentSpan.className == 'nohigh' || currentSpan.className == 'high') {
      let starArray = JSON.parse(JSON.stringify(this.star));
      let index = currentSpan.getAttribute('data-index');
      for (let i = 0; i <= index; i++) {
        starArray[i] = 'high';
      }
      this.setState({
        star: starArray
      })
      // 获取父组件传过来的ajax函数
      this.props.scoreAjax(index);
    }
  }

  render () {
    return (
      <div className='score clearfix'>
        <p className='score-word'>产品鉴赏：</p>
        <p className='star' onClick={this.starClick}>
          {
            this.state.star.map((item, index) => {
              return (<span className={item} data-index={index} key={`star${index}`}></span>)
            })
          }
        </p>
    </div>
    )
  }
}

export default Score;
