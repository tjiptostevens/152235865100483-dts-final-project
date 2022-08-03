import React from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/css/navbar.css'
import logo from '../assets/img/logoh.png'
import useWindow from '../custom/useWindow'

const Navbar = () => {
  const { width } = useWindow()
  return (
    <>
      {console.log(width)}
      <nav>
        <NavLink to="/">
          <div className="nav-logo">
            <img src={logo} alt="logo tambal ban" height="50px" />
          </div>
        </NavLink>
        {width > 450 ? (
          <div className="nav-link">
            <ul>
              <NavLink to="/">
                <li>HOME</li>
              </NavLink>
              <NavLink to="/about">
                <li>ABOUT</li>
              </NavLink>
              <NavLink to="/login">
                <li>LOGIN</li>
              </NavLink>
            </ul>
          </div>
        ) : (
          <div className="nav-link">
            <div style={{ padding: '25px', fontSize: '20px' }}>
              <i className="bi bi-menu-down"></i>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar
