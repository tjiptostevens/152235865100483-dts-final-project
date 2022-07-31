import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav>
        <NavLink to="/">
          <div className="logo">
            <img
              src="./assets/img/logoh.png"
              alt="logo tambal ban"
              height="50px"
            />
          </div>
        </NavLink>
      </nav>
    </>
  )
}

export default Navbar
