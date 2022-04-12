import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo main_white.png'
import { HiX, HiMenu } from 'react-icons/hi'

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const clickHandler = ( ) => {
    setToggle(!toggle);
  }

  return (
    <nav className='nav_main'>
      <div className='nav_container'>
        <div className='menu_toggler' onClick={clickHandler}>
          {toggle ? <HiX size={34}/> : <HiMenu size={34}/>}
        </div>
        <button className='nav_elements' id="specs">Specs</button>

        <div className='logo_container'>
          <a href="/" target="_blank" rel="noopener noreferrer"><img className='logo' src={logo} alt=""/></a>
        </div>

        <button className='nav_elements'>Gallery</button>

        <div className='nav_btn_container'>
          <button className=''>Buy Now</button>
        </div>
      </div>
      <div className={toggle ? 'menu_side' : 'hide'}>
        <a>Specs</a>
        <a>Gallery</a>
      </div>
    </nav>
  )

}
export default Navbar