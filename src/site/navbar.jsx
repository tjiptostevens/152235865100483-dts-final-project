import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { auth, logout } from '../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import useWindow from '../custom/useWindow'
import '../assets/css/navbar.css'
import logo from '../assets/img/logoh.png'

const Navbar = () => {
  const [user] = useAuthState(auth)
  const [dropDown, setDropDown] = useState(false)
  const { width } = useWindow()
  return (
    <>
      {/* {console.log(user)} */}
      <nav>
        <NavLink exact to="/">
          <div className="nav-logo">
            <img src={logo} alt="logo tambal ban" height="50px" />
          </div>
        </NavLink>
        {width > 450 ? (
          <div className="nav-link">
            <ul>
              <NavLink
                exact
                to="/"
                className={(isActive) => (isActive ? 'nav-link-active' : ' ')}
              >
                <li>HOME</li>
              </NavLink>
              <NavLink
                exact
                to="/about"
                className={(isActive) => (isActive ? 'nav-link-active' : ' ')}
              >
                <li>PROFIL PERUSAHAAN</li>
              </NavLink>
              {user ? (
                <>
                  <li onClick={() => setDropDown(!dropDown)}>
                    Hi, {user.displayName.split(' ')[0].toUpperCase()}{' '}
                    <img
                      src={user.photoURL}
                      alt="Profile"
                      style={{
                        height: '25px',
                        borderRadius: '5px',
                        marginLeft: '10px',
                      }}
                    />
                  </li>
                  {dropDown ? (
                    <div
                      className="nav-link menu-dropdown"
                      onMouseLeave={() => setDropDown(false)}
                    >
                      <ul>
                        <NavLink exact to="/profile">
                          <li onClick={() => setDropDown(false)}>
                            PROFIL SAYA
                          </li>
                        </NavLink>
                        |
                        <NavLink exact to="/mitra">
                          <li onClick={() => setDropDown(false)}>KEMITRAAN</li>
                        </NavLink>
                        |
                        {user ? (
                          <NavLink exact to="/">
                            <li onClick={() => logout()}>
                              <i className="bi bi-box-arrow-right"></i>
                            </li>
                          </NavLink>
                        ) : (
                          ''
                        )}
                      </ul>
                    </div>
                  ) : (
                    ''
                  )}
                </>
              ) : (
                <NavLink exact to="/login">
                  <li>LOGIN</li>
                </NavLink>
              )}
            </ul>
          </div>
        ) : (
          <div className="nav-link">
            <div
              style={{ padding: '25px', fontSize: '20px' }}
              onClick={() => setDropDown(!dropDown)}
            >
              {user ? (
                <img
                  src={user.photoURL}
                  alt="Profile"
                  style={{
                    height: '25px',
                    borderRadius: '5px',
                    marginLeft: '10px',
                  }}
                />
              ) : (
                <i className="bi bi-menu-down"></i>
              )}
            </div>
            {dropDown ? (
              <div className="nav-link menu-dropdown">
                <ul>
                  <NavLink exact to="/">
                    <li onClick={() => setDropDown(false)}>
                      <i className="bi bi-house"></i>
                    </li>
                  </NavLink>
                  |
                  <NavLink exact to="/about">
                    <li onClick={() => setDropDown(false)}>ABOUT</li>
                  </NavLink>
                  |
                  <NavLink exact to="/profile">
                    <li onClick={() => setDropDown(false)}>PROFILE</li>
                  </NavLink>
                  |
                  <NavLink exact to="/mitra">
                    <li onClick={() => setDropDown(false)}>KEMITRAAN</li>
                  </NavLink>
                  |
                  {user ? (
                    <NavLink exact to="/">
                      <li onClick={() => logout()}>
                        <i className="bi bi-box-arrow-right"></i>
                      </li>
                    </NavLink>
                  ) : (
                    <NavLink exact to="/login">
                      <li onClick={() => setDropDown(false)}>LOGIN</li>
                    </NavLink>
                  )}
                </ul>
              </div>
            ) : (
              ''
            )}
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar
