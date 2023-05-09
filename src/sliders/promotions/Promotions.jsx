import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import pr1 from '../../assets/pr1.jpg';
import pr2 from '../../assets/pr1.jpg';
import pr3 from '../../assets/pr2.jpg';
import pr4 from '../../assets/pr3.jpg';
import pr5 from '../../assets/pr4.jpg';

const Promotions = () => {

  function getCurrentWidth(){
    return {
      	width: window.innerWidth,
    }
}

  const [size, setSize] = useState(getCurrentWidth());
  const [cards, setCards] = useState(4);

  useEffect(() => {
    const updateDimension = () => {
        setSize(getCurrentWidth())
    }

    if (size.width > 960){
      setCards(4)
    }else if (size.width <= 960 && size.width > 768){
      setCards(3)
    }else if (size.width <= 768 && size.width > 540){
      setCards(2)
    }else if (size.width <= 540){
      setCards(1)
    }
    window.addEventListener('resize', updateDimension);

    return(() => {
        window.removeEventListener('resize', updateDimension);

    })
}, [size.width])


  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: cards,
    slidesToScroll: 1
  };
  return (
    <>
      <h1 className="promo__title">PROMOTIONS</h1>
      <div className="main__promo">
        <Slider {...settings}>
      
        <div className="card__container">
            <div className="card">
              <h3>Peoduct 1</h3>
              <div className="card__img">
                <img src={pr1} alt="" />
              </div>
              <div className="card__btn">
                <a href="#" className="btn">buy now</a>
              </div>
            </div>
          </div>
      
          <div className="card__container">
            <div className="card">
              <h3>Peoduct 1</h3>
              <div className="card__img">
                <img src={pr2} alt="" />
              </div>
              <div className="card__btn">
                <a href="#" className="btn">buy now</a>
              </div>
            </div>
          </div>
         
          <div className="card__container">
            <div className="card">
              <h3>Peoduct 1</h3>
              <div className="card__img">
                <img src={pr3} alt="" />
              </div>
              <div className="card__btn">
                <a href="#" className="btn">buy now</a>
              </div>
            </div>
          </div>
      
          <div className="card__container">
            <div className="card">
              <h3>Peoduct 1</h3>
              <div className="card__img">
                <img src={pr4} alt="" />
              </div>
              <div className="card__btn">
                <a href="#" className="btn">buy now</a>
              </div>
            </div>
          </div>
      
          <div className="card__container">
            <div className="card">
              <h3>Peoduct 1</h3>
              <div className="card__img">
                <img src={pr5} alt="" />
              </div>
              <div className="card__btn">
                <a href="#" className="btn">buy now</a>
              </div>
            </div>
          </div>
      
        </Slider>
      </div>
    </>)
}
export default Promotions;