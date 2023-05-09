import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {RxHamburgerMenu} from 'react-icons/rx'
import {RxCross1} from 'react-icons/rx'


const NavbarWeb = () => {

const [showHide, setShowHide] = useState(false);

const showSubNav = ()=>{
    setShowHide(!showHide);
  }
  return (
   <div>
      {/* Wide Screen Navbar  */}
     <div className='navbar__web'>
       <div className="logo">StoreKom</div>
       
       <div className="navbar__links">
         <NavLink className='navbar__link' to="/">Home</NavLink>
         <NavLink className='navbar__link' to="/products">Products</NavLink>
         <NavLink className='navbar__link' to="/about">About Us</NavLink>
         <NavLink className='navbar__link' to="/contact">Contact Us</NavLink>
       </div>
       <div className="auth__links">
         <NavLink className='navbar__link' to="/register">Register</NavLink>
         <NavLink className='navbar__link' to="/login">Login</NavLink>
       </div>
     </div>
    
     {/* Small Screen Navbar  */}
     <div className='navbar__mob'>
       <div className="logo">StoreKom</div>
       <div className="burger" onClick={showSubNav}> {!showHide ? <RxHamburgerMenu /> : <RxCross1 />} </div>
     </div>
      { showHide &&  <div className="subnav">
                        <div className="navbar__links">
                          <NavLink className='navbar__link' to="/">Home</NavLink>
                          <NavLink className='navbar__link' to="/products">Products</NavLink>
                          <NavLink className='navbar__link' to="/about">About Us</NavLink>
                          <NavLink className='navbar__link' to="/contact">Contact Us</NavLink>
                        </div>
                        <div className="auth__links">
                          <NavLink className='navbar__link' to="/register">Register</NavLink>
                          <NavLink className='navbar__link' to="/login">Login</NavLink>
                        </div>
                      </div>}
   </div>)
}

export default NavbarWeb