import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTelegram} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'

const Footer = () => {

const year = ()=>{
  return new Date().getFullYear()
}

  return (
    <div className='footer'>
        <div className="socials">
            <h3>Our Social Media Accounts : </h3>
            <div className="social__icons">
                <a href='#' className="icon">
                  <FaFacebook />
                </a>

                <a href='#' className="icon">
                  <FaInstagram />
                </a>

                <a href='#' className="icon">
                  <FaTelegram />
                </a>

                <a href='#' className="icon">
                  <FaWhatsapp />
                </a>
            </div>
        </div>
          <hr />
          <br />
        <div className="our__phones">
            <h3>Phone Numbers : </h3>
            <div className="phones">
                <a href='#' className="phone">
                  0667 89 77 52
                </a>
                 / 
                <a href='#' className="phone">
                  07 77 61 89 22
                </a>
            </div>
        </div>
          <hr />
        <div className="copyright">
          All Rights Reserved {year()} &copy; <span style={{'color': 'black', 'marginLeft': '1rem', 'fontWeight': '700'}}> StoreKom</span> 
        </div>
    </div>
  )
}

export default Footer