import React from 'react'
import "./Navbar.css"
import navlogo from './logo.png'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={navlogo} alt="" className='nav-logo'/>
        <p>Bảng điều kiển của Giảng Viên:</p>
      </div>
    </div>
  )
}

export default Navbar