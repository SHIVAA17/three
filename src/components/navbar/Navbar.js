import React from 'react'
import './Navbar.css';

import logo from '../../images/brand_logo.png';
const navbar = () => {
  return (
    <div>
        <div className='logo'>
            <img src={logo} alt='nike-logo'/>
        </div>
        <div className='options'>
            <a href=''> Menu</a>
            <a href=''> Location</a>
            <a href=''> About</a>
            <a href=''> Contact</a>


        </div>
    </div>
  )
}

export default navbar