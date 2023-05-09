import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import p1 from '../../assets/p1.png';
import p2 from '../../assets/p2.jpg';
import p3 from '../../assets/p3.png';
import p4 from '../../assets/p4.png';
import p5 from '../../assets/p5.jpg';
import p6 from '../../assets/p6.png';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000,
      cssEase: "ease",
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="main__slider">
        <Slider {...settings}>
          <div className="slider__item">
            <img className="slider_imgs" src={p1} alt="" />
          </div>
          <div className="slider__item">
          <img className="slider_imgs" src={p2} alt="" />
          </div>
          <div className="slider__item">
          <img className="slider_imgs" src={p3} alt="" />
          </div>
          <div className="slider__item">
          <img className="slider_imgs" src={p4} alt="" />
          </div>
          <div className="slider__item">
          <img className="slider_imgs" src={p5} alt="" />
          </div>
          <div className="slider__item">
          <img className="slider_imgs" src={p6} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}