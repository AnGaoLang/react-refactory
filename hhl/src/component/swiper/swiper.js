import React, { Component } from 'react';
import 'swiper/dist/css/swiper.min.css'
import SwiperPlugin from 'swiper/dist/js/swiper.min.js';

class Swiper extends Component {
  componentDidMount () {
    new SwiperPlugin(".swiper-container", {
      speed: 400,
      spaceBetween: 0,
      autoplay: true
    })
  }

  render () {
    return (
      <>
      <div className='swiper-container'>
        <div className='swiper-wrapper'>
          {this.props.children}
        </div>
        <div className='swiper-pagination'></div>
      </div>
      <div className='swiper-underline'></div>
      </>
    )
  }
}

export default Swiper;
