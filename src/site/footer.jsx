import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/footer.css'
import useWindow from '../custom/useWindow'
const Footer = () => {
  const { width } = useWindow()
  return (
    <>
      <div className="w-100">
        <footer>
          <div className="w-100" style={{ height: '50px' }}></div>
          <div className="logo">
            <img src="./assets/img/logoh.png" alt="logo" height="50px" />
          </div>
          <div className="w-100" style={{ height: '50px' }}></div>
          <div className="site-map row col-md-12">
            <div className="col-md-3">
              <p>
                <b>Perusahaan</b>
              </p>
            </div>
            <div className="col-md-3">
              <p>
                <b>Bergabung </b>
              </p>
            </div>
            <div className="col-md-3">
              <p>
                <b>Karir</b>
              </p>
            </div>
            <div className="col-md-3">
              <p>
                <b>Hubungi kami</b>
              </p>
            </div>
          </div>
          <hr />
          <div className="connect col-md-12">
            <p>
              <b>Tetap terkoneksi</b>
            </p>
          </div>
          <p className="mt-5 mb-3 text-muted" style={{ textAlign: 'center' }}>
            Copyright &copy; 2022. DTS Final Project{width > 450 ? ' ' : <br />}
            <Link to="" style={{ textDecoration: 'none', color: 'gray' }}>
              Tjipto Steven Senjaya | 152235865100-483
            </Link>
          </p>
        </footer>
      </div>
    </>
  )
}

export default Footer
