import React from 'react'
import {FaShippingFast} from 'react-icons/fa'
import {MdGppGood} from 'react-icons/md'
import {FaHandsHelping} from 'react-icons/fa'
import {GiReceiveMoney} from 'react-icons/gi'


const WhyUs = () => {
  return (
    <>
      <h1 className='why__title'>WHY STOREKOM ?</h1>
      <div className='why__main'>
        <div className="item">
          <div className='icon'>
            <FaShippingFast />
          </div>
          <h3>Fast Delivery</h3>
        </div>

        <div className="item">
          <div className='icon'>
            <MdGppGood />
          </div>
          <h3>High Security</h3>
        </div>

        <div className="item">
          <div className='icon'>
            <FaHandsHelping />
          </div>
          <h3>Partners</h3>
        </div>

        <div className="item">
          <div className='icon'>
            <GiReceiveMoney />
          </div>
          <h3>Easy To Pay</h3>
        </div>
      </div>
    </>
  )
}

export default WhyUs