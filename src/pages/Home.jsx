import React from 'react'
import SimpleSlider from '../sliders/mainSlider/SimpleSlider'
import Promotions from '../sliders/promotions/Promotions'
import WhyUs from '../layout/WhyUs'
import Services from '../layout/Services'

const Home = () => {
  return (
    <div>
        <SimpleSlider />
        <Promotions />
        <WhyUs />
        <Services />
    </div>
  )
}

export default Home