import React from 'react'
import '../assets/css/footer.css'
const Footer = () => {
  return (
    <>
      <div className="w-100">
        <footer>
          <div className="w-100" style={{ height: '50px' }}></div>
          <div className="logo">
            <img src="./assets/img/logoh.png" alt="logo" height="50px" />
          </div>
          <div className="site-map col-md-12">
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
          <p className="mt-5 mb-3 text-muted">&copy; 2021-2022</p>{' '}
        </footer>
      </div>
    </>
  )
}

export default Footer
