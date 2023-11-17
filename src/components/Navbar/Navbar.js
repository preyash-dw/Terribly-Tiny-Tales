import React from 'react'
import "./Navbar.css"
import logo from "../../assets/ttt.svg"
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="left">
        <span><img src={logo} alt="Logo" /></span>
        <span className='words'>STORIES</span>
      </div>
      <div className="right">
        <div className='course'>Courses</div>
      </div>
    </div>
  )
}

export default Navbar
