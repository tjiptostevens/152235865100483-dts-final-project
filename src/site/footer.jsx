import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/footer.css'
import useWindow from '../custom/useWindow'
const Footer = () => {
  const { width } = useWindow()
  return (
    <>
      <div className="w-100" style={{ borderTop: '2px solid aqua' }}>
        <footer>
          <div className="w-100" style={{ height: '25px' }}></div>
          <div className="logo">
            <img src="./assets/img/logoh.png" alt="logo" height="50px" />
          </div>
          <div className="w-100" style={{ height: '50px' }}></div>
          <div className="site-map row col-md-12">
            <div className="col-md-3 col-6">
              <p>
                <b>Perusahaan</b>
              </p>
            </div>
            <div className="col-md-3 col-6">
              <p>
                <b>Bergabung </b>
              </p>
            </div>
            <div className="col-md-3 col-6">
              <p>
                <b>Karir</b>
              </p>
            </div>
            <div className="col-md-3 col-6">
              <p>
                <b>Hubungi kami</b>
              </p>
            </div>
          </div>

          <div className="w-100" style={{ height: '25px' }}></div>
          <hr />

          <div className="w-100" style={{ height: '25px' }}></div>
          <div className="connect col-md-12">
            <p>
              <b>Tetap terkoneksi</b>
            </p>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/tjiptostevens/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/tjiptostevens/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/tjiptostevens/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/tjiptostevens"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
            </ul>
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
