import React, { useState } from 'react'
import SignIn from './signIn'
import logo from '../assets/img/logo512.png'
import '../assets/css/login.css'
import {
  auth,
  loginWithEmailPassword,
  registerWithEmailPassword,
} from '../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [user] = useAuthState(auth)
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: '',
    password: '',
    isRemember: false,
    type: '',
    message: '',
    error: '',
    vis: true,
    logOrReg: false,
  })
  // useEffect(() => {
  //   if (userType === undefined) {
  //     return
  //   } else {
  //     // functional setData
  //     return setData((prev) => ({ ...prev, logOrReg: true, type: userType }))
  //   }
  // }, [userType])

  const handleSubmit = async (e) => {
    e.preventDefault()
    let msg = await loginWithEmailPassword(data.email, data.password)
    console.log(msg)
    setData({ ...data, message: msg.name + ' : ' + msg.code, vis: false })
  }
  const handleRegister = async (e) => {
    let msg = await registerWithEmailPassword(data.email, data.password)
    setData({ ...data, message: msg.name + ' : ' + msg.code })
  }
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  if (user) {
    navigate('/', { replace: true })
  }
  return (
    <>
      {/* {console.log(data)} */}
      {data.vis === true ? (
        ''
      ) : (
        <div className="modal-window">
          <div className="col-md-6 col-11" style={{ borderRadius: '5px' }}>
            <div className="modal-title">
              <div>
                <h1>Message</h1>
              </div>
              <div
                style={{ cursor: 'pointer' }}
                onClick={() => setData({ ...data, message: '', vis: true })}
              >
                <i className="bi bi-x-square"></i>
              </div>
            </div>
            <hr />
            <div
              className="w-100 justify-content-around"
              style={{
                textAlign: 'justify',
                height: 'auto',
              }}
            >
              {/* <Register
                type={userType}
                handleClose={(e) => setData({ ...data, vis: true })}
              /> */}
              <div>
                <p>{data.message}</p>
                <button
                  className="btn btn-light"
                  onClick={() => setData({ ...data, message: '', vis: true })}
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="col-md-12 form-center text-center">
        <div
          className="col-md-6 d-none d-sm-block form-signin"
          style={{ alignSelf: 'flex-start', maxWidth: 'fit-content' }}
        >
          <img
            className="mb-4"
            src={logo}
            alt="logo kotak"
            width="200"
            height="200"
          />
        </div>

        <form className="col-md-6 form-signin" style={{ textAlign: 'left' }}>
          <h1 className="h3 mb-3 font-weight-normal">
            {data.logOrReg ? 'Daftar ' : 'Login '}
          </h1>
          <hr />

          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <input
            className="form-control"
            type="text"
            name="email"
            id="email"
            placeholder="Email address"
            required
            autoFocus
            onChange={handleChange}
          />
          <label className="sr-only" htmlFor="password">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            name="password"
            id="inputPassword"
            placeholder="Password"
            required
            onChange={handleChange}
          />
          {data.logOrReg ? (
            <div className="w-100" style={{ height: '25px' }}></div>
          ) : (
            <div className="form-check checkbox mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                name="isRemember"
                onChange={() => {
                  let is = data.isRemember
                  setData({ ...data, isRemember: !is })
                  // console.log(data.isRemember);
                }}
              />
              <label className="form-check-label">Ingat saya</label>
            </div>
          )}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
            }}
          >
            {data.logOrReg ? (
              <>
                <button className="btn btn-light" onClick={handleRegister}>
                  Daftar
                </button>
                <p style={{ padding: '15px', margin: 0 }}>- or -</p>
                <SignIn text="Daftar" />
              </>
            ) : (
              <>
                <button className="btn btn-light" onClick={handleSubmit}>
                  Login
                </button>
                <p style={{ padding: '15px', margin: 0 }}>- or -</p>
                <SignIn text="Login" />
              </>
            )}
          </div>
          <div className="w-100" style={{ height: '25px' }}></div>
          <hr />

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}
          >
            <span>{data.logOrReg ? 'Sudah ' : 'Buat '}punya akun?</span>
            <button
              className="btn btn-link"
              style={{ color: 'aqua', textDecoration: 'none' }}
              onClick={(e) => {
                e.preventDefault()
                setData({ ...data, logOrReg: !data.logOrReg })
              }}
            >
              <b>{data.logOrReg ? 'Login ' : 'Daftar '}Sekarang</b>
            </button>
            {/* <button
              className="btn btn-link"
              style={{ color: 'aqua', textDecoration: 'none' }}
              onClick={(e) => setData({ ...data, vis: false })}
            >
              <b>Daftar sebagai Mitra</b>
            </button> */}
          </div>
          <hr />
        </form>
      </div>
    </>
  )
}

export default Login
